import Car from './Car';
import LevelManager from './LevelManager';

export default class Engine {
    constructor(canvas, onUpdateHUD) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.onUpdateHUD = onUpdateHUD;

        this.width = canvas.width;
        this.height = canvas.height;

        this.car = new Car(0, 0);
        this.levelManager = new LevelManager();

        this.input = {
            up: false,
            down: false,
            left: false,
            right: false,
            space: false
        };

        this.running = false;
        this.animationId = null;

        this.init();
    }

    init() {
        const startData = this.levelManager.loadLevel(1);
        this.car.x = startData.spawn.x;
        this.car.y = startData.spawn.y;
        this.car.angle = startData.spawn.angle;

        this.setupInput();
    }

    setupInput() {
        window.addEventListener('keydown', (e) => this.handleKey(e, true));
        window.addEventListener('keyup', (e) => this.handleKey(e, false));
    }

    handleKey(e, isDown) {
        switch (e.code) {
            case 'ArrowUp':
            case 'KeyW':
                this.input.up = isDown;
                break;
            case 'ArrowDown':
            case 'KeyS':
                this.input.down = isDown;
                break;
            case 'ArrowLeft':
            case 'KeyA':
                this.input.left = isDown;
                break;
            case 'ArrowRight':
            case 'KeyD':
                this.input.right = isDown;
                break;
            case 'Space':
                this.input.space = isDown;
                break;
        }
    }

    start() {
        if (this.running) return;
        this.running = true;
        this.loop();
    }

    stop() {
        this.running = false;
        cancelAnimationFrame(this.animationId);
    }

    loop() {
        if (!this.running) return;

        this.update();
        this.draw();

        this.animationId = requestAnimationFrame(() => this.loop());
    }

    update() {
        this.car.update(this.input);

        // Collision
        if (this.levelManager.checkCollision(this.car)) {
            // Bounce / Stop
            this.car.velocity.x *= -0.5;
            this.car.velocity.y *= -0.5;
            this.car.x += this.car.velocity.x * 2; // Push back
            this.car.y += this.car.velocity.y * 2;
        }

        // Update HUD
        if (this.onUpdateHUD) {
            this.onUpdateHUD({
                speed: Math.abs(Math.round(this.car.speed * 10)),
                time: 0 // TODO: Implement timer
            });
        }
    }

    draw() {
        // Clear background
        this.ctx.fillStyle = '#1f2937'; // Dark gray background
        this.ctx.fillRect(0, 0, this.width, this.height);

        this.ctx.save();

        // Camera follow
        // Center the camera on the car
        const camX = -this.car.x + this.width / 2;
        const camY = -this.car.y + this.height / 2;

        this.ctx.translate(camX, camY);

        // Draw Level
        this.levelManager.draw(this.ctx);

        // Draw Car
        this.car.draw(this.ctx);

        this.ctx.restore();
    }

    resize(width, height) {
        this.width = width;
        this.height = height;
        this.canvas.width = width;
        this.canvas.height = height;
    }
}
