import React, { useContext } from 'react';
import { BiX } from 'react-icons/bi';
import check from '../../assets/check.svg';

import {
    Overlay,
    Container,
    Botao,
    Titulo,
    Imagem,
} from './styles';

import { UserContext } from '../../Contexts/user';

export default function Modal() {

    const { setIsVisible } = useContext(UserContext);
    
    return (
        <Overlay>
            <Container>
                <Botao type='button' onClick={() => setIsVisible(false)}>
                    <BiX size={25} color='#000' />
                </Botao>
                <Imagem src={check} />
                <Titulo>compra realizada com sucesso</Titulo>
            </Container>
        </Overlay>
    );
}