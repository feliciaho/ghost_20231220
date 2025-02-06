let Api = "http://192.168.0.41:8079/api/GO/20231220/getSetting";
let user = "minnn112";

// 登出的方程式
function logout_dg() {
  $("#logout-form").submit();
}

// 登入api
login();
function login() {
  //   $.post(
  //     Api,
  //     {
  //       type: "login",
  //       user: user,
  //     },
  // function (res) {
  // })
  res = {
    status: 1,
    point: 620,
    socks: 8,
    refresh: 258,
    amount: 1259,
    lotteryList: [
      {
        id: 9,
        item_name: "藍色魔術師服(男)",
        img: 9,
      },
      {
        id: 60,
        item_name: "泰和銅櫃鑰匙",
        img: 60,
      },
      {
        id: 65,
        item_name: "伺服器傳音秘笈",
        img: 65,
      },
      {
        id: 63,
        item_name: "尚仁分流傳音秘笈",
        img: 63,
      },
      {
        id: 52,
        item_name: "泰和白櫃",
        img: 52,
      },
      {
        id: 37,
        item_name: "合成保護咒",
        img: 37,
      },
      {
        id: 64,
        item_name: "高級怪物召喚符咒",
        img: 64,
      },
      {
        id: 46,
        item_name: "合衣符",
        img: 46,
      },
      {
        id: 56,
        item_name: "泰和青櫃",
        img: 56,
      },
      {
        id: 56,
        item_name: "泰和青櫃",
        img: 56,
      },
    ],
  };
  if (res.status == -99) {
    // 未登錄
    $(".refreshBtn ,.startBtn1 ,.startBtn10").on("click", function () {
      $(".mask1 , .pop_wrap2").fadeIn(200);
      $(".pop_box2").html(login_digeam.content);
    });
  } else if (res.status == -90) {
    // 活動已結束
    $(".refreshBtn ,.startBtn1 ,.startBtn10").on("click", function () {
      $(".mask1 , .pop_wrap2").fadeIn(200);
      $(".pop_box2").html(end.content);
    });
  } else if (res.status == 1) {
    // 是否消耗69點轉一次
    $(".startBtn1 ").on("click", function () {
      let approve = $(".approve_box").attr("data-approve");
      if (approve == "true") {
        lottery_func(1);
      } else {
        $(".mask1 , .pop_wrap2").fadeIn(200);
        $(".pop_box2").html(point69.content);
        // 確認消耗點數抽取按鈕
        $("pop_confirm 1").on("click", function () {
          lottery_func($(this).data("num"));
        });
      }
    });
    // 是否消耗695點轉十次
    $(".startBtn10 ").on("click", function () {
      let approve = $(".approve_box").attr("data-approve");
      if (approve == "true") {
        lottery_func(10);
      } else {
        $(".mask1 , .pop_wrap2").fadeIn(200);
        $(".pop_box2").html(point695.content);
        // 確認消耗點數抽取按鈕
        $("pop_confirm 10").on("click", function () {
          lottery_func($(this).data("num"));
        });
      }
    });
    // 是否消耗10點刷新
    $(".refreshBtn ").on("click", function () {
      let approve = $(".approve_box").attr("data-approve");
      if (approve == "true") {
        // 刷新function
        refresh();
      } else {
        $(".mask1 , .pop_wrap2").fadeIn(200);
        $(".pop_box2").html(point10.content);
      }
    });
    // 聖誕襪>0的時候要發光,是否持有聖誕襪
    if (res.socks > 0) {
      $(".sockBtn").addClass("active");
      $(".sockBtn").on("click", function () {
        lottery_func(0);
      });
    } else {
      $(".sockBtn").on("click", function () {
        $(".mask1 , .pop_wrap2").fadeIn(200);
        $(".pop_box2").html(socksNo.content);
        // 確認消耗點數抽取按鈕
        $(".pop_confirm 0").on("click", function () {
          lottery_func($(this).data("num"));
        });
      });
    }
    // 點數之類的數字顯示
    $(".point").html(res.point);
    $(".lotteryAmount").html(res.amount);
    $(".sockAmount").html(res.socks);
    $(".refreshAmount").html(res.refresh);
    // 轉盤獎池的獎品
    for (let i = 0; i < res.lotteryList.length; i++) {
      let itemName = res.lotteryList[i].item_name;
      let itemImage = res.lotteryList[i].img;
      let itemId = res.lotteryList[i].id;
      $('.square[data-order="' + i + '"]').html(
        `<div class="lottery_box" data-id="${itemId}">
              <img src="/img/icon/${itemImage}.jpg" >
              <p>${itemName}</p>
            </div>`
      );
    }
  }
}
//     }
//   );
// }

