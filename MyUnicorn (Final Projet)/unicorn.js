
const menus = document.querySelectorAll('.menu a'); 
for(let i = 0; i < menus.length; i++) { 
    menus[i].addEventListener('mouseover', function () { 
       let active = document.querySelector('.menu .active');
        if(menus[i].classList.contains('active')) { 
            return false;
        }
        active.classList.remove('active');
        menus[i].classList.add('active');
    })

    menus[i].addEventListener('click', function () { 
        let active = document.querySelector('.menu .active');
         if(menus[i].classList.contains('active')) { 
             return false;
         }
        
         active.classList.remove('active');
         menus[i].classList.add('active');
     })
 
}

