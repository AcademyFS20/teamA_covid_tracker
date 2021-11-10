// // // const test=document.querySelector('.questionnaire');
// // // const answers=document.querySelector(".questions__answers");
// // // const question=document.querySelector(".questions__question");
// // // const previousBtn=document.querySelector('.buttons__btns1');
// // // const nextBtn=document.querySelector('.buttons__btns2');
// // // const infoPage=document.getElementById('shown');
// // // const testPage= document.getElementById('hidden');
// // // const testStart=document.getElementById('btnquiz');
// // // const textProgressQ=document.getElementById('questionquiz');
// // // const progressBarFiller=document.getElementById('fill');

// // // const questionList=["","Pensez-vous avoir eu de la fièvre ces dernièrs jours (frissons, sueurs) ?", "Si oui : quelle est votre température ?", "Avez-vous une toux ou une augmentation de votre toux habituelle ces derniers jours ?", "Avez-vous des douleurs musculaires ou des courbatures inhabituelles ces derniers jours ?", "Avez-vous un mal de gorge apparu ces derniers jours ?", "Avez-vous de la diarrhée ces dernières 24 heures (au moins 3 selles molles) ?", "Avez-vous une fatigue inhabituelle ces derniers jours ?", "Avez-vous des difficultés importantes pour vous alimenter ou boire depuis plus de 24h ?", "Avez-vous vu apparaître une gêne respiratoire ou une augmentation de votre gêne respiratoire habituelle ?", "Comment vous sentez-vous ?", "Avez-vous d’autre symptôme ?", "Quel est votre âge ?", "Quel est votre poids ? Quelle est votre taille ?", "Avez-vous de l’hypertension artérielle ? Ou avez-vous une maladie cardiaque ou vasculaire ? Ou prenez vous un traitement à visée cardiologique ?", "Êtes-vous diabétique ?", "Avez-vous ou avez-vous eu un cancer ?", "Avez-vous une maladie respiratoire ? Ou êtes-vous suivi par un pneumologue ?", "Avez-vous une insuffisance rénale chronique dialysée ?", "Avez-vous une maladie chronique du foie ?", "Êtes-vous enceinte ?", "Avez-vous une maladie connue pour diminuer vos défenses immunitaires ?", "Prenez-vous un traitement immunosuppresseur ? C’est un traitement qui diminue vos défenses contre les infections. Voici quelques exemples : corticoïdes, méthotrexate, ciclosporine, tacrolimus, azathioprine, cyclophosphamide (liste non exhaustive)."];



// // // window.addEventListener("DOMContentLoaded", ()=>{
// // // infoPage.style.display='block';
// // // testPage.style.display='none';


// // // //let i=0;
// // // //let maxQuestions=22;
// // // testStart.addEventListener('click', ()=>{
        
// // //         infoPage.style.display = 'none';
        
// // //         testPage.style.display = 'block';
        
        
// // //     })
    
// // //     //questionCounterText.innerText=i+"/"+maxQuestions;
    
// // // })











// // // //let questionCounter=0;
// // // let maxQuestions=22;
// // // let i=1;
// // // nextBtn.addEventListener("click", function(){
    
// // //     textProgressQ.innerText=`Question ${i}/${maxQuestions}`;
// // //     progressBarFiller.style.width= `${(i/maxQuestions)*100}%`;


// // //     i++;
    
// // //     if(i>questionList.length-1)
// // //     {
// // //         i=questionList.length-1;
// // //     }
// // //     if(i!=1 &&i!=2 && i!=10 && i!=11 && i!=12 && i!=13 && i!=14 && i!=20 && i!=21 && i!=22 && i!=23)
// // //     {
// // //         answers.innerHTML=`
// // //         <div class="questions__answer">
// // //                     <input type="radio" class="questions__butn" value="answers" name="btnanswer" checked>
// // //                     <label for="button"> Oui</label>
// // //                 </div>
// // //                 <div class="questions__answer">
// // //                     <input type="radio" class="questions__butn" value="answers" name="btnanswer">
// // //                     <label for="button"> Non</label>
// // //                 </div>
// // //         `;
// // //         nextBtn.innerText="Question suivante";
        
