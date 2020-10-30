const IMG = document.querySelectorAll("#video12 img"),
  IFRAME = document.querySelector("#video12 iframe");
for (let i = 0; i < IMG.length; i++) {
  IMG[i].onclick = function () {
    let idIMG = this.src.replace(
      /http...img.youtube.com.vi.([\s\S]*?).1.jpg/g,
      "$1"
    );
    IFRAME.src = "https://www.youtube.com/embed/" + idIMG + "?rel=0&autoplay=1";
    if (this.dataset.end)
      IFRAME.src = IFRAME.src.replace(
        /([\s\S]*)/g,
        "$1&end=" + this.dataset.end
      );
    if (this.dataset.start)
      IFRAME.src = IFRAME.src.replace(
        /([\s\S]*)/g,
        "$1&start=" + this.dataset.start
      );
    this.style.backgroundColor = "#555";
  };
}
