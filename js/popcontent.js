// 活動說明內文
let description = {
  title: `<div class="pop_title">活動說明</div>`,
  content: `<div class="pop_content">
  <ul>
  <li>1.活動時間：2023/12/20 12:00 ~2024/1/18 10:00​</li>
  <li>2.活動期間內，玩家每天於活動頁面登入時，消耗搞鬼點數進行轉盤抽取，可從中獲得各式虛寶及時裝道具。</li>
  <li>3.轉盤總共10格，分為金雪球、銀雪球、銅雪球、綠雪球，每次刷新必定出現金雪球x1、銀雪球x1、銅雪球x1，其餘皆為綠雪球。</li>
  <li>4.轉盤上各獎勵中獎機率為金雪球1%、銀雪球4%、銅雪球10%、綠雪球85%，綠雪球的各項目中獎機率均等。​</li>
  <li>5.轉盤每次刷新出現的獎項皆不同，均為機率性出現。</li>
  <li>6.轉盤獎勵可重複抽取，抽中一獎時會自動刷新轉盤內獎品。</li>
  <li>7.抽中金雪球時會強制刷新轉盤內獎品，轉盤刷新前可不限次數重複抽取，直到抽中金雪球時自動刷新轉盤內獎品或是手動點擊刷新鈕刷新轉盤內獎品，轉盤內容物才會更換。</li>
  <li>8.如在十連抽內某一抽獲得金雪球的獎品剩餘抽數則會是新轉盤內容的獎品。​<br>
  （EX：在十連抽的第六抽抽中金雪球，後面第七、八、九、十抽的獎品會是新一輪轉盤的內容，同時轉盤上所顯示的獎品也將是新的一輪。）</li>
  <li>9.累積刷新次數達到標準可獲得回饋獎勵，詳細獎品資訊請參考刷新回饋規則。</li>
  <li>10.活動期間內，抽取次數每滿150次可獲得一支聖誕襪，<span>首次累積滿100抽取次數即可獲得一支</span>，聖誕襪開啟後必定從中獲得一件S套時裝，不限領取次數。</li>
  </ul>
  </div>`,
};
// 轉盤獎池內容
let lottery = {
  title: `<div class="pop_title">活動紀錄</div>`,
  content: `<div class="pop_content">
  <ul class="pop_tab">
  <li class="tab1" data-tab="tab1-1">綠雪球</li>
  <li class="tab1" data-tab="tab1-2">金雪球</li>
  <li class="tab1" data-tab="tab1-3">銀雪球</li>
  <li class="tab1" data-tab="tab1-4">銅雪球</li>
  </ul>
  <div class="tab1_content">
  <table>
  <thead>
      <tr>
          <th width="3%">道具名稱</th>
          <th width="1%">數量</th>
          <th width="1%">出現機率</th>
      </tr>
  </thead>
  <tbody class="tab_content1"  data-tab="tab1-1" id="content_lo1"></tbody>
  <tbody class="tab_content1"  data-tab="tab1-2" id="content_lo2"></tbody>
  <tbody class="tab_content1"  data-tab="tab1-3" id="content_lo3"></tbody>
  <tbody class="tab_content1"  data-tab="tab1-4" id="content_lo4"></tbody>
</table> 
</div>`,
};
// 轉轉樂活動紀錄
let loHistory = {
  title: `<div class="pop_title">活動紀錄</div>`,
  content: `<div class="pop_content">
              <table>  
                  <thead>
                  <tr>
                      <th width="3%">道具名稱</th>
                      <th width="1%">數量</th>
                      <th width="1%">可領取次數</th>
                  </tr>
                </thead>
                <tbody class="listClaim"> 
                </tbody>
              </table>
            </div>`,
};
// 回饋專區
let reward = {
  title: `<div class="pop_title">轉盤獎池內容</div>`,
  content: `<div class="pop_content">
  <ul class="pop_tab">
  <li class="tab2" data-tab="tab2-1">刷新回饋領取</li>
  <li class="tab2" data-tab="tab2-2">刷新回饋規則</li>
  <li class="tab2" data-tab="tab2-3">聖誕襪獎品</li>
  </ul>
  <div class="tab2_content">
    <div class="tab_content2"  data-tab="tab2-1">
        <table >
        <thead>
            <tr>
                <th width="2%">道具名稱</th>
                <th width="0.5%">數量</th>
                <th width="1.25%">可領取次數</th>
                <th width="1.0%">剩餘次數</th>
                <th width="1.25%">領取</th>
            </tr>
        </thead>
        <tbody class="listClaim2">
        </tbody>
        </table>
    </div> 
    <div class="tab_content2"  data-tab="tab2-2">
        <table >
        <div>
          <ul>
            <li>1.刷新次數達到指定次數可獲得對應獎勵，如下表。每輪獎勵須全數領取完畢後才會重開始新的一輪。​<br>
            （EX：首輪聖誕禮物盒刷新回饋次數為55，需完成整輪刷新回饋取得強化研磨劑後才會開始下一輪。領取到第二個聖誕禮物盒，總共所需兌換次數為155，而非110。）</li>
            <li>2. 刷新回饋獎勵「聖誕轉轉樂使用券」、「巧克力腰帶(30日)」活動期間內僅限領取一次，首輪領取完畢後便無法再次領取，其餘皆可透過循環方式重複領取，最多可循環3輪。​</li>
            <li>3.達到領取標準後，於「刷新回饋領取」分頁點擊領取鈕便可進行領取。</li>
          </ul>
        </div>
        <thead>
            <tr>
                <th width="3%">道具名稱</th>
                <th width="1%">所需刷新次數</th>
                <th width="1%">可領取次數</th>
            </tr>
        </thead>
          <tbody  id="content_re1"></tbody>
        </table> 
    </div>
    <div  class="tab_content2"  data-tab="tab2-3">
        <table>
        <div>
          <ul >
            <li>1.累積每滿150次轉取次數便可獲得一支聖誕襪，首次累積轉取次數達到100可獲得一支聖誕襪<span>(每支帳號限定一次)</span>，之後則恢復每轉取150次獲取一支聖誕襪。</li>
            <li>2.聖誕襪的獎品如下表所示，持有聖誕襪時點擊聖誕襪鈕可從所有獎品中依照機率隨機獲得其中一項。​</li>
          </ul>
        </div>
        <thead>
            <tr>
                <th width="2%">道具名稱</th>
                <th width="1%">數量</th>
                <th width="1%">出現機率</th>
            </tr>
        </thead>
        <tbody id="content_re2"</tbody>
        </table> 
    </div>
</div>`,
};
// 注意事項
let notice = {
  title: `<div class="pop_title">注意事項</div>`,
  content: `<div class="pop_content">
  <ul>
  <li>1.本活動刷新不等於抽中轉盤獎品，需再進行轉取才可取得活動獎勵。​​</li>
  <li>2.本活動使用搞鬼點數進行參加活動。​</li>
  <li>3.本活動頁面將於活動截止後關閉，請玩家務必於活動期間內領取完畢，結束後將不開放重新領取。</li>
  <li>4.本活動內的商品為機率性，消費者購買或參與活動不代表即可獲得特定道具。​</li>
  <li>5.本活動部份獎勵為不可交易，請慎選領取道具角色，若使用錯誤角色領取，恕不提供轉移服務。</li>
  <li>6.本活動獎勵將於領取後的30分鐘內，發放至帳號內的禮物盒中。​</li>
  <li>7.本活動僅限電腦版領取，若使用手機版登入活動頁面，導致獎勵無法順利發送恕不補發。​</li>
  <li>8.本活動之虛寶將無法折換現金或其他等值商品。</li>
  <li>​9.累積刷新次數達到標準可獲得回饋獎勵，詳細獎品資訊請參考刷新回饋規則。</li>
  <li>10.本公司有權檢視各參加者之活動參與行為及得獎情形是否涉嫌例：人為操作、惡意灌票、蓄意偽造、多開（重）帳號、短時間異常多筆參與行為、透過任何電腦程式參與活動、詐欺、任何違反會員系統服務合約及停權管理規章之情事者，或以任何其他不正當的方式意圖以進行不實或虛偽活動參與行為，參賽者因上述情形所獲得之活動資格及獎項，本公司得一概取消之，其帳號亦將停權處份。​</li>
  <li>11.玩家參與本活動之同時，即同意接受本活動辦法與注意事項之規範，如不同意或有違反，應視為無參加資格 ，或本公司得取消其使用資格，​如因此有致生損害於本公司或其他任何第三人，本公司得向參加者請求損害賠償，參加者應負一切相關責任。​</li>
  <li>12.掘夢網保留變更、取消或終止本活動的權利，包括但不限於本活動條款及活動辦法。​</li>
  </ul>
  </div>`,
};

