// /js/main.js
// Sistema de slider para cambiar imágenes y contenido del hero

document.addEventListener("DOMContentLoaded", () => {
    // Datos de los slides
    const slides = [
        {
            title: "Archivo Actual",
            subtitle: "software - docencia",
            text: "Archivos de imagen y video relacionados a la práctica de escribir código.",
            images: {
                xs: "img/home/home_xs.png",
                md: "img/home/home_md.png",
                lg: "img/home/home_lg.png",
                xl: "img/home/home_xl.png",
                xxl: "img/home/home_xxl.png",
                "2xxl": "img/home/home_2xxl.png"
            }
        },
        {
            title: "Archivo Ontogenia",
            subtitle: "software -  agentes autónomos",
            text: "Etapas del crecimiento cerebral diseñadas con algoritmos generativos",
            images: {
                xs: "img/home/home_xs_ontogenia.png",
                md: "img/home/home_md_ontogenia.png",
                lg: "img/home/home_lg_ontogenia.png",
                xl: "img/home/home_xl_ontogenia.png",
                xxl: "img/home/home_xxl_ontogenia.png",
                "2xxl": "img/home/home_2xxl_ontogenia.png"
            }
        },
        {
            title: "Archivo Colourdar",
            subtitle: "visualización de datos",
            text: "Temperaturas históricas por ciudad",
            images: {
                xs: "img/home/home_xs_colourdar.png",
                md: "img/home/home_md_colourdar.png",
                lg: "img/home/home_lg_colourdar.png",
                xl: "img/home/home_xl_colourdar.png",
                xxl: "img/home/home_xxl_colourdar.png",
                "2xxl": "img/home/home_2xxl_colourdar.png"
            }
        }
    ];

    // Estado del slider
    let currentSlideIndex = 0;

    // Elementos del DOM
    const heroTitle = document.getElementById("hero-title");
    const heroSubtitle = document.getElementById("hero-subtitle");
    const heroText = document.getElementById("hero-text");
    const heroImg = document.getElementById("hero-img");
    const heroSource2xxl = document.getElementById("hero-source-2xxl");
    const heroSourceXxl = document.getElementById("hero-source-xxl");
    const heroSourceXl = document.getElementById("hero-source-xl");
    const heroSourceLg = document.getElementById("hero-source-lg");
    const heroSourceMd = document.getElementById("hero-source-md");
    const slideIndicator = document.getElementById("slide-indicator");
    const prevButton = document.querySelector('[data-slide="prev"]');
    const nextButton = document.querySelector('[data-slide="next"]');

    // Función para actualizar el contenido del slide
    const updateSlide = (index) => {
        const slide = slides[index];
        
        // Actualizar texto
        heroTitle.textContent = slide.title;
        heroSubtitle.textContent = slide.subtitle;
        heroText.textContent = slide.text;

        // Actualizar imágenes responsive
        heroSource2xxl.setAttribute("srcset", slide.images["2xxl"]);
        heroSourceXxl.setAttribute("srcset", slide.images.xxl);
        heroSourceXl.setAttribute("srcset", slide.images.xl);
        heroSourceLg.setAttribute("srcset", slide.images.lg);
        heroSourceMd.setAttribute("srcset", slide.images.md);
        heroImg.setAttribute("src", slide.images.xs);
        heroImg.setAttribute("alt", slide.title);

        // Actualizar indicador
        slideIndicator.textContent = `${index + 1}/${slides.length}`;
    };

    // Función para ir al slide siguiente
    const nextSlide = () => {
        currentSlideIndex = (currentSlideIndex + 1) % slides.length;
        updateSlide(currentSlideIndex);
    };

    // Función para ir al slide anterior
    const prevSlide = () => {
        currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
        updateSlide(currentSlideIndex);
    };

    // Event listeners para los botones
    if (nextButton) {
        nextButton.addEventListener("click", nextSlide);
    }

    if (prevButton) {
        prevButton.addEventListener("click", prevSlide);
    }

    // Inicializar el slider con el primer slide
    updateSlide(currentSlideIndex);
});

