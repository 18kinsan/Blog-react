import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import '../App.css'
import "antd/dist/antd.css";
import Foto from '../logo/jum.jpg';
import { Typography, Card, Col, Row } from 'antd';

import axios from 'axios';

const { Title, Text } = Typography;

const { Meta } = Card;

class PersonList extends React.Component{
    state = {
        persons: []
      }
    
      componentDidMount() {
        axios.get(`https://my-json-server.typicode.com/18kinsan/latihan_pwa_api/mahasiswa`)
          .then(res => {
            const persons = res.data;
            this.setState({ persons });
          })
      }
    render(){
        return(
        <div className="person" style={{ padding: '30px' }}>
        <Row gutter={16}>
                <Col span={8}>
                <ul>
                { this.state.persons.map(person =>
                    <Card title="Nama Lengkap" bordered={false}>{person.name}</Card>)}
                </ul>
                </Col>
            </Row>
        
      
        </div>
            
            
        )
    }
}

export default PersonList;