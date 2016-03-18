//The url link is used for checking if this project is running on a local server. If so it needs a different url
var webUrl = window.location.href;
var additionalPath = "";
if (webUrl.indexOf("localhost") > -1)
{
    console.log("Running on localhost");
    additionalPath = '/JimVliet.github.io';
}

window.addEventListener("load",function() { // Wait for the window to finish loading

	var Q = window.Q = Quintus({development: true, imagePath: additionalPath + "/sprites/Graphics/Autotiles/"})                // Create a new engine instance
	    .include("Sprites, Scenes, Input, 2D, Anim, Touch, UI, TMX") // Load any needed modules
	    .setup("myGame", {maximize:true})                        // Bind Quintus to the canvas with ID "myGame"
	    .controls(true)                             // Add in default controls (keyboard, buttons)
	    .touch();                               // Add in touch support (for the UI)

    Q.input.mouseControls();

    //TODO: Create player class which can move around

    //Q.Sprite.extend("Player");

    Q.scene("test_01", function(stage)
    {
    	Q.stageTMX("mijn2.tmx", stage);
    }
    );

    Q.loadTMX("mijn2.tmx", function()
    {
    	Q.stageScene("test_01");
    }
    );



});
