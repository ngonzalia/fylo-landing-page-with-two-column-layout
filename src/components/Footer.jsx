// assets
import Logo from '../assets/logo-white.svg';
import Phone from '../assets/icon-phone.svg';
import Email from '../assets/icon-email.svg';
import Fb from '../assets/icon-fb.svg';
import Tw from '../assets/icon-tw.svg';
import Ig from '../assets/icon-ig.svg';

const Footer = () => {

  let deadLink = '#';

  return (
    <footer className='footer'>
      <img
        src={Logo}
        alt='Logo'
        className='footer__logo'
      />

      <div className='footer__content'>
        
        <div className='footer__container-1'>
          <div className='footer__info'>
            <div className='footer__info--img-container'>
              <img
                src={Phone}
                alt='Phone icon'
                className='footer__info--phone-icon' />
            </div>
            <p className='info-text open-sans w-400 white'>
              Phone: +1-543-123-4567
            </p>
          </div>

          <div className='footer__info'>
            <div className='footer__info--img-container'>
              <img
                src={Email}
                alt='email icon'
                className='footer__info--email-icon' />
            </div>
            <p className='info-text open-sans w-400 white'>
              example@fylo.com
            </p>
          </div>
        </div>

        <div className='footer__container-2'>
          <ul className='footer__links'>
            <li><a href={deadLink} className='link open-sans w-400 white'>About Us</a></li>
            <li><a href={deadLink} className='link open-sans w-400 white'>Jobs</a></li>
            <li><a href={deadLink} className='link open-sans w-400 white'>Press</a></li>
            <li><a href={deadLink} className='link open-sans w-400 white'>Blog</a></li>
          </ul>

          <ul className='footer__links'>
            <li><a href={deadLink} className='link open-sans w-400 white'>Contact Us</a></li>
            <li><a href={deadLink} className='link open-sans w-400 white'>Terms</a></li>
            <li><a href={deadLink} className='link open-sans w-400 white'>Privacy</a></li>
          </ul>
        </div>

        <div className='footer__container-3'>
          <div className='container'>
            <img
              src={Fb}
              alt='facebook icon'
              className='fb-icon' />
          </div>
          <div className='container'>
            <img
              src={Tw}
              alt='twitter icon'
              className='tw-icon' />
          </div>
          <div className='container'>
            <img
              src={Ig}
              alt='instagram icon'
              className='ig-icon' />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;