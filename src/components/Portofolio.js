import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import '../App.css'
import "antd/dist/antd.css";
import Foto from '../logo/jum.jpg';
import { Typography, Card, Progress } from 'antd';

const { Title, Text } = Typography;

const tabList= [{
    key: 'pr',
    tab: 'Premiere Pro',
  }, {
    key: 'il',
    tab: 'Illustrator',
  }, {
    key: 'af',
    tab: 'After Effect',
  }, {
    key: 'ms',
    tab: 'Ms Office',
  }, {
    key: 'an',
    tab: 'Android Studio',
  }, {
    key: 'vi',
    tab: 'Visual Studio',
  }];
  
  const contentList = {
    pr: <Progress percent={75} type="circle"  />,
    il: <Progress percent={40} type="circle" />,
    af: <Progress percent={25} type="circle" />,
    ms: <Progress percent={100} type="circle" />,
    an: <Progress percent={35} type="circle" />,
    vi: <Progress percent={70} type="circle" />
  };
  
  const tabListNoTitle = [{
    key: 'Teamwork',
    tab: 'Teamwork',
  }, {
    key: 'Laravel',
    tab: 'Laravel',
  }, {
    key: 'HTML',
    tab: 'HTML 5',
  }, {
    key: 'CSS',
    tab: 'CSS',
  }, {
    key: 'JAVA',
    tab: 'JAVA',
  }, {
    key: 'PHP',
    tab: 'PHP',
  }];
  
  const contentListNoTitle = {
    Teamwork: <Progress percent={100} />,
    Laravel: <Progress percent={55} status="active" />,
    HTML: <Progress percent={80} status="active" />,
    CSS: <Progress percent={65} status="active" />,
    JAVA: <Progress percent={35} status="active" />,
    PHP: <Progress percent={45} status="active" />
  };
  

class Portofolio extends React.Component{
    state = {
        key: 'ms',
        noTitleKey: 'Teamwork'
      }
    
      onTabChange = (key, type) => {
        console.log(key, type);
        this.setState({ [type]: key });
      }
    render(){
        return(
            <div className="porto" style={{ padding: '30px' }}>
                <Title level={4}><Text type="warning">SKILLS</Text></Title>
                <Card
                style={{ width: '100%', textAlign:'center' }}
                tabList={tabListNoTitle}
                activeTabKey={this.state.noTitleKey}
                onTabChange={(key) => { this.onTabChange(key, 'noTitleKey'); }}
                >
                {contentListNoTitle[this.state.noTitleKey]}
                </Card>
                <br/>
                <Title level={4}><Text  type="warning">SOFTWARE</Text></Title>
                <Card
                style={{ width: '100%' , textAlign:'center'}}
                tabList={tabList}
                activeTabKey={this.state.key}
                onTabChange={(key) => { this.onTabChange(key, 'key'); }}
                >
                {contentList[this.state.key]}
                </Card>
            </div>

            
        );
    }
}

export default Portofolio;