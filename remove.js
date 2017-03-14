const remove = function(pkg, type) {
  let canRemove = true;

  // check each installed package and see if it is dependent on pkg to remove
  Object.keys(installedCache).forEach(instPkg => {
    if (dependenciesCache[instPkg] && dependenciesCache[instPkg].indexOf(pkg) != -1) {
      canRemove = false;
    }
  });


  // if pkg is not a dependency of any other installed pkg
  // then
    // if the pkg is being remove explicitly
    // or if it was installed implicitly
  // then remove the package
  if (
    canRemove &&
    (
      type == "explicit" ||
      installedCache[pkg] == "implicit"
    )
  ) {
    console.log("removing", pkg);
    delete installedCache[pkg];

    // after removing the package check if it had any dependencies and remove those
    if (dependenciesCache[pkg]) {
      dependenciesCache[pkg].forEach(depPkg => {
        remove(depPkg, "implicit");
      });
    }
  } else {
    console.log("cant't remove", pkg);
  }
}

module.exports = remove;
