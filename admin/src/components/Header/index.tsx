import React from 'react';
import MenuIcon from '@mui/icons-material/Menu'; // Material-UI Menu Icon
import { Button } from '@mui/material';

interface HeaderProps {
    onMenuClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onMenuClick }) => {
    return (
        <header className="bg-[#111C44] text-white shadow-md px-[40px] py-[10px]">
            <div className="max-w-7xl  ">
                <div className="flex flex-row-reverse items-center justify-end h-16 gap-5">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <img
                            src="/images/logo.png" // Replace with your logo URL
                            alt="Logo"
                            className="h-12 w-12"
                        />
                    </div>

                    {/* Menu Icon (for side navigation) */}
                    <div className="flex items-center">
                        <Button
                            variant="outlined"
                            onClick={onMenuClick}
                            className="text-white focus:outline-none"
                        >
                            <MenuIcon className="h-6 w-6" />
                        </Button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
