import Image from 'next/image';
import styled from 'styled-components';

const IconLoaderStyled = styled.img.attrs({
  width: 32,
  height: 32
})`
  position : absolute;
  top: -5px;
  left: 0px;
`

export default IconLoaderStyled;