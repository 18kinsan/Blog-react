import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import '../App.css'
import "antd/dist/antd.css";
import Foto from '../logo/jum.jpg';
import { Typography, Icon, Col, Row } from 'antd';

const { Title, Text } = Typography;

class Contact extends React.Component{
    render(){
        return(
            <div className="kontak">
                <Row>
                <div style={{textAlign:'center', margin:'30px'}}>
                <Col span={8}><Icon type="linkedin" style={{ fontSize: '100px', color: '#08c' }}></Icon>
                <br/><Title level={4}><Text  type="warning">friday andita</Text></Title>
                </Col>
                <Col span={8}><Icon type="github" style={{ fontSize: '100px', color: '#08c' }}></Icon>
                <br/><Title level={4}><Text  type="warning">18kinsan</Text></Title></Col>
                <Col span={8}><Icon type="instagram" style={{ fontSize: '100px', color: '#08c' }}></Icon>
                <br/><Title level={4}><Text  type="warning">@fridayars</Text></Title></Col>
                </div>
                </Row>
                <Row>
                <div style={{textAlign:'center', margin:'30px'}}>
                <Col span={6} offset={4}><Icon type="phone" style={{ fontSize: '100px', color: '#08c' }}></Icon>
                <br/><Title level={4}><Text  type="warning">+62 813 5765 2067</Text></Title></Col>
                <Col span={6} offset={3}><Icon type="mail" style={{ fontSize: '100px', color: '#08c' }}></Icon>
                <br/><Title level={4}><Text  type="warning">fridayandita@mail.ugm.ac.id</Text></Title></Col>
                </div>
                </Row>
                <Row>
                <div style={{textAlign:'center', margin:'30px'}}>
                <Col span={12} offset={6}><Icon type="poweroff" style={{ fontSize: '100px', color: '#08c' }}></Icon>
                <br/><Title level={4}><Text  type="warning">Khusnul Khotimah</Text></Title></Col>
                </div>
                </Row>
            </div>
        );
    }
}

export default Contact;