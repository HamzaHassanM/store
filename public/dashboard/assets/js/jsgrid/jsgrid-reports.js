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
            { name: "Name", type: "text"},
            { name: "Transfer Id", type: "number"},
            { name: "Date", type: "text"},
            { name: "Total", type: "text"},
        { type: "control" }
        ]
    });
})(jQuery);
