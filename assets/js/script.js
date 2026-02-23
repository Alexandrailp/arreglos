const propiedades_venta = [
  {
    nombre: "Apartamento de lujo en zona exclusiva",
    src: "assets/img/apto-lujo.jpg",
    descripcion: "Apartamento en zona exclusiva residencial.",
    ubicacion: "123 Luxury Lane",
    habitaciones: 4,
    banos: 4,
    costo: 5000,
    smoke: false,
    pets: false,
  },
  {
    nombre: "Apartamento en la montaña",
    src: "assets/img/furgoneta.jpg",
    descripcion: "Hermosa vista panorámica.",
    ubicacion: "789 Mountain Road",
    habitaciones: 2,
    banos: 1,
    costo: 1200,
    smoke: true,
    pets: true,
  },
  {
    nombre: "Penthouse con terraza",
    src: "assets/img/penthouse.avif",
    descripcion: "Terraza panorámica increíble.",
    ubicacion: "567 Skyline Avenue",
    habitaciones: 3,
    banos: 3,
    costo: 4500,
    smoke: false,
    pets: true,
  },
  {
    nombre: "Casa de campo amplia",
    src: "assets/img/campo.jpg",
    descripcion: "Rodeada de naturaleza y tranquilidad.",
    ubicacion: "Ruta 5 Sur, Chile",
    habitaciones: 6,
    banos: 4,
    costo: 6100,
    smoke: true,
    pets: true,
  },
  {
    nombre: "Casa moderna con jardín",
    src: "assets/img/moderna.avif",
    descripcion: "Casa con jardín amplio y diseño moderno.",
    ubicacion: "456 Maple Street, NY",
    habitaciones: 4,
    banos: 3,
    costo: 5400,
    smoke: false,
    pets: true,
  },
];

const propiedades_alquiler = [
  {
    nombre: "Apartamento en el centro",
    src: "assets/img/centro.jpg",
    descripcion: "Cerca de todo.",
    ubicacion: "123 Main Street",
    habitaciones: 2,
    banos: 2,
    costo: 2000,
    smoke: false,
    pets: true,
  },
  {
    nombre: "Vista al mar",
    src: "assets/img/mar.jpg",
    descripcion: "Hermosa vista.",
    ubicacion: "456 Ocean Avenue",
    habitaciones: 3,
    banos: 3,
    costo: 2500,
    smoke: true,
    pets: true,
  },
  {
    nombre: "Condominio moderno",
    src: "assets/img/condominio.jpg",
    descripcion: "Zona residencial tranquila.",
    ubicacion: "789 Green Street",
    habitaciones: 2,
    banos: 2,
    costo: 2200,
    smoke: false,
    pets: false,
  },
  {
    nombre: "Apartamento familiar amplio",
    src: "assets/img/familiar.jpg",
    descripcion: "Espacios amplios y luminosos.",
    ubicacion: "987 Family Street",
    habitaciones: 4,
    banos: 3,
    costo: 3000,
    smoke: false,
    pets: true,
  },
  {
    nombre: "Departamento estudio céntrico",
    src: "assets/img/estudio.jpg",
    descripcion: "Estudio compacto, ideal para una persona.",
    ubicacion: "789 Central Avenue, CA",
    habitaciones: 1,
    banos: 1,
    costo: 1300,
    smoke: false,
    pets: false,
  },
];

function renderPropiedades(propiedades, containerId) {
  const container = document.getElementById(containerId);
  container.innerHTML = "";

  propiedades.forEach((prop) => {
    container.innerHTML += `
      <div class="col-md-4 mb-4">
        <div class="card">
          <img src="${prop.src}" class="card-img-top">
          <div class="card-body">
            <h5>${prop.nombre}</h5>
            <p>${prop.descripcion}</p>
            <p><i class="fas fa-map-marker-alt"></i> ${prop.ubicacion}</p>
            <p>
              <i class="fas fa-bed"></i> ${prop.habitaciones} Habitaciones |
              <i class="fas fa-bath"></i> ${prop.banos} Baños
            </p>
            <p><i class="fas fa-dollar-sign"></i> ${prop.costo}</p>

            <p class="${prop.smoke ? "text-success" : "text-danger"}">
              ${
                prop.smoke
                  ? '<i class="fas fa-smoking"></i> Permitido fumar'
                  : '<i class="fas fa-smoking-ban"></i> No se permite fumar'
              }
            </p>

            <p class="${prop.pets ? "text-success" : "text-danger"}">
              ${
                prop.pets
                  ? '<i class="fas fa-paw"></i> Mascotas permitidas'
                  : '<i class="fas fa-ban"></i> No se permiten mascotas'
              }
            </p>

          </div>
        </div>
      </div>
    `;
  });
}
