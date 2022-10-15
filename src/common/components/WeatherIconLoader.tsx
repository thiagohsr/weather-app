import Image from 'next/image';
import styled from 'styled-components';

const IconLoaderStyled = styled.img.attrs({
  width: 32,
  height: 32
})`
  position : absolute;
  top: -2px;
  left: -35px;
`

export default IconLoaderStyled;