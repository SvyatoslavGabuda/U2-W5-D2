const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekDays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const now = new Date();
const month = now.getMonth();
const year = now.getFullYear();
const ultimoGiornoMeseObj = new Date(year, month + 1, 0);
const ultimoGiornoMese = ultimoGiornoMeseObj.getDate();
const container = document.querySelector(".container");
const weekDay = now.getDay();

const giorno = document.getElementById("giorno");
const giornoSettimana = document.getElementById("giornoSettimana");
const mese = document.getElementById("mese");
const anno = document.getElementById("anno");
const time = function () {
  let data2 = new Date();
  let hours = data2.getHours();
  let minutes = data2.getMinutes();
  let seconds = data2.getSeconds();
  let millisec = data2.getMilliseconds();
  let ora = document.getElementById("ore");
  let min = document.getElementById("min");
  let sec = document.getElementById("sec");
  let millis = document.getElementById("millis");

  ora.innerText = hours;
  min.innerText = minutes;
  if (seconds < 10) {
    sec.innerText = "0" + seconds;
  } else {
    sec.innerText = seconds;
  }

  // if (millisec === 0) {
  //   millis.innerText = "00";
  // } else if (millisec < 10) {
  //   millis.innerText = "00" + Math.floor(millisec / 10);
  // } else {
  millis.innerText = Math.floor(millisec / 100);
  // }

  const tempo = setTimeout(time, 1);
};
time();

giorno.innerText = now.getDate();
giornoSettimana.innerText = weekDays[weekDay];
mese.innerText = months[month];
anno.innerText = year;
const input = document.getElementById("nomeTask");
const listaOrdinata = document.querySelector("ol");

for (let i = 0; i < ultimoGiornoMese; i++) {
  const day = document.createElement("div");
  const dataIesima = new Date(year, month, i + 1);

  const giornoIesimo = dataIesima.getDay();

  day.className = "day";
  const innerSpan = document.createElement("span");
  const secondSpan = document.createElement("span");
  const terzoSpan = document.createElement("span");
  innerSpan.innerText = i + 1;
  secondSpan.innerText = " / ";
  terzoSpan.innerText = weekDays[giornoIesimo];
  innerSpan.classList.add("numero");
  if (innerSpan.innerText === giorno.innerText) {
    day.classList.add("oggi");
  }
  switch (terzoSpan.innerText) {
    case "Sunday":
      day.classList.add("domenica");
      break;
    case "Monday":
      day.classList.add("lunedi");
      break;
    case "Tuesday":
      day.classList.add("martedi");
      break;
    case "Wednesday":
      day.classList.add("mercoledi");
      break;
    case "Thursday":
      day.classList.add("giovedi");
      break;
    case "Friday":
      day.classList.add("venerdi");
      break;
    case "Saturday":
      day.classList.add("sabato");
      break;
    default:
      console.log("non è un giorno della settimana");
  }
  day.ondblclick = (e) => {
    console.log(e);
    const elemLi = document.querySelectorAll("li");
    elemLi.forEach((el) => {
      const p1 = document.createElement("p");
      p1.innerText = el.innerText;
      p1.onclick = (event) => {
        console.log("b", event);
        p1.remove();
      };
      day.appendChild(p1);
      day.classList.add("tasked");
    });
  };

  day.onclick = function (event) {
    if (event.target === event.currentTarget) {
      console.log("a", event);

      const p = document.createElement("p");
      p.innerText = input.value;
      // event.stopPropagation();
      p.onclick = (event) => {
        console.log("b", event);
        p.remove();
      };
      day.appendChild(p);
      day.classList.add("tasked");
    }
  };

  day.appendChild(innerSpan);
  day.appendChild(secondSpan);
  day.appendChild(terzoSpan);
  container.appendChild(day);
}
input.onchange = function (event) {
  if (input.value === "") {
    alert("Please, insert a task");
  } else {
    const elementoLi = document.createElement("li");
    const btnCancella = document.createElement("button");

    elementoLi.innerText = input.value;
    btnCancella.innerText = "Delete";
    btnCancella.onclick = () => elementoLi.remove();
    elementoLi.appendChild(btnCancella);
    listaOrdinata.appendChild(elementoLi);
  }
};
const inserisci = function (e) {
  const elementoLi = document.createElement("li");
  const btnCancella = document.createElement("button");
  if (input.value === "") {
    alert("Please, insert a task");
  } else {
    elementoLi.innerText = input.value;
    btnCancella.innerText = "Delete";
    btnCancella.onclick = () => elementoLi.remove();
    elementoLi.appendChild(btnCancella);
    listaOrdinata.appendChild(elementoLi);
  }
};
