/* Google HTML Template  */

var collapse_container_dc;
var collapse_content_dc;
var expand_container_dc;
var expand_content_dc;
var expand_blocker_dc;
var background_exit_dc;
var background_exit_collapse;
var cta_dc;
var cta_col;
var id;
var loading;
var initAd;

function initVars(){
	console.log("[initVars]");
	collapse_container_dc = document.getElementById('collapse_container_dc');
	collapse_content_dc = document.getElementById('collapse_content_dc');
	expand_container_dc  = document.getElementById('expand_container_dc');
	expand_content_dc = document.getElementById('expand_content_dc');
	expand_blocker_dc = document.getElementById('expand_blocker_dc');
	background_exit_dc = document.getElementById('background_exit_dc');
	background_exit_collapse = document.getElementById('background_exit_collapse');
	cta_dc = document.getElementById('cta_dc');
	cta_col = document.getElementById('cta_col');
	loading = document.getElementById('loading');

	collapse_content_dc.style.display = "block"

}

function addListeners(){
	console.log("[addListeners]");
	cta_dc.addEventListener('touchend', eventHandler,false);
	cta_dc.addEventListener('click', eventHandler,false);
	cta_col.addEventListener('touchend', eventHandler,false);
	cta_col.addEventListener('click', eventHandler,false);

	background_exit_dc.addEventListener('touchend', eventHandler,false);
	background_exit_dc.addEventListener('click', eventHandler,false);
	background_exit_collapse.addEventListener('touchend', eventHandler,false);
	background_exit_collapse.addEventListener('click', eventHandler,false);
	Enabler.addEventListener(studio.events.StudioEvent.FULLSCREEN_SUPPORT, evalQuery, false);

	//Enabler.addEventListener(studio.events.StudioEvent.FULLSCREEN_EXPAND_START,requestFSExpand);
	//Enabler.addEventListener(studio.events.StudioEvent.FULLSCREEN_EXPAND_FINISH,finishFSExpand);
	//Enabler.addEventListener(studio.events.StudioEvent.FULLSCREEN_COLLAPSE_START,requestFSCollapse);
	//Enabler.addEventListener(studio.events.StudioEvent.FULLSCREEN_COLLAPSE_FINISH,finishFSCollapse);
}

function eventHandler(e){
	console.log("[eventHandler]");

	id=e.target.id;
	console.log("[id]"+id);
 	switch(e.target.id){
		case "background_exit_dc":
			Enabler.exit("HTML5_Collapsed_Clickthrough");
		break;

		case "background_exit_collapse":
			Enabler.exit("HTML5_Expanded_Clickthrough");
			queryFSSupport();
		break;

		case "cta_dc":
			queryFSSupport();
		break;

		case "cta_col":
			queryFSSupport();
		break;
	}
}

/*start of fullScreen support */
function queryFSSupport(){
	Enabler.queryFullscreenSupport();
	console.log("[queryFSSupport]");
}

function evalQuery(){
	console.log("[evalQuery]");
	console.log("id:"+id);

	if(id=="cta_dc"){
		queryFSExpand();
	}
	else {
		Enabler.stopTimer("Trailer timer");
		Enabler.stopTimer("Synopsis timer");
		Enabler.stopTimer("Gallery timer");
		queryFSCollapse();
	}
}


/*start of fullScreen expand */
function queryFSExpand(){
	console.log("[queryFSExpand]");
	Enabler.addEventListener(studio.events.StudioEvent.FULLSCREEN_EXPAND_START,requestFSExpand);
	Enabler.requestFullscreenExpand();
	document.getElementById('trailer').load();
	document.getElementById('trailer').play();
	//expandAd();
}

function requestFSExpand(){
	console.log("[requestFSExpand]");
	document.body.addEventListener('touchstart', function(e){ e.preventDefault(); });
	Enabler.addEventListener(studio.events.StudioEvent.FULLSCREEN_EXPAND_FINISH,finishFSExpand);
	expandAd();
	document.getElementById('trailer').load();
	document.getElementById('trailer').play();
	//Enabler.finishFullscreenExpand();
}

function finishFSExpand(){
	console.log("[finishFSExpand]");
	document.getElementById('trailer').load();
	document.getElementById('trailer').play();
	//expandAd();
}


/*start of fullScreen collapse */
function queryFSCollapse(){
	console.log("[queryFSCollapse]");
	Enabler.addEventListener(studio.events.StudioEvent.FULLSCREEN_COLLAPSE_START,requestFSCollapse);
	Enabler.requestFullscreenCollapse();
	//collapseAd();
}

function requestFSCollapse(){
	console.log("[requestFSCollapse]");
	document.body.removeEventListener('touchstart', function(e){ e.preventDefault(); });
	Enabler.addEventListener(studio.events.StudioEvent.FULLSCREEN_COLLAPSE_FINISH,finishFSCollapse);
	collapseAd();

}

function finishFSCollapse(){
	console.log("[finishFSCollapse]");
	document.getElementById('trailer').pause();
	//collapseAd();
}

function expandAd(){
	console.log("[expandAd]");
	expand_blocker_dc.style.display = "block";
	expand_container_dc.style.display="block";
	setTimeout(function(){expand_blocker_dc.style.display = "none";}, 300);
	Enabler.finishFullscreenExpand();
	Enabler.startTimer("Trailer timer");
}

function collapseAd(){
	expand_container_dc.style.display="none";
	Enabler.finishFullscreenCollapse();
	document.getElementById('trailer').pause();
}

function initAd(){
	console.log("[initAd]");
	initVars();
	addListeners();
	// cta_dc.style.opacity=1;
	nativeBrowserAdjustment();
}

function adVisibilityHandler(){
	console.log("[adVisibilityHandler]");
	initAd()
	//Enabler.callAfterInitialized(loadJSFile())
}

function isAndroidBrowser() {
    var objAgent = navigator.userAgent;
    var objfullVersion  = ''+parseFloat(navigator.appVersion);

    if ((objOffsetVersion=objAgent.indexOf("Chrome")) != -1) {
        objfullVersion = objAgent.substring(objOffsetVersion+7, objOffsetVersion+9);
        if (objfullVersion < 19) {
            return true;
        }
    }
    return false;
}

function nativeBrowserAdjustment(){
	if(isAndroidBrowser()){
		cta_dc.zIndex=500;
		console.log('index=500')
	}
	else { console.log('not default browser')}
}
