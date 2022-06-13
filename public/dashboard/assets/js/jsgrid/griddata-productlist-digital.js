'use strict';
(function () {
    var db = {
        loadData: function (filter) {
            return $.grep(this.clients, function (client) {
                return (!filter.Name || client.Name.indexOf(filter.Name) > -1) &&
                    (!filter.Action || client.Action === filter.Action) &&
                    (!filter.ProductCategory || client.ProductCategory.indexOf(filter.ProductCategory) > -1) &&
                    (!filter.ProductsubCategory || client.ProductsubCategory === filter.ProductsubCategory) &&
                    (filter.Married === undefined || client.Married === filter.Married);
            });
        },
        insertItem: function (insertingClient) {
            this.clients.push(insertingClient);
        },
        updateItem: function (updatingClient) {},

        deleteItem: function (deletingClient) {
            var clientIndex = $.inArray(deletingClient, this.clients);
            this.clients.splice(clientIndex, 1);
        }
    };
    window.db = db;
    db.countries = [{
            Name: "India",
            Id: 0
        },
        {
            Name: "United States",
            Id: 1
        },
        {
            Name: "Canada",
            Id: 2
        },
        {
            Name: "United Kingdom",
            Id: 3
        },
        {
            Name: "France",
            Id: 4
        },
        {
            Name: "Brazil",
            Id: 5
        },
        {
            Name: "China",
            Id: 6
        },
        {
            Name: "Russia",
            Id: 7
        }
    ];
    db.clients = [{
            "Id": "21",
            "Product": "../assets/images/dashboard/product/1.jpg",
            "Product Title": "Websites",
            "Entry Type": "Add",
            "Quantity": "5",
        },
        {
            "Id": "172",
            "Product": "../assets/images/dashboard/product/2.jpg",
            "Product Title": "3D Impact",
            "Entry Type": "Destroy",
            "Quantity": "11",
        },
        {
            "Id": "124",
            "Product": "../assets/images/dashboard/product/3.jpg",
            "Product Title": "Graphic Design",
            "Entry Type": "Destroy",
            "Quantity": "154",
        },
        {
            "Id": "37",
            "Product": "../assets/images/dashboard/product/4.jpg",
            "Product Title": "Company Logo",
            "Entry Type": "Destroy",
            "Quantity": "1",
        },
        {
            "Id": "67",
            "Product": "../assets/images/dashboard/product/5.jpg",
            "Product Title": "Application",
            "Entry Type": "Add",
            "Quantity": "24",
        },
        {
            "Id": "74",
            "Product": "../assets/images/dashboard/product/6.jpg",
            "Product Title": "Php",
            "Entry Type": "Destroy",
            "Quantity": "1",
        },
        {
            "Id": "427",
            "Product": "../assets/images/dashboard/product/7.jpg",
            "Product Title": "Html",
            "Entry Type": "Destroy",
            "Quantity": "27",
        },
        {
            "Id": "142",
            "Product": "../assets/images/dashboard/product/8.jpg",
            "Product Title": "Css",
            "Entry Type": "Add",
            "Quantity": "2",
        },
        {
            "Id": "58",
            "Product": "../assets/images/dashboard/product/9.jpg",
            "Product Title": "Ebooks",
            "Entry Type": "Add",
            "Quantity": "4",
        }
    ];
    db.users = [{
            "ID": "x",
            "Account": "A758A693-0302-03D1-AE53-EEFE22855556",
            "Product Title": "Carson Kelley",
            "RegisterDate": "2002-04-20T22:55:52-07:00"
        },
        {
            "Account": "D89FF524-1233-0CE7-C9E1-56EFF017A321",
            "Product Title": "Prescott Griffin",
            "RegisterDate": "2011-02-22T05:59:55-08:00"
        },
        {
            "Account": "06FAAD9A-5114-08F6-D60C-961B2528B4F0",
            "Product Title": "Amir Saunders",
            "RegisterDate": "2014-08-13T09:17:49-07:00"
        },
        {
            "Account": "EED7653D-7DD9-A722-64A8-36A55ECDBE77",
            "Product Title": "Derek Thornton",
            "RegisterDate": "2012-02-27T01:31:07-08:00"
        },
        {
            "Account": "2A2E6D40-FEBD-C643-A751-9AB4CAF1E2F6",
            "Product Title": "Fletcher Romero",
            "RegisterDate": "2010-06-25T15:49:54-07:00"
        },
        {
            "Account": "3978F8FA-DFF0-DA0E-0A5D-EB9D281A3286",
            "Product Title": "Thaddeus Stein",
            "RegisterDate": "2013-11-10T07:29:41-08:00"
        },
        {
            "Account": "658DBF5A-176E-569A-9273-74FB5F69FA42",
            "Product Title": "Nash Knapp",
            "RegisterDate": "2005-06-24T09:11:19-07:00"
        },
        {
            "Account": "76D2EE4B-7A73-1212-F6F2-957EF8C1F907",
            "Product Title": "Quamar Vega",
            "RegisterDate": "2011-04-13T20:06:29-07:00"
        },
        {
            "Account": "00E46809-A595-CE82-C5B4-D1CAEB7E3E58",
            "Product Title": "Philip Galloway",
            "RegisterDate": "2008-08-21T18:59:38-07:00"
        },
        {
            "Account": "C196781C-DDCC-AF83-DDC2-CA3E851A47A0",
            "Product Title": "Mason French",
            "RegisterDate": "2000-11-15T00:38:37-08:00"
        },
        {
            "Account": "5911F201-818A-B393-5888-13157CE0D63F",
            "Product Title": "Ross Cortez",
            "RegisterDate": "2010-05-27T17:35:32-07:00"
        },
        {
            "Account": "B8BB78F9-E1A1-A956-086F-E12B6FE168B6",
            "Product Title": "Logan King",
            "RegisterDate": "2003-07-08T16:58:06-07:00"
        },
        {
            "Account": "06F636C3-9599-1A2D-5FD5-86B24ADDE626",
            "Product Title": "Cedric Leblanc",
            "RegisterDate": "2011-06-30T14:30:10-07:00"
        },
        {
            "Account": "FE880CDD-F6E7-75CB-743C-64C6DE192412",
            "Product Title": "Simon Sullivan",
            "RegisterDate": "2013-06-11T16:35:07-07:00"
        },
        {
            "Account": "BBEDD673-E2C1-4872-A5D3-C4EBD4BE0A12",
            "Product Title": "Jamal West",
            "RegisterDate": "2001-03-16T20:18:29-08:00"
        },
        {
            "Account": "19BC22FA-C52E-0CC6-9552-10365C755FAC",
            "Product Title": "Hector Morales",
            "RegisterDate": "2012-11-01T01:56:34-07:00"
        },
        {
            "Account": "A8292214-2C13-5989-3419-6B83DD637D6C",
            "Product Title": "Herrod Hart",
            "RegisterDate": "2008-03-13T19:21:04-07:00"
        },
        {
            "Account": "0285564B-F447-0E7F-EAA1-7FB8F9C453C8",
            "Product Title": "Clark Maxwell",
            "RegisterDate": "2004-08-05T08:22:24-07:00"
        },
        {
            "Account": "EA78F076-4F6E-4228-268C-1F51272498AE",
            "Product Title": "Reuben Walter",
            "RegisterDate": "2011-01-23T01:55:59-08:00"
        },
        {
            "Account": "6A88C194-EA21-426F-4FE2-F2AE33F51793",
            "Product Title": "Ira Ingram",
            "RegisterDate": "2008-08-15T05:57:46-07:00"
        },
        {
            "Account": "4275E873-439C-AD26-56B3-8715E336508E",
            "Product Title": "Damian Morrow",
            "RegisterDate": "2015-09-13T01:50:55-07:00"
        },
        {
            "Account": "A0D733C4-9070-B8D6-4387-D44F0BA515BE",
            "Product Title": "Macon Farrell",
            "RegisterDate": "2011-03-14T05:41:40-07:00"
        },
        {
            "Account": "B3683DE8-C2FA-7CA0-A8A6-8FA7E954F90A",
            "Product Title": "Joel Galloway",
            "RegisterDate": "2003-02-03T04:19:01-08:00"
        },
        {
            "Account": "01D95A8E-91BC-2050-F5D0-4437AAFFD11F",
            "Product Title": "Rigel Horton",
            "RegisterDate": "2015-06-20T11:53:11-07:00"
        },
        {
            "Account": "F0D12CC0-31AC-A82E-FD73-EEEFDBD21A36",
            "Product Title": "Sylvester Gaines",
            "RegisterDate": "2004-03-12T09:57:13-08:00"
        },
        {
            "Account": "874FCC49-9A61-71BC-2F4E-2CE88348AD7B",
            "Product Title": "Abbot Mckay",
            "RegisterDate": "2008-12-26T20:42:57-08:00"
        },
        {
            "Account": "B8DA1912-20A0-FB6E-0031-5F88FD63EF90",
            "Product Title": "Solomon Green",
            "RegisterDate": "2013-09-04T01:44:47-07:00"
        }
    ];
}());