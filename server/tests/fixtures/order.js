export const validOrderFixture = [
    {
        priceOffered: '1000000',
        carId: '2'
    }
];

export const invalidOrderFixture = [
    {
        priceOffered: '',
        carId: 2
    },
    {
        priceOffered: '2000.000*',
        carId: 2
    }
];