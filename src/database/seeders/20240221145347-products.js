'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    const products = [
      {
        name:"Short de baño Shark",
        description:"Traje de baño masculino con diseño de tiburones. Tela resistente y durardera.",
        price: 12500,
        category:"Masculino",
        is_new:true,
      },
      {
        name:"Short de baño Flowers",
        description:"Traje de baño masculino con diseño de flores. Tela resistente y durardera.",
        price:13000,
        category:"Masculino",
        is_new:true
      },{
        name:"Remera Ryan",
        description:"Remera deportiva. Hecha con una tela fresca y cómoda para realizar actividad física",
        price: 14080,
        category:"Masculino",
        is_new:true
      },{
        name:"Conjunto Don't worry",
        description:"Conjunto deportivo de verano, hecho con algodón de excelente calidad. Incluye remera y short.",
        price: 25290,
        category:"Masculino",
        is_new:true
      },{
        name:"Top Miley",
        description:"Corpiño deportivo femenino hecho con una tela elástica y absorbente.",
        price: 6500,
        category:"Femenino",
        is_new:true
      },{
        name:"Conjunto Ashley",
        description:"Conjunto deportivo ideal para realizar deportes como el tenis. Incluye corpiño deportivo de tela estástizada y pollera.",
        price: 17350,
        category:"Femenino",
        is_new:true
      },{
        name:"Malla Lily",
        description:"Malla enteriza con vuelitos en los hombros. Tela resistente y duradera",
        price: 14780,
        category:"Femenino",
        is_new:true
      },{
        name:"Bikini Flowers",
        description:"Bikini con diseño de flores. Tela resistente y duradera",
        price: 15320,
        category:"Femenino",
        is_new:true
      },{
        name:"Bikini Little Flowers",
        description:"Bikini con diseño de flores pequeñas. Tela resistente y duradera",
        price: 14670,
        category:"Femenino",
        is_new:false
      },{
        name:"Conjunto Carly",
        description:"Conjunto deportivo de media estación, hecho con algodón de excelente calidad. Incluye buzo y pantalón.",
        price: 19950,
        category:"Femenino",
        is_new:false
      }]
    
    await queryInterface.bulkInsert('products', products)

    const productImages = [
      {name: '10.png', id_product: 1},
      {name: '13.png', id_product: 2},
      {name: '11.png', id_product: 3},
      {name: '9.png', id_product: 4},
      {name: '15.png', id_product: 5},
      {name: '16.png', id_product: 6},
      {name: '14.png', id_product: 7},
      {name: '17.png', id_product: 8},
      {name: '18.png', id_product: 9},
      {name: '19.png', id_product: 10},
    ]

    await queryInterface.bulkInsert('product_image', productImages)
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('products', null, {});
    await queryInterface.bulkDelete('product_image', null, {});
  }
};