// 大跳窗開始
// 轉盤獎品
let consequenceG = {
  title: `<div class="pop_title">轉盤結果</div>`,
  content: `<div class="pop_content1">
  <div class ="goldNotice">
  恭喜獲得金雪球！<br>
  ※輪盤抽到金雪球後將自動刷新。
  </div>
  <div class ="icon_list">
  </div>
  <div class='confirmBtn' onclick='cancel();'>確認</div>
  </div>`,
};
let consequence = {
  title: `<div class="pop_title">轉盤結果</div>`,
  content: `<div class="pop_content1">
  <div class ="icon_list">
  </div>
  <div class='confirmBtn' onclick='cancel();'>確認</div>
  </div>`,
};
// 小跳窗開始
//請先登入掘夢網會員
let login_digeam = {
  content: `<div class="pop_title">請先登入掘夢網會員</div>
<div class="pop_btn">
<div class="pop_confirm" id="confirm" onclick="cancel();">確認</div>
</div>`,
};
// 活動已結束
let end = {
  content: `<div class="pop_title">​活動已截止！<br>感謝您的支持！前往官網了解更多最新活動情報。</div>
<div class="pop_btn">
<div class="pop_confirm" onclick="cancel();"><a href="https://go.digeam.com/home/">前往官網</a></div>
</div>`,
};
// ​是否消耗69點數進行1次轉取?
let point69 = {
  content: `<div class="pop_title">是否消耗69點數進行1次轉取?</div>
<div class="pop_btn">
<div class="pop_confirm 1" data-num="1" onclick="cancel();lottery_func(1)">確認</div>
<div class="pop_cancel" onclick="cancel();">取消</div>
</div>`,
};
// ​是否消耗695點數進行1次轉取?
let point695 = {
  content: `<div class="pop_title">是否消耗695點數進行1次轉取?</div>
<div class="pop_btn">
<div class="pop_confirm 10" data-num="10" onclick="cancel();lottery_func(10)">確認</div>
<div class="pop_cancel" onclick="cancel();">取消</div>
</div>`,
};

