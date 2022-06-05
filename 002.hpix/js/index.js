// 하단 미니 가구 양쪽 버튼

let cur_mini_bn = 0;
let slide_timer = 500;

$('.next_btn').click(function(){
    slide_btn('.mini_funi', cur_mini_bn % $('.mini_funi').length, '-100%', (cur_mini_bn+1) % $('.mini_funi').length, '100%');
    cur_mini_bn +=1;
});
$('.prev_btn').click(function(){
    slide_btn('.mini_funi', cur_mini_bn % $('.mini_funi').length, '100%', (cur_mini_bn-1) % $('.mini_funi').length, '-100%')
    cur_mini_bn -=1;
});

// 이미지 불러오기,,
for (let i = 0; i < 4; i++){
    let list = '';
    for (let j = 0; j < 6; j++){
        list += `<img src="img/welcome_page/${get_id(i)}/${get_id(i)}_${j}.png" alt="${get_id(i)}">`
    }
    $('.mini_funi').eq(i).append(list)
}

function get_id(id) {
    return $('.mini_funi').eq(id).attr('id')
}