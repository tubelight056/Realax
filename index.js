function CheckBtn()
{

  if((document.getElementById("check_menu").value)=="False"){
    document.getElementById("nav_ul").style.display="block";
    document.getElementById("check_menu").value="True";
  } else
  {
    document.getElementById("nav_ul").style.display="none";
    document.getElementById("check_menu").value="False";
  }

}

const circle = document.getElementById("myprogress").style;
const h1myp =document.getElementById("myprogress-h1");
const mysoundbell=new Audio("css/mixkit-attention-bell-ding-586.wav");
const complete=new Audio("css/mixkit-bonus-extra-in-a-video-game-2064.wav");
h1myp.innerHTML="Relax";



function startbtn()
{
  mysoundbell.play();
  let wholecount=0;
  count1();
  var wholeset=setInterval(function(){
    count1();
    wholecount+=1;
    mysoundbell.play();
    if(wholecount>14)
    {
      console.log(wholecount);
      clearInterval(wholeset);
      h1myp.innerHTML="You are all set";
      complete.play();
    }
  },13000);
}

function count1()
{
  let count=0;
  var h=0;
  var set1=setInterval(function()
  {

    if(count>110)
    {
      clearInterval(set1);
      count=0;
    }
    if(count<40)
    {
      h1myp.innerHTML="INHALE";
    }
    else{
      if(count==40)
      {
        mysoundbell.play();
      }
      h1myp.innerHTML="EXHALE";
    }

    count+=10;
    h+=(250/12);
    circle.height=h+"px";
  },1000);
}

// document.addEventListener('DOMContentLoaded', () => {
//   const a = document.getElementById("myprogress").style;
//   const inhale = 70;
//   const exhale = 30;
//   const hold = 20;
//   var mysoundbell=new Audio("css/mixkit-attention-bell-ding-586.wav");
//   var complete=new Audio("css/mixkit-bonus-extra-in-a-video-game-2064.wav");
//
//   function action() {
//       i=0;
//       b=0;
//       let c = 0;
//       count1();
//
//
//       function count1(){
//         c=b;
//       global var  myvar=setInterval(function(){
//         if (b >= (c+inhale)) {
//           clearInterval(myvar);
//           i++;
//           if(i>15){endbutton();};
//           mysoundbell.play();
//           b=b-10
//           count2();
//
//         };
//         console.log(c,b);
//         b=b+10;
//
//         a.width = b+"px";
//         a.height=b+"px";
//
//       }, 1000);
//     }
//     function count2(){
//       c=b-exhale;
//     global  var myva=setInterval(function(){
//         if (b = (c)) {
//             clearInterval(myva);
//             mysoundbell.play();
//             c=b;
//             count3();
//         };
//         console.log(c,b,"count2");
//         b=b-10;
//
//         a.width = b+"px";
//         a.height=b+"px";
//       }, 1000);
//     }
//     function count3(){
//       c=b;
//       global  var  myv=setInterval(function(){
//         if (b =( c+hold)) {
//             clearInterval(myv);
//             mysoundbell.play();
//             b=c;
//             count1();
//         };
//         console.log(c,b);
//         b=b+10;
//         //
//         // a.width = b+"px";
//         // a.height=b+"px";
//       }, 1000);
//     }
//       }
//   document.getElementById('startbutton').addEventListener('click', action);
//
// })
//
// function endbutton()
// {
//   clearInterval(myva);
//   clearInterval(myv);
//   clearInterval(myvar);
// }
