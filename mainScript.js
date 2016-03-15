window.addEventListener("load",function() { // Wait for the window to finish loading
 
	var Q = window.Q = Quintus({development: true, imagePath: "/sprites/Graphics/Autotiles/"})                // Create a new engine instance
	    .include("Sprites, Scenes, Input, 2D, Anim, Touch, UI, TMX") // Load any needed modules
	    .setup("myGame", {maximize:true})                        // Bind Quintus to the canvas with ID "myGame"
	    .controls()                             // Add in default controls (keyboard, buttons)
	    .touch();                               // Add in touch support (for the UI)
    
    Q.input.mouseControls();
    //Edited at school
    Q.scene("test_01", function(stage)
    {
    	Q.stageTMX("BEGINMAP.tmx", stage);
    	stage.add("viewport");
        Q.mouseControls({cursor: 'on'});
    }
    );
    //wat leuks

    Q.loadTMX("BEGINMAP.tmx", function()
    {
    	Q.stageScene("test_01");
    }
    );


	Q.GameObject.extend("MouseListener", {
    	init: function() {
    		console.log("MouseListener created");
    	},
    	step: function(dt) {
			//add mouse movement
            Q.stage(void 0).centerOn(Q.inputs['mouseX'],Q.inputs['mouseY']);

		}
    });
});
