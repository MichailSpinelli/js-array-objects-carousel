
const img = [
    {
        url: 'http://www.viaggiareonline.it/wp-content/uploads/2014/11/sweden_148857365.jpg',
        title: 'Svezia',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },

    {
        url: 'https://static1.evcdn.net/images/reduction/1513757_w-1920_h-1080_q-70_m-crop.jpg',
        title: 'Perù',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },

    {
        url: 'https://img.itinari.com/pages/images/original/0d3ed180-d22d-48e8-84df-19c4d888b41f-62-crop.jpg?ch=DPR&dpr=2.625&w=1600&s=7ebd4b5a9e045f41b4e0c7c75d298d6c',
        title: 'Chile',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
    {
        url: 'https://static1.evcdn.net/images/reduction/1583177_w-1920_h-1080_q-70_m-crop.jpg',
        title: 'Argentina',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
    {
        url: 'https://cdn.sanity.io/images/24oxpx4s/prod/ed09eff0362396772ad50ec3bfb728d332eb1c30-3200x2125.jpg?w=1600&h=1063&fit=crop',
        title: 'Colombia',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
];

let result = '';

for (let i = 0; i < img.length; i++) {

    result += `<img src="${img[i].url}" alt="Immagine ${i + 1}">`;

  }

  console.log(result);

  const button = document.querySelector("input");

  button.addEventListener("click", function() {
    alert("Il pulsante è stato cliccato!");
    
    });

    let immagineCorrente = 0;
    const imgContainer = document.querySelector('.contenitore-img > img');
    const rightButton = document.querySelector('.bottone-nav-dx');
    const leftButton = document.querySelector('.bottone-nav-sx');
    const descriptionElement = document.querySelector('.descrizione-img');

    function updateImage() {
        imgContainer.src = img[immagineCorrente].url;
        imgContainer.alt = img[immagineCorrente].title;
        descriptionElement.textContent = img[immagineCorrente].description;
    }
    
    rightButton.addEventListener('click', function () {
        immagineCorrente = (immagineCorrente + 1) % img.length;
        updateImage();
    });
    
    leftButton.addEventListener('click', function () {
        immagineCorrente = (immagineCorrente - 1 + img.length) % img.length;
        updateImage();
    });

    updateImage();

    setInterval(myFunction, 3000);

    function myFunction(){
        immagineCorrente = (immagineCorrente + 1) % img.length;
        updateImage();
    }