class Splat {
    pos;
    r;
    c;

    divisions = 12;

    variation = 150;

    constructor(c_, pos_, r_) {
        this.r = r_ || randomRange(25, 50);
        this.c = c_;
        this.pos = pos_
            ? createVector(pos_.x + this.getOffset(), pos_.y + this.getOffset())
            : createVector(
                  randomRange(width / 2, width / 2),
                  randomRange(0, height)
              );
    }

    show() {
        let vel = p5.Vector.random2D();
        let d = dist(mouseX, mouseY, this.pos.x, this.pos.y);
        d = map(d, 300, 0, 0, 2);
        d = constrain(d, 0, 2);
        vel.x *= d;
        vel.y *= d;
        this.pos.add(vel);
        ellipse(this.pos.x, this.pos.y, this.r, this.r);
    }

    getOffset() {
        return randomRange(-this.variation / 2, this.variation);
    }

    split() {
        let newParticles = [];
        for (let i = 0; i < this.divisions; i++) {
            newParticles.push(
                new Splat(this.c, this.pos, this.r / this.divisions)
            );
        }
        return newParticles;
    }
}
