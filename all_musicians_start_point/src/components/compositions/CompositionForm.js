import React, {Component} from 'react';

class CompositionForm extends Component {
  constructor(props){
    super(props);
    this.state ={
      composition: {
        composer: "",
        title: "",
        key: "",
        opus: ""
      }
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.findConcertIndex = this.findConcertIndex.bind(this);
  }

  componentDidMount(){
    if(this.props.composition){
      this.setState({composition: {...this.props.composition}})
    }
  }

  handleChange(event){
    let propertyName = event.target.name;
    let composition = this.state.composition
    composition[propertyName] = event.target.value;
    this.setState({composition: composition})
  }

  handleSubmit(event){
    event.preventDefault();
    if(this.state.composition.id){
      this.props.onUpdate(this.state.composition)
    } else {
    this.props.onCreate(this.state.composition);
  }
}
findConcertIndex(){
  if(this.props.composition){
    return this.props.concerts.findIndex(concert =>
    this.props.composition.concert.id === concert.id)
  } else {
    return null;
  }
}

render() {

  let heading = "";
  if(!this.props.composition){
    heading = "Add a Composition"
  } else {
    heading = "Edit " + this.props.composition.composer + " " + this.props.composition.title;
  }
  return (
    <div>
    <h3 className="subHeading">{heading}</h3>
    <form onSubmit={this.handleSubmit}>
    <input type="text" placeholder="Composer" name="composer" onChange={this.handleChange} value={this.state.composition.composer}/>
    <input type="text" placeholder="Composition Title" name="title" onChange={this.handleChange} value={this.state.composition.title}/>
    <input type="text" placeholder="Key" name="key" onChange={this.handleChange} value={this.state.composition.key}/>
    <input type="text" placeholder="Opus" name="opus" onChange={this.handleChange} value={this.state.composition.opus}/>


    <button type="submit">Save</button>
    </form>
    </div>
  )
}
}
export default CompositionForm;
