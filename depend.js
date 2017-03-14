const depend = function(main, ...dependencies) {

  if (!global.dependenciesCache[main]) {
    global.dependenciesCache[main] = [];
  }

  global.dependenciesCache[main].push(...dependencies);
  console.log("dependenciesCache", global.dependenciesCache);
}


module.exports = depend;
