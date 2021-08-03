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
    name: "Delivery Resource Table Devlopment",
    start: new Date("2020-12-10").getTime(),
    end: new Date("2021-01-11").getTime(),
  },
  {
    name: "Devlivery Map Development",
    start: new Date("2021-01-12").getTime(),
    end: new Date("2021-02-14").getTime(),
  },
  {
    name: "Devlivery Map Development",
    start: new Date("2021-01-12").getTime(),
    end: new Date("2021-02-14").getTime(),
  },
];

export const kanbans = [
  {
    name: "ready",
  },
  {
    name: "developing",
  },
  {
    name: "completed",
  },
];

export const users = [
  {
    name: "Rick",
    organization: "Takeaway Group",
  },
  {
    name: "Leo",
    organization: "Takeaway Group",
  },
  {
    name: "AJ",
    organization: "Headerquarter Group",
  },
  {
    name: "Claire",
    organization: "Middleground Group",
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
    name: "Management Register Page Development",
    tags: [1, 2],
    reporterId: 1,
    processorId: 2,
    epicId: 1,
    kanbanId: 1,
    favorite: true,
    typeId: 1,
    note: "try finish soon",
  },
  {
    name: "Management Login Page Development",
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
    name: "Performance Optimization",
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
    name: "Authentication Management Page Development",
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
    name: "SelfTest",
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
