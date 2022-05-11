import React from 'react';
import { BiTrash, BiPlus, BiMinus } from 'react-icons/bi'

import {
    Container,
    Titulo,
    AreaQuantidade,
    BotaoQuantidade,
    Input,
    BotaoLixeira,
} from './styles';

export default function CardItem() {
    return (
        <Container>
            <Titulo>Adesivo React</Titulo>

            <AreaQuantidade>
                <BotaoQuantidade>
                    <BiMinus size={25} color='#fff' />
                </BotaoQuantidade>
                <Input type='text' readOnly value='1' />
                <BotaoQuantidade>
                    <BiPlus size={25} color='#fff' />
                </BotaoQuantidade>
            </AreaQuantidade>

            <BotaoLixeira type='button'>
                <BiTrash size={25} color='#f00' />
            </BotaoLixeira>
        </Container >
    );
}