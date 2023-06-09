const input = document.querySelector("input");
const searchbtn = document.querySelector("#search");
const removebtn = document.querySelector("#remove");
const gifArea = document.querySelector(".gifArea");

async function searchGif(evt) {
  evt.preventDefault();

  const res = await axios.get("http://api.giphy.com/v1/gifs/search", {
    params: {
      q: input.value,
      api_key: "hUGwToltrEy0suxzPNfJrNDs1H302ezQ",
    },
  });
  const gifData = res.data.data;
  if (gifData.length) {
    const randomIdx = Math.floor(Math.random() * gifData.length);
    const gifUrl = gifData[randomIdx].images.original.url;
    showImg(gifUrl);
  }
}

function showImg(url) {
  const showImage = document.createElement("img");
  showImage.src = url;
  gifArea.appendChild(showImage);
}

function removeImgs() {
  gifArea.innerHTML = "";
}

searchbtn.addEventListener("click", searchGif);
removebtn.addEventListener("click", removeImgs);
