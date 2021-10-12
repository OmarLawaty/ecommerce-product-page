import React, { useEffect, useState } from 'react';
import './Slider.scss';

import { closeIcon, nextIcon, previousIcon } from '../../assets';

const Slider = ({ thumbnail, preview, reference }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [popUp, setPopUp] = useState(false);
  useEffect(() => {
    popUp
      ? document.body.classList.add('no-slider')
      : document.body.classList.remove('no-slider');
  }, [popUp]);

  const thumbnails = () =>
    thumbnail.map((item, i) => (
      <div
        key={i}
        className={`image-nav ${activeIndex === i ? 'active-image' : ''}`}
        onClick={() => setActiveIndex(i)}
      >
        <img src={item} alt="" />
      </div>
    ));

  return (
    <div className="slider">
      {popUp ? (
        <div className="popup">
          <div className="dimmer" onClick={() => setPopUp(false)}></div>
          <div className="content">
            <div className="navigate">
              <svg
                width="14"
                height="15"
                xmlns="http://www.w3.org/2000/svg"
                className="close-icon"
                onClick={() => setPopUp(false)}
              >
                <path
                  d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
                  fill="#69707D"
                  fillRule="evenodd"
                />
              </svg>

              <svg
                width="25"
                height="25"
                xmlns="http://www.w3.org/2000/svg"
                className="previous-icon"
                onClick={() =>
                  setActiveIndex(activeIndex > 0 ? activeIndex - 1 : 0)
                }
              >
                <path
                  d="M11 1 3 9l8 8"
                  stroke="#1D2026"
                  strokeWidth="3"
                  fill="none"
                  fillRule="evenodd"
                />
              </svg>

              <div className="preview">
                <img
                  src={preview[activeIndex]}
                  alt=""
                  ref={reference}
                  onClick={() => {
                    setPopUp(true);
                  }}
                />
              </div>

              <svg
                width="13"
                height="18"
                xmlns="http://www.w3.org/2000/svg"
                className="next-icon"
                onClick={() =>
                  setActiveIndex(activeIndex < 3 ? activeIndex + 1 : 3)
                }
              >
                <path
                  d="m2 1 8 8-8 8"
                  stroke="#1D2026"
                  strokeWidth="3"
                  fill="none"
                  fillRule="evenodd"
                />
              </svg>
            </div>

            <div className="images-nav">{thumbnails()}</div>
          </div>
        </div>
      ) : (
        ''
      )}
      <div className="navigate">
        <svg
          width="25"
          height="25"
          xmlns="http://www.w3.org/2000/svg"
          className="previous-icon"
          onClick={() => setActiveIndex(activeIndex > 0 ? activeIndex - 1 : 0)}
        >
          <path
            d="M11 1 3 9l8 8"
            stroke="#1D2026"
            strokeWidth="3"
            fill="none"
            fillRule="evenodd"
          />
        </svg>

        <div className="preview">
          <img
            src={preview[activeIndex]}
            alt=""
            ref={reference}
            onClick={() => (window.innerWidth > 1000 ? setPopUp(true) : '')}
          />
        </div>

        <svg
          width="13"
          height="18"
          xmlns="http://www.w3.org/2000/svg"
          className="next-icon"
          onClick={() => setActiveIndex(activeIndex < 3 ? activeIndex + 1 : 3)}
        >
          <path
            d="m2 1 8 8-8 8"
            stroke="#1D2026"
            strokeWidth="3"
            fill="none"
            fillRule="evenodd"
          />
        </svg>
      </div>
      <div className="images-nav">{thumbnails()}</div>
    </div>
  );
};

export default Slider;
