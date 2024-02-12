function oppdaterBillett(){
    const billettHolder = document.getElementById('alleBilletter');
    //ta bort innhold for å unngå problemer med eksisterende innhold
    billettHolder.innerHTML='';

    //Lager en utskriftstruktur til billet-listen
    billettSamling.forEach((billett,index) => {
        const billettInfo = document.createElement('div');
        billettInfo.innerHTML = `
            <p><strong>Billett nummer ${index + 1}</strong></p>
            <p>Film: ${billett.film}</p>
            <p>Antall: ${billett.antall}</p>
            <p>Fornavn: ${billett.fornavn}</p>
            <p>Etternavn: ${billett.etternavn}</p>
            <p>Telefonnr: ${billett.telefonnr}</p>
            <p>Epost: ${billett.epost}</p>
            <hr>  
        `; //https://www.w3schools.com/tags/tag_hr.asp hentet(09.02.24)
        billettHolder.appendChild(billettInfo);
        });
    }
let billettSamling = [];
function lagreBillett(){
    const valgtFilm = document.getElementById("filmer").value;
    const valgtAntall = document.getElementById("antallBilletter").value;
    const valgtFornavn = document.getElementById("fornavn").value;
    const valgtEtternavn = document.getElementById("etternavn").value;
    const valgtTelefonnr = document.getElementById("telefonnr").value;
    const valgtEpost = document.getElementById("epost").value;

    //input validering
    if(valgtFilm.trim() === ''){
        alert('Vennligst velg en film.');
        return;
    }
    if(isNaN(valgtAntall) || valgtAntall <=0){
        alert("Vennligst skriv inn gyldig antall billetter");
        return;
    }
    if(valgtFornavn.trim()===''){
        alert('Vennligst skriv inn fornavn');
        return;
    }
    if(valgtEtternavn.trim()===''){
        alert('Vennligst skriv inn etternavn');
        return;
    }
    //https://www.scaler.com/topics/javascript-validate-mobile-number/ hentet(09.02.22)
    if(!(/^\d{8}$/.test(valgtTelefonnr))){
        alert("Vennligst skriv inn et gyldig telefonnr (8 siffer)")
        return;
    }
    //https://emaillistvalidation.com/blog/email-validation-in-javascript-using-regular-expressions-the-ultimate-guide/ hentet(09.02.24)
    if (!(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(valgtEpost))){
        alert("Vennligst skriv inn en gyldig epost")
        return;
    }

    const nyBillett= {
        film: valgtFilm,
        antall: valgtAntall,
        fornavn: valgtFornavn,
        etternavn: valgtEtternavn,
        telefonnr: valgtTelefonnr,
        epost: valgtEpost
    }
    billettSamling.push(nyBillett)

    document.getElementById("filmer").value="";
    document.getElementById("antallBilletter").value="";
    document.getElementById("fornavn").value="";
    document.getElementById("etternavn").value="";
    document.getElementById("telefonnr").value="";
    document.getElementById("epost").value="";

    oppdaterBillett();
}
function slettBilletter(){
    billettSamling=[];
    oppdaterBillett();
}
const kjopKnapp = document.getElementById("kjopBillett");
kjopKnapp.addEventListener('click',lagreBillett);
const slettKnapp = document.getElementById("slettBilletter");
slettKnapp.addEventListener("click",slettBilletter);
