class Enemy {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.health = 3;
        this.status = true;
    }

    smite() {
        if (!this.status) {
            return;
        }
        if (this.health > 1) {
            this.health--;
        } else {
            this.status = false;
        }
    }
}