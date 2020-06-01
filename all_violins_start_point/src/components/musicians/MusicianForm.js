import React, {Component} from 'react';

class MusicianForm extends Component {
  constructor(props){
    super(props);
    this.state = {
    musician: {
      firstName: "",
      lastName: "",
      age: 0,
      instrument: "",
      position: "",
      tutti: null
    }
  }
    this.handleChange = this.handleChange.bind(this);
    this.handleTutti = this.handleTutti.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.findTuttiIndex = this.findTuttiIndex.bind(this);
  }
  componentDidMount(){
    if(this.props.musician){
      this.setState({musician: {...this.props.musician}})
    }
  }
  findTuttiIndex(){
    if(this.props.musician){
      return this.props.tuttis.findIndex(tutti =>
      this.props.musician.tutti.id === tutti.id)
    } else {
      return null;
    }
  }

  handleChange(event){
    let propertyName = event.target.name;
    let musician = this.state.musician;
    musician[propertyName] = event.target.value;
    this.setState({musician: musician})
  }

  handleTutti(event){
    const index = parseInt(event.target.value)
    const selectedTutti = this.props.tuttis[index]
    let musician = this.state.musician;
    musician['tutti'] = selectedTutti
    this.setState({musician: musician})
  }
  handleSubmit(event){
    event.preventDefault();
    this.props.onCreate(this.state.musician);
  }
  render(){
    if(!this.props.tuttis.length === 0){
      return <p>Loading...........</p>
    }
    let heading = "";

    if(!this.props.musician){
      heading = "Create Musician"
    } else {
      heading = "Edit " + this.props.musician.firstName;
    }

    const tuttiOptions = this.props.tuttis.map((tutti, index) => {
        return <option key={index} value={index}>{tutti.name}</option>
    })
    return (
      <div>
      <h3>{heading}</h3>
        <form onSubmit={this.handleSubmit}>
        <input type="text" placeholder="First Name"
        name="firstName" onChange={this.handleChange}
        value={this.state.firstName}/>

        <input type="text" placeholder="Last Name"
        name="lastName" onChange={this.handleChange}
        value={this.state.lastName}/>

        <input type="number" placeholder="Age" name="age"
        onChange={this.handleChange} value={this.state.age}/>

        <input type="text" placeholder="Instrument"
        name="instrument" onChange={this.handleChange}
        value={this.state.instrument}/>

        <input type="text" placeholder="Position"
        name="position" onChange={this.handleChange}
        value={this.state.position}/>

        <select name="tutti" onChange={this.handleTutti}
        defaultValue={this.findTuttiIndex() ||"select-tutti"}>
        <option disabled value="select-tutti">Select a Section</option>
        {tuttiOptions}
        </select>

        <button type="submit">Save</button>
        </form>
      </div>
    )
  }
}
export default MusicianForm;
