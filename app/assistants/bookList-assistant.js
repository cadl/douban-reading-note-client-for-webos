function BookListAssistant() {
	/* this is the creator function for your scene assistant object. It will be passed all the 
	   additional parameters (after the scene name) that were passed to pushScene. The reference
	   to the scene controller (this.controller) has not be established yet, so any initialization
	   that needs the scene controller should be done in the setup function below. */
}

BookListAssistant.prototype.setup = function() {
	/* this function is for setup tasks that have to happen when the scene is first created */
	this.controller.setupWidget("bookList",
	    this.listAttr = {
	       itemTemplate: "bookList/itemTemplate",
	       swipeToDelete: false,
	       renderLimit: 40,
	       reorderable: false
	    },
	    this.listModel = {
	       listTitle: "book list",
	       items: [
	          {"title": "test1", "text": "12345671234567sdfghsdfg"},
                  {"title": "test2", "text": "123456789234567dfghjfgd"},

                  {"title": "test2", "text": "123456789234567dfghjfgd"},

                  {"title": "test2", "text": "123456789234567dfghjfgd"}],
            });
		
	/* use Mojo.View.render to render view templates and add them to the scene, if needed */
	
	/* setup widgets here */
	
	/* add event handlers to listen to events from widgets */
};

BookListAssistant.prototype.activate = function(event) {
	/* put in event handlers here that should only be in effect when this scene is active. For
	   example, key handlers that are observing the document */
};

BookListAssistant.prototype.deactivate = function(event) {
	/* remove any event handlers you added in activate and do any other cleanup that should happen before
	   this scene is popped or another scene is pushed on top */
};

BookListAssistant.prototype.cleanup = function(event) {
	/* this function should do any cleanup needed before the scene is destroyed as 
	   a result of being popped off the scene stack */
};
