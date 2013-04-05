$("#dokument").ready(function () {
    $("#appear_box").show("slide", {}, 1000, function () {
        $('#show_box').show();
        $('#show_box').animate({opacity:1}, 2000);
    });

    $(".close").click(function () {
        $("#appear_box").hide("slow");
    });
})

