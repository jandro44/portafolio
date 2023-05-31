
let proyectos = '';
const obtenerProyectos = async () => {
    try {
        const respuesta = await axios.get('assets/js/data.json')

        const proyectosArray = await respuesta.data.proyectos

        proyectosArray.forEach(proyecto => {
            proyectos += `
                <div class="col-lg-4 col-md-6 portfolio-item">
                    <div class="portfolio-wrap rounded-4">
                        <img src="${proyecto.image}" class="img-fluid" alt="">
                        <div class="portfolio-info">
                            <h4>${proyecto.name}</h4>
                            <div class="mt-5">
                                <a class="btn btn-proyecto" href="${proyecto.link}" target="_blank">Ver Proyecto</a>
                            </div>
                        </div>
                    </div>
                </div>
            `
        });

        document.getElementById('proyectosDisplay').innerHTML = proyectos

    } catch (error) {
        console.log(error)
    }
}
obtenerProyectos()