// // //     }
// // //     else if(i==1)
// // //     {
// // //         answers.innerHTML=`<div class="questions__answer">
// // //         <input type="radio" class="questions__butn" value="answers" name="btnanswer" checked>
// // //         <label for="button"> Oui</label>
// // //     </div>
// // //     <div class="questions__answer">
// // //         <input type="radio" class="questions__butn" value="answers" name="btnanswer">
// // //         <label for="button"> Non</label>
// // //     </div>
// // //     <div class="questions__answer">
// // //         <input type="radio" class="questions__butn" value="answers" name="btnanswer">
// // //         <label for="button"> Ne sait pas</label>
// // //     </div>`;
// // //     nextBtn.innerText="Question suivante";
// // //     }
// // //     else if(i==2)
// // //     {
// // //         answers.innerHTML= `<div class="questions__answer">
// // //         <input type="radio" id="degree1" class="questions__butn" name="btnanswer" checked>
// // //         <label for="degree">35,5 - 37,7°C</label>
// // //     </div>
// // //     <div class="questions__answer">
// // //         <input type="radio" id="degree2" class="questions__butn" name="btnanswer">
// // //         <label for="degree">37,8 – 38,9°C = seuil retenu</label>
// // //     </div>
// // //     <div class="questionnaire__answer">
// // //         <input type="radio" id="degree3" class="questions__butn" name="btnanswer">
// // //         <label for="degree">Non renseignée & OUI à question précédente</label>
// // //     </div>
// // // </div>`;
// // // nextBtn.innerText="Question suivante";
// // //     }
// // //     else if(i==10)
// // //     {
// // //         answers.innerHTML= `<div class="questions__answer">
// // //         <input type="radio" id="bien" class="questions__butn" name="btnanswer" checked >
// // //      <label for="bien">Bien</label>
// // //     </div>
// // //     <div class="questions__answer">
// // //         <input type="radio" id="assez" class="questions__butn" name="btnanswer">
// // //         <label for="assez">Assez bien</label>
// // //     </div>
// // //     <div class="questions__answer">
// // //         <input type="radio" id="mal" class="questions__butn" name="btnanswer">
// // //         <label for="mal">Mal</label>
// // //     </div>
// // //     <div class="questions__answer">
// // //         <input type="radio" id="tresmal" class="questions__butn" name="btnanswer">
// // //         <label for="tresmal">Très mal</label>
// // //     </div>`;
// // //     nextBtn.innerText="Question suivante";
// // //     }
// // //     else if(i==11)
// // //     {
// // //         answers.innerHTML=`<div class="questions__answer">
// // //         <input type="text" id="answer"> </div>`;
// // //         nextBtn.innerText="Question suivante";
// // //     }
// // //     else if(i==12)
// // //     {
// // //         answers.innerHTML=`<div class="questions__answer">
// // //         <input type="radio" id="age1" class="questions__butn" name="btnanswer" checked>
// // //         <label for="seniors"> < 50 ans</label>
// // //     </div>
// // //     <div class="questions__answer">
// // //         <input type="radio" id="age2" class="questions__butn" name="btnanswer">
// // //         <label for="adults"> 50-69 ans</label>
// // //     </div>
// // //     <div class="questions__answer">
// // //         <input type="radio" id="age3" class="questions__butn" name="btnanswer">
// // //         <label for="minors"> STOP si < 15 ans : Prenez contact avec votre médecin généraliste au moindre doute. Cette application n’est pour l’instant pas adaptée aux personnes de moins de 15 ans. En cas d’urgence, appeler le 15.</label>
// // //     </div>`;
// // //     nextBtn.innerText="Question suivante";
// // //     }
// // //     else if(i==13)
// // //     {
// // //         answers.innerHTML=`<div class="questions__answer">
// // //         <input type="text" id="answer1">
// // //         <input type="text" id="answer2"> </div>`;
// // //         nextBtn.innerText="Question suivante";
// // //     }
// // //     else if (i==14)
// // //     {
// // //         answers.innerHTML=`<div class="questions__answer">
// // //         <input type="radio" class="questions__butn" value="answers" name="btnanswer" checked>
// // //         <label for="button"> Oui</label>
// // //     </div>
// // //     <div class="questions__answer">
// // //         <input type="radio" class="questions__butn" value="answers" name="btnanswer">
// // //         <label for="button"> Non</label>
// // //     </div>
// // //     <div class="questions__answer">
// // //         <input type="radio" class="questions__butn" value="answers" name="btnanswer">
// // //         <label for="button"> Ne sait pas</label>
// // //     </div>`;
// // //     nextBtn.innerText="Question suivante";
// // //     }
// // //     else if(i==20)
// // //     {
// // //         answers.innerHTML=`<div class="questions__answer">
// // //         <input type="radio" class="questions__butn" value="answers" name="btnanswer" checked>
// // //         <label for="button"> Oui</label>
// // //     </div>
// // //     <div class="questions__answer">
// // //         <input type="radio" class="questions__butn" value="answers" name="btnanswer">
// // //         <label for="button"> Non</label>
// // //     </div>
// // //     <div class="questions__answer">
// // //         <input type="radio" class="questions__butn" value="answers" name="btnanswer">
// // //         <label for="button"> Non applicable</label>
// // //     </div>`;
// // //     nextBtn.innerText="Question suivante";
// // //     }
// // //     else if(i==21)
// // //     {
// // //         answers.innerHTML=`<div class="questions__answer">
// // //         <input type="radio" class="questions__butn" value="answers" name="btnanswer" checked>
// // //         <label for="button"> Oui</label>
// // //     </div>
// // //     <div class="questions__answer">
// // //         <input type="radio" class="questions__butn" value="answers" name="btnanswer">
// // //         <label for="button"> Non</label>
// // //     </div>
// // //     <div class="questions__answer">
// // //         <input type="radio" class="questions__butn" value="answers" name="btnanswer">
// // //         <label for="button"> Ne sait pas</label>
// // //     </div>`;
// // //     nextBtn.innerText="Question suivante";
// // //     }
// // //     else if(i==22)
// // //     {
// // //         answers.innerHTML=`<div class="questions__answer">
// // //         <input type="radio" class="questions__butn" value="answers" name="btnanswer" checked>
// // //         <label for="button"> Oui</label>
// // //     </div>
// // //     <div class="questions__answer">
// // //         <input type="radio" class="questions__butn" value="answers" name="btnanswer">
// // //         <label for="button"> Non</label>
// // //     </div>
// // //     <div class="questions__answer">
// // //         <input type="radio" class="questions__butn" value="answers" name="btnanswer">
// // //         <label for="button"> Ne sait pas</label>
// // //     </div>`,
    
// // //     nextBtn.innerText="Resultat";
// // //     nextBtn.value="submit";
  
// // //     nextBtn.addEventListener('click',() => {


        
// // //         const element = document.createElement('p');
// // //         element.innerHTML = 'RESULTAT du TEST';

// // //         testPage.appendChild(element);
// // //         previousBtn.style.display="none";
// // //         answers.style.display="none";
// // //         question.style.display="none";
// // //         nextBtn.style.display="none";
// // //      const questionProgress = document.getElementById("questionquiz");
        
// // //         questionProgress.style.display="none";

// // //     })

   
 
// // // }
    
// // //     else if (i==0)
// // //     {

// // //     }

// // //     answers.classList.add(`.questions__answers'${i}`);
// // //     answers.classList.remove(`.questions__answers'${i-1}`);
// // //     question.innerText=questionList[i];
// // //     const userInput = document.querySelectorAll('[type="radio"]:checked');
// // //     console.log(userInput);
// // //     const userInputValue = userInput.innerText
// // //     // console.log(userInputValue);
// // //     let stayAtHome = ["Oui","35,5 - 37,7°C","Non"];
// // //     userInput.forEach((element,index) => {
// // //            if(stayAtHome[index] === element.value)
// // //             {
              
// // //               console.log('yes');
// // //             }
// // //           })

// // // })

// // // previousBtn.addEventListener("click", function(){
// // //     i--;
// // //     textProgressQ.innerText=`Question ${i}/${maxQuestions}`;
// // //     progressBarFiller.style.width= `${(i/maxQuestions)*100}%`;


