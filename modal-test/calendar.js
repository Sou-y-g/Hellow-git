const date = new Date(); // 現在時刻
let year = date.getFullYear();
let month = date.getMonth() + 1;
const weeks = ["日", "月", "火", "水", "木", "金", "土"];

function createCalendar(year, month) {
  const monthStart = new Date(year, month - 1, 1); // 月の最初の日を取得
  const monthEnd = new Date(year, month, 0); // 月の最後の日を取得
  const endDay = monthEnd.getDate(); // 月の末日
  const lastMonthEndDay = new Date(year, month - 2, 0); //前月の末日
  const lastMonthEndCount = lastMonthEndDay.getDate(); //前月の末日
  const startDay = monthStart.getDay(); // 月の最初の日の曜日を取得 weeksのindex番号
  let dayCount = 1; // 日にちのカウント
  let calendarArea = document.getElementById("calendar");
  const table = document.createElement("table");
  const tBody = document.createElement("tBody");

  // 曜日の行を作成
  for (let week = 0; week < weeks.length; week++) {
    const tHeader = document.createElement("th");
    tHeader.innerHTML = weeks[week];
  }

  //カレンダー全体の行作成
  for (let w = 0; w < 6; w++) {
    // calendar += "<tr>";
    const row = document.createElement("tr");
    //カレンダー全体の列作成
    for (let d = 0; d < 7; d++) {
      const cell = document.createElement("td");
      //月初よりも前の場合
      if (w == 0 && d < startDay) {
        let num = lastMonthEndCount - startDay + d + 1;
        cell.classList.add("is-disabled");
        cell.innerHTML = num;

        //月末よりも後の場合
      } else if (dayCount > endDay) {
        let num = dayCount - endDay;
        cell.classList.add("is-disabled");
        cell.innerHTML = num;
        dayCount++;
      } else {
        const date = `${year}/${month}/${dayCount}`;
        cell.dataset.date = date;
        cell.innerText = dayCount;
        cell.classList.add("active-cell");
        calendar += cell;
        cell.addEventListener("click", function (e) {
          modalOpen(e.target.dataset.date);
        });
        dayCount++;
      }
      row.appendChild(cell);
    }
    tBody.appendChild(row);
  }
  table.appendChild(tBody);

  calendar += "<h1>" + year + "/" + month + "</h1>";
  calendarArea.appendChild(table);
}

createCalendar(year, month);

function moveCalendar(e) {
  document.querySelector("#calendar").innerHTML = "";

  if (e.target.id === "prev") {
    month--;

    if (month < 1) {
      year--;
      month = 12;
    }
  }

  if (e.target.id === "next") {
    month++;

    if (month > 12) {
      year++;
      month = 1;
    }
  }

  createCalendar(year, month);
}

document.querySelector("#prev").addEventListener("click", moveCalendar);
document.querySelector("#next").addEventListener("click", moveCalendar);
