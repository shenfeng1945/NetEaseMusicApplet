import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Button, Text, Image, Navigator } from '@tarojs/components'
import IconFont from '../../iconfont';
import Recommned from './recommend/recommend';
import HotMusic from './hot/hot';
import SearchMusic from './search/search';

import { add, minus, asyncAdd } from '../../actions/counter'

import './index.scss'

// #region 书写注意
//
// 目前 typescript 版本还无法在装饰器模式下将 Props 注入到 Taro.Component 中的 props 属性
// 需要显示声明 connect 的参数类型并通过 interface 的方式指定 Taro.Component 子类的 props
// 这样才能完成类型检查和 IDE 的自动提示
// 使用函数模式则无此限制
// ref: https://github.com/DefinitelyTyped/DefinitelyTyped/issues/20796
//
// #endregion

type PageStateProps = {
  counter: {
    num: number
  }
}

type PageDispatchProps = {
  add: () => void
  dec: () => void
  asyncAdd: () => any
}

type PageOwnProps = {}

type PageState = {}

type IProps = PageStateProps & PageDispatchProps & PageOwnProps

interface Index {
  props: IProps;
}

@connect(({ counter }) => ({
  counter
}), (dispatch) => ({
  add () {
    dispatch(add())
  },
  dec () {
    dispatch(minus())
  },
  asyncAdd () {
    dispatch(asyncAdd())
  }
}))

class Index extends Component<any,any> {
  constructor(props){
      super(props);
      this.state = {
          tabId: 0,
          tabs: [
              {index: 0, text: '推荐音乐'},
              {index: 1, text: '热歌榜'},
              {index: 2, text: '搜索'},
          ]
      }
  }
  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }
  
  getTabPanel(tabId){
     switch(tabId){
       case 0: return <Recommned />;
         break;
       case 1: return <HotMusic />;
         break;
        case 2: return <SearchMusic />;
         break;
     }
  }

  render () {
    const {tabId, tabs} = this.state;
    return (
      <View className='page tabs'>
        {/* <Button classNameName='add_btn' onClick={this.props.add}>+</Button>
        <Button classNameName='dec_btn' onClick={this.props.dec}>-</Button>
        <Button classNameName='dec_btn' onClick={this.props.asyncAdd}>async</Button>
        <View><Text>{this.props.counter.num}</Text></View> */}
        <View className='top-control-wrapper'>
        
          <View className="top-bar">
             <View className="logo">
               <IconFont name="netEase" size={70}/>
               <Text className="logo-text">网易云音乐</Text>
             </View>
             <Text className="download">下载APP</Text>
          </View>
          <View className="tabs-control">
            <View className="tabs-nav border-bottom">
                {tabs.map((item) => {
                  return (
                    <View className={`tabs-item ${tabId === item.index ? 'active' : ''}`} onClick={() => {this.setState({tabId: item.index})}}>
                      <Text className="tabs-item-text">{item.text}</Text>
                    </View>
                  )
                })}
            </View>
          </View>
        </View>
        
        <View className="tabsContent">
           <View className="tabs-content1 active">
              {this.getTabPanel(tabId)}
           </View>
        </View>
            
        
      </View>
    )
  }
}

export default Index

