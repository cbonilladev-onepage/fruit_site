import { motion } from 'framer-motion';
import React, { Fragment } from "react";
import ProgressiveImage from "react-progressive-image";
import { Link } from "react-router-dom";

const transition = {
  duration: .5,
  ease: [0.43, 0.13, 0.23, 0.96],
}

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
                    {(src) => <motion.img whileHover={{scale: 1.1}} transition={{transition}} src={src} alt='Fruit' />}
                  </ProgressiveImage>
                </Link>
              </div>
            </div>
            <motion.div exit={{opacity: 0}} transition={{transition}} className='information'>
              <div className='title'>Fruit</div>
              <div className='location'>
                <span>28.538336</span>
                <span>-81.379234</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  </Fragment>
);

export default Home;
