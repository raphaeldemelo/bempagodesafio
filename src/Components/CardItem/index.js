import React, { useContext, useState } from 'react';
import { BiTrash, BiPlus, BiMinus } from 'react-icons/bi'

import {
    Container,
    Titulo,
    AreaQuantidade,
    BotaoQuantidade,
    Input,
    BotaoLixeira,
} from './styles';

import { UserContext } from '../../Contexts/user';

export default function CardItem() {

    const [quantidade, setQuantidade] = useState(1);
    const { observacao, react, angular } = useContext(UserContext);

    function Incrementar() {
        setQuantidade(quantidade + 1);
    }

    function Decrementar() {
        if (quantidade > 1) {
            setQuantidade(quantidade - 1);
        }
    }

    return (
        <Container>
            <Titulo>Adesivo </Titulo>

            <AreaQuantidade>
                <BotaoQuantidade onClick={Decrementar}>
                    <BiMinus size={25} color='#fff' />
                </BotaoQuantidade>
                <Input type='text' readOnly value={quantidade} />
                <BotaoQuantidade onClick={Incrementar}>
                    <BiPlus size={25} color='#fff' />
                </BotaoQuantidade>
            </AreaQuantidade>

            <BotaoLixeira type='button'>
                <BiTrash size={25} color='#f00' />
            </BotaoLixeira>
        </Container >
    );
}