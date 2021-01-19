import React, {Component} from 'react';
import { View, Text, Image, Navigator, Input } from "@tarojs/components";
import './search.scss';

class SearchMusic extends Component {
  render(){
      return (
          <View className="tabs-content3">
          
              <View className="search-wrap border-bottom">
                    <View className="search">
                        <View className="search-icon"></View>
                        <Input type="text" className="output" placeholder="搜索歌曲、歌手" />
                        <View className="half-circle"></View>
                    </View>
                </View>
                
                <View className="hot-search">
                    <View className="search-title">热门搜索</View>
                    <View className="hot-search-lists"></View>
                </View>
                
                <View className="searchAll">
                    <View className="border-bottom h3"></View>
                    <View id="searchResults"></View>
                </View>
          </View>
      )
  }
}

export default SearchMusic;