const vm = {
  view: () => {
    return m("h1", "Hello, Mithril!");
  }
}

m.mount(document.getElementById("root"), vm);
