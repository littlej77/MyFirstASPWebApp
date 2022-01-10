$("#buttonsend").click(function () {
    calc =( ($("#asgn").val() * .55) + ($("#group").val() * .05) +
        ($("#quiz").val() * .1) + ($("#exam").val() * .2) +
        ($("#intex").val() * .1)).toFixed(2)

    if (calc >= 94) {
        lettergrade = "A"
    }
    else if (calc < 94 && calc >= 90) {
        lettergrade="A-"
    }
    else if (calc < 90 && calc >= 87) {
        lettergrade = "B+"
    }
    else if (calc < 87 && calc >= 84) {
        lettergrade = "B"
    }
    else if (calc < 84 && calc >= 80) {
        lettergrade = "B-"
    }
    else if (calc < 80 && calc >= 77) {
        lettergrade = "C+"
    }
    else if (calc < 77 && calc >= 74) {
        lettergrade = "C"
    }
    else if (calc < 74 && calc >= 70) {
        lettergrade = "C-"
    }
    else if (calc < 70 && calc >= 67) {
        lettergrade = "D+"
    }
    else if (calc < 67 && calc >= 64) {
        lettergrade = "D"
    }
    else if (calc < 64 && calc >= 60) {
        lettergrade = "D-"
    }
    else
        lettergrade= "FAIL"

    alert(calc + "%" + " Letter Grade: "+ lettergrade)
})

    //(($("#asgn").val() * .55) + ($("#group").val() * .05) +
    //    ($("#quiz").val() * .1) + ($("#exam").val() * .2) +
    //    ($("#intex").val() * .1)) + "%").toFixed(2);