import styled from 'styled-components';

export const Wrapper = styled.main`
  margin-top: 6.5rem;
  margin-left: ${({ sidebarOpen }) => (sidebarOpen ? '20em' : '0')};
  transition: margin 0.25s ease-in-out;
  min-width: 320px;
  padding: 3rem 1.5rem 1rem;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Body = styled.section`
  padding: 5rem 2rem 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 180px));
  grid-gap: 2rem;
  justify-content: center;
`;

export const Title = styled.h1`
  font-size: 1.7rem;
  font-weight: 900;
  letter-spacing: 2px;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    bottom: -8px;
    height: 3px;
    width: 3rem;
    border-radius: 20px;
    background-color: var(--clr-info);
  }
`;
