import styled from 'styled-components'

export const NewElement = styled.div`
white-space: nowrap;
padding: 10px 20px;
border: none;
border-bottom: solid 3px #aaa;
background-color: #fff;
margin: 20px 0;
border-radius: 5px;
box-shadow: 0px 00px 50px #0005;
`;
export const Input = styled.input`
background-color: #0000;
border: none;
font-family: 'Courier New', Courier, monospace;
font-size: 0.9rem;
padding: 0 20px;
&:focus {
    outline: none;
}
`;
export const Button = styled.button`
margin: 0 0 0 10px;
background-color: #0000;
border: none;
width: 30px;    
height: 30px;
&:hover {
    color: #aaa;
}
`;