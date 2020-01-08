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
    $.ajax({
        url: 'ajax/atouts.json',
        method: 'GET'
    }).done(function (data) {
        $("#atouts").append("<ul id='listAtouts'></ul>");
        for (let p = 0; p <= data.length - 1; p++) {
            $("#listAtouts").append("<li>" + data[p].value + "</li>");
        }
    });
    $.ajax({
        url: 'ajax/loisirs.json',
        method: 'GET'
    }).done(function (data) {
        $(".loisirs").append("<ul id='listLoisirs'></ul>");
        for (let z = 0; z <= data.length - 1; z++) {
            $("#listLoisirs").append("<li>" + data[z].value + "</li>");
        }
    });
    $.ajax({
        url: 'ajax/languages.json',
        method: 'GET'
    }).done(function (data) {
        $("#languages").append("<ul id='listLanguages'></ul>");
        for (let z = 0; z <= data.length - 1; z++) {
            $("#listLanguages").append("<li>" + data[z].value + "</li>");
        }
    });
    $.ajax({
        url: 'ajax/frameworks.json',
        method: 'GET'
    }).done(function (data) {
        $("#frameworks").append("<ul id='listFrameworks'></ul>");
        for (let z = 0; z <= data.length - 1; z++) {
            $("#listFrameworks").append("<li>" + data[z].value + "</li>");
        }
    });
    $.ajax({
        url: 'ajax/outils.json',
        method: 'GET'
    }).done(function (data) {
        $("#outils").append("<ul id='listOutils'></ul>");
        for (let z = 0; z <= data.length - 1; z++) {
            $("#listOutils").append("<li>" + data[z].value + "</li>");
        }
    });
    $("#accordion").accordion({
        heightStyle: "content"
    });

    let contactLoaded = false;
    $.ajax({
        type: "POST",
        url: "ajax/contact.html"
    }).done(function (data) {
        $(window).on("scroll", function () {
            if (!contactLoaded){
                if ($(window).scrollTop() == $(document).height() - $(window).height()) {
                    $('#contact').html(data);
                    contactLoaded = true
                    $.ajax({
                        url: 'ajax/options.json',
                        method: 'GET'
                    }).done(function (data) {

                        $("#selection").on("change", function () {
                            $("#selection2").html(" ");
                            for (let y = 0; y < data.length; y++) {
                                if ($("#selection").val() == data[y].id) {
                                    $("#selection2").append("<select id='listOptions'></select>");
                                    $.each(data[y].options, function (key, val) {
                                        $("#listOptions").append("<option value="+key+">" + val + "</option>");


                                    })
                                }
                            }


                        });


                    });

                }
            }


});

$('.toast').toast('show');


})
;});

