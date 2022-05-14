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
align-items: center;
`;

export const Span = styled.span`
color: #E5E5E5;
font-size: 24px;
font-weight: lighter;
`;

export const Strong = styled.strong`
color: #fff;
font-size: 24px;
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

export const Fomulario = styled.div`
display:flex;
width: 90%;
flex-direction: column;
align-items: center;
`;

export const Input = styled.input`
width: 100%;
height:50px;
background-color: #525561;
border: 2px solid #2312EA;
border-top-left-radius: 10px;
border-bottom-left-radius: 10px;
font-size: 20px;
caret-color: #fff;
color:#fff;
margin-bottom: 10px;
padding: 10px;
border-right-style: none;

::placeholder{
    color: #ddd;
}
`;

export const Footer = styled.div`
display:flex;
width: 80%;
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

export const AreaForm = styled.div`
display: flex;
width: 90%;
justify-content: space-between;
`;

export const AreaInput = styled.div`
display: flex;
width: 90%;
`;

export const AreaIcon = styled.div`
width: 50px;
height: 50px;
align-items: center;
display: flex;
background-color: #525561;
justify-content: center;
border: 2px solid #2312EA;
border-left-style: none;
border-top-right-radius: 10px;
border-bottom-right-radius: 10px;
`;