import React, { Component } from "react";
import { View, Text, Image, Navigator, Input } from "@tarojs/components";
import IconFont from "../../iconfont";
import "./playlist.scss";
import SongLists from '../index/songlist/songlist';

class PlaylistPage extends Component {
  render() {
    return (
      <View className="playListPages">
        <View className="art-head">
          <Image
            src="//i.loli.net/2017/08/30/59a621006da5f.jpg"
            className="art-img"
          />
          <View className="name">王菲（王靖雯/Faye Wong）</View>
        </View>

        <View className="summary">
          <View className="ellipsis">
            简介：中国著名女歌手、演员。是继邓丽君后大中华地区成就最高、影响力最大的华语女歌手。以其极具辨识度的天籁空灵般嗓音，在华语歌坛创造了属于她自己的时代。她是首位登上美国《时代周刊》封面并接受CNN专访的华语歌手。她是身价最高，演唱会上座率最高，演唱会票房累计最高的华语女歌手。王菲北京出生。1987年放弃厦门大学生物系的录取跟随父母移居香港，并拜师戴思聪学习声乐，1989年签约新艺宝唱片公司并发行了第一张个人专辑，从此正式步入乐坛，曾使用艺名王靖雯。她于1994年在香港红馆第一次举办演唱会，就以连续18场的纪录打破新人红馆演唱会纪录，至今仍未有人打破。王菲自2005年逐渐淡出歌坛，2010-2012年开始复出大规模巡回演唱会。代表作品：《我愿意》《执迷不悔》《天空》《红豆》《流年》《催眠》。
          </View>
          <View className="unfold-icon">
            <IconFont name="down" size={35}></IconFont>
          </View>
          {/* <IconFont name="up"></IconFont> */}
        </View>

        <View className="hot-songs">
          <View className="hot-song-sum">热门单曲xxx首</View>
          {/* <SongLists isOrder={true}/> */}
        </View>

        <View className="bottom-bar">
          <View className="download-wrap">
            <View className="download1">
              <IconFont name="netEase" size={54} />
              <View className="download-text">下载热门歌曲</View>
            </View>
          </View>
        </View>

        {/* <View className="loading">
            <Image src="https://i.loli.net/2017/08/24/599eabe9caa83.gif"/>
        </View> */}
      </View>
    );
  }
}

export default PlaylistPage;
