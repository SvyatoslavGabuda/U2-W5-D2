const questions = [
  {
    question: "1?",
    correct_answer: "1",
    incorrect_answers: ["2", "3", "4"],
  },
  {
    question: "2?",
    correct_answer: "1",
    incorrect_answers: ["2", "3", "4"],
  },
  {
    question: "3?",
    correct_answer: "1",
    incorrect_answers: ["2", "3", "4"],
  },
  {
    question: "4?",
    correct_answer: "1",
    incorrect_answers: ["2", "3", "4"],
  },
  {
    question: "5?",
    correct_answer: "1",
    incorrect_answers: ["2", "3", "4"],
  },
  {
    question: "6?",
    correct_answer: "1",
    incorrect_answers: ["2", "3", "4"],
  },
];
const inputDomande = document.getElementById("numeroDomande");
const checkbox = document.getElementById("Robot");
const checkboxLabel = document.getElementById("labelRobot");
inputDomande.onkeydown = (e) => {
  checkbox.classList.remove("hide");
  checkboxLabel.classList.remove("hide");
};
const startbtn = document.getElementById("startBtn");
const attivaStart = function () {
  // if (typeof inputDomande.value != Number) {
  //   console.log(typeof inputDomande.value);
  //   alert("inserire un numero");
  // } else {
  if (checkbox.checked) {
    startbtn.disabled = false;
  } else {
    startbtn.disabled = true;
  }
  // }
};
checkbox.addEventListener("click", attivaStart);
let numeroDomande = 1;
const domandeRandom = [];
inputDomande.onkeyup = (event) => {
  console.log(event);
  numeroDomande = inputDomande.value;
  console.log(numeroDomande);
  generatoreDomande(numeroDomande);
};
const generatoreDomande = function (n) {
  while (domandeRandom.length > 0) {
    domandeRandom.pop();
  }

  const arr1 = [];
  for (let i = 0; i < n; i++) {
    const numRandom = Math.floor(Math.random() * 101);
    arr1[i] = numRandom;
  }
  const arr2 = [];
  for (let i = 0; i < n; i++) {
    const numRandom = Math.floor(Math.random() * 101);
    arr2[i] = numRandom;
  }
  const domanda = [];
  const rispostaGiusta = [];
  const risposteSbagliate = [];
  const risposteSbagliate2 = [];
  const risposteSbagliate3 = [];

  for (let i = 0; i < arr1.length; i++) {
    switch (true) {
      case arr1[i] % arr2[i] === 0:
        domanda[i] = "Quanto fa " + arr1[i] + " / " + arr2[i] + " ?";
        rispostaGiusta[i] = arr1[i] / arr2[i];
        risposteSbagliate[i] = (arr1[i] / arr2[i]) * 2 - 15;
        risposteSbagliate2[i] = (arr1[i] / arr2[i]) * 3 - 100;
        risposteSbagliate3[i] = (arr1[i] - arr2[i]) * 3 - 40;
        break;
      case arr1[i] - arr2[i] > 0:
        domanda[i] = "Quanto fa " + arr1[i] + " - " + arr2[i] + " ?";
        rispostaGiusta[i] = arr1[i] - arr2[i];
        risposteSbagliate[i] = (arr1[i] - arr2[i]) * 2 - 15;
        risposteSbagliate2[i] = (arr1[i] - arr2[i]) * 3 - 100;
        risposteSbagliate3[i] = (arr1[i] - arr2[i]) * 3 - 40;
        break;

      case arr1[i] * arr2[i] <= 2000:
        domanda[i] = "Quanto fa " + arr1[i] + " * " + arr2[i] + " ?";
        rispostaGiusta[i] = arr1[i] * arr2[i];
        risposteSbagliate[i] = arr1[i] * arr2[i] * 2 - 15;
        risposteSbagliate2[i] = arr1[i] * arr2[i] * 3 - 100;
        risposteSbagliate3[i] = (arr1[i] + arr2[i]) * 4;
        break;
      default:
        domanda[i] = "Quanto fa " + arr1[i] + " + " + arr2[i] + " ?";
        rispostaGiusta[i] = arr1[i] + arr2[i];
        risposteSbagliate[i] = (arr1[i] + arr2[i]) * 2 - 15;
        risposteSbagliate2[i] = (arr1[i] + arr2[i]) * 3 - 100;
        risposteSbagliate3[i] = (arr1[i] - arr2[i]) * 3 - 40;
    }
  }

  const domandeRandomInterno = domanda.map((cur, index) => {
    return {
      domanda: cur,
      rispostaGiusta: rispostaGiusta[index],
      risposteSbagliate: [
        risposteSbagliate[index],
        risposteSbagliate2[index],
        risposteSbagliate3[index],
      ],
    };
  });
  for (let i = 0; i < domandeRandomInterno.length; i++) {
    domandeRandom.push(domandeRandomInterno[i]);
  }
};

const main = document.querySelector("main");
const header = document.querySelector("header");
const section = document.querySelector("section");

