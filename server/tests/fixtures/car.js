export const validCarFixtures = [
    {
        state: 'new',
        //status: 'unsold',
        price: '10000000',
        manufacturer: 'Kia',
        model: 'Dehydra',
        body_type: 'car',
        img_url: 'https://res.cloudinary.com/oseun/image/upload/v1559912544/toyota-tundra.jpg'
    },
    {
        state: 'used',
        //status: 'unsold',
        price: '10000000',
        manufacturer: 'Toyota',
        model: 'Avalon',
        body_type: 'car',
        img_url: 'https://res.cloudinary.com/oseun/image/upload/v1559912544/toyota-tundra.jpg'
    }
];

export const invalidCarFixtures = [
    //state 0
    {
        price: '30000000',
        manufacturer: 'Toyota',
        model: 'Avalon',
        body_type: 'car',
        img_url: 'https://res.cloudinary.com/oseun/image/upload/v1559912544/toyota-tundra.jpg'
    },
    {
        state: 'usedd',
        price: '30000000',
        manufacturer: 'Toyota',
        model: 'Avalon',
        body_type: 'car',
        img_url: 'https://res.cloudinary.com/oseun/image/upload/v1559912544/toyota-tundra.jpg'
    },
    //price
    {
        state: 'used',
        manufacturer: 'Toyota',
        model: 'Avalon',
        body_type: 'car',
        img_url: 'https://res.cloudinary.com/oseun/image/upload/v1559912544/toyota-tundra.jpg'
    },
    {
        state: 'usedd',
        price: '3000ert.',
        manufacturer: 'Toyota',
        model: 'Avalon',
        body_type: 'car',
        img_url: 'https://res.cloudinary.com/oseun/image/upload/v1559912544/toyota-tundra.jpg'
    },
    //manufacturer
    {
        state: 'used',
        price: '30000000',
        model: 'Avalon',
        body_type: 'car',
        img_url: 'https://res.cloudinary.com/oseun/image/upload/v1559912544/toyota-tundra.jpg'
    },
    {
        state: 'used',
        price: '30000000',
        manufacturer: 'Toyota4',
        model: 'Avalon',
        body_type: 'car',
        img_url: 'https://res.cloudinary.com/oseun/image/upload/v1559912544/toyota-tundra.jpg'
    },
    //model
    {
        state: 'new',
        price: '30000000',
        manufacturer: 'Toyota',
        body_type: 'car',
        imageurl: 'https://res.cloudinary.com/oseun/image/upload/v1559912544/toyota-tundra.jpg'
    },
    {
        state: 'new',
        price: '30000000',
        manufacturer: 'Toyota',
        model: 'Avalon.34',
        body_type: 'car',
        img_url: 'https://res.cloudinary.com/oseun/image/upload/v1559912544/toyota-tundra.jpeg'
    },
    //bodytype
    {
        state: 'used',
        price: '30000000',
        manufacturer: 'Toyota',
        model: 'Avalon',
        img_url: 'https://res.cloudinary.com/oseun/image/upload/v1559912544/toyota-tundra.jpg'
    },
    {
        state: 'used',
        price: '30000000',
        manufacturer: 'Toyota',
        model: 'Avalon',
        body_type: 'ca.r',
        img_url: 'https://res.cloudinary.com/oseun/image/upload/v1559912544/toyota-tundra.jpg'
    },
    //imageurl
    {
        state: 'used',
        price: '30000000',
        manufacturer: 'Toyota',
        model: 'Avalon',
        body_type: 'car'
    }
];