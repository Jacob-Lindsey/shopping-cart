import styled from 'styled-components';

function Header() {
  return (
    <HeaderWrapper>
        <NavWrapper>
            <NavUL>
            </NavUL>
        </NavWrapper>
    </HeaderWrapper>
  );
}

export default Header;

const HeaderWrapper = styled.main`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

const NavWrapper = styled.nav`
    width: 100%;
`;

const NavUL = styled.ul`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
`;
