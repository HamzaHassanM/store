(function ($, window, document, undefined) {
    var pluginName = "editable",
        defaults = {
            keyboard: true,
            dblclick: true,
            button: true,
            buttonSelector: ".edit",
            maintainWidth: true,
            dropdowns: {},
            edit: function () {},
            save: function () {},
            cancel: function () {}
        };

    function editable(element, options) {
        this.element = element;
        this.options = $.extend({}, defaults, options);

        this._defaults = defaults;
        this._name = pluginName;

        // this.init();
    }

    editable.prototype = {
        init: function () {
            this.editing = false;

            if (this.options.dblclick) {
                $(this.element)
                    .css('cursor', 'pointer')
                    .$('dblclick', this.toggle.$(this));
            }

            if (this.options.button) {
                $(this.options.buttonSelector, this.element)
                    .$('click', this.toggle.$(this));
            }
        },

        toggle: function (e) {
            e.preventDefault();

            this.editing = !this.editing;

            if (this.editing) {
                this.edit();
            } else {
                this.save();
            }
        },

        edit: function () {
            var instance = this,
                values = {};

            $('td[data-field]', this.element).each(function () {
                var input,
                    field = $(this).data('field'),
                    value = $(this).text(),
                    width = $(this).width();

                values[field] = value;

                $(this).empty();

                if (instance.options.maintainWidth) {
                    $(this).width(width);
                }

                if (field in instance.options.dropdowns) {
                    input = $('<select></select>');

                    for (var i = 0; i < instance.options.dropdowns[field].length; i++) {
                        $('<option></option>')
                            .text(instance.options.dropdowns[field][i])
                            .appendTo(input);
                    };

                    input.val(value)
                        .data('old-value', value)
                        .dblclick(instance._captureEvent);
                } else {
                    input = $('<input type="text" />')
                        .val(value)
                        .data('old-value', value)
                        .dblclick(instance._captureEvent);
                }

                input.appendTo(this);

                // if (instance.options.keyboard) {
                // input.keydown(instance._captureKey.bind(instance));
                // }
            });

            this.options.edit.bind(this.element)(values);
        },

        save: function () {
            var instance = this,
                values = {};

            $('td[data-field]', this.element).each(function () {
                var value = $(':input', this).val();

                values[$(this).data('field')] = value;

                $(this).empty()
                    .text(value);
            });

            // this.options.save.bind(this.element)(values);
        },

        cancel: function () {
            var instance = this,
                values = {};

            $('td[data-field]', this.element).each(function () {
                var value = $(':input', this).data('old-value');

                values[$(this).data('field')] = value;

                $(this).empty()
                    .text(value);
            });

            // this.options.cancel.bind(this.element)(values);
        },

        _captureEvent: function (e) {
            e.stopPropagation();
        },

        _captureKey: function (e) {
            if (e.which === 13) {
                this.editing = false;
                this.save();
            } else if (e.which === 27) {
                this.editing = false;
                this.cancel();
            }
        }
    };

    $.fn[pluginName] = function (options) {
        return this.each(function () {
            if (!$.data(this, "plugin_" + pluginName)) {
                $.data(this, "plugin_" + pluginName,
                    new editable(this, options));
            }
        });
    };

})(jQuery, window, document);

editTable();

//custome editable starts
function editTable() {

    $(function () {
        var pickers = {};

        $('table tr').editable({
            dropdowns: {
                sex: ['Male', 'Female']
            },
            edit: function (values) {
                $(".edit i", this)
                    .removeClass('far fa-edit')
                    .addClass('fa-save')
                    .attr('title', 'Save');

                // pickers[this] = new Pikaday({
                //     field: $("td[data-field=birthday] input", this)[0],
                //     format: 'MMM D, YYYY'
                // });
            },
            save: function (values) {
                $(".edit i", this)
                    .removeClass('fa-save')
                    .addClass('fa-edit')
                    .attr('title', 'Edit');

                if (this in pickers) {
                    pickers[this].destroy();
                    delete pickers[this];
                }
            },
            cancel: function (values) {
                $(".edit i", this)
                    .removeClass('fa-save')
                    .addClass('fa-edit')
                    .attr('title', 'delete');

                if (this in pickers) {
                    pickers[this].destroy();
                    delete pickers[this];
                }
            }
        });
    });
}

$(".add-row").click(function () {
    $()
    $("#editableTable").find("tbody tr:first").before("<tr><td><input type='file'></td></td><td data-field='image'></td><td data-field='name'></td><td data-field='name'></td><td data-field='name'></td><td><a class='button button-small edit' title='Edit'><i class='fa fa-edit'></i></a> <a class='button button-small' title='Delete'><i class='fa fa-trash-alt'></i></a></td></tr>");
    editTable();
    setTimeout(function () {
        $("#editableTable").find("tbody tr:first td:last a[title='Edit']").click();
    }, 200);

    setTimeout(function () {
        $("#editableTable").find("tbody tr:first td:first input[type='text']").focus();
    }, 300);

    $("#editableTable").find("a[title='Delete']").unbind('click').click(function (e) {
        $(this).closest("tr").remove();
    });
});

// function myFunction() {

// }

$("#editableTable").find("a[title='Delete']").click(function (e) {
    var x;
    if (confirm("Are you sure you want to delete entire row?") == true) {
        $(this).closest("tr").remove();
    } else {

    }
});


$(".fa-trash-alt").click(function () {
    $(this).parent().parent().parent().addClass("d-none");
    console.log("click")
});