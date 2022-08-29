/* ----------------------- 하단 따라다니는 옵션 ----------------------- */
// whole_nan_btn 스크롤 옮기기

let whole_nav_btn = document.getElementsByClassName('whole_nav_btn');

// 각 방번호 부여
for(let i = 0; i < whole_nav_btn.length; i++){

    whole_nav_btn[i].addEventListener("click", function(){
// 클릭되면 일단 다 클릭 값 초기화
        for(let i = 0; i < whole_nav_btn.length; i++){
            whole_nav_btn[i].style.backgroundColor = "#fff";
        }
// 클릭 된 것만 배경색 바꾸기
        this.style.backgroundColor ="#e3f1be";    

        // this의 id 값 가져와서 _뒤의 값 1번방에 저장
        let nav_btn_index = this.getAttribute("id");
        nav_btn_index = nav_btn_index.split('_');
        nav_btn_index = nav_btn_index[1];

// 각 offset 적용시킬 클래스 값 버튼에 해당하는 배열 위치에 담아서 적용
        let offset_Top_h = ['quiz', 'style', 'pick', 'catalog', 'comment'];

// 객체 형태로 써야함
        window.scroll({top : document.getElementsByClassName(`${offset_Top_h[nav_btn_index]}`)[0].offsetTop, behavior : "smooth"});
    });
};

/* ----------------------- 스크롤 이벤트 모음 ----------------------- */

// 하단 붉은 스크롤 바
let s_bottom = '';
let s_top = '';

window.addEventListener("scroll", ()=>{
    s_bottom = document.documentElement.scrollTop + window.innerHeight;
    s_top = document.documentElement.scrollTop;

    // 특정 범위에서만 작동하게끔
    if (s_bottom > document.getElementsByClassName('quiz')[0].offsetTop) {
        document.getElementsByClassName('gauge_bg')[0].style.display = "block";

        // left 값 -100% 부터 시작해서 나중에는 0으로 되게
        let left_per = -100 + ((s_bottom / document.body.scrollHeight)* 100);
        document.getElementsByClassName('gauge_bar')[0].style.left = `${left_per}%`;
    }
    else {
        document.getElementsByClassName('gauge_bg')[0].style.display = "none";
    }


/* ----------------------- 슬로건 페이드, 코멘트 이동 ----------------------- */
// 요소 위치 절대값 구하는 방법 : 요소의 viewport에서 부터의 위치 + viewport의 위치
    if (s_bottom > document.querySelector('.color .fade_comment').getBoundingClientRect().top + window.pageYOffset + 200) {
        fade ('.color #ab_5', '.color #ab_6')
    };
    if (s_bottom > document.querySelector('.freedom .fade_comment').getBoundingClientRect().top + window.pageYOffset) {
        fade ('.freedom #ab_10', '#ab_12')
    };
    if (s_bottom > document.querySelector('.freedom .fade_a').getBoundingClientRect().top + window.pageYOffset) {
        fade ('.freedom #ab_11', '.freedom #ab_12')
    };
    if (s_bottom > document.querySelector('.cool .fade_a').getBoundingClientRect().top + window.pageYOffset) {
        fade ('.cool #ab_13', '.cool #ab_15')
    };
    if (s_bottom > document.querySelector('.elegance .fade_a').getBoundingClientRect().top + window.pageYOffset) {
        fade ('.elegance #ab_16', '.elegance #ab_18')
    };
    

/* ----------------------- 스크롤 버튼 위치 표시 ----------------------- */

// let offset_Top_h = ['quiz', 'style', 'pick', 'catalog', 'comment'];
    if (s_bottom >= document.getElementsByClassName('quiz')[0].offsetTop) {
        btn_light (0)
    }
    if (s_bottom >= document.getElementsByClassName('style')[0].offsetTop) {
        btn_light (1)
    }
    if (s_bottom >= document.getElementsByClassName('pick')[0].offsetTop) {
        btn_light (2)
    }
    if (s_bottom >= document.getElementsByClassName('catalog')[0].offsetTop) {
        btn_light (3)
    }
    if (s_bottom >= document.getElementsByClassName('comment')[0].offsetTop) {
        btn_light (4)
    }

});

