import { motion } from "framer-motion";

// Define animations as objects with 'hidden' and 'visible' states
const animation = {
  hidden: {
    x: -400,
    opacity: 0,
  },
  visible: (custom) => ({
    x: 0,
    opacity: 1,
    // Add a custom delay based on the 'custom' prop passed to the component
    transition: { delay: custom * 0.2 },
  }),
};

const animation_1 = {
  hidden: {
    x: 400,
    opacity: 0,
  },
  visible: (custom) => ({
    x: 0,
    opacity: 1,
    transition: { delay: custom * 0.2 },
  }),
};

function Blog() {
  return (
    // Use the 'motion' component from framer-motion to add animations to the div
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.1 }}
      id="blog"
      className="blog"
    >
      <div className="blog__wrap _container">
        <section>LATEST NEWS</section>
        <h2>From Our Blog</h2>
        <div className="blog__content">
          {/* Use 'motion' component on each of the two blog posts */}
          <motion.div custom={2} variants={animation} className="blog__left">
            <div className="blog__left__img">
              <img src="/src/img/blog_1.jpg" alt="decore" />
              <div></div>
            </div>
            <h5>2020 Interior Design Trends</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod incididunt ut
              labore et dolore magna aliqua.
            </p>
            <button className="blog-button">CONTINUE READING....</button>
          </motion.div>

          <motion.div custom={3} variants={animation_1} className="blog__right">
            <div className="blog__right__img">
              <img src="/src/img/blog_2.jpg" alt="decore" />
              <div></div>
            </div>
            <h5>28 Notable Product at ARC Interior Design</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod incididunt ut
              labore et dolore magna aliqua.
            </p>
            <button className="blog-button">CONTINUE READING....</button>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default Blog;