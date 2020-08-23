import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setFavorite } from '../actions'
import '../assets/styles/components/CarouselItem.scss';
import playicon from '../assets/static/play-icon.png';
import plusicon from '../assets/static/plus-icon.png';

const CarouselItem = (props) => {
  const { cover, title, year, contentRating, duration } = props;
  const handleSetFavorite = () => {
    props.setFavorite({ cover, title, year, contentRating, duration,
    });
  }
  return (
    <div className='carousel-item'>
      <img className='carousel-item__img' src={cover} alt={title} />
      <div className='carousel-item__details'>
        <div>
          <img className='carousel-item__details--img' src={playicon} alt='Play Icon' />
          <img
            className='carousel-item__details--img'
            src={plusicon}
            alt='Plus Icon'
            onClick={handleSetFavorite}
          />
        </div>
        <p className='carousel-item__details--title'>{title}</p>
        <p className='carousel-item__details--subtitle'>
          {`${year} ${contentRating} ${duration}`}
        </p>
      </div>
    </div>

  );
}

CarouselItem.prototypes = {
  cover: PropTypes.string,
  title: PropTypes.string,
  year: PropTypes.number,
  contentRating: PropTypes.string,
  duration: PropTypes.number,
}

const mapDispactchToProps = {
  setFavorite,

}

export default connect(null, mapDispactchToProps)(CarouselItem);
