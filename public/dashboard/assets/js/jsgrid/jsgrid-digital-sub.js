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
            {
                name: "Image",
                itemTemplate: function(val, item) {
                    return $("<img>").attr("src", val) .addClass("blur-up lazyloaded") .css({ height: 50, width: 50 }).on("click", function() {
                        $("#imagePreview").attr("src", item.Img);
                        $("#dialog").dialog("open");
                    });
                },
                insertTemplate: function() {
                    var insertControl = this.insertControl = $("<input>").prop("type", "file");
                    return insertControl;
                },
                insertValue: function() {
                    return this.insertControl[0].files[0];
                },
                align: "center",
                width: 50
            },
            { name: "Name", type: "text", width: 100},
            { name: "Price", type: "number", width: 50},
            { name: "Status", type: "text", width: 50},
            { name: "Sub Category", type: "text", width: 50},
            { type: "control" }
        ]
    });
})(jQuery);
