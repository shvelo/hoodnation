/*
* Das Player
*/
game.EnemyEntity = me.ObjectEntity.extend({
 
    init: function(x, y, settings) {
        this.parent(x, y, settings);
 
        this.setVelocity(0 ,0);

        this.gravity = 0;
        this.collidable = true;
 
        this.updateColRect(4, 40, -4, 40);
    },
 
    update: function() {
        if(this.collide())
            me.game.remove(this);

        this.parent();
        return true;
    }
 
});