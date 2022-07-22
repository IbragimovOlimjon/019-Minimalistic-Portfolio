const elsSitenavLink = document.querySelectorAll('.sitenav__link')


SitenavLink.forEach(function (item, index){
    SitenavLink[index].addEventListener('click', function(){
        SitenavLink.forEach(function (elsSitenavLink){
            SitenavLink.classList.remove('sitenav__link--active');
        });
        SitenavLink[index].classList.add('sitenav__link--active');
    });

});