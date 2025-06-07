const mockProducts = [
    {
        id: 1,
        name: "Silla Gilda",
        description: "Bolso Silla Gilda Uzturre con 10% de descuento",
        color: "azul",
        price: "64,80€",
        originalPrice: "72,00€",
        discount: "10%",
        image: "/assets/products/image1.jpg"
    },
    {
        id: 2,
        name: "Silla Cocco",
        description: "Bolso Silla Cocco Piedra Uzturre con 10% de descuento",
        color: "beige",
        price: "84,60€",
        originalPrice: "94,00€",
        discount: "10%",
        image: "/assets/products/image2.jpg"
    },
    {
        id: 3,
        name: "Talega Neo",
        description: "Bolso Talega Neo con 10% de descuento",
        color: "gris",
        price: "64,80€",
        originalPrice: "72,00€",
        discount: "10%",
        image: "/assets/products/image3.jpg"
    },
    {
        id: 4,
        name: "Talega Dario",
        description: "Bolso de Talega Dario con 35% de descuento",
        color: "gris",
        price: "51,80€",
        originalPrice: "74,00€",
        discount: "35%",
        image: "/assets/products/image4.jpg"
    }
];

// Simula una llamada a una API para obtener los productos
export const fetchProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(mockProducts);
        }, 1000); // Simula un retraso de 1 segundo
    });
};

export default fetchProducts;