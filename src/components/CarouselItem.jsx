import React from 'react';
//import PropTypes from 'prop-types';
import '../assets/styles/components/CarouselItem.scss';
import playicon from '../assets/static/play-icon.png';
import plusicon from '../assets/static/plus-icon.png';

//const CarouselItem = ({ cover, title, year, contentRating, duration }) => (
const CarouselItem = () => (
  <div className='carousel-item'>
    <img className='carousel-item__img' src='https://images.pexels.com/photos/904276/pexels-photo-904276.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500' alt='' />
    <div className='carousel-item__details'>
      <div>
        <img className='carousel-item__details--img' src={playicon} alt='Play Icon' />
        <img className='carousel-item__details--img' src={plusicon} alt='Plus Icon' />
      </div>
      <p className='carousel-item__details--title'>Título descriptivo</p>
      <p className='carousel-item__details--subtitle'>2019 16+ 114 minutos</p>
    </div>
  </div>

);

export default CarouselItem;
