import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logoheader.png';

import {
    Container,
    Header,
    Logo,
    Title,
    Span,
    Strong,
    Content,
    Checkbox,
    TextArea,
    Input,
    Footer,
    Botao,
    Option,
} from './styles';

export default function CardBuy() {
    return (
        <Container>
            <Header>
                <Logo src={logo} />
            </Header>

            <Title>
                <Span>Formulário</Span>
                <Strong>Compras de adesivos<span style={{ color:'#2500BB'}}>.</span></Strong>
                <Span>Quais adesivos deseja?</Span>
            </Title>

            <Content>
                <Checkbox>
                    <input type="checkbox" />
                    <Option>React</Option>
                </Checkbox>
                <Checkbox>
                    <input type="checkbox" />
                    <Option>Angular</Option>
                </Checkbox>
                <Checkbox>
                    <input type="checkbox" />
                    <Option>Vue</Option>
                </Checkbox>
            </Content>

            <TextArea>
                <Span style={{ marginBottom: 10 }}>Observações</Span>
                <Input placeholder="se quiser, deixe um comentário..." />
            </TextArea>

            <Footer>
                <Link to="/checkout">
                    <Botao>
                        <Span>Comprar</Span>
                    </Botao>
                </Link>
            </Footer>


        </Container>
    );
}