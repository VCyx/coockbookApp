const recipes2 = [
  {
    id: "1",
    createdDate: new Date().valueOf(),
    name: "Frozen yoghurt",
    parentId: "3",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem blanditiis, hic id iste laboriosam magnam obcaecati quidem rerum voluptatem voluptatibus?",
    children: [],
  },
  {
    id: "2",
    createdDate: new Date().valueOf(),
    name: "Ice cream sandwich",
    parentId: "1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem blanditiis, hic id iste laboriosam magnam obcaecati quidem rerum voluptatem voluptatibus?",
    children: [],
  },
  {
    id: "3",
    createdDate: new Date().valueOf(),
    name: "Eclair",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem blanditiis, hic id iste laboriosam magnam obcaecati quidem rerum voluptatem voluptatibus?",
    children: [],
  },
  {
    id: "7",
    createdDate: new Date().valueOf(),
    name: "Frozen yoghurt with meat",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem blanditiis, hic id iste laboriosam magnam obcaecati quidem rerum voluptatem voluptatibus?",
    children: [],
  },
];

module.exports = recipes2;
