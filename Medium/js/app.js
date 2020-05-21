'use strict';

(function(){
    function init(){
        console.log('test')
        const router = new Router([
            new Route('home', 'home.html', true),
            new Route('about', 'about.html'),
        ])
    }
    init();
})();