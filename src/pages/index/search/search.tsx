import React, { Component } from "react";
import { View, Text, Image, Navigator, Input } from "@tarojs/components";
import "./search.scss";
import IconFont from '../../../iconfont';

class SearchMusic extends Component {
  render() {
    return (
      <View className="tabs-content3">
        <View className="search-wrap border-bottom">
          <View className="search">
            <View className="search-icon"></View>
            <Input
              type="text"
              className="output"
              placeholder="搜索歌曲、歌手"
            />
            <View className="half-circle"></View>
          </View>
        </View>

        <View className="hot-search">
          <View className="search-title">热门搜索</View>
          <View className="hot-search-lists">
            <View className="hot-search-item">
              <Navigator className="skip-url">Faded</Navigator>
            </View>
            <View className="hot-search-item">
              <Navigator className="skip-url">Amani</Navigator>
            </View>
            <View className="hot-search-item">
              <Navigator className="skip-url">你爱我像谁</Navigator>
            </View>
            <View className="hot-search-item">
              <Navigator className="skip-url">匆匆那年</Navigator>
            </View>
            <View className="hot-search-item">
              <Navigator className="skip-url">只要有你</Navigator>
            </View>
          </View>
        </View>

        <View className="searchAll">
          <View className="border-bottom search-title">搜索"Faded"</View>
          <View className="search-result">
            <View className="search-item">
              <Navigator className="skip-url">
                 <IconFont name="search" size={40}/>
                 <Text>sugar - Maroon 5</Text>
              </Navigator>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

export default SearchMusic;
