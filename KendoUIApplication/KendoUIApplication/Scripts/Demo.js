/// <reference path="kendo/2014.1.318/jquery.min.js" />
/// <reference path="kendo/2014.1.318/kendo.web.min.js" />

$(document).ready((function () {

    var CountryList = [
        "America",
        "Australia",
        "China",
        "India",
        "Pakistan"
    ];

    $("#Country").kendoAutoComplete({
        dataSource: CountryList,
        filter: "startswith",
        placeholder: "Select Country",
        seperator: ","

    });

}));