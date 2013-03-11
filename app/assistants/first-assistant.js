var oauthConfig = {
   callbackScene: 'bookList',
   authorizeUrl: 'https://www.douban.com/service/auth2/auth',
   accessTokenUrl: 'https://www.douban.com/service/auth2/token',
   accessTokenMethod: 'POST',
   client_id: '025f45f03e207d44071dd1d0ba6177cc',
   client_secret: '3b33fbe805139611',
   redirect_uri: 'http://www.google.com.hk',
   response_type: 'code',
}

function FirstAssistant() {
	/* this is the creator function for your scene assistant object. It will be passed all the 
	   additional parameters (after the scene name) that were passed to pushScene. The reference
	   to the scene controller (this.controller) has not be established yet, so any initialization
	   that needs the scene controller should be done in the setup function below. */
}

FirstAssistant.prototype.getAuth = function() {
   Mojo.Controller.stageController.pushScene('oauth', oauthConfig);
}
FirstAssistant.prototype.setup = function() {
	/* this function is for setup tasks that have to happen when the scene is first created */
		
	/* use Mojo.View.render to render view templates and add them to the scene, if needed */
	
	/* setup widgets here */
	this.model = {
	 buttonLabel: "Button"
        }
        this.controller.setupWidget('oauthButton', {}, this.model);
	
	/* add event handlers to listen to events from widgets */
        this.controller.listen('authButton', Mojo.Event.tap, this.getAuth);
};

FirstAssistant.prototype.activate = function(event) {
	/* put in event handlers here that should only be in effect when this scene is active. For
	   example, key handlers that are observing the document */
};

FirstAssistant.prototype.deactivate = function(event) {
	/* remove any event handlers you added in activate and do any other cleanup that should happen before
	   this scene is popped or another scene is pushed on top */
};

FirstAssistant.prototype.cleanup = function(event) {
	/* this function should do any cleanup needed before the scene is destroyed as 
	   a result of being popped off the scene stack */
};
