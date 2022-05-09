import React from 'react';
import { Link } from 'react-router-dom';
import LogoGit from '../../assets/adesivo.png';
import logo from '../../assets/logoheader.png';
import Created from '../../Components/Created';

import {
    Container,
    SectionLeft,
    SectionRight,
    Imagem,
    Header,
    Content,
    Texto,
    Titulo,
    Checkbox,
    ButtonArea,
    Botao,
    TextArea,
    Logo,
    Input,
} from './styles';

export default function Home() {
    return (
        <Container>
            <SectionLeft>
                <Header>
                    <Logo src={logo} />
                </Header>

                <Content>
                    <Texto>Formulário</Texto>
                    <Titulo>Compras de adesivos<span style={{ color: '#2500BB' }}>.</span></Titulo>
                    <Texto>Escolha seu adesivo</Texto>
                    <Checkbox style={{ marginTop: 30 }}>
                        <Input type='checkbox' />
                        <Texto style={{ marginLeft: 5 }}>React</Texto>
                    </Checkbox>
                    <Checkbox>
                        <Input type='checkbox' />
                        <Texto style={{ marginLeft: 5 }}>Angular</Texto>
                    </Checkbox>
                    <Checkbox style={{ marginBottom: 30 }}>
                        <Input type='checkbox' />
                        <Texto style={{ marginLeft: 5 }} o>Vue</Texto>
                    </Checkbox>

                    <Titulo style={{ marginBottom: 20 }}>Observações</Titulo>
                    <TextArea placeholder='escreva seu comentário...' />

                    <ButtonArea>
                        <Link to="/checkout">
                            <Botao>
                                <Texto>Comprar</Texto>
                            </Botao>
                        </Link>
                    </ButtonArea>
                </Content>
            </SectionLeft>

            <SectionRight>
                <Imagem src={LogoGit} />
            </SectionRight>

            <Created />
        </Container >
    );
}