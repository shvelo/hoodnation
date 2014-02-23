/*
* Das Player
*/
game.PlayerEntity = me.ObjectEntity.extend({
 
    init: function(x, y, settings) {
        this.parent(x, y, settings);
 
        this.setVelocity(2, 2);

        this.gravity = 0;
 
        me.game.viewport.follow(this.pos, me.game.viewport.AXIS.BOTH);

        this.renderable.addAnimation ("h", [2,3], 500);
        this.renderable.addAnimation("v", [0,1], 500);

        this.updateColRect(4, 40, -4, 40);

        this.setHorizontal();

        me.input.registerPointerEvent('mousemove', me.game.viewport, function(e) {
            this.renderable.angle = this.angleToPoint(new me.Vector2d(e.gameX, e.gameY));
            this.update();
        }.bind(this));
    },

    setHorizontal: function() {
        if(this.renderable.isCurrentAnimation("h")) return false;

        this.renderable.setCurrentAnimation("h");
        //this.updateColRect(12, 20, -4, 40);
    },

    setVertical: function() {
        if(this.renderable.isCurrentAnimation("v")) return false;

        this.renderable.setCurrentAnimation("v");
        //this.updateColRect(3, 42, 10, 20);
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