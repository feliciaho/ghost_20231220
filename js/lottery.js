
const total_items = 10;
const minimum_jumps = 30; // 超過這數字開始進入抽獎
let current_index = -1;
let jumps = 0;
let speed = 30;
let timer = 0;
let prize = -1;

function runCircle() {
  $(`[data-order="${current_index}"]`).removeClass("is-active");

  current_index += 1;

  if (current_index > total_items - 1) {
    current_index = 0;
  }

  $(`[data-order="${current_index}"]`).addClass("is-active");
}

function generatePrizeNumber() {
  return Math.floor(Math.random() * total_items);
}

function controllSpeed() {
  jumps += 1;
  runCircle();
  // 1. 抽到獎品停止遊戲
  if (jumps > minimum_jumps + 10 && prize === current_index) {

    clearTimeout(timer);
    // popup跳出抽到獎品
    prize = -1;
    jumps = 0;
    // 2. 還沒抽繼續跑
  } else {
    // 還沒進入關鍵抽獎階段前的速度 (前菜轉特效)
    if (jumps < minimum_jumps) {
      $(".mask2").show();
      speed -= 5; // 加快
      // 決定獎品的位置
    // } else if (jumps === minimum_jumps) {
      // const random_number = generatePrizeNumber();
      // 抽到的獎品
    } else {
      // 下一個就是獎品時放慢鈍一下
      if (jumps > minimum_jumps + 10 && prize === current_index + 1) {
        speed += 50;
      } else {
        speed += 2; // 減速
      }
    }
    if (speed < 40) {
      speed = 40;
    }
    timer = setTimeout(controllSpeed, speed);

  }
}

function init() {
  jumps = 0;
  speed = 100;
  prize = -1;
  controllSpeed();

}

