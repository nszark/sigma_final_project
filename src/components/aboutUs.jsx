import { motion } from "framer-motion";

function AboutUs() {

  // Animation variants for the left section
  const animation = {
    hidden: {
      x: -100,
      opacity: 0,
    },
    visible: custom => ({
      x: 0,
      opacity: 1,
      transition: {delay: custom * 0.2} // Add delay based on custom prop
    })
  }
  
  // Animation variants for the right section
  const animation1 = {
    hidden: {
      x: 100, 
      opacity: 0,
    },
    visible: custom => ({
      x: 0, 
      opacity: 1,
      transition: {delay: custom * 0.2} // Add delay based on custom prop
    })
  }

  return (
    <motion.div 
      initial="hidden"
      whileInView="visible"
      viewport={{amount: 0.1}}
      id="aboutUs"
      className="modern-interior"
    >
      <div className="modern-interior__first-block">
        <div className="modern-interior__wrapper _container about-us__first-wrap">
          {/* Animation for the left section */}
          <motion.div
            custom={1} // Pass custom prop to control delay
            variants={animation} // Use animation variants for left section
            className="about-us__left"
          >
            <img src="src/img/about_us_1.jpg" alt="about_us_1" />
            <div></div>
          </motion.div>
          {/* Content for the right section*/}
          <div className="about-us__right">
            <span>ABOUT US</span>
            <h1>Interioris The Will of An Epoch Mextreo</h1>
            <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec tristique elit, dapibus gravida orci. In porttitor vel odio vehicula mollis. Nunc imperdiet, dui at dignissim commodo, neque eros efficitur sem, eget ultricies nisl justo a leo. Quisque quis sem vel mauris laoreet luctus eget vitae eros. Quisque quis lobortis leo, sed gravida massa. Donec mollis volutpat est, id volutpat elit. Suspendisse varius nec arcu vitae sollicitudin. Mauris vitae scelerisque lorem, et lacinia ligula. Duis libero mi, lobortis nec maximus quis, consectetur viverra sapien. Nam in dolor suscipit, auctor dolor ac, blandit risus. Integer porta faucibus augue.
            </div>
            <section>
              <button className="modern-interior-button">LEARN MORE</button>
            </section>
          </div>
        </div>
      </div>

      <motion.div
     initial = "hidden"
     whileInView= "visible"
     viewport={{amount: 0.2}}
      className="modern-interior__second-block">
        <div className="modern-interior__wrapper _container">
          <div className="about-us-second-block__left">
            <motion.div
            custom={6}
            variants={animation1}
            className="about-us-second-block-additional">              
             <img src="src/img/twenty_wood.png" alt="" />
            </motion.div>
            <h1>Years Of Successful Working <br/>The Market</h1>         
            <section>
              <button className="modern-interior-button">READ MORE</button>
            </section>
          </div>

          <motion.div
          custom={2}
          variants={animation1}
          className="modern-interior__right">
            <img src="src/img/about_us_2.jpg" alt="" />
            <div></div>
          </motion.div>
        </div>
      </motion.div>
      <div className="about-us__design_element_1">
        <img src="/src/img/design_element_1.png" alt="design_element_1" />
      </div>

      <div className="about-us__design_element_2">
        <img src="/src/img/design_element_1.png" alt="design_element_1" />
      </div>
    </motion.div>
  );
}

export default AboutUs;
