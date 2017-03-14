const data = require("./data");

const depend = require("./depend");
const install = require("./install");
const remove = require("./remove");

global.dependenciesCache = {};
global.installedCache = {};

console.log("dependenciesCache", global.dependenciesCache);
console.log("installedCache", global.installedCache);


data.input.forEach(input => {
  console.log("");
  console.log(input);

  const arr = input.split(/\s+/);
  const command = arr[0];
  const args = arr.slice(1);

  switch(command) {
    case "DEPEND":
      depend(...args);
      break;
    case "INSTALL":
      install(...args, "explicit");
      break;
    case "REMOVE":
      remove(...args, "explicit");
      break;
    case "LIST":
      console.log(installedCache);
      break;
    case "END":
      break;
  }
});

console.log("dependenciesCache", dependenciesCache);
console.log("installedCache", installedCache);
