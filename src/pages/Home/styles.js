import styled from 'styled-components';

export const Container = styled.div` 
background-color: #181f36;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-evenly;
padding: 20px;
height: 100vh;
`




export const Form = styled.form`
display: flex;
flex-direction: column;
align-items: center;
gap: 20px;
max-width: 500px;
width: 100%;

`

export const ContainerInput = styled.div`
display: flex;
gap: 20px;


`

export const Input = styled.input`
border-radius: 10px;
border: 1px solid #d2dae2;
background-color: #fff;
padding: 12px 20px;
outline: none;
width: 100%;

`

export const InputLabel = styled.label`
color: #fff;
font-size: 12px;
font-weight: 500;

span {
    color: #ef4f45;
    font-weight: bold;
}


`

export const Button = styled.button`
border: none;
background: linear-gradient(180deg, #fe735d 0%, #ff6378 100%);
font-size: 16px;
color: #fff;
padding: 16px 32px;
width: fit-content;
cursor: pointer;
border-radius: 30px;

&:hover {
    opacity: 0.8;
}
&:active {
    opacity: 0.6;
}
`

export const Title = styled.h2`
color: #fff;
text-align: center;
font-size: 38px;
font-style: normal;
font-weight: 600;

`;
