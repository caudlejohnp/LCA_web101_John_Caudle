$(function () {

    let $list = $("ul");
    let $newItemForm = $("#newItemForm");

    $newItemForm.on("submit", function (e) {
        e.preventDefault();
        let text = $('input#itemfield[type="text"]').val();
        $list.append(`<li>${text}</li>`);
        $('input[type = "text"]').val("");
    });

    $list.on("click", "li", function () {
        let $this = $(this);
        $this.remove();
    });

});
!function (d, s, id) { var js, fjs = d.getElementsByTagName(s)[0]; if (!d.getElementById(id)) { js = d.createElement(s); js.id = id; js.src = 'https://weatherwidget.io/js/widget.min.js'; fjs.parentNode.insertBefore(js, fjs); } }(document, 'script', 'weatherwidget-io-js');
