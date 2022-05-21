let inpSlider = document.getElementById("inpSlider");
let pValue = document.getElementById("pValue");
let ipTxtBetr = document.getElementById("ipTxtBetr");
let ipTxtPers = document.getElementById("ipTxtPers");
let ipBtn3 = document.getElementById("ipBtn3");
let ipBtn5 = document.getElementById("ipBtn5");
let ipBtn7 = document.getElementById("ipBtn7");
let pTrinkgeld = document.getElementById("pTrinkgeld");
let pGesamt = document.getElementById("pGesamt");
let pKpP = document.getElementById("pKpP");


function init(){
    pValue.innerHTML= inpSlider.value + " %";
}

function updateSlider(clicked_id) {
    if (clicked_id !== "inpSlider") {
        let btn = document.getElementById(clicked_id).value.substring(0,1);
        inpSlider.value = btn;
        pValue.innerHTML= btn + " %";
    } else
        pValue.innerHTML= inpSlider.value + " %";
    updateTG();
}

function updateTG(){

    let betrag = ipTxtBetr.value;
    let AnzPers = ipTxtPers.value;
    let prozent = inpSlider.value;
    if (betrag && AnzPers) {
        let trinkgeld = prozent/100*betrag;
        let res = trinkgeld.toFixed(2);
        console.log(trinkgeld);

    }
}

function onlyNumberKey(evt) {
    // Only ASCII character in that range allowed
    let ASCIICode = (evt.which) ? evt.which : evt.keyCode
    if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57))
        return false;
    return true;
}