// 轉盤獎池內容tab表單1綠雪球
let lottery1_data = [
  {
    icon: '<div class="list1"><img src="img/icon/51.jpg">強飾符</div>',
    num: "1",
    probability: "3.5%",
  },
  {
    icon: '<div class="list1"><img src="img/icon/52.jpg">泰和白櫃</div>',
    num: "1",
    probability: "4.5%",
  },
  {
    icon: '<div class="list1"><img src="img/icon/53.jpg">幸運隊伍石碑</div>',
    num: "2",
    probability: "5.0%",
  },
  {
    icon: '<div class="list1"><img src="img/icon/54.jpg">追蹤秘笈</div>',
    num: "10",
    probability: "5.5%",
  },
  {
    icon: '<div class="list1"><img src="img/icon/55.jpg">瞬移秘笈</div>',
    num: "10",
    probability: "5.5%",
  },
  {
    icon: '<div class="list1"><img src="img/icon/56.jpg">泰和青櫃</div>',
    num: "1",
    probability: "5.5%",
  },
  {
    icon: '<div class="list1"><img src="img/icon/57.jpg">泰和銅櫃</div>',
    num: "1",
    probability: "5.5%",
  },
  {
    icon: '<div class="list1"><img src="img/icon/58.jpg">合成初始符</div>',
    num: "1",
    probability: "5.5%",
  },
  {
    icon: '<div class="list1"><img src="img/icon/59.jpg">泰和青櫃鑰匙</div>',
    num: "1",
    probability: "5.5%",
  },
  {
    icon: '<div class="list1"><img src="img/icon/60.jpg">泰和銅櫃鑰匙</div>',
    num: "1",
    probability: "5.5%",
  },
  {
    icon: '<div class="list1"><img src="img/icon/61.jpg">恩寵隊伍石碑</div>',
    num: "2",
    probability: "5.5%",
  },
  {
    icon: '<div class="list1"><img src="img/icon/62.jpg">尚仁伺服器傳音秘笈</div>',
    num: "10",
    probability: "8.0%",
  },
  {
    icon: '<div class="list1"><img src="img/icon/63.jpg">尚仁分流傳音秘笈</div>',
    num: "15",
    probability: "8.0%",
  },
  {
    icon: '<div class="list1"><img src="img/icon/64.jpg">高級怪物召喚符咒</div>',
    num: "30",
    probability: "8.0%",
  },
  {
    icon: '<div class="list1"><img src="img/icon/65.jpg">伺服器傳音秘笈</div>',
    num: "10",
    probability: "8.0%",
  },
  {
    icon: '<div class="list1"><img src="img/icon/66.jpg">分流傳音秘笈</div>',
    num: "20",
    probability: "8.0%",
  },
];
var h1 = [];
for (var i = 0; i < lottery1_data.length; i++) {
  h1.push("<tr>");
  var obj = lottery1_data[i];
  for (var p in obj) h1.push("<td>" + obj[p] + "</td>");
  h1.push("</tr>");
}
// 轉盤獎池內容tab表單2金雪球
let lottery2_data = [
  {
    icon: '<div class="list1"><img src="img/icon/1.jpg">上級研磨劑</div>',
    num: "1",
    probability: "2.50%",
  },
  {
    icon: '<div class="list1"><img src="img/icon/2.jpg">S.白雪恥帽</div>',
    num: "1",
    probability: "2.50%",
  },
  {
    icon: '<div class="list1"><img src="img/icon/3.jpg">S.白雪恥服（男）</div>',
    num: "1",
    probability: "2.50%",
  },
  {
    icon: '<div class="list1"><img src="img/icon/4.jpg">S.白雪恥服（女）</div>',
    num: "1",
    probability: "2.50%",
  },
  {
    icon: '<div class="list1"><img src="img/icon/5.jpg">S.雪花裝飾</div>',
    num: "1",
    probability: "2.50%",
  },
  {
    icon: '<div class="list1"><img src="img/icon/6.jpg">S.雪花棒</div>',
    num: "1",
    probability: "1.80%",
  },
  {
    icon: '<div class="list1"><img src="img/icon/7.jpg">藍色魔術師帽(男)</div>',
    num: "1",
    probability: "2.50%",
  },
  {
    icon: '<div class="list1"><img src="img/icon/8.jpg">藍色魔術師帽(女)</div>',
    num: "1",
    probability: "2.50%",
  },
  {
    icon: '<div class="list1"><img src="img/icon/9.jpg">藍色魔術師服(男)</div>',
    num: "1",
    probability: "2.50%",
  },
  {
    icon: '<div class="list1"><img src="img/icon/10.jpg">藍色魔術師服(女)</div>',
    num: "1",
    probability: "2.50%",
  },
  {
    icon: '<div class="list1"><img src="img/icon/11.jpg">黑桃A</div>',
    num: "1",
    probability: "2.50%",
  },
  {
    icon: '<div class="list1"><img src="img/icon/12.jpg">琥珀權杖</div>',
    num: "1",
    probability: "1.80%",
  },
  {
    icon: '<div class="list1"><img src="img/icon/13.jpg">S.俐落冷霜髮(男)</div>',
    num: "1",
    probability: "2.50%",
  },
  {
    icon: '<div class="list1"><img src="img/icon/14.jpg">S.冰寒雪蓮髮(女)</div>',
    num: "1",
    probability: "2.50%",
  },
  {
    icon: '<div class="list1"><img src="img/icon/15.jpg">S.冷霜雪鎧(男)</div>',
    num: "1",
    probability: "2.50%",
  },
  {
    icon: '<div class="list1"><img src="img/icon/16.jpg">S.冷霜雪鎧(女)</div>',
    num: "1",
    probability: "2.50%",
  },
  {
    icon: '<div class="list1"><img src="img/icon/17.jpg">S.星芒雪花</div>',
    num: "1",
    probability: "2.50%",
  },
  {
    icon: '<div class="list1"><img src="img/icon/18.jpg">S.S.寒冰戰戟</div>',
    num: "1",
    probability: "1.80%",
  },
  {
    icon: '<div class="list1"><img src="img/icon/19.jpg">春雨服禮包(男)</div>',
    num: "1",
    probability: "6.55%",
  },
  {
    icon: '<div class="list1"><img src="img/icon/20.jpg">春雨服禮包(女)</div>',
    num: "1",
    probability: "6.55%",
  },
  {
    icon: '<div class="list1"><img src="img/icon/21.jpg">徐羅伐禮包(男)</div>',
    num: "1",
    probability: "7.00%",
  },
  {
    icon: '<div class="list1"><img src="img/icon/22.jpg">徐羅伐禮包(女)</div>',
    num: "1",
    probability: "7.00%",
  },
  {
    icon: '<div class="list1"><img src="img/icon/23.jpg">學校樂隊禮包(男)</div>',
    num: "1",
    probability: "7.25%",
  },
  {
    icon: '<div class="list1"><img src="img/icon/24.jpg">學校樂隊禮包(女)</div>',
    num: "1",
    probability: "7.25%",
  },
  {
    icon: '<div class="list1"><img src="img/icon/25.jpg">雷帝禮包(男)</div>',
    num: "1",
    probability: "7.75%",
  },
  {
    icon: '<div class="list1"><img src="img/icon/26.jpg">雷帝禮包(女)</div>',
    num: "1",
    probability: "7.75%",
  },
];
var h2 = [];
for (var i = 0; i < lottery2_data.length; i++) {
  h2.push("<tr>");
  var obj = lottery2_data[i];
  for (var p in obj) h2.push("<td>" + obj[p] + "</td>");
  h2.push("</tr>");
}
// 轉盤獎池內容tab表單3銀雪球
let lottery3_data = [
  {
    icon: '<div class="list1"><img src="img/icon/27.jpg">白色火靈獸像</div>',
    num: "1",
    probability: "2.0%",
  },
  {
    icon: '<div class="list1"><img src="img/icon/28.jpg">強化研磨劑</div>',
    num: "1",
    probability: "2.0%",
  },
  {
    icon: '<div class="list1"><img src="img/icon/29.jpg">煉武幸運符5</div>',
    num: "1",
    probability: "2.5%",
  },
  {
    icon: '<div class="list1"><img src="img/icon/30.jpg">煉衣幸運符5</div>',
    num: "1",
    probability: "2.5%",
  },
  {
    icon: '<div class="list1"><img src="img/icon/31.jpg">神仙石碑(金)</div>',
    num: "2",
    probability: "6.0%",
  },
  {
    icon: '<div class="list1"><img src="img/icon/32.jpg">泰和金櫃</div>',
    num: "1",
    probability: "6.5%",
  },
  {
    icon: '<div class="list1"><img src="img/icon/33.jpg">裝備轉換符咒</div>',
    num: "1",
    probability: "8.0%",
  },
  {
    icon: '<div class="list1"><img src="img/icon/34.jpg">聖誕精靈(男)</div>',
    num: "1",
    probability: "8.5%",
  },
  {
    icon: '<div class="list1"><img src="img/icon/35.jpg">聖誕精靈(女)</div>',
    num: "1",
    probability: "8.5%",
  },
  {
    icon: '<div class="list1"><img src="img/icon/36.jpg">泰華忠魂</div>',
    num: "1",
    probability: "12.5%",
  },
  {
    icon: '<div class="list1"><img src="img/icon/37.jpg">合成保護咒</div>',
    num: "1",
    probability: "13.0%",
  },
  {
    icon: '<div class="list1"><img src="img/icon/38.jpg">秘．高級假面箱</div>',
    num: "1",
    probability: "15.0%",
  },
  {
    icon: '<div class="list1"><img src="img/icon/39.jpg">秘．高級六角箱</div>',
    num: "1",
    probability: "15.0%",
  },
];
var h3 = [];
for (var i = 0; i < lottery3_data.length; i++) {
  h3.push("<tr>");
  var obj = lottery3_data[i];
  for (var p in obj) h3.push("<td>" + obj[p] + "</td>");
  h3.push("</tr>");
}
// 轉盤獎池內容tab表單4銅雪球
let lottery4_data = [
  {
    icon: '<div class="list1"><img src="img/icon/40.jpg">煉武幸運符4</div>',
    num: "1",
    probability: "2.5%",
  },
  {
    icon: '<div class="list1"><img src="img/icon/41.jpg">煉衣幸運符4</div>',
    num: "1",
    probability: "2.5%",
  },
  {
    icon: '<div class="list1"><img src="img/icon/42.jpg">黃色火靈獸像</div>',
    num: "1",
    probability: "5.5%",
  },
  {
    icon: '<div class="list1"><img src="img/icon/43.jpg">黑色球棒</div>',
    num: "1",
    probability: "5.5%",
  },
  {
    icon: '<div class="list1"><img src="img/icon/44.jpg">祝福隊伍石碑</div>',
    num: "2",
    probability: "7.0%",
  },
  {
    icon: '<div class="list1"><img src="img/icon/45.jpg">合武符</div>',
    num: "1",
    probability: "10.0%",
  },
  {
    icon: '<div class="list1"><img src="img/icon/46.jpg">合衣符</div>',
    num: "1",
    probability: "10.0%",
  },
  {
    icon: '<div class="list1"><img src="img/icon/47.jpg">高級強化道具</div>',
    num: "1",
    probability: "11.0%",
  },
  {
    icon: '<div class="list1"><img src="img/icon/48.jpg">泰和青櫃鑰匙</div>',
    num: "2",
    probability: "14.0%",
  },
  {
    icon: '<div class="list1"><img src="img/icon/49.jpg">追蹤秘笈</div>',
    num: "20",
    probability: "16.0%",
  },
  {
    icon: '<div class="list1"><img src="img/icon/50.jpg">瞬移秘笈</div>',
    num: "20",
    probability: "16.0%",
  },
];
var h4 = [];
for (var i = 0; i < lottery4_data.length; i++) {
  h4.push("<tr>");
  var obj = lottery4_data[i];
  for (var p in obj) h4.push("<td>" + obj[p] + "</td>");
  h4.push("</tr>");
}
// 回饋專區tab表單1
let refresh1_data = [
  {
    icon: '<div class="list1"><img src="img/icon/78.jpg">聖誕轉轉樂使用券</div>',
    num: "1",
    claimAmount: "1",
  },
  {
    icon: '<div class="list1"><img src="img/icon/79.jpg">巧克力腰帶(30日)</div>',
    num: "20",
    claimAmount: "1",
  },
  {
    icon: '<div class="list1"><img src="img/icon/80.jpg">聖誕禮物盒</div>',
    num: "55",
    claimAmount: "3",
  },
  {
    icon: '<div class="list1"><img src="img/icon/81.jpg">秘．武器裝飾箱</div>',
    num: "75",
    claimAmount: "3",
  },
  {
    icon: '<div class="list1"><img src="img/icon/82.jpg">強化研磨劑</div>',
    num: "100",
    claimAmount: "3",
  },
];
var h5 = [];
for (var i = 0; i < refresh1_data.length; i++) {
  h5.push("<tr>");
  var obj = refresh1_data[i];
  for (var p in obj) h5.push("<td>" + obj[p] + "</td>");
  h5.push("</tr>");
}
// 回饋專區tab表單2
let refresh2_data = [
  {
    icon: '<div class="list1"><img src="img/icon/67.jpg">S.白雪恥帽</div>',
    num: "1",
    probability: "9.50%",
  },
  {
    icon: '<div class="list1"><img src="img/icon/68.jpg">S.白雪恥服（男）</div>',
    num: "1",
    probability: "9.50%",
  },
  {
    icon: '<div class="list1"><img src="img/icon/69.jpg">S.白雪恥服（女）</div>',
    num: "1",
    probability: "9.50%",
  },
  {
    icon: '<div class="list1"><img src="img/icon/70.jpg">S.雪花裝飾</div>',
    num: "1",
    probability: "9.50%",
  },
  {
    icon: '<div class="list1"><img src="img/icon/71.jpg">S.雪花棒</div>',
    num: "1",
    probability: "7.00%",
  },
  {
    icon: '<div class="list1"><img src="img/icon/72.jpg">S.俐落冷霜髮(男)</div>',
    num: "1",
    probability: "9.50%",
  },
  {
    icon: '<div class="list1"><img src="img/icon/73.jpg">S.冰寒雪蓮髮(女)</div>',
    num: "1",
    probability: "9.50%",
  },
  {
    icon: '<div class="list1"><img src="img/icon/74.jpg">S.冷霜雪鎧(男)</div>',
    num: "1",
    probability: "9.50%",
  },
  {
    icon: '<div class="list1"><img src="img/icon/75.jpg">S.冷霜雪鎧(女)</div>',
    num: "1",
    probability: "9.50%",
  },
  {
    icon: '<div class="list1"><img src="img/icon/76.jpg">S.星芒雪花</div>',
    num: "1",
    probability: "9.50%",
  },
  {
    icon: '<div class="list1"><img src="img/icon/77.jpg">S.寒冰戰戟</div>',
    num: "1",
    probability: "7.00%",
  },

];
var h6 = [];
for (var i = 0; i < refresh2_data.length; i++) {
  h6.push("<tr>");
  var obj = refresh2_data[i];
  for (var p in obj) h6.push("<td>" + obj[p] + "</td>");
  h6.push("</tr>");
}


