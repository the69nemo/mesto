class Section {
  constructor ({ items, renderer }, containerSelector){
    this._items = items;
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

  addItem(object) {
    this._container.prepend(object);
  }

  renderItem() {
    this._items.forEach((item) => {
      const object = this._renderer(item);
      this.addItem(object);
    })
  }
}

export { Section }
