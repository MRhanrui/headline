// 导航栏点击换色效果

// let clean = function ( a) {
//     for (let i = 0 ;i < a.length;i++){
//         a[i].classList.remove('cur')
//     }
// };
// (()=>{
//     let btn = document.querySelectorAll('.menu-list .btn');
//     console.log(btn)
//     for(let i = 0; i < btn.length ;i++){
//         btn[i].addEventListener('click',()=>{
//             clean(btn);
//             btn[i].classList.add('cur')
//         })
//     }
// })();

//点击刷新旋转效果
(()=>{
    let refresh = document.querySelector('.refresh');
    console.log(refresh)
    let a = 0 ;
    refresh.addEventListener('click',()=>{
        a += 360;
        refresh.style.transform = `rotate(${a}deg)`
    });
})();

//点击弹窗效果
(()=>{
    let news = document.querySelector('.top-bar .left');
    let back = document.querySelector('#back');
    let popup = document.querySelector('.popup');
    let close = document.querySelector('.popup .close');
    news.addEventListener('click',()=>{
        back.classList.add('active')
        popup.classList.add('active')
    })
    close.addEventListener('click',()=>{
        back.classList.remove('active')
        popup.classList.remove('active')
    })

})();