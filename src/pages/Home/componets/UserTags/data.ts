import faker from 'faker';

const data = [
  { username: 'edlanioj', image: 'https://github.com/EdlanioJ.png', id: '1' },
  { username: 'mateus', image: faker.image.avatar(), id: '2' },
  { username: 'paulo', image: faker.image.avatar(), id: '3' },
  { username: 'fredd', image: faker.image.avatar(), id: '4' },
  { username: 'joaqui', image: faker.image.avatar(), id: '5' },
];

export default data;
