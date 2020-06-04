$("#next-1").on('click', e => {
    e.preventDefault();
});

$("#finish").on('click', e => {
    e.preventDefault();
});

$("#place").on('click', e => {
    e.preventDefault();
});


$('.cont-2').hide();
$('.card').hide();

$("#next-1").click(function () {
    $(".cont-2").show();
});

$("#finish").on('click', e => {
    $(".card").show();
});



function multiFunc() {
    "use strict";
    validate();
    toggleClick();
    myFunction();
}

const inputs = document.querySelectorAll('input');

const patterns = {
    telephone:/^\d{11}$/,
    userName:/^[a-z]{3,12}$/i,
    userLast:/^[a-z]{3,12}$/i,
    email:/^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})$/,
    zip:/^\d{5}$/,
    card:/^[a-z ]{5,20}$/i,
    cardNumber: /^(?:4[0-9]{12}(?:[0-9]{3})?|(?:5[1-5][0-9]{2}|222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}|3[47][0-9]{13})$/,
    cvv:/^\d{3}$/,
    state:/^([Aa][LKSZRAEPlkszraep]|[Cc][AOTaot]|[Dd][ECec]|[Ff][LMlm]|[Gg][AUau]|[Hh][Ii]|[Ii][ADLNadln]|[Kk][SYsy]|[Ll][Aa]|[Mm][ADEHINOPSTadehinopst]|[Nn][CDEHJMVYcdehjmvy]|[Oo][HKRhkr]|[Pp][ARWarw]|[Rr][Ii]|[Ss][CDcd]|[Tt][NXnx]|[Uu][Tt]|[Vv][AITait]|[Ww][AIVYaivy])$/,
    city: /^[a-zA-Z]+(?:[\s-][a-zA-Z]+)*$/ 
}

// Validation function
function validate(field,regex){
    if(regex.test(field.value)){
        field.className = 'valid';
    }else {
        field.className = 'invalid';
    }
}

inputs.forEach((input) => {
    input.addEventListener("keyup", (e) => {
        // console.log(e.target.attributes.name.value);

        validate(e.target, patterns[e.target.attributes.name.value]);
    });
});

// SAME ADDRESS INPUT FORM

function pullInfo(){
    if(document.getElementById("sameAddress").checked) {
        document.getElementById("firstName2").value = document.getElementById("firstName1").value;
        document.getElementById("lastName2").value = document.getElementById("lastName1").value;
        document.getElementById("addressType2").value = document.getElementById("addressType1").value;
        document.getElementById("street2").value = document.getElementById("street1").value;
        document.getElementById("apartment2").value = document.getElementById("apartment1").value;
        document.getElementById("city2").value = document.getElementById("city1").value;
        document.getElementById("state2").value = document.getElementById("state1").value;
        document.getElementById("zip2").value = document.getElementById("zip1").value;
    }
}

function showSite(){
    if(document.getElementById("next").clicked){
        document.getElementById("cont-2").style.visibility = "visible";
    }else {
        document.getElementById("cont-2").style.visibility = "hidden";
    }
}

// $('#cont-2').hide();
// $('#next').on('click', function() {
//     $('#cont-2').show();
// });


// function otherAddressShowHide() {
//     "use strict";
//     var addressType;
//     //GETTING ID OF OTHER IN ADDRESS TYPE 
//     addressType = $('deliveryAddressType');
//     if (addressType.value === "other") {
//         $('deliveryOtherAddress').style.display = "block";

//     } else {
//         $('deliveryOtherAddress').style.display = "none";
//     }

// }