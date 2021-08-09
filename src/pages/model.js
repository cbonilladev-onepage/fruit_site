import { motion } from 'framer-motion';
import React from "react";
//Components
import ScrollForMore from "../components/scrollForMore";
//Ease

const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] }

const Model = ({ imageDetails }) => {
  return (
    <motion.div
      initial='initial'
      animate='animate'
      exit='exit'
      className='single'>
      <div className='container fluid'>
        <div className='row center top-row'>
          <div className='top'>
            <motion.div initial={{ opacity: 0 }} className='details'>
              <div className='location'>
                <span>28.538336</span>
                <span>-81.379234</span>
              </div>
              <div className='mua'>Instagram: @somefruit</div>
            </motion.div>
            <motion.div initial={{ opacity: 0 }} className='model'>
              <span className='first'>
                <span>S</span>
                <span>o</span>
                <span>m</span>
                <span>e</span>
              </span>
              <span className='last'>
                <span>F</span>
                <span>r</span>
                <span>u</span>
                <span>i</span>
                <span>t</span>
              </span>
            </motion.div>
          </div>
        </div>
        <div className='row bottom-row'>
          <div className='bottom'>
            <div className='image-container-single'>
              <motion.div
                initial={{
                  y: "-50%",
                  width: imageDetails.width,
                  height: imageDetails.height
                }}
                animate={{
                  y: 0,
                  width: "100%",
                  height: window.innerWidth > 1440 ? 800 : 400,
                  transition: { delay: 0.2, ...transition }
                }}
                className='thumbnail-single'>
                <div className='frame-single'>
                  <motion.img
                    initial={{ scale: 1.1 }}
                    src={require("../images/yasmeen.webp")} alt='some fruit' />
                </div>
              </motion.div>
            </div>
          </div>
          <ScrollForMore />
        </div>
      </div>
      <div className='detailed-information'>
        <div className='container'>
          <div className='row'>
            <h2 className='title'>
              Why make a project about <br /> some fruit?
            </h2>
            <p>
              Dolor nisi do quis pariatur. Occaecat aliqua duis elit qui occaecat quis. Sint aliqua sint reprehenderit do id quis reprehenderit ut incididunt cillum duis. Cillum velit velit ut ex exercitation occaecat Lorem et nulla in duis sint. Et esse ut veniam minim officia consectetur.

              Proident consequat est aute exercitation ad velit voluptate consectetur ea. Laborum anim sint ipsum sint quis labore aliqua. Minim est et est incididunt. Qui eu et laborum velit aliquip minim minim elit nulla non sint esse. Laborum voluptate ullamco voluptate adipisicing incididunt deserunt aute cupidatat culpa do. Mollit elit laboris culpa est exercitation proident.

              Et consequat eu tempor nisi adipisicing mollit culpa cillum ut. Minim veniam cupidatat ut occaecat do ex laborum pariatur. Velit non in ea veniam minim enim qui. Reprehenderit sit anim sint laborum fugiat Lorem sit aute id aliquip cillum culpa non ut. Do id occaecat voluptate magna velit.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Model;
