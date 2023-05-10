window.onload=()=>{
 
 let previous = document.querySelector("#prev");
 let next = document.querySelector("#Next");
 let imageBox = document.querySelectorAll(".image_container");
 let span = document.querySelectorAll(".dot");
 let count= 0;
 
 previous.addEventListener("click",()=>{ 
     slideImage(-1);
 });
 
 next.addEventListener("click",()=>{ 
     slideImage(1);
 });
 
  
  
  
  
 slideImage(count);// already called () to display first image which is located in the array position of 0;
  
  
  
  
 
// CASE 1:(A function that handles the imageBox slides);
  function slideImage(u){
      
    count+=u;
      
      
    for(let i=0; i < imageBox.length; i++){
      imageBox[i].style.display="none"; 
     };
      
    for(let i=0; i < span.length ; i++){
     span[i].className= span[i].className.replace("active","");
     };
      
    if(count > imageBox.length -1){
       count=0;
     };
     
     if(count < 0){
         count= imageBox.length -1;
      };
     
     
      imageBox[count].style.display = "block";
      span[count].className +="active";
     
  };//End of slideImage();
      
}// End Of General Function();✅