// 抽獎api
function lottery_func(_num) {
  $(".mask2").show();
  //   $.post(
  //     Api,
  //     {
  //       type: "lottery",
  //       user: user,
  //       num:_num,
  //     },
  // function (res) {
  $(".mask2").hide();
  res = {
    status: 1,
    gold: 1,
    result: [
      {
        id: 56,
        item_name: "泰和青櫃",
        img: 56,
        cate: "金鈴鐺",
      },
      {
        id: 66,
        item_name: "分流傳音秘笈",
        img: 66,
        cate: "小鈴鐺",
      },
      {
        id: 58,
        item_name: "合成初始符",
        img: 58,
        cate: "小鈴鐺",
      },
      {
        id: 61,
        item_name: "恩寵隊伍石碑",
        img: 61,
        cate: "小鈴鐺",
      },
      {
        id: 51,
        item_name: "強飾符",
        img: 51,
        cate: "小鈴鐺",
      },
      {
        id: 61,
        item_name: "恩寵隊伍石碑",
        img: 61,
        cate: "小鈴鐺",
      },
      {
        id: 51,
        item_name: "強飾符",
        img: 51,
        cate: "小鈴鐺",
      },
      {
        id: 58,
        item_name: "合成初始符",
        img: 58,
        cate: "小鈴鐺",
      },
      {
        id: 58,
        item_name: "合成初始符",
        img: 58,
        cate: "小鈴鐺",
      },
      {
        id: 61,
        item_name: "恩寵隊伍石碑",
        img: 61,
        cate: "小鈴鐺",
      },
    ],
  };
  if (res.status == -98) {
    $(".mask1 , .pop_wrap2").fadeIn(200);
    $(".pop_box2").html(pointNo.content);
  } else if (res.status == -97) {
    $(".mask1 , .pop_wrap2").fadeIn(200);
    $(".pop_box2").html(socksNo.content);
  } else if (res.status == 1) {
    if (_num == 0) {
      // 如果是聖誕襪直接顯示獎品;
      let loStr = "";
      res.result.forEach((i) => {
        loStr += `
        <div class="icon_box">
        <img src="/img/icon/${i.img}.jpg" alt="">
        <p>${i.item_name}</p>
        </div>`;
      });
      $(".mask0 , .pop_wrap1").fadeIn(200);
      $(".pop_box").html(consequence.title + consequence.content);
      $(".icon_list").html(loStr);
      // 轉一次轉十次
    } else {
      let approve = $(".approve_box").attr("data-approve");
      // 不略過動畫
      if (approve == "false") {
        // 動畫轉轉開始

        init();

        // 指向獎品的位置
        let itemPlace = res.result[0].id;
        prize = $('.lottery_box[data-id="' + itemPlace + '"]')
          .parent(".square")
          .data("order");
        setTimeout(show1, 3000);

        function show1() {
          $(".mask2").hide();
          // 獎品列表產出
          let loStr1 = "";
          res.result.forEach((i) => {
            loStr1 += `
            <div class="icon_box" data-id="${i.id}">
            <img src="/img/icon/${i.img}.jpg" alt="">
            <p>${i.item_name}</p>
            </div>`;
          });
          // 判斷是否有抽到金獎需要重整與否
          if (res.gold == 1) {
            $(".mask0 , .pop_wrap1").fadeIn(500);
            $(".pop_box").html(consequenceG.title + consequenceG.content);
            $(".icon_list").html(loStr1);
            // 新增金獎樣式
            res.result.forEach((i) => {
              if (i.cate === "金鈴鐺") {
                $(`.icon_box[data-id="${i.id}"]`).addClass("active");
              }
            });
          } else {
            $(".mask0 , .pop_wrap1").fadeIn(500);
            $(".pop_box").html(consequence.title + consequence.content);
            $(".icon_list").html(loStr1);
          }
        }
      } else {
        // 指向獎品的位置
        let itemPlace = res.result[0].id;
        prize = $('.lottery_box[data-id="' + itemPlace + '"]')
          .parent(".square")
          .data("order");
        let loStr1 = "";
        res.result.forEach((i) => {
          loStr1 += `
        <div class="icon_box" data-id="${i.id}">
        <img src="/img/icon/${i.img}.jpg" alt="">
        <p>${i.item_name}</p>
        </div>`;
        });
        // 判斷是否有抽到金獎需要重整與否
        if (res.gold == 1) {
          $(".mask0 , .pop_wrap1").fadeIn(500);
          $(".pop_box").html(consequenceG.title + consequenceG.content);
          $(".icon_list").html(loStr1);
          // 新增金獎樣式
          res.result.forEach((i) => {
            if (i.cate === "金鈴鐺") {
              $(`.icon_box[data-id="${i.id}"]`).addClass("active");
            }
          });
        } else {
          $(".mask0 , .pop_wrap1").fadeIn(500);
          $(".pop_box").html(consequence.title + consequence.content);
          $(".icon_list").html(loStr1);
        }
      }
      // 判斷是否有抽到金獎需要重整與否
      //  if (res.gold == 1) {
      //   $(".confirmBtn").on("click", function () {
      //     $(".mask0 , .pop_wrap2").fadeIn(200);
      //     $(".pop_box2").html(goldNotice.content);
      //   });
      // }
    }
  }
}
//   );
// }

