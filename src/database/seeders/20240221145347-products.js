'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const productImages = [
      {name: '/img/products/10.png'},
      {name: '/img/products/13.png'},
      {name: '/img/products/11.png'},
      {name: '/img/products/9.png'},
      {name: '/img/products/15.png'},
      {name: '/img/products/16.png'},
      {name: '/img/products/14.png'},
      {name: '/img/products/17.png'},
      {name: '/img/products/18.png'},
      {name: '/img/products/19.png'},
    ]

    await queryInterface.bulkInsert('product_image', productImages)

    const products = [
      {
        name:"Short de baño Shark",
        description:"Traje de baño masculino con diseño de tiburones. Tela resistente y durardera.",
        price: 12500,
        category:"Masculino",
        is_new:true,
        id_product_image: 1,
      },
      {
        name:"Short de baño Flowers",
        description:"Traje de baño masculino con diseño de flores. Tela resistente y durardera.",
        price:13000,
        category:"Masculino",
        is_new:true,
        id_product_image: 2
      },{
        name:"Remera Ryan",
        description:"Remera deportiva. Hecha con una tela fresca y cómoda para realizar actividad física",
        price: 14080,
        category:"Masculino",
        is_new:true,
        id_product_image: 3
      },{
        name:"Conjunto Don't worry",
        description:"Conjunto deportivo de verano, hecho con algodón de excelente calidad. Incluye remera y short.",
        price: 25290,
        category:"Masculino",
        is_new:true,
        id_product_image: 4
      },{
        name:"Top Miley",
        description:"Corpiño deportivo femenino hecho con una tela elástica y absorbente.",
        price: 6500,
        category:"Femenino",
        is_new:true,
        id_product_image: 5
      },{
        name:"Conjunto Ashley",
        description:"Conjunto deportivo ideal para realizar deportes como el tenis. Incluye corpiño deportivo de tela estástizada y pollera.",
        price: 17350,
        category:"Femenino",
        is_new:true,
        id_product_image: 6
      },{
        name:"Malla Lily",
        description:"Malla enteriza con vuelitos en los hombros. Tela resistente y duradera",
        price: 14780,
        category:"Femenino",
        is_new:true,
        id_product_image: 7
      },{
        name:"Bikini Flowers",
        description:"Bikini con diseño de flores. Tela resistente y duradera",
        price: 15320,
        category:"Femenino",
        is_new:true,
        id_product_image: 8
      },{
        name:"Bikini Little Flowers",
        description:"Bikini con diseño de flores pequeñas. Tela resistente y duradera",
        price: 14670,
        category:"Femenino",
        is_new:false,
        id_product_image: 9
      },{
        name:"Conjunto Carly",
        description:"Conjunto deportivo de media estación, hecho con algodón de excelente calidad. Incluye buzo y pantalón.",
        price: 19950,
        category:"Femenino",
        is_new:false,
        id_product_image: 10
      }]
    
    await queryInterface.bulkInsert('products', products)
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('product_image', null, {});
    await queryInterface.bulkDelete('products', null, {});
     
  }
};
