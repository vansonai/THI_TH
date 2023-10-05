class Rectangle {
    x;
    y;
    width;
    height;
    color;
    ctx;
    constructor(x, y, width, height, color) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
        this.ctx = document.getElementById('canvas').getContext('2d')
    }
    render() {
        this.ctx.beginPath();
        this.ctx.fillRect(this.x, this.y, this.width, this.height)
        this.ctx.fillStyle = this.color
        this.ctx.fill();
        this.ctx.Close()
    }
}

let rectangle = new Rectangle(10, 10, 200, 100, '#000000')
rectangle.render()