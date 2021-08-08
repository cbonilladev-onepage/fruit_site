import React, { Fragment } from "react";
import ProgressiveImage from "react-progressive-image";
import { Link } from "react-router-dom";

const Home = ({ imageDetails, image }) => (
  <Fragment>
    <main>
      <div className='container'>
        <div className='row center'>
          <div className='image-container'>
            <div
              className='thumbnail'
              ref={image}
              style={{
                width: imageDetails.width,
                height: imageDetails.height,
              }}>
              <div className='frame'>
                <Link to={`/model/yasmeen-tariq`}>
                  <ProgressiveImage
                    src={require("../images/yasmeen.webp")}
                    placeholder={require("../images/compressed-image.jpg")}>
                    {(src) => <img src={src} alt='Fruit' />}
                  </ProgressiveImage>
                </Link>
              </div>
            </div>
            <div className='information'>
              <div className='title'>Fruit</div>
              <div className='location'>
                <span>28.538336</span>
                <span>-81.379234</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </Fragment>
);

export default Home;
