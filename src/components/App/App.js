import React from 'react';
import './App.css';

addTrack(track)
{
if(this.state.playlistTracks.find(savedTrack => savedTrack.id === track.id))
{
return;
}
}

removeTrack(track)
{
	this.state.playlistTracks.remove(savedTrack => savedTrack.id === track.id)
}

updatePlaylistName(name)
{
       this.state.searchResults.name = name
}

savePlaylist()
{
	this.state.playlistTracks
}

search(search){
console.log(search)
}
class App extends React.Component {
	constructor(props) {
    super(props);
      this.state = { searchResults: [{name:'Sam',artist:'Music',album:'SARE',id:'8688'},
     {name:'Sanj',artist:'Music',album:'Sufh',id:'8687'}],
     playlistName:'abcd',
     playlistTracks:[{name:'Sam',artist:'Music',album:'SARE',id:'8688'},
     {name:'Sanj',artist:'Music',album:'Sufh',id:'8687'}] };
      this.addTrack = this.addTrack.bind(this);
      this.removeTrack = this.removeTrack.bind(this);
      this.updatePlaylistName = this.updatePlaylistName.bind(this);
      this.savePlaylist = this.savePlaylist.bind(this);
      this.search = this.search.bind(this);
}
  render() {
    return (
      <div>
  <h1>Ja<span class="highlight">mmm</span>ing</h1>
  <div className="App">
    <SearchBar onSearch = {this.search}/>
    <div className="App-playlist">
      <SearchResults onAdd = {this.addTrack} searchResults = {this.state.searchResults}/>
     <ul></ul>
     <ul></ul>
      <Playlist playlistName = {this.state.playlistName} playlistTracks = {this.state.playlistTracks} 
      onRemove = {this.removeTrack}  onNameChange = {this.updatePlaylistName} onSave = {this.savePlaylist}/>
    </div>
  </div>
</div>
    );
  }
}

export default App;
