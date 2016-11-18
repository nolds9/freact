class Component {
  constructor(props){
    this.props = props
  }

  setState(state, rerender = true) {
    this.state = Object.assign({}, this.state, state)
    if(rerender) Freact.rerender()
  }
}

const Freact = {
  Component,

  render(component, mountNode, setEventListeners = true){
    // TODO replace every double with single quote (only inside of html tags)
    let html = component.render()
    if (setEventListeners) {
        listen(["click","submit", "input"])
    }

    function listen (eventNames = []) {
      eventNames.forEach(eName => {
        mountNode.addEventListener(eName, e => {
          let fn = e.target.getAttribute(eName)
          if (fn){
            let newFn = new Function("e", "(" + fn + ")(e)")
            newFn.call(component, e)
          }
        })
      })


    }

    mountNode.innerHTML = html
    this.rerender = () => this.render(component, mountNode, false)
  },
}