// 刷新api
function refresh() {
  // $post(
  //   Api,
  //   {
  //     type:"refresh",
  //     user:user,
  //   },
  // )function (res) {
  res = {
    status: 1,
  };
  if (res.status == -98) {
    $(".mask1 , .pop_wrap2").fadeIn(200);
    $(".pop_box2").html(pointNo.content);
  } else if (res.status == 1) {
    window.location.reload();
  }
  // }
}

// 轉轉樂活動紀錄
function lotteryHistory() {
  //   $.post(
  //     Api,
  //     {
  //       type: "lotteryHistory",
  //       user: user,
  //     },
  // function (res) {
  res = {
    status: 1,
    lotHistory_list: [
      {
        id: 1,
        img: 63,
        item_name: "尚仁分流傳音秘笈",
        count: 15,
        is_send: "Y",
      },
      {
        id: 2,
        img: 56,
        item_name: "泰和青櫃",
        count: 1,
        is_send: "N",
      },
      {
        id: 3,
        img: 64,
        item_name: "高級怪物召喚符咒",
        count: 30,
        is_send: "N",
      },
      {
        id: 4,
        img: 56,
        item_name: "泰和青櫃",
        count: 1,
        is_send: "N",
      },
      {
        id: 5,
        img: 64,
        item_name: "高級怪物召喚符咒",
        count: 30,
        is_send: "N",
      },
      {
        id: 6,
        img: 46,
        item_name: "合衣符",
        count: 1,
        is_send: "N",
      },
      {
        id: 7,
        img: 64,
        item_name: "高級怪物召喚符咒",
        count: 30,
        is_send: "N",
      },
      {
        id: 8,
        img: 52,
        item_name: "泰和白櫃",
        count: 1,
        is_send: "N",
      },
      {
        id: 9,
        img: 46,
        item_name: "合衣符",
        count: 1,
        is_send: "N",
      },
      {
        id: 10,
        img: 56,
        item_name: "泰和青櫃",
        count: 1,
        is_send: "N",
      },
    ],
  };
  if (res.status == 1) {
    let str = "";
    let sendStr = "";
    -res.lotHistory_list.forEach((i) => {
      // 判斷是否領取
      if (i.is_send == "N") {
        sendStr = `<td width="1%" class="claimYes" >已領取</th>`;
      } else if (i.is_send == "Y") {
        sendStr = `<td width="1%" class="claimNo" onclick="lotteryClaim(${i.id})">未領取</th>`;
      }
      // 活動紀錄列表
      str += `<tr>
                  <td width="3%"><div class="list1"><img src="/img/icon/${i.img}.jpg">${i.item_name}</div></th>
                  <td width="1%">${i.count}</th>
                  ${sendStr}
              </tr>`;
    });
    $(".mask , .pop_wrap1").fadeIn(200);
    $(".pop_box").html(loHistory.title + loHistory.content);
    $(".listClaim").html(str);
  }
}
//     }
//   );
// }

