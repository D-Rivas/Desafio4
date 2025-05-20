import { propiedades_alquiler } from './propiedades_alquiler.js';

const contenedor = document.querySelector('#contenedor-propiedades');

propiedades_alquiler.forEach((propiedad) => {
  const iconoFumar = propiedad.smoke ? 'fas fa-smoking' : 'fas fa-smoking-ban';
  const textoFumar = propiedad.smoke ? 'Permitido fumar' : 'No se permite fumar';
  const colorFumar = propiedad.smoke ? 'text-success' : 'text-danger';

  const iconoMascotas = propiedad.pets ? 'fas fa-paw' : 'fas fa-ban';
  const textoMascotas = propiedad.pets ? 'Mascotas permitidas' : 'No se permiten mascotas';
  const colorMascotas = propiedad.pets ? 'text-success' : 'text-danger';

  contenedor.innerHTML += `
    <div class="col-md-4 mb-4">
      <div class="card">
        <img src="${propiedad.src}" class="card-img-top" alt="${propiedad.nombre}" />
        <div class="card-body">
          <h5 class="card-title">${propiedad.nombre}</h5>
          <p class="card-text">${propiedad.descripcion}</p>
          <p><i class="fas fa-map-marker-alt"></i> ${propiedad.ubicacion}</p>
          <p><i class="fas fa-bed"></i> ${propiedad.habitaciones} Habitaciones | 
             <i class="fas fa-bath"></i> ${propiedad.baños ?? 'N/A'} Baños</p>
          <p><i class="fas fa-dollar-sign"></i> ${propiedad.costo.toLocaleString()}</p>
          <p class="${colorFumar}"><i class="${iconoFumar}"></i> ${textoFumar}</p>
          <p class="${colorMascotas}"><i class="${iconoMascotas}"></i> ${textoMascotas}</p>
        </div>
      </div>
    </div>`;
});