import React, { useState } from 'react';

const Slider = ({ thumbnail, preview, reference }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [popUp, setPopUp] = useState(false);

  const thumbnails = () =>
    thumbnail.map((item, i) => (
      <div key={i} onClick={() => setActiveIndex(i)}>
        <img src={item} alt="" />
      </div>
    ));

  return (
    <div>
      {popUp ? (
        <div className="popup">
          <div className="dimmer" onClick={() => setPopUp(false)}></div>
          <div className="content">
            <div className="preview">
              <img src={preview[activeIndex]} alt="" />
            </div>
            {thumbnails()}
          </div>
        </div>
      ) : (
        ''
      )}
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
      {thumbnails()}
    </div>
  );
};

export default Slider;
