export default class Car {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.width = 30;
        this.height = 50;

        // Physics properties
        this.speed = 0;
        this.maxSpeed = 10;
        this.acceleration = 0.2;
        this.friction = 0.98;
        this.turnSpeed = 0.06;

        this.angle = 0; // Heading angle

        // Drifting properties
        this.driftFactor = 0.94; // How much lateral velocity is retained (sliding)
        this.grip = 0.9; // Normal grip

        this.velocity = { x: 0, y: 0 };
    }

    update(input) {
        // Acceleration
        if (input.up) {
            this.speed += this.acceleration;
        } else if (input.down) {
            this.speed -= this.acceleration;
        } else {
            this.speed *= this.friction;
        }

        // Cap speed
        if (this.speed > this.maxSpeed) this.speed = this.maxSpeed;
        if (this.speed < -this.maxSpeed / 2) this.speed = -this.maxSpeed / 2;
        if (Math.abs(this.speed) < 0.01) this.speed = 0;

        // Steering (only when moving)
        if (Math.abs(this.speed) > 0.1) {
            const reverse = this.speed < 0 ? -1 : 1;
            if (input.left) {
                this.angle -= this.turnSpeed * reverse;
            }
            if (input.right) {
                this.angle += this.turnSpeed * reverse;
            }
        }

        // Calculate velocity vector based on heading
        // In a normal car, velocity aligns with heading.
        // In a drift car, we blend the previous velocity with the new heading velocity.

        const headingX = Math.sin(this.angle);
        const headingY = -Math.cos(this.angle);

        // Ideal velocity if we had infinite grip
        const idealVx = headingX * this.speed;
        const idealVy = headingY * this.speed;

        // Blend current velocity with ideal velocity
        // Lower grip = more slide (keeps old velocity longer)
        // We update the velocity directly

        // Simple physics model:
        // 1. Add acceleration to velocity in direction of heading
        // 2. Apply friction
        // 3. Apply lateral friction (grip) to kill sideways movement

        // Let's try a vector-based approach for better drifting

        // Forward force
        let force = 0;
        if (input.up) force = this.acceleration;
        if (input.down) force = -this.acceleration;

        // Add force to velocity
        this.velocity.x += Math.sin(this.angle) * force;
        this.velocity.y += -Math.cos(this.angle) * force;

        // Drag/Friction (air resistance)
        this.velocity.x *= 0.98;
        this.velocity.y *= 0.98;

        // Lateral friction (Grip)
        // Project velocity onto the right vector
        const rightAngle = this.angle + Math.PI / 2;
        const rightX = Math.sin(rightAngle);
        const rightY = -Math.cos(rightAngle);

        const lateralVelocity = this.velocity.x * rightX + this.velocity.y * rightY;

        // Apply lateral friction (kill lateral velocity)
        // If drifting (spacebar or high speed turn), reduce grip
        let currentGrip = this.grip;
        if (input.space || Math.abs(lateralVelocity) > 3) {
            currentGrip = 0.96; // Slide more
        } else {
            currentGrip = 0.8; // Grip more
        }

        // Cancel out some lateral velocity
        this.velocity.x -= lateralVelocity * rightX * (1 - currentGrip);
        this.velocity.y -= lateralVelocity * rightY * (1 - currentGrip);

        // Update position
        this.x += this.velocity.x;
        this.y += this.velocity.y;

        // Update speed for HUD (magnitude of velocity)
        this.speed = Math.sqrt(this.velocity.x ** 2 + this.velocity.y ** 2);
        // Direction of speed (for reverse check)
        // Dot product of velocity and heading
        const dot = this.velocity.x * headingX + this.velocity.y * headingY;
        if (dot < 0) this.speed *= -1;
    }

    draw(ctx) {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.angle);

        // Car Body
        ctx.fillStyle = '#ef4444'; // Red
        ctx.fillRect(-this.width / 2, -this.height / 2, this.width, this.height);

        // Windshield
        ctx.fillStyle = '#9ca3af'; // Gray
        ctx.fillRect(-this.width / 2 + 2, -this.height / 4, this.width - 4, 10);

        // Headlights
        ctx.fillStyle = '#fef08a'; // Yellow
        ctx.fillRect(-this.width / 2 + 2, -this.height / 2, 6, 4);
        ctx.fillRect(this.width / 2 - 8, -this.height / 2, 6, 4);

        ctx.restore();
    }
}
