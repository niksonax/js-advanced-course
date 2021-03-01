/*

    Задание 3:


    Написать класс Posts в котором есть данные:

    _id
    isActive,
    title,
    about,
    likes,
    created_at

    У класса должен быть метод addLike и render.

    Нужно сделать так чтобы:
    - После добавления поста, данные о нем записываются в localStorage.
    - После перезагрузки страницы, данные должны сохраниться.
    - Можно было предзагрузить данные в класс из апи: http://www.json-generator.com/api/json/get/cgCRXqNTtu?indent=2
    (по умолчаниию грузить посты из ЛокалСторадж, но по кнопке ложна быть возможность загрузить из апи)
*/

const postsDiv = document.querySelector(".posts-container");
const renderLocalBtn = document.getElementById("render-localstorage");
const renderApiBtn = document.getElementById("render-api");

class Post {
  constructor(title, about, id, created_at, isActive, isApiPost) {
    const date = new Date();
    const dateStr = `${date.getDate()}-${
      date.getMonth() + 1
    }-${date.getFullYear()}`;

    this.id = id ? id : date.getTime();
    this.title = title;
    this.about = about;
    this.created_at = created_at ? created_at : dateStr;
    this.likes = 0;
    this.isActive = isActive ? isActive : false;
    this.isApiPost = isApiPost;

    // Adding post info to LocalStorage if not API post
    if (isApiPost) {
      //console.log("Api Post Rendered");
    } else if (isApiPost === undefined) {
      //console.log("Local Post Rendered");
      localStorage.setItem(this.title, JSON.stringify(this));
    }
  }

  addLike() {
    this.likes++;
  }

  render() {
    const postDiv = document.createElement("div");
    const postTitle = document.createElement("h3");
    const postText = document.createElement("p");
    const postLikes = document.createElement("span");
    const postLikeBtn = document.createElement("i");
    const postLikesValue = document.createElement("p");

    postTitle.innerText = this.title;
    postText.innerText = this.about;
    postLikesValue.innerText = this.likes;
    postLikeBtn.classList.add("fas", "fa-heart");

    postLikeBtn.addEventListener("click", () => {
      this.addLike();
      postLikesValue.innerText = this.likes;
    });

    postLikes.append(postLikesValue, postLikeBtn);
    postDiv.append(postTitle, postText, postLikes);
    postsDiv.append(postDiv);
  }
}

const testPost1 = new Post(
  "Some Test Post",
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos obcaecati illo nemo, similique vero nam asperiores qui excepturi cupiditate quibusdam doloremque fugit eveniet tempora consequuntur architecto, rem, eaque quaerat reiciendis."
);
const testPost2 = new Post(
  "Another one",
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos obcaecati illo nemo, similique vero nam asperiores qui excepturi cupiditate quibusdam doloremque fugit eveniet tempora consequuntur architecto, rem, eaque quaerat reiciendis."
);
const testPost3 = new Post("Post Title", "Hello! Some text goes here...");

const postsArr = [testPost1, testPost2, testPost3];

// Event Listeners
window.addEventListener("load", renderLocalPosts);

renderLocalBtn.addEventListener("click", renderLocalPosts);

renderApiBtn.addEventListener("click", function renderApiPosts() {
  postsDiv.innerHTML = "";

  fetch("http://www.json-generator.com/api/json/get/cgCRXqNTtu?indent=2")
    .then((res) => res.json())
    .then((objs) =>
      objs.forEach((obj) => {
        const isApiPost = true;
        const apiPost = new Post(
          obj.title,
          obj.about,
          obj._id,
          obj.created_at,
          obj.isActive,
          isApiPost
        );
        apiPost.render();
      })
    );
});

// Functions
function renderLocalPosts() {
  postsDiv.innerHTML = "";
  postsArr.forEach((post) => {
    post.render();
  });
}
