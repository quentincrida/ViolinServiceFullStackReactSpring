import React, {Component} from 'react';

class ConcertForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      concert: {
        title: "",
        venue: "",
        details: null,
        composition: null
      }
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleComposition = this.handleComposition.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event){
    let propertyName = event.target.name;
    let concert = this.state.concert
    concert[propertyName] = event.target.value;
    this.setState({concert: concert})

  }
  handleComposition(event){
    const index = parseInt(event.target.value);
    const selectedComposition = this.props.compositions[index]
    let concert = this.state.concert;
    concert['composition'] = selectedComposition;
    this.setState({concert: concert})
  }
  handleSubmit(event){
    event.preventDefault();
    this.props.onCreate(this.state.concert);
    console.log(this.state.concert);
  }
render (){
  if(!this.props.compositions.length === 0){
    return <p>No Concerts to Declare!</p>
  }
  const compositionOptions = this.props.compositions.map((composition, index) => {
    return <option key={index} value={index}>{composition.title}, {composition.composer}</option>

  })
  return (
    <div>
    <form onSubmit={this.handleSubmit}>
    <input type="text" placeholder="Title" name="title" onChange={this.handleChange} value={this.state.title}/>
    <input type="text" placeholder="Venue" name="venue" onChange={this.handleChange} value={this.state.venue}/>
    <input type="datetime-local" placeholder="Details" name="details" value="2020-06-20T19:30" min="2015-01-01T00:00" max="2030-12-31T00:00" onChange={this.handleChange} value={this.state.details}/>

    <select name="composition" onChange={this.handleComposition} defaultValue="select-composition">
    <option disabled value="select-composition">Select a Composition</option>
      {compositionOptions}
    </select>
    <button type="submit">Save</button>

    </form>
    </div>
  )
  }
}
export default ConcertForm;
