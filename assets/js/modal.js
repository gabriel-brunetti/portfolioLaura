// create references to the modal...
var modal = document.getElementById('myModal');
// to all images -- note I'm using a class!
var images = document.getElementsByClassName('projeto-img');
// the image in the modal
var modalImg = document.getElementById("img01");

// Go through all of the images with our custom class
for (var i = 0; i < images.length; i++) {
  var img = images[i];
  // and attach our click listener for this image.
  img.onclick = function(evt) {
    modal.style.display = "block";
    modalImg.src = this.src;
    document.querySelector("body").style.overflow = 'hidden';
  }
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
  modal.style.display = "none";
  document.querySelector("body").style.overflow = 'visible';
}

document.onkeydown = function (e) {
    if (e.key === 'Escape'){
        modal.style.display = "none";
        document.querySelector("body").style.overflow = 'visible';
    }
}

modalImg.onclick = function() {
    if(modalImg.style.maxWidth == 'inherit'){
        modalImg.style.maxWidth = '100vw';
        modalImg.style.maxHeight = '100vh';
        span.style.display = 'block';
        modalImg.style
    } else {
        modalImg.style.maxWidth = "inherit";
        modalImg.style.maxHeight = "inherit";
        span.style.display = "none";    
    }
}

