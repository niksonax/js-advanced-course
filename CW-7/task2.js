/*
Задание на классы.

1. Создать пустой массив messages, куда будут добавлятся все новосозданные сообщения

2. Создать класс Message конструктор котрого состоит из следующих полей:
    id, author, text, date, answers

У этого класса необходимо реализовать следующие методы:
SkipMessage() -> которое должно найти сообщение и удалить его из массива messages.
AnswerMessage()-> должно отрыть поле ввода, в который вы сможете ввести ответ
SendAnswer() -> метод который «отравляет» ответ, при этом обновляя поле ответа(answers) в вашем объекте с сообщением.

3. Создать класс  Answer который наследуется от класса Message, но еще дополнительно будет иметь поле parentId

var messages = [];

message = { 
    id: '',
    author: '',
    text: '',
    date: '',
    answers: [
    {
        id: '',
        author: '',
        text: '',
        date: '',
        parentId: '',
        answers: ''
    }
    ]
}

Подсказка: 
    в метод SendAnswer нужно передать обьект класса Answer который наследуется от класса Message
    После создания, сообщение добавляется в массив messages со всеми сообщениями.
    Для вывода на екран необходимо написать дополнительный метод  Render()
    Все данные берутся с формы.
    Количество методов может быть больше чем указано в задании, если появится необходимость для выделения логики в отдельные методы, главное реализовать те что есть в задании

_ _ _

Задание можно разделить на две части:
    1. Создание самого сообщения:
    id->выдаётся автоматом
    Author-> селект с выбором автора
    Text -> текст сообщения
    date -> автоматически в момент создания      

    2. Ответ на сообщение
*/
const sendMsgForm = document.querySelector(".send-message-form");
const messagesList = document.querySelector("#message_list");

const messages = [];

// Classes
class Message {
  constructor(id, author, text, date, answers) {
    this.id = id;
    this.author = author;
    this.text = text;
    this.date = date;
    this.answers = answers;
  }

  skipMessage() {
    const messageIndex = messages.findIndex((obj) => this.id == obj.id);
    messages.splice(messageIndex, 1);

    messagesList.innerHTML = "";
    messages.forEach((message) => renderMessage(message));
  }
  answerMessage(e) {
    const answerDiv = e.target.parentNode.parentNode.querySelector(
      ".message__answer"
    );
    answerDiv.hidden ? (answerDiv.hidden = false) : (answerDiv.hidden = true);
  }
  sendAnswer(e) {
    const answerText = e.target.parentNode.querySelector("input").value;
    createAnswer(this, answerText);
  }
}

class Answer extends Message {
  constructor(id, author, text, date, answers, parentId) {
    super(id, author, text, date, answers);
    this.parentId = parentId;
  }
}

//Functions
function createMessage(e) {
  e.preventDefault();
  const date = new Date();
  const msgId = date.getTime();
  const msgAuthor = sendMsgForm["author"].value;
  const msgText = sendMsgForm["message"].value;
  const msgDate = `${date.getDate()}-${
    date.getMonth() + 1
  }-${date.getFullYear()}`;
  const msgAnswers = [];

  const newMessage = new Message(
    msgId,
    msgAuthor,
    msgText,
    msgDate,
    msgAnswers
  );
  messages.push(newMessage);

  renderMessage(newMessage);
}

function createAnswer(parentMessage, text) {
  const date = new Date();
  const newAnswer = new Answer(
    date.getTime(),
    parentMessage.author,
    text,
    `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`,
    [],
    parentMessage.id
  );

  parentMessage.answers.push(newAnswer);
  renderMessage(newAnswer);
  console.dir(messages);
}

function renderMessage(message) {
  const newListItem = document.createElement("li");
  const dateDiv = document.createElement("div");
  const authorDiv = document.createElement("div");
  const textDiv = document.createElement("div");
  const controlsDiv = document.createElement("div");
  const skipMsgBtn = document.createElement("button");
  const answerMsgBtn = document.createElement("button");
  const answerDiv = document.createElement("div");
  const answerInput = document.createElement("input");
  const answerPost = document.createElement("button");

  controlsDiv.classList.add("controls__container");
  answerDiv.classList.add("message__answer");

  dateDiv.innerText = message.date;
  answerDiv.hidden = true;
  authorDiv.innerHTML = `<b>${message.author}</b>`;
  textDiv.innerText = message.text;
  skipMsgBtn.innerText = "Skip";
  answerMsgBtn.innerText = "Answer";
  answerPost.innerText = "Post Answer";

  skipMsgBtn.addEventListener("click", message.skipMessage.bind(message));
  answerMsgBtn.addEventListener("click", message.answerMessage);
  answerPost.addEventListener("click", message.sendAnswer.bind(message));

  controlsDiv.append(skipMsgBtn, answerMsgBtn);
  answerDiv.append(answerInput, answerPost);
  newListItem.append(dateDiv, authorDiv, textDiv, controlsDiv, answerDiv);

  messagesList.append(newListItem);
  console.dir(messages);
}

// Event Listeners
sendMsgForm.addEventListener("submit", createMessage);