const testStart = function () {
  main.classList.add("hide");
  header.classList.add("hide");
  section.classList.remove("hide");
  takeNextQuestion();
  contatoreDomanda.innerText = "Domanda " + (index + 1) + " / " + numeroDomande;
};

startbtn.addEventListener("click", testStart);

const testContainer = document.getElementById("testContainer");
const testQuestion = document.getElementById("testQuestion");
const testAnswers = document.getElementById("answer");
const nextBtn = document.getElementById("nextBtn");
const contatoreDomanda = document.getElementById("contatoreDomanda");

let numCorrectAnswers = 0;
let numINcorrectAnswers = 0;
let index = 0;
let tentativo = 1;

nextBtn.addEventListener("click", () => {
  index++;
  takeNextQuestion();
  contatoreDomanda.innerText = "Domanda " + (index + 1) + " / " + numeroDomande;
});

const takeNextQuestion = function () {
  reset();
  takequestion(domandeRandom);
  // console.log(domandeRandom);
};

const reset = function () {
  nextBtn.classList.add("hide");
  while (testAnswers.firstChild) {
    testAnswers.removeChild(testAnswers.firstChild);
  }
};

const takequestion = function (questions) {
  // console.log("questions?", questions[1]);
  testQuestion.innerText = questions[index].domanda;
  const correctAnswer = [];
  // console.log("aaaa" + questions[index].domanda);
  correctAnswer.push(questions[index].rispostaGiusta);
  const answersArr = correctAnswer.concat(questions[index].risposteSbagliate);

  answersArr.forEach((ans) => {
    const bottone = document.createElement("button");
    bottone.innerText = ans;
    bottone.classList.add("btnAnswer");
    bottone.addEventListener("click", answer);
    testAnswers.appendChild(bottone);
  });
};
const aside = document.querySelector("aside");

const answer = function (e) {
  const answeredBtn = e.target;
  const createdBtn = document.querySelectorAll("#answer .btnAnswer");
  createdBtn.forEach((btn) => btn.classList.remove("selectedBtn"));
  answeredBtn.classList.add("selectedBtn");
  if (answeredBtn.innerText == domandeRandom[index].rispostaGiusta) {
    numCorrectAnswers++;
  } else {
    numINcorrectAnswers++;
  }
  if (index + 1 < domandeRandom.length) {
    nextBtn.classList.remove("hide");
  } else {
    const btnResult = document.createElement("button");
    btnResult.onclick = () => {
      section.classList.add("hide");
      reset();
      mostrarisultati();
    };
    btnResult.innerText = "Result";
    testContainer.appendChild(btnResult);
    tentativo++;
  }
};
const mostrarisultati = function () {
  const correctAns = document.getElementById("correctAns");
  const wrongAns = document.getElementById("wrongAns");
  const totalAns = document.querySelectorAll(".totalAns");
  const percentualeSuccesso = document.getElementById("percentualeSuccesso");
  const percentualeINsucesso = document.getElementById("percentualeINsucesso");
  const numeroPercentuale = Math.floor(
    (numCorrectAnswers * 100) / numeroDomande
  );
  const barraprogresso = document.getElementById("conteinerCerchio");
  const valueCointainer = document.getElementById("progresso");
  let progressValue = 0;
  let progressEndValue = numeroPercentuale;
  let speed = 50;
  console.log(barraprogresso, valueCointainer);

  const progress = setInterval(() => {
    progressValue++;
    valueCointainer.textContent = `${progressValue}%`;
    barraprogresso.style.background = `conic-gradient( 
      #4d5bf9 ${progressValue * 3.6}deg,
      #cadcff ${progressValue * 3.6}deg
      )`;
    if (progressValue == progressEndValue) {
      clearInterval(progress);
    }
  }, speed);

  correctAns.innerText = numCorrectAnswers;
  wrongAns.innerText = numINcorrectAnswers;
  totalAns.forEach((el) => (el.innerText = numeroDomande));
  percentualeSuccesso.innerText =
    Math.floor((numCorrectAnswers * 100) / numeroDomande) + "%";
  percentualeINsucesso.innerText =
    Math.floor((numINcorrectAnswers * 100) / numeroDomande) + "%";

  aside.classList.remove("hide");
  // const risultato = document.createElement("h2");

  // risultato.innerText = "le vostre risposte giuste sono" + numCorrectAnswers;
  // aside.appendChild(risultato);
  const btnFinish = document.createElement("button");
  btnFinish.onclick = () => {
    main.classList.remove("hide");
    header.classList.remove("hide");
    section.classList.add("hide");
    aside.classList.add("hide");
    // reset();
  };
  btnFinish.innerText = "FINISH";
  aside.appendChild(btnFinish);
  const today = document.querySelector(".oggi");
  const paragrafoRis = document.createElement("p");
  paragrafoRis.innerText =
    " risultato test: " + numCorrectAnswers + " / " + numeroDomande;
  today.appendChild(paragrafoRis);
  today.classList.add("tasked");
};
