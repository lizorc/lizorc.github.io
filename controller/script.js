let menuVisible = false;
// funcion para ocultar y ver menú//
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;

    }
}

function seleccionar(){
    //ocultar el menu una vez seleccionada//
    document.getElementById("nav").classList = "";
    menuVisible = false;
    
}

// Link de Redes Sociales

document.addEventListener('DOMContentLoaded', function() {
    // URLs de las redes sociales
    const urls = {
        gmail: 'mailto:liz.oriana14@gmail.com',
        contact: 'mailto:liz.oriana14@gmail.com',
        linkedin: 'https://www.linkedin.com/in/lizorc/',
        github: 'https://github.com/lizorc'
    };

     // Función para asignar URLs a los enlaces
     function setSocialMediaLinks() {
        // Sección principal
        document.querySelector('section .redes #gmail').href = urls.gmail;
        document.querySelector('section .redes #linkedin').href = urls.linkedin;
        document.querySelector('section .redes #github').href = urls.github;

        document.querySelector('.cv .contact #contact').href = urls.contact;

        // Pie de página
        document.getElementById('footer-gmail').href = urls.gmail;
        document.getElementById('footer-linkedin').href = urls.linkedin;
        document.getElementById('footer-github').href = urls.github;
    }

    // imprimir pdf de CV
    setSocialMediaLinks();
});

// Función de descargar el CV
document.addEventListener('DOMContentLoaded', function() {
    const downloadBtn = document.getElementById('downloadBtn');
    
    downloadBtn.addEventListener('click', function() {
        const pdfUrl = 'document/CV__Liz_Rodrigues.pdf'; 
        const link = document.createElement('a');
        link.href = pdfUrl;
        link.download = 'CV__Liz_Rodrigues.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });
});