// 回饋刷新活動紀錄
function refreshHistory() {
  //     $.post(
  //       Api,
  //       {
  //         type:"refreshHistory",
  //         user: user,
  //       },
  //       function (res){
  res = {
    status: 1,
    lotHistory_list: [
      {
        item_name: "聖誕轉轉樂使用券",
        img: 78,
        count: 1,
        used: 1,
        remaining: 0,
      },
      {
        item_name: "巧克力腰帶(30日)",
        img: 79,
        count: 20,
        used: 1,
        remaining: 0,
      },
      {
        item_name: "聖誕禮物盒",
        img: 80,
        count: 55,
        used: 0,
        remaining: 3,
      },
      {
        item_name: "秘．武器裝飾箱",
        img: 81,
        count: 75,
        used: 1,
        remaining: 3,
      },
      {
        item_name: "強化研磨劑",
        img: 82,
        count: 100,
        used: 0,
        remaining: 0,
      },
    ],
  };
  if (res.status == 1) {
    let str = "";
    let str_claim = "";
    // index抓到object在array中的第幾個
    res.lotHistory_list.forEach((item, index) => {
      if (item.used == 0) {
        str_claim = `<td width="1.25%" class="claimYes">無法領取</td>`;
      } else {
        if (item.remaining == 0) {
          str_claim = `<td width="1.25%" class="claimYes2">領取完畢</td>`;
        } else {
          str_claim = `<td width="1.25%" onclick="refreshClaim(${index})" class="claimNo">領取</td>`;
        }
      }
      str += `
        <tr>
          <td width="2%"><div class="list1"><img src="/img/icon/${item.img}.jpg">${item.item_name}</div></td>
          <td width="0.5%">${item.count}</td>
          <td width="1.25%">${item.used}</td>
          <td width="1.0%">${item.remaining}</td>
          ${str_claim}
        </tr>`;
      $(".listClaim2").html(str);
    });
  }
  //       }
  //     );
}
// 轉轉樂領取確認
function lotteryClaim(_id) {
  $("mask2").show();
  // $.post(
  //   Api,
  //   {
  //     type: "lotteryClaim",
  //     user :user,
  //     id:_id,
  //   },
  // function (res){
  $(".mask2").hide();
  res = {
    status: 1,
  };
  if (res.status == 1) {
    $(".mask1 , .pop_wrap2").fadeIn(200);
    $(".pop_box2").html(successClaim.content);
  }
  //  }
  // );
}
// 刷新回饋領取確認
function refreshClaim(_id) {
  $(".mask2").show();
  // $.post(
  //   Api,
  //   {
  //     type: "refreshClaim",
  //     user :user,
  //     id:_id,
  //   },
  // function (res){
  $(".mask2").hide();
  res = {
    status: 1,
  };
  if (res.status == -99) {
    $(".mask1 , .pop_wrap2").fadeIn(200);
    $(".pop_box2").html(amountNo.content);
  } else if (res.status == 1) {
    $(".mask1 , .pop_wrap2").fadeIn(200);
    $(".pop_box2").html(successClaim.content);
  }
  // }
  // );
}
