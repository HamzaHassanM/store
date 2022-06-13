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
            { name: "No", type: "number", width: 50},
            { name: "Invoice", type: "number"},
            { name: "Date", type: "text"},
            { name: "Shipping", type: "number"},
            { name: "Amount", type: "number"},
            { name: "Tax", type: "number"},
            { name: "Total", type: "number"},
        { type: "control", width: 100 }
        ]
    });
})(jQuery);
