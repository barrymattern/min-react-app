'use strict';
const faker = require('faker');
const bcrypt = require('bcryptjs');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */

    const users = await queryInterface.bulkInsert('Users', [
      {
        email: 'demo@demo.com',
        username: 'demo',
        hashedPassword: bcrypt.hashSync('password'),
        profileImageUrl: null,
        tokenId: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: faker.internet.email(),
        username: faker.internet.userName(),
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
        profileImageUrl: null,
        tokenId: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: faker.internet.email(),
        username: faker.internet.userName(),
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
        profileImageUrl: null,
        tokenId: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: faker.internet.email(),
        username: faker.internet.userName(),
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
        profileImageUrl: null,
        tokenId: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: faker.internet.email(),
        username: faker.internet.userName(),
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
        profileImageUrl: null,
        tokenId: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: faker.internet.email(),
        username: faker.internet.userName(),
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
        profileImageUrl: null,
        tokenId: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: faker.internet.email(),
        username: faker.internet.userName(),
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
        profileImageUrl: null,
        tokenId: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: faker.internet.email(),
        username: faker.internet.userName(),
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
        profileImageUrl: null,
        tokenId: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: faker.internet.email(),
        username: faker.internet.userName(),
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
        profileImageUrl: null,
        tokenId: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: faker.internet.email(),
        username: faker.internet.userName(),
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
        profileImageUrl: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {
      returning:true
    });

    const user1 = users[0].id;
    const user2 = users[1].id;
    const user3 = users[2].id;
    const user4 = users[3].id;
    const user5 = users[4].id;
    const user6 = users[5].id;
    const user7 = users[6].id;
    const user8 = users[7].id;
    const user9 = users[8].id;
    const user10 = users[9].id;

    // 10 users, each with 3 themes
    const themes = await queryInterface.bulkInsert('Themes', [
      {
        light: false,
        comment: faker.lorem.paragraph(),
        likes: 5,
        user_id: user1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        light: false,
        comment: null,
        likes: 0,
        user_id: user1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        light: true,
        comment: faker.lorem.paragraph(),
        likes: 2,
        user_id: user1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        light: true,
        comment: null,
        likes: 1,
        user_id: user2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        light: true,
        comment: faker.lorem.paragraph(),
        likes: 7,
        user_id: user2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        light: false,
        comment: null,
        likes: 0,
        user_id: user2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        light: false,
        comment: faker.lorem.paragraph(),
        likes: 29,
        user_id: user3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        light: false,
        comment: faker.lorem.paragraph(),
        likes: 47,
        user_id: user3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        light: false,
        comment: faker.lorem.paragraph(),
        likes: 34,
        user_id: user3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        light: true,
        comment: null,
        likes: 14,
        user_id: user4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        light: true,
        comment: faker.lorem.paragraph(),
        likes: 79,
        user_id: user4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        light: true,
        comment: null,
        likes: 28,
        user_id: user4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        light: false,
        comment: faker.lorem.paragraph(),
        likes: 4,
        user_id: user5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        light: true,
        comment: faker.lorem.paragraph(),
        likes: 0,
        user_id: user5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        light: false,
        comment: null,
        likes: 9,
        user_id: user5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        light: true,
        comment: null,
        likes: 0,
        user_id: user6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        light: false,
        comment: faker.lorem.paragraph(),
        likes: 58,
        user_id: user6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        light: true,
        comment: faker.lorem.paragraph(),
        likes: 2,
        user_id: user6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        light: false,
        comment: null,
        likes: 26,
        user_id: user7,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        light: false,
        comment: null,
        likes: 83,
        user_id: user7,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        light: true,
        comment: null,
        likes: 45,
        user_id: user7,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        light: true,
        comment: faker.lorem.paragraph(),
        likes: 7,
        user_id: user8,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        light: true,
        comment: null,
        likes: 13,
        user_id: user8,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        light: false,
        comment: null,
        likes: 18,
        user_id: user8,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        light: true,
        comment: faker.lorem.paragraph(),
        likes: 186,
        user_id: user9,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        light: true,
        comment: faker.lorem.paragraph(),
        likes: 147,
        user_id: user9,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        light: true,
        comment: faker.lorem.paragraph(),
        likes: 120,
        user_id: user9,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        light: true,
        comment: faker.lorem.paragraph(),
        likes: 161,
        user_id: user10,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        light: true,
        comment: faker.lorem.paragraph(),
        likes: 183,
        user_id: user10,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        light: true,
        comment: faker.lorem.paragraph(),
        likes: 117,
        user_id: user10,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {
      returning: true
    });

    const theme1 = themes[0].id;
    const theme2 = themes[1].id;
    const theme3 = themes[2].id;
    const theme4 = themes[3].id;
    const theme5 = themes[4].id;
    const theme6 = themes[5].id;
    const theme7 = themes[6].id;
    const theme8 = themes[7].id;
    const theme9 = themes[8].id;
    const theme10 = themes[9].id;

    const theme_attributes = queryInterface.bulkInsert('Theme_Attributes', [
      // 1. Dark – Horizon Italic
      {
        theme_id: theme1,
        property: 'functions',
        value: '#25B0BCE6',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        theme_id: theme1,
        property: 'keywords',
        value: '#B877DBE6',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        theme_id: theme1,
        property: 'numbers',
        value: '#FAC29AE6',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        theme_id: theme1,
        property: 'strings',
        value: '#FAB795E6',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        theme_id: theme1,
        property: 'types',
        value: '#FAC29AE6',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        theme_id: theme1,
        property: 'variable',
        value: '#E95678E6',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // 2. Dark – City Lights
      {
        theme_id: theme2,
        property: 'functions',
        value: '#ebbf83',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        theme_id: theme2,
        property: 'keywords',
        value: '#5ec4ff',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        theme_id: theme2,
        property: 'numbers',
        value: '#41505E',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        theme_id: theme2,
        property: 'strings',
        value: '#68A1F0',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        theme_id: theme2,
        property: 'types',
        value: '#008b94',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        theme_id: theme2,
        property: 'variable',
        value: '#b62d65',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // 3. Dark – Freezing Moon
      {
        theme_id: theme3,
        property: 'functions',
        value: '#9fbed1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        theme_id: theme3,
        property: 'keywords',
        value: '#4993b6',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        theme_id: theme3,
        property: 'numbers',
        value: '#292929',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        theme_id: theme3,
        property: 'strings',
        value: '#ce9178',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        theme_id: theme3,
        property: 'types',
        value: '#dfb1a2',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        theme_id: theme3,
        property: 'variable',
        value: '#d4d4d4',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // 4. Dark – SynthWave
      {
        theme_id: theme4,
        property: 'functions',
        value: '#36f9f6',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        theme_id: theme4,
        property: 'keywords',
        value: '#fede5d',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        theme_id: theme4,
        property: 'numbers',
        value: '#ffffff73',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        theme_id: theme4,
        property: 'strings',
        value: '#ff8b39',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        theme_id: theme4,
        property: 'types',
        value: '#fede5d',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        theme_id: theme4,
        property: 'variable',
        value: '#ff7edb',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // 5. Dark – Nord
      {
        theme_id: theme5,
        property: 'functions',
        value: '#88C0D0',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        theme_id: theme5,
        property: 'keywords',
        value: '#81A1C1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        theme_id: theme5,
        property: 'numbers',
        value: '#d8dee9cc',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        theme_id: theme5,
        property: 'strings',
        value: '#A3BE8C',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        theme_id: theme5,
        property: 'types',
        value: '#8FBCBB',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        theme_id: theme5,
        property: 'variable',
        value: '#D8DEE9',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // 6. Dark – Custom1
      {
        theme_id: theme6,
        property: 'functions',
        value: '#2274A5',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        theme_id: theme6,
        property: 'keywords',
        value: '#E7EB90',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        theme_id: theme6,
        property: 'numbers',
        value: '#FADF63',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        theme_id: theme6,
        property: 'strings',
        value: '#E6AF2E',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        theme_id: theme6,
        property: 'types',
        value: '#632B30',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        theme_id: theme6,
        property: 'variable',
        value: '#1C6087',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // 7. Dark – Custom2
      {
        theme_id: theme7,
        property: 'functions',
        value: '#FFA69E',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        theme_id: theme7,
        property: 'keywords',
        value: '#FF7E6B',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        theme_id: theme7,
        property: 'numbers',
        value: '#8C5E58',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        theme_id: theme7,
        property: 'strings',
        value: '#A9F0D1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        theme_id: theme7,
        property: 'types',
        value: '#FFF7F8',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        theme_id: theme7,
        property: 'variable',
        value: '#FF0A27',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // 8. Light – Custom1
      {
        theme_id: theme8,
        property: 'functions',
        value: '#A40E4C',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        theme_id: theme8,
        property: 'keywords',
        value: '#2C2C54',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        theme_id: theme8,
        property: 'numbers',
        value: '#ACC3A6',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        theme_id: theme8,
        property: 'strings',
        value: '#F2C9A6',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        theme_id: theme8,
        property: 'types',
        value: '#F49D6E',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        theme_id: theme8,
        property: 'variable',
        value: '#516D4A',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // 9. Light – Custom2
      {
        theme_id: theme9,
        property: 'functions',
        value: '#2E1F27',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        theme_id: theme9,
        property: 'keywords',
        value: '#854D27',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        theme_id: theme9,
        property: 'numbers',
        value: '#DD7230',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        theme_id: theme9,
        property: 'strings',
        value: '#F4C95D',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        theme_id: theme9,
        property: 'types',
        value: '#A7A125',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        theme_id: theme9,
        property: 'variable',
        value: '#86811D',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // 10. Light – Custom3
      {
        theme_id: theme10,
        property: 'functions',
        value: '#FF6B35',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        theme_id: theme10,
        property: 'keywords',
        value: '#F3A468',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        theme_id: theme10,
        property: 'numbers',
        value: '#989834',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        theme_id: theme10,
        property: 'strings',
        value: '#004E89',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        theme_id: theme10,
        property: 'types',
        value: '#73B5E8',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        theme_id: theme10,
        property: 'variable',
        value: '#F54100',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {
      returning: true
    });

    const favorites = queryInterface.bulkInsert('Favorites', [
      {
        user_id:user1,
        theme_id: theme4,
        createdAt: new Date(),
        updatedAt: new Date(), 
      },
      {
        user_id:user1,
        theme_id: theme2,
        createdAt: new Date(),
        updatedAt: new Date(), 
      },
      {
        user_id:user1,
        theme_id: theme7,
        createdAt: new Date(),
        updatedAt: new Date(), 
      },
      {
        user_id:user2,
        theme_id: theme8,
        createdAt: new Date(),
        updatedAt: new Date(), 
      },
      {
        user_id:user3,
        theme_id: theme8,
        createdAt: new Date(),
        updatedAt: new Date(), 
      },
      {
        user_id:user3,
        theme_id: theme7,
        createdAt: new Date(),
        updatedAt: new Date(), 
      },
      {
        user_id:user7,
        theme_id: theme4,
        createdAt: new Date(),
        updatedAt: new Date(), 
      },
      {
        user_id:user7,
        theme_id: theme1,
        createdAt: new Date(),
        updatedAt: new Date(), 
      },
      {
        user_id:user9,
        theme_id: theme1,
        createdAt: new Date(),
        updatedAt: new Date(), 
      },
      {
        user_id:user9,
        theme_id: theme2,
        createdAt: new Date(),
        updatedAt: new Date(), 
      },
    ], {
      returning: true
    });
  },

  down: async (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */

    await queryInterface.bulkDelete('Users');
    await queryInterface.bulkDelete('Themes');
    await queryInterface.bulkDelete('Theme_Attributes');
    await queryInterface.bulkDelete('Favorites');
  }
};
