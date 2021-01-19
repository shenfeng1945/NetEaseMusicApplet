import React, { Component } from "react";
import { View, Text, Image, Navigator } from "@tarojs/components";
import IconFont from '../../iconfont';
import "./hot.scss";

class HotMusic extends Component {
  render() {
    return (
      <View className="tabs-content2">
      
        <View className="hot-banner noCollapse">
          <View className="hot-notice"></View>
          <Text className="date">更新日期：02月17日</Text>
        </View>
        
        <View className="hot-lists"></View>


        <View className="whole-list">
            <Navigator url="###" className="list-url">
                <Text className="list-span">查看完整榜单</Text>
                <IconFont name="right" size={24}/>
            </Navigator>
        </View>
      </View>
    );
  }
}

export default HotMusic;
