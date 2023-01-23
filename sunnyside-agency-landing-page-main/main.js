let link = document.querySelectorAll('.link')





function mudaCor(x){
    for(let i  = 0; i < link.length; i++){
        link[i].style.backgroundColor = '#3dbeff'
    }    
    
   x.style.backgroundColor = '#73cefe';
   x.style.color = '#ffffff';
   x.style.fontFamily = 'Fraunces';
   x.style.borderRadius = '30px';
   x.style.padding = '10px 18px'
  

}