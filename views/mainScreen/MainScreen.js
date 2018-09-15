import React , { Component } from 'react';
import {View, Text} from 'react-native';
import Header from '../../inc/header/Header';
import {Container, Content, Card,CardItem,Body} from 'native-base';
import FooterComponent from '../../inc/footer/FooterComponent';
import MainStack from '../../navigator/StackNavigatorBottom';
import Trending from './Trending/Trending';

class MainScreen extends Component{
    constructor(props){
        super(props);
        console.log("main screen loaded")
    }
    static navigationOptions = {
        header: null
    }
    render(){
        return(
            <Container>
                <Header/>
                <Content>
                    <Trending />
                </Content>
                <FooterComponent/>
            </Container>
        );
    }
    componentDidUpdate(){
    }
    componentDidMount(){
        console.log("main screen ended");

    }
}
export default MainScreen;
