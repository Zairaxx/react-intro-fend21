import Album from "./Album";

export default function AlbumList({albums}) {
    console.log("props", albums);
  return (
    <div>
      <h3>Album List</h3>
      {albums.map((album,index) => <Album title={album.title} tracks={album.tracks} key={index}/>)}
    </div>
  );
}
