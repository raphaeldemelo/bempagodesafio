import styled from 'styled-components';

export const Container = styled.div`
position: absolute;
bottom: 15px;
right: 15px;
border: 1px solid #fff;
height: 80px;
width: 80px;
display: flex;
border-radius: 40px;
overflow: hidden;
background-color: #416822;
justify-content: space-between;
transition: 0.75s;

:hover{
    width: 360px;
    transition: 0.75s;
}
`;

export const Detalhes = styled.div`
position: relative;
width: 80px;
height: 80px;
display: flex;
justify-content: space-between;
align-items: center;
overflow: hidden;
transition: 0.75s;
`;

export const Imagem = styled.img`
position: relative;
height: 100%;
left: 0;
top: 0%;
width: 100%;
object-fit: contain;
`;

export const AreaImagem = styled.div`
height: 80px;
min-height: 80px;
position: relative;
padding: 0%;
overflow: hidden;
border-radius: 50%;
`;

export const Titulo = styled.p`
color: #ddd;
`;

export const Texto = styled.p`
color: #fff;
`;