// // //     if(i<1)
// // //     {
// // //         i=1;
// // //     }
// // //     if(i!=1 &&i!=2 && i!=10 && i!=11 && i!=12 && i!=13 && i!=14 && i!=20 && i!=21 && i!=22)
// // //     {
// // //         answers.innerHTML=`
// // //         <div class="questions__answer">
// // //                     <input type="radio" class="questions__butn" value="answers" name="btnanswer" checked>
// // //                     <label for="button"> Oui</label>
// // //                 </div>
// // //                 <div class="questions__answer">
// // //                     <input type="radio" class="questions__butn" value="answers" name="btnanswer">
// // //                     <label for="button"> Non</label>
// // //                 </div>
// // //         `;
// // //         nextBtn.innerText="Question suivante";
// // //     }
// // //     else if(i==1)
// // //     {
// // //         answers.innerHTML=`<div class="questions__answer">
// // //         <input type="radio" class="questions__butn" value="answers" name="btnanswer" checked>
// // //         <label for="button"> Oui</label>
// // //     </div>
// // //     <div class="questions__answer">
// // //         <input type="radio" class="questions__butn" value="answers" name="btnanswer">
// // //         <label for="button"> Non</label>
// // //     </div>
// // //     <div class="questions__answer">
// // //         <input type="radio" class="questions__butn" value="answers" name="btnanswer">
// // //         <label for="button"> Ne sait pas</label>
// // //     </div>`;
// // //     nextBtn.innerText="Question suivante";
// // //     }
// // //     else if(i==2)
// // //     {
// // //         answers.innerHTML= `<div class="questions__answer">
// // //         <input type="radio" id="degree1" class="questions__butn" name="btnanswer" checked>
// // //         <label for="degree">35,5 - 37,7°C</label>
// // //     </div>
// // //     <div class="questions__answer">
// // //         <input type="radio" id="degree2" class="questions__butn" name="btnanswer">
// // //         <label for="degree">37,8 – 38,9°C = seuil retenu</label>
// // //     </div>
// // //     <div class="questionnaire__answer">
// // //         <input type="radio" id="degree3" class="questions__butn" name="btnanswer" >
// // //         <label for="degree">Non renseignée & OUI à question précédente</label>
// // //     </div>
// // // </div>`;
// // // nextBtn.innerText="Question suivante";
// // //     }
// // //     else if(i==10)
// // //     {
// // //         answers.innerHTML= `<div class="questions__answer">
// // //         <input type="radio" id="bien" class="questions__butn" name="btnanswer" checked>
// // //      <label for="bien">Bien</label>
// // //     </div>
// // //     <div class="questions__answer">
// // //         <input type="radio" id="assez" class="questions__butn" name="btnanswer">
// // //         <label for="assez">Assez bien</label>
// // //     </div>
// // //     <div class="questions__answer">
// // //         <input type="radio" id="mal" class="questions__butn" name="btnanswer">
// // //         <label for="mal">Mal</label>
// // //     </div>
// // //     <div class="questions__answer">
// // //         <input type="radio" id="tresmal" class="questions__butn" name="btnanswer">
// // //         <label for="tresmal">Très mal</label>
// // //     </div>`;
// // //     nextBtn.innerText="Question suivante";
// // //     }
// // //     else if(i==11)
// // //     {
// // //         answers.innerHTML=`<div class="questions__answer">
// // //         <input type="text" id="answer"> </div>`;
// // //         nextBtn.innerText="Question suivante";
// // //     }
// // //     else if(i==12)
// // //     {
// // //         answers.innerHTML=`<div class="questions__answer">
// // //         <input type="radio" id="age1" class="questions__butn" name="btnanswer" checked>
// // //         <label for="seniors"> < 50 ans</label>
// // //     </div>
// // //     <div class="questions__answer">
// // //         <input type="radio" id="age2" class="questions__butn" name="btnanswer">
// // //         <label for="adults"> 50-69 ans</label>
// // //     </div>
// // //     <div class="questions__answer">
// // //         <input type="radio" id="age3" class="questions__butn" name="btnanswer">
// // //         <label for="minors"> STOP si < 15 ans : Prenez contact avec votre médecin généraliste au moindre doute. Cette application n’est pour l’instant pas adaptée aux personnes de moins de 15 ans. En cas d’urgence, appeler le 15.</label>
// // //     </div>`;
// // //     nextBtn.innerText="Question suivante";
// // //     }
// // //     else if(i==13)
// // //     {
// // //         answers.innerHTML=`<div class="questions__answer">
// // //         <input type="text" id="answer1">
// // //         <input type="text" id="answer2"> </div>`;
// // //         nextBtn.innerText="Question suivante";
// // //     }
// // //     else if (i==14)
// // //     {
// // //         answers.innerHTML=`<div class="questions__answer">
// // //         <input type="radio" class="questions__butn" value="answers" name="btnanswer" checked>
// // //         <label for="button"> Oui</label>
// // //     </div>
// // //     <div class="questions__answer">
// // //         <input type="radio" class="questions__butn" value="answers" name="btnanswer">
// // //         <label for="button"> Non</label>
// // //     </div>
// // //     <div class="questions__answer">
// // //         <input type="radio" class="questions__butn" value="answers" name="btnanswer">
// // //         <label for="button"> Ne sait pas</label>
// // //     </div>`;
// // //     nextBtn.innerText="Question suivante";
// // //     }
// // //     else if(i==20)
// // //     {
// // //         answers.innerHTML=`<div class="questions__answer">
// // //         <input type="radio" class="questions__butn" value="answers" name="btnanswer" checked>
// // //         <label for="button"> Oui</label>
// // //     </div>
// // //     <div class="questions__answer">
// // //         <input type="radio" class="questions__butn" value="answers" name="btnanswer">
// // //         <label for="button"> Non</label>
// // //     </div>
// // //     <div class="questions__answer">
// // //         <input type="radio" class="questions__butn" value="answers" name="btnanswer">
// // //         <label for="button"> Non applicable</label>
// // //     </div>`;
// // //     nextBtn.innerText="Question suivante";
// // //     }
// // //     else if(i==21)
// // //     {
// // //         answers.innerHTML=`<div class="questions__answer">
// // //         <input type="radio" class="questions__butn" value="answers" name="btnanswer" checked>
// // //         <label for="button"> Oui</label>
// // //     </div>
// // //     <div class="questions__answer">
// // //         <input type="radio" class="questions__butn" value="answers" name="btnanswer">
// // //         <label for="button"> Non</label>
// // //     </div>
// // //     <div class="questions__answer">
// // //         <input type="radio" class="questions__butn" value="answers" name="btnanswer">
// // //         <label for="button"> Ne sait pas</label>
// // //     </div>`;
// // //     nextBtn.innerText="Question suivante";
// // //     }
// // //     else if(i==22)
// // //     {
// // //         answers.innerHTML=`<div class="questions__answer">
// // //         <input type="radio" class="questions__butn" value="answers" name="btnanswer" checked>
// // //         <label for="button"> Oui</label>
// // //     </div>
// // //     <div class="questions__answer">
// // //         <input type="radio" class="questions__butn" value="answers" name="btnanswer">
// // //         <label for="button"> Non</label>
// // //     </div>
// // //     <div class="questions__answer">
// // //         <input type="radio" class="questions__butn" value="answers" name="btnanswer">
// // //         <label for="button"> Ne sait pas</label>
// // //     </div>`

// // //     nextBtn.innerText="Resultat";
// // //     nextBtn.value="submit";
  
