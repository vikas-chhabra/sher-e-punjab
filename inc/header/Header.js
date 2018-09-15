import React, { Component } from 'react';
import { Header, Left, Body, Right, Button, Icon, Title, Text } from 'native-base';

export default class HComponent extends Component {
  render() {
    textAlign={
      fontWeight:'bold',
      marginLeft:-70,
      color:'#fff'
    }
    return (
        <Header style={{backgroundColor:'#FF0000'}}>
          <Left>
            <Button transparent>
              <Icon style={{color:'#fff',fontWeight:'bold'}}name='menu' />
            </Button>
          </Left>
          <Body>
            <Text style={textAlign}>Shere-e-Panjab</Text>
          </Body>
          <Right>
          </Right>
        </Header>
    );
  }
}