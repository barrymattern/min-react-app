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
        name: faker.random.words(),
        commentColor: '#6A9955',
        funcKeywordColor: '#569CD6',
        funcNameColor: '#DCDCAA',
        roundBraceColor: '#d4d4d4',
        parameterColor: '#9CDCFE',
        curlyBraceColor: '#d4d4d4',
        letConstColor: '#569CD6',
        variableColor: '#9CDCFE',
        operatorColor: '#d4d4d4',
        numberColor: '#B5CEA8',
        punctuationColor: '#d4d4d4',
        fatArrowColor: '#569CD6',
        methodColor: '#DCDCAA',
        stringColor: '#CE9178',
        comment: faker.lorem.paragraph(),
        likes: 5,
        user_id: user1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: faker.random.words(),
        commentColor: '#6A9955',
        funcKeywordColor: '#569CD6',
        funcNameColor: '#DCDCAA',
        roundBraceColor: '#d4d4d4',
        parameterColor: '#9CDCFE',
        curlyBraceColor: '#d4d4d4',
        letConstColor: '#569CD6',
        variableColor: '#9CDCFE',
        operatorColor: '#d4d4d4',
        numberColor: '#B5CEA8',
        punctuationColor: '#d4d4d4',
        fatArrowColor: '#569CD6',
        methodColor: '#DCDCAA',
        stringColor: '#CE9178',
        comment: null,
        likes: 0,
        user_id: user1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: faker.random.words(),
        commentColor: '#6A9955',
        funcKeywordColor: '#569CD6',
        funcNameColor: '#DCDCAA',
        roundBraceColor: '#d4d4d4',
        parameterColor: '#9CDCFE',
        curlyBraceColor: '#d4d4d4',
        letConstColor: '#569CD6',
        variableColor: '#9CDCFE',
        operatorColor: '#d4d4d4',
        numberColor: '#B5CEA8',
        punctuationColor: '#d4d4d4',
        fatArrowColor: '#569CD6',
        methodColor: '#DCDCAA',
        stringColor: '#CE9178',
        comment: faker.lorem.paragraph(),
        likes: 2,
        user_id: user1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: faker.random.words(),
        commentColor: '#6A9955',
        funcKeywordColor: '#569CD6',
        funcNameColor: '#DCDCAA',
        roundBraceColor: '#d4d4d4',
        parameterColor: '#9CDCFE',
        curlyBraceColor: '#d4d4d4',
        letConstColor: '#569CD6',
        variableColor: '#9CDCFE',
        operatorColor: '#d4d4d4',
        numberColor: '#B5CEA8',
        punctuationColor: '#d4d4d4',
        fatArrowColor: '#569CD6',
        methodColor: '#DCDCAA',
        stringColor: '#CE9178',
        comment: null,
        likes: 1,
        user_id: user2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: faker.random.words(),
        commentColor: '#6A9955',
        funcKeywordColor: '#569CD6',
        funcNameColor: '#DCDCAA',
        roundBraceColor: '#d4d4d4',
        parameterColor: '#9CDCFE',
        curlyBraceColor: '#d4d4d4',
        letConstColor: '#569CD6',
        variableColor: '#9CDCFE',
        operatorColor: '#d4d4d4',
        numberColor: '#B5CEA8',
        punctuationColor: '#d4d4d4',
        fatArrowColor: '#569CD6',
        methodColor: '#DCDCAA',
        stringColor: '#CE9178',
        comment: faker.lorem.paragraph(),
        likes: 7,
        user_id: user2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: faker.random.words(),
        commentColor: '#6A9955',
        funcKeywordColor: '#569CD6',
        funcNameColor: '#DCDCAA',
        roundBraceColor: '#d4d4d4',
        parameterColor: '#9CDCFE',
        curlyBraceColor: '#d4d4d4',
        letConstColor: '#569CD6',
        variableColor: '#9CDCFE',
        operatorColor: '#d4d4d4',
        numberColor: '#B5CEA8',
        punctuationColor: '#d4d4d4',
        fatArrowColor: '#569CD6',
        methodColor: '#DCDCAA',
        stringColor: '#CE9178',
        comment: null,
        likes: 0,
        user_id: user2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: faker.random.words(),
        commentColor: '#6A9955',
        funcKeywordColor: '#569CD6',
        funcNameColor: '#DCDCAA',
        roundBraceColor: '#d4d4d4',
        parameterColor: '#9CDCFE',
        curlyBraceColor: '#d4d4d4',
        letConstColor: '#569CD6',
        variableColor: '#9CDCFE',
        operatorColor: '#d4d4d4',
        numberColor: '#B5CEA8',
        punctuationColor: '#d4d4d4',
        fatArrowColor: '#569CD6',
        methodColor: '#DCDCAA',
        stringColor: '#CE9178',
        comment: faker.lorem.paragraph(),
        likes: 29,
        user_id: user3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: faker.random.words(),
        commentColor: '#6A9955',
        funcKeywordColor: '#569CD6',
        funcNameColor: '#DCDCAA',
        roundBraceColor: '#d4d4d4',
        parameterColor: '#9CDCFE',
        curlyBraceColor: '#d4d4d4',
        letConstColor: '#569CD6',
        variableColor: '#9CDCFE',
        operatorColor: '#d4d4d4',
        numberColor: '#B5CEA8',
        punctuationColor: '#d4d4d4',
        fatArrowColor: '#569CD6',
        methodColor: '#DCDCAA',
        stringColor: '#CE9178',
        comment: faker.lorem.paragraph(),
        likes: 47,
        user_id: user3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: faker.random.words(),
        commentColor: '#6A9955',
        funcKeywordColor: '#569CD6',
        funcNameColor: '#DCDCAA',
        roundBraceColor: '#d4d4d4',
        parameterColor: '#9CDCFE',
        curlyBraceColor: '#d4d4d4',
        letConstColor: '#569CD6',
        variableColor: '#9CDCFE',
        operatorColor: '#d4d4d4',
        numberColor: '#B5CEA8',
        punctuationColor: '#d4d4d4',
        fatArrowColor: '#569CD6',
        methodColor: '#DCDCAA',
        stringColor: '#CE9178',
        comment: faker.lorem.paragraph(),
        likes: 34,
        user_id: user3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: faker.random.words(),
        commentColor: '#6A9955',
        funcKeywordColor: '#569CD6',
        funcNameColor: '#DCDCAA',
        roundBraceColor: '#d4d4d4',
        parameterColor: '#9CDCFE',
        curlyBraceColor: '#d4d4d4',
        letConstColor: '#569CD6',
        variableColor: '#9CDCFE',
        operatorColor: '#d4d4d4',
        numberColor: '#B5CEA8',
        punctuationColor: '#d4d4d4',
        fatArrowColor: '#569CD6',
        methodColor: '#DCDCAA',
        stringColor: '#CE9178',
        comment: null,
        likes: 14,
        user_id: user4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: faker.random.words(),
        commentColor: '#6A9955',
        funcKeywordColor: '#569CD6',
        funcNameColor: '#DCDCAA',
        roundBraceColor: '#d4d4d4',
        parameterColor: '#9CDCFE',
        curlyBraceColor: '#d4d4d4',
        letConstColor: '#569CD6',
        variableColor: '#9CDCFE',
        operatorColor: '#d4d4d4',
        numberColor: '#B5CEA8',
        punctuationColor: '#d4d4d4',
        fatArrowColor: '#569CD6',
        methodColor: '#DCDCAA',
        stringColor: '#CE9178',
        comment: faker.lorem.paragraph(),
        likes: 79,
        user_id: user4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: faker.random.words(),
        commentColor: '#6A9955',
        funcKeywordColor: '#569CD6',
        funcNameColor: '#DCDCAA',
        roundBraceColor: '#d4d4d4',
        parameterColor: '#9CDCFE',
        curlyBraceColor: '#d4d4d4',
        letConstColor: '#569CD6',
        variableColor: '#9CDCFE',
        operatorColor: '#d4d4d4',
        numberColor: '#B5CEA8',
        punctuationColor: '#d4d4d4',
        fatArrowColor: '#569CD6',
        methodColor: '#DCDCAA',
        stringColor: '#CE9178',
        comment: null,
        likes: 28,
        user_id: user4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: faker.random.words(),
        commentColor: '#6A9955',
        funcKeywordColor: '#569CD6',
        funcNameColor: '#DCDCAA',
        roundBraceColor: '#d4d4d4',
        parameterColor: '#9CDCFE',
        curlyBraceColor: '#d4d4d4',
        letConstColor: '#569CD6',
        variableColor: '#9CDCFE',
        operatorColor: '#d4d4d4',
        numberColor: '#B5CEA8',
        punctuationColor: '#d4d4d4',
        fatArrowColor: '#569CD6',
        methodColor: '#DCDCAA',
        stringColor: '#CE9178',
        comment: faker.lorem.paragraph(),
        likes: 4,
        user_id: user5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: faker.random.words(),
        commentColor: '#6A9955',
        funcKeywordColor: '#569CD6',
        funcNameColor: '#DCDCAA',
        roundBraceColor: '#d4d4d4',
        parameterColor: '#9CDCFE',
        curlyBraceColor: '#d4d4d4',
        letConstColor: '#569CD6',
        variableColor: '#9CDCFE',
        operatorColor: '#d4d4d4',
        numberColor: '#B5CEA8',
        punctuationColor: '#d4d4d4',
        fatArrowColor: '#569CD6',
        methodColor: '#DCDCAA',
        stringColor: '#CE9178',
        comment: faker.lorem.paragraph(),
        likes: 0,
        user_id: user5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: faker.random.words(),
        commentColor: '#6A9955',
        funcKeywordColor: '#569CD6',
        funcNameColor: '#DCDCAA',
        roundBraceColor: '#d4d4d4',
        parameterColor: '#9CDCFE',
        curlyBraceColor: '#d4d4d4',
        letConstColor: '#569CD6',
        variableColor: '#9CDCFE',
        operatorColor: '#d4d4d4',
        numberColor: '#B5CEA8',
        punctuationColor: '#d4d4d4',
        fatArrowColor: '#569CD6',
        methodColor: '#DCDCAA',
        stringColor: '#CE9178',
        comment: null,
        likes: 9,
        user_id: user5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: faker.random.words(),
        commentColor: '#6A9955',
        funcKeywordColor: '#569CD6',
        funcNameColor: '#DCDCAA',
        roundBraceColor: '#d4d4d4',
        parameterColor: '#9CDCFE',
        curlyBraceColor: '#d4d4d4',
        letConstColor: '#569CD6',
        variableColor: '#9CDCFE',
        operatorColor: '#d4d4d4',
        numberColor: '#B5CEA8',
        punctuationColor: '#d4d4d4',
        fatArrowColor: '#569CD6',
        methodColor: '#DCDCAA',
        stringColor: '#CE9178',
        comment: null,
        likes: 0,
        user_id: user6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: faker.random.words(),
        commentColor: '#6A9955',
        funcKeywordColor: '#569CD6',
        funcNameColor: '#DCDCAA',
        roundBraceColor: '#d4d4d4',
        parameterColor: '#9CDCFE',
        curlyBraceColor: '#d4d4d4',
        letConstColor: '#569CD6',
        variableColor: '#9CDCFE',
        operatorColor: '#d4d4d4',
        numberColor: '#B5CEA8',
        punctuationColor: '#d4d4d4',
        fatArrowColor: '#569CD6',
        methodColor: '#DCDCAA',
        stringColor: '#CE9178',
        comment: faker.lorem.paragraph(),
        likes: 58,
        user_id: user6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: faker.random.words(),
        commentColor: '#6A9955',
        funcKeywordColor: '#569CD6',
        funcNameColor: '#DCDCAA',
        roundBraceColor: '#d4d4d4',
        parameterColor: '#9CDCFE',
        curlyBraceColor: '#d4d4d4',
        letConstColor: '#569CD6',
        variableColor: '#9CDCFE',
        operatorColor: '#d4d4d4',
        numberColor: '#B5CEA8',
        punctuationColor: '#d4d4d4',
        fatArrowColor: '#569CD6',
        methodColor: '#DCDCAA',
        stringColor: '#CE9178',
        comment: faker.lorem.paragraph(),
        likes: 2,
        user_id: user6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: faker.random.words(),
        commentColor: '#6A9955',
        funcKeywordColor: '#569CD6',
        funcNameColor: '#DCDCAA',
        roundBraceColor: '#d4d4d4',
        parameterColor: '#9CDCFE',
        curlyBraceColor: '#d4d4d4',
        letConstColor: '#569CD6',
        variableColor: '#9CDCFE',
        operatorColor: '#d4d4d4',
        numberColor: '#B5CEA8',
        punctuationColor: '#d4d4d4',
        fatArrowColor: '#569CD6',
        methodColor: '#DCDCAA',
        stringColor: '#CE9178',
        comment: null,
        likes: 26,
        user_id: user7,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: faker.random.words(),
        commentColor: '#6A9955',
        funcKeywordColor: '#569CD6',
        funcNameColor: '#DCDCAA',
        roundBraceColor: '#d4d4d4',
        parameterColor: '#9CDCFE',
        curlyBraceColor: '#d4d4d4',
        letConstColor: '#569CD6',
        variableColor: '#9CDCFE',
        operatorColor: '#d4d4d4',
        numberColor: '#B5CEA8',
        punctuationColor: '#d4d4d4',
        fatArrowColor: '#569CD6',
        methodColor: '#DCDCAA',
        stringColor: '#CE9178',
        comment: null,
        likes: 83,
        user_id: user7,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: faker.random.words(),
        commentColor: '#6A9955',
        funcKeywordColor: '#569CD6',
        funcNameColor: '#DCDCAA',
        roundBraceColor: '#d4d4d4',
        parameterColor: '#9CDCFE',
        curlyBraceColor: '#d4d4d4',
        letConstColor: '#569CD6',
        variableColor: '#9CDCFE',
        operatorColor: '#d4d4d4',
        numberColor: '#B5CEA8',
        punctuationColor: '#d4d4d4',
        fatArrowColor: '#569CD6',
        methodColor: '#DCDCAA',
        stringColor: '#CE9178',
        comment: null,
        likes: 45,
        user_id: user7,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: faker.random.words(),
        commentColor: '#6A9955',
        funcKeywordColor: '#569CD6',
        funcNameColor: '#DCDCAA',
        roundBraceColor: '#d4d4d4',
        parameterColor: '#9CDCFE',
        curlyBraceColor: '#d4d4d4',
        letConstColor: '#569CD6',
        variableColor: '#9CDCFE',
        operatorColor: '#d4d4d4',
        numberColor: '#B5CEA8',
        punctuationColor: '#d4d4d4',
        fatArrowColor: '#569CD6',
        methodColor: '#DCDCAA',
        stringColor: '#CE9178',
        comment: faker.lorem.paragraph(),
        likes: 7,
        user_id: user8,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: faker.random.words(),
        commentColor: '#6A9955',
        funcKeywordColor: '#569CD6',
        funcNameColor: '#DCDCAA',
        roundBraceColor: '#d4d4d4',
        parameterColor: '#9CDCFE',
        curlyBraceColor: '#d4d4d4',
        letConstColor: '#569CD6',
        variableColor: '#9CDCFE',
        operatorColor: '#d4d4d4',
        numberColor: '#B5CEA8',
        punctuationColor: '#d4d4d4',
        fatArrowColor: '#569CD6',
        methodColor: '#DCDCAA',
        stringColor: '#CE9178',
        comment: null,
        likes: 13,
        user_id: user8,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: faker.random.words(),
        commentColor: '#6A9955',
        funcKeywordColor: '#569CD6',
        funcNameColor: '#DCDCAA',
        roundBraceColor: '#d4d4d4',
        parameterColor: '#9CDCFE',
        curlyBraceColor: '#d4d4d4',
        letConstColor: '#569CD6',
        variableColor: '#9CDCFE',
        operatorColor: '#d4d4d4',
        numberColor: '#B5CEA8',
        punctuationColor: '#d4d4d4',
        fatArrowColor: '#569CD6',
        methodColor: '#DCDCAA',
        stringColor: '#CE9178',
        comment: null,
        likes: 18,
        user_id: user8,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: faker.random.words(),
        commentColor: '#6A9955',
        funcKeywordColor: '#569CD6',
        funcNameColor: '#DCDCAA',
        roundBraceColor: '#d4d4d4',
        parameterColor: '#9CDCFE',
        curlyBraceColor: '#d4d4d4',
        letConstColor: '#569CD6',
        variableColor: '#9CDCFE',
        operatorColor: '#d4d4d4',
        numberColor: '#B5CEA8',
        punctuationColor: '#d4d4d4',
        fatArrowColor: '#569CD6',
        methodColor: '#DCDCAA',
        stringColor: '#CE9178',
        comment: faker.lorem.paragraph(),
        likes: 186,
        user_id: user9,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: faker.random.words(),
        commentColor: '#6A9955',
        funcKeywordColor: '#569CD6',
        funcNameColor: '#DCDCAA',
        roundBraceColor: '#d4d4d4',
        parameterColor: '#9CDCFE',
        curlyBraceColor: '#d4d4d4',
        letConstColor: '#569CD6',
        variableColor: '#9CDCFE',
        operatorColor: '#d4d4d4',
        numberColor: '#B5CEA8',
        punctuationColor: '#d4d4d4',
        fatArrowColor: '#569CD6',
        methodColor: '#DCDCAA',
        stringColor: '#CE9178',
        comment: faker.lorem.paragraph(),
        likes: 147,
        user_id: user9,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: faker.random.words(),
        commentColor: '#6A9955',
        funcKeywordColor: '#569CD6',
        funcNameColor: '#DCDCAA',
        roundBraceColor: '#d4d4d4',
        parameterColor: '#9CDCFE',
        curlyBraceColor: '#d4d4d4',
        letConstColor: '#569CD6',
        variableColor: '#9CDCFE',
        operatorColor: '#d4d4d4',
        numberColor: '#B5CEA8',
        punctuationColor: '#d4d4d4',
        fatArrowColor: '#569CD6',
        methodColor: '#DCDCAA',
        stringColor: '#CE9178',
        comment: faker.lorem.paragraph(),
        likes: 120,
        user_id: user9,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: faker.random.words(),
        commentColor: '#6A9955',
        funcKeywordColor: '#569CD6',
        funcNameColor: '#DCDCAA',
        roundBraceColor: '#d4d4d4',
        parameterColor: '#9CDCFE',
        curlyBraceColor: '#d4d4d4',
        letConstColor: '#569CD6',
        variableColor: '#9CDCFE',
        operatorColor: '#d4d4d4',
        numberColor: '#B5CEA8',
        punctuationColor: '#d4d4d4',
        fatArrowColor: '#569CD6',
        methodColor: '#DCDCAA',
        stringColor: '#CE9178',
        comment: faker.lorem.paragraph(),
        likes: 161,
        user_id: user10,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: faker.random.words(),
        commentColor: '#6A9955',
        funcKeywordColor: '#569CD6',
        funcNameColor: '#DCDCAA',
        roundBraceColor: '#d4d4d4',
        parameterColor: '#9CDCFE',
        curlyBraceColor: '#d4d4d4',
        letConstColor: '#569CD6',
        variableColor: '#9CDCFE',
        operatorColor: '#d4d4d4',
        numberColor: '#B5CEA8',
        punctuationColor: '#d4d4d4',
        fatArrowColor: '#569CD6',
        methodColor: '#DCDCAA',
        stringColor: '#CE9178',
        comment: faker.lorem.paragraph(),
        likes: 183,
        user_id: user10,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: faker.random.words(),
        commentColor: '#6A9955',
        funcKeywordColor: '#569CD6',
        funcNameColor: '#DCDCAA',
        roundBraceColor: '#d4d4d4',
        parameterColor: '#9CDCFE',
        curlyBraceColor: '#d4d4d4',
        letConstColor: '#569CD6',
        variableColor: '#9CDCFE',
        operatorColor: '#d4d4d4',
        numberColor: '#B5CEA8',
        punctuationColor: '#d4d4d4',
        fatArrowColor: '#569CD6',
        methodColor: '#DCDCAA',
        stringColor: '#CE9178',
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
    await queryInterface.bulkDelete('Favorites');
  }
};
