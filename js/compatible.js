(function(doc, win) {
    var ratio = window.devicePixelRatio || 1;
    var docEl = doc.documentElement;
    resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';
    recalc = function() {
        var clientWidth = docEl.clientWidth;
        if (!clientWidth) return;

        docEl.style.fontSize = 12 * (clientWidth / 375) + 'px';
        doc.body.addEventListener('touchstart', function() {});
    };

    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(window.document, window);
