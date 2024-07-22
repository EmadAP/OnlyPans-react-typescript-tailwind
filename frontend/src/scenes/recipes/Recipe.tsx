import { RecipesSidePage } from '@/shared/types';
import { motion } from 'framer-motion';

import { Link } from 'react-router-dom';

const childVariant ={
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1},
}


type Props = {
  icon: JSX.Element;
  title: string;
  description: string;
  sidePage: (value: RecipesSidePage) => void;  
}

const Recipe = ({ icon, title, description, sidePage }: Props) => {
  return (
    <motion.div 
    variants={childVariant}
    className='mt-5 rounded-md border-2 border-gray-100 px-5 py-16 text-center'>
        <div className='mb-4 flex justify-center'>
            <div className='rounded-full border-2 border-gray-100 bg-primary-100 p-4'>
                {icon}
            </div>
        </div>

        <h4 className='font-bold'>{title}</h4>
        <p className='my-3'>{description}</p>
        <Link
            className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
            onClick={() => sidePage(RecipesSidePage.SearchMyRecipes)}
            to="/searchMyRecipes"
            >
                <p>Learn More</p>
        </Link>
    </motion.div>
  )
}

export default Recipe