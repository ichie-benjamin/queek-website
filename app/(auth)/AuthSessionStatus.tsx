import { HTMLProps } from 'react';

interface AuthSessionStatusProps extends HTMLProps<HTMLDivElement> {
    status?: string;
    className?: string;
}

const AuthSessionStatus = ({
                               status,
                               className = '',
                               ...props
                           }: AuthSessionStatusProps) => (
    <>
        {status && (
            <div
                className={`${className} font-medium text-sm text-green-600`}
                {...props}>
                {status}
            </div>
        )}
    </>
);

export default AuthSessionStatus
