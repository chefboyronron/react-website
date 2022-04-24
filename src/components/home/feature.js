import React from "react";
import { Row, Col } from 'antd';
import { Card } from 'antd';

const items = [
    {
        key: 0,
        title: 'Modern Design',
        image: 'https://raw.githubusercontent.com/chefboyronron/react-website/master/public/assets/images/modern-design.jpg'
    },
    {
        key: 1,
        title: 'Clean and Elegant',
        image: 'https://raw.githubusercontent.com/chefboyronron/react-website/master/public/assets/images/clean-design.jpg'
    },
    {
        key: 2,
        title: 'Great Support',
        image: 'https://raw.githubusercontent.com/chefboyronron/react-website/master/public/assets/images/great-support.jpg'
    },
    {
        key: 3,
        title: 'Easy to Customise',
        image: 'https://raw.githubusercontent.com/chefboyronron/react-website/master/public/assets/images/easy-customise.jpg'
    },
    {
        key: 4,
        title: 'Unlimited Features',
        image: 'https://raw.githubusercontent.com/chefboyronron/react-website/master/public/assets/images/unlimited-features.jpg'
    },
    {
        key: 5,
        title: 'Advanced Options',
        image: 'https://raw.githubusercontent.com/chefboyronron/react-website/master/public/assets/images/advanced-option.jpg'
    }
];

const { Meta } = Card;

function AppFeature() {
    return (
        <div id="feature" className="block featureBlock bgGray">
            <div className="container-fluid">
                <div className="titleHolder">
                    <h2>Key Features and Benefits</h2>
                    <p>Obcaecati consequatur libero repudiandae, aperiam itaque laborum!</p>
                </div>
                <Row gutter={[16, 16]}>
                    {items.map((item)=> {
                        return (
                            <Col xs={{span:24}} sm={{span: 12}} md={{span: 12}} lg={{span: 8}} key={item.key}>
                                <Card hoverable cover={<img alt={item.title}  src={item.image}/>}>
                                    <Meta title={item.title} />
                                </Card>
                            </Col>
                        );
                    })}
                </Row>
            </div>
        </div>
    );
}

export default AppFeature;