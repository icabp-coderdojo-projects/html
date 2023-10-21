const sonicImage = document.getElementById('sonic-running');

// sonicImage.style.height = '600px';
document.onkeydown = function(event) {
  if (event.key === 'ArrowDown') {
    sonicImage.style.marginTop = '300px';
  }
  if (event.key === 'ArrowUp') {
    sonicImage.style.marginTop = ' 0px';
  }
  if (event.key === 'ArrowRight') {
    sonicImage.style.marginLeft = '300px';
  }
  if (event.key === 'ArrowLeft') {
    sonicImage.style.marginLeft = '0px';
  }
}
