window.addEventListener("load",function() { // Wait for the window to finish loading
 
	var Q = window.Q = Quintus({development: true, imagePath: "/sprites/Graphics/Autotiles/"})                // Create a new engine instance
	    .include("Sprites, Scenes, Input, 2D, Anim, Touch, UI, TMX") // Load any needed modules
	    .setup("myGame", {maximize:true})                        // Bind Quintus to the canvas with ID "myGame"
	    .controls()                             // Add in default controls (keyboard, buttons)
	    .touch();                               // Add in touch support (for the UI)
    
    Q.input.mouseControls();
    //Edited at school
    Q.UI.Text.extend("Score",{
        init: function(p) {
            this._super({
                label: "score: 0",
                x: 0,
                y: 0
            });

            Q.state.on("change.score",this,"score");
        },

        score: function(score) {
            this.p.label = "score: " + score;
        }
    });
    Q.state.set("score",50);

    Q.scene("test_01", function(stage)
    {
    	Q.stageTMX("BEGINMAP.tmx", stage);
    	stage.add("viewport");

    }
    );
    //wat leuks

    Q.loadTMX("BEGINMAP.tmx", function()
    {
    	Q.stageScene("test_01");
    }
    );

});
