import mongoose from 'mongoose';
import Product from './products/persistence/mongoose-models/product-model.js';




const seedProducts = async () => {
    await mongoose.connect('mongodb://127.0.0.1:27017/tienda_db');
  const products = [
    // HERO
    {
      nombre: 'Silla Gilda',
      descripcion: 'Bolso Silla Gilda Uzturre con 10% de descuento',
      precio: 64.80,
      imagen: '/assets/products/image1.jpg',
      tipo: 'hero',
      descuento: 10
    },
    {
      nombre: 'Silla Cocco',
      descripcion: 'Bolso Silla Cocco Piedra Uzturre con 10% de descuento',
      precio: 84.60,
      imagen: '/assets/products/image2.jpg',
      tipo: 'hero',
      descuento: 10
    },
    {
      nombre: 'Talega Neo',
      descripcion: 'Bolso Talega Neo con 10% de descuento',
      precio: 64.80,
      imagen: '/assets/products/image3.jpg',
      tipo: 'hero',
      descuento: 10
    },
    {
      nombre: 'Talega Dario',
      descripcion: 'Bolso Talega Dario con 30% de descuento',
      precio: 51.80,
      imagen: '/assets/products/image4.jpg',
      tipo: 'hero',
      descuento: 30
    },

    // GORROS
    {
      nombre: 'Gorro bebé tejido ochos',
      descripcion: 'Gorro bebé tejido ochos con pompón con 10% de descuento',
      precio: 21.83,
      imagen: '/assets/products/image5.jpg',
      tipo: 'gorro',
      descuento: 10
    },
    {
      nombre: 'Gorro bebé calado rombos',
      descripcion: 'Gorro bebé calado en rombos con pompón con 10% de descuento',
      precio: 21.83,
      imagen: '/assets/products/image6.jpg',
      tipo: 'gorro',
      descuento: 10
    },
    {
      nombre: 'Gorro bebé orejeras',
      descripcion: 'Gorro bebé calado con orejeras y pompón con 10% de descuento',
      precio: 12.37,
      imagen: '/assets/products/image7.jpg',
      tipo: 'gorro',
      descuento: 10
    },
    {
      nombre: 'Gorro bebé con pompones',
      descripcion: 'Gorro bebé con pompones con 10% de descuento',
      precio: 11.03,
      imagen: '/assets/products/image8.jpg',
      tipo: 'gorro',
      descuento: 10
    }
  ];

  await Product.deleteMany({}); // Limpia los productos anteriores
  await Product.insertMany(products); // Inserta nuevos

  console.log('✅ Productos insertados con éxito');
  mongoose.disconnect();
};

seedProducts().catch(err => {
  console.error('❌ Error al hacer seeding:', err);
  mongoose.disconnect();
});
