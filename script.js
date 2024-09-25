function addEvent() {
  if ($("#user-input").val() != "") {
    event.preventDefault();

    // li 요소 생성
    const li = document.createElement("li");
    li.className = "user-event";

    // span 요소 생성
    const span = document.createElement("span");
    span.textContent = document.querySelector("#user-input").value;

    // checkBox 생성
    let checkButton_html = `
            <input class="form-check-input" type="checkbox" value="" id="todo-checkbox">
        `;

    // 삭제 버튼 생성
    const closeButton = document.createElement("button");
    closeButton.className = "btn-close"; // Bootstrap class

    // li에 모든 요소 넣기
    li.appendChild(span);
    $(li).append(checkButton_html);
    li.appendChild(closeButton);

    // console.log(li);
    $("#user-list").append(li);

    // 입력창 원상태로
    $("#user-input").val("");

    // 완료 표시
    const checkbox = li.querySelector("#todo-checkbox");
    checkbox.addEventListener("change", function () {
      // Toggle the 'completed' class on the span when checkbox is checked/unchecked
      console.log("checkbox checked");
      if (checkbox.checked) {
        span.classList.add("task-completed");
      } else {
        span.classList.remove("task-completed");
      }
    });

    // 삭제 버튼 동작
    closeButton.addEventListener("click", () => {
      li.remove();
    });
  } else {
    alert("할일을 적어주세요!");
  }
}

function keyCheck() {
  if (window.event.keyCode == 13 && $("#user-input").val() != "") {
    //엔터
    addEvent();
  } else if (window.event.keyCode == 13 && $("#user-input").val() == "") {
    alert("할일을 적어주세요!");
  }
}
