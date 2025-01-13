// app/streaming/page.tsx
"use client";

import { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Loader2 } from 'lucide-react';

interface StreamData {
    event: string;
    data: Array<{
        agentName: string;
        messages: string[];
    }>;
}

export default function StreamingPage() {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [content, setContent] = useState<string>('');
    const [error, setError] = useState<string>('');
    const [question, setQuestion] = useState<string>('');

    const responseRef = useRef<HTMLDivElement>(null);

    const parseStreamMessage = (line: string): StreamData | null => {
        try {
            const jsonStr = line.replace('data:', '');
            return JSON.parse(jsonStr) as StreamData;
        } catch (e) {
            console.error('Error parsing JSON:', e);
            return null;
        }
    };

    const handleStream = async (): Promise<void> => {
        if (!question.trim()) {
            setError('Please enter a question');
            return;
        }

        setIsLoading(true);
        setContent('');
        setError('');

        try {
            const response = await fetch('https://startrz-devi.hf.space/api/v1/prediction/e54adffc-ae77-42e5-9fc0-c4584e081093', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    question: question.trim(),
                    streaming: true
                })
            });

            if (!response.ok) {
                throw new Error(`Request failed: ${response.status}`);
            }

            const reader = response.body?.getReader();
            const decoder = new TextDecoder();

            if (!reader) {
                throw new Error('No reader available');
            }

            let buffer = '';

            while (true) {
                const { done, value } = await reader.read();
                if (done) break;

                buffer += decoder.decode(value, { stream: true });

                const messages = buffer.split('\n');
                buffer = messages.pop() || '';

                for (const msg of messages) {
                    if (msg.startsWith('data:')) {
                        const parsedData = parseStreamMessage(msg);
                        if (parsedData?.data?.[0]?.messages?.[0]) {
                            const newMessage = parsedData.data[0].messages[0];
                            setContent(prev => {
                                if (!prev) return newMessage;
                                return newMessage;
                            });
                            if (responseRef.current) {
                                responseRef.current.scrollTop = responseRef.current.scrollHeight;
                            }
                        }
                    }
                }
            }

        } catch (err) {
            const errorMessage = err instanceof Error ? err.message : 'An unknown error occurred';
            setError(`Error: ${errorMessage}`);
            console.error('Detailed error:', err);
        } finally {
            setIsLoading(false);
        }
    };



    const handleStreamTest = async () => {
        if (!question.trim()) return;

        setIsLoading(true);
        try {
            const response = await fetch('https://startrz-devi.hf.space/api/v1/prediction/e54adffc-ae77-42e5-9fc0-c4584e081093', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    question: question.trim(),
                    streaming: true
                })
            });

            if (!response.ok) throw new Error(`Request failed: ${response.status}`);

            if (!response.body) throw new Error('No response body');

            const reader = response.body.getReader();
            const decoder = new TextDecoder();

            while (true) {
                const { done, value } = await reader.read();
                if (done) break;

                const chunk = decoder.decode(value);
                console.log('Raw chunk:', chunk);

                const lines = chunk.split('\n');
                for (const line of lines) {
                    if (line.startsWith('data:')) {
                        try {
                            const jsonStr = line.replace('data:', '');
                            const parsed = JSON.parse(jsonStr);
                            console.log('Parsed message:', parsed);
                        } catch (e) {
                            console.error('Parse error:', e);
                        }
                    }
                }
            }
        } catch (err) {
            console.error('Stream error:', err);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <main className="min-h-screen bg-gray-50">
            <div className="flex h-screen">
                {/* Left side - Input */}
                <div className="w-1/3 p-4 border-r border-gray-200">
                    <h1 className="text-2xl font-bold text-gray-900 mb-4">AI Assistant</h1>

                    <div className="space-y-4">
                        <Input
                            placeholder="Enter your question..."
                            value={question}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setQuestion(e.target.value)}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter' && !isLoading) {
                                    handleStream();
                                }
                            }}
                            disabled={isLoading}
                            className="w-full"
                        />
                        <Button
                            onClick={handleStream}
                            disabled={isLoading || !question.trim()}
                            className="w-full"
                        >
                            {isLoading ? (
                                <>
                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                    Loading...
                                </>
                            ) : (
                                'Ask'
                            )}
                        </Button>
                    </div>
                </div>

                {/* Right side - Response */}
                <div className="flex-1 p-4">
                    <Card className="h-full bg-white">
                        <CardContent
                            className="p-6 h-full overflow-y-auto"
                            ref={responseRef}
                        >
                            {error ? (
                                <div>
                                    <p className="text-red-500 font-semibold">Error occurred:</p>
                                    <p className="text-red-500">{error}</p>
                                </div>
                            ) : content ? (
                                <div className="prose prose-sm max-w-none">
                                    <p className="whitespace-pre-wrap">{content}</p>
                                </div>
                            ) : (
                                <p className="text-gray-400">Enter a question and click Ask to get started...</p>
                            )}
                        </CardContent>
                    </Card>
                </div>
            </div>
        </main>
    );
}
