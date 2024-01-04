const tl = gsap.timeline();
tl.from(".intro img", {
  scale: 0.5,
  duration: 0.5,
  x: 500,
  delay: 1,
});
tl.from(".intro h1", {
  duration: 1,
  stagger: 0.1,
  opacity: 0,
});
tl.to(".intro", {
  opacity: 0,
  display: "none",
});

let send = document.querySelector(".sendBtn");
let msg = document.querySelector("#msgtext");
let container = document.querySelector(".msgs");
let container2 = document.querySelector(".msgs2");
send.addEventListener("click", function (e) {
  e.preventDefault();
  let time = new Date();
  let h = time.getHours();
  let hour = h < 12 ? h : h - 12;
  let m = time.getMinutes();
  let min = m < 10 ? "0" + m : m;
  let interval = hour < 12 ? "am" : "pm";
  if (msg.value !== "") {
    let newText = `<p class="text">
    ${msg.value}
    <span class="time">${hour}:${min} ${interval}</span>
  </p>`;

    let newReply = `<p class="text reply">
  ${msg.value}
  <span class="time">${hour}:${min} ${interval}</span>
</p>`;
    container.insertAdjacentHTML("afterbegin", newText);
    container2.insertAdjacentHTML("afterbegin", newReply);
    msg.value = "";
    msg.focus();
  }
});

let reply = document.querySelector(".replyBtn");

reply.addEventListener("click", function (e) {
  e.preventDefault();
  let time = new Date();
  let h = time.getHours();
  let hour = h < 12 ? h : h - 12;
  let m = time.getMinutes();
  let min = m < 10 ? "0" + m : m;
  let interval = hour < 12 ? "Am" : "Pm";
  let replyMsg = document.querySelector("#msgreply");
  if (replyMsg.value !== "") {
    let text = `<p class="text">
    ${replyMsg.value}
    <span class="time">${hour}:${min} ${interval}</span>
  </p>`;
    let reply = `<p class="text reply">
    ${replyMsg.value}
    <span class="time">${hour}:${min} ${interval}</span>
  </p>`;
    container2.insertAdjacentHTML("afterbegin", text);
    container.insertAdjacentHTML("afterbegin", reply);
    replyMsg.value = "";
    replyMsg.focus();
  }
});

////////////////////
let input1 = document.querySelector("#msgtext");
let input2 = document.querySelector("#msgreply");

input1.addEventListener("click", function () {
  document.querySelector(".user_1").classList.add("active");
  document.querySelector(".user_2").classList.remove("active");
});
input2.addEventListener("click", function () {
  document.querySelector(".user_1").classList.remove("active");
  document.querySelector(".user_2").classList.add("active");
});
