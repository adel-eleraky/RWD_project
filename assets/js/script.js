$("input[id=name]").on("input", function () {
    if ($(this).val().length < 3) {
        $(this).addClass("is-invalid")
        $(this).next().addClass("d-block").text("يجب ان يكون الاسم اكثر من 3 حروف")
    } else {
        $(this).removeClass("is-invalid")
        $(this).next().removeClass("d-block")
    }
})

$("input[id=email]").on("input", function () {
    if (! $(this).val().match(/^[a-zA-Z0-9._]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
        $(this).addClass("is-invalid")
        $(this).next().addClass("d-block").text("يجب ان يكون البريد الالكتروني صحيح")
    } else {
        $(this).removeClass("is-invalid")
        $(this).next().removeClass("d-block")
    }
})

$("input[id=phone]").on("input", function () {
    if (! $(this).val().match(/^(010|011|012|015)[0-9]{8}$/)) {
        $(this).addClass("is-invalid")
        $(this).next().addClass("d-block").text(" يجب ان يكون رقم الهاتف صحيح")
    } else {
        $(this).removeClass("is-invalid")
        $(this).next().removeClass("d-block")
    }
})

$("textarea[id=message]").on("input", function () {
    if ($(this).val().length < 6) {
        $(this).addClass("is-invalid")
        $(this).next().addClass("d-block").text("يجب ان يكون الرسالة اكثر من 6 حروف")
    } else {
        $(this).removeClass("is-invalid")
        $(this).next().removeClass("d-block")
    }
})

