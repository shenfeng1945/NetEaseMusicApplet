import React, { Component } from "react";
import { View, Text, Image, Navigator } from "@tarojs/components";
import IconFont from "../../../iconfont";
import "./recommend.scss";
import SongLists from "../songlist/songlist";
import AV from "leancloud-storage/dist/av-weapp.js";
    
    

class Recommend extends Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      songlists: [],
    };
  }
  componentDidMount() {
      this.getNewSongs();
  }
  getNewSongs = () => {
    const query = new AV.Query("Song");
    query.equalTo('newmusic', true);
    query.find().then((data) => {
      let results: any = [];
      data.forEach((item, i) => {
        results[i] = {...item.attributes, songId: item.id};
      });
      this.setState({ songlists: results });
    });
  };
  render() {
    return (
      <View>
        <View className="recommend-list">
          <View className="sectionTitle">推荐歌单</View>
          <View className="lists">
            <View className="item">
              <Navigator url="/pages/playlist/playlist">
                <Image
                  src="//i.loli.net/2017/08/30/59a6240319f3b.jpg"
                  className="music-img"
                />
                <Text className="music-text">【电音】让你欲罢不能的女声</Text>
                <View className="music-sums">
                  <IconFont name="headset1" size={32} color="white" />
                  <Text className="listeners">100万</Text>
                </View>
              </Navigator>
            </View>

            {/* <View className="item">
              <Navigator url="#">
                <Image
                  src="//i.loli.net/2017/08/30/59a6243182289.jpg"
                  className="music-img"
                />
                <Text className="music-text">男声重温经典，往事等你回味</Text>
                <View className="music-sums">
                  <IconFont name="headset1" size={32} color="white" />
                  <Text className="listeners">145万</Text>
                </View>
              </Navigator>
            </View>

            <View className="item">
              <Navigator url="./special.html?number=one">
                <Image
                  src="//ooo.0o0.ooo/2017/08/24/599ecb0eadc02.jpg"
                  className="music-img"
                />
                <Text className="music-text">
                  【经典粤语】热单的另一种打开方式
                </Text>
                <View className="music-sums">
                  <IconFont name="headset1" size={32} color="white" />
                  <Text className="listeners">1694万</Text>
                </View>
              </Navigator>
            </View>

            <View className="item">
              <Navigator url="./special.html?number=one">
                <Image
                  src="//ooo.0o0.ooo/2017/08/24/599ecae695792.jpg"
                  className="music-img"
                />
                <Text className="music-text">【极致经典】狂野性感中的娇媚</Text>
                <View className="music-sums">
                  <IconFont name="headset1" size={32} color="white" />
                  <Text className="listeners">17万</Text>
                </View>
              </Navigator>
            </View>

            <View className="item">
              <Navigator url="./special.html?number=one">
                <Image
                  src="//ooo.0o0.ooo/2017/08/24/599eca4a7631c.jpg"
                  className="music-img"
                />
                <Text className="music-text">有一种青春叫做周杰伦</Text>
                <View className="music-sums">
                  <IconFont name="headset1" size={32} color="white" />
                  <Text className="listeners">160万</Text>
                </View>
              </Navigator>
            </View>

            <View className="item">
              <Navigator url="./special.html?number=one">
                <Image
                  src="//ooo.0o0.ooo/2017/08/24/599ecb2a81460.jpg"
                  className="music-img"
                />
                <Text className="music-text">
                  「纯音/治愈」以音乐为治愈，容生活以欢笑
                </Text>
                <View className="music-sums">
                  <IconFont name="headset1" size={32} color="white" />
                  <Text className="listeners">169万</Text>
                </View>
              </Navigator>
            </View> */}
          </View>
        </View>

        <View className="new-music">
          <View className="sectionTitle">最新音乐</View>
          {/* <View className="loading">
            <Image
              className="loading-img"
              src="//i.loli.net/2017/08/24/599eabe9caa83.gif"
            />
          </View> */}
          <SongLists songLists={this.state.songlists}></SongLists>
        </View>

        <View className="footer">
          <View className="bottom-logo">
            <IconFont name="logoSvg" size={300} />
          </View>
          <Navigator url="###">
            <View className="button">打开APP，发现更多好音乐{">"}</View>
          </Navigator>
          <Text className="copyright">
            网易公司版权所有©1997-2021 杭州乐读科技有限公司运营
          </Text>
        </View>
      </View>
    );
  }
}

export default Recommend;
