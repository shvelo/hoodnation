/*
* Das Player
*/
game.PlayerEntity = me.ObjectEntity.extend({
 
    init: function(x, y, settings) {
        this.parent(x, y, settings);
 
        this.setVelocity(3, 3);

        this.gravity = 0;
 
        me.game.viewport.follow(this.pos, me.game.viewport.AXIS.BOTH);

        this.renderable.addAnimation ("h", [2,3], 500);
        this.renderable.addAnimation("v", [0,1], 500);

        this.updateColRect(4, 40, -4, 40);

        this.renderable.setCurrentAnimation("h");

        me.input.registerPointerEvent('mousemove', me.game.viewport, function(e) {
            this.renderable.angle = this.angleToPoint(new me.Vector2d(e.gameX, e.gameY));
        }.bind(this));

        me.input.registerPointerEvent('mousedown', me.game.viewport, function(e) {
            var bullet = me.entityPool.newInstanceOf('bullet', this.pos.x, this.pos.y, {
                targetAngle: this.angleToPoint(new me.Vector2d(e.gameX, e.gameY))
            });
            me.game.add(bullet, this.z); 
            me.game.sort();
        }.bind(this));
    },
 
    update: function() {
 
        if (me.input.isKeyPressed('left')) {
            this.vel.x -= this.accel.x * me.timer.tick;
        } else if (me.input.isKeyPressed('right')) {
            this.vel.x += this.accel.x * me.timer.tick;
        } else {
            this.vel.x = 0;
        }

        if (me.input.isKeyPressed('up')) {
            this.vel.y -= this.accel.y * me.timer.tick;
        } else if (me.input.isKeyPressed('down')) {
            this.vel.y += this.accel.y * me.timer.tick;
        } else {
            this.vel.y = 0;
        }

        this.updateMovement();

        if(this.vel.x == 0 && this.vel.y == 0) {
            this.renderable.animationpause = true;
        } else {
            this.renderable.animationpause = false;
        }
 
        this.parent();
        return true;
    }
 
});