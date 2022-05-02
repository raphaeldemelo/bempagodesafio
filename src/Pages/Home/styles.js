import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    width: 100vw;
    height: 100vh;
    background-color: #d1d1d1;
`;

export const SectionLeft = styled.div`
flex: 1;
background-color: #272A37;
padding: 10px;
border-top-right-radius: 50px;
border-bottom-right-radius: 50px;
display: flex;
flex-direction: column;
justify-content: center;
`;

export const Header = styled.div`
position: absolute;
top: 30px;
left: 100px;

`;

export const Logo = styled.img`
width: 200px;
`;

export const Content = styled.div`
display: flex;
flex-direction: column;
margin-left: 10%;
`;

export const Texto = styled.span`
color: #e1e1e1;
font-size: 24px;
`;

export const Titulo = styled.h1`
color: #fff;
font-size: 40px;
`;

export const Checkbox = styled.div``;

export const Input = styled.input`
`;

export const ButtonArea = styled.div`
display: flex;
justify-content: flex-end;
margin-right: 12%;
margin-top: 10px;
`;

export const TextArea = styled.textarea`
border-radius: 10px;
max-width: 750px;
min-width: 750px;
max-height: 200px;
min-height: 200px;
padding: 30px;
background-color: #525561;
border: 2px solid #2312EA;
border-top-right-radius: 10px;
border-top-left-radius: 50px;
border-bottom-right-radius: 50px;
border-bottom-left-radius: 10px;
font-size: 20px;
caret-color: #fff;
color:#fff;

::placeholder{
    color: #ddd;
}
`;

export const Botao = styled.button`
border: 0;
padding: 10px;
border-radius: 10px;
width: 200px;
background: linear-gradient( #2500BB, #03228F);
`;



//------------------------------------------
export const SectionRight = styled.div`
flex: 1;
background-color: #d1d1d1;
display:flex;
align-items: center;
justify-content: center;
`;

export const Imagem = styled.img``;