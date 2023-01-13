import { Link, Head } from '@inertiajs/inertia-react';
import {
    Container,
    Box,
    Typography,
} from '@mui/material';

const linkStyles = {
    color: 'gray',
    textDecoration: 'underline',
    marginLeft: '1rem'
}
const linkAreaStyles = {
    p: '1rem', 
    textAlign: 'center'
}

export default function Welcome(props) {

    return (
        <>
            <Head title="Welcome" />
            <Container>
                <Box sx={{margin: '10rem auto 1rem'}}>
                    <Typography variant="h4" sx={{textAlign: 'center'}}>Chirper</Typography>
                    <Box
                        component="img"
                        alt="chirper-icon"
                        src="../images/chirper-icon.png" //use this method of file path. vite does the work.
                        sx={{margin: '1rem auto'}}
                    />
                </Box>
                <Box sx={{margin: '1rem auto'}}>
                    {props.auth.user ? (
                        <Box sx={linkAreaStyles}>
                            <Link href={route('dashboard')} style={linkStyles}>
                                Dashboard
                            </Link>
                        </Box>
                    ) : (
                        <Box sx={linkAreaStyles}>
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
            </Container>
        </>
    );
}
