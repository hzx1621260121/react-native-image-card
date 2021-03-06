import React, {Component} from 'react';

import {
  View,
} from 'react-native';

import NineMode from './NineMode';
import MultiMode from './MultiMode';


export default class CardPic extends Component {
  render(){
    const {
      mode, // "nineGrid" 九宫格模式  "multi" 多图混合模式
    } = this.props;

    return (
        <View>
        {
          mode === "nineGrid" &&
        <NineMode {...this.props}/>
  }
    {
      mode === "multi" &&
      <MultiMode {...this.props}/>
    }
  </View>
  )
  }
}