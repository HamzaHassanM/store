$('.delete_all').on('click', function (e) {
    var allVals = [];
    $(".checkbox_animated:checked").each(function () {
        allVals.push($(this).attr('data-id'));
    });
    //alert(allVals.length); return false;  
    if (allVals.length <= 0) {
        alert("Please select row.");
    } else {
        //$("#loading").show(); 
        WRN_PROFILE_DELETE = "Are you sure you want to delete this row?";
        var check = confirm(WRN_PROFILE_DELETE);
        if (check == true) {
            $.each(allVals, function (index, value) {
                $('table tr').filter("[data-row-id='" + value + "']").remove();
            });
        }
    }
});

// $('.remove-row').on('click', function (e) {
//     WRN_PROFILE_DELETE = "Are you sure you want to delete this row?";
//     var check = confirm(WRN_PROFILE_DELETE);
//     if (check == true) {
//         $('table tr').filter("[data-row-id='" + $(this).attr('data-id') + "']").remove();
//     }
// });