"use strict";
const Open_content = document.querySelector(".section-content");
const btn_submit = document.getElementById("btn_submit");
const close_content = document.querySelector(".submit-email");
const email_value = document.getElementById("email").value;
const error_email = document.querySelector(".error-email");
const mouseout_over = document.querySelector(".section-title");

// check mail
function checkemail() {
  const regex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!regex.test(email.value)) {
    error_email.textContent = "Hãy nhập địa chỉ email hợp lệ";
    email.focus;
    return false;
  } else {
    Open_content.style.display = "block";
    close_content.style.display = "none";
  }
}
//ẩn hiện content
function viewMore(e) {
  const content = e.closest("div.hover-box").querySelector(".content");

  //Nếu như nó đang ẩn
  if (content.classList.contains("d-none")) {
    content.classList.remove("d-none");
    e.innerText = "View Less";
  } else {
    content.classList.add("d-none");
    e.innerText = "View More";
  }
}
