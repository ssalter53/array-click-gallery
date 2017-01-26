var pictures = ["assets/image1.jpg", "assets/image2.jpg", "assets/image3.jpg", "assets/image4.jpg", "assets/image5.jpg"];
var titles = ["Image 1", "Image 2", "Image 3", "Image 4"];
var description = ["Description 1", "Description 2", "Description 3", "Description 4"];
var count = 0;

function changeArt(){
  var title = document.getElementById("title");
  title.innerHTML = titles[count];
  var element = document.getElementById("testing");
  element.style.backgroundImage = "url(" + pictures[count] + ")";
  var paragraph = document.getElementById("paragraph");
  paragraph.innerHTML = description[count];
  count++;
  if (count > 4) {
    count = 0;
  }
}