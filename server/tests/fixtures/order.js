export const validOrderFixture = [
    {
        amount: '2000000',
        car_id: '2'
    }
];

export const invalidOrderFixture = [
    {
        amount: '',
        car_id: 1
    },
    {
        amount: '333000.@',
        car_id: 1
    }
];