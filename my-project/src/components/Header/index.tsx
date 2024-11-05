import React from 'react';
import TopBar from './top';
import Navbar from './bottom';

export default function Header() {
    return (
        <div className="flex flex-col">
            <TopBar />
            <Navbar />
        </div>
    );
}
