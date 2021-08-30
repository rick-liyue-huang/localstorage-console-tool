export const taskTypes = [
  {
    name: "task",
  },
  {
    name: "bug",
  },
];

export const tags = [
  {
    name: "initial",
  },
  {
    name: "middleterm",
  },
  {
    name: "completed",
  },
];

export const epics = [
  {
    name: "Develivery Material Form Development",
    start: new Date("2020-12-10").getTime(),
    end: new Date("2021-01-11").getTime(),
  },
  {
    name: "Delivery Map Development",
    start: new Date("2021-01-12").getTime(),
    end: new Date("2021-02-14").getTime(),
  },
  {
    name: "Delivery Map Development",
    start: new Date("2021-01-12").getTime(),
    end: new Date("2021-02-14").getTime(),
  },
];

export const kanbans = [
  {
    name: "Ready",
  },
  {
    name: "Developing",
  },
  {
    name: "Completed",
  },
];

export const users = [
  {
    name: "Rick",
    organization: "Delivery Group",
  },
  {
    name: "Leo",
    organization: "Delivery Group",
  },
  {
    name: "Claire",
    organization: "Headquarter",
  },
  {
    name: "AJ",
    organization: "Middle Platform",
  },
];

export const projects = [
  {
    name: "Delivery Management",
    personId: 1,
    organization: "Delivery Group",
    created: 1604989757139,
  },
];

export const tasks = [
  {
    name: "Register Development",
    tags: [1, 2],
    reporterId: 1,
    processorId: 2,
    epicId: 1,
    kanbanId: 1,
    favorite: true,
    typeId: 1,
    note: "try complete soon",
  },
  {
    name: "Login Development",
    tags: [2],
    reporterId: 1,
    processorId: 2,
    epicId: 1,
    kanbanId: 1,
    favorite: true,
    typeId: 1,
    note: "use JWT",
  },
  {
    name: "Unit Test",
    tags: [1],
    reporterId: 1,
    processorId: 2,
    epicId: 1,
    kanbanId: 1,
    favorite: true,
    typeId: 1,
    note: "",
  },
  {
    name: "Performence Optimization",
    tags: [1],
    reporterId: 1,
    processorId: 2,
    epicId: 1,
    kanbanId: 1,
    favorite: true,
    typeId: 1,
    note: "",
  },
  {
    name: "Authentication Development",
    tags: [1],
    reporterId: 1,
    processorId: 2,
    epicId: 1,
    kanbanId: 1,
    favorite: true,
    typeId: 1,
    note: "",
  },
  {
    name: "UI Development",
    tags: [1],
    reporterId: 1,
    processorId: 2,
    epicId: 1,
    kanbanId: 1,
    favorite: true,
    typeId: 1,
    note: "",
  },
  {
    name: "Self Test",
    tags: [1],
    reporterId: 1,
    processorId: 2,
    epicId: 1,
    kanbanId: 1,
    favorite: true,
    typeId: 1,
    note: "",
  },
];
