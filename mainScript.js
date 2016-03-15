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
        },
        step: function(dt)
        {
            console.log("X: " + Q.inputs['mouseX'] + " Y: " + Q.inputs['mouseY']);
            Q.stage().moveTo(Q.inputs['mouseX'],Q.inputs['mouseY']);
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
