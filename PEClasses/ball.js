class Ball {
    constructor() {
        // Create a ball with a default
        // x, y, size, and speed
        this.x = 100;
        this.y = 100;
        this.size = 30;
        this.speed = 2;
    }

    move() {
        // Move down based on the speed
        this.x = this.x + this.speed;
    }

    bounce() {
        if (this.x > width || this.x < 0) {
            this.speed = this.speed * -1;
        }
    }
    display() {
        ellipse(this.x, this.y, this.size);
    }

}
