$(document).ready(function () {
    $(".sidebar .has-children").click(function () {
        $(this).parent().find('ul').toggle(150);
    });

    let hash = window.location.hash;

    if (hash) {
        $(hash).parent().find('ul').css("display", "block");
    }
});
