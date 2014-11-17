
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var documentEvent = {};	// @document
// @endregion// @endlock

// eventHandlers// @lock

	documentEvent.onLoad = function documentEvent_onLoad (event)// @startlock
	{// @endlock
		//WAF.widget.Grid.prototype.testFunction = function(){}; //works with / without component
		
		$$('component1').loadComponent({
			path:'/test.waComponent',
			onSuccess: function(e){
				WAF.widget.Grid.prototype.testFunction = function(){};
			}
}); //works here
		
		//put a grid in the web component breaks it

	};// @lock

// @region eventManager// @startlock
	WAF.addListener("document", "onLoad", documentEvent.onLoad, "WAF");
// @endregion
};// @endlock
