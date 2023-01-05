(function(){
    const header = document.querySelector('header');
    const video = document.getElementById('video');


    let img = document.createElement('img');
    img.src="./assets/img/react_background.jpg";
    img.setAttribute("class", "img-header_background");

    if (window.matchMedia("(max-width: 800px)").matches) {
        
        header.removeChild(video);
        header.appendChild(img);
       
      } else {  
       ;
      }   

})()