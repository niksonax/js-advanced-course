// Selectors
const postCreatorForm = document.getElementById("post-creator-form");
const uploadImgBtn = document.querySelector(".btn-upload-image");
const postsList = document.querySelector(".posts-list");

// Classes
class Post {
  constructor(author, text, imageUrl, date, likes = 0, comments = []) {
    this.author = author;
    this.text = text;
    this.imageUrl = imageUrl ? imageUrl : "https://unsplash.it/1280/900";
    this.date = date ? date : new Date().toLocaleString();
    this.likes = likes;
    this.comments = comments;
  }

  addLike() {
    this.likes++;
  }

  addComment(comment) {
    this.comments.push(comment);
  }

  buildPost() {
    renderPost(this);
  }
}
class Comment {
  constructor(author, text, parentPost, date) {
    this.author = author;
    this.text = text;
    this.parent = parentPost;
    this.date = date ? date : new Date().toLocaleString();
  }
}

// Event Listeners
postCreatorForm.addEventListener("submit", addNewPost);

// Functions
function addNewPost(e) {
  e.preventDefault();
  const form = e.target;
  let imageUrl;

  // Image attach check. Image with file has higher priority
  if (form["image-file"].value) {
    imageUrl = window.URL.createObjectURL(form["image-file"].files[0]);
  } else {
    imageUrl = form["image-url"].value;
  }

  const newPost = new Post(
    form["author"].value,
    form["post-text"].value,
    imageUrl
  );
  form["post-text"].value = "";
  form["image-url"].value = "";

  renderPost(newPost);
}

function renderPost(post) {
  // Creating Elements
  const postDiv = document.createElement("div");

  const postHeader = document.createElement("div");
  const postAuthor = document.createElement("span");
  const postDate = document.createElement("span");

  const postImageContainer = document.createElement("div");
  const postImage = document.createElement("img");

  const postTextContainer = document.createElement("div");
  const postText = document.createElement("p");

  const postFooter = document.createElement("div");
  const likesContainer = document.createElement("div");
  const likeHeart = document.createElement("i");
  const likesCounter = document.createElement("p");
  const commentsBtns = document.createElement("div");
  const commentsCounter = document.createElement("p");
  const writeCommentBtn = document.createElement("div");
  // Comment Section
  const commentsDiv = document.createElement("div");
  const commentFormDiv = document.createElement("div");

  // Configuring Inner Text
  postAuthor.innerText = post.author;
  postDate.innerText = post.date;
  postImage.src = post.imageUrl;
  postText.innerText = post.text;
  likesCounter.innerText = `${post.likes}`;
  commentsCounter.innerText = `Comments(${post.comments.length})`;
  writeCommentBtn.innerText = "Write Comment";
  commentFormDiv.innerHTML = returnCommentFormHTML();

  // Adding Classes
  postDiv.classList.add("post-container");

  postHeader.classList.add("post-header");
  postAuthor.classList.add("post-author");
  postDate.classList.add("post-date");

  postImageContainer.classList.add("post-image-container");
  postImage.classList.add("post-image");

  postFooter.classList.add("post-footer");
  likesContainer.classList.add("likes-container");
  likeHeart.classList.add("like-heart", "fas", "fa-heart");
  likesCounter.classList.add("likes-counter");
  commentsBtns.classList.add("comments-btns-container");
  commentsCounter.classList.add("post-comments-counter");
  writeCommentBtn.classList.add("post-write-comment-btn");

  commentsDiv.classList.add("post-comments-container");
  commentFormDiv.classList.add("comment-form-container", "hidden");

  // Adding Event Listeners
  likesContainer.addEventListener("click", function () {
    post.addLike();
    likesCounter.innerText = post.likes;
  });

  writeCommentBtn.addEventListener("click", function () {
    renderCommentForm(postDiv, post);
  });

  // Constructuring and Appending Elements
  postHeader.append(postAuthor, postDate);
  postImageContainer.append(postImage);
  postTextContainer.append(postText);
  likesContainer.append(likeHeart, likesCounter);
  commentsBtns.append(commentsCounter, writeCommentBtn);
  postFooter.append(likesContainer, commentsBtns);
  postDiv.append(postHeader, postImageContainer, postTextContainer, postFooter);
  postDiv.append(commentsDiv, commentFormDiv);
  postsList.append(postDiv);
}

function renderCommentForm(parentPostDiv, parentPostObj) {
  const commentFormDiv = parentPostDiv.querySelector(".comment-form-container");
  const commentForm = commentFormDiv.querySelector("form");
  commentFormDiv.classList.toggle("hidden");

  const addCommentBtn = commentForm.querySelector(".btn-add-comment");
  addCommentBtn.onclick = (e) => {
    e.preventDefault();
    addNewComment(parentPostDiv, parentPostObj, commentForm);
  };
}

function addNewComment(parentPostDiv, parentPostObj, form) {
  const newComment = new Comment(
    form["author"].value,
    form["comment-text"].value,
    parentPostObj
  );

  parentPostObj.addComment(newComment);

  renderComment(newComment, parentPostDiv);

  // Increase comment counter
  const commentsCounter = parentPostDiv.querySelector(".post-comments-counter");
  commentsCounter.innerText = `Comments(${parentPostObj.comments.length})`;

  // Clear input field
  form["comment-text"].value = "";
}

function renderComment(comment, parentPostDiv) {
  // Creating Elements
  const commentDiv = document.createElement("div");

  const commentHeader = document.createElement("div");
  const commentAuthor = document.createElement("span");
  const commentDate = document.createElement("span");

  const commentTextContainer = document.createElement("div");
  const commentText = document.createElement("p");

  // Configuring Inner Text
  commentAuthor.innerText = comment.author;
  commentDate.innerText = comment.date;
  commentText.innerText = comment.text;

  // Adding Classes
  commentHeader.classList.add("comment-header");
  commentAuthor.classList.add("comment-author");
  commentDate.classList.add("comment-date");

  commentHeader.append(commentAuthor, commentDate);
  commentTextContainer.append(commentText);
  commentDiv.append(commentHeader, commentTextContainer);
  parentPostDiv.querySelector(".post-comments-container").append(commentDiv);
}

function returnCommentFormHTML() {
  return `<form id="comment-form">
            <div class="form-group row">
              <label for="author" class="col-sm-3 col-form-label">Author</label>
              <div class="col-sm-9">
                <input type="text" class="form-control" name="author" required />
              </div>
            </div>
            <div class="form-group row">
              <label for="comment-text" class="col-sm-3 col-form-label">Comment</label>
              <div class="col-sm-9">
                <textarea
                  class="form-control"
                  name="comment-text"
                  rows="4"
                  required
                ></textarea>
              </div>
            </div>
            <div class="form-group row">
              <div class="col-sm-10 offset-sm-3">
                <button type="submit" class="btn btn-primary btn-add-comment">
                  Comment
                </button>
              </div>
            </div>
          </form>`;
}
