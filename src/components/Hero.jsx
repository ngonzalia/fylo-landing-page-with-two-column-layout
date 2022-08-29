import Illustration1 from '../assets/illustration-1.svg';

const Hero = () => {

  const validate = () => {
    const regex =  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const errorText = document.getElementById('error-text');
    const email = document.getElementById('email');

    
    if(!regex.test(email.value)) {
      errorText.classList.remove('hide');
      email.classList.add('error-border');
    } else {
      window.location.href='https://www.frontendmentor.io/profile/ngonzalia';
    }
  };
  

  return (
    <main className='hero' onClick='windowClick'>
      <div className='hero__img-container'>
        <img
          src={Illustration1}
          alt='illustration'
          className='hero__img' />
      </div>

      <div className='hero__content'>
        <h1 className='main-title open-sans w-700 dark-blue center left-desktop'>
          All your files in one secure
          location, accessible
          anywhere.
        </h1>
        <p className='hero__text hero-text open-sans w-400 dark-blue center left-desktop'>
          Fylo stores your most important files in one
          secure location. Access them wherever you
          need, share and collaborate with friends,
          family, and co-workers.
        </p>

        <div className='hero__form'>
          <div className='mail-error'>
            <input
              type='email'
              name='email'
              placeholder='Enter your email…'
              id='email'
              className='input hero__form--email email-text raleway w-400' />
            <p className='hero__form--error email-text open-sans w-400 pink hide' id='error-text'>
              Please check your email
            </p>
          </div>
          <button
            className='input hero__form--submit btn-text raleway w-700 white'
            onClick={validate}>
            Get Started
          </button>
        </div>
      </div>
    </main>
  );
};

export default Hero;
