const depend = function(main, ...dependencies) {

  if (!global.dependenciesCache[main]) {
    global.dependenciesCache[main] = [];
  }

  global.dependenciesCache[main].push(...dependencies);
  console.log("global.dependenciesCache", global.dependenciesCache);
}


module.exports = depend;
