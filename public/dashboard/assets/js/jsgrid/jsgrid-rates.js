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
            { name: "Currency Title", type: "text", width: 100},
            { name: "USD", type: "text", width: 100},
            { name: "Code", type: "text", width: 100},
            { name: "Exchange Rate", type: "text", width: 100},
        { type: "control" }
        ]
    });
})(jQuery);
