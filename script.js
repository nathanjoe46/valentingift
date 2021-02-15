const menuToggle = document.querySelector('.toggle');
      const showcase = document.querySelector('.showcase');

      menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        showcase.classList.toggle('active');
      });

     

      

      let nom1 = prompt("Enter your Name")
      let nom = `Happy Valentine's day ${nom1 } ❤️ `;
      
$(document).ready( () =>{
    let typed = new Typed('.animate-text',{
        // strings:['Consultez un medecin en quelques minutes via un click sur votre device...'],
        strings:[nom],
        typeSpeed: 200,
    })
}

)




//       let nom = prompt("Enter your name please!")

//       let displayNom = document.getElementById("nom")

//       displayNom.innerHTML = `Happy Valentine's Day ${nom}`
