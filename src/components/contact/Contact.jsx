import { useRef } from "react";
import "./contact.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    y: 500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

const Contact = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="contact"
      variants={variants}
      initial="initial"
      whileInView="animate"
    >
      <motion.div className="textContainer" variants={variants}>
        <motion.h1 variants={variants}>Let's work together</motion.h1>
        <motion.div className="item" variants={variants}>
          <h2>Mail</h2>
          <span>hello@react.dev</span>
        </motion.div>
        <motion.div className="item" variants={variants}>
          <h2>Address</h2>
          <span>hello streeet, New York</span>
        </motion.div>
        <motion.div className="item" variants={variants}>
          <h2>Phone</h2>
          <span>+52 234 567 8901</span>
        </motion.div>
      </motion.div>
      <div className="formContainer">
        <motion.div
          className="phoneSvg"
          initial={{ opacity: 1 }}
          whileInView={{ opacity: 0 }}
          transition={{ delay: 3, duration: 1 }}
        >
          <svg
            fill="orange"
            width="256px"
            height="256px"
            viewBox="0 0 64 64">
                <motion.path 
                initial={{pathLength:0}}
                animate={isInView && {pathLength:1}}
                transition={{duration:3}}
                d="M54.5058,18.9509c-0.0022-0.0026-0.0026-0.0059-0.0048-0.0085c-0.0224-0.0256-0.0533-0.0368-0.0776-0.0596 c-0.7969-0.7159-1.8391-1.1645-2.9922-1.1645H46.627V4.5234C46.627,2.5806,45.0464,1,43.1035,1H11.5938 C9.6509,1,8.0703,2.5806,8.0703,4.5234v54.9531C8.0703,61.4194,9.6509,63,11.5938,63h31.5098 c1.9429,0,3.5234-1.5806,3.5234-3.5234V43.6719h4.8042c1.2134,0,2.3118-0.4882,3.1218-1.2725 c0.0059-0.0059,0.014-0.0076,0.0198-0.0137c0.0016-0.0016,0.0019-0.0039,0.0035-0.0056c0.8331-0.8176,1.3535-1.9531,1.3535-3.2103 V22.2168C55.9297,20.9278,55.3774,19.7718,54.5058,18.9509z M51.4312,19.7183c0.1989,0,0.39,0.0293,0.5755,0.0734L38.1084,31.9175 L24.2022,19.793c0.1868-0.0447,0.3792-0.0747,0.5795-0.0747H51.4312z M33.4756,30.5323l-10.66,10.1625 c-0.3283-0.4235-0.5319-0.9485-0.5319-1.5248V22.2168c0-0.4269,0.1176-0.8231,0.307-1.175L33.4756,30.5323z M19.3521,3h15.9897 v1.3164c0,0.7256-0.5903,1.3159-1.3159,1.3159H20.668c-0.7256,0-1.3159-0.5903-1.3159-1.3159V3z M11.5938,3h5.7583v1.3164 c0,1.8286,1.4873,3.3159,3.3159,3.3159h13.3579c1.8286,0,3.3159-1.4873,3.3159-3.3159V3h5.7617 c0.8398,0,1.5234,0.6836,1.5234,1.5234v13.1948H24.7817c-1.1594,0-2.2072,0.4528-3.0056,1.1758 c-0.021,0.0201-0.0482,0.0295-0.0676,0.0518c-0.002,0.0023-0.0024,0.0054-0.0044,0.0077 c-0.8698,0.8208-1.4204,1.9758-1.4204,3.2633v0.1577h-3.8262c-0.5522,0-1,0.4478-1,1s0.4478,1,1,1h3.8262v4.2471h-3.8262 c-0.5522,0-1,0.4478-1,1s0.4478,1,1,1h3.8262v5.1733h-3.8262c-0.5522,0-1,0.4478-1,1s0.4478,1,1,1h3.8262v1.375 c0,2.4824,2.0176,4.502,4.498,4.502H44.627V55.749H10.0703V4.5234C10.0703,3.6836,10.7539,3,11.5938,3z M43.1035,61H11.5938 c-0.8398,0-1.5234-0.6836-1.5234-1.5234V57.749H44.627v1.7275C44.627,60.3164,43.9434,61,43.1035,61z M51.4312,41.6719H24.7817 c-0.0289,0-0.0556-0.0076-0.0842-0.0085l10.2917-9.8113l2.4619,2.1465c0.1885,0.1641,0.4229,0.2461,0.6572,0.2461 s0.4692-0.082,0.6572-0.2466l2.8806-2.5132l10.5753,10.0466C51.9716,41.6156,51.709,41.6719,51.4312,41.6719z M53.9297,39.1699 c0,0.3624-0.0811,0.7049-0.2201,1.0161L43.1602,30.1639l10.4601-9.1264c0.191,0.3529,0.3094,0.7506,0.3094,1.1793V39.1699z">
                </motion.path>
          </svg>
        </motion.div>
        <motion.form
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 4 }}
        >
          <input type="text" required placeholder="Name" />
          <input type="email" required placeholder="Email" />
          <textarea rows={8} placeholder="Message" />
          <button>Submit</button>
        </motion.form>
      </div>
    </motion.div>
  );
};

export default Contact;