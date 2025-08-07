function toggleTexto() {
  const texto = document.getElementById("texto");
  const linkInicio = document.getElementById("linkInicio");

  if (texto.style.display === "none" || texto.style.display === "") {
    texto.style.display = "block";
    linkInicio.style.display = "none"; // Oculta el enlace
  } else {
    texto.style.display = "none";
    linkInicio.style.display = "block"; // Muestra el enlace
  }
}

function createHeart() {
  const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.left = Math.random() * 100 + 'vw'; // Posición horizontal aleatoria
    heart.style.animationDuration = (3 + Math.random() * 2) + 's';

    heart.innerHTML = `
      <svg viewBox="0 0 32 29.6">
        <path d="M23.6,0c-3.4,0-6.4,2.1-7.6,5.2C14.8,2.1,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4
          c0,9.5,16,21.1,16,21.1s16-11.6,16-21.1C32,3.8,28.2,0,23.6,0z"/>
      </svg>
    `;

    document.body.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 5000);
}

  setInterval(createHeart, 300);