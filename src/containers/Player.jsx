import React, { useEffect } from 'react';
// import { connect } from 'react-redux';
// import { getVideoSource } from '../actions';
// import { Redirect } from 'react-router-dom';
import '../assets/styles/components/Player.scss';
// import NotFound from './NotFound';

const Player = () => {
  // const { id } = props.match.params;
  // const hasPlaying = Object.keys(props.playing).length > 0;

  // useEffect(() => {
  //   props.getVideoSource(id);
  // }, []);

  //return hasPlaying ? (
  return (
    <div className='Player'>
      <video controls autoPlay>
        <source src='' type='video/mp4' />
        {/* <source src={props.playing.source} type='video/mp4' /> */}
      </video>
      <div className='Player-back'>
        <button type='button'>
          Regresar
        </button>
      </div>
    </div>
    // )  : <Redirect to="/404/" />;
  ) ;
};

// const mapStateToProps = (state) => {
//   return {
//     playing: state.playing,
//   }
// }

// const mapDispatchToProps = {
//   getVideoSource,
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Player);
export default Player;
