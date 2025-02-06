$(".pop").on("click", function () {
  $(".mask , .pop_wrap1").fadeIn(500);
  let popId = $(this).data("val");
  if (popId == "description") {
  // 活動說明跳窗
    $(".pop_box").html(description.title + description.content);
  }
  // 轉盤獎池跳窗
  else if (popId == "lottery") {
    $(".pop_box").html(lottery.title + lottery.content);
    $("#content_lo1").html(h1.join("\n"));
    $("#content_lo2").html(h2.join("\n"));
    $("#content_lo3").html(h3.join("\n"));
    $("#content_lo4").html(h4.join("\n"));
    $(".tab_content1").hide();
    $('.tab_content1[data-tab="tab1-1"]').show();
    $('.tab1[data-tab="tab1-1"]').addClass("active");
    $(".tab1").on("click", function () {
      let tabData = $(this).data("tab");
      $(".tab_content1").hide();
      $(".tab1").removeClass("active");
      $('.tab_content1[data-tab="' + tabData + '"]').show();
      $('.tab1[data-tab="' + tabData + '"]').addClass("active");
    });
  }
  // 活動紀錄跳窗
  else if(popId == "history") {
    $(".pop_box").html(loHistory.title + loHistory.content);
  // 轉盤獎池跳窗api函式
     lotteryHistory()
  }
  // 回饋刷新跳窗
  else if (popId == "reward") {
    $(".pop_box").html(reward.title + reward.content);
  // 回饋刷新跳窗api函式
    refreshHistory();
    $("#content_re1").html(h5.join("\n"));
    $("#content_re2").html(h6.join("\n"));
    $(".tab_content2").hide();
    $('.tab_content2[data-tab="tab2-1"]').show();
    $('.tab2[data-tab="tab2-1"]').addClass("active");
    $(".tab2").on("click", function () {
      let tabData = $(this).data("tab");
      $(".tab_content2").hide();
      $(".tab2").removeClass("active");
      $('.tab_content2[data-tab="' + tabData + '"]').show();
      $('.tab2[data-tab="' + tabData + '"]').addClass("active");
    });
  }
  //注意事項跳窗
  else if (popId == "notice") {
    $(".pop_box").html(notice.title + notice.content);
  }
});

//跳窗結束 關閉跳窗開始
$(".mask, .pop_confirm, .pop_cancel").on("click", function () {
  cancel();
});

//綁定跳窗事件
function cancel() {
  $(".mask , .pop_wrap1 , .pop_wrap2 , .mask1 , .mask0").fadeOut(500);
};

// storage略過確認
// $(".approve_box").attr("data-approve", "0");
// get取storage的值
if(localStorage.getItem("skip") =="1"){
  $(".approve_box").attr("src", "/img/passHover.png");
  $(".approve_box").attr("data-approve", "true");
}
$(".approve").on("click", function () {
  let approve = $(".approve_box").attr("data-approve");
  if (approve == "false") {
    $(".approve_box").attr("src", "/img/passHover.png");
    $(".approve_box").attr("data-approve", "true");
    skip(1)
  } else if (approve == "true") {
    $(".approve_box").attr("src", "/img/pass.png");
    $(".approve_box").attr("data-approve", "false");
    skip(0)
  }
});
// set value 為 "skip"
function skip(value){
 localStorage.setItem("skip",value)
}

// shane哥教的發亮方式
// var _id_array = [60, 65, 63];
// $('.lottery_box[data-id="' + _id_array[0] + '"]')
//   .parent(".square")
//   .css("border-bottom", "1px solid");
