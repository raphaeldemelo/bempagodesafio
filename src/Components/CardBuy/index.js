import React, { useContext } from 'react';
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

import { UserContext } from '../../Contexts/user';

export default function CardBuy() {

    const { observacao, setObservacao } = useContext(UserContext);

    return (
        <Container>
            <Header>
                <Logo src={logo} />
            </Header>

            <Title>
                <Span>Formulário</Span>
                <Strong>Compras de adesivos<span style={{ color: '#2500BB' }}>.</span></Strong>
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
                <Input
                    value={observacao}
                    onChange={(e) => setObservacao(e.target.value)}
                    placeholder="se quiser, deixe um comentário..."
                />
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