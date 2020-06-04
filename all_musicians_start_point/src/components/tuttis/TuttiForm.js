import React, {Component} from 'react';

class TuttiForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      tutti: {
        name: "",
        musician: null
      }
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleMusician = this.handleMusician.bind(this);
    this.handleSubmit  = this.handleSubmit.bind(this);
  }

  handleChange(event){
    let propertyName = event.target.name;
    let tutti = this.state.tutti
    tutti[propertyName] = event.target.value;
    this.setState({tutti: tutti})
  }
  handleMusician(event){
    const index = parseInt(event.target.value)
    const selectedMusician = this.props.musicians[index]
    let tutti = this.state.tutti;
    tutti['musician'] = selectedMusician
    this.setState({tutti: tutti})
  }
  handleSubmit(event){
    event.preventDefault();
    this.props.onCreate(this.state.tutti);
  }
  render(){
    if(!this.props.musicians.length === 0){
      return <p>Loading musicians...</p>
    }
    // const musicianOptions = this.props.musicians.map((musician, index) => {
    //     return <option key={index} value={index}>
    //     {musician.firstName} {musician.lastName}</option>
    // })
    return (
      <div>
      <form onSubmit={this.handleSubmit}>
      <input type="text" placeholder="Name" name="name" onChange={this.handleChange}
      value ={this.state.name} />

      <button type="submit">Save</button>
      </form>
      </div>
    )

  }
}

export default TuttiForm;
