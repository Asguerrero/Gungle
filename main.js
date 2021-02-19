
let content = document.getElementById('content-div-5');
let bar = document.getElementById('getID');
let nav = document.getElementById('nav');

var contentHeight = nav.clientHeight;

// get the element to ani
var navHeight = nav.clientHeight;

// listen for scroll event and call animate function
document.addEventListener('scroll', animate);
document.addEventListener('scroll', divTop);



function myScript(event){

  var windowHeight = window.innerHeight;
  // get number of pixels that the document is scrolled
  var scrollY = window.scrollY || window.pageYOffset;
    var scrollPosition = scrollY + windowHeight;

  
  if (checkScrollDirectionIsUp(event) ) {
    console.log('up')

    var elementPosition = content.getBoundingClientRect().top + scrollY + contentHeight;

    var measure = (elementPosition*49)/100
    var measure2 = (elementPosition*20)/100
    console.log('scrollY')
    console.log(scrollY)
    console.log('measure')
    console.log(measure)
    console.log(elementPosition)


    if (scrollY < measure ){
      document.body.style.overflowY = "hidden";
      content.style.overflowY= "scroll";
      content.scrollBy(0, -6);
      
    }

    if (content.scrollTop == 0){
      document.body.style.overflowY = "scroll";
      document.removeEventListener("wheel", myScript);
    }

    

    
  }
  else{

    console.log('down')



  content.scrollBy(0, 7);
  var elemScrolPosition = content.scrollHeight - content.scrollTop - content.clientHeight;


  if (elemScrolPosition == 0){
    document.body.style.overflowY = "scroll";
   


  }
}
}


// check if element is in view
function inView() {
  // get window height
  var windowHeight = window.innerHeight;
  // get number of pixels that the document is scrolled
  var scrollY = window.scrollY || window.pageYOffset;
  
  // get current scroll position (distance from the top of the page to the bottom of the current viewport)
  var scrollPosition = scrollY + windowHeight;


  // get element position (distance from the top of the page to the bottom of the element)
  var elementPosition = nav.getBoundingClientRect().top + scrollY + navHeight;


  if (elementPosition == 92){
    return false;
  }
  if (scrollPosition > elementPosition) {
    return true;
  }
  
  return false;
}


function divTop(){

var windowHeight = window.innerHeight;
  // get number of pixels that the document is scrolled
  var scrollY = window.scrollY || window.pageYOffset;
  
  // get current scroll position (distance from the top of the page to the bottom of the current viewport)
  var scrollPosition = scrollY + windowHeight;


  // get element position (distance from the top of the page to the bottom of the element)
  var elementPosition = content.getBoundingClientRect().top + scrollY + contentHeight;
  
  var measure = (elementPosition*40)/100
  if (scrollY > measure){
  
    
    document.body.style.overflowY = "hidden";
    document.addEventListener("wheel", myScript);
    myScript(event);


  }

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





function checkScrollDirectionIsUp(event) {
  if (event.wheelDelta) {
    return event.wheelDelta > 0;
  }
  return event.deltaY < 0;
}

 

