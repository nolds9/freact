
class Todo extends Freact.Component {
  constructor(props){
    super(props)
    this.state = {
      count: 0,
      tasks: ["learn react", "freact"],
      newTodo: ''
    }
  }

  incrementCount(e) {
    let {count} = this.state
    this.setState({
      count: count + 1,
      newTodo: ''
    })
  }

  handleChange(e){
    this.setState({
      newTodo: e.target.value
    }, false)
  }

  handleSubmit(e){
    e.preventDefault()
    this.setState({
      tasks: [...this.state.tasks, this.state.newTodo],
      newTodo: ''
    })
  }

  render(){
    let items = this.state.tasks.map((item, index) => {
      return `<li>${item}</li>`
    }).join('')

    return (
      `<h1>Hello ${this.props.name}</h1>
        <button click="${ e => this.incrementCount(e) }">Clicked ${this.state.count} times</button>

        <form submit="${ e=> this.handleSubmit(e) }">
          <input value="${this.state.newTodo}" type="text" input="${e => this.handleChange(e) }" />
          <input type="submit" />
        </form>
        <ul>
          ${items}
        </ul>
      `
    )
  }
}


Freact.render(
  new Todo({name: "John"}),
  document.getElementById('root')
)
