import React, { useState } from 'react';
import {
    Drawer,
    List,
    ListItem,
    ListItemText,
    Collapse,
    Typography,
    Box,
} from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const Aside: React.FC<{ open: boolean; onClose: () => void }> = ({
    open,
    onClose,
}) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const handleDropdownClick = () => {
        setDropdownOpen(!dropdownOpen);
    };

    return (
        <Drawer anchor="left" open={open} onClose={onClose}>
            <Box sx={{ width: 250, padding: 2 }}>
                <Typography variant="h6" gutterBottom>
                    Navigation
                </Typography>
                <List>
                    <ListItem component="li" onClick={handleDropdownClick}>
                        <ListItemText primary="Home" />
                        {dropdownOpen ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
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
                    </Collapse>
                </List>
            </Box>
        </Drawer>
    );
};

export default Aside;