// // //     nextBtn.addEventListener('click',() => {


        
// // //         const element = document.createElement('p');
// // //         element.innerHTML = 'RESULTAT du TEST';

// // //         testPage.appendChild(element);
// // //         question.style.display="none";
// // //         previousBtn.style.display="none";
// // //       const divquest=document.querySelector('.progresspercent__question');
// // //       divquest.style.display="none";
        
// // //     })
// // //     }
   
// // //     answers.classList.add(`.questions__answers'${i}`);
// // //     answers.classList.remove(`.questions__answers'${i-1}`);
// // //     question.innerText=questionList[i];
    



// // // })




    





// // // const userAnswers = document.querySelectorAll('[type="radio"]:checked');
// // // answersArray.forEach(item,index){
// // //     if (currentindex == index){
        
// // //     }
// // // }
// // // let answersArray = [
// // //      {id:1,question:"Pensez-vous avoir eu de la fièvre ces derniers jours (frissons, sueurs)?", answer:"userAnswers[i]"},
// // //      {id:2,question:"quelle est votre température?", answer:"userAnswers[i]"},
// // //      {id:3,question:"Avez-vous une toux ou une augmentation de votre toux habituelle ces derniers jours?", answer:"userAnswers[i]"},
// // //      {id:4,question:"Avez-vous des douleurs musculaires ou des courbatures inhabituelles ces derniers jours?", answer:"userAnswers[i]"},
// // //      {id:5,question:"Avez-vous un mal de gorge apparu ces derniers jours?", answer:"userAnswers[i]"},
// // //      {id:6,question:"Avez-vous de la diarrhée ces dernières 24 heures (au moins 3 selles molles)?", answer:"userAnswers[i]"},
// // //      {id:7,question:"Avez-vous une fatigue inhabituelle ces derniers jours ?", answer:"userAnswers[i]"},
// // //      {id:8,question:"cette fatigue vous oblige-t-elle à vous reposer plus de la moitié de la journée?", answer:"userAnswers[i]"},
// // //      {id:9,question:"Avez-vous des difficultés importantes pour vous alimenter ou boire depuis plus de 24h?", answer:"userAnswers[i]"},
// // //      {id:10,question:"Avez-vous vu apparaître une gêne respiratoire ou une augmentation de votre gêne respiratoire habituelle?", answer:"userAnswers[i]"},
// // //      {id:11,question:"Comment vous sentez-vous ?", answer:"userAnswers[i]"},
// // //      {id:12,question:"Avez-vous d’autre symptôme ?", answer:"userAnswers[i]"},
// // //      {id:13,question:"Quel est votre âge ?", answer:"userAnswers[i]"},
// // //      {id:14,question:"Quel est votre poids ? Quelle est votre taille ?", answer:"userAnswers[i]"},
// // //      {id:15,question:"Avez-vous de l’hypertension artérielle ? Ou avez-vous une maladie cardiaque ou vasculaire ? Ou prenez vous un traitement à visée cardiologique ?", answer:"userAnswers[i]"},
// // //      {id:16,question:"Êtes-vous diabétique ?", answer:"userAnswers[i]"},
// // //      {id:17,question:"Avez-vous ou avez-vous eu un cancer ?", answer:"userAnswers[i]"},
// // //      {id:18,question:"Avez-vous une maladie respiratoire ? Ou êtes-vous suivi par un pneumologue ?", answer:"userAnswers[i]"},
// // //      {id:19,question:"Avez-vous une insuffisance rénale chronique dialysée", answer:"userAnswers[i]"},
// // //      {id:20,question:"Avez-vous une maladie chronique du foie ?", answer:"userAnswers[i]"},
// // //      {id:21,question:"Êtes-vous enceinte ?", answer:"userAnswers[i]"},
// // //      {id:22,question:"Avez-vous une maladie connue pour diminuer vos défenses immunitaires", answer:"userAnswers[i]"},
// // //      {id:23,question:"Prenez-vous un traitement immunosuppresseur ? C’est un traitement qui diminue vos défenses contre les infections. Voici quelques exemples : corticoïdes, méthotrexate, ciclosporine, tacrolimus, azathioprine, cyclophosphamide (liste non exhaustive).", answer:"userAnswers[i]"},
// // //      {id:23,question:"quelle est votre température ?", answer:"userAnswers[i]"},
    
// // // ]

// // // const {answer} = answersArray


// // // let scenario1 = [
// // //     {id:1,question:"Pensez-vous avoir eu de la fièvre ces derniers jours (frissons, sueurs)?", answer:"OUI"},
// // //     {id:2,question:"quelle est votre température?", answer:"35,5-37,7°C"},
// // //     {id:3,question:"Avez-vous une toux ou une augmentation de votre toux habituelle ces derniers jours?", answer:"NON"},
// // //     {id:4,question:"Avez-vous des douleurs musculaires ou des courbatures inhabituelles ces derniers jours?", answer:"NON"},
// // //     {id:5,question:"Avez-vous un mal de gorge apparu ces derniers jours?", answer:"NON"},
// // //     {id:6,question:"Avez-vous de la diarrhée ces dernières 24 heures (au moins 3 selles molles)?", answer:"NON"},
// // //     {id:7,question:"Avez-vous une fatigue inhabituelle ces derniers jours ?", answer:"NON"},
// // //     {id:8,question:"cette fatigue vous oblige-t-elle à vous reposer plus de la moitié de la journée?", answer:"NON"},
// // //     {id:9,question:"Avez-vous des difficultés importantes pour vous alimenter ou boire depuis plus de 24h?", answer:"NON"},
// // //     {id:10,question:"Avez-vous vu apparaître une gêne respiratoire ou une augmentation de votre gêne respiratoire habituelle?", answer:"NON"},
// // //     {id:11,question:"Comment vous sentez-vous ?", answer:"Bien"},
// // //     {id:12,question:"Avez-vous d’autre symptôme ?", answer:""},
// // //     {id:13,question:"Quel est votre âge ?", answer:"=<50ans"},
// // //     {id:14,question:"Quel est votre poids ? Quelle est votre taille ?", answer:"NON"},
// // //     {id:15,question:"Avez-vous de l’hypertension artérielle ? Ou avez-vous une maladie cardiaque ou vasculaire ? Ou prenez vous un traitement à visée cardiologique ?", answer:"NON"},
// // //     {id:16,question:"Êtes-vous diabétique ?", answer:"NON"},
// // //     {id:17,question:"Avez-vous ou avez-vous eu un cancer ?", answer:"NON"},
// // //     {id:18,question:"Avez-vous une maladie respiratoire ? Ou êtes-vous suivi par un pneumologue ?", answer:"NON"},
// // //     {id:19,question:"Avez-vous une insuffisance rénale chronique dialysée", answer:"NON"},
// // //     {id:20,question:"Avez-vous une maladie chronique du foie ?", answer:"NON"},
// // //     {id:21,question:"Êtes-vous enceinte ?", answer:"NON"},
// // //     {id:22,question:"Avez-vous une maladie connue pour diminuer vos défenses immunitaires", answer:"NON"},
// // //     {id:23,question:"Prenez-vous un traitement immunosuppresseur ? C’est un traitement qui diminue vos défenses contre les infections. Voici quelques exemples : corticoïdes, méthotrexate, ciclosporine, tacrolimus, azathioprine, cyclophosphamide (liste non exhaustive).", answer:"NON"},
// // //     {id:23,question:"quelle est votre température ?", answer:"NON"},
// // // ]


