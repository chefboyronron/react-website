import React from "react";
import { Menu } from 'antd';

const MenuItems = [
    { key: 'home', label: 'Home' },
    { key: 'about', label: 'About' },
    { key: 'features', label: 'Features' },
    { key: 'howitworks', label: 'How It Works' },
    { key: 'faq', label: 'FAQ' },
    { key: 'pricing', label: 'Pricing' },
    { key: 'contact', label: 'Contact' },
];

function Appheader(){
    return (
        <div className="container-fluid">
            <div className="header">
                <div className="logo">
                    <i className="fas fa-bolt"></i>
                    <a href="https://google.com">ReactJS Website</a>
                </div>
                <Menu mode="horizontal" defaultSelectedKeys={['home']}>
                    {MenuItems.map((item)=>{
                        return (
                            <Menu.Item key={item.key}>{item.label}</Menu.Item>
                        );
                    })}
                </Menu>
            </div>
        </div>
    );
}

export default Appheader;