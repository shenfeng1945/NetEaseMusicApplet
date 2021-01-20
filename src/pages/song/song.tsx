import React, { Component } from "react";
import { View, Text, Image, Navigator } from "@tarojs/components";
import IconFont from "../../iconfont";
import './song.scss';
import Taro from '@tarojs/taro'
import AV from "leancloud-storage/dist/av-weapp.js";


interface SongDataType  {
    background?: string, // 背景图片
    img?: string, // 中间旋转图片
    lyric?: string,
    name?: string, // 歌名
    singer?: string, // 歌手
    song?: string // 歌曲音频链接
}

interface SongPlayPageState {
    playing: boolean,
    audioCtx: Taro.InnerAudioContext,
    songId: string,
    songData: SongDataType
}

class SongPlayPage extends Component<void, SongPlayPageState>{
  constructor(props){
      super(props);
      this.state = {
          playing: false,
          audioCtx: Taro.createInnerAudioContext(),
          songId: Taro.getCurrentInstance().router?.params.songId || '',
          songData: {}
      }
  }
  componentWillMount(){
      const query = new AV.Query('Song');
      query.equalTo('objectId', this.state.songId);
      query.find().then((data: Array<any>) => {
        this.createAudioContext(data[0].attributes.song);
        this.setState({songData: data[0].attributes})
      })
  }
  togglePlay = () :void => {
    const {playing, audioCtx} = this.state;
    playing ? audioCtx.pause() : audioCtx.play();
    this.setState({playing: !playing})
  }
  createAudioContext = (src: string) :void => {
    const { audioCtx } = this.state;
    audioCtx.src = src;
    audioCtx.autoplay = false;
    // 当音频可以播放就将状态从loading变为可播放
    audioCtx.onCanplay(() => {
       audioCtx.autoplay && this.togglePlay();
    })
      // 当音频在缓冲时改变状态为加载中
    audioCtx.onWaiting(() => {console.log('onWaiting')})
      // 开始播放后更改图标状态为播放中
    //   audioCtx.onPlay(() => {console.log('onPlay')})
      // 暂停后更改图标状态为暂停
    //   audioCtx.onPause(() => {console.log('onPause')})
      // 播放结束后更改图标状态
      audioCtx.onEnded(() => {console.log('onEnded')})
      // 音频加载失败时 抛出异常
      audioCtx.onError((e) => {throw new Error(e.errMsg)})
  }
  render() {
    const {playing, songData} = this.state;
    const {background, img, } = songData;
    if(!background || !img) return <View></View>;
    return (
      <View className="song-play" style={{backgroundImage: `url(${background})`}}>
      
        <View className="disc-container">
          <View className="pointer" style={{transform: `rotateZ(${playing ? '0' : '-20'}deg)`}}>
            <Image src="//i.loli.net/2021/01/19/nCXqZNeiSWr2bQ5.png" className="pointer-img" />
          </View>
          <View className="disc">
            <View className="icon-wrap center" onClick={this.togglePlay}>
              <IconFont name={playing ? 'pause' : 'play-copy' } size={37.5} color="white"/>
            </View>
           
            <Image
              className="ring"
              src="//i.loli.net/2021/01/19/GaD12iCQWZlqHxr.png"
            />

            <View className="center othercenter">
              <Image
                className="light"
                style={{animationPlayState: playing ? 'running' : 'paused'}}
                src="//i.loli.net/2021/01/19/9eBzfXAFxilWNQ7.png"
              />
            </View>

            <View className="center othercenter">
              <Image
                className="center-image"
                style={{animationPlayState: playing ? 'running' : 'paused'}}
                src={img}
              />
            </View>
          </View>
        </View>

        <View className="lyrics">
          <View className="lyric-head">
             光辉岁月
             <Text className="lyric-singer">- Beyond</Text>
          </View>
          <View className="lyric-content">
            <View className="lyric-moving">
                <View>作词 : 黄家驹</View>
                <View className="lyric-now">作曲 : 黄家驹</View>
                <View>编曲 : Beyond</View>
                <View>Synth Programming : Gordon O'Yang / 叶世荣</View>
                <View>Mixed by Philip Kwok</View>
                <View>钟声响起归家的讯号</View>
                <View>在他生命里</View>
                <View>仿佛带点唏嘘</View>
                <View>黑色肌肤给他的意义</View>
                <View>是一生奉献 肤色斗争中</View>
                <View>年月把拥有变做失去</View>
                <View>疲倦的双眼带着期望</View>
                <View>今天只有残留的躯壳</View>
            </View>
          </View>
        </View>
        
        <View className="links">
            <View className="wrapper">
                <Navigator url="/pages/download/download">
                    <View className="open">打开</View>
                </Navigator>
                
                <Navigator url="/pages/download/download">
                    <View className="download">下载</View>
                </Navigator>
            </View>
        </View>
       
      </View>
    );
  }
}

export default SongPlayPage;
