$('.owl-carousel').owlCarousel({
    
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        400:{
            items:2
        },
        900:{
            items:2
        },
        1100:{
           items:3
        },
        1400:
        {
            items:4
        },
        1500:{
            items:5
        }
    }
})
var cardNumber= ["one","two","three","four","five"];
var guiderNumber = ["guider-one","guider-two","guider-three","guider-four","guider-five"];
function  cardSlider()
{
console.log("start");
for(var i = 0 ;i<4;i++)
{
     document.querySelector("."+cardNumber[i]).innerHTML += ` <div class="card">
   <span class="slider-image1">  </span>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    </div>
    <div class="card-footer">
      <small class="text-muted">Last updated 3 mins ago</small>
    </div>
  </div>`;

document.querySelector("."+guiderNumber[i]).innerHTML += ` <div class="card">
   <span class="slider-image1">  </span>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    </div>
    <div class="card-footer">
      <small class="text-muted">Last updated 3 mins ago</small>
    </div>
  </div>`;


}


   
     
}



// function startSlider()
// {
//     var c =0;
//     c++;
//     console.log(c);
  
//         console.log("find");
//         if(screen.width <= 810)
//         {
//             console.log("true");
//              for (var i =0 ; i < 2 ;i++)
//              {
//                 document.querySelector(".one").innerHTML+=` <div class="col-sm-6 col-lg-4">
//           <div class="card" style="width:300px;">
           
//             <span class="slider-image1"> </span>
//             <div class="card-body">
//               <h4 class="card-title">picture 1

//               </h4> 
//               <p class="card-text">ssdsdsasdaaasdadadadhsdnthis is mu first wesifkdkfk </p>
        
//             </div>
//            </div>

//          </div>

// `;
   
//              }

//               for (var i =0 ; i < 2 ;i++)
//              {
//                 document.querySelector(".two").innerHTML+=` <div class="col-sm-6 col-lg-4">
//           <div class="card" style="width:300px;">
           
//             <span class="slider-image1"> </span>
//             <div class="card-body">
//               <h4 class="card-title">picture 1

//               </h4> 
//               <p class="card-text">ssdsdsasdaaasdadadadhsdnthis is mu first wesifkdkfk </p>
        
//             </div>
//            </div>

//          </div>

// `;
   
//              }
//             // startSlider();


//         }
//         else{
//             console.log("false");
//              for(var i=0 ;i < 3 ;i++)
//              {
//                  document.querySelector(".one").innerHTML+=` <div class="col-sm-4 col-lg-4">
//           <div class="card" style="width:300px;">
           
//             <span class="slider-image1"> </span>
//             <div class="card-body">
//               <h4 class="card-title">picture 1

//               </h4> 
//               <p class="card-text">ssdsdsasdaaasdadadadhsdnthis is mu first wesifkdkfk </p>
        
//             </div>
//            </div>

//          </div>

// `;
//              }
//   for(var i=0 ;i < 3 ;i++)
//              {
//                  document.querySelector(".two").innerHTML+=` <div class="col-sm-4 col-lg-4">
//           <div class="card" style="width:300px;">
           
//             <span class="slider-image1"> </span>
//             <div class="card-body">
//               <h4 class="card-title">picture 1

//               </h4> 
//               <p class="card-text">ssdsdsasdaaasdadadadhsdnthis is mu first wesifkdkfk </p>
        
//             </div>
//            </div>

//          </div>

// `;
   
//              }
//         }
        
    
// }
