const depend = function(main, ...dependencies) {
  global.dependenciesCache[main] = dependencies;
  console.log("dependenciesCache", global.dependenciesCache);
}


module.exports = depend;
