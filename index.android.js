/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView
} from 'react-native';
import Box from './Box';

export default class milestone extends Component {
  render() {
    return (
    <View>

    <View>
        <Text style={{ alignSelf: 'center', fontSize: 22, marginTop: 10, marginBottom: 10 }}> Timeline < /Text>
    </View>
      <ScrollView>


          <Box start>
            <Text>MileStone 1</Text>
            <Text>Info about the first MileStone</Text>
            <Text>Task 1</Text>
          </Box>

          <Box>
            <Text>Any image</Text>
            <Image style = {{width: 200, height: 100}} source = { require('./cat.jpeg') } />
          </Box>

          <Box end>
            <Text>MileStone 2</Text>
            <Text>Info about the second MileStone</Text>
            <Text>Task 2</Text>
          </Box>

      </ScrollView>
    </View>
    );
  }
}

AppRegistry.registerComponent('milestone', () => milestone);
