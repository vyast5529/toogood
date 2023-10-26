let navi = document.querySelector("#navi");
let body = document.querySelector("body");
let i1 = document.querySelector("#i1");
let i2= document.querySelector("#i2");


document.addEventListener("scroll",function(){
    navi.style.position="fixed";


     
     if(window.pageYOffset>5)
    
    
     {
        navi.style.backgroundColor="black";
        i1.style.color="white";
        i2.style.color="white";

        
     }
     else 
     {
        navi.style.backgroundColor="white";
        i1.style.color="black";
        i2.style.color="black";

       
     }


    vdo();
})
function vdo(){



let vdo = document.querySelector("#vedio");
let play= document.querySelector("#PLAY");
vdo.addEventListener("mouseenter",function(){
    play.style.opacity=1;
    play.style.scale=1;
    

   
})
vdo.addEventListener("mouseleave",function(){
    play.style.opacity=0;
    play.style.scale=1;
    

   
})
vdo.addEventListener("mousemove",function(details){
    
   

gsap.to(play,{
    left:details.x,
    top:details.y



})
   
    

   
})
}
gsap.from("h1",{

    y:100,
    opacity:0,delay:0.5,duration:0.8,stagger:0.3

});
gsap.from("#page1 #vedio",{


    scale:0.9,
    opacity:0,delay:0.5,duration:0.8,
    

});
let info1 = document.querySelector("#info1");
let info2 = document.querySelector("#info2");
let info3 = document.querySelector("#info3");
let list1= document.querySelector("#list1");
let list2= document.querySelector("#list2");
let list3= document.querySelector("#list3");
info1.addEventListener("mouseenter",function(){
   list1.style.visibility ="visible";

})
info2.addEventListener("mouseenter",function(){
    if(mouseenter=true)
    
    list2.style.visibility ="visible";
    
 
 })
 info3.addEventListener("mouseenter",function(){
    list3.style.visibility ="visible";
 
 })
 
  list1.addEventListener("mouseleave",function(){
    list1.style.visibility ="hidden";
 
 })
 list2.addEventListener("mouseleave",function(){
     list2.style.visibility ="hidden";
  
  })
  list3.addEventListener("mouseleave",function(){
     list3.style.visibility ="hidden";
   
  });



  const a1=document.querySelector("#a1");
  let d1 = document.querySelector("#d1");
  a1.addEventListener("mouseenter",function(){
    
     d1.style.width="40px";
    d1.style.transitionDuration="1.5s";

  })
  a1.addEventListener("mouseleave",function(){
    
    d1.style.width="0";
    d1.style.transitionDuration="0s";
    
  })
  const a2=document.querySelector("#a2");
  let d2 = document.querySelector("#d2");
  a2.addEventListener("mouseenter",function(){
    
     d2.style.width="90px";
    d2.style.transitionDuration="1.5s";

  })
  a2.addEventListener("mouseleave",function(){
    
    d2.style.width="0";
    d2.style.transitionDuration="0s";
    
  })
  const a3=document.querySelector("#a3");
  let d3 = document.querySelector("#d3");
  a3.addEventListener("mouseenter",function(){
    
     d3.style.width="60px";
    d3.style.transitionDuration="1.5s";

  })
  a3.addEventListener("mouseleave",function(){
    
    d3.style.width="0";
    d3.style.transitionDuration="0s";
    
  })
  let logo= document.querySelector("#logo");
  let sv1 = document.querySelector("#sv1");
  document.addEventListener("scroll",function(){
   
    if(window.pageYOffset>5)
    {
        
    logo.style.visibility="hidden";
    sv1.style.visibility="visible";
    }
    else{
       sv1.style.visibility="hidden";
    logo.style.visibility="visible";

    }
  })
  let c1= document.querySelectorAll(".c1");
  
  
 document.addEventListener("scroll",function()
   {
      for(a of c1)
      {if(window.pageYOffset>2090)
         {

            a.style.visibility="visible";
            a.style.transform="translateY(-70px)";
            a.style.transitionDuration="1s";

         }
         
      }
   })
   let c2= document.querySelectorAll(".c2");
  
  
 document.addEventListener("scroll",function()
   {
      for(a of c2)
      {if(window.pageYOffset>2670)
         {

            a.style.visibility="visible";
            a.style.transform="translateY(-80px)";
            a.style.transitionDuration="1s";

         }
         
      }
   })
let c3= document.querySelectorAll(".c3");
let l = document .querySelector("#line")
let t = document.querySelector("#thank");
let y= document.querySelector("#you");

  
  
 document.addEventListener("scroll",function()
   {
      for(a of c3)
      {if(window.pageYOffset>3270)
         {

            a.style.visibility="visible";
            a.style.transform="translateY(-80px)";
            a.style.transitionDuration="1s";

         }
         
      }
      if(window.pageYOffset>3400)
      {
         l.style.width="100%";
         l.style.transitionDuration="3s"
      }
     
      
      
   })

   


      
   
   

   

  



  



 

 

