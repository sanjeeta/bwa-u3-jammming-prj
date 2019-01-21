import React from 'react';
import './TrackList.css';


class TrackList extends React.Component {
  render() {
  	this.props.tracks.map(track=>{
  		this.props.track.name
this.props.track.artist
this.props.track.album
  	})
    return (<div className="TrackList">
    	
    	<Track onAdd = {this.props.onAdd} onRemove = {this.props.onRemove} isRemoval = true/>
    <!-- You will add a map method that renders a set of Track components  -->
</div>
);
}
}

export default TrackList;