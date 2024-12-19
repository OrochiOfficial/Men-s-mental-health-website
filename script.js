// Pierwsza metoda - rozwijane menu

function burger() {
    var burgerVar = document.getElementById("btns");
    if (burgerVar.style.display === "block") {
        burgerVar.style.display = "none";
    } else {
        burgerVar.style.display = "block";
    }
  }

// Druga metoda - pobieranie danych z input[type=radio] i kalkulacja wyniku lokalnie

  var valQ1 = 0;
  var valQ2 = 0;
  var valQ3 = 0;
  var valQ4 = 0;
  var valQ5 = 0;

  var calcWynik = 0;
  var maxPkt = 15;
  var wynikProc = 0;

function clacRaw(){
    calcWynik = valQ1 + valQ2 + valQ3 + valQ4 + valQ5;
    console.log("Obecna wartość zmiennej : " + calcWynik);
    wynikProc = ((calcWynik / maxPkt) * 100);
    procent = Math.round(wynikProc);
    resultCALC.innerText = "Twój obecny wynink: " + ((calcWynik / maxPkt) * 100);
}

function calcWynikQ1(optionValue) {
    valQ1 = optionValue; 
    clacRaw();
}
function calcWynikQ2(optionValue) {
    valQ2 = optionValue;
    clacRaw();
}
function calcWynikQ3(optionValue) {
    valQ3 = optionValue;
    clacRaw();
}
function calcWynikQ4(optionValue) {
    valQ4 = optionValue;
    clacRaw();
}
function calcWynikQ5(optionValue) {
    valQ5 = optionValue;
    clacRaw();
}



// Trzecia metoda - odczytywanie input text (początek do raportu / profilu pacjenta) , oraz Pobranie tych danych do pliku

var wynikX;

function textWynik() {
    let textQ1 = document.getElementById("txt1");
    let odpQ1 = textQ1.value;
    let textQ2 = document.getElementById("txt2");
    let odpQ2 = textQ2.value;
    let textQ3 = document.getElementById("txt3");
    let odpQ3 = textQ3.value;
    let textQ4 = document.getElementById("txt4");
    let odpQ4 = textQ4.value;
    let textQ5 = document.getElementById("txt5");
    let odpQ5 = textQ5.value;
    
    var wynikX = "Odpowiedź na pierwsze pytanie: " + odpQ1 + ". Odpowiedź na drugie pytanie:  " + odpQ2 + ". Odpowiedź na trzecie pytanie:  " + odpQ3 + ". Odpowiedź na czwarte pytanie:  " + odpQ4 + ". Odpowiedź na piąte pytanie:  " + odpQ5;
    resultTXT.innerText = wynikX;
    }

function writeData(){
    const content = document.getElementById('resultTXT').innerText;
            const blob = new Blob([content], { type: 'text/plain' });
            if (!content) {
                alert('Wprwadź dane poprawnie');
                return;
            }
            const link = document.createElement('a');
            link.href = window.URL.createObjectURL(blob);
            link.download = 'output.txt';
            link.click();
}

// Czwarta metoda - ukazywanie przekalkulowanego wyniku na innej podstronie

function przekierujIPokazWartosc() {
    localStorage.setItem('wartoscX', procent);
    window.location.href = 'wynik.html';
}
  
document.addEventListener("DOMContentLoaded", function() {
    var storedValue = localStorage.getItem('wartoscX');
    if (storedValue !== null) {
        document.getElementById('wartoscX').innerText = storedValue + ' %';
    }
});

// Metoda trzecia i czwarta połączone celem jednoczesnego wywołania

function pokazDane(){
    writeData();
    przekierujIPokazWartosc();
}

// Piąta metoda - logowanie

var objPeople = [
    {mail: "TechnoWiz@email.com",       password: "TechnoWiz"},
    {mail: "EkspertOdMarzen@email.com", password: "EkspertOdMarzen"},
    {mail: "QuantumMind@email.com",     password: "newtonsLaw"},
    {mail: "SzybkiZysk@email.com",      password: "DawajBitCoin"},
    {mail: "PrawoDzungli@email.com",    password: "Miejska_jungla_pies_zawija_kumpla"},
    {mail: "YaoiYume@email.com",        password: "LubieYaoi"},
    {mail: "DragonBallDream@email.com", password: "SmoczeKule123"},
    {mail: "RamenWojownik@email.com",   password: "nOOdlesy"},
    {mail: "NyanNyan@email.com",        password: "nyaaaMiau"},
    {mail: "HarunoSakura@email.com",    password: "SasukeKun"},
    {mail: "UchihaSasuke@email.com",    password: "SakuraIsTrash"},
]

function getInfo(){
    var mail = document.getElementById("email").value;
    var password = document.getElementById("haslo").value;

    for(var i = 0; i < objPeople.length; i++){
        if(mail == objPeople[i].mail
            && password == objPeople[i].password){
                alert("Logowanie pomyślne");
                console.log(mail + "jest zalogowany!");
                return;
            }                    
    }
    document.getElementById('error').innerText = "Błędne dane logowania";
    console.log("Błędne dane");

}