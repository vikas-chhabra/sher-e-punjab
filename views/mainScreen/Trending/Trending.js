import React , { Component} from 'react';
import {View} from 'react-native';
import { Container, Header, Content, Card, CardItem, Text, Body } from 'native-base';

class Bookmark extends Component{
    constructor(props){
        super(props);
        console.log('trnding screen started');
    }
    static navigationOptions = {
        header: null
    }
    render(){
        return(
            <Card>
            <CardItem header>
              <Text>NativeBase</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text>
                  //Your text here
                </Text>
              </Body>
            </CardItem>
            <CardItem footer>
              <Text>GeekyAnts</Text>
            </CardItem>
         </Card>
        );
    }
    componentDidMount(){
        console.log('trnding screen ended');
    }
}

export default Bookmark;