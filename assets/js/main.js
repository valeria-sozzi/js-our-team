// file fornito
const team = [
    {
      name: 'Wayne Barnett',
      role: 'Founder & CEO',
      image: 'wayne-barnett-founder-ceo.jpg',
    },
    {
      name: 'Angela Caroll',
      role: 'Chief Editor',
      image: 'angela-caroll-chief-editor.jpg',
    },
    {
      name: 'Walter Gordon',
      role: 'Office Manager',
      image: 'walter-gordon-office-manager.jpg',
    },
    {
      name: 'Angela Lopez',
      role: 'Social Media Manager',
      image: 'angela-lopez-social-media-manager.jpg',
    },
    {
      name: 'Scott Estrada',
      role: 'Developer',
      image: 'scott-estrada-developer.jpg',
    },
    {
      name: 'Barbara Ramos',
      role: 'Graphic Designer',
      image: 'barbara-ramos-graphic-designer.jpg',
    },
  ];

//   MILESTONE 1:
// stampare su console le informazioni di nome, ruolo e la stringa della foto

for (let key in team){
  
    const member = team[key]['name']+ ', ' + team[key]['role']+ ', ' + team[key]['image'];
    console.log(member);
}

// MILESTONE 2:
// stampare le stesse informazioni su DOM sottoforma di stringhe

for (let key in team){
  
    const member = team[key]['name']+ ', ' + team[key]['role']+ ', ' + team[key]['image'];
    document.getElementById('team_members').innerHTML += `<li> ${member}</li>`
}


// BONUS 1:
// trasformare la stringa foto in una immagine effettiva
for (let key in team){
  
    const memberImage = team[key]['image'];
    console.log(memberImage);
    document.getElementById('image').innerHTML += `<img src="./assets/img/${memberImage}">`
}



// BONUS 2:
// organizzare i singoli membri in card/schede

for (let key in team){
    const member = team[key]['name']+ ', ' + team[key]['role']
    const memberImage = team[key]['image'];
    console.log(memberImage);
    document.querySelector('.card').innerHTML += `<div><img src="./assets/img/${memberImage}"> ${member}</div>`
}