"use client"

import { Card, CardContent } from "@/components/ui/card";

export const Promotions = () => {
    return (
        <section className="mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="bg-gradient-to-r from-green-600 to-green-700 text-white">
                    <CardContent className="p-6">
                        <h3 className="text-xl font-semibold mb-2">Get the Chow Combo now</h3>
                        <p className="text-2xl font-bold">₦2200</p>
                    </CardContent>
                </Card>
                <Card className="bg-gradient-to-r from-purple-600 to-purple-700 text-white">
                    <CardContent className="p-6">
                        <h3 className="text-xl font-semibold mb-2">Send packages easily with relay!</h3>
                    </CardContent>
                </Card>
            </div>
        </section>
    );
};
