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

  handleChange(event){
    let propertyName = event.target.name;
    let symphony = this.state.symphony
    symphony[propertyName] = event.target.value;
    this.setState({symphony: symphony})

  }
  handleSubmit(event){
    event.preventDefault();
    this.props.onCreate(this.state.symphony);
  }

  // handleMusician(event){

  // }

render() {
  // if(!this.props.musicians.length === 0){
  //   return <p>Composing symphonies.....</p>
  // }
  return (
    <div>
    <form onSubmit={this.handleSubmit}>
    <input type="text" placeholder="Composer" name="composer" onChange={this.handleChange} value={this.state.composer}/>
    <input type="number" placeholder="Symphony Number" name="number" onChange={this.handleChange} value={this.state.number}/>
    <input type="text" placeholder="Key" name="key" onChange={this.handleChange} value={this.state.key}/>
    <input type="text" placeholder="Opus" name="opus" onChange={this.handleChange} value={this.state.opus}/>

    <button type="submit">Save</button>
    </form>
    </div>
  )
}
}
export default SymphonyForm;
