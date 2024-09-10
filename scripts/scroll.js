window.onscroll = function () {
    var winHeight = window.innerHeight + 5;
    var body = document.body;
    var html = document.documentElement;
    var scrollHeight = Math.max(body.scrollHeight,
        body.offsetHeight, html.clientHeight,
        html.scrollHeight, html.offsetHeight);

    var scrollTop = body.scrollTop || html.scrollTop;

    if (scrollHeight - scrollTop <= winHeight) {
        window.parent.postMessage('scrolledToBottom', '*');
    }
};