const userAnswers = document.querySelectorAll('[type="radio"]:checked');


let answersArray = [
     {id:1,question:"Pensez-vous avoir eu de la fièvre ces derniers jours (frissons, sueurs)?", answer:"userAnswers[i]"},
     {id:2,question:"quelle est votre température?", answer:"userAnswers[i]"},
     {id:3,question:"Avez-vous une toux ou une augmentation de votre toux habituelle ces derniers jours?", answer:"userAnswers[i]"},
     {id:4,question:"Avez-vous des douleurs musculaires ou des courbatures inhabituelles ces derniers jours?", answer:"userAnswers[i]"},
     {id:5,question:"Avez-vous un mal de gorge apparu ces derniers jours?", answer:"userAnswers[i]"},
     {id:6,question:"Avez-vous de la diarrhée ces dernières 24 heures (au moins 3 selles molles)?", answer:"userAnswers[i]"},
     {id:7,question:"Avez-vous une fatigue inhabituelle ces derniers jours ?", answer:"userAnswers[i]"},
     {id:8,question:"cette fatigue vous oblige-t-elle à vous reposer plus de la moitié de la journée?", answer:"userAnswers[i]"},
     {id:9,question:"Avez-vous des difficultés importantes pour vous alimenter ou boire depuis plus de 24h?", answer:"userAnswers[i]"},
     {id:10,question:"Avez-vous vu apparaître une gêne respiratoire ou une augmentation de votre gêne respiratoire habituelle?", answer:"userAnswers[i]"},
     {id:11,question:"Comment vous sentez-vous ?", answer:"userAnswers[i]"},
     {id:12,question:"Avez-vous d’autre symptôme ?", answer:"userAnswers[i]"},
     {id:13,question:"Quel est votre âge ?", answer:"userAnswers[i]"},
     {id:14,question:"Quel est votre poids ? Quelle est votre taille ?", answer:"userAnswers[i]"},
     {id:15,question:"Avez-vous de l’hypertension artérielle ? Ou avez-vous une maladie cardiaque ou vasculaire ? Ou prenez vous un traitement à visée cardiologique ?", answer:"userAnswers[i]"},
     {id:16,question:"Êtes-vous diabétique ?", answer:"userAnswers[i]"},
     {id:17,question:"Avez-vous ou avez-vous eu un cancer ?", answer:"userAnswers[i]"},
     {id:18,question:"Avez-vous une maladie respiratoire ? Ou êtes-vous suivi par un pneumologue ?", answer:"userAnswers[i]"},
     {id:19,question:"Avez-vous une insuffisance rénale chronique dialysée", answer:"userAnswers[i]"},
     {id:20,question:"Avez-vous une maladie chronique du foie ?", answer:"userAnswers[i]"},
     {id:21,question:"Êtes-vous enceinte ?", answer:"userAnswers[i]"},
     {id:22,question:"Avez-vous une maladie connue pour diminuer vos défenses immunitaires", answer:"userAnswers[i]"},
     {id:23,question:"Prenez-vous un traitement immunosuppresseur ? C’est un traitement qui diminue vos défenses contre les infections. Voici quelques exemples : corticoïdes, méthotrexate, ciclosporine, tacrolimus, azathioprine, cyclophosphamide (liste non exhaustive).", answer:"userAnswers[i]"},
     {id:23,question:"quelle est votre température ?", answer:"userAnswers[i]"},
    
]

let scenario1 = [
    {id:1,question:"Pensez-vous avoir eu de la fièvre ces derniers jours (frissons, sueurs)?", answer:"OUI"},
    {id:2,question:"quelle est votre température?", answer:"!=70"},
    {id:3,question:"Avez-vous une toux ou une augmentation de votre toux habituelle ces derniers jours?", answer:"NON"},
    {id:4,question:"Avez-vous des douleurs musculaires ou des courbatures inhabituelles ces derniers jours?", answer:"NON"},
    {id:5,question:"Avez-vous un mal de gorge apparu ces derniers jours?", answer:"NON"},
    {id:6,question:"Avez-vous de la diarrhée ces dernières 24 heures (au moins 3 selles molles)?", answer:"NON"},
    {id:7,question:"Avez-vous une fatigue inhabituelle ces derniers jours ?", answer:"NON"},
    {id:8,question:"cette fatigue vous oblige-t-elle à vous reposer plus de la moitié de la journée?", answer:"NON"},
    {id:9,question:"Avez-vous des difficultés importantes pour vous alimenter ou boire depuis plus de 24h?", answer:"NON"},
    {id:10,question:"Avez-vous vu apparaître une gêne respiratoire ou une augmentation de votre gêne respiratoire habituelle?", answer:"NON"},
    {id:11,question:"Comment vous sentez-vous ?", answer:"Bien"},
    {id:12,question:"Avez-vous d’autre symptôme ?", answer:""},
    {id:13,question:"Quel est votre âge ?", answer:"=<50ans"},
    {id:14,question:"Quel est votre poids ? Quelle est votre taille ?", answer:"NON"},
    {id:15,question:"Avez-vous de l’hypertension artérielle ? Ou avez-vous une maladie cardiaque ou vasculaire ? Ou prenez vous un traitement à visée cardiologique ?", answer:"NON"},
    {id:16,question:"Êtes-vous diabétique ?", answer:"NON"},
    {id:17,question:"Avez-vous ou avez-vous eu un cancer ?", answer:"NON"},
    {id:18,question:"Avez-vous une maladie respiratoire ? Ou êtes-vous suivi par un pneumologue ?", answer:"NON"},
    {id:19,question:"Avez-vous une insuffisance rénale chronique dialysée", answer:"NON"},
    {id:20,question:"Avez-vous une maladie chronique du foie ?", answer:"NON"},
    {id:21,question:"Êtes-vous enceinte ?", answer:"NON"},
    {id:22,question:"Avez-vous une maladie connue pour diminuer vos défenses immunitaires", answer:"NON"},
    {id:23,question:"Prenez-vous un traitement immunosuppresseur ? C’est un traitement qui diminue vos défenses contre les infections. Voici quelques exemples : corticoïdes, méthotrexate, ciclosporine, tacrolimus, azathioprine, cyclophosphamide (liste non exhaustive).", answer:"NON"},
    {id:23,question:"quelle est votre température ?", answer:"NON"},
]



// let list1 = [1,2,3]
// let list2 = [1,2,{3}]
// if (list1.length != list2.length)
// console.log(false);
// for (i=0; i<list1.length; i++){

//     if (list1[i] === list2[i]){
//         console.log(true)
//     }
// }


