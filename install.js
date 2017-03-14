const install = function(pkg, type) {

    // if pkg to install has any dependencies then install those first, "implicitly"
    if (global.dependenciesCache[pkg]) {
      global.dependenciesCache[pkg].forEach(depPkg => {
        install(depPkg, "implicit");
      });
    }

    // after dependencies are installed then check
    // if pkg hasn't been installed yet
    // or if pkg is being installed "explicitly"
    // then install pkg and set the type
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
