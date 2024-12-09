import React, { ReactNode, useState } from 'react';
import Header from '../Header';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import {
    Button,
    Collapse,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
} from '@mui/material';
import { Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { languageState } from '../../assets/States/mainAtom';

const drawerWidth = 240;

interface Props {
    /**
     * Injected by the documentation to work in an iframe.
     * Remove this when copying and pasting into your project.
     */
    children: ReactNode;
    window?: () => Window;
}
const LanguageSelect = () => {
    const [language, setLanguage] = useRecoilState(languageState);

    // const [language, setLanguage] = useState<'az' | 'en' | 'ru'>('en'); // Default language

    const handleChange = (event: any) => {
        setLanguage(event.target.value);
        console.log(`Language changed to: ${event.target.value}`); // Replace this with your logic
    };

    return (
        <FormControl
            className="!fixed top-2 right-2 bg-white"
            variant="outlined"
            size="small"
            sx={{ minWidth: 120 }}
        >
            <InputLabel id="language-select-label">Language</InputLabel>
            <Select
                labelId="language-select-label"
                value={language}
                onChange={handleChange}
                label="Language"
            >
                <MenuItem value="en">English</MenuItem>
                <MenuItem value="az">Azerbaijani</MenuItem>
                <MenuItem value="ru">Russian</MenuItem>
            </Select>
        </FormControl>
    );
};

export function ResponsiveDrawer(props: Props) {
    const { window, children } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [isClosing, setIsClosing] = React.useState(false);

    const handleDrawerClose = () => {
        setIsClosing(true);
        setMobileOpen(false);
    };

    const handleDrawerTransitionEnd = () => {
        setIsClosing(false);
    };

    const handleDrawerToggle = () => {
        if (!isClosing) {
            setMobileOpen(!mobileOpen);
        }
    };
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [dropdownOpen2, setDropdownOpen2] = useState(false);

    const handleDropdownClick = () => {
        setDropdownOpen(!dropdownOpen);
    };
    const drawer = (
        <div>
            <Toolbar className="flex justify-center">
                <img
                    src="/images/logo.png" // Replace with your logo URL
                    alt="Logo"
                    className="h-12 w-12"
                />
            </Toolbar>
            <Divider />
            <List>
                <Button className="w-full" variant="text">
                    <ListItem component="li" onClick={handleDropdownClick}>
                        <ListItemText primary="Home" />
                        {dropdownOpen ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                </Button>

                <Collapse
                    in={dropdownOpen}
                    timeout="auto"
                    unmountOnExit
                    className="w-full"
                >
                    <List component="div" disablePadding>
                        <ListItem component="li" sx={{ pl: 4 }}>
                            <Link to={'/home/hero'} className="w-full">
                                <ListItemText
                                    primary="Hero"
                                    className="w-full"
                                />
                            </Link>
                        </ListItem>
                        <ListItem component="li" sx={{ pl: 4 }}>
                            <Link to={'/home/statistics'} className="w-full">
                                <ListItemText
                                    primary="Statistics"
                                    className="w-full"
                                />
                            </Link>
                        </ListItem>
                        <ListItem component="li" sx={{ pl: 4 }}>
                            <Link to={'/home/partners'} className="w-full">
                                <ListItemText
                                    primary="Partners"
                                    className="w-full"
                                />
                            </Link>
                        </ListItem>
                    </List>
                </Collapse>
                {/* <Button className="w-full">
                    <ListItem component="li" onClick={handleDropdownClick}>
                        <ListItemText primary="Home" />
                        {dropdownOpen ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                </Button>

                <Collapse in={dropdownOpen} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItem component="li" sx={{ pl: 4 }}>
                            <Link to={'/home/hero'}>
                                <ListItemText primary="Hero" />
                            </Link>
                        </ListItem>
                        <ListItem component="li" sx={{ pl: 4 }}>
                            <ListItemText primary="Section 2" />
                        </ListItem>
                        <ListItem component="li" sx={{ pl: 4 }}>
                            <ListItemText primary="Section 3" />
                        </ListItem>
                    </List>
                </Collapse> */}
            </List>
            <List>
                <Button className="w-full" variant="text">
                    <ListItem
                        component="li"
                        onClick={() => setDropdownOpen2(!dropdownOpen2)}
                    >
                        <ListItemText primary="SErvices" />
                        {dropdownOpen ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                </Button>

                <Collapse
                    in={dropdownOpen2}
                    timeout="auto"
                    unmountOnExit
                    className="w-full"
                >
                    <List component="div" disablePadding>
                        <ListItem component="li" sx={{ pl: 4 }}>
                            <Link to={'/ServicesCategory'} className="w-full">
                                <ListItemText
                                    primary="Services Category"
                                    className="w-full"
                                />
                            </Link>
                        </ListItem>
                        <ListItem component="li" sx={{ pl: 4 }}>
                            <Link to={'/Services'} className="w-full">
                                <ListItemText
                                    primary="Services"
                                    className="w-full"
                                />
                            </Link>
                        </ListItem>
                        <ListItem component="li" sx={{ pl: 4 }}>
                            <Link to={'/home/partners'} className="w-full">
                                <ListItemText
                                    primary="Partners"
                                    className="w-full"
                                />
                            </Link>
                        </ListItem>
                    </List>
                </Collapse>
            </List>
            <Divider />
            <List>
                {['All mail', 'Trash', 'Spam'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </div>
    );

    // Remove this const when copying and pasting into your project.
    const container =
        window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            ></AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onTransitionEnd={handleDrawerTransitionEnd}
                    onClose={handleDrawerClose}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': {
                            boxSizing: 'border-box',
                            width: drawerWidth,
                        },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': {
                            boxSizing: 'border-box',
                            width: drawerWidth,
                        },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                className="relative"
                component="main"
                sx={{
                    flexGrow: 1,
                    p: 3,
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                }}
            >
                {children} <LanguageSelect />
            </Box>
        </Box>
    );
}

const useLayout = (children: ReactNode) => {
    return <ResponsiveDrawer>{children}</ResponsiveDrawer>;
};

export default useLayout;
