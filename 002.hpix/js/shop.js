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
                        <img src="./img/shop/${folder}/${data[i].src}" alt="${data[i].title}" class="item_img">
                    </div>    
                    <div class="dsc_box">
                        <div class="brand_name">${data[i].brand}<img src="./img/heat_icon.png" alt="관심상품"></div>
                        <div class="item_name">${data[i].title}</div>
                        <div class="price_area">
                            <span class="origin_price">${o_price(data[i].o_price)}</span>`;

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

        else if (cate == 999) {
// alert(9)
            for (let i = 0; i < 6; i++) { // 폴더명 구분
                   
                let folder_999 = '';
        
                if (i == 0) {
                    folder_999 = "furniture"
// console.log (folder_999)
                }
                else if (i == 1) {
                    folder_999 = "lighting"
// console.log (folder_999)
                }
                else if (i == 2) {
                    folder_999 = "homedeco"
// console.log (folder_999)
                }
                else if (i == 3) {
                    folder_999 = "textile"
// console.log (folder_999)
                }
                else if (i == 4) {
                    folder_999 = "electronic"
// console.log (folder_999)
                };
// if (data.cate == 0)
                for (let j = 0; j < data[i].length; j++) {
                    
console.log( "data length :"+  data[i].length) 
// console.log (data[j].src)
                    let list = `
                    <a href="deal.html?page_type=deal&cate=${data[i][j].cate}&item_no=${j+1}" class="item_box">
                        <div class="img_box">
                            <img src="./img/shop/${folder_999}/${data[i][j].src}" alt="${data[i][j].title}" class="item_img">
                        </div>    
                        <div class="dsc_box">
                            <div class="brand_name">${data[i][j].brand}<img src="./img/heat_icon.png" alt="관심상품"></div>
                            <div class="item_name">${data[i][j].title}</div>
                            <div class="price_area">
                                <span class="origin_price">${o_price(data[i][j].o_price)}</span>`;

                                // <span class="dc_price">${data[i].s_price==0?"":data[i].s_price}</span>
                            if(data[i][j].s_price > 0)
                                list += `<span class="dc_price">${data[i][j].s_price}</span>`

                    list +=`</div>
                        </div>
                    </a>
                    `;
                    $('.shop_box').append(list);
                };
            }
        }
        
    function o_price(num){
        if(num > 0 ){
            return (comma(Number(num)))
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