// // // let scenario12= [
// // //     {id:1,question:"Pensez-vous avoir eu de la fièvre ces derniers jours (frissons, sueurs)?", answer:"OUI"},
// // //     {id:2,question:"quelle est votre température?", answer:"!=70"},
// // //     {id:3,question:"Avez-vous une toux ou une augmentation de votre toux habituelle ces derniers jours?", answer:"NON"},
// // //     {id:4,question:"Avez-vous des douleurs musculaires ou des courbatures inhabituelles ces derniers jours?", answer:"NON"},
// // //     {id:5,question:"Avez-vous un mal de gorge apparu ces derniers jours?", answer:"NON"},
// // //     {id:6,question:"Avez-vous de la diarrhée ces dernières 24 heures (au moins 3 selles molles)?", answer:"NON"},
// // //     {id:7,question:"Avez-vous une fatigue inhabituelle ces derniers jours ?", answer:"NON"},
// // //     {id:8,question:"cette fatigue vous oblige-t-elle à vous reposer plus de la moitié de la journée?", answer:"NON"},
// // //     {id:9,question:"Avez-vous des difficultés importantes pour vous alimenter ou boire depuis plus de 24h?", answer:"NON"},
// // //     {id:10,question:"Avez-vous vu apparaître une gêne respiratoire ou une augmentation de votre gêne respiratoire habituelle?", answer:"NON"},
// // //     {id:11,question:"Comment vous sentez-vous ?", answer:"Bien"},
// // //     {id:12,question:"Avez-vous d’autre symptôme ?", answer:""},
// // //     {id:13,question:"Quel est votre âge ?", answer:"=<50ans"},
// // //     {id:14,question:"Quel est votre poids ? Quelle est votre taille ?", answer:"NON"},
// // //     {id:15,question:"Avez-vous de l’hypertension artérielle ? Ou avez-vous une maladie cardiaque ou vasculaire ? Ou prenez vous un traitement à visée cardiologique ?", answer:"NON"},
// // //     {id:16,question:"Êtes-vous diabétique ?", answer:"NON"},
// // //     {id:17,question:"Avez-vous ou avez-vous eu un cancer ?", answer:"NON"},
// // //     {id:18,question:"Avez-vous une maladie respiratoire ? Ou êtes-vous suivi par un pneumologue ?", answer:"NON"},
// // //     {id:19,question:"Avez-vous une insuffisance rénale chronique dialysée", answer:"NON"},
// // //     {id:20,question:"Avez-vous une maladie chronique du foie ?", answer:"NON"},
// // //     {id:21,question:"Êtes-vous enceinte ?", answer:"NON"},
// // //     {id:22,question:"Avez-vous une maladie connue pour diminuer vos défenses immunitaires", answer:"NON"},
// // //     {id:23,question:"Prenez-vous un traitement immunosuppresseur ? C’est un traitement qui diminue vos défenses contre les infections. Voici quelques exemples : corticoïdes, méthotrexate, ciclosporine, tacrolimus, azathioprine, cyclophosphamide (liste non exhaustive).", answer:"NON"},
// // //     {id:23,question:"quelle est votre température ?", answer:"NON"},
// // // ]




let list3 = [
"OUI",
"NON",
"OUI",
"NON"
]

let list4 = [
"OUI",
"NON",
"NON",
"OUI"
]

let list5 = [
    "OUI",
    "NON",
    "NON",
    "OUI"
]

list4.forEach((element,index) =>{
console.log(element)
if (list3[index] == element){
    console.log(true);
}else{
    console.log(false)
}

});

// // // let score = 0
// // // for (i=0; i<list5.length; i++){

// // //     if (list5[i] === list3[i]){
// // //         console.log("call the doctor")
// // //         score=+25;
// // //         console.log(score);

// // //     };
// // //    if (list5[i] === list4[i]){
// // //         console.log("malade")
// // //     }
// // // }

// // // let list1 = [1,2,3]
// // // let list2 = [1,2,3]
// // // if (list1.length != list2.length)
// // // console.log(false);
// // // for (i=0; i<list1.length; i++){

// // //     if (list1[i] === list2[i]){
// // //         return true
// // //     }
// // // }





// // let firstArray  = [1, 2, 3, 8, 5];
// // let secondArray = [5, 4, 3, 2, 1];
// // let Equals = firstArray.every((item)=>secondArray.includes(item))
// // console.log(Equals)


// // // const userInput = document.querySelectorAll('[type="radio"]:checked');
// // // // console.log(userInput);
// // // // const userInputValue = userInput.value
// // // // console.log(userInputValue);

// // // userInput.forEach(ele =>{

// // //     console.log(ele.value);

// // // })


// const test=document.querySelector('.questionnaire');
// const answers=document.querySelector(".questions__answers");
// const question=document.querySelector(".questions__question");
// const previousBtn=document.querySelector('.buttons__btns1');
// const nextBtn=document.querySelector('.buttons__btns2');
// const infoPage=document.getElementById('shown');
// const testPage= document.getElementById('hidden');
// const testStart=document.getElementById('btnquiz');
// const textProgressQ=document.getElementById('questionquiz');
// const progressBarFiller=document.getElementById('fill');
// const progressbar=document.getElementById('percentage');
// const bullets=document.querySelectorAll('.progressbar__bullet');
// const bulletOne=document.getElementById('one');
// const bulletTwo=document.getElementById('two');
// const bulletThree=document.getElementById('three');


