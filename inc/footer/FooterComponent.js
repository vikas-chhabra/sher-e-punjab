import React, { Component } from 'react';
import {Footer, FooterTab, Button, Icon, Text, Badge } from 'native-base';

export default class FooterComponent extends Component {
  constructor(props){
    super(props);
    console.log("Footer started")
    this.state={
      activeTrending:true,
      activeBookmark:false,
      activeEntertainment:false
    }
  }
  activate=(value)=>{
    if(value==='Trending'){
      this.setState({
        activeBookmark:false,
        activeEntertainment:false,
        activeTrending:true
      })
    }
    else if(value==='Bookmark'){
      this.setState({
        activeTrending:false,
        activeEntertainment:false,
        activeBookmark:true,

      })

    }
    else{
      this.setState({
        activeTrending:false,
        activeBookmark:false,
        activeEntertainment:true,
      })

    }
  }
  render() {
    return (
        <Footer>
          <FooterTab>
            <Button active={this.state.activeTrending} badge vertical onPress={()=>{this.activate('Trending')}}> 
              <Badge><Text>3</Text></Badge>
              <Icon name="flame" />
              <Text>Trending</Text>
            </Button>
            <Button active={this.state.activeBookmark} vertical onPress={()=>{this.activate('Bookmark')}}>
              <Icon name="bookmark" />
              <Text>Bookmark</Text>
            </Button>
            <Button active={this.state.activeEntertainment} badge vertical onPress={()=>{this.activate('Entertainment')}}>
              <Badge ><Text>51</Text></Badge>
              <Icon active name="film" />
              <Text>Entertainment</Text>
            </Button>
          </FooterTab>
        </Footer>
    );
  }
  componentDidMount(){
    console.log("Footer ended");

  }
}