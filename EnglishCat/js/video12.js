var IMG = document.querySelectorAll("#video12 img"),
  IFRAME = document.querySelector("#video12 iframe");
for (var i = 0; i < IMG.length; i++) {
  IMG[i].onclick = function () {
    var idIMG = this.src.replace(
      /http...img.youtube.com.vi.([\s\S]*?).1.jpg/g,
      "$1"
    );
    IFRAME.src = "https://www.youtube.com/embed/" + idIMG + "?autoplay=1";
    console.log(IFRAME.src);
    this.style.backgroundColor = "#555";
    // alert(`click ${idIMG}`);
  };
}
