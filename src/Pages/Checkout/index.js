import React, { useContext } from 'react';

import { BiArrowBack } from 'react-icons/bi'
import { TiShoppingCart } from 'react-icons/ti'
import { Link } from 'react-router-dom';

import CardCheckout from '../../Components/CardCheckout';
import CardItem from '../../Components/CardItem';
import Modal from '../../Components/Modal';
import { UserContext } from '../../Contexts/user';

import {
    Container,
    SectionLeft,
    SectionRight,
    Header,
    Title,
    Span,
    AreaTitulo,
} from './styles';

export default function Checkout() {

    const { isVisible } = useContext(UserContext);

    return (
        <Container>
            <SectionLeft>
                <Header>
                    <Link to='/'>
                        <div style={{ alignItems: 'center', display: 'flex' }}>
                            <BiArrowBack size={30} color="#000" />
                            <Span style={{ marginLeft: 10 }}>Página anterior</Span>
                        </div>
                    </Link>
                </Header>

                <Title>
                    <TiShoppingCart size={60} color="#000" />
                    <AreaTitulo>
                        <h1 style={{ lineHeight: 1 }}>Carrinho</h1>
                        <Span>Você tem 2 item(s) no carrinho</Span>
                    </AreaTitulo>
                </Title>

                <CardItem />

            </SectionLeft>

            {isVisible ? <Modal /> : null}

            <SectionRight>
                <CardCheckout />
            </SectionRight>
        </Container>
    );
}