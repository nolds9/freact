
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
      count: count + 1
    })
  }

  render(){
    let items = this.state.tasks.map((item, index) => {
      return `<li>${item}</li>`
    }).join('')

    return (
      `<h1>Hello ${this.props.name}</h1>
        <button click="${ e => this.incrementCount(e) }">${this.state.count}</button>
        <input type="text" value="${this.state.newTodo}"

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
