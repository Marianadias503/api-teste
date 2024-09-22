// src/components/post/styles.ts
import styled from 'styled-components';





;
export const Title = styled.div`

 text-align: center;
 margin-top:2rem;
 margin-bottom:2.5rem;
 color: #000000;
 font-size:2rem;
 font-weight:bold;

`;
export const PostBody= styled.div`
 
margin: 1.5rem;


`
export const TodosStyle = styled.div`

background-color: #A9A9A9;
border-radius: 20px;
padding: 1.5rem;
margin-bottom:2rem;

strong{
    font-family: 'Mulish", sans-serif';
    padding: 3rem;
    
    @media (max-width: 768px) {
       padding:0
}  
};

@media (max-width: 768px) {

margin:5px;
margin-bottom:1rem;


}

`;
