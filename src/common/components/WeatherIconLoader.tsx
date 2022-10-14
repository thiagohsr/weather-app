import Image from 'next/image';
import styled from 'styled-components';

// const WeatherIconLoader = (props: any) => {
//   console.log('props::called ', props);
//   const { alt, imageName } = props;

//   return <Image
    
//     width={25} height={25}
//     alt="default"
//     src={"/images/01d@2x.png"}
//   />;
// };

const IconLoaderStyled = styled.img.attrs({
  width: 32,
  height: 32
})`
  position : absolute;
  top: -2px;
  left: -35px;
`

export default IconLoaderStyled;