export default class LevelManager {
    constructor() {
        this.currentLevel = 1;
        this.walls = [];
        this.checkpoints = [];
    }

    loadLevel(levelId) {
        this.currentLevel = levelId;
        this.walls = [];

        // Simple box track for testing
        // Outer walls
        this.walls.push({ x: 0, y: 0, w: 2000, h: 50 }); // Top
        this.walls.push({ x: 0, y: 1150, w: 2000, h: 50 }); // Bottom
        this.walls.push({ x: 0, y: 0, w: 50, h: 1200 }); // Left
        this.walls.push({ x: 1950, y: 0, w: 50, h: 1200 }); // Right

        // Inner island
        this.walls.push({ x: 400, y: 400, w: 1200, h: 400 });

        return {
            spawn: { x: 200, y: 200, angle: Math.PI / 2 }
        };
    }

    draw(ctx) {
        ctx.fillStyle = '#6b7280'; // Gray walls
        this.walls.forEach(wall => {
            ctx.fillRect(wall.x, wall.y, wall.w, wall.h);

            // Border
            ctx.strokeStyle = '#fff';
            ctx.lineWidth = 2;
            ctx.strokeRect(wall.x, wall.y, wall.w, wall.h);
        });
    }

    checkCollision(car) {
        // Simple AABB collision for now
        // For better collision, we need rotated rect vs rect, but let's start simple
        // We'll check the car's center point against walls (very basic)

        for (const wall of this.walls) {
            if (
                car.x > wall.x &&
                car.x < wall.x + wall.w &&
                car.y > wall.y &&
                car.y < wall.y + wall.h
            ) {
                return true;
            }
        }
        return false;
    }
}
