(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function(){

    var last, last_li;

    init();

    $(".js-tab").click(function(event) {
        var id = $(this).attr("href");
        // prevent anchor move and keep anchor link
        event.preventDefault();
        window.location = id;
        // show proper content
        last.hide();
        $(id).show();
        last = $(id);
        // remove tag active
        last_li.removeClass('active');
        last_li = $("a[href="+id+"]").parent('li');
        last_li.addClass('active');
    });

    function init() {
        var hash = window.location.hash;
        var tag = "#home";
        if (hash.length > 0) {
            tag = hash;
            $(hash).show();
            last = $(hash);
        } else {
            $("#home").show();
            last = $("#home");
        }
        // find the tab with same id
        last_li = $("a[href="+tag+"]").parent('li');
        last_li.addClass('active');
    }
})();

},{}]},{},[1]);
