import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import '../App.css'
import "antd/dist/antd.css";
import Foto from '../logo/jum.jpg';
import { Typography, Card, Col, Row } from 'antd';

const { Title, Text } = Typography;

const { Meta } = Card;

class Profile extends React.Component{
    render(){
        return(
        <div className="foto" style={{ padding: '20px' }}>
        <Row gutter={16}>
            <Col span={8}>
                <Card
                    hoverable
                    style={{ width: 310 }}
                    cover={<img alt="foto" src={Foto} />}
                >
                    <Meta
                    title="Jumuah"
                    description="Budak Proker"
                    />
                </Card>
            </Col>
                <Col span={8}>
                    
                    <Card title="Nama Lengkap" bordered={false}>Friday Andita Rachmad Santoso</Card>
                    <br/><br/>
                    <Card title="Tempat, Tanggal Lahir" bordered={false}>Jombang, 18 September 1998</Card>
                    <br/><br/>
                    <Card title="Kebangsaan" bordered={false}>Indonesia</Card>
                </Col>
                <Col span={8}>
               
                    
                    <Card title="Nama Panggilan" bordered={false}>Day, Jum, Pret</Card>
                    <br/><br/>
                    <Card title="Alamat" bordered={false}>Sleman, Yogyakarta</Card>
                    <br/><br/>
                    <Card title="Status" bordered={false}>Masih Berjuang</Card>
                </Col>
            </Row>
            </div>
            
            
        );
    }
}

export default Profile;