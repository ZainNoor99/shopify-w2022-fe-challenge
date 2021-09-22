import React, { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons';
import PropTypes from 'prop-types';

export default function Picture({
  date, explanation, hdurl, url, title,
}) {
  const encodedTitle = encodeURIComponent(title);
  const [cookies, setCookie] = useCookies([title]);
  const [isLiked, setLiked] = useState(Number(cookies[encodedTitle]) || 0);

  // initial state of the icon
  const displayedIcon = isLiked ? faHeart : farHeart;

  const imgSrc = hdurl || url;

  useEffect(() => {
    const expireyDate = new Date();
    expireyDate.setFullYear(expireyDate.getFullYear() + 1);
    setCookie(encodeURIComponent(title), isLiked, { expires: expireyDate });
  }, [isLiked, setCookie]);

  // sets icon depending on state
  // filled heart for liked and outline for un-like
  const clickHandler = () => {
    setLiked(Number(!isLiked));
  };

  // console.log({ title, isLiked })
  return (
    <div className="pictureContainer">
      <div className="image">
        <img src={imgSrc} alt={title} />
      </div>
      <h2>{title}</h2>
      <h4>{date}</h4>
      <p>{explanation}</p>
      <button type="button" onClick={() => { clickHandler(); }}>
        <FontAwesomeIcon className={`likeButton ${isLiked ? 'liked' : 'unliked'}`} icon={displayedIcon} />
      </button>
    </div>
  );
}

Picture.propTypes = {
  date: PropTypes.string.isRequired,
  explanation: PropTypes.string.isRequired,
  hdurl: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
