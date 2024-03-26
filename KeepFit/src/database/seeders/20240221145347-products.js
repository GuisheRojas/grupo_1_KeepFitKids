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
        image: '10.png'
      },
      {
        name:"Short de baño Flowers",
        description:"Traje de baño masculino con diseño de flores. Tela resistente y durardera.",
        price:13000,
        category:"Masculino",
        is_new:true,
        image: '13.png'
      },{
        name:"Remera Ryan",
        description:"Remera deportiva. Hecha con una tela fresca y cómoda para realizar actividad física",
        price: 14080,
        category:"Masculino",
        is_new:true,
        image: '11.png'
      },{
        name:"Conjunto Don't worry",
        description:"Conjunto deportivo de verano, hecho con algodón de excelente calidad. Incluye remera y short.",
        price: 25290,
        category:"Masculino",
        is_new:true,
        image: '9.png'
      },{
        name:"Top Miley",
        description:"Corpiño deportivo femenino hecho con una tela elástica y absorbente.",
        price: 6500,
        category:"Femenino",
        is_new:true,
        image: '15.png'
      },{
        name:"Conjunto Ashley",
        description:"Conjunto deportivo. Incluye corpiño deportivo de tela estástizada y pollera.",
        price: 17350,
        category:"Femenino",
        is_new:true,
        image: '16.png'
      },{
        name:"Bikini Flowers",
        description:"Bikini con diseño de flores. Tela resistente y duradera",
        price: 15320,
        category:"Femenino",
        is_new:true,
        image: '17.png'
      },{
        name:"Bikini Little Flowers",
        description:"Bikini con diseño de flores pequeñas. Tela resistente y duradera",
        price: 14670,
        category:"Femenino",
        is_new:false,
        image: '18.png'
      },{
        name:"Conjunto Carly",
        description:"Conjunto deportivo de media estación, hecho con algodón de excelente calidad. Incluye buzo y pantalón.",
        price: 19950,
        category:"Femenino",
        is_new:false,
        image: '19.png'
      },{
        name:"Bikini Leaf",
        description:"Bikini con diseño de hojas. Tela resistente y duradera",
        price: 14890,
        category:"Femenino",
        is_new:false,
        image: '22.png'
      },{
      name:"Conjunto Girl Can",
      description:"Conjunto deportivo de media estación, hecho con algodón de excelente calidad. Incluye buzo y pantalón.",
      price: 20765,
      category:"Femenino",
      is_new:false,
      image: '23.png'
    },{
      name:"Biker Jazmin",
      description:"Calza biker. Tela resistente y duradera, de excelente calidad.",
      price: 10320,
      category:"Femenino",
      is_new:false,
      image: '24.png'
    },{
      name:"Calza Girl Power",
      description:"Calza deportiva larga, hecha con algodón de excelente calidad.",
      price: 15086,
      category:"Femenino",
      is_new:false,
      image: '25.png'
    },{
      name: "Top Lia",
      description:"Corpiño deportivo femenino hecho con una tela elástica y absorbente.",
      price: 9754,
      category:"Femenino",
      is_new:false,
      image: '39.png'
    },{
      name: "Conjunto Mary",
      description:"Conjunto deportivo hecho con algodón de excelente calidad. Incluye calza y corpiño deportivo.",
      price: 18730,
      category:"Femenino",
      is_new:false,
      image: '31.png'
    },{
      name: "Calza Paris",
      description:"Calza deportiva larga, hecha con algodón de excelente calidad.",
      price: 12503,
      category:"Femenino",
      is_new:false,
      image: '32.png'
    },{
      name: "Conjunto Streaky",
      description:"Conjunto deportivo hecho con algodón de excelente calidad. Incluye calza y corpiño deportivo.",
      price: 24342,
      category:"Femenino",
      is_new:false,
      image: '33.png'
    },{
      name: "Malla Ariel",
      description:"Malla enteriza. Tela resistente y duradera",
      price: 13861,
      category:"Femenino",
      is_new:false,
      image: '34.png'
    },{
      name: "Remera Harry",
      description:"Remera deportiva. Hecha con una tela fresca y cómoda para realizar actividad física",
      price: 15000,
      category:"Unisex",
      is_new:false,
      image: '59.png'
    },{
      name: "Malla Lily",
      description:"Malla enteriza con vuelitos en los hombros. Tela resistente y duradera",
      price: 14780,
      category:"Femenino",
      is_new:true,
      image: '35.png'
    },{
      name: "Calza After School",
      description:"Calza deportiva larga, hecha con algodón de excelente calidad.",
      price: 13864,
      category:"Femenino",
      is_new:false,
      image: '36.png'
    },{
      name: "Conjunto Love",
      description:"Conjunto deportivo hecho con algodón de excelente calidad. Incluye calza y corpiño deportivo.",
      price: 18794,
      category:"Femenino",
      is_new:false,
      image: '40.png'
    },{
      name: "Calza Emily",
      description:"Calza deportiva corta, hecha con algodón de excelente calidad.",
      price: 17649,
      category:"Femenino",
      is_new:false,
      image: '39.png'
    },{
      name: "Conjunto Amanda",
      description:"Conjunto deportivo hecho con algodón de excelente calidad. Incluye calza y top deportivo.",
      price: 21543,
      category:"Femenino",
      is_new:false,
      image: '41.png'
    },{
      name: "Conjunto Mia",
      description:"Conjunto deportivo hecho con algodón de excelente calidad. Incluye calza y corpiño deportivo.",
      price: 24835,
      category:"Femenino",
      is_new:false,
      image: '43.png'
    },{
      name: "Calza Larga Merida",
      description:"Calza deportiva larga. Tela resistente y duradera, de excelente calidad.",
      price: 14930,
      category:"Femenino",
      is_new:false,
      image: '24.png'
    },{
      name: "Conjunto Thomas",
      description:"Conjunto deportivo de invierno, hecho con algodón de excelente calidad. Incluye buzo y pantalón.",
      price: 22345,
      category:"Masculino",
      is_new:false,
      image: '12.png'
    },{
      name: "Jogging Black",
      description:"Pantalón de jogging, hecho con algodón de excelente calidad.",
      price: 14543,
      category:"Masculino",
      is_new:false,
      image: '44.png'
    },{
      name: "Conjunto Keep Active",
      description:"Conjunto deportivo de invierno, hecho con algodón de excelente calidad. Incluye buzo y pantalón.",
      price: 23875,
      category:"Masculino",
      is_new:false,
      image: '45.png'
    },{
      name: "Conjunto is New Generation",
      description:"Conjunto deportivo de media estación, hecho con algodón de excelente calidad. Incluye short y buzo.",
      price: 21756,
      category:"Masculino",
      is_new:false,
      image: '46.png'
    },{
      name: "Conjunto Brooklyn",
      description:"Conjunto deportivo de media estación, hecho con algodón de excelente calidad. Incluye short y pantalón.",
      price: 18130,
      category:"Masculino",
      is_new:false,
      image: '47.png'
    },{
      name: "Conjunto Ray",
      description:"Conjunto deportivo de invierno, hecho con algodón de excelente calidad. Incluye remera y short.",
      price: 20840,
      category:"Unisex",
      is_new:false,
      image: '48.png'
    },{
      name: "Remera Jimmy",
      description:"Remera deportiva. Hecha con una tela fresca y cómoda para realizar actividad física",
      price: 7320,
      category:"Masculino",
      is_new:false,
      image: '63.png'
    },{
      name: "Conjunto Timmy",
      description:"Conjunto deportivo de invierno, hecho con algodón de excelente calidad. Incluye buzo y pantalón.",
      price: 21543,
      category:"Unisex",
      is_new:false,
      image: '49.png'
    },{
      name: "Conjunto Jackson",
      description:"Conjunto deportivo de verano, hecho con algodón de excelente calidad. Incluye remera y short.",
      price: 16429,
      category:"Masculino",
      is_new:false,
      image: '50.png'
    },{
      name: "Short de baño Arthur",
      description:"Traje de baño masculino con diseño de flores. Tela resistente y durardera.",
      price: 13542,
      category:"Masculino",
      is_new:false,
      image: '51.png'
    },{
      name: "Short de baño Timothy",
      description:"Traje de baño masculino con diseño de flores. Tela resistente y durardera.",
      price: 12973,
      category:"Masculino",
      is_new:false,
      image: '52.png'
    },{
      name: "Conjunto Mckenzie",
      description:"Conjunto deportivo de invierno, hecho con algodón de excelente calidad. Incluye buzo y pantalón.",
      price: 24946,
      category:"Unisex",
      is_new:false,
      image: '53.png'
    },{
      name: "Conjunto Fast Champion",
      description:"Conjunto deportivo de invierno, hecho con algodón de excelente calidad. Incluye buzo y pantalón.",
      price: 19650,
      category:"Masculino",
      is_new:false,
      image: '54.png'
    },{
      name: "Short de baño Ocean",
      description:"Traje de baño masculino con diseño de flores. Tela resistente y durardera.",
      price: 13168,
      category:"Masculino",
      is_new:false,
      image: '55.png'
    },{
      name: "Remera Peter",
      description:"Remera deportiva. Hecha con una tela fresca y cómoda para realizar actividad física",
      price: 7480,
      category:"Unisex",
      is_new:false,
      image: '57.png'
    },{
      name: "Traje de Neopren Robert",
      description:"Traje de baño de neopren. Tela resistente y duradera",
      price: 28918,
      category:"Masculino",
      is_new:false,
      image: '58.png'
    },{
      name: "Remera Gray",
      description:"Remera deportiva. Hecha con una tela fresca y cómoda para realizar actividad física",
      price: 8300,
      category:"Unisex",
      is_new:false,
      image: '60.png'
    },{
      name: "Remera Milton",
      description:"Remera deportiva. Hecha con una tela fresca y cómoda para realizar actividad física",
      price: 6789,
      category:"Unisex",
      is_new:false,
      image: '61.png'
    },{
      name: "Remera August",
      description:"Remera deportiva. Hecha con una tela fresca y cómoda para realizar actividad física",
      price: 6800,
      category:"Unisex",
      is_new:false,
      image: '62.png'
    },{
      name: "Short de baño Mauie",
      description:"Traje de baño masculino con diseño de flores. Tela resistente y durardera.",
      price: 9540,
      category:"Masculino",
      is_new:false,
      image: '63.png'
    },{
      name: "Remera Zack",
      description: "Remera deportiva. Hecha con una tela fresca y cómoda para realizar actividad física",
      price: 6937,
      category:"Masculino",
      is_new:false,
      image: '64.png'
    },{
      name: "Conjunto Tommy",
      description:"Conjunto deportivo de verano, hecho con algodón de excelente calidad. Incluye remera y short de baño.",
      price: 18765,
      category:"Masculino",
      is_new:false,
      image: '66.png'
    },{
      name: "Conjunto Oliver",
      description:"Conjunto deportivo de verano, hecho con algodón de excelente calidad. Incluye remera y short.",
      price: 7098,
      category:"Masculino",
      is_new:false,
      image: '67.png'
    }]
    
    await queryInterface.bulkInsert('products', products)
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('products', null, {});
  }
};
