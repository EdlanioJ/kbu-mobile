import faker from 'faker';

const data = [
  {
    id: '1',
    name: 'Unitel',
    type: 'Recarga',
    amout: 10,
    date: Date.now(),
    avatar: faker.image.business(),
    income: false,
  },
  {
    id: '2',
    name: '@Paulo',
    type: 'Transferência',
    amout: 10,
    date: Date.now(),
    avatar: faker.image.avatar(),
    income: true,
  },
  {
    id: '3',
    name: '@Gillete',
    type: 'Transferência',
    amout: 10,
    date: Date.now(),
    avatar: faker.image.avatar(),
    income: false,
  },
  {
    id: '4',
    name: 'KFC',
    type: 'Comida',
    amout: 10,
    date: Date.now(),
    avatar: faker.image.business(),
    income: false,
  },
];

export default data;
