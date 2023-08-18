import { Fragment, useContext } from "react";
// import {AnimatePresence, motion} from "framer-motion"
// import { slideVariants } from '../../../utils/slideVariants'
import TextData from '../../../assets/data/carouselImageAndText.json'
import { IndexContext } from "../../../utils/contexts/index.context";
import {
            TextContainerDiv,
            TextContainerDivRight,
            TextDiv,
        } from './text.styles'



const Text = () => {
    const{currentIndex} = useContext(IndexContext);

    const textData = [
        "Know about our services",
        "Know more about us",
        "Come, ship with us",
        "Contact us"
      ]

    return (
        <Fragment>

                    {
                        (currentIndex%2 === 0) ?
                        (
                            <TextContainerDiv>
                                <TextDiv>
                                        {
                                            TextData.text[currentIndex]
                                        }
                                </TextDiv>
                            </TextContainerDiv>
                        ) :
                        (
                            <TextContainerDivRight>
                                <TextDiv>
                                    {
                                        TextData.text[currentIndex]
                                    }
                                </TextDiv>
                            </TextContainerDivRight>
                        )
                                
                }

        </Fragment>
    )
}

export default Text;

// <AnimatePresence>
// <motion.div

//     variants={slideVariants}
//     initial="visible"
//     animate={{ x: [null, 0] }}
//     exit="exit"
//     whileHover={{
//         scale: 1.02,
//         transition: { duration: 1 },
//         backgroundRepeat: 'no-repeat',
//     }}
// >