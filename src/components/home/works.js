import React from 'react';
import { Modal, Button } from 'antd';

class AppWorks extends React.Component {

    state = {
        loading: false,
        visible: false,
    };
    
    showModal = () => {
        this.setState({
            visible: true,
        });
    };

    handleCancel = () => {
        this.setState({ visible: false });
    };

    render() {
        const { visible } = this.state;
        return(
            <div id="works" className='block worksBlock'>
                <div className='container-fluid'>
                    <div className='titleHolder'>
                        <h2>How it Works</h2>
                        <p>Velit necessitatibus officiis repudiandae est deserunt delectus dolorem iure porro distinctio fuga</p>
                    </div>
                    <div className='contentHolder'>
                        <Button type="primary" onClick={this.showModal}>
                            <i className="fa fa-play"></i>
                        </Button>
                    </div>
                    <Modal visible={visible} title="ML | Cecilion ng Mundo" onCancel={this.handleCancel} footer={null}>
                        <iframe className='b0' width="100%" height="315" src="https://www.youtube.com/embed/znxhvGGN6yQ" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
                    </Modal>
                </div>
            </div>
        );
    }
}

export default AppWorks;