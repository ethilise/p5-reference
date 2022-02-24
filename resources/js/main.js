window.myApp = {
    onWindowClose: () => {
        Neutralino.app.exit();
    }
};

// Initialize native API communication. This is non-blocking
// use 'ready' event to run code on app load.
// Avoid calling API functions before init or after init.
Neutralino.init(); 

Neutralino.events.on("windowClose", myApp.onWindowClose);

// setTimeout( function() {
//     window.location="https://p5js.org/reference/"
// }, 1000 )

// window.myApp.showPreview()