/* 네비 */

// 네비 메뉴 호버
$('.menu_li_l').hover(function(){

    let menu_index = $(this).index()

    if(menu_index == 0 || menu_index == 2){

        $('.menu_pan_box').addClass('menu_pan_box_act')
        $('.menu_large_cate, .menu_small_cate').css({display : 'none'})
        $('.menu_large_cate').eq(menu_index / 2).css({display : 'flex'})
    }
},function(){
    $('.menu_pan_box').removeClass('menu_pan_box_act')
})

// 네비 상위메뉴 호버
$('.menu_large_cate:nth-child(1) .pan_li').hover(function(){

    let pan_index = $(this).index();

    if ((pan_index == 0)||(pan_index == 1)){
        $('.menu_small_cate').css({display:'none'})
    }
    else {
        $('.menu_small_cate').css({display:'none'})
        
        $('.menu_small_cate').eq(pan_index - 2).css({display:'flex'})
    }
},function(){

})