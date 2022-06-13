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
            { name: "Tax Detail", type: "text"},
            { name: "Tax Schedule", type: "text"},
            { name: "Tax Rate", type: "text"},
            { name: "Total Tax Amount", type: "number"},
        { type: "control" }
        ]
    });
})(jQuery);
