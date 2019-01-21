import React from 'react';
import './Track.css';

removeTrack(this.props.track)
{
	this.props.onRemove = this.props.track;
}

addTrack(this.props.track){
this.props.onAdd = this.props.track;
}
class Track extends React.Component {
	constructor(props){
		super(props);
		this.addTrack = this.addTrack.bind(this);
		this.removeTrack = this.removeTrack.bind(this);
}
	
  render() {
    return (
    <div className ="Track">
  <div className ="Track-information">
    <h3><!-- track name will go here --></h3>
    <p><!-- track artist will go here--> | <!-- track album will go here --></p>
  </div>
  <a className ="Track-action" onClick = {this.addTrack}><!-- + or - will go here --></a>
  <a className ="Track-action" onClick = {this.removeTrack}><!-- + or - will go here --></a>
</div>
 );
}
}

export default Track;