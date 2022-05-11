import React from 'react';

import { BiArrowBack } from 'react-icons/bi'
import { TiShoppingCart } from 'react-icons/ti'
import { Link } from 'react-router-dom';

import CardCheckout from '../../Components/CardCheckout';


import {
    Container,
    SectionLeft,
    SectionRight,
    Header,
    Span,

} from './styles';

export default function Checkout() {
    return (
        <Container>
            <SectionLeft>
                <Header>
                    <Link to='/'>
                        <div style={{ alignItems: 'center', display: 'flex' }}>
                            <BiArrowBack size={30} color="#000" />
                            <span style={{ marginLeft: 10 }}>Página anterior</span>
                        </div>
                    </Link>
                </Header>
            </SectionLeft>

            <SectionRight>
                <CardCheckout />
            </SectionRight>
        </Container>
    );
}