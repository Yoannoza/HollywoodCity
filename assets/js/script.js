






document.addEventListener('DOMContentLoaded', function() {

  // Pour appliquer le bon margin-top a la section hero car la nav bar est fixed


  // Fonction pour mettre à jour la taille de l'élément dans une variable
  function updatemargintop() {
    const nav = document.getElementById('nav');
    const navheight = nav.offsetHeight;
    const hero = document.getElementById('home');

    hero.style.marginTop = `${navheight}px`;
    // Afficher la taille dans la console (à des fins de démonstration)
    console.log(`Hauteur : ${navheight} px`);
  }
  // Appeler la fonction pour la première fois
  updatemargintop();

  // Mettre à jour la taille de l'élément lors du redimensionnement de la fenêtre
  window.addEventListener('resize', updatemargintop);
});


