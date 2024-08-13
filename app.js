/*
// Change the background RGB background color by clicking the button.
*/

//Steps

 //step #1 create onload function
   window.onload = () => {
      main();
   }
   function main () {
      const root=document.getElementById('root');
      const btn=document.getElementById('change-btn');
      const output=document.getElementById('output');
      btn.addEventListener('click',function(){
        const bjcolor=generateHexColor();
        root.style.backgroundColor=bjcolor;
        output.value=bjcolor;
      });
      
   }
  
 // Step #2 Create a random Hax Function generator
 function generateHexColor(){
  //Hex #000000   , #FFFFFF
  // #255,255,255 --> #FFFFFF
  const red= Math.floor(Math.random()*255);
  const green=Math.floor(Math.random()*255);
  const blue=Math.floor(Math.random()*255);
  return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;
  
}


 // Step #3 collect all necessary reference collect


 // step #4 handle the Click Event