import Link from 'next/link';
import {NavBar} from '@styles/sharedStyles';

const Navigation = () => {
  
  return (
    <NavBar>
      <Link href={'/'}>Search</Link>
      <Link href={'/citiesList'}>Cities list</Link>
    </NavBar>
  )
}

export default Navigation;
