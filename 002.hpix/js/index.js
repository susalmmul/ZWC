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

$('.mini_img').click(function(){
    area = $(this).parent().attr('id');
    funi_title = $(this).attr('alt');
    img_src = $(this).attr('src');

    $.ajax({
        url: "db/index.php", //html기준 파일 경로
        data: { _title: funi_title },
        type: 'GET',
        dataType: "json",
        success: function(data) {
            console.log(data)
            
            let link = `
            <a href="./deal.html?cate=${data.cate}&item_no=${data.item_no}" class="deal_link">
                <div class="deal_name">${data.title}</div>
                <img src="${img_src}" alt="${data.title}" class="deal_img">
                <div class="x_btn">X</div>
            </a>
            `
            
            $(`.${area}_area`).append(link)
        },
        error: function(){ 
            // db 못 다녀왔을때
            console.log('에러')
        }
    });

});