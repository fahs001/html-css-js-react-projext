let title = document.querySelector('.title');
let ul = document.querySelector('ul');
let reload = document.querySelector('.reload');



window.onload = ()=> {
    if(window.navigator.onLine){
        online();
    } else {
        offline();
    }
}

window.addEventListener('online', () => {
    online();
});
window.addEventListener('offline', () => {
    offline();
});

reload.onclick = ()=> {
    window.location.reload();
}

const online = () => {
    title.innerHTML = 'online now';
    title.style.color = 'green';
    ul.classList.add('hide');
    reload.classList.add('hide');
}

const offline = () => {
    title.innerHTML = 'offline now';
    ul.classList.remove('hide');
    reload.classList.remove('hide');
    title.style.color = 'red';

}













