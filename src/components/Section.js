class Section {
  constructor ({ items, renderer, userId }, containerSelector){
    this._items = items;
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
    this._userId = userId;
  }

  addItem(object) {
    const element = this._renderer(object, this._userId);
    this._container.prepend(element);
  }

  renderItem() {
    this._items.forEach((item) => {
      this.addItem(item);
    })
  }
}

export { Section }
