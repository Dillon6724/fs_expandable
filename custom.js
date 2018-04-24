var clicktrailer;
var clicksynopsis;
var clickgallery;
var trailer;
var synopsis;
var gallery;


function initVars(){
    console.log("[initHandlers]");
    clicktrailer = document.getElementById('click-trailer');
    clicksynopsis = document.getElementById('click-synopsis');
    clickgallery  = document.getElementById('click-gallery');
    trailer = document.getElementById('trailer-container');
    synopsis = document.getElementById('synopsis');
    gallery = document.getElementById('gallery');
}

function addListeners(){
    console.log("[addListeners]");
    clicktrailer.addEventListener('click', hideContent, false);
    clicksynopsis.addEventListener('click', hideContent, false);
    clickgallery.addEventListener('click', hideContent, false);

    // clicktrailer.addEventListener('click', eventHandler, false);
    // clicksynopsis.addEventListener('click', eventHandler, false);
    // clickgallery.addEventListener('click', eventHandler, false);

    // Enabler.addEventListener(studio.events.StudioEvent.FULLSCREEN_SUPPORT, evalQuery, false);
    // Enabler.addEventListener(studio.events.StudioEvent.FULLSCREEN_EXPAND_START,requestFSExpand);
    // Enabler.addEventListener(studio.events.StudioEvent.FULLSCREEN_EXPAND_FINISH,finishFSExpand);
    // Enabler.addEventListener(studio.events.StudioEvent.FULLSCREEN_COLLAPSE_START,requestFSCollapse);
    // Enabler.addEventListener(studio.events.StudioEvent.FULLSCREEN_COLLAPSE_FINISH,finishFSCollapse);
}

function hideContent(e) {
    switch(e.target.id){
        case "clicktrailer":
            synopsis.style.display = 'none';
            gallery.style.display = 'none';
        break;

        case "clicksynopsis":
            trailer.style.display = 'none';
            gallery.style.display = 'none';
        break;

        case "clickgallery":
            trailer.style.display = 'none';
            synopsis.style.display = 'none';
        break;
    }
}

// function eventHandler(e){
//     console.log("[eventHandler]");

//     id=e.target.id;
//     console.log("[id]"+id);
//     switch(e.target.id){
//         case "background_exit_dc":
//             Enabler.exit("HTML5_Collapsed_Clickthrough");
//         break;

//         case "background_exit_collapse":
//             Enabler.exit("HTML5_Expanded_Clickthrough");
//             queryFSSupport();
//         break;

//         case "cta_dc":
//             queryFSSupport();
//         break;

//         case "cta_col":
//             queryFSSupport();
//         break;
//     }
// }