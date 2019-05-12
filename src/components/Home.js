import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import '../App.css'
import "antd/dist/antd.css";
import Foto from '../logo/jum.jpg';
import Bg from '../logo/header-bg.jpg';
import { Typography, Avatar, Button } from 'antd';

const { Title, Text } = Typography;

const UserList = ['FRIDAY', 'ANDITA', 'RACHMAD', 'SANTOS0'];
const colorList = ['#7265e6', '#00a2ae', '#00C14D', '#C10000'];


  

class Home extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          user: UserList[0],
          color: colorList[0],
        };
      }
    
    
      changeUser = () => {
        const index = UserList.indexOf(this.state.user);
        this.setState({
          user: index < UserList.length - 1 ? UserList[index + 1] : UserList[0],
          color: index < colorList.length - 1 ? colorList[index + 1] : colorList[0],
        });
      }
    render(){
        return(

                <div className="foto">
                    <br/><br/>
                    <div style={{textAlign:'center' }}>
                    <Avatar style={{ backgroundColor: this.state.color, verticalAlign: 'middle' }} size={200}>
                    {this.state.user}
                    </Avatar>
                    <br/><br/>
                    <Button size="medium" style={{ verticalAlign: 'middle' }} onClick={this.changeUser}>
                    Change
                    </Button>
                    </div>
                    <br/><br/>
                    <div style={{textAlign:'center' }}>
                        <Title><Text type="warning">Computer and Information System</Text></Title>
                        <Title level={2}><Text type="warning"><i>The Cloner</i></Text></Title>
                        
                    </div>
                    <br/>
                </div>
            
        );
    }
}

export default Home;