import React, {Component} from 'react';

class SymphonyForm extends Component {
  constructor(props){
    super(props);
    this.state ={
      symphony: {
        composer: "",
        number: 0,
        key: "",
        opus: "",
        // musician: null
      }
    }
    this.handleChange = this.handleChange.bind(this);
    // this.handleMusician = this.handleMusician.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){
    if(this.props.symphony){
      this.setState({symphony: {... this.props.symphony}})
    }
  }

  handleChange(event){
    let propertyName = event.target.name;
    let symphony = this.state.symphony
    symphony[propertyName] = event.target.value;
    this.setState({symphony: symphony})

  }
  handleSubmit(event){
    event.preventDefault();
    if(this.state.symphony.id){
      this.props.onUpdate(this.state.symphony)
    } else {
    this.props.onCreate(this.state.symphony);
  }
}

render() {
  // if(!this.props.musicians.length === 0){
  //   return <p>Composing symphonies.....</p>
  // }
  let heading = "";
  if(!this.props.symphony){
    heading = "Add a Symphony"
  } else {
    heading = "Edit " + this.props.symphony.composer + " " + this.props.symphony.number;
  }
  return (
    <div>
    <h3 className="subHeading">{heading}</h3>
    <form onSubmit={this.handleSubmit}>
    <input type="text" placeholder="Composer" name="composer" onChange={this.handleChange} value={this.state.symphony.composer}/>
    <input type="number" placeholder="Symphony Number" name="number" onChange={this.handleChange} value={this.state.symphony.number}/>
    <input type="text" placeholder="Key" name="key" onChange={this.handleChange} value={this.state.symphony.key}/>
    <input type="text" placeholder="Opus" name="opus" onChange={this.handleChange} value={this.state.symphony.opus}/>

    <button type="submit">Save</button>
    </form>
    </div>
  )
}
}
export default SymphonyForm;
