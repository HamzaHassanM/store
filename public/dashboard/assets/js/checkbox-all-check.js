$("#checkall").change(function () {
    var checked = $(this).is(":checked");
    if (checked) {
        $(".check-it").each(function () {
            $(this).prop("checked", true);
        });

    } else {
        $(".check-it").each(function () {
            $(this).prop("checked", false);
        });
    }
});