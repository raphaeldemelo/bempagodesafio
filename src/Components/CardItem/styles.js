import styled from 'styled-components';

export const Container = styled.div`
background-color: #fff;
width: 80%;
padding: 35px;
border-radius: 10px;
-webkit-box-shadow: 0px 6px 13px 2px rgba(0,0,0,0.1); 
box-shadow: 0px 6px 13px 2px rgba(0,0,0,0.1);
display: flex;
justify-content: space-between;
`;

export const Titulo = styled.strong``;

export const AreaQuantidade = styled.div`
display: flex;
align-items: center;
`;

export const BotaoQuantidade = styled.button`
border: none;
border-radius: 5px;
background-color: #000;
`;

export const BotaoLixeira = styled.button`
border: none;
background: none;
`;

export const Input = styled.input`
width: 50px;
text-align: center;
border: none;
`;