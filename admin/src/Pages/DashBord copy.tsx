import React, { useState } from 'react';
import Header from '../components/Header';
import Aside from '../components/Aside';

export default function DashBord() {
    const [asideOpen, setAsideOpen] = useState(false);

    const toggleAside = () => {
        setAsideOpen(!asideOpen);
    };
    return (
        <div className="p-0">
            <Header onMenuClick={toggleAside} />
            <Aside open={asideOpen} onClose={toggleAside} />
        </div>
    );
}
