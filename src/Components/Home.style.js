import styled from 'styled-components';
import { Button, DropdownButton, Dropdown } from 'react-bootstrap';

export const App = styled.html`

`

export const Header = styled.header`
  background-color: #bada55;
  width: 100vw;
  height: 75px;
  position: fixed;
  top: 0px;
  left: 0px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  `;

export const Body = styled.div`

`

export const Title = styled.h1`
  border-bottom: 2px solid black;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  font-size: 50px;

`;
export const DropDown = () => {
  return (
    <div>
      <DropdownButton
      id="dropdown-button-dark-example2"
      variant="secondary"
      menuVariant="dark"
      title="Dropdown button"
      className="mt-2"
    >
      <Dropdown.Item href="#/action-1" active>Action</Dropdown.Item>
      <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
      <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item href="#/action-4">Separated link</Dropdown.Item>
    </DropdownButton>
    </div>
  )
};