// const questionList=["","Pensez-vous avoir eu de la fièvre ces dernièrs jours (frissons, sueurs) ?", "Si oui : quelle est votre température ?", "Avez-vous une toux ou une augmentation de votre toux habituelle ces derniers jours ?", "Avez-vous des douleurs musculaires ou des courbatures inhabituelles ces derniers jours ?", "Avez-vous un mal de gorge apparu ces derniers jours ?", "Avez-vous de la diarrhée ces dernières 24 heures (au moins 3 selles molles) ?", "Avez-vous une fatigue inhabituelle ces derniers jours ?", "Avez-vous des difficultés importantes pour vous alimenter ou boire depuis plus de 24h ?", "Avez-vous vu apparaître une gêne respiratoire ou une augmentation de votre gêne respiratoire habituelle ?", "Comment sentez-vous ?", "Avez-vous d’autres symptômes ?", "Quel est votre âge ?", "Quel est votre poids ? Quelle est votre taille ?", "Avez-vous de l’hypertension artérielle ? Ou avez-vous une maladie cardiaque ou vasculaire ? Ou prenez vous un traitement à visée cardiologique ?", "Êtes-vous diabétique ?", "Avez-vous ou avez-vous eu un cancer ?", "Avez-vous une maladie respiratoire ? Ou êtes-vous suivi par un pneumologue ?", "Avez-vous une insuffisance rénale chronique dialysée ?", "Avez-vous une maladie chronique du foie ?", "Êtes-vous enceinte ?", "Avez-vous une maladie connue pour diminuer vos défenses immunitaires ?", "Prenez-vous un traitement immunosuppresseur ? C’est un traitement qui diminue vos défenses contre les infections. Voici quelques exemples : corticoïdes, méthotrexate, ciclosporine, tacrolimus, azathioprine, cyclophosphamide (liste non exhaustive)."];



// window.addEventListener("DOMContentLoaded", ()=>{
// infoPage.style.display='block';
// testPage.style.display='none';
// progressbar.style.display='none';
// bulletTwo.classList.remove('disabled');
// bulletThree.classList.remove('shown');




// testStart.addEventListener('click', ()=>{
        
//         infoPage.style.display = 'none';
        
//         testPage.style.display = 'block';
//         progressbar.style.display='block';
//         bulletOne.classList.remove('active');
//         bulletTwo.classList.add('disabled');
//         bulletThree.classList.remove('shown');
        
//     })
    
    
    
// })


// let maxQuestions=22;
// let i=1;
// textProgressQ.innerText=`Question ${i}/${maxQuestions}`;
// nextBtn.addEventListener("click", function(){

//     // const scenario5 = ["OUI","<=35,4°C","OUI","OUI","OUI","OUI","OUI","OUI","OUI","Mal","< 50 ans ",">= 70 ans","< 15 ans","OUI","OUI","OUI","OUI","OUI","OUI","OUI","OUI","OUI","OUI","OUI"]
//     // const userInput = document.querySelectorAll('[type="radio"]:checked');
//     // userInput.forEach((element,index) =>{
//     // let ele = element.value;
//     // // console.log(ele);
//     // if (element.value == scenario5[index]){
//     //     console.log("true");   }
//     //     else{
//     //         console.log("false");
//     //     }
 
//     // //  console.log(FP);
//     // });
    
  
//     // const userInput = document.querySelectorAll('[type="radio"]:checked');
//     // console.log(userInput);
//     // userInput.forEach((element,index) =>{

//     // let FP=0
//     // let FG=0
//     // let FGMaj=0
//     // let fgMin =0;
      

//     //  element.setAttribute('value',element.value);
//     //  const Val = element.value;
//     //  if(Val === ">=39°C" || Val==='OUI'){
        
       
//     //  }
   
//     // let ele = element.value;
//     // console.log(ele);
//     // if (ele == ">=39°C"){
//     //     // FP = FP + 2;
//     //     console.log("true");   }
//     //     else{
//     //         console.log(false);
//     //     }
 
//     //  console.log(FP);
//     });
// // const userInput = document.querySelectorAll('[type="radio"]:checked');
// // userInput.forEach((element) =>{
// //  console.log(element.value);
// // });

    
//     textProgressQ.innerText =`Question ${i+1}/${maxQuestions}`;
//     progressBarFiller.style.width= `${(i/maxQuestions)*100}%`;
    
    

