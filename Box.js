import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';

export default class Box extends Component{

  constructor(props){
    super(props);

    this.state = {
      maxHeight: 0
    };
  }

  getHeight(event){
    this.setState({
      maxHeight   : event.nativeEvent.layout.height/2
    });
  }

  render(){

    if(this.props.start)
      barStart =
        <View style={{marginLeft: 14, width: 2, height: this.state.maxHeight + 5, backgroundColor: 'transparent'}} /> ;
    else {
      barStart =
        <View style={{marginLeft: 14, width: 2, height: this.state.maxHeight + 5, backgroundColor: 'black'}} /> ;
    }

    if(this.props.end)
      barEnd =
        <View style={{marginLeft: 14,width: 2, height: this.state.maxHeight + 5, backgroundColor: 'transparent'}} /> ;
    else {
      barEnd =
        <View style={{marginLeft: 14,width: 2, height: this.state.maxHeight + 5, backgroundColor: 'black'}} /> ;
    }

    return(

      <View style={{flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center'}}>

        <View style={{alignSelf:'flex-start'}}>

          { barStart }

          <View style={{marginLeft: 10, width: 10, height: 10, borderRadius: 20, borderWidth: 1, backgroundColor: 'transparent', alignSelf: 'center', justifyContent:'center', alignItems: 'center' }} >
            <View style={{width: 5, height: 5, borderRadius: 10, backgroundColor: 'black'}} />
          </View>

          { barEnd }

        </View>

        <View
          style={{ marginLeft: 15, padding: 10, backgroundColor: '#F2F1EF', borderWidth: 0.5, flex: 0.9 }}
          onLayout={this.getHeight.bind(this)}>

          {this.props.children}

        </View>

      </View>

    );
  }
}
