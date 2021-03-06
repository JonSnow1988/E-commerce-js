$(document).ready(function () {

 const prefresDarkScheme = window.matchMedia('(prefers-color-scheme: dark)')


$('.btn-light').click(function (e) { 
   
    if (prefresDarkScheme.matches) {
        document.body.classList.toggle('light-theme')
    } else {
        document.body.classList.toggle('dark-theme')
    }
    e.preventDefault();
    
});


});

