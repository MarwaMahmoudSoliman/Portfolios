import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "React E-Commerce",
    img:"./e-commerce.jpg",
   
    desc: "A feature-rich eCommerce web app developed with React.js, Firebase, Redux, and Bootstrap. Seamless integration with Firebase Database, secure user authentication, and efficient cross-origin handling. Create a delightful shopping experience with responsive Ul powered by Bootstrap and hosted in AWS.",
  demo:  <a href="https://e-commerceeeee.netlify.app/products">See Demo</a>
  },

  {
    id: 2,
    title: "Mern stack Blogs",
    img: "./blog.jpg",
    desc: "A beautifully designed blog app with CRUD functionality",
    demo: <a href="https://github.com/MarwaMahmoudSoliman/Blogs_demo">See Demo</a>
    ,
  },
  {
    id: 3,
    title: "Tax-hub App",
    img: "b.jpg",
    desc :"project provide you with a wide range of service in the fields of audit, assurance, accounting, taxation, investment, and incorporation of new companies with a competitive fee.",
    
    demo: <a href="https://github.com/TAX-HUB">See Demo</a>
    ,
  },
  {
    id: 4,
    title: "Cars App",
    img: "desktop.png",
    demo: <a href="https://car-rent-eoed6w1w7-marwas-projects-4939ea0e.vercel.app/">See Demo</a>,
    desc: "website  developed using hyml ,css and javascript and deployed on vercerl for  hiring of a motor vehicle from one party to another party. Rentals are generally made on an hourly, daily, weekly, or monthly basis"}
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button> {item.demo}</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
