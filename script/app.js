(() => {
  //set up the puzzle pieces and boards
  //buttons at the bottom of the page
  let navButtons = document.querySelector('#buttonHolder img');

//functions go here => what we want to have happen when our triggers fire
function changeImageSet() {
  //change the thumbnail images on the left to match the button images
  //and set a background image on the drop zone container
  debugger;
}


  //add some event handling for the navButtons
  navButtons.forEach(button => button.addEventListener('click', changeImageSet));
})();
