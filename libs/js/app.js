console.log("hello");



$(function () {
    $.ajax({
        url: 'ajax/experience.json',
        method: 'GET'
    }).done(function (data) {
        $("#experience").append("<ul id=\'xp\'></ul>");
        for (let i = 0; i <= data.length - 1; i++) {
            $("#xp").append("<li> <p class=\"text-center display-5\">" + data[i].societe + " " + data[i].duree + "</p>" + "<p class=\"text-center display-5\">" + data[i].lieu + "</p>" +
                "<p class=\"text-center\">" + data[i].detail + "</li>");

        }
    });


    $.ajax({
        url: 'ajax/diplome.json',
        method: 'GET'
    }).done(function (data) {
        for (let i = 0; i <= data.length - 1; i++) {
            let list = "<div><p class=\"text-center display-5\">" + data[i].intitule + " </p><p class=\"text-center display-5\">" + data[i].organisme + "</p><p class=\"text-center display-5\">" + data[i].lieu + "</p><p class=\"text-center display-5\">" + data[i].date + "</p><ul>";
            for (let y = 0; y <= data[i].detail.length - 1; y++) {
                list += "<li class=\"text-center\">" + data[i].detail[y] + "</li>"
            }
            ;
            list += "</ul></div>";
            $("#diplomes").append(list);


        }
    });
    $.ajax({
        url: 'ajax/mesInfos.json',
        method: 'get'
    }).done(function (data) {
        $("#mesInfos").append("<ul id='infos'></ul>");
        for (let l = 0; l <= data.length - 1; l++) {
            $("#infos").append("<li>" + data[l].value + "</li>");


        }


    });
});