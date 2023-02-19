function CloseMenu(e) {
    console.log(e);
    let list = document.querySelector('#head');
    let icon = document.querySelector('#icon')
    icon.name = 'menu';
    list.classList.remove('opacity-100');
    list.classList.add('opacity-0');
    list.classList.remove('top-20');
    list.classList.add('top-[400px]');

}

function Menu(e) {
    let list = document.querySelector('ul');
    if (list.classList.contains('opacity-0')) {
        e.name = 'close';
        list.classList.remove('opacity-0');
        list.classList.add('opacity-100');
        list.classList.remove('top-[400px]');
        list.classList.add('top-20');
    } else {
        e.name = 'menu';
        list.classList.remove('opacity-100');
        list.classList.add('opacity-0');
        list.classList.remove('top-20');
        list.classList.add('top-[400px]');
    }
}