import React, { Component } from 'react';
import SongsContainer from '../containers/SongsContainer';
import CSSModules from 'react-css-modules';
import styles from '../styles/Album.css';

class Album extends Component {
  render () {
    const album = this.props.selectedAlbum;

    return (
      <div styleName="album">
        <div>
          <h3>{ album.name }</h3>
          <img src={ album.imageUrl } className="img-thumbnail"/>
        </div>
        <SongsContainer songs={album.songs} />
      </div>
    );
  }
}

export default CSSModules(Album, styles)