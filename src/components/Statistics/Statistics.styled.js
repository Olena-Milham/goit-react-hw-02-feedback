import styled from 'styled-components'


export const List=styled.ul`
list-style: none;
margin-top: ${p => p.theme.space[0]}px;
margin-bottom:${p => p.theme.space[5]}px;
`;

export const Item=styled.li`
margin-top: ${p => p.theme.space[0]}px;
margin-bottom:${p => p.theme.space[2]}px;
`;