const install = function(pkg, type) {
    if (global.dependenciesCache[pkg]) {
      global.dependenciesCache[pkg].forEach(depPkg => {
        install(depPkg, "implicit");
      });
    }

    if (
      !global.installedCache[pkg] ||
      (
        type == "explicit" &&
        global.installedCache[pkg] != type
      )
    ) {
      console.log("installing", type, pkg);
      global.installedCache[pkg] = type;
    } else {
      console.log("already installed", pkg);
    }
}

module.exports = install;
