window.addEventListener("load",function(){
    //menu 컨트롤
    var menuButton = document.querySelector(".menu-button");
    var menu = document.querySelector("#menu-select");

    menuButton.addEventListener("click",function(){ 
        menu.classList.toggle("invisible");
    });

    //action bar 컨트롤
    var actionBarButton = document.querySelector(".action-bar-button");
    var actionBar = document.querySelector(".action-bar");

    actionBarButton.addEventListener("click", actionBarClick);

    setTimeout(function(){
        actionBarClick();
        setTimeout(actionBarClick,1500);
    },10);
    

    function actionBarClick(){
        actionBar.classList.toggle("invisible");
        actionBarButton.classList.toggle("turn");
    };


    //login
    var loginButton = document.querySelector('.login');
    loginButton.onclick = function(){    
        var windowopen = window.open("login_popup.html", "Logindfsfasdfsaf", "width=200, height=300, top=100, left=100");
    };

    //부드러운 스크롤 (구버전 IE에서 작동이 안되는 호환성 문제 해결 필요)
    var scroll_e = document.querySelectorAll(".scroll");
    for(let i = 0; i < scroll_e.length; i++)
        scroll_e[i].addEventListener("click", function(){        
            var target = document.getElementById('by'+scroll_e[i].id);        
            var targetY = target.offsetTop; //타겟 위치        
            targetY = targetY - document.getElementById('main-header').offsetHeight;        
            window.scrollTo({top: targetY, left:0, behavior:'smooth'}); 
        })
   

    //로그인 확인
    /* var login_true = false;
    var login_menu = document.getElementById("login");

    if(login_true)
        login_menu.style.display = "none";
    else
    login_menu.style.display = "inline-block"; */
});