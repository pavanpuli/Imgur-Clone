async function getData(type) {
  let data = await fetch(
    `https://api.imgur.com/3/gallery/search/viral/month/1?q=${type}&q_type=jpg`
  );
  let res = await data.json();
  displayData(res);
}
getData("top");

function searchText() {
  let input = document.getElementById("inputsearch");
  let val = input.value;
  getData(val);
}

function debouncing() {
  let id;
  if (id) {
    clearTimeout(id);
  }
  id = setTimeout(() => {
    searchText();
  }, 3000);
}

function displayData({ data }) {
  console.log(data);
  let p1 = document.getElementById("postParent1");
  let p2 = document.getElementById("postParent2");
  let p3 = document.getElementById("postParent3");
  let p4 = document.getElementById("postParent4");
  let p5 = document.getElementById("postParent5");

  p1.innerHTML = null;
  p2.innerHTML = null;
  p3.innerHTML = null;
  p4.innerHTML = null;
  p5.innerHTML = null;

  data.forEach((el, i) => {
    let mainDiv = document.createElement("div");
    let title = document.createElement("p");
    title.innerText = el.title;

    let img = document.createElement("img");
    // img.src = el?.images[0]?.link || "./images/demoimg.jpg";
    img.src =
      "https://i.pinimg.com/originals/9c/b0/70/9cb070d62dc738a0c3a1a408d68e4af5.jpg";

    let views = document.createElement("p");
    views.innerText = "Views - " + el.views;

    let imgdiv = document.createElement("div");
    let textdiv = document.createElement("div");

    imgdiv.append(img);
    textdiv.append(title, views);

    mainDiv.append(imgdiv, textdiv);

    if (i <= 10) {
      p1.append(mainDiv);
    } else if (i <= 20 && i > 10) {
      p2.append(mainDiv);
    } else if (i <= 30 && i > 20) {
      p3.append(mainDiv);
    } else if (i <= 40 && i > 30) {
      p4.append(mainDiv);
    } else {
      p5.append(mainDiv);
    }
  });
}
