




const galleryImages = document.querySelectorAll('.gallery-item img');
  console.log(galleryImages);
  
    var modal = document.getElementById('modal');
    var imagemModal = document.getElementById('imagem-modal');
    var closeModal = document.getElementById('fechar');

     function abrirModal(imageId) {
       const clickedImage = document.getElementById(imageId); 
       imagemModal.src = clickedImage.src; // Define a imagem do modal como a imagem clicada
       modal.style.display = "flex"; // Exibe o modal
     } 
     
     galleryImages.forEach(image => {
       image.addEventListener("click", () =>{
         abrirModal(image.id);
       } )  
     })

     closeModal.addEventListener("click", () => {
       modal.style.display = "none";
     })

// Fecha o modal se o usuário clicar fora da imagem
window.onclick = function(event) {
    var modal = document.getElementById('modal');
    if (event.target == modal) {
        modal.style.display = "none";
    }
}