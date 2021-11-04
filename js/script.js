const test=document.querySelector('.questionnaire');
const answers=document.querySelector(".questions__answers");
const question=document.querySelector(".questions__question");
const previousBtn=document.querySelector('.buttons__btns1');
const nextBtn=document.querySelector('.buttons__btns2');
const infoPage=document.getElementById('shown');
const testPage= document.getElementById('hidden');
const testStart=document.getElementById('btnquiz');
const Tab=["","Pensez-vous avoir eu de la fièvre ces dernièrs jours (frissons, sueurs) ?", "Si oui : quelle est votre température ?", "Avez-vous une toux ou une augmentation de votre toux habituelle ces derniers jours ?", "Avez-vous des douleurs musculaires ou des courbatures inhabituelles ces derniers jours ?", "Avez-vous un mal de gorge apparu ces derniers jours ?", "Avez-vous de la diarrhée ces dernières 24 heures (au moins 3 selles molles) ?", "Avez-vous une fatigue inhabituelle ces derniers jours ?", "Avez-vous des difficultés importantes pour vous alimenter ou boire depuis plus de 24h ?", "Avez-vous vu apparaître une gêne respiratoire ou une augmentation de votre gêne respiratoire habituelle ?", "Comment vous sentez-vous ?", "Avez-vous d’autre symptôme ?", "Quel est votre âge ?", "Quel est votre poids ? Quelle est votre taille ?", "Avez-vous de l’hypertension artérielle ? Ou avez-vous une maladie cardiaque ou vasculaire ? Ou prenez vous un traitement à visée cardiologique ?", "Êtes-vous diabétique ?", "Avez-vous ou avez-vous eu un cancer ?", "Avez-vous une maladie respiratoire ? Ou êtes-vous suivi par un pneumologue ?", "Avez-vous une insuffisance rénale chronique dialysée ?", "Avez-vous une maladie chronique du foie ?", "Êtes-vous enceinte ?", "Avez-vous une maladie connue pour diminuer vos défenses immunitaires ?", "Prenez-vous un traitement immunosuppresseur ? C’est un traitement qui diminue vos défenses contre les infections. Voici quelques exemples : corticoïdes, méthotrexate, ciclosporine, tacrolimus, azathioprine, cyclophosphamide (liste non exhaustive)."];


window.addEventListener("DOMContentLoaded", ()=>{
infoPage.style.display='block';
testPage.style.display='none';

testStart.addEventListener('click', ()=>{
        
        infoPage.style.display = 'none';
        testPage.style.display = 'block';
        
    })
    
})

    

