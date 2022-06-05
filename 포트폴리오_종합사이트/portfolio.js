/* 네비 */
$('.section_menu').click(function(event){  

    event.preventDefault();
    let href = $(this).attr('href');

    if (href == '#top') {
        $('html, body').stop().animate({
            scrollTop: $(href).offset().top
        }, 300);
    }
    else if (href == '#about') {
        $('html, body').stop().animate({
            scrollTop: $(href).offset().top - 50
        }, 300);
    }
    else if(href == '#skill') {
    $('html, body').stop().animate({
        scrollTop: $(href).offset().top + 400
    }, 300);
    }
    else if(href == '#portfolio') {
        $('html, body').stop().animate({
            scrollTop: $(href).offset().top + 350
        }, 300);
    }
    else if(href == '#contact') {
        $('html, body').stop().animate({
            scrollTop: $(href).offset().top + 500
        }, 300);
    }
    

});

/* 랜딩 섹션 */
// 텍스트 타이핑 애니메이션

let txt1 = ['console' , '.log']
let txt2 = ['(', '김', '수', '연', ')']
let txt3 = ['[ 창의력,<br>', '  책임감,<br>', '   협동심 ]']

let txt_count = 0;
let txt_int ="";
function txt1_ani () {
    txt_int = setInterval(function(){
        $('.ran_txt1').append(txt1[txt_count])
        txt_count += 1;

        if (txt_count >= txt1.length){ 
            clearInterval(txt_int)
            setTimeout(function(){
                $('.ran_txt1').text('')
                txt_count = 0
                txt2_ani()
            }, 500)
        }
    },300);

    // if (txt_count < txt1.length){ // 이건 한 번만 읽고 말겠지.
    //     txt_int = setInterval(function(){
    //         $('.ran_txt1').append(txt1[txt_count])
    //         txt_count += 1
    //     },100);
    // }
    // else {
    //     console.log(1)
    //     clearInterval(txt_int)
    //     $('.ran_txt1').addClass('ran_txt_x')
    // }
}
function txt2_ani() {
    txt_int = setInterval(function(){
        $('.ran_txt2').append(txt2[txt_count])
        txt_count += 1;

        if (txt_count >= txt2.length){ 
            clearInterval(txt_int)
            setTimeout(function(){
                $('.ran_txt2').text('')
                txt_count = 0
                txt3_ani()
            }, 500)
        }
    },200);
}
function txt3_ani() {
    txt_int = setInterval(function(){
        $('.randing .flex_area').css({justifyContent : 'center'})
        $(`.ran_txt3`).append(txt3[txt_count])
        txt_count += 1;

        if (txt_count >= txt3.length){ 
            clearInterval(txt_int)
            setTimeout(function(){
                $('.randing .flex_area').css({justifyContent : 'initial'})
                $(`.ran_txt3`).addClass('ran_txt3_size')
                $(`.ran_txt3`).text('[ 창의력, 책임감, 협동심 ]')
            },300);
            setTimeout(function(){
                $('.ran_txt3').text('')
                txt_count = 0
                txt1_ani()
            }, 5000)
        }
    },300);
}
txt1_ani ();


// 스크롤 이벤트 모음

// hello 부분 변수
let s_top = '';
let hello_o_top = $('.hello').offset().top;
let hello_h = $('.hello').outerHeight();

// 다른 포트폴리오 부분 변수
let other_pf_o_top = $('.other_portfoilo').offset().top;
let fixed_title_o_top = $('#fixed_title').offset().top;
let other_pf_h = $('.other_portfoilo').offset().top + $('.other_portfoilo').outerHeight()
let portfolio_o_top = $('.portfolio').offset().top - 200

let skill_o_top_chk = true

