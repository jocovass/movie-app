import styled, { css } from 'styled-components';

export const Wrapper = styled.main`
  margin-top: 6rem;
  margin-left: ${({ sidebarOpen }) => (sidebarOpen ? '17em' : '0')};
  transition: margin 0.25s ease-in-out;
  min-width: 320px;
  padding: 3.5rem 1rem 1rem;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Body = styled.section`
  padding-top: 5rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min-content, 200px));
  grid-gap: 2rem 5rem;
  justify-content: center;
`;

export const Title = styled.h1`
  text-transform: capitalize;
  color: var(--clr-primary);
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

//SingleItem
export const TertiaryTitle = styled.h3`
  font-size: 1.3rem;
  letter-spacing: 1px;
  font-weight: 400;
  margin-bottom: 1rem;
  color: var(--clr-primary);
`;

export const ImgContainer = styled.div`
  height: 25rem;
  width: 100%;
  border-radius: 0 0 40px 40px;
  position: relative;
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 0 0 40px 40px;
`;

// Error and NoMatch components
export const ErrorWrapper = styled(Wrapper)`
  text-align: center;
`;

export const ErrorTitle = styled.h1`
  text-transform: uppercase;
  letter-spacing: 3px;
  color: var(--clr-info);
  margin-bottom: 5rem;
`;

export const ErrorImg = styled.img`
  display: inline-block;
  width: 80%;
  max-width: 40rem;
  height: auto;
`;

export const ErrorText = styled.p`
  margin: 3rem 0 4rem;
  color: var(--clr-primary);
  font-size: 1.1rem;
`;

export const btnStyle = css`
  text-decoration: none;
  font-size: 1.2rem;
  color: var(--clr-primary-light);
  text-transform: uppercase;
  display: inline-block;
  padding: 0.75rem 1.5rem;
  border: 1px solid var(--clr-primary-light);
  border-radius: 50px;
  transition: 0.15s all ease-in-out;

  &:hover {
    color: var(--clr-primary);
    border-color: var(--clr-info);
  }
`;
