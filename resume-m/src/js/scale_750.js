(function(doc, win) {
    var docEl = doc.documentElement,
        isIOS = navigator.userAgent.match(/iphone|ipod|ipad/gi),
        dpr = isIOS ? Math.min(win.devicePixelRatio, 3) : 1,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';

    docEl.dataset.dpr = dpr;

    var recalc = function() {
        var width = docEl.clientWidth,
            fontSize = 0;

        console.log(width)
        if(width > 750){
            location.href = "//llpp8.cn/resume";
        }

        if (width / dpr > 750) {
            width = 750 * dpr;
        } 

        fontSize = 100 * (width / 750) >= 100 ? 100 : 100 * (width / 750);
        docEl.style.fontSize = fontSize + 'px';
    };
    recalc();
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
})(document, window);