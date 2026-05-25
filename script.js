async function getch(url) {
  const response = await fetch(url, {
    method: "get",
    headers: new Headers({
      "ngrok-skip-browser-warning": "5000",
    }),
  });
  const json_promise = await response.json();
  return json_promise;
}

function constructDate(day, month, year) {
  return day + " / " + month + " / " + year;
}

async function new_xkcd() {
  // Use a CORS proxy
  document.body.classList.add("loading");
  const proxyUrl = "https://email-much-unclad.ngrok-free.dev/";
  let data = await getch(proxyUrl + "https://xkcd.com/info.0.json");
  console.log(data);
  newest_xkcd_num = data.num;
  title.innerHTML = data.title;
  xkcd_num.innerHTML = data.num;
  date.innerHTML = constructDate(data.day, data.month, data.year);
  info.innerHTML = data.alt;
  img.src = data.img;
  img.alt = data.transcript;
  document.body.classList.remove("loading");
}

async function random_xkcd() {
  document.body.classList.add("loading");
  const proxyUrl = "https://email-much-unclad.ngrok-free.dev/";
  console.log(
    proxyUrl +
      `https://xkcd.com/${Math.floor(Math.random() * newest_xkcd_num + 1)}/info.0.json`,
  );
  let data = await getch(
    proxyUrl +
      `https://xkcd.com/${Math.floor(Math.random() * newest_xkcd_num + 1)}/info.0.json`,
  );
  console.log(data);
  title.innerHTML = data.title;
  xkcd_num.innerHTML = data.num;
  date.innerHTML = constructDate(data.day, data.month, data.year);
  info.innerHTML = data.alt;
  img.src = data.img;
  img.alt = data.transcript;
  document.body.classList.remove("loading");
}

let newest_xkcd_num;
const body = document.body;
const title = document.getElementById("title");
const xkcd_num = document.getElementById("xkcd num");
const date = document.getElementById("date");
const button = document.getElementById("button");
const img = document.getElementById("img");
const info = document.getElementById("info");
new_xkcd();
button.addEventListener("click", random_xkcd);
