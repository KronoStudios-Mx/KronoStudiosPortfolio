import { useRef } from "react";
import "./portfolio.scss";
import {motion, useScroll, useSpring, useTransform} from "framer-motion";

const items = [
    {
        id:1,
        title: "React Commerce",
        img:"https://images.pexels.com/photos/22812329/pexels-photo-22812329/free-photo-of-ciudad-carretera-trafico-calle.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius repellendus sunt, veniam voluptatem recusandae maxime nobis tempora dignissimos ab ad quo! Veniam minima, corrupti soluta ab dignissimos facilis! Quos, sit."
    },
    {
        id:2,
        title: "Next.js Commerce",
        img:"https://images.pexels.com/photos/22703015/pexels-photo-22703015/free-photo-of-cafeteria.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius repellendus sunt, veniam voluptatem recusandae maxime nobis tempora dignissimos ab ad quo! Veniam minima, corrupti soluta ab dignissimos facilis! Quos, sit."
    },
    {
        id:3,
        title: "Vanilla JS App",
        img:"https://images.pexels.com/photos/18687157/pexels-photo-18687157/free-photo-of-gente-punto-de-referencia-edificio-sentado.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius repellendus sunt, veniam voluptatem recusandae maxime nobis tempora dignissimos ab ad quo! Veniam minima, corrupti soluta ab dignissimos facilis! Quos, sit."
    },
    {
        id:4,
        title: "Music App",
        img:"https://images.pexels.com/photos/14209208/pexels-photo-14209208.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius repellendus sunt, veniam voluptatem recusandae maxime nobis tempora dignissimos ab ad quo! Veniam minima, corrupti soluta ab dignissimos facilis! Quos, sit."
    },
];

const Single = ({item}) =>{
    
    const ref = useRef();

    const {scrollYProgress} = useScroll({
        target: ref, 
        // offset: ["start start", "end start"],
    });

    const y = useTransform(scrollYProgress, [0,1], [-300,300]);

    return(
        <section>
            <div className="container">
                <div className="wrapper">
                    <div className="imageContainer" ref={ref}>
                        <img src={item.img} alt=""></img>
                    </div>
                    <motion.div className="textContainer" style={{y}}>
                        <h2>{item.title}</h2>
                        <p>{item.desc}</p>
                        <button>See Demo</button>
                    </motion.div>
                </div>                    
            </div>
        </section>
    )
}

const Portfolio = () => {

    const ref = useRef();

    const {scrollYProgress} = useScroll({
        target: ref, 
        offset:["end end", "start start"],
    });

    const scaleX = useSpring(scrollYProgress, {
        stiffness:100,
        damping:30,
    })

  return (
    <div className="portfolio" ref={ref} >
        <div className="progress">
            <h1>Featured Works</h1>
            <motion.div style={{scaleX}} className="progressBar"></motion.div>
        </div>
        {items.map(item=>(
            <Single item={item} key={item.id}/>
        ))}
    </div>
  );
};

export default Portfolio;