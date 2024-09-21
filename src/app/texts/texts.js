const title = "Titulo del emprendimiento";
const email = "Email del emprendimiento";
const mensajeWhatsApp = encodeURIComponent(
    `¡Hola! Estoy muy interesado en tus productos de ${title} y me gustaría recibir más información sobre ellos. Espero poder hablar pronto contigo para aclarar algunas dudas. ¡Gracias!`
);
const numeroWhatsApp = "Numero del emprendimiento";
const textos = {
    index: {
        title: title,
    },
    homeContent: {
        title: title,
    },
    about: {
        description1: "Descripción del emprendimiento parrafo uno",
        description2: "Descripcion del emprendimiento parrafo dos"
    },
    contact: {
        whatsappLink: `https://wa.me/${numeroWhatsApp}?text=${mensajeWhatsApp}`,
        email: email
    },
    footer: {
        slogan:{
            p1: "slogan del emprendimiento parrafo uno",
            p2: "slogan del emprendimiento parrafo dos"
        },
        address: "Dirección del emprendimiento",
        phone: numeroWhatsApp,
        email: email,
        facebook: "https://www.facebook.com/",
        instagram: "https://www.instagram.com/",
        whatsappLink: `https://wa.me/${numeroWhatsApp}?text=${mensajeWhatsApp}`
    },

};
export default textos;
