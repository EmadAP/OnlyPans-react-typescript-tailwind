import { ClassType, SelectedPage } from '@/shared/types'
import image1 from '@/assets/image1.jpg'
import image2 from '@/assets/image2.jpeg'
import image3 from '@/assets/image3.jpeg'
import image4 from '@/assets/image4.jpg'
import image5 from '@/assets/image5.jpg'
import image6 from '@/assets/image6.jpg'
import { motion } from 'framer-motion'
import HText from '@/shared/HText'
import Class from "./Class"

const classes: Array<ClassType> = [
    {
        name: "With ONLY PANS classes You’ll…",
        description: "Get simple daily lessons that take you through each of the habits you need to cook without recipes",
        image: image1,
    },
    {
        name: "With ONLY PANS classes You’ll…",
        description: "Learn basic cooking techniques like chopping, sautéing, and roasting",
        image: image2,
    },
    {
        name: "With ONLY PANS classes You’ll…",
        description: "Develop your flavor intuition to know how to “season to taste” and “fix” a dish that isn’t working for you",
        image: image3,
    },
    {
        name: "With ONLY PANS classes You’ll…",
        description: "Develop your cooking intuition so you know what it means to cook “until done”",
        image: image4,
    },
    {
        name: "With ONLY PANS classes You’ll…",
        description: "Learn how to construct healthy delicious meals from almost anything",
        image: image5,
    },
    {
        name: "With ONLY PANS classes You’ll…",
        description: "Learn how to “use up” everything in your fridge in delicious and creative ways",
        image: image6,
    },
]

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const OurClasses = ({ setSelectedPage}: Props) => {
  return (
    <section id='ourclasses' className='w-full bg-primary-100 py-40'>
        <motion.div
            onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
        >
            <motion.div
                className='mx-auto w-5/6'
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5}}
                variants={{
                    hidden: { opacity: 0, x: -50},
                    visible: { opacity: 1, x: 0 }
                }}
            >
                <div className='md:w-3/5'>
                    <HText>OUR CLASSES</HText>
                    <p className='py-5'>
                    Join world-class chefs who are revolutionizing cooking at home with interactive online cooking classes! 
                    Now you can take cooking lessons online in the comfort of your kitchen through a live-streaming virtual platform taught by a talented chef. 
                    You'll find the best online cooking classes for home cooks that offer step-by-step coaching, tips and let you ask all the questions you want. 
                    Book a class today and learn to cook online from home!
                    </p>
                </div>

            </motion.div>
            <div className='mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden'>
                <ul className='w-[2800px] whitespace-nowrap'>
                    {classes.map(( item: ClassType, index ) => (
                        <Class 
                            key={`${item.name}-${index}`}
                            name={item.name}
                            description={item.description}
                            image={item.image}
                        />
                    ))}
                </ul>
            </div>
        </motion.div>
    </section>
  )
}

export default OurClasses