function fade (comment, slogan) {
    document.querySelector(comment).classList.add('fadeIn_comment');
    document.querySelector(slogan).classList.add('fadeIn_slogan');
}

function btn_light (num) {
        // 일단 다 초기화
        for(let i = 0; i < whole_nav_btn.length; i++){
            whole_nav_btn[i].style.backgroundColor = "#fff";
        }
        // 해당 것만 배경색 바꾸기
        document.getElementById(`wholeBtn_${num}`).style.backgroundColor ="#e3f1be";
}

/* ----------------------- quiz 이벤트 유의사항 보기 닫기 ----------------------- */

document.getElementsByClassName('video_close')[0].addEventListener('click', function(){
    document.getElementsByClassName('btn_popUp_bg')[0].style.display = "none";
});
document.getElementsByClassName('real_btn')[0].addEventListener('click', function(){
    document.getElementsByClassName('btn_popUp_bg')[0].style.display = "block";
});
let caution_chk = true;
document.getElementsByClassName('caution')[0].addEventListener('click', function(){
    if (caution_chk) {
            this.innerText = "유의사항 닫기";
            document.getElementsByClassName('caution_dsc')[0].style.display = "block";
            caution_chk = false;
    }
    else {
        this.innerText = "유의사항 보기";
        document.getElementsByClassName('caution_dsc')[0].style.display = "none";
        caution_chk = true;
    }
});

/* ----------------------- 미노이's pick 스와이퍼 ----------------------- */

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4.5,
    spaceBetween: 17,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop: true,
  });


/* ----------------------- 코멘트 ----------------------- */

let txt = "";
let add_comment = "";
let create_comment = "";

let comment_count = "";

// 코멘트 갯수 바뀌기 기능
function comment_txt () {
    comment_count = document.getElementsByClassName("add_comment").length;
    if (comment_count < 10) {
        comment_count = "0" + comment_count;
    }
    document.getElementsByClassName("comment_count")[0].innerText = comment_count;
}
// 엔터나 마우스 제출 버튼 클릭 시 코멘트 추가 기능
function comment_acitve () {

    txt = document.getElementById("comment").value;
    create_comment = document.createElement('div');
    create_comment.classList.add("add_comment");

    add_comment = `
                    <p class="add_comment_info">
                        <span class="nick_ini">연</span>
                        <span class="id">연짱짱***</span>
                        <span class="comment_date">2022-05-09</span>
                    </p>
                    <div class="comment_ment">
                        ${txt}
                    </div>
    `;
    create_comment.innerHTML = add_comment;

    document.getElementsByClassName('comments_box')[0].prepend(create_comment);

    document.getElementById("comment").value = null;


/*

- (아래)기존 방법이 안 됐던 이유 : 자바스크립트의 appendChild 는 Node만 추가 할 수 있음.
변수에 담아뒀던 add_comment 는 '문자열'이었기 때문에 자꾸 Node가 아니라는 경고만 뜸.

*Node란? 트리(tree) 구조에서 데이터의 상하위 계층을 나타내는 위치의 항목. 각 노드를 연결해 주는 것이 분기(分岐)이며, 루트(root)와 서브트리(subtree)로 구성됨.
- 문자열이 아닌 진짜 요소를 뜻하는 듯.

    add_comment = `
                    <div class="add_comment">
                        <p class="add_comment_info">
                            <span class="nick_ini">연</span>
                            <span class="id">연짱짱***</span>
                            <span class="comment_date">2022-05-09</span>
                        </p>
                        <div class="comment_ment">
                            ${txt}
                        </div>
                    </div>
    `;
    document.getElementsByClassName('comments_box')[0].appendChild(add_comment)
*/   
}

document.getElementsByClassName('comment_submit_btn')[0].addEventListener('click', ()=>{
    comment_acitve ()
    comment_txt ()
    
});

// textarea에 포커스 맞춰졌을 때만 기능 동작하게
document.getElementById('comment').addEventListener("focus", ()=>{
    document.getElementById('comment').addEventListener("keyup", (e)=>{
        // 콘솔창에 keycode찍었을 때 undefined만 떴는데 그 이유가 keycode라고 적어서. keyCode임.
        if (e.keyCode === 13) {
            comment_acitve () 
            comment_txt ()
        };
    });
});



