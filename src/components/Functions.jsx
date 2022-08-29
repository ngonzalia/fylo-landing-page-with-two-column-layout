import Card from './Card';

import Illustration2 from '../assets/illustration-2.svg';
import Arrow from '../assets/icon-arrow.svg';

const Functions = () => {
  return (
    <section className='functions'>
      <div className='functions__img-container'>
        <img
          src={Illustration2}
          alt='People working'
          className='functions__img' />
      </div>

      <div className='functions__content'>
        <h2 className='section-title raleway w-700 center start-desktop dark-blue left-desktop'>
          Stay productive, wherever you are
        </h2>
        <div className='functions__text-container'>
          <p className='section-text open-sans w-400 center start-desktop grealish-blue left-desktop'>
            Never let location be an issue when accessing
            your files. Fylo has you covered for all of your file
            storage needs.
          </p>
          <p className='section-text open-sans w-400 center start-desktop grealish-blue left-desktop'>
            Securely share files and folders with friends,
            family and colleagues for live collaboration. No
            email attachments required!
          </p>
        </div>

        <div className='functions__btn'>
          <p className='functions__btn-text open-sans w-400 lightblue'>
            See how Fylo works
          </p>
          <img
            src={Arrow}
            alt='Button'
            className='functions__btn-img' />
        </div>

        <Card />
      </div>
    </section>
  );
};

export default Functions;