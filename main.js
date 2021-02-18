
let content = document.getElementById('content-div-5');
let bar = document.getElementById('getID');
let nav = document.getElementById('nav');



// get the element to ani
var navHeight = nav.clientHeight;

// listen for scroll event and call animate function
document.addEventListener('scroll', animate);

// check if element is in view
function inView() {
  // get window height
  var windowHeight = window.innerHeight;
  // get number of pixels that the document is scrolled
  var scrollY = window.scrollY || window.pageYOffset;
  
  // get current scroll position (distance from the top of the page to the bottom of the current viewport)
  var scrollPosition = scrollY + windowHeight;
  console.log('scroll')

  console.log(scrollPosition);

  // get element position (distance from the top of the page to the bottom of the element)
  var elementPosition = nav.getBoundingClientRect().top + scrollY + navHeight;

console.log('elementPosition')
  console.log(elementPosition);
  
  if (elementPosition == 92){
    return false;
  }
  if (scrollPosition > elementPosition) {
    return true;
  }
  
  return false;
}

// animate element when it is in view
function animate() {
  // is element in view?
  if (inView()) {
      // element is in view, add class to element
      nav.classList.add('box-shadow');
  }

  else if(inView() == false){
    nav.classList.remove('box-shadow');
    console.log('tets nav')
  }
}




window.addEventListener("scroll", scroll);

function scroll (){
  
  

}



window.addEventListener('wheel', checkScrollDirection);


function checkScrollDirection(event) {
  if (checkScrollDirectionIsUp(event)) {
  
  	content.scrollBy(0, -17);
  	
  	return true
    
  } else {

  	content.scrollBy(0, 17);
  	}
  	
}

function checkScrollDirectionIsUp(event) {
  if (event.wheelDelta) {
    return event.wheelDelta > 0;
  }
  return event.deltaY < 0;
}


function disableScroll() { 
    // Get the current page scroll position 
    scrollTop = window.pageYOffset || document.documentElement.scrollTop; 
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft, 
  
        // if any scroll is attempted, set this to the previous value 
        window.onscroll = function() { 
            window.scrollTo(scrollLeft, scrollTop); 
        }; 
} 
  
function enableScroll() { 
    window.onscroll = function() {}; 
} 
