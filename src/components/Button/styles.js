import styled from "styled-components";

export const Button = styled.button`
border: ${props => props.theme === 'primary' ? 'none' : '1px solid #d2dae2'};
background: ${props => props.theme === 'primary' ? 'linear-gradient(180deg, #fe735d 0%, #ff6378 100%)' : 'transparent'} ;
font-size: 16px;
color: ${props => props.isClicked ? '#ff0000' : '#fff'};
padding: 16px 32px;
width: fit-content;
cursor: pointer;
border-radius: 30px;

&:hover {
    opacity: ${props => props.theme === 'primary' ? '0.5' : '0.8'}
}
&:active {
    opacity: ${props => props.theme === 'primary' ? '0.5' : '0.8'}
}
`