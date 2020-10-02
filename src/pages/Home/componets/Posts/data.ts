import faker from 'faker';

const data = [
  {
    id: '1',
    avatar: 'https://github.com/EdlanioJ.png',
    data: Date.now(),
    from: 'voce',
    to: 'Unitel',
    type: 'CREDIT_PAYMENT',
    like_count: 3,
    message_count: 0,
  },

  {
    id: '2',
    avatar: faker.image.avatar(),
    data: Date.now(),
    from: '@paulo',
    to: '@francisco',
    type: 'USER_PAYMENT',
    like_count: 4,
    message_count: 0,
    like: true,
  },
  {
    id: '3',
    avatar: faker.image.avatar(),
    data: Date.now(),
    from: '@viuma',
    to: '@ajuda_paga',
    type: 'SIGN_PAYMENT',
    like_count: 0,
    message_count: 0,
  },
  {
    id: '4',
    avatar: faker.image.avatar(),
    data: Date.now(),
    from: '@dina',
    to: 'Gruve',
    type: 'STORE_PAYMENT',
    like_count: 10,
    message_count: 5,
    like: true,
  },
  {
    id: '5',
    avatar: faker.image.avatar(),
    data: Date.now(),
    from: '@dede',
    to: 'voce',
    type: 'USER_PAYMENT',
    like_count: 3,
    message_count: 0,
    description: 'Agora aguenta vagabundo... 🍭 ⏰  🔥🔥🔥🔥',
  },
];

export default data;
