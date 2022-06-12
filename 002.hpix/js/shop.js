let cate = get_url_info("cate");
let folder = get_url_info("folder");

$.ajax({
    url: "db/shop.php", //html기준 파일 경로
    data: { __cate: cate },
    type: 'GET',
    dataType: "json",
    success: function(data) {
        // console.log(data.cate)
        console.log(data.sql)
        // db 잘 다녀왔을때
        console.log(data)

        if(cate < 999){

            for (let i = 0; i < data.length; i++) {
                let list = `
                <a href="deal.html?page_type=deal&cate=${cate}&item_no=${i+1}" class="item_box">
                    <div class="img_box">
                        <img src="./img/shop/${folder}/${data[i].src}" alt="" class="item_img">
                    </div>    
                    <div class="dsc_box">
                        <div class="brand_name">${data[i].brand}<img src="./img/heat_icon.png" alt="관심상품"></div>
                        <div class="item_name">${data[i].title}</div>
                        <div class="price_area">
                            <span class="origin_price">${comma(o_price(data[i].o_price))}</span>`;

                            // <span class="dc_price">${data[i].s_price==0?"":data[i].s_price}</span>
                        if(data[i].s_price > 0)
                            list += `<span class="dc_price">${comma(data[i].s_price)}</span>`

                list +=`</div>
                    </div>
                </a>
                `
                $('.shop_box').append(list)
            }
        }
        
    function o_price(num){
        if(num > 0 ){
            return (Number(num))
        }
        else {
            return ('도산점 문의')
        };
    };

    },
    error: function(){ 
        // db 못 다녀왔을때
        console.log('error')
    }
});

let img_box_w = $('.img_box').outerWidth();

$('.img_box').css({
    heigth : img_box_w
});

$(window).resize(function(){
    img_box_w = $('.img_box').outerWidth();

    $('.img_box').css({
        heigth : img_box_w
    });
});