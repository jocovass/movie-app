import React, { useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 20rem;
  height: 100vh;
  overflow: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
  background-color: var(--clr-secondary);
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.3);
  transform: ${(props) =>
    props.isOpen ? 'translateX(0)' : 'translateX(-130%)'};
  transition: transform 0.5s ease-in-out;
`;

const Navbar = ({ isOpen }) => {
  return (
    <Wrapper isOpen={isOpen}>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas,
      voluptates delectus. Odio delectus, dicta expedita reprehenderit eius esse
      provident in adipisci enim alias corrupti nemo nisi saepe libero, rem
      similique?Lorem ipsum dolor sit amet consectetur, adipisicing elit.
      Voluptas, voluptates delectus. Odio delectus, dicta expedita reprehenderit
      eius esse provident in adipisci enim alias corrupti nemo nisi saepe
      libero, rem similique?Lorem ipsum dolor sit amet consectetur, adipisicing
      elit. Voluptas, voluptates delectus. Odio delectus, dicta expedita
      reprehenderit eius esse provident in adipisci enim alias corrupti nemo
      nisi saepe libero, rem similique?Lorem ipsum dolor sit amet consectetur,
      adipisicing elit. Voluptas, voluptates delectus. Odio delectus, dicta
      expedita reprehenderit eius esse provident in adipisci enim alias corrupti
      nemo nisi saepe libero, rem similique?Lorem ipsum dolor sit amet
      consectetur, adipisicing elit. Voluptas, voluptates delectus. Odio
      delectus, dicta expedita reprehenderit eius esse provident in adipisci
      enim alias corrupti nemo nisi saepe libero, rem similique?Lorem ipsum
      dolor sit amet consectetur, adipisicing elit. Voluptas, voluptates
      delectus. Odio delectus, dicta expedita reprehenderit eius esse provident
      in adipisci enim alias corrupti nemo nisi saepe libero, rem
      similique?Lorem ipsum dolor sit amet consectetur, adipisicing elit.
      Voluptas, voluptates delectus. Odio delectus, dicta expedita reprehenderit
      eius esse provident in adipisci enim alias corrupti nemo nisi saepe
      libero, rem similique?Lorem ipsum dolor sit amet consectetur, adipisicing
      elit. Voluptas, voluptates delectus. Odio delectus, dicta expedita
      reprehenderit eius esse provident in adipisci enim alias corrupti nemo
      nisi saepe libero, rem similique?Lorem ipsum dolor sit amet consectetur,
      adipisicing elit. Voluptas, voluptates delectus. Odio delectus, dicta
      expedita reprehenderit eius esse provident in adipisci enim alias corrupti
      nemo nisi saepe libero, rem similique?Lorem ipsum dolor sit amet
      consectetur, adipisicing elit. Voluptas, voluptates delectus. Odio
      delectus, dicta expedita reprehenderit eius esse provident in adipisci
      enim alias corrupti nemo nisi saepe libero, rem similique?Lorem ipsum
      dolor sit amet consectetur, adipisicing elit. Voluptas, voluptates
      delectus. Odio delectus, dicta expedita reprehenderit eius esse provident
      in adipisci enim alias corrupti nemo nisi saepe libero, rem
      similique?Lorem ipsum dolor sit amet consectetur, adipisicing elit.
      Voluptas, voluptates delectus. Odio delectus, dicta expedita reprehenderit
      eius esse provident in adipisci enim alias corrupti nemo nisi saepe
      libero, rem similique?Lorem ipsum dolor sit amet consectetur, adipisicing
      elit. Voluptas, voluptates delectus. Odio delectus, dicta expedita
      reprehenderit eius esse provident in adipisci enim alias corrupti nemo
      nisi saepe libero, rem similique?Lorem ipsum dolor sit amet consectetur,
      adipisicing elit. Voluptas, voluptates delectus. Odio delectus, dicta
      expedita reprehenderit eius esse provident in adipisci enim alias corrupti
      nemo nisi saepe libero, rem similique?Lorem ipsum dolor sit amet
      consectetur, adipisicing elit. Voluptas, voluptates delectus. Odio
      delectus, dicta expedita reprehenderit eius esse provident in adipisci
      enim alias corrupti nemo nisi saepe libero, rem similique?Lorem ipsum
      dolor sit amet consectetur, adipisicing elit. Voluptas, voluptates
      delectus. Odio delectus, dicta expedita reprehenderit eius esse provident
      in adipisci enim alias corrupti nemo nisi saepe libero, rem
      similique?Lorem ipsum dolor sit amet consectetur, adipisicing elit.
      Voluptas, voluptates delectus. Odio delectus, dicta expedita reprehenderit
      eius esse provident in adipisci enim alias corrupti nemo nisi saepe
      libero, rem similique?Lorem ipsum dolor sit amet consectetur, adipisicing
      elit. Voluptas, voluptates delectus. Odio delectus, dicta expedita
      reprehenderit eius esse provident in adipisci enim alias corrupti nemo
      nisi saepe libero, rem similique?
    </Wrapper>
  );
};

export default Navbar;
