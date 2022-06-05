// 인디케이터 먼저 생성

for (let i = 0; i < $('.main_bn').length; i++) {
    $('.indi_box').append(`<div class="indi"></div>`)
}
$('.indi').eq(0).addClass('indi_active')

// 메인 베너 양쪽 버튼

let cur_mini_bn = 0
let slide_timer = 1000

$('.next_btn').click(function(){
    
    slide_btn('.main_bn',cur_mini_bn % $('.main_bn').length, '-100%', (cur_mini_bn+1) % $('.main_bn').length, '100%')

    cur_mini_bn += 1;

    $('.indi').removeClass('indi_active')
    $('.indi').eq(cur_mini_bn % $('.main_bn').length).addClass('indi_active')
})

$('.prev_btn').click(function(){

    slide_btn('.main_bn',cur_mini_bn % $('.main_bn').length, '100%', (cur_mini_bn-1) % $('.main_bn').length, '-100%')

    cur_mini_bn -= 1;

    $('.indi').removeClass('indi_active')
    $('.indi').eq(cur_mini_bn % $('.main_bn').length).addClass('indi_active')
})
// 자동

let main_bn_int = '';
auto_main_bn()

function auto_main_bn() {
    clearInterval(main_bn_int)
    main_bn_int = setInterval(function(){
        $('.next_btn').trigger('click')
    }, slide_timer + 2000)
}

// 메인 베너에 호버되면 멈추기

$('.main_bn_box').hover(function(){
    clearInterval(main_bn_int)
}, function(){
    auto_main_bn()
})

// new arrival 섹션

for (let i = 0; i < 10; i++) {
    let list = `
        <a href ="#" class="new_items">
            <img src="./img/new/new_${i}.jpg" alt="아이템 타이틀">
            <div class="brand_name">BRAND</div>
            <div class="item_name">ITEM TITLE</div>
            <div class="price_area">
                <span class="origin_price">도산점 문의</span>
                <span class="dc_price">도산점 문의</span>
            </div>
        </a>
        `
    $('.new_item_box').append(list)
}


// 다시 구해야할 것 : 현재 레프트 값 (새로 구한 아우터 위드 값을 각 left 값에 animate 0초로 적용시킴.)
let new_item_w = $('.new_items').outerWidth();
let o_new_item = 0;
let new_timer = 500;
let last_pos = $('.new_items').last().position().left;

// 리사이즈 모음
$(window).resize(function(){
    clearInterval(new_int)
    new_item_w = $('.new_items').outerWidth()

// 신상품 left
    for (let i = 0; i < $('.new_items').length; i++){
        // console.log("ddd: " + (o_new_item + i) % $('.new_items').length)
        $('.new_items').eq((o_new_item + i) % $('.new_items').length).css({
            left : i * new_item_w
        })
    }
    auto_new_int ()


// 브랜드
    brand_img_w = $('.brand_img').outerWidth()
    for (let i = 0; i < $('.brand_img').length; i++){
        $('.brand_img').eq((o_brand_img + i) % $('.brand_img').length).css({
            left : i * brand_img_w
        })
    }
});

// for문 먼저 돌고 혹시 모르니까 다시 구하기.
setTimeout(function(){

    for (let i = 0; i< $('.new_items').length; i++) {
        $('.new_items').eq(i).css({
            left : i * new_item_w
        });
    };
    
    last_pos = $('.new_items').last().position().left
},100);


let new_int = '';

function auto_new_int (){
    new_int = setInterval(function(){
        $('.new_items').animate({
            left : `-=${new_item_w}px`
        },new_timer)
        $('.new_items').eq(o_new_item % $('.new_items').length).animate({
            left : last_pos
        },0)
        o_new_item += 1;
    }, new_timer + 2000)
}
auto_new_int ()

$('.new_items').hover(function(){
    clearInterval(new_int)
},function(){
    auto_new_int ()
})


// best section

for (let i = 0; i < 10; i++) {
    $('.thumnail_box').append(`
        <div class="thumbnail_best">
            <img src="img/best/best_${i}.jpg" alt="best item">
        </div>
    `)
}


$('.thumbnail_best img').mouseover(function(){
    $('.link_best img').attr('src', `${$(this).attr('src')}`)
})

$('.link_best').hover(function(){
    $('.best_info').addClass('best_info_hover')
},function(){
    $('.best_info').removeClass('best_info_hover')
})

// 브랜드 스토리

let brand_img_w = $('.brand_img').outerWidth() ;
for (let i = 0; i< $('.brand_img').length; i++) {
    $('.brand_img').eq(i).css({
        left : i * brand_img_w
    });
};
console.log(brand_img_w)

let o_brand_img = 0;
let brand_img_last = $('.brand_img').last().position().left

$('.b_next_btn').click(function(){
    
    $('.b_p_n_btn, .brand_img').css({pointerEvents:'none'})
    setTimeout(function(){
        $('.b_p_n_btn, .brand_img').css({pointerEvents:'all'})
    },new_timer)

    $('.brand_img').animate({
        left : `-=${brand_img_w}px`
        
    },new_timer)
    $('.brand_img').eq(o_brand_img % $('.brand_img').length).animate({
        left : brand_img_last
        
    },0)
    o_brand_img += 1;
})

$('.b_prev_btn').click(function(){

    $('.b_p_n_btn, .brand_img').css({pointerEvents:'none'})
    setTimeout(function(){
        $('.b_p_n_btn, .brand_img').css({pointerEvents:'all'})
    },new_timer)

    o_brand_img -= 1;
    $('.brand_img').eq(o_brand_img % $('.brand_img').length).animate({
        left : `-${brand_img_w}px`
        
    },0)
    $('.brand_img').animate({
        left : `+=${brand_img_w}px`
        
    },new_timer)
})