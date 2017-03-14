const remove = function(pkg, type) {
  let canRemove = true;

  Object.keys(installedCache).forEach(instPkg => {
    if (dependenciesCache[instPkg] && dependenciesCache[instPkg].indexOf(pkg) != -1) {
      canRemove = false;
    }
  });

  if (
    canRemove &&
    (
      type == "explicit" ||
      installedCache[pkg] == "implicit"
    )
  ) {
    console.log("removing", pkg);
    delete installedCache[pkg];
    if (dependenciesCache[pkg]) {
      dependenciesCache[pkg].forEach(remPkg => {
        remove(remPkg, "implicit");
      });
    }
  } else {
    console.log("cant't remove", pkg);
  }
}

module.exports = remove;
