// var length=document.querySelectorAll(".drum").length;
// for(i=0;i<length;i++){
//     document.querySelectorAll(".drum")[i].addEventListener('click',  function(){
//         var object=this.innerHTML;
//         switch(object){
//             case "Add to Cart 3":
//          document.getElementById("img1").id="img2";
//          document.getElementById("h51").id="h52";
//          document.getElementById("p1").id="p2";
//           break;
//           case "Add to Cart 2":
//             document.getElementById("img2").id="img3";
//             document.getElementById("h52").id="h53";
//             document.getElementById("p2").id="p3";
//              break; 
//              case "Add to Cart 1":
//                 document.getElementById("img3").id="img4";
//                 document.getElementById("h53").id="h54";
//                 document.getElementById("p3").id="p4";
//                  break;
//                  default:
//                     document.getElementById("img1").id="img1";
//                     document.getElementById("h51").id="h51";
//                     document.getElementById("p1").id="p1";

//         }
//     });
// }

function Number(){
    var number=document.getElementById("bt").value;
var sum=189*number;
document.getElementById("rs").innerHTML=("$"+ sum);}

function card(){
  
    document.getElementById("body").style.backgroundColor="aqua";
    var text="Your Order has Been Placed..."
    var body=document.getElementById("body");
    body.innerHTML=text;
    body.classList.add("change");

    


}