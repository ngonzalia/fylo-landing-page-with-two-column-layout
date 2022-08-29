import Logo from '../assets/logo.svg';

const Nav = () => {

  let link = '#';

  return (
    <nav className='nav'>
      <img
        src={Logo}
        alt='Logo'
        className='nav__img' />
      <div className='nav__links'>
        <a className='link raleway w-400 dark-blue' href={link}>Features</a>
        <a className='link raleway w-400 dark-blue' href={link}>Team</a>
        <a className='link raleway w-400 dark-blue' href={link}>Sign In</a>
      </div>
    </nav>
  );
};

export default Nav;