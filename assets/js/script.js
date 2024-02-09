window.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        document.querySelector('.loading').classList.add('loaded')
    }, 1500);
});
document.querySelectorAll('.nav-item .item').forEach(btn => {
    btn.onclick = (e) => {
        document.querySelector(`.ct.active`)?.classList.remove('active');
        const id = e.target.getAttribute('page');
        if(!id) return;
        document.querySelector(`#${id}`)?.classList.add('active');
        document.querySelector('.nav-item .item.active')?.classList.remove('active');
        e.target.classList.add('active');
    }
});
(function lightMode(){
    const btn = document.querySelector('.darkmode');
    const htmlNode = document.querySelector('html');
    if(window.localStorage.getItem('light') === '1'){
        htmlNode.classList.add('light');
        btn.innerHTML = `Light mode`;
    }
    btn.onclick = (e) => {
        if (!document.querySelector('html.light')){
            e.target.innerText = 'Dark mode';
            htmlNode.classList.add('light');
        }
        else {
            e.target.innerText = 'Light mode';
            htmlNode.classList.remove('light');
        }
    }
})();
(function showNav(){
    const btnOpenNav = document.querySelector('.open');
    const nav = document.querySelector('.nav');
    const overlay = document.querySelector('.overlay');
    btnOpenNav.onclick = () => {
        nav.classList.add('open');
        overlay.classList.add('active');
    }

    nav.onclick = () => {
        nav.classList.remove('open');
        overlay.classList.remove('active');
    }

    overlay.onclick = () => {
        nav.classList.remove('open');
        overlay.classList.remove('active');
    }
})();


(function img(){
    const listImg = document.querySelector('#some-img');
    const list = ['1.jpg', '2.jpg', 'a.png'];

    listImg.innerHTML += list.map(m => 
        `<div class="img">
            <img src="./assets/img/${m}" alt="img">
         </div>`).join('\n')
})();