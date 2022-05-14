import styled from 'styled-components';

export const Overlay = styled.div`
background-color: rgba(0, 0, 0, 0.7);
position: fixed;
top: 0;
bottom: 0;
left: 0;
right: 0;
display: flex;
justify-content: center;
align-items: center;
z-index: 1;
`;

export const Container = styled.div`
background-color: #fff;
width: 100%;
max-width: 400px;
padding: 2rem 3rem;
border-radius: 5px;
box-shadow: 0 0 60px 0 rgba(0, 0, 0, 0.05);
text-align: center;
position: relative;
`;

export const Imagem = styled.img`
width: 100px;
`;

export const Titulo = styled.h1`
font-size: 2.25em;
font-weight: bold;
color: blue;
`;

export const Botao = styled.button`
position: absolute;
right: 0.5rem;
top: 0.5rem;
background: none;
border: none;
`;