//     i++;


    
//     if(i>questionList.length-1)
//     {
//         i=questionList.length-1;
//     }
//     if(i!=1 &&i!=2 && i!=10 && i!=11 && i!=12 && i!=13 && i!=14 && i!=20 && i!=21 && i!=22 && i!=23)
//     {
//         answers.innerHTML=`
//         <div class="questions__answer">
//                     <input type="radio" class="questions__butn" value="OUI" name="btnanswer">
//                     <label for="button"> Oui</label>
//                 </div>
//                 <div class="questions__answer">
//                     <input type="radio" class="questions__butn" value="NON" name="btnanswer">
//                     <label for="button"> Non</label>
//                 </div>
//         `;
//         nextBtn.innerText="Question suivante";
//     }
//     else if(i==1)
//     {
//         answers.innerHTML=`<div class="questions__answer">
//         <input type="radio" class="questions__butn" value="OUI" name="btnanswer">
//         <label for="button"> Oui</label>
//     </div>
//     <div class="questions__answer">
//         <input type="radio" class="questions__butn" value="NON" name="btnanswer">
//         <label for="button"> Non</label>
//     </div>
//     <div class="questions__answer">
//         <input type="radio" class="questions__butn" value="Ne sait pas" name="btnanswer">
//         <label for="button"> Ne sait pas</label>
//     </div>`;
//     nextBtn.innerText="Question suivante";
//     }
//     else if(i==2)
//     {
//         answers.innerHTML= `<div class="questions__answer">
//         <input type="radio" id="degree1" class="questions__butn" name="btnanswer" value="<=35,5°C">
//         <label for="degree">35,5 - 37,7°C</label>
//     </div>
//     <div class="questions__answer">
//         <input type="radio" id="degree2" class="questions__butn" name="btnanswer" value="<=37,8°C">
//         <label for="degree">37,8 – 38,9°C</label>
//     </div>
//     <div class="questions__answer">
//         <input type="radio" id="degree2" class="questions__butn" name="btnanswer" value=">=39°C">
//         <label for="degree">= 39°C ou <= 35,4°C</label>
//     </div>
//     <div class="questionnaire__answer">
//         <input type="radio" id="degree3" class="questions__butn" name="btnanswer" value="Non renseignée">
//         <label for="degree">Non renseignée & OUI à question précédente</label>
//     </div>
// </div>`;
// nextBtn.innerText="Question suivante";
//     }
//     else if(i==10)
//     {
//         answers.innerHTML= `<div class="questions__answer">
//         <input type="radio" id="bien" class="questions__butn" name="btnanswer" value="Bien">
//      <label for="bien">Bien</label>
//     </div>
//     <div class="questions__answer">
//         <input type="radio" id="assez" class="questions__butn" name="btnanswer" value="Assez bien">
//         <label for="assez">Assez bien</label>
//     </div>
//     <div class="questions__answer">
//         <input type="radio" id="mal" class="questions__butn" name="btnanswer" value="Mal">
//         <label for="mal">Mal</label>
//     </div>
//     <div class="questions__answer">
//         <input type="radio" id="tresmal" class="questions__butn" name="btnanswer" value="Très mal">
//         <label for="tresmal">Très mal</label>
//     </div>`;
//     nextBtn.innerText="Question suivante";
//     }
//     else if(i==11)
//     {
//         answers.innerHTML=`<div class="questions__answer">
//         <input type="text" id="answer" placeholder="Autres symptômes" value="symptomes"> </div>`;
//         nextBtn.innerText="Question suivante";
//     }
//     else if(i==12)
//     {
//         answers.innerHTML=`<div class="questions__answer">
//         <input type="radio" id="age1" class="questions__butn" name="btnanswer" value="< 50 ans">
//         <label for="seniors"> < 50 ans</label>
//     </div>
//     <div class="questions__answer">
//         <input type="radio" id="age2" class="questions__butn" name="btnanswer" value="50-69 ans">
//         <label for="adults"> 50-69 ans</label>
//     </div>
//     <div class="questions__answer">
//         <input type="radio" id="age2" class="questions__butn" name="btnanswer" value=">= 70 ans">
//         <label for="adults"> >= 70 ans</label>
//     </div>
//     <div class="questions__answer">
//         <input type="radio" id="age3" class="questions__butn" name="btnanswer" value="< 15 ans">
//         <label for="minors"> STOP si < 15 ans : Prenez contact avec votre médecin généraliste au moindre doute. Cette application n’est pour l’instant pas adaptée aux personnes de moins de 15 ans. En cas d’urgence, appeler le 15.</label>
//     </div>`;
//     nextBtn.innerText="Question suivante";
//     }
//     else if(i==13)
//     {
//         answers.innerHTML=`<div class="questions__answer">
//         <input type="text" id="answer" placeholder="Poids en kg" value="kg">
//         <input type="text" id="answer" placeholder="Taille en cm" value="cm"> </div>`;
//         nextBtn.innerText="Question suivante";
//     }
//     else if (i==14)
//     {
//         answers.innerHTML=`<div class="questions__answer">
//         <input type="radio" class="questions__butn"  name="btnanswer" value="OUI">
//         <label for="button"> Oui</label>
//     </div>
//     <div class="questions__answer">
//         <input type="radio" class="questions__butn"  name="btnanswer" value="NON">
//         <label for="button"> Non</label>
//     </div>
//     <div class="questions__answer">
//         <input type="radio" class="questions__butn"  name="btnanswer" value="Ne sait pas">
//         <label for="button"> Ne sait pas</label>
//     </div>`;
//     nextBtn.innerText="Question suivante";
//     }
//     else if(i==20)
//     {
//         answers.innerHTML=`<div class="questions__answer">
//         <input type="radio" class="questions__butn" name="btnanswer" value="OUI">
//         <label for="button"> Oui</label>
//     </div>
//     <div class="questions__answer">
//         <input type="radio" class="questions__butn"  name="btnanswer" value="NON">
//         <label for="button"> Non</label>
//     </div>
//     <div class="questions__answer">
//         <input type="radio" class="questions__butn" name="btnanswer" value="Non applicable">
//         <label for="button"> Non applicable</label>
//     </div>`;
//     nextBtn.innerText="Question suivante";
//     }
//     else if(i==21)
//     {
//         answers.innerHTML=`<div class="questions__answer">
//         <input type="radio" class="questions__butn"  name="btnanswer" value="OUI">
//         <label for="button"> Oui</label>
//     </div>
//     <div class="questions__answer">
//         <input type="radio" class="questions__butn" name="btnanswer" value="NON">
//         <label for="button"> Non</label>
//     </div>
//     <div class="questions__answer">
//         <input type="radio" class="questions__butn" name="btnanswer" value="Ne sait pas">
//         <label for="button"> Ne sait pas</label>
//     </div>`;
//     nextBtn.innerText="Question suivante";
//     }
//     else if(i==22)
//     {
//         answers.innerHTML=`<div class="questions__answer">
//         <input type="radio" class="questions__butn" name="btnanswer" value="OUI">
//         <label for="button"> Oui</label>
//     </div>
//     <div class="questions__answer">
//         <input type="radio" class="questions__butn"  name="btnanswer" value="NON">
//         <label for="button"> Non</label>
//     </div>
//     <div class="questions__answer">
//         <input type="radio" class="questions__butn"  name="btnanswer" value="Ne sait pas">
//         <label for="button"> Ne sait pas</label>
//     </div>`,
    
//     nextBtn.innerText="Resultat";
//     nextBtn.value="submit";

//     nextBtn.addEventListener('click',() => {


        
//         const element = document.createElement('p');
//         element.innerHTML = 'RESULTAT du TEST';

//         testPage.appendChild(element);
//         previousBtn.style.display="none";
//         answers.style.display="none";
//         question.style.display="none";
//         nextBtn.style.display="none";
//         const questionProgress = document.getElementById("questionquiz");
        
//         questionProgress.style.display="none";
//         progressbar.style.display='none';
//         bulletOne.classList.remove('active');
//         bulletTwo.classList.remove('disabled');
//         bulletThree.classList.add('shown');

//     })



 
// }
    
//     else if (i==0)
//     {

//     }

//     answers.classList.add(`.questions__answers'${i}`);
//     answers.classList.remove(`.questions__answers'${i-1}`);
//     question.innerText=questionList[i];

// })

// previousBtn.addEventListener("click", function(){
//     i--;
//     textProgressQ.innerText=`Question ${i}/${maxQuestions}`;
//     progressBarFiller.style.width= `${(i/maxQuestions)*100}%`;


