import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Logo from '../icons/Logo';
import { Slide } from '@mui/material';

const pages = ['Products', 'Features', 'Marketplace', 'Company'];

const ResponsiveAppBar = () => {
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
        null
    );
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
        null
    );

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const ButtonProps = ({ style }: { style?: {} } = {}) => {
        return {
            style: {
                textTransform: 'none' as unknown as undefined,
                fontFamily: `Inter`,
                fontSize: 16,
                ...(style ? style : {}),
            },
            onClick: handleCloseNavMenu,
            sx: {
                mr: 2,
                color: 'white',
                display: 'block',
            },
        };
    };

    return (
        <AppBar position="static">
            <Container maxWidth="lg">
                <Toolbar disableGutters>
                    <Logo />
                    <Box
                        sx={{ display: { md: 'none' }, flexGrow: 1, mr: 1 }}
                    ></Box>
                    <Box
                        sx={{ display: { xs: 'none', md: 'flex' }, mr: 2 }}
                    ></Box>
                    <Box
                        sx={{
                            flexGrow: 1,
                            display: { xs: 'none', md: 'flex' },
                        }}
                    >
                        {pages.map((page) => (
                            <Button
                                {...ButtonProps()}
                                key={page}
                                onClick={handleCloseNavMenu}
                                sx={{
                                    ...ButtonProps().sx,
                                    my: 2,
                                }}
                            >
                                {page}
                            </Button>
                        ))}
                    </Box>

                    <Box
                        sx={{
                            display: { xs: 'none', md: 'flex' },
                            my: 3,
                        }}
                    >
                        <Button {...ButtonProps()}>Log in</Button>
                        <Button
                            {...ButtonProps()}
                            color="secondary"
                            variant="contained"
                            sx={{
                                color: 'white',
                                display: 'block',
                            }}
                        >
                            Start free trial
                        </Button>
                    </Box>
                    <Box
                        sx={{
                            display: { xs: 'flex', md: 'none' },
                            my: 3,
                        }}
                    >
                        <Typography color="secondary.light">
                            <IconButton
                                size="large"
                                aria-label="hamburger"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                            >
                                <MenuIcon color="inherit" />
                            </IconButton>
                        </Typography>
                        <Menu
                            PaperProps={{ sx: { width: '100vw', padding: 2 } }}
                            id="menu-appbar"
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'center',
                            }}
                            transitionDuration={300}
                            TransitionComponent={Slide}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'center',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'flex', md: 'none' },
                            }}
                        >
                            <Box
                                sx={{ display: 'flex' }}
                                style={{ marginBottom: 13 }}
                            >
                                <Logo />
                                <Box sx={{ flexGrow: 1 }} />
                                <Typography color="secondary">
                                    <IconButton
                                        size="small"
                                        aria-controls="menu-appbar"
                                        aria-haspopup="true"
                                        onClick={handleCloseNavMenu}
                                        color="inherit"
                                    >
                                        <CloseIcon color="inherit" />
                                    </IconButton>
                                </Typography>
                            </Box>
                            {pages.map((page) => (
                                <MenuItem
                                    key={page}
                                    onClick={handleCloseNavMenu}
                                    disableGutters
                                >
                                    <Typography textAlign="left">
                                        {page}
                                    </Typography>
                                </MenuItem>
                            ))}
                            <Button
                                {...ButtonProps({
                                    style: { width: '100%', marginBottom: 20 },
                                })}
                                color="info"
                                variant="contained"
                                onClick={handleCloseNavMenu}
                                sx={{
                                    my: 2,
                                    color: 'white',
                                    display: 'block',
                                }}
                            >
                                Start free trial
                            </Button>
                            <Typography
                                color="secondary.dark"
                                textAlign="center"
                            >
                                Existing customer? <a>Log in</a>
                            </Typography>
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default ResponsiveAppBar;
