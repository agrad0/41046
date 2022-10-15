$(document).ready(function(){
    $(`.hamburger-lines, .menu-text`).on(`click`, function(){
        if ($(`.main-menu`).hasClass('shown')) {
            $(`.main-menu`).removeClass(`shown`);
        }
        else {
            $(`.main-menu`).addClass(`shown`);
        }
    })
})

$(document).ready(function() {
($(`.main-menu-item`).find('a')).on(`click`, function(e){
    e.preventDefault();
    $(`.out-animation-wrapper, .main-menu`).fadeOut(2000, function(){
        window.location.href = $(e.target).attr(`href`);
    })
})
})