$(window).scroll(function(){
    s_top = $(window).scrollTop();

// hello 부분 트랜지션
    if (s_top + 100 >= hello_o_top) {
        // console.log(1)
        $('.hell_txt').addClass('hell_txt_up')
    }
    else if (s_top >= (hello_h / 2)) {
        $('.hell_txt').removeClass('hell_txt_up')
    }
    else {
        $('.hell_txt').removeClass('hell_txt_up')
    }


// 스킬 게이지 부분

let skill_o_top = $('.skill').offset().top - 300

if (s_top >= skill_o_top && skill_o_top_chk) {

    skill_o_top_chk = false

    window.requestAnimationFrame(()=>{draw(0, ctx, end_pos[0])});
    window.requestAnimationFrame(()=>{draw(1, ctx1, end_pos[1])});
    window.requestAnimationFrame(()=>{draw(2, ctx2, end_pos[2])});
    window.requestAnimationFrame(()=>{draw(3, ctx3, end_pos[3])});
    window.requestAnimationFrame(()=>{draw(4, ctx4, end_pos[4])});
    window.requestAnimationFrame(()=>{draw(5, ctx5, end_pos[5])});
}

// 포트폴리오 부분
if (s_top >= portfolio_o_top) {
    $('.port_box').css({transform: 'translateY(0)', opacity:"1"})
}



// 이외 포트폴리오 부분

let window_bot = s_top + $(window).innerHeight()

    if(s_top >= fixed_title_o_top - 50) { 
        $('#fixed_title').addClass('other_pf_active');
        // $('.other_portfoilo').css({
        //     paddingTop: '181px'
        // })
        $('.wrap').css({
            transition : 'all 0.2s',
            background : 'black'
        });

        $('.nav_outer').addClass('nav_outer_active');

        if (window_bot >= other_pf_h + 1000) {
        console.log('ehckr')
            $('#fixed_title').removeClass('other_pf_active');
            $('.other_portfoilo').css({
                paddingTop: '0'
            })
            $('.wrap').css({
                transition : 'all 0.2s',
                background : 'transparent'
            })

            $('.nav_outer').removeClass('nav_outer_active');
            $('.nav_outer_activem:hover').css({background: '#fff'})
        }
    }
    else { 
        $('#fixed_title').removeClass('other_pf_active');
        $('#fixed_title').removeClass('other_pf_active')
        $('.other_portfoilo').css({
            paddingTop: '0'
        })
        $('.wrap').css({
            transition : 'all 0.2s',
            background : 'transparent'
        })

        $('.nav_outer').removeClass('nav_outer_active');
        $('.nav_outer_activem:hover').css({background: '#fff'})
    }
});

// 이외 포트폴리오 호버 기능

let other_pf_img_w = '';
let o_skill_index = '';

$('.other_p_box').hover(function(){

    o_skill_index = $(this).next().val()

console.log(o_skill_index)
    other_pf_img_w = $(this).find('img').length * 450 * 5*2
    $(this).css({
        width: other_pf_img_w
    })
    $('.o_pf_skill').css({display:'none'})
    $('.o_pf_skill').eq(o_skill_index).css({display : 'block'})
},function(){
    $(this).css({width: '450px'})
    
    $('.o_pf_skill').css({display:'none'})
})







// 스킬 게이지 섹션
let canvas = document.getElementById('canvas');
            let ctx = canvas.getContext("2d");
            
            let canvas1 = document.getElementById('canvas1');
            let ctx1 = canvas1.getContext("2d");

            let canvas2 = document.getElementById('canvas2');
            let ctx2 = canvas2.getContext("2d");
            
            let canvas3 = document.getElementById('canvas3');
            let ctx3 = canvas3.getContext("2d");
            
            let canvas4 = document.getElementById('canvas4');
            let ctx4 = canvas4.getContext("2d");
            
            let canvas5 = document.getElementById('canvas5');
            let ctx5 = canvas5.getContext("2d");
            
            // let start_pos = -90; 
            let start_pos = [-90,-90,-90,-90,-90,-90]; 

            let end_pos = [360*0.85 - 90,360*0.90 - 90,360*0.85 - 90,360*0.95 - 90,360*0.95 - 90,360*0.60 - 90]

            let timer=[]; 
            // window.requestAnimationFrame(()=>{draw(0, ctx, end_pos[0])});
            // window.requestAnimationFrame(()=>{draw(1, ctx1, end_pos[1])});
            // window.requestAnimationFrame(()=>{draw(2, ctx2, end_pos[2])});
            // window.requestAnimationFrame(()=>{draw(3, ctx3, end_pos[3])});
            // window.requestAnimationFrame(()=>{draw(4, ctx4, end_pos[4])});
            // window.requestAnimationFrame(()=>{draw(5, ctx5, end_pos[5])});

            
                
            function draw(index, ctxx, end_pos) {
                // console.log(ctxx, end_pos);
                ctxx.beginPath(); 
                ctxx.strokeStyle = "#000"; 
                ctxx.lineWidth = 2;
                ctxx.lineCap = "round"
    // console.log(index, start_pos[index])
                ctxx.arc(110, 110, 99, (Math.PI/180) * -90, (Math.PI/180) * (start_pos[index]), false);
                        // x,  y, 반지름, 시작위치(3시방향 기본), 끝위치, false) 
                // ctxx.closePath();
                ctxx.stroke();
                start_pos[index]+=5;
    // console.log(start_pos[index] , end_pos[index]);
                if(start_pos[index] < end_pos)
                    timer[index] = window.requestAnimationFrame(()=>{draw(index, ctxx, end_pos)});
                else {
                    cancelAnimationFrame(timer[index])
                } 
            }