let i=1;
nextBtn.addEventListener("click", function(){
    i++;
    if(i>Tab.length-1)
    {
        i=Tab.length-1;
    }
    if(i!=1 &&i!=2 && i!=10 && i!=11 && i!=12 && i!=13 && i!=14 && i!=20 && i!=21 && i!=22)
    {
        answers.innerHTML=`
        <div class="questions__answer">
                    <input type="radio" class="questions__butn" value="answers" checked>
                    <label for="button"> Oui</label>
                </div>
                <div class="questions__answer">
                    <input type="radio" class="questions__butn" value="answers">
                    <label for="button"> Non</label>
                </div>
        `;
    }
    else if(i==1)
    {
        answers.innerHTML=`<div class="questions__answer">
        <input type="radio" class="questions__butn" value="answers" checked>
        <label for="button"> Oui</label>
    </div>
    <div class="questions__answer">
        <input type="radio" class="questions__butn" value="answers">
        <label for="button"> Non</label>
    </div>
    <div class="questions__answer">
        <input type="radio" class="questions__butn" value="answers">
        <label for="button"> Ne sait pas</label>
    </div>`;
    }
    else if(i==2)
    {
        answers.innerHTML= `<div class="questions__answer">
        <input type="radio" id="degree1" class="questions__butn">
        <label for="degree">35,5 - 37,7°C</label>
    </div>
    <div class="questions__answer">
        <input type="radio" id="degree2" class="questions__butn">
        <label for="degree">37,8 – 38,9°C = seuil retenu</label>
    </div>
    <div class="questionnaire__answer">
        <input type="radio" id="degree3" class="questions__butn" >
        <label for="degree">Non renseignée & OUI à question précédente</label>
    </div>
</div>`;
    }
    else if(i==10)
    {
        answers.innerHTML= `<div class="questions__answer">
        <input type="radio" id="bien" class="questions__butn" >
     <label for="bien">Bien</label>
    </div>
    <div class="questions__answer">
        <input type="radio" id="assez" class="questions__butn">
        <label for="assez">Assez bien</label>
    </div>
    <div class="questions__answer">
        <input type="radio" id="mal" class="questions__butn">
        <label for="mal">Mal</label>
    </div>
    <div class="questions__answer">
        <input type="radio" id="tresmal" class="questions__butn">
        <label for="tresmal">Très mal</label>
    </div>`;
    }
    else if(i==11)
    {
        answers.innerHTML=`<div class="questions__answer">
        <input type="text" id="answer"> </div>`;
    }
    else if(i==12)
    {
        answers.innerHTML=`<div class="questions__answer">
        <input type="radio" id="age1" class="questions__butn">
        <label for="seniors"> < 50 ans</label>
    </div>
    <div class="questions__answer">
        <input type="radio" id="age2" >
        <label for="adults"> 50-69 ans</label>
    </div>
    <div class="questions__answer">
        <input type="radio" id="age3" class="questions__butn">
        <label for="minors"> STOP si < 15 ans : Prenez contact avec votre médecin généraliste au moindre doute. Cette application n’est pour l’instant pas adaptée aux personnes de moins de 15 ans. En cas d’urgence, appeler le 15.</label>
    </div>`;
    }
    else if(i==13)
    {
        answers.innerHTML=`<div class="questions__answer">
        <input type="text" id="answer1">
        <input type="text" id="answer2"> </div>`;
    }
    else if (i==14)
    {
        answers.innerHTML=`<div class="questions__answer">
        <input type="radio" class="questions__butn" value="answers" checked>
        <label for="button"> Oui</label>
    </div>
    <div class="questions__answer">
        <input type="radio" class="questions__butn" value="answers">
        <label for="button"> Non</label>
    </div>
    <div class="questions__answer">
        <input type="radio" class="questions__butn" value="answers">
        <label for="button"> Ne sait pas</label>
    </div>`;
    }
    else if(i==20)
    {
        answers.innerHTML=`<div class="questions__answer">
        <input type="radio" class="questions__butn" value="answers" checked>
        <label for="button"> Oui</label>
    </div>
    <div class="questions__answer">
        <input type="radio" class="questions__butn" value="answers">
        <label for="button"> Non</label>
    </div>
    <div class="questions__answer">
        <input type="radio" class="questions__butn" value="answers">
        <label for="button"> Non applicable</label>
    </div>`;
    }
    else if(i==21)
    {
        answers.innerHTML=`<div class="questions__answer">
        <input type="radio" class="questions__butn" value="answers" checked>
        <label for="button"> Oui</label>
    </div>
    <div class="questions__answer">
        <input type="radio" class="questions__butn" value="answers">
        <label for="button"> Non</label>
    </div>
    <div class="questions__answer">
        <input type="radio" class="questions__butn" value="answers">
        <label for="button"> Ne sait pas</label>
    </div>`
    }
    else if(i==22)
    {
        answers.innerHTML=`<div class="questions__answer">
        <input type="radio" class="questions__butn" value="answers" checked>
        <label for="button"> Oui</label>
    </div>
    <div class="questions__answer">
        <input type="radio" class="questions__butn" value="answers">
        <label for="button"> Non</label>
    </div>
    <div class="questions__answer">
        <input type="radio" class="questions__butn" value="answers">
        <label for="button"> Ne sait pas</label>
    </div>`
    }
    else if (i==0)
    {

    }

    answers.classList.add(`.questions__answers'${i}`);
    answers.classList.remove(`.questions__answers'${i-1}`);
    question.innerText=Tab[i];
    
})

