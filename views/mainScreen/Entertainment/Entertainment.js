import React , { Component} from 'react';
import {View, Text} from 'react-native';

class Bookmark extends Component{
    constructor(){
        super();
        console.log('Enter screen');
    }
    render(){
        return(
            <View>
                <Text>
                    Entertainment
                </Text>
            </View>
        );
    }
}

export default Bookmark;