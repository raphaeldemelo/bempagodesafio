import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BsPerson } from 'react-icons/bs'
import { FiCreditCard, FiLock, FiCalendar } from 'react-icons/fi'
import CreditCard from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';

import {
    Container,
    Header,
    Title,
    Span,
    Strong,
    Content,
    Fomulario,
    Input,
    Footer,
    Botao,
    AreaForm,
    AreaInput,
    AreaIcon,
} from './styles';

export default function CardCheckout() {

    const [Nome, setNome] = useState('');
    const [Numero, setNumero] = useState('');
    const [Validade, setValidade] = useState('');
    const [Cvc, setCvc] = useState('');
    const [Focused, setFocused] = useState('');

    function changeFocus(e) {
        setFocused(e.target.name);
    }


    return (
        <Container>
            <Header>
                <Strong>Detalhes do cartão</Strong>
            </Header>

            <Content>
                <CreditCard
                    number={Numero}
                    name={Nome}
                    expiry={Validade}
                    cvc={Cvc}
                    focused={Focused}
                />
            </Content>

            <Title>
                <Strong>Sua compra está quase finalizada...</Strong>
                <Span>Preencha seus dados abaixo</Span>
            </Title>

            <Fomulario>



                <AreaInput>
                    <Input
                        type="text"
                        value={Nome}
                        onChange={(e) => setNome(e.target.value)}
                        placeholder="nome completo"
                        onFocus={changeFocus}
                    />
                    <AreaIcon>
                        <BsPerson size={20} color="white" />
                    </AreaIcon>
                </AreaInput>

                <AreaInput>
                    <Input
                        type="number"
                        value={Numero}
                        onChange={(e) => setNumero(e.target.value)}
                        placeholder="número do cartão"
                        onFocus={changeFocus} />

                    <AreaIcon>
                        <FiCreditCard size={20} color="white" />
                    </AreaIcon>

                </AreaInput>


                <AreaForm>

                    <AreaInput>
                        <Input
                            type="number"
                            value={Validade}
                            onChange={(e) => setValidade(e.target.value)}
                            style={{ width: 190 }}
                            placeholder="validade"
                            onFocus={changeFocus} />
                        <AreaIcon>
                            <FiCalendar size={20} color="white" />
                        </AreaIcon>
                    </AreaInput>

                    <AreaInput>
                        <Input
                            type='number'
                            value={Cvc}
                            onChange={(e) => setCvc(e.target.value)}
                            style={{ width: 190 }}
                            placeholder="cvc"
                            onFocus={changeFocus} />
                        <AreaIcon>
                            <FiLock size={20} color="white" />
                        </AreaIcon>
                    </AreaInput>

                </AreaForm>
            </Fomulario>

            <Footer>
                <Botao onClick={() => alert('clicou em finalizar')}>
                    <Span>Finalizar</Span>
                </Botao>
            </Footer>


        </Container >
    );
}