import { useGlobalIconFont } from './iconfont/helper';
export default {
  pages: [
    'pages/index/index',
    'pages/playlist/playlist',
    'pages/song/song',
    'pages/download/download'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  usingComponents: Object.assign(useGlobalIconFont())
}
