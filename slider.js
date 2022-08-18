let images = [
    'https://i2.wp.com/img0.liveinternet.ru/images/attach/c/6/91/566/91566072_0c0ff2d5f06947954f17ccbe4a090474.jpg',
    'http://i02.fotocdn.net/s105/2e03499e7df0d8b0/gallery_m/2276124116.jpg',
    'http://img0.liveinternet.ru/images/attach/d/1/131/635/131635612_4248238_53.jpg',
    "https://avatars.mds.yandex.net/i?id=4c5aadc6535c246400ddaf531b615e54-3974798-images-thumbs&ref=rim&n=33&w=301&h=300"
];
let num = 0;
function next() {
    var slider = document.getElementById('slider');
    num++;
    if(num >= images.length) {
        num = 0;
    }
    slider.src = images[num];
}
function prev() {
    let slider = document.getElementById('slider');
    num--;
    if(num < 0) {
        num = images.length-1;
    }
    slider.src = images[num];
}
