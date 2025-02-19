import { motion } from "framer-motion";

function Features() {
  return (
    <div className="flex flex-col p-10 mt-10 md:flex-row md:justify-center md:items-center md:w-80% md:mx-auto">
      <div className="md:flex md:flex-col">
        <motion.h2
          initial={{ y: -100 }}
          whileInView={{ y: 0 }}
          transition={{ type: "spring", stiffness: 20, duration: 1 }}
          className="text-6xl  text-slate-200  font-bold"
        >
          Things to do on AcademIQ
        </motion.h2>

        <div className="flex flex-col justify-center items-center gap-2 md:flex-row">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 2 }}
            className=" mt-20 flex flex-col max-w-md gap-3 p-3 items-center"
          >
            <img className="md:w-[200px]" src="./Features_Experiences.png" alt="PHOTO" />
            <h3 className="text-2xl text-slate-200 font-semibold">
              Experience
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
              aliquam fugiat totam itaque aperiam quasi est provident quaerat
              quos explicabo, debitis deserunt laboriosam dolores esse iste
              accusantium? Error, ullam dolores?
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 2 }}
            className=" mt-20 flex flex-col max-w-md gap-3 p-3 items-center"
          >
            <img className="md:w-[200px]" src="./Features_Companies.png" alt="PHOTO" />
            <h3 className="text-2xl text-slate-200 font-semibold">Companies</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
              non optio ipsam veritatis eveniet magni et quas, exercitationem
              beatae. Molestiae iure perspiciatis blanditiis illum!
              Reprehenderit sequi maxime quis tempora ipsum?
            </p>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 2.5 }}
        className="flex items-center justify-center"
      >
        <img
          src="../../public/INTERVIEW.png"
          alt="a photo of a interview"
          className="hidden md:w-[90%] md:mt-5 md:inline-block"
        />
      </motion.div>
    </div>
  );
}

export default Features;
