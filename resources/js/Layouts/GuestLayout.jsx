import { Link } from '@inertiajs/inertia-react';
import {
    Box
} from '@mui/material';

export default function Guest({ children }) {
    return (
        <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100">
            <div>
                <Link href="/">
                    <Box
                        component="img"
                        alt="chirper-logo"
                        src="../images/chirper-icon.png"
                        sx={{height: '100px'}}
                    />
                </Link>
            </div>

            <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">
                {children}
            </div>
        </div>
    );
}
