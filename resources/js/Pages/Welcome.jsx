import { Link, Head } from '@inertiajs/inertia-react';
import {
    Container,
    Box
} from '@mui/material';

const linkStyles = {
    color: 'gray',
    textDecoration: 'underline',
    marginLeft: '1rem'
}

export default function Welcome(props) {

    return (
        <>
            <Head title="Welcome" />
            <Container>
                <Box sx={{position: 'fixed', top: '0', right: '0'}}>
                    {props.auth.user ? (
                        <Link href={route('dashboard')} style={linkStyles}>
                            Dashboard
                        </Link>
                    ) : (
                        <Box sx={{p: '1rem'}}>
                            <Link href={route('login')} style={linkStyles}>
                                Log in
                            </Link>

                            <Link
                                href={route('register')}
                                style={linkStyles}
                            >
                                Register
                            </Link>
                        </Box>
                    )}
                </Box>
                <Box sx={{margin: '10rem auto', border: 'solid gray 1px'}}>
                        <Box
                            component="img"
                            alt="chirper-icon"
                            src="{{ asset('images/chirper-icon.png') }}" 
                        />
                </Box>
            </Container>
        </>
    );
}
