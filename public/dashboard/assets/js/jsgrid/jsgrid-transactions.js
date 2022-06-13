(function($) {
    "use strict";
    $("#batchDelete").jsGrid({
        width: "100%",
        autoload: true,
        confirmDeleting: false,
        paging: true,
        controller: {
            loadData: function() {
                return db.clients;
            }
        },
        fields: [
            { name: "Order Id", type: "text", width: 50 },
            { name: "Transaction Id", type: "number", width: 100 },
            { name: "Date", type: "text", width: 100 },
            { name: "Payment Method", type: "text", width: 50 },
            { name: "Delivery Status", type: "text", width: 100 },
            { name: "Amount", type: "text", width: 100 }
        ]
    });
})(jQuery);
