import constants from "./constants.json";

export function locationExtraction() {
  let categories = {};
  let subCategories = {};
  const locationsName = constants.data.locations.map((item) => {
    return {
      name: item.name,
      branches: item.branches.map((branches) => {
        categories[branches.branch_id] = [...branches.categories]
        return { name: branches.name, id: branches.branch_id };
      }),
    };
  });
  return {locationsName, categories};
}

export function categoryExtraction() {
  let branches = {};
  const locationsName = constants.data.locations.map((item) => {
    return {
      name: item.name,
      branches: item.branches.map((branches) => branches.name),
    };
  });
  return locationsName;
}

export function branchesExtraction() {}
