// YouTube Playlist Loader - Sin API
// Carga videos desde array de IDs

// IDs de videos de la playlist
// Para obtener los IDs: abre la playlist, haz clic en cada video y copia el ID de la URL
const videoIds = [
  '32vl3tJN3Qc', 'bozYUvbZ-sc', 'DiVE3l6EYq0', 'vMydIpalWME', 'tKS0cCz03W8'
];

function loadVideos() {
  const container = document.querySelector('.videos-grid');

  if (videoIds.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; padding: 40px; text-align: center; color: #888;">
        <p>Para usar este sitio:</p>
        <ol style="text-align: left; max-width: 600px; margin: 20px auto;">
          <li>Abre la playlist de YouTube</li>
          <li>Abre la consola del navegador (F12)</li>
          <li>Ejecuta el siguiente código:</li>
        </ol>
        <pre style="background: #1a1a1a; padding: 15px; border-radius: 8px; overflow-x: auto;">
// Ejecuta esto en la consola de YouTube
const videoIds = [
  '32vl3tJN3Qc', 'bozYUvbZ-sc', 'DiVE3l6EYq0', 'vMydIpalWME', 'tKS0cCz03W8'
];
document.querySelectorAll('a#thumbnail').forEach(link => {
  const id = link.href.match(/v=([^&]+)/)?.[1];
  if (id) videoIds.push(id);
});
console.log('[' + videoIds.map(id => \`'\${id}'\`).join(', ') + ']');
// Copia el resultado y pégalo en js/playlist-loader.js
        </pre>
      </div>
    `;
    return;
  }

  // Limpiar contenedor
  container.innerHTML = '';

  // Crear elementos de video
  videoIds.forEach((videoId, index) => {
    const videoDiv = document.createElement('div');
    videoDiv.className = 'video-item';
    videoDiv.innerHTML = `
      <iframe
        src="https://www.youtube.com/embed/${videoId}?autoplay=1&loop=1&rel=0&controls=0&modestbranding=1&fs=0&showinfo=0&iv_load_policy=3&disablekb=1&playsinline=1"
        allow="autoplay"
        title="Video ${index + 1}"
        style="border: none; display: block;"
        allowfullscreen
      ></iframe>
    `;
    container.appendChild(videoDiv);
  });
}

// Cargar videos cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', loadVideos);
