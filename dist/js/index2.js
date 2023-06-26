const btn_about = document.getElementById('btn_about')
const btn_appearance = document.getElementById('btn_appearance')
const btn_relatives = document.getElementById('btn_relatives')
const btn_ability = document.getElementById('btn_ability')



const about = document.getElementById('about')
about.style.display = "none"

const ability = document.getElementById('ability')
ability.style.display = "none"

const appearance = document.getElementById('appearance')
appearance.style.display = "none"

const relatives = document.getElementById('relatives')
relatives.style.display = "none"



btn_about.addEventListener ('click', function (){
    if (about.style.display === "none") {
        about.style.display = "block";
        appearance.style.display = "none";
        ability.style.display = "none";
        relatives.style.display = "none";
    } else {
        about.style.display = "none";
    }
})

btn_appearance.addEventListener ('click', function (){
    if (appearance.style.display === "none") {
        appearance.style.display = "block";
        about.style.display = "none";
        relatives.style.display = "none";
        ability.style.display = "none";
    } else {
        appearance.style.display = "none";
    }
})

btn_relatives.addEventListener ('click', function (){
    if (relatives.style.display === "none") {
        relatives.style.display = "block";
        about.style.display = "none";
        appearance.style.display = "none";
        ability.style.display = "none";
    } else {
        relatives.style.display = "none";
    }
})

btn_ability.addEventListener ('click', function () {
    if ( ability.style.display === "none") {
        ability.style.display = "block";
        about.style.display = "none";
        appearance.style.display = "none";
        relatives.style.display = "none";
    } else {
        ability.style.display = "none";
    }
})


