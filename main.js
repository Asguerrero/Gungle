
let content = document.getElementById('content-div-5');
let bar = document.getElementById('getID');



window.addEventListener("scroll", scroll);

function scroll (){
  
  	console.log(content.scrollHeight)
  	console.log(content.scrollTop)
  	console.log(content.clientHeight)
  

}



window.addEventListener('wheel', checkScrollDirection);


function checkScrollDirection(event) {
  if (checkScrollDirectionIsUp(event)) {
  	console.log('UP');
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
