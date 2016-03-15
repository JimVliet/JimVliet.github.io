window.addEventListener("load",function() { // Wait for the window to finish loading
 
	var Q = window.Q = Quintus({development: true, imagePath: "/sprites/Graphics/Autotiles/"})                // Create a new engine instance
	    .include("Sprites, Scenes, Input, 2D, Anim, Touch, UI, TMX") // Load any needed modules
	    .setup("myGame", {maximize:true})                        // Bind Quintus to the canvas with ID "myGame"
	    .controls()                             // Add in default controls (keyboard, buttons)
	    .touch();                               // Add in touch support (for the UI)
    
    Q.input.mouseControls();

    Q.Sprite.extend("listener", {
        init: function(p) {
            this._super(p, {
                asset: "TestingTile.png"
            });
            var x = 300;
            var y = 0;
        },
        step: function(dt)
        {
            console.log("X: " + Q.inputs['mouseX'] + " Y: " + Q.inputs['mouseY']);
            //Q.stage().centerOn(Q.inputs['mouseX'],Q.inputs['mouseY']);
            y = (y + 1)%1200
            Q.stage().centerOn(x,y);
        }
    });

    Q.scene("test_01", function(stage)
    {
    	Q.stageTMX("BEGINMAP.tmx", stage);
    	stage.add("viewport");
        stage.insert(new Q.listener());
    }
    );
    //wat leuks

    Q.loadTMX("BEGINMAP.tmx", function()
    {
    	Q.stageScene("test_01");
    }
    );


});
