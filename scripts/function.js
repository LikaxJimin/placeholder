// let btn = document.querySelector('.btn btn-Multicolour btn-border-o');
// btn.addEventListener('mouseover', function(){
//     let red = Math.floor(Math.random() * 255);
//     let green = Math.floor(Math.random() * 255);
//     let blue = Math.floor(Math.random() * 255);
//     btn.style.setProperty('color', 'rgb(' +red+',' +green+','+blue+')');
//     let image = 0
// let imageObject = document.querySelector('.cover-image img');
// })


// $(function(){
 
//     $('input[type="text"]').keyup(function(){
        
//         var searchText = $(this).val().toUpperCase();
        
//         $('.tv-search-result-ul-tm > li').each(function(){
            
//             var currentLiText = $(this).text().toUpperCase(),
//                 showCurrentLi = currentLiText.indexOf(searchText) !== -1;
//             // $(this).toggle( showCurrentLi);
//             if(showCurrentLi){
//               $(this).addClass('tv-in-tm').removeClass('tv-out-tm');
//             }else{
//               $(this).addClass('tv-out-tm').removeClass('tv-in-tm');
//             }
            
//         });     
//     });
 
// });
document.querySelectorAll(".load-image").forEach((item) => {
    item.addEventListener("click", (event) => {
      const href = event.target.getAttribute("href");
      const newImage = document.createElement("img");
      event.preventDefault();
      newImage.setAttribute("src", href);
      document.body.insertBefore(newImage, event.target);
      event.target.remove();
    });
  });
  