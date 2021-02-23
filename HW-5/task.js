/*
    Задание:

    1. Написать конструктор объекта комментария который принимает 3 аргумента
    ( имя, текст сообщения, ссылка на аватаку);

    {
      name: '',
      text: '',
      avatarUrl: '...jpg'
      likes: 0
    }
      + Создать прототип, в котором будет содержаться ссылка на картинку по умлочанию
      + В прототипе должен быть метод который увеличивает счетик лайков

    var myComment1 = new Comment(...);

    2. Создать массив из 4х комментариев.
    var CommentsArray = [myComment1, myComment2...]

    3. Созадть функцию конструктор, которая принимает массив коментариев.
      И выводит каждый из них на страничку.

    <div id="CommentsFeed"></div>
*/

const commentsFeed = document.getElementById("comments-feed");

function Comment(
  name,
  text,
  avatarUrl = "http://s3.amazonaws.com/37assets/svn/765-default-avatar.png"
) {
  this.name = name;
  this.text = text;
  this.avatarUrl = avatarUrl;
  this.likes = 0;

  this.addLike = () => {
    this.likes++;
  };
}

const myComment1 = new Comment(
  "John",
  "Cool pic! Really like it!",
  "https://pickaface.net/gallery/avatar/unr_workplacemale_180407_1548_cm3i.png"
);
const myComment2 = new Comment("Samuel", "Outstanding! You are the best!");
const myComment3 = new Comment(
  "Salva",
  "Wow... Is it in the Maldives?",
  "https://winstemplymouth.org/wp-content/uploads/2018/02/Female-Avatar-5-e1518176677210.png"
);
const myComment4 = new Comment(
  "Susan",
  "Great photo!",
  "https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/girl_female_woman_avatar-512.png"
);

const commentsArray = [myComment1, myComment2, myComment3, myComment4];
console.dir(myComment1);

function CommentsSection(comments) {
  this.comments = comments;

  this.renderComments = () => {
    commentsFeed.innerHTML = "";
    this.comments.forEach((comment) => {
      this.commentDiv = document.createElement("div");
      this.commentDiv.classList.add("comment");

      this.commentAvatar = document.createElement("img");
      this.commentAvatar.src = comment.avatarUrl;

      this.commentTextDiv = document.createElement("div");
      this.commentTextDiv.classList.add("comment-text-section");

      this.commentUsername = document.createElement("h3");
      this.commentUsername.innerText = comment.name;

      this.commentText = document.createElement("p");
      this.commentText.innerText = comment.text;

      this.commentLikes = document.createElement("span");
      this.commentLikeBtn = document.createElement("i");
      this.commentLikeBtn.classList.add("fas", "fa-heart");
      this.commentLikeBtn.addEventListener("click", () => {
        comment.addLike();
        this.renderComments();
      });
      this.commentLikesCounter = document.createElement("p");
      this.commentLikesCounter.innerText = comment.likes;

      this.commentLikes.append(this.commentLikesCounter, this.commentLikeBtn);
      this.commentTextDiv.append(
        this.commentUsername,
        this.commentText,
        this.commentLikes
      );
      this.commentDiv.append(this.commentAvatar, this.commentTextDiv);

      commentsFeed.append(this.commentDiv);
    }, comments);
    return this.commentDiv;
  };
}

const myCommentsSectionBuilder = new CommentsSection(commentsArray);
myCommentsSectionBuilder.renderComments();
