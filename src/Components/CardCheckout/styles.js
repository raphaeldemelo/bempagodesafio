import styled from 'styled-components';

export const Container = styled.div`
background-color: #272A37;
width: 600px;
height: 880px;
border-radius: 30px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
`;

export const Header = styled.div`
width: 90%;
padding: 25px;
border-bottom: 1px solid #525252;
display: flex;
align-items: center;
justify-content: center;
`;

export const Logo = styled.img``;

export const Title = styled.div`
display:flex;
width: 90%;
flex-direction: column;
`;

export const Span = styled.span`
color: #E5E5E5;
font-size: 24px;
`;

export const Strong = styled.strong`
color: #fff;
font-size: 40px;
`;

export const Content = styled.div`
display:flex;
width: 90%;
flex-direction: column;
`;

export const Checkbox = styled.div`
display: flex;
align-items: center;
`;

export const TextArea = styled.div`
display:flex;
width: 90%;
flex-direction: column;
`;

export const Input = styled.textarea`
border-radius: 10px;
max-width: 100%;
min-width: 100%;
max-height: 200px;
min-height: 200px;
padding: 30px;
background-color: #525561;
border: 2px solid #2312EA;
border-radius: 10px;
font-size: 20px;
caret-color: #fff;
color:#fff;

::placeholder{
    color: #ddd;
}
`;

export const Footer = styled.div`
display:flex;
width: 90%;
justify-content: flex-end;
border-top: 1px solid #525252;
padding-top: 30px;
padding-bottom: 30px;
`;

export const Botao = styled.button`
border: none;
padding: 10px;
border-radius: 10px;
background-color: #2500BB;
width: 535px;
`;

export const Option = styled.h2`
color: #E5E5E5;
margin-left: 5px;
font-size: 18px;
`;