// 是否消耗聖誕襪進行抽獎?
// let pointsock = {
//   content: `<div class="pop_title">是否消耗聖誕襪進行抽獎?</div>
// <div class="pop_btn">
// <div class="pop_confirm 0" data-num="0" onclick="lottery_func(0)">確認</div>
// <div class="pop_cancel" onclick="cancel();">取消</div>
// </div>`,
// };

// 是否消耗10點數進行刷新？
let point10 = {
  content: `<div class="pop_title">是否消耗10點數進行刷新？
<span>※請注意，刷新後輪盤上獎品將全數更換，現有轉盤將無法再進行抽取。</span>​</div>
<div class="pop_btn">
<div class="pop_confirm new" onclick="cancel(); refresh()">確認</div>
<div class="pop_cancel" onclick="cancel();">取消</div>
</div>`,
};
// 點數不足
let pointNo = {
  content: `<div class="pop_title">點數不足，是否前往儲值？</div>
<div class="pop_btn">
<div class="pop_confirm" onclick="cancel();"><a href="https://www.digeam.com/member/billing">確認</a></div>
<div class="pop_cancel" onclick="cancel();">取消</div>
</div>`,
};
// 未持有聖誕襪
let socksNo = {
  content: `<div class="pop_title">未持有聖誕襪，無法獲得禮物</div>
<div class="pop_btn">
<div class="pop_confirm" onclick="cancel(); ">確認</div>
</div>`,
};
// 抽到金雪球進行刷新
// let goldNotice = {
//   content: `<div class="pop_title">抽到金雪球<br>
// <span>※請注意，刷新後輪盤上獎品將全數更換，現有轉盤將無法再進行抽取。</span></div>
// <div class="pop_btn">
// <div class="pop_confirm" onclick=" window.location.reload();">確認</div>
// </div>`,
// };

// 刷新回饋系統點擊領取鈕
// 次數不足
// let amountNo = {
//   content: `<div class="pop_title">可領取次數不足，無法兌換​</div>
//   <div class="pop_btn">
//   <div class="pop_confirm" onclick="cancel();">確認</div>
//   </div>`,
// };

// 轉取領取成功 & 刷新回饋領取成功
let successClaim = {
  content: `<div class="pop_title">領取成功​</div>
  <div class="pop_btn">
  <div class="pop_confirm" onclick="cancel(); window.location.reload()">確認</div>
  </div>`,
};
