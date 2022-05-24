// 하단 미니 가구 양쪽 버튼

let cur_mini_bn = 0

$('.next_btn').click(function(){
console.log(cur_mini_bn++% $('.next_btn').length)
    $('.mini_funi').eq(cur_mini_bn % $('.next_btn').length).animate({
        left : '-100%'
    },300)
    $('.mini_funi').eq(cur_mini_bn+1 % $('.next_btn').length).css({
        left : '100%'
    }).animate({
        left : '0'
    });
    cur_mini_bn += 1;
})