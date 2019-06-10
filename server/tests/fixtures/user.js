// Register
export const validRegisterFixture = [
    {
        email: 'reymond@gmail.com',
        firstname: 'Reymond',
        lastname: 'Brad',
        password: 'bradpass',
        address: '14 belvi street,Lagos'
    },
    {
        email: 'karimo@gmail.com',
        firstname: 'karim',
        lastname: 'mocha',
        password: 'mochapass',
        address: '15, opebi street, GRA, Abeokuta'
    },
    {
      email: 'admin@gmail.com',
      firstname: 'malboro',
      lastname: 'borned',
      password: 'adminpass',
      address: '25, raymond street, Lagos',
      isAdmin: true
    }
];

export const inValidRegisterFixture = [
    // undefined email 0
    {
        firstname: 'Reymond',
        lastname: 'Brad',
        password: 'bradpass',
        address: 'bradpass'
    },
    
    // spaced email 1
    {
      email: 'reymond @gmail.com',
      firstname: 'Reymond',
      lastname: 'Brad',
      password: 'bradpass',
      address: '14 belvi street,Lagos'
    },

    // invalid email format 2
    {
        email: 'reymondgmail.com',
        firstname: 'Reymond',
        lastname: 'Brad',
        password: 'bradpass',
        address: '14 belvi street,Lagos'
    },
    // Existing email 3
    {
      email: 'reymond@gmail.com',
      firstname: 'Reymond',
      lastname: 'Brad',
      password: 'bradpass',
      address: '14 belvi street,Lagos'
    },

    // Firstname
    // undefined firstname 4
    {
        email: 'reymond@gmail.com',
        lastname: 'Brad',
        password: 'bradpass',
        address: '14 belvi street,Lagos'
    },
    // spaced firstname 5
    {
        email: 'reymond@gmail.com',
        firstname: 'Rey mond',
        lastname: 'Reymond',
        password: 'bradpass',
        address: '14 belvi street,Lagos'
    },
    // short firstname length 6
    {
        email: 'reymond@gmail.com',
        firstname: 'R',
        lastname: 'Reymond',
        password: 'bradpass',
        address: '14 belvi street,Lagos'
    },

    // lastname
    // undefined lastname 7
    {
        email: 'reymond@gmail.com',
        firstname: 'Reymond',
        password: 'bradpass',
        address: '14 belvi street,Lagos'
    },
    // lastname space 8
    {
        email: 'reymond@gmail.com',
        firstname: 'Reymond',
        lastname: 'Bra d',
        password: 'bradpass',
        address: '14 belvi street,Lagos'
    },
    
    // Password
    // undefined password 9
    {
        email: 'reymond@gmail.com',
        firstname: 'Reymond',
        lastname: 'Brad',
        address: '14 belvi street,Lagos'
    },
    // short password 10
    {
        email: 'reymond@gmail.com',
        firstname: 'Reymond',
        lastname: 'Brad',
        password: 'bra',
        address: '14 belvi street,Lagos'
    },
    // address
    // undefined address 11
    {
        email: 'reymond@gmail.com',
        firstname: 'Reymond',
        lastname: 'Brad',
        password: 'bradpass'
    }
];