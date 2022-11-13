// const buttonOpen = document.getElementsByClassName("calendar-td");
const modal = document.getElementById("easyModal");
const buttonClose = document.getElementById("modalCloseButton");
const submitButton = document.getElementById("sent-button");

// ボタンがクリックされた時
function modalOpen(date) {
  modal.style.display = "block";
  const dateInput = document.getElementById("date-input");
  dateInput.value = date;
  console.log(dateInput.value);
}

// バツ印がクリックされた時
buttonClose.addEventListener("click", modalClose);
function modalClose() {
  modal.style.display = "none";
}

// モーダルコンテンツ以外がクリックされた時
addEventListener("click", outsideClose);
function outsideClose(e) {
  if (e.target == modal) {
    modal.style.display = "none";
  }
}
