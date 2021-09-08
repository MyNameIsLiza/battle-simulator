class Enemy {
    constructor(n, h) {
        this.number = n;
        this.health = h;
        this.status = 'alive';
        this.maxHealth = h;
    }

    smite() {
        if (this.status === 'dead') {
            return;
        }
        if (this.health > 1) {
            this.health--;
            if (this.health / this.maxHealth <= 0.4) {
                this.status = 'injured';
            }
        } else {
            this.health--;
            this.status = 'dead';
        }
    }
}

const canvasArr = [...document.getElementsByClassName('enemy')];
const enemiesArr = [];
canvasArr.forEach((en, index) => {
    const c = en.getContext('2d');
    drawCanvas(c, 'img/enemy.png');
    enemiesArr.push(new Enemy(index, 3));
    en.dataset.number = index;
    console.log(c);
    en.addEventListener('click', (e) => {
        const pixelInfo = c.getImageData(e.layerX, e.layerY, 1, 1).data;
        if (pixelInfo.reduce((ac, el) => {
            return ac + el;
        }) !== 0) {
            const oldStatus = enemiesArr[e.target.dataset.number].state;
            enemiesArr[e.target.dataset.number].smite();
            if (oldStatus !== enemiesArr[e.target.dataset.number].status) {
                /*clearCanvas(en.getContext('2d'));*/
                drawCanvas(en.getContext('2d'), getImgPathByState(enemiesArr[e.target.dataset.number].status));
            }
            console.group('Smite');
            console.log('pixelInfo', pixelInfo);
            console.log('target', e.target);
            console.log('health', enemiesArr[e.target.dataset.number].health);
            console.log('status', enemiesArr[e.target.dataset.number].status);
            console.groupEnd();
        }
    })
});


/*const canvas = document.getElementById('canvas'),
    context = canvas.getContext('2d');
make_base(context, 'img/enemy.png');*/


function drawCanvas(context, imgPath) {
    console.log('Drawing', imgPath);
    const base_image = new Image();
    base_image.src = imgPath;
    base_image.onload = ()=>{
        context.clearRect(0, 0, 300, 300);
        context.drawImage(base_image, 0, 0);
    }
}

function getImgPathByState(status) {
    switch (status) {
        case 'injured':
            return 'img/enemy_injured.png';
        case 'dead':
            return 'img/enemy_dead.png';
        default:
            return 'img/enemy.png';
    }
}

/*
canvas.addEventListener('click', (e) => {
    const pixelInfo = context.getImageData(e.layerX, e.layerY, 1, 1).data;
    if (pixelInfo.reduce((ac, el) => {
        return ac + el
    }) !== 0) {
        console.log('pixelInfo', pixelInfo);
    }

});*/
