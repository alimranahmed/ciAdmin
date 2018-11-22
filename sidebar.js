$( document ).ready(function() {
    $(".sidebar .has-children").click(function () {
        $(this).parent().find('ul').toggle();
    });
});