//     if(i<1)
//     {
//         i=1;
//     }
//     if(i!=1 &&i!=2 && i!=10 && i!=11 && i!=12 && i!=13 && i!=14 && i!=20 && i!=21 && i!=22)
//     {
//         answers.innerHTML=`
//         <div class="questions__answer">
//                     <input type="radio" class="questions__butn" value="OUI" name="btnanswer">
//                     <label for="button"> Oui</label>
//                 </div>
//                 <div class="questions__answer">
//                     <input type="radio" class="questions__butn" value="NON" name="btnanswer">
//                     <label for="button"> Non</label>
//                 </div>
//         `;
//         nextBtn.innerText="Question suivante";
//     }
//     else if(i==1)
//     {
//         answers.innerHTML=`<div class="questions__answer">
//         <input type="radio" class="questions__butn" value="OUI" name="btnanswer">
//         <label for="button"> Oui</label>
//     </div>
//     <div class="questions__answer">
//         <input type="radio" class="questions__butn" value="NON" name="btnanswer">
//         <label for="button"> Non</label>
//     </div>
//     <div class="questions__answer">
//         <input type="radio" class="questions__butn" value="Ne sait pas" name="btnanswer">
//         <label for="button"> Ne sait pas</label>
//     </div>`;
//     nextBtn.innerText="Question suivante";
//     }
//     else if(i==2)
//     {
//         answers.innerHTML= `<div class="questions__answer">
//         <input type="radio" id="degree1" class="questions__butn" name="btnanswer">
//         <label for="degree">35,5 - 37,7°C</label>
//     </div>
//     <div class="questions__answer">
//         <input type="radio" id="degree2" class="questions__butn" name="btnanswer">
//         <label for="degree">37,8 – 38,9°C = seuil retenu</label>
//     </div>
//     <div class="questionnaire__answer">
//         <input type="radio" id="degree3" class="questions__butn" name="btnanswer" >
//         <label for="degree">Non renseignée & OUI à question précédente</label>
//     </div>
// </div>`;
// nextBtn.innerText="Question suivante";
//     }
//     else if(i==10)
//     {
//         answers.innerHTML= `<div class="questions__answer">
//         <input type="radio" id="bien" class="questions__butn" name="btnanswer">
//      <label for="bien">Bien</label>
//     </div>
//     <div class="questions__answer">
//         <input type="radio" id="assez" class="questions__butn" name="btnanswer">
//         <label for="assez">Assez bien</label>
//     </div>
//     <div class="questions__answer">
//         <input type="radio" id="mal" class="questions__butn" name="btnanswer">
//         <label for="mal">Mal</label>
//     </div>
//     <div class="questions__answer">
//         <input type="radio" id="tresmal" class="questions__butn" name="btnanswer">
//         <label for="tresmal">Très mal</label>
//     </div>`;
//     nextBtn.innerText="Question suivante";
//     }
//     else if(i==11)
//     {
//         answers.innerHTML=`<div class="questions__answer">
//         <input type="text" id="answer" placeholder="Autres syptômes"> </div>`;
//         nextBtn.innerText="Question suivante";
//     }
//     else if(i==12)
//     {
//         answers.innerHTML=`<div class="questions__answer">
//         <input type="radio" id="age1" class="questions__butn" name="btnanswer">
//         <label for="seniors"> < 50 ans</label>
//     </div>
//     <div class="questions__answer">
//         <input type="radio" id="age2" class="questions__butn" name="btnanswer">
//         <label for="adults"> 50-69 ans</label>
//     </div>
//     <div class="questions__answer">
//         <input type="radio" id="age3" class="questions__butn" name="btnanswer">
//         <label for="minors"> STOP si < 15 ans : Prenez contact avec votre médecin généraliste au moindre doute. Cette application n’est pour l’instant pas adaptée aux personnes de moins de 15 ans. En cas d’urgence, appeler le 15.</label>
//     </div>`;
//     nextBtn.innerText="Question suivante";
//     }
//     else if(i==13)
//     {
//         answers.innerHTML=`<div class="questions__answer">
//         <input type="text" id="answer1" placeholder="Poids en kg">
//         <input type="text" id="answer2" placeholder="Taille en cm"> </div>`;
//         nextBtn.innerText="Question suivante";
//     }
//     else if (i==14)
//     {
//         answers.innerHTML=`<div class="questions__answer">
//         <input type="radio" class="questions__butn" value="OUI" name="btnanswer">
//         <label for="button"> Oui</label>
//     </div>
//     <div class="questions__answer">
//         <input type="radio" class="questions__butn" value="NON" name="btnanswer">
//         <label for="button"> Non</label>
//     </div>
//     <div class="questions__answer">
//         <input type="radio" class="questions__butn" value="Ne sait pas" name="btnanswer">
//         <label for="button"> Ne sait pas</label>
//     </div>`;
//     nextBtn.innerText="Question suivante";
//     }
//     else if(i==20)
//     {
//         answers.innerHTML=`<div class="questions__answer">
//         <input type="radio" class="questions__butn" value="OUI" name="btnanswer">
//         <label for="button"> Oui</label>
//     </div>
//     <div class="questions__answer">
//         <input type="radio" class="questions__butn" value="NON" name="btnanswer">
//         <label for="button"> Non</label>
//     </div>
//     <div class="questions__answer">
//         <input type="radio" class="questions__butn" value="Non applicable" name="btnanswer">
//         <label for="button"> Non applicable</label>
//     </div>`;
//     nextBtn.innerText="Question suivante";
//     }
//     else if(i==21)
//     {
//         answers.innerHTML=`<div class="questions__answer">
//         <input type="radio" class="questions__butn" value="OUI" name="btnanswer">
//         <label for="button"> Oui</label>
//     </div>
//     <div class="questions__answer">
//         <input type="radio" class="questions__butn" value="NON" name="btnanswer">
//         <label for="button"> Non</label>
//     </div>
//     <div class="questions__answer">
//         <input type="radio" class="questions__butn" value="Ne sait pas" name="btnanswer">
//         <label for="button"> Ne sait pas</label>
//     </div>`;
//     nextBtn.innerText="Question suivante";
//     }
//     else if(i==22)
//     {
//         answers.innerHTML=`<div class="questions__answer">
//         <input type="radio" class="questions__butn" value="OUI" name="btnanswer">
//         <label for="button"> Oui</label>
//     </div>
//     <div class="questions__answer">
//         <input type="radio" class="questions__butn" value="NON" name="btnanswer">
//         <label for="button"> Non</label>
//     </div>
//     <div class="questions__answer">
//         <input type="radio" class="questions__butn" value="Ne sait pas" name="btnanswer">
//         <label for="button"> Ne sait pas</label>
//     </div>`

//     nextBtn.innerText="Resultat";
//     nextBtn.value="submit";
  
//     nextBtn.addEventListener('click',() => {


        
//         const element = document.createElement('p');
//         element.innerHTML = 'RESULTAT du TEST';

//         testPage.appendChild(element);
//         question.style.display="none";
//         previousBtn.style.display="none";
//         const divquest=document.querySelector('.progresspercent__question');
//         divquest.style.display="none";
//         // bulletOne.classList.remove('active');
//         // bulletTwo.classList.remove('disabled');
//         // bulletThree.classList.add('shown');

      
        
//     })
//     }
   
//     answers.classList.add(`.questions__answers'${i}`);
//     answers.classList.remove(`.questions__answers'${i-1}`);
//     question.innerText=questionList[i];
    
// })







    


