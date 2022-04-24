import React from "react";
import { Row, Col } from 'antd';
import { Card } from 'antd';

const image1 = process.env.PUBLIC_URL + '/assets/images/modern-design.jpg';
const image2 = process.env.PUBLIC_URL + '/assets/images/clean-design.jpg';
const image3 = process.env.PUBLIC_URL + '/assets/images/great-support.jpg';
const image4 = process.env.PUBLIC_URL + '/assets/images/easy-customise.jpg';
const image5 = process.env.PUBLIC_URL + '/assets/images/unlimited-features.jpg';
const image6 = process.env.PUBLIC_URL + '/assets/images/advanced-option.jpg';

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
                    <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
                        <Card
                        hoverable
                        cover={<img alt="Modern Design" src={image1} />}
                        >
                        <Meta title="Modern Design" />
                        </Card>
                    </Col>
                    <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
                        <Card
                        hoverable
                        cover={<img alt="Test" src={image2} />}
                        >
                        <Meta title="Clean and Elegant" />
                        </Card>
                    </Col>
                    <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
                        <Card
                        hoverable
                        cover={<img alt="Test" src={image3} />}
                        >
                        <Meta title="Great Support" />
                        </Card>
                    </Col>
                    <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
                        <Card
                        hoverable
                        cover={<img alt="Test" src={image4} />}
                        >
                        <Meta title="Easy to customise" />
                        </Card>
                    </Col>
                    <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
                        <Card
                        hoverable
                        cover={<img alt="Test" src={image5} />}
                        >
                        <Meta title="Unlimited Features" />
                        </Card>
                    </Col>
                    <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
                        <Card
                        hoverable
                        cover={<img alt="Test" src={image6} />}
                        >
                        <Meta title="Advanced Options" />
                        </Card>
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default AppFeature;