previousBtn.addEventListener("click", function(){
    i--;
    if(i<1)
    {
        i=1;
    }
    if(i!=1 &&i!=2 && i!=10 && i!=11 && i!=12 && i!=13 && i!=14 && i!=20 && i!=21 && i!=22)
    {
        answers.innerHTML=`
        <div class="questions__answer">
                    <input type="radio" class="questions__butn" value="answers" checked>
                    <label for="button"> Oui</label>
                </div>
                <div class="questions__answer">
                    <input type="radio" class="questions__butn" value="answers">
                    <label for="button"> Non</label>
                </div>
        `;
    }
    else if(i==1)
    {
        answers.innerHTML=`<div class="questions__answer">
        <input type="radio" class="questions__butn" value="answers" checked>
        <label for="button"> Oui</label>
    </div>
    <div class="questions__answer">
        <input type="radio" class="questions__butn" value="answers">
        <label for="button"> Non</label>
    </div>
    <div class="questions__answer">
        <input type="radio" class="questions__butn" value="answers">
        <label for="button"> Ne sait pas</label>
    </div>`;
    }
    else if(i==2)
    {
        answers.innerHTML= `<div class="questions__answer">
        <input type="radio" id="degree1" class="questions__butn">
        <label for="degree">35,5 - 37,7°C</label>
    </div>
    <div class="questions__answer">
        <input type="radio" id="degree2" class="questions__butn">
        <label for="degree">37,8 – 38,9°C = seuil retenu</label>
    </div>
    <div class="questionnaire__answer">
        <input type="radio" id="degree3" class="questions__butn" >
        <label for="degree">Non renseignée & OUI à question précédente</label>
    </div>
</div>`;
    }
    else if(i==10)
    {
        answers.innerHTML= `<div class="questions__answer">
        <input type="radio" id="bien" class="questions__butn" >
     <label for="bien">Bien</label>
    </div>
    <div class="questions__answer">
        <input type="radio" id="assez" class="questions__butn">
        <label for="assez">Assez bien</label>
    </div>
    <div class="questions__answer">
        <input type="radio" id="mal" class="questions__butn">
        <label for="mal">Mal</label>
    </div>
    <div class="questions__answer">
        <input type="radio" id="tresmal" class="questions__butn">
        <label for="tresmal">Très mal</label>
    </div>`;
    }
    else if(i==11)
    {
        answers.innerHTML=`<div class="questions__answer">
        <input type="text" id="answer"> </div>`;
    }
    else if(i==12)
    {
        answers.innerHTML=`<div class="questions__answer">
        <input type="radio" id="age1" class="questions__butn">
        <label for="seniors"> < 50 ans</label>
    </div>
    <div class="questions__answer">
        <input type="radio" id="age2" >
        <label for="adults"> 50-69 ans</label>
    </div>
    <div class="questions__answer">
        <input type="radio" id="age3" class="questions__butn">
        <label for="minors"> STOP si < 15 ans : Prenez contact avec votre médecin généraliste au moindre doute. Cette application n’est pour l’instant pas adaptée aux personnes de moins de 15 ans. En cas d’urgence, appeler le 15.</label>
    </div>`;
    }
    else if(i==13)
    {
        answers.innerHTML=`<div class="questions__answer">
        <input type="text" id="answer1">
        <input type="text" id="answer2"> </div>`;
    }
    else if (i==14)
    {
        answers.innerHTML=`<div class="questions__answer">
        <input type="radio" class="questions__butn" value="answers" checked>
        <label for="button"> Oui</label>
    </div>
    <div class="questions__answer">
        <input type="radio" class="questions__butn" value="answers">
        <label for="button"> Non</label>
    </div>
    <div class="questions__answer">
        <input type="radio" class="questions__butn" value="answers">
        <label for="button"> Ne sait pas</label>
    </div>`;
    }
    else if(i==20)
    {
        answers.innerHTML=`<div class="questions__answer">
        <input type="radio" class="questions__butn" value="answers" checked>
        <label for="button"> Oui</label>
    </div>
    <div class="questions__answer">
        <input type="radio" class="questions__butn" value="answers">
        <label for="button"> Non</label>
    </div>
    <div class="questions__answer">
        <input type="radio" class="questions__butn" value="answers">
        <label for="button"> Non applicable</label>
    </div>`;
    }
    else if(i==21)
    {
        answers.innerHTML=`<div class="questions__answer">
        <input type="radio" class="questions__butn" value="answers" checked>
        <label for="button"> Oui</label>
    </div>
    <div class="questions__answer">
        <input type="radio" class="questions__butn" value="answers">
        <label for="button"> Non</label>
    </div>
    <div class="questions__answer">
        <input type="radio" class="questions__butn" value="answers">
        <label for="button"> Ne sait pas</label>
    </div>`
    }
    else if(i==22)
    {
        answers.innerHTML=`<div class="questions__answer">
        <input type="radio" class="questions__butn" value="answers" checked>
        <label for="button"> Oui</label>
    </div>
    <div class="questions__answer">
        <input type="radio" class="questions__butn" value="answers">
        <label for="button"> Non</label>
    </div>
    <div class="questions__answer">
        <input type="radio" class="questions__butn" value="answers">
        <label for="button"> Ne sait pas</label>
    </div>`
    }
    answers.classList.add(`.questions__answers'${i}`);
    answers.classList.remove(`.questions__answers'${i+1}`);
    question.innerText=Tab[i];
})



