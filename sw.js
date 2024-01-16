// Cuando se instala el Service Worker
self.addEventListener('install', e => {
    console.log('instalado el Service Worker');
    console.log(e);
});

// Activar el Service Worker
self.addEventListener('activate', e => {
    console.log("Activando el servicio worker");
    console.log(e);
})