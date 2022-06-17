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


// mini_furniture 클릭하면 가구 appned.

let area = '';
let funi_title = '';
let img_src = '';
let lighting_index = '';

$('.mini_img').click(function(){
    area = $(this).parent().attr('id');
    funi_title = $(this).attr('alt');
    img_src = $(this).attr('src');

    $(`.${area}_area`).empty(); // 기존에 뭐가 있든 비우기

    $.ajax({
        url: "db/index.php", //html기준 파일 경로
        data: { _title: funi_title },
        type: 'GET',
        dataType: "json",
        success: function(data) {
            console.log(data);
            
            // 가구 넣기 기능
            let link = `
            <a href="./deal.html?cate=${data[0].cate}&item_no=${data[0].item_no}" class="deal_link">
                <div class="deal_name">${funi_title}</div>
                <img src="${img_src}" alt="${data[0].title}" class="deal_img">
                <div class="x_btn">X</div>
            </a>
            `;
            $(`.${area}_area`).append(link);

        },
        error: function(){ 
            // db 못 다녀왔을때
            console.log('에러')
        }
    });

    // 조명 위치 바꿔주기.
    if (area == 'lighting') {
        // alert('라이트')
        
        lighting_index = $('#lighting > .mini_img').index(this);
        let img_rut = $('.lighting_area > .deal_link > .deal_img')
        if (lighting_index < 2 || lighting_index == 4) {
            // alert("lighting_index < 2")
            if (img_rut.hasClass('deal_img_light_top') === true){
                $('.lighting_area > .deal_link > .deal_img').removeClass('deal_img_light_top')
            }
            $('.lighting_area > .deal_link > .deal_img').addClass('deal_img_light_bt');

            setTimeout(function(){
                if (img_rut.hasClass('deal_img_light_top') === true){
                    $('.lighting_area > .deal_link > .deal_img').removeClass('deal_img_light_top')
                }
                $('.lighting_area > .deal_link > .deal_img').addClass('deal_img_light_bt');
            }, 10);
        }
        else {
            if (img_rut.hasClass('deal_img_light_bt') === true){
                $('.lighting_area > .deal_link > .deal_img').removeClass('deal_img_light_bt')
            }
            $('.lighting_area > .deal_link > .deal_img').addClass('deal_img_light_top');

            setTimeout(function(){
                if (img_rut.hasClass('deal_img_light_bt') === true){
                $('.lighting_area > .deal_link > .deal_img').removeClass('deal_img_light_bt')
            }
                $('.lighting_area > .deal_link > .deal_img').addClass('deal_img_light_top');
            }, 10);
        }
    };

});