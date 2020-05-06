$(document).ready(function() { $("select").formSelect() });

function group1() {
    var a = $("input[name=group1]:checked"),
        b = $(a).data("name");
    return console.log("g1", a), console.log("g1DataName", b), b
}

function group2() {
    var a = $("input[name=group2]:checked"),
        b = $(a).data("name");
    return console.log("g2", a), console.log("g2DataName", b), b
}

function group3() {
    var a = $("input[name=group3]:checked"),
        b = $(a).data("name");
    return console.log("g3", a), console.log("g3DataName", b), b
}

function fandoms() { var a = $("#fandom").val(); return console.log("fandom", a), JSON.stringify(a) }
$("#signUp").on("click", function(a) {
    a.preventDefault(), console.log("6");
    var b = group1(),
        c = group2(),
        d = group3(),
        e = fandoms(),
        f = { firstName: $("#first_name").val().trim(), lastName: $("#last_name").val().trim(), email: $("#email").val().trim(), password: $("#password").val().trim(), fandoms: e, relationship: b, dadJoke: c, cosplay: $("#cosplay").val().trim(), gif: d };
    $.post("/api/signup", f).then(function(a) { console.log(a, "2"), console.log(`bout to redirect to /profile/${a.id}`), window.location.assign(`/profile/${a.id}`) }), $("#first_name").val(""), $("#last_name").val(""), $("#email").val(""), $("#password").val(""), $("#fandoms").val(""), $("#cosplay").val(""), $("#homebutton").on("click", function(a) { a.preventDefault(), window.location.replace("/") })
});