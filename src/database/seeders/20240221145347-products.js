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
        image: '10.png',
        imageUrl: 'https://res.cloudinary.com/dfmzmreki/image/upload/v1710627241/10_tc946j.png'
      },
      {
        name:"Short de baño Flowers",
        description:"Traje de baño masculino con diseño de flores. Tela resistente y durardera.",
        price:13000,
        category:"Masculino",
        is_new:true,
        image: '13.png',
        imageUrl: 'https://res.cloudinary.com/dfmzmreki/image/upload/v1710627244/13_w5jteg.png'
      },{
        name:"Remera Ryan",
        description:"Remera deportiva. Hecha con una tela fresca y cómoda para realizar actividad física",
        price: 14080,
        category:"Masculino",
        is_new:true,
        image: '11.png',
        imageUrl: 'https://res.cloudinary.com/dfmzmreki/image/upload/v1710627244/11_ltmdi8.png'
      },{
        name:"Conjunto Don't worry",
        description:"Conjunto deportivo de verano, hecho con algodón de excelente calidad. Incluye remera y short.",
        price: 25290,
        category:"Masculino",
        is_new:true,
        image: '9.png',
        imageUrl: 'https://res.cloudinary.com/dfmzmreki/image/upload/v1710627241/9_kltsnd.png'
      },{
        name:"Top Miley",
        description:"Corpiño deportivo femenino hecho con una tela elástica y absorbente.",
        price: 6500,
        category:"Femenino",
        is_new:true,
        image: '15.png',
        imageUrl: 'https://res.cloudinary.com/dfmzmreki/image/upload/v1710627246/15_cqknwr.png'
      },{
        name:"Conjunto Ashley",
        description:"Conjunto deportivo ideal para realizar deportes como el tenis. Incluye corpiño deportivo de tela estástizada y pollera.",
        price: 17350,
        category:"Femenino",
        is_new:true,
        image: '16.png',
        imageUrl: 'https://res.cloudinary.com/dfmzmreki/image/upload/v1710627246/16_rpwxjz.png'
      },{
        name:"Malla Lily",
        description:"Malla enteriza con vuelitos en los hombros. Tela resistente y duradera",
        price: 14780,
        category:"Femenino",
        is_new:true,
        image: '14.png',
        imageUrl: 'https://res.cloudinary.com/dfmzmreki/image/upload/v1710627246/14_zpqjq1.png'
      },{
        name:"Bikini Flowers",
        description:"Bikini con diseño de flores. Tela resistente y duradera",
        price: 15320,
        category:"Femenino",
        is_new:true,
        image: '17.png',
        imageUrl: 'https://res.cloudinary.com/dfmzmreki/image/upload/v1710627244/17_ezxs1m.png'
      },{
        name:"Bikini Little Flowers",
        description:"Bikini con diseño de flores pequeñas. Tela resistente y duradera",
        price: 14670,
        category:"Femenino",
        is_new:false,
        image: '18.png',
        imageUrl: 'https://res.cloudinary.com/dfmzmreki/image/upload/v1710627243/18_jmjbyw.png'
      },{
        name:"Conjunto Carly",
        description:"Conjunto deportivo de media estación, hecho con algodón de excelente calidad. Incluye buzo y pantalón.",
        price: 19950,
        category:"Femenino",
        is_new:false,
        image: '19.png',
        imageUrl: 'https://res.cloudinary.com/dfmzmreki/image/upload/v1710627240/19_itwfgy.png'
      }]
    
    await queryInterface.bulkInsert('products', products)
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('products', null, {});
  }
};
