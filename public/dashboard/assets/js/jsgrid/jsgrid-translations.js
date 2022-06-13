(function($) {
    "use strict";
    $("#basicScenario").jsGrid({
        width: "100%",
        filtering: true,
        editing: true,
        inserting: true,
        sorting: true,
        paging: true,
        autoload: true,
        pActionSize: 15,
        pActionButtonCount: 5,
        deleteConfirm: "Do you really want to delete the client?",
        controller: db,
        fields: [
            { name: "User Key", type: "text", width: 100},
            { name: "Russian", type: "text", width: 100},
            { name: "Arabic", type: "text", width: 100},
            { name: "English", type: "text", width: 100},
        { type: "control" }
        ]
    });
})(jQuery);
