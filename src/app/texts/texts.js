const title = "Anacaffe";
const email = "anagoro987@gmail.com";
const mensajeWhatsApp = encodeURIComponent(
    "¡Hola! Estoy interesado en conocer más sobre los productos de " + title + " y me gustaría obtener más información. Espero tu respuesta. ¡Gracias!"
);
const numeroWhatsApp = "+573224612154"; // Incluido el prefijo +57

const textos = {
    index: {
        title: title,
    },
    homeContent: {
        title: title,
    },
    about: {
        description1: "En Anacaffe, nos especializamos en ofrecerte café tinto y aromática de la más alta calidad. Con pasión por la excelencia, seleccionamos los mejores granos para crear una experiencia única en cada taza.",
        description2: "Nuestra misión es proporcionarte bebidas que no solo deleiten tu paladar, sino que también nutran tu espíritu. Disfruta de una experiencia auténtica con nuestros productos, elaborados con dedicación y amor por el café."
    },
    contact: {
        whatsappLink: `https://wa.me/${numeroWhatsApp}?text=${mensajeWhatsApp}`,
        email: email
    },
    footer: {
        slogan: {
            p1: "El sabor que reconforta.",
            p2: ""
        },
        address: "", // Información no proporcionada
        phone: numeroWhatsApp,
        email: email,
        facebook: "https://www.facebook.com/profile.php?id=61566321233000",
        instagram: "https://www.instagram.com", // Link base al no estar especificado
        whatsappLink: `https://wa.me/${numeroWhatsApp}?text=${mensajeWhatsApp}`
    },
};

export default textos;
