import { useContext } from 'react';
import Image from 'next/image';
import { Box } from '@chakra-ui/react';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';
import { Slide, Zoom } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';


const slidingProps = {
    prevArrow: <FaArrowAltCircleLeft size="3rem" style={{ marginLeft: '15px' }} />,
    nextArrow: <FaArrowAltCircleRight size="3rem" style={{ marginRight: '15px' }} />,
    autoplay: true,
    infinite: true,
    pauseOnHover: true,
    duration: 4000,
    indicators: true,
    scale: 1.4
}

const ImageSrollbar = ({ data }) => (
    <Zoom {...slidingProps}>
        {data.map((item) => (
        <Box key={item.id} className="each-slide-effect" p='1' overflow="none" >
        <Image
            style={{ borderRadius: '8px' }}
            alt="property"
            placeholder="blur"
            blurDataURL={item.url}
            src={item.url}
            width={1000}
            height={500}
            sizes="(max-width: 500px) 100px, (max-width: 1024px) 400px, 1000px"
        />
        </Box>
    ))}
    </Zoom>
);

export default ImageSrollbar