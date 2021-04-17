var timeline;

console.log("Running Twitter timeline removal script");

function myMain (evt) {

  console.log("Loading page...");

  var jsInitChecktimer = setInterval (checkForJS_Finish, 100);

  function checkForJS_Finish () {
    timeline = document.querySelector("[aria-label='Timeline: Your Home Timeline']");
    if (timeline) {
      clearInterval (jsInitChecktimer);
      timeline.style.display = "none";
      console.log("Successfuly removed timeline. Enjoy your newly-found freetime!");
    }
  }
}

myMain();
