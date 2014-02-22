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
        this.renderable.setCurrentAnimation("h");
    },
 
    update: function() {
 
        if (me.input.isKeyPressed('left')) {
            if(! this.renderable.isCurrentAnimation("h"))
            this.renderable.setCurrentAnimation("h");

            this.flipX(true);
            this.vel.x -= this.accel.x * me.timer.tick;
        } else if (me.input.isKeyPressed('right')) {
            if(! this.renderable.isCurrentAnimation("h"))
            this.renderable.setCurrentAnimation("h");

            this.flipX(false);
            this.vel.x += this.accel.x * me.timer.tick;
        } else {
            this.vel.x = 0;
        }

        if (me.input.isKeyPressed('up')) {
            if(! this.renderable.isCurrentAnimation("v"))
            this.renderable.setCurrentAnimation("v");

            this.flipY(false);
            this.vel.y -= this.accel.y * me.timer.tick;
        } else if (me.input.isKeyPressed('down')) {
            if(! this.renderable.isCurrentAnimation("v"))
            this.renderable.setCurrentAnimation("v");

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