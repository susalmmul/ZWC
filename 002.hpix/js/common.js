/* -------------- 주소값 추출 -------------- */

function get_url_info(key) {
    let url = location.href;

    url = url.split("?"); 

    if(url.length > 1) {

        url = url[1];
        url = url.split("&"); 
        
        for(let i=0; i<url.length; i++) {

            if(url[i].indexOf("#") > -1) { 
                url[i] = url[i].split("#")[0];
            }
            
            let tmp_url = url[i].split("=") 
            
            if(tmp_url[0] == key) {
                
                return tmp_url[1];
            }
        }
        return -1;
    }
    else {
        return -1;
    }
}


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

$('.menu_pan_box').hover(function(){ 
    $('.menu_pan_box').addClass('menu_pan_box_act')
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




/* 슬라이드 한통 */
    
function slide_btn(element, o_bn, o_pos, c_bn, c_pos) {

    $('.p_n_btn, .main_bn').css({pointerEvents:'none'})
    setTimeout(function(){
        $('.p_n_btn, .main_bn').css({pointerEvents:'all'})
    },slide_timer)

    $(element).eq(o_bn).animate({
        left : o_pos
    },slide_timer);

    $(element).eq(c_bn).css({
        left : c_pos
    }).animate({
        left : '0'
    },slide_timer);
    
    // cur_mini_bn -= 1;
}

function comma(num) {
    return Number(num).toLocaleString('ko-kr');
}