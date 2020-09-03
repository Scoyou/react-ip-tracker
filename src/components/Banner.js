import React from 'react';
import { Container, Image } from 'react-bootstrap';

import background from '../images/pattern-bg.png'
import useWindowDimensions from './useWindowDimensions';

const Banner = (props) => {
    const { width } = useWindowDimensions();

    return(
    <Container fluid>
        <Image src={background} width={width} />
    </Container>
    )
}

export default Banner;