class CategoryManager {
  constructor() {
    this.categories = ["Electronics", "Clothing", "Books"];
  }

  getAll() {
    return this.categories;
  }

  create(name) {
    console.time("createCategory");
    let isuccess = false;
    if (!this.categories.includes(name)) {
      this.categories.push(name);
      isuccess = true;
    }
    console.timeEnd("createCategory");
    return isuccess;
  }
}

// Export a single instance of the manager
module.exports = new CategoryManager();
