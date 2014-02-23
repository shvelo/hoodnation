/*
* Das Bullet
*/
game.BulletEntity = me.ObjectEntity.extend({
 
    init: function(x, y, settings) {
        settings.image = "bullet";
        settings.spritewidth = 4;
        settings.spriteheight = 2;

        this.parent(x, y, settings);

        this.isLethal = true;
        this.collidable = true;
 
        this.speed = 10;

        this.gravity = 0;
        this.angle = settings.targetAngle;
    },

    update: function() {

        var vdirection = new me.Vector2d(Math.cos(this.angle), Math.sin(this.angle));
        var vspeed = new me.Vector2d(this.speed, this.speed);
        this.vel = vdirection.scale(vspeed).clone();
        var collision = this.updateMovement();

        if (collision.yprop.isSolid || collision.xprop.isSolid){
            me.game.remove(this);
        }

        this.parent();

        return true;
    }
});