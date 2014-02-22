/*
* Das Player
*/
game.PlayerEntity = me.ObjectEntity.extend({
 
    init: function(x, y, settings) {
        this.parent(x, y, settings);
 
        this.setVelocity(4, 4);

        this.gravity = 0;
 
        me.game.viewport.follow(this.pos, me.game.viewport.AXIS.BOTH);

        this.renderable.addAnimation ("h", [2,3], 500);
        this.renderable.addAnimation("v", [0,1], 500);

        this.setHorizontal();
    },

    setHorizontal: function() {
        if(this.renderable.isCurrentAnimation("h")) return false;

        this.renderable.setCurrentAnimation("h");
        this.updateColRect(12, 20, -4, 40);
    },

    setVertical: function() {
        if(this.renderable.isCurrentAnimation("v")) return false;

        this.renderable.setCurrentAnimation("v");
        this.updateColRect(3, 42, 10, 20);
    },
 
    update: function() {
 
        if (me.input.isKeyPressed('left')) {
            this.setHorizontal();

            this.flipX(true);
            this.vel.x -= this.accel.x * me.timer.tick;
        } else if (me.input.isKeyPressed('right')) {
            this.setHorizontal();

            this.flipX(false);
            this.vel.x += this.accel.x * me.timer.tick;
        } else {
            this.vel.x = 0;
        }

        if (me.input.isKeyPressed('up')) {
            this.setVertical();

            this.flipY(false);
            this.vel.y -= this.accel.y * me.timer.tick;
        } else if (me.input.isKeyPressed('down')) {
            this.setVertical();

            this.flipY(true);
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