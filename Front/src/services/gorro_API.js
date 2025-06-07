const mockProducts = [
    {
        id: 5,
        name: "Gorro bebé tejido ochos con pompón",
        description: "0-12 meses",
        color: "blanco",
        price: "21,83€",
        originalPrice: "24,25€",
        discount: "10%",
        image: "/assets/products/image5.jpg"
    },
    {
        id: 6,
        name: "Gorro bebé calado en rombos con pompón",
        description: "0-12 meses",
        color: "blanco",
        price: "21,83€",
        originalPrice: "24,25€",
        discount: "10%",
        image: "/assets/products/image6.jpg"
    },
    {
        id: 7,
        name: "Gorro bebé calado con orejeras y pompón",
        description: "0-12 meses",
        color: "gris",
        price: "12,37€",
        originalPrice: "13,75€",
        discount: "10%",
        image: "/assets/products/image7.jpg"
    },
    {
        id: 8,
        name: "Gorro bebé con pompones",
        description: "0-12 meses",
        color: "blanco",
        price: "11,03€",
        originalPrice: "12,26€",
        discount: "10%",
        image: "/assets/products/image8.jpg"
    }
];
const bizum ={
nombre: "el pepe",
email: "leemail@mail.com",
mensaje: "ïllo como no me hagas el gorrito te doy con mi navaja",
cart: [
    {
        id: 7,
        name: "Gorro bebé calado con orejeras y pompón",
        description: "0-12 meses",
        color: "gris",
        price: "12,37€",
        originalPrice: "13,75€",
        discount: "10%",
        image: "/assets/products/image7.jpg"
    },
    {
        id: 8,
        name: "Gorro bebé con pompones",
        description: "0-12 meses",
        color: "blanco",
        price: "11,03€",
        originalPrice: "12,26€",
        discount: "10%",
        image: "/assets/products/image8.jpg"
    }
]
};

// Simula una llamada a una API para obtener los productos
export const fetchProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(mockProducts);
        }, 1000); // Simula un retraso de 1 segundo
    });
};

export default fetchProducts;