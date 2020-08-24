import React from 'react';
import '../assets/styles/components/Player.scss';

const Player = (props) => {
  const { id } = props.match.params;
  // const hasPlaying = Object.keys(props.playing).length > 0;

  // useEffect(() => {
  //   props.getVideoSource(id);
  // }, []);

  return (
    <div className='Player'>
      <video controls autoPlay>
        <source src='' type='video/mp4' />
      </video>
      <div className='Player-back'>
        <button type='button' onClick={() => props.history.goBack()}>
          Regresar
        </button>
      </div>
    </div>
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
