import React from 'react';
import './PlayList.css';


handleNameChange(event){

	this.props.onNameChange(event.target.value);
}

class PlayList extends React.Component {
	constructor(props){
		super(props);
		this.handleNameChange = this.handleNameChange.bind(this);
	}
  render() {
    return (
    	<div className="Playlist">
  <input defaultValue={'New Playlist'}  onChange= {this.handleNameChange} />
  <ul></ul>
  <TrackList tracks = {this.props.playlistTracks}  onRemove = {this.props.onRemove} isRemoval = true />
  <a className="Playlist-save" onClick = {this.props.onSave}>SAVE TO SPOTIFY</a>
</div>
    	);
}
}

export default Playlist;
