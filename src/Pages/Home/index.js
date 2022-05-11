import React from 'react';
import { Link } from 'react-router-dom';
import LogoGit from '../../assets/adesivo.png';
import logo from '../../assets/logoheader.png';
import Created from '../../Components/Created';
import CardBuy from '../../Components/CardBuy';

import {
    Container,
    SectionRight,
    Imagem,
    SectionLeft,

} from './styles';

export default function Home() {
    return (
        <Container>
            <SectionLeft>
                <CardBuy />
            </SectionLeft>


            <SectionRight>
                <Imagem src={LogoGit} />
            </SectionRight>

            <Created />
        </Container >
    );
}