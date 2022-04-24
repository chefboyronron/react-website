import React, { useState } from "react";
import { Anchor, Drawer, Button } from 'antd';
const { Link } = Anchor;

const MenuItems = [
    { key: 'hero', label: 'Home' },
    { key: 'about', label: 'About' },
    { key: 'feature', label: 'Features' },
    { key: 'works', label: 'How It Works' },
    { key: 'faq', label: 'FAQ' },
    { key: 'pricing', label: 'Pricing' },
    { key: 'contact', label: 'Contact' },
];

function Appheader(){

    const [visible, setVisible] = useState(false);
    const showDrawer = () => {
        setVisible(true);
    };
    const onClose = () => {
        setVisible(false);
    };

    return (
        <div className="container-fluid">
            <div className="header">
                <div className="logo">
                    <i className="fas fa-bolt"></i>
                    <a href="https://google.com">ReactJS Website</a>
                </div>

                <div className="mobileHidden">
                    <Anchor targetOffset="65">
                        {MenuItems.map((item)=>{
                            return(
                                <Link href={'#' + item.key} title={item.label} key={item.key} />
                            );
                        })}
                    </Anchor>
                </div>

                <div className="mobileVisible">
                    <Button type="primary" onClick={showDrawer}>
                        <i className="fa fa-bars"></i>
                    </Button>
                    <Drawer placement="right" closable={false} onClose={onClose} visible={visible} width="200">
                        <Anchor targetOffset="65">
                            {MenuItems.map((item)=>{
                                return(
                                    <Link href={'#' + item.key} title={item.label} key={item.key} />
                                );
                            })}
                        </Anchor>
                    </Drawer>
                </div>

            </div>
        </div>
    );
}

export default Appheader;