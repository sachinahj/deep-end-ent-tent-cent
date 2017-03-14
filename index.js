const data = require("./data");

const depend = require("./depend");
const install = require("./install");
const remove = require("./remove");

// initialize object to hold dependency information about each package
// flat object with pkg names as keys and array of pkg names as values (aka dependencies)
global.dependenciesCache = {};
// initialize object to hold installed packages information
// flat object with pkg names as keys and "explicit" or "implicit" as values
global.installedCache = {};

console.log("dependenciesCache", global.dependenciesCache);
console.log("installedCache", global.installedCache);

// loop through each line and call the correct function based on input
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
