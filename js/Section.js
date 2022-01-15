class Section {
  constructor ({ items, renderer }, containerSelector){
    this._items = items;
    this._renderer = renderer;
    this._containerSelector = document.querySelector(containerSelector);
  }

  renderItem() {
    this._items.forEach((item) => {
    const object = this._renderer(item);
    this.addItem(object);
    })
  }

  addItem(object) {
    this._containerSelector.append(object);
  }
}

export { Section }
