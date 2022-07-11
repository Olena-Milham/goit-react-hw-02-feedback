import styled from 'styled-components'

export const BtnList=styled.ul`
margin-top: ${p => p.theme.space[0]}px;
margin-bottom:${p => p.theme.space[5]}px;
list-style: none;
display: flex;
align-items: center;
`;

export const BtnItem=styled.li`
margin-left:  ${p => p.theme.space[3]}px;
`
export const FeedbackBtn=styled.button`
  /* display: inline-flex; 
  align-items: center; 
  gap: ${p => p.theme.space[2]}px;
  margin: ${p => p.theme.space[0]}; */
  padding-top: ${p => p.theme.space[3]}px;
  padding-bottom: ${p => p.theme.space[3]}px;
  padding-left: ${p => p.theme.space[4]}px;
  padding-right: ${p => p.theme.space[4]}px;
  border: ${p => p.theme.borders.normal};
  outline: none;
  border-radius: ${p => p.theme.radii.normal};
  box-shadow: ${p=>p.theme.shadows.box2};
  background-color: ${p => {
     return p.disabled ? p.theme.colors.muted : p.theme.colors.primary;
  }};
  color: ${p => p.theme.colors.white};
  cursor: pointer;
  :hover:not(:disabled),
  :focus:not(:disabled) {
    background-color: ${p => p.theme.colors.secondary};
  }`;
