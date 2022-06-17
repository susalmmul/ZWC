let cate = get_url_info("cate");
let folder = get_url_info("item_no");

// 교환 환불 안내 동의

let agree_chk = true;

$('.agree_chk').click(function(){
    if(agree_chk) {
        agree_chk = false;
        $('.inner_circle').css({
            display: 'inline-block'
        });
    }
    else {
        agree_chk = true;
        $('.inner_circle').css({
            display: 'none'
        });
    };
});

$.ajax({
    url: "db/deal.php",
    data: { __cate: 0 },
    type: 'GET',
    dataType: "json",
    success: function(data) {
        // db 잘 다녀왔을때
        console.log(data)

        for (let i = 0; i < data.length; i++) {
            let list = `
                <a href ="#" class="new_items">
                    <img src="./img/shop/furniture/${data[i].src}" alt="아이템 타이틀">
                    <div class="brand_name">${data[i].brand}</div>
                    <div class="item_name">${data[i].title}</div>
                    <div class="price_area">
                        <span class="origin_price">${data[i].o_price}</span>
                        <span class="dc_price">${data[i].s_price}</span>
                    </div>
                </a>
                `
            $('.new_item_box').append(list)
        }

    },
    error: function(){ 
        // db 못 다녀왔을때
    }
});