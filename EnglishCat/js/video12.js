var IMG2 = document.querySelectorAll(".video12 img"),
  IFRAME2 = document.querySelector(".video12 iframe");
for (var i = 0; i < IMG2.length; i++) {
  IMG2[i].onclick = function () {
    var idIMG = this.src.replace(
      /http...img.youtube.com.vi.([\s\S]*?).1.jpg/g,
      "$1"
    );
    IFRAME2.src = "http://www.youtube.com/embed/" + idIMG + "?rel=0&autoplay=1";
    if (this.dataset.end)
      IFRAME2.src = IFRAME2.src.replace(
        /([\s\S]*)/g,
        "$1&end=" + this.dataset.end
      );
    if (this.dataset.start)
      IFRAME2.src = IFRAME2.src.replace(
        /([\s\S]*)/g,
        "$1&start=" + this.dataset.start
      );
    this.style.backgroundColor = "#555";
  };
}
