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
