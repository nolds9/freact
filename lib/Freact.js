class Component {
  constructor(props){
    this.props = props
  }

  setState(state) {
    this.state = Object.assign({}, this.state, state)
    Freact.rerender()
  }
}

const Freact = {
  Component,
  render(component, mountNode, setEventListeners = true){
    // TODO replace every double with single quote (only inside of html tags)
    let html = component.render()
    if (setEventListeners) {
      mountNode.addEventListener("click", e => {
        let fn = e.target.getAttribute("click")
        if (fn){
          let newFn = new Function("e", "(" + fn + ")(e)")
          newFn.call(component, e)
        }
      })
    }

    mountNode.innerHTML = html
    this.rerender = () => this.render(component, mountNode, false)
  },
}
