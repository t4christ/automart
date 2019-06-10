export const validCarFixtures = [
    {
        state: 'new',
        price: '1000000',
        manufacturer: 'Toyota',
        model: 'Avalon',
        bodytype: 'car',
        imageurl: 'https://www.cloudinary.com/photo/toyota-car-3000/'
    },
    {
        state: 'used',
        price: '10000000',
        manufacturer: 'Honda',
        model: 'Accord',
        bodytype: 'car',
        imageurl: 'https://www.cloudinary.com/photo/honda-car-3000/'
    },
];

export const invalidCarFixtures = [
    //invalid object with state 
    {
        price: '35000000',
        manufacturer: 'Bmw',
        model: 'Classic',
        bodytype: 'car',
        imageurl: 'https://www.cloudinary.com/photo/bmw-car-39855/'
    },
    {
        state: 'usedd',
        price: '35000000',
        manufacturer: 'Bmw',
        model: 'Classic',
        bodytype: 'car',
        imageurl: 'https://www.cloudinary.com/photo/bmw-car-39855/'
    },
    //invalid object for price
    {
        state: 'used',
        manufacturer: 'Toyota',
        model: 'Avalon',
        bodytype: 'car',
        imageurl: 'https://www.cloudinary.com/photo/toyota-car-32255/'
    },
    {
        state: 'usedd',
        price: '3000ert.',
        manufacturer: 'Toyota',
        model: 'Avalon',
        bodytype: 'car',
        imageurl: 'https://www.cloudinary.com/photo/oyota-car-32255/'
    },
    // invalid object for manufacturer
    {
        state: 'used',
        price: '30000000',
        model: 'nissan',
        bodytype: 'car',
        imageurl: 'https://www.cloudinary.com/photo/nissan-car-10055/'
    },
    {
        state: 'used',
        price: '30000000',
        manufacturer: 'Toyota1',
        model: 'nissan',
        bodytype: 'car',
        imageurl: 'https://www.cloudinary.com/photo/nissan-car-10055/'
    },
    // invalid object for model
    {
        state: 'new',
        price: '30000000',
        manufacturer: 'Kia',
        bodytype: 'car',
        imageurl: 'https://www.cloudinary.com/photo/kia-car-29355/'
    },
    {
        state: 'new',
        price: '30000000',
        manufacturer: 'Kia',
        model: 'refined.77',
        bodytype: 'car',
        imageurl: 'https://www.cloudinary.com/photo/kia-car-29355/'
    },
    //invalid object for bodytype
    {
        state: 'used',
        price: '30000000',
        manufacturer: 'Landcruiser',
        model: 'bold',
        imageurl: 'https://www.cloudinary.com/photo/landcruiser-car-12455/'
    },
    {
        state: 'used',
        price: '30000000',
        manufacturer: 'Toyota',
        model: 'Avalon',
        bodytype: 'c@ar',
        imageurl: 'https://www.cloudinary.com/photo/landcruiser-car-12455/'
    },
    //invalid object for imageurl
    {
        state: 'used',
        price: '30000000',
        manufacturer: 'Padro',
        model: 'infinite',
        bodytype: 'car'
    }
];