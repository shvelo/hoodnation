game.HUD = game.HUD || {};


game.HUD.Container = me.ObjectContainer.extend({

	init: function() {
		this.parent();
		
		this.isPersistent = true;
		
		this.collidable = false;
		this.floating = true;
		
		this.z = Infinity;

		this.name = "HUD";

		this.addChild(new me.SpriteObject(me.game.viewport.width - 60, me.game.viewport.height - 200, me.loader.getImage("guy")));
		this.addChild(new me.SpriteObject(me.game.viewport.width - 110, me.game.viewport.height - 30, me.loader.getImage("gun")));
	}
});
