import React, { Component } from "react";
import { View, Button, Text, Image, Navigator } from "@tarojs/components";
import IconFont from "../../../iconfont";
import "./songlist.scss";

type SongListProps = {
  isOrder?: Boolean;
  songLists: Array<SongListItemType>;
};

type SongListItemType = {
    singer: String,
    special: String,
    hasSq: Boolean,
    name: String,
    songId: String,
}

const results = [
  {
    singer: "以冬",
    special: "我的一个道姑朋友",
    updatedAt: "2021-01-19T10:50:47.672Z",
    hasSq: true,
    name: "我的一个道姑朋友",
    objectId: "59a5097b128fe1005aeff147",
    hotsearch: false,
    background: "//i.loli.net/2017/08/30/59a62145926b1.jpg",
    createdAt: "2017-08-29T06:28:11.053Z",
    newmusic: true,
    hotsong: false,
    img: "//i.loli.net/2017/08/30/59a6201b3b742.jpg",
    lyric:
      "[00:00.00] 作曲 : タイナカ彩智《一番星》\n[00:00.10] 作词 : 陆菱纱\n[00:00.31]而你撑伞拥我入怀中，\n[00:06.00]一字一句誓言多慎重。\n[00:11.79]你眼中有柔情千种，\n[00:16.37]如脉脉春风，冰雪也消融。\n[00:27.93]原唱：LON\n[00:51.51]后期：圣雨轻纱\n[00:53.36]那年长街春意正浓，\n[00:58.14]策马同游，烟雨如梦。\n[01:05.26]檐下躲雨，\n[01:07.37]望进一双，深邃眼瞳，\n[01:12.66]宛如华山夹着细雪的微风。\n[01:18.40]\n[01:18.84]雨丝微凉，\n[01:20.44]风吹过暗香朦胧。\n[01:23.43]一时心头悸动，似你温柔剑锋，\n[01:26.42]过处翩若惊鸿。\n[01:30.68]\n[01:32.07]是否情字写来都空洞，\n[01:35.22]一笔一画斟酌着奉送，\n[01:38.33]甘愿卑微换个笑容，\n[01:40.57]或沦为平庸。\n[01:43.77]\n[01:44.46]而你撑伞拥我入怀中，\n[01:47.56]一字一句誓言多慎重。\n[01:50.50]你眼中有柔情千种，\n[01:52.83]如脉脉春风，冰雪也消融。\n[02:02.08]\n[02:02.78]\n[02:09.97]后来谁家喜宴重逢，\n[02:14.66]佳人在侧，烛影摇红。\n[02:19.70]\n[02:22.29]灯火缱绻，\n[02:24.69]映照一双，如画颜容，\n[02:29.18]宛如豆蔻枝头温柔的旧梦。\n[02:35.22]\n[02:35.87]对面不识，\n[02:36.87]恍然间思绪翻涌。\n[02:39.91]望你白衣如旧，神色几分冰冻，\n[02:42.90]谁知我心惶恐？\n[02:45.20]\n[02:45.65]也许我应该趁醉装疯，\n[02:48.79]借你怀抱留一抹唇红。\n[02:51.79]再将旧事轻歌慢诵，\n[02:54.03]任旁人惊动。\n[02:57.08]\n[02:57.93]可我只能假笑扮从容，\n[03:00.96]侧耳听那些情深意重。\n[03:04.06]不去看你熟悉脸孔，\n[03:06.45]只默默饮酒，多无动于衷。\n[03:12.49]\n[03:13.53]山门外，雪拂过白衣，又在指尖消融；\n[03:19.38]负长剑，试问江湖偌大，该何去何从？\n[03:25.33]情深至此，像个笑话一样，自己都嘲讽，\n[03:31.46]一厢情愿，有始无终。\n[03:38.20]\n[03:40.84]若你早与他人两心同，\n[03:44.63]何苦惹我错付了情衷。\n[03:47.03]难道看我失魂落魄，\n[03:49.28]你竟然心动？\n[03:52.31]\n[03:53.06]所幸经年漂浮红尘中，\n[03:56.11]这颗心已是千疮百孔。\n[03:59.11]怎惧你以薄情为刃，\n[04:01.46]添一道裂缝？\n[04:03.20]\n[04:03.70]又不会痛。\n[04:05.29]\n[04:05.84]不如将往事埋在风中，\n[04:08.21]以长剑为碑，以霜雪为冢。\n[04:11.41]此生若是错在相逢，\n[04:13.71]求一个善终。\n[04:16.85]\n[04:17.54]孤身打马南屏旧桥边过，\n[04:20.54]恰逢山雨来时雾蒙蒙。\n[04:23.63]想起那年伞下轻拥，\n[04:26.19]就像躺在桥索之上，做了一场梦，\n[04:31.14]梦醒后跌落，粉身碎骨，无影亦无踪。\n",
    song:
      "http://shenfeng.clouddn.com/%E6%88%91%E7%9A%84%E4%B8%80%E4%B8%AA%E9%81%93%E5%A7%91%E6%9C%8B%E5%8F%8B.mp3",
  },
  {
    singer: "Alan Walker",
    special: "faded",
    updatedAt: "2017-08-30T12:56:13.784Z",
    hasSq: false,
    number: "six",
    name: "Faded",
    objectId: "59a509d95c497d0064cbab95",
    hotsearch: true,
    background: "//i.loli.net/2017/08/28/59a382f84ef38.jpg",
    createdAt: "2017-08-29T06:29:45.555Z",
    newmusic: false,
    hotsong: true,
    img: "//i.loli.net/2017/08/30/59a60fddadf26.jpg",
    lyric:
      "[00:00.00] 作曲 : Gunnar Greve Pettersen\n[00:01.00] 作词 : Gunnar Greve Pettersen\n[00:10.720]You were the shadow to my light\n[00:14.010]Did you feel us\n[00:17.750]Another Star\n[00:19.720]You fade away\n[00:21.680]Afraid our aim is out of sight\n[00:24.560]Wanna see us\n[00:28.000]Alive\n[00:30.890]Where are you now\n[00:36.200]Where are you now\n[00:41.500]Where are you now\n[00:44.340]Was it all in my fantasy\n[00:46.820]Where are you now\n[00:49.560]Were you only imaginary\n[00:53.510]Where are you now\n[00:56.860]Atlantis\n[00:58.820]Under the sea\n[01:01.490]Under the sea\n[01:04.340]Where are you now\n[01:06.740]Another dream\n[01:10.020]The monster's running wild inside of me\n[01:14.220]I'm faded\n[01:19.660]I'm faded\n[01:23.440]So lost, I'm faded\n[01:30.220]I'm faded ~~~\n[01:34.200]So lost, I'm faded\n[01:37.530]These shallow waters never met\n[01:40.470]What i needed\n[01:44.250]I'm letting go\n[01:46.120]A deeper dive\n[01:48.120]Eternal silence of the sea\n[01:51.070]I'm breathing\n[01:54.900]Alive.\n[01:57.570]Where are you now\n[02:02.890]Where are you now\n[02:08.400]Under the bright but faded lights\n[02:10.870]You set my heart on fire\n[02:13.440]Where are you now\n[02:16.130]Where are you now\n[02:18.850]...\n[02:30.930]Where are you now\n[02:34.220]Atlantis\n[02:36.250]Under the sea\n[02:38.830]Under the sea\n[02:41.560]Where are you now\n[02:44.170]Another dream\n[02:47.460]The monster's running wild inside of me\n[02:51.450]I'm faded\n[02:56.920]I'm faded\n[03:00.900]So lost, I'm faded\n[03:07.500]I'm faded ~~~\n[03:11.360]So lost, I'm faded\n[03:14.400]...\n",
    song: "http://ov4sliu3n.bkt.clouddn.com/Faded.mp3",
  },
  {
    singer: "筷子兄弟",
    special: "父亲",
    updatedAt: "2017-08-30T07:22:40.091Z",
    hasSq: true,
    name: "老男孩",
    objectId: "59a50993570c35006bee8b07",
    hotsearch: false,
    background: "//i.loli.net/2017/08/27/59a2eae8db3fb.jpg",
    createdAt: "2017-08-29T06:28:35.916Z",
    newmusic: true,
    hotsong: false,
    img: "//i.loli.net/2017/08/30/59a6205b55433.jpg",
    lyric:
      "[00:00.00] 作曲 : 大桥卓弥\n[00:01.00] 作词 : 王太利\n[00:19.960]那是我日夜思念 深深爱着的人呐\n[00:26.040]到底我该如何表达 她会接受我吗\n[00:32.420]也许永远都不会跟她说出那句话\n[00:39.270]注定我要浪迹天涯 怎么能有牵挂\n[00:45.630]梦想总是遥不可及 是不是应该放弃\n[00:51.950]花开花落又是一季 春天啊你在哪里\n[00:59.840]\n[01:03.690]青春如同奔流的江河 一去不回来不及道别\n[01:10.960]只剩下麻木的我 没有了当年的热血\n[01:17.700]看那满天飘零的花朵 在最美丽的时刻凋谢\n[01:24.410]有谁会记得这世界他来过\n[01:29.540]\n[01:35.710]转眼过去 多年世间 多少离合悲欢\n[01:41.910]曾经志在四方少年 羡慕南飞的雁\n[01:48.990]各自奔前程的身影 匆匆渐行渐远\n[01:55.139]未来在哪里平凡 啊谁给我答案\n[02:02.100]那时陪伴我的人哪 你们如今在何方\n[02:07.840]我曾经爱过的人啊 现在是什么模样\n[02:15.490]\n[02:21.080]当初的愿望实现了吗\n[02:25.000]事到如今只好祭奠吗\n[02:28.180]任岁月风干理想 再也找不回真的我\n[02:35.200]抬头仰望着漫天星河\n[02:38.060]那时候陪伴我的那颗\n[02:41.540]这里的故事 你是否还记得\n[02:47.190]\n[03:18.900]生活像一把无情刻刀 改变了我们模样\n[03:25.370]未曾绽放就要枯萎吗 我有过梦想\n[03:32.430]\n[03:36.850]青春如同奔流的江河 一去不回来不及道别\n[03:44.329]只剩下麻木的我 没有了当年的热血\n[03:50.790]看那满天飘零的花朵 在最美丽的时刻凋谢\n[03:57.329]有谁会记得这世界他 曾经来过\n[04:04.390]\n[04:04.530]当初的愿望实现了吗\n[04:07.700]事到如今只好祭奠吗\n[04:11.110]任岁月风干理想 再也找不回真的我\n[04:17.540]抬头仰望着漫天星河\n[04:20.950]那时候陪伴我的那颗\n[04:24.390]这里的故事 你是否还记得\n[04:30.510]如果有明天 祝福你亲爱的\n[04:36.440]\n",
    song: "http://ov4sliu3n.bkt.clouddn.com/%E8%80%81%E7%94%B7%E5%AD%A9.mp3",
  },
  {
    singer: "黑Girl",
    special: "粉红高压电",
    updatedAt: "2017-08-30T12:49:16.972Z",
    hasSq: false,
    name: "123木头人",
    objectId: "59a509aca0bb9f0064f068aa",
    hotsearch: false,
    background: "//i.loli.net/2017/08/28/59a380eb3a00c.jpg",
    createdAt: "2017-08-29T06:29:00.955Z",
    newmusic: true,
    hotsong: false,
    img: "//i.loli.net/2017/08/30/59a6203b3312d.jpg",
    lyric:
      "[00:20.360](大牙)猜不透是哪裡出了錯\n[00:23.580]戀愛的進度有些落後\n[00:27.580](Apple)據線報說你也喜歡我\n[00:31.170]怎麼會 還無動於衷\n[00:35.180](鬼鬼)氣象報告天氣很不錯\n[00:38.620]太陽曬得我(鬼鬼&小蠻)臉頰紅紅\n[00:42.460](丫頭&小蠻)我也很想跟你做朋友\n[00:46.200](大牙&丫頭)就你傻傻還不懂\n[00:49.620](小蠻&Apple)我數123木頭人\n[00:53.520]在不行動就要被扣分\n[00:57.460](鬼鬼)我一直在等著\n[01:00.920](大牙)戀愛轟轟烈烈的發生\n[01:04.570](大牙&小蠻)我數123木頭人\n[01:08.520](Apple&鬼鬼)明明暗示的夠明顯了\n[01:13.140](丫頭)我很天真\n[01:15.850](大牙)覺得勇敢的情話(大牙&小蠻)最動人\n[01:23.910]\n[01:39.790](丫頭&小蠻)腳步太快你走在前頭\n[01:43.590](大牙&鬼鬼)我在你背後開不了口\n[01:47.420](鬼鬼&Apple)多希望你在下個路口\n[01:51.230](大牙&小蠻)就會牽起我的手\n[01:54.630](大牙&小蠻&Apple)我數123木頭人\n[01:58.600]在不表白 天就要黑了\n[02:02.830](丫頭&鬼鬼)我真的很想問\n[02:05.780](大牙&鬼鬼)你是害羞還是太遲鈍\n[02:09.670](丫頭&小蠻&Apple)我數123木頭人\n[02:13.490](大牙&鬼鬼)給我ㄧ秒心動的眼神\n[02:17.600](丫頭&小蠻)我期待著(大牙&Apple&鬼鬼)因為有你讓愛情能完整\n[02:28.690]\n[02:44.990](丫頭)123木頭人\n[02:47.400](小蠻)在不表白 天就要黑了\n[02:51.640](Apple)我真的很想問\n[02:55.280](大牙&鬼鬼)你是害羞還是太遲鈍\n[02:59.190](合唱)我數123木頭人\n[03:02.940]給我ㄧ秒心動的眼神\n[03:07.770]我期待著 因為有你讓愛情能完整\n[03:18.120]\n[03:18.530](小蠻&鬼鬼)因為有你讓愛情能完整\n[03:25.630](大牙)因為有你讓愛情能(大牙&丫頭)完整\n[03:33.940]\n",
    song: "http://ov4sliu3n.bkt.clouddn.com/123%E6%9C%A8%E5%A4%B4%E4%BA%BA.mp3",
  },
];

class SongLists extends Component<SongListProps, any> {
  render() {
    const {isOrder, songLists}= this.props;
    return (
      <View className="song-lists">
        {songLists.map((item, key) => {
          return (
            <View
              className="hot-song-item"
              style={{ paddingLeft: isOrder ? "0" : "3.125vw" }}
            >
              <Navigator url={`/pages/song/song?songId=${item.songId}`} className="hot-song-switch">
                {isOrder && <View className="number" style={{color: key < 3 ? '#d33a31' : '#999'}}>{key + 1}</View>}
                <View className="list-play-wrap">
                  <View className="list-item">
                    <View className="song-title">{item.name}</View>
                    <View className="singer">
                      {item.hasSq && <IconFont name="sq" size={28} /> }
                      <Text style={{marginLeft: item.hasSq ? '1vw' : '0'}}>{item.singer} - {item.special}</Text>
                    </View>
                  </View>
                  <View className="play">
                    <IconFont name="play" size={52} />
                  </View>
                </View>
              </Navigator>
            </View>
          );
        })}
      </View>
    );
  }
}

export default SongLists;
