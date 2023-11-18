let nuevosIngresos = [{
    src: '/img/nenes/10.png',
    price: '$12.500',
    description: 'Short de baño Shark'
},
{
    src: '/img/nenes/13.png',
    price: '$13.000',
    description: 'Short de baño Flowers'
},
{
    src: '/img/nenes/11.png',
    price: '$14.080',
    description: 'Remera Ryan'
},
{
    src: '/img/nenes/14.png',
    price: '$25.290',
    description: "Conjunto Don't worry"
},
{
    src: '/img/nenas/15.png',
    price: '$6.500',
    description: 'Top Miley'
},
{
    src: '/img/nenas/16.png',
    price: '$17.350',
    description: 'Conjunto Ashley'
},
{
    src: '/img/nenas/14.png',
    price: '$14.780',
    description: 'Malla Pink'
},
{
    src: '/img/nenas/17.png',
    price: '$15.320',
    description: 'Bikini Flowers'
}
];

const controller = {
    home: (req, res) => {
        return res.render('home', {nuevosIngresos: nuevosIngresos})
    },
}

module.exports = controller;