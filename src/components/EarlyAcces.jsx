const EarlyAcces = () => {

  const validate = () => {
    const regex =  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const errorText = document.getElementById('error-text-b');
    const emailB = document.getElementById('email-b');
    const app = document.getElementById('app');

    if(!regex.test(emailB.value)) {
      errorText.classList.remove('hide');
      emailB.classList.add('error-border-2');
    } else {
      window.location.href='https://www.frontendmentor.io/profile/ngonzalia';
    }

    app.addEventListener('click', () => {
      errorText.classList.add('hide');
      emailB.classList.remove('error-border-2');
    });
  };

  return (
    <section className='early-acces'>
      <div className='early-acces__content'>
        <h3 className='section-title-2 raleway w-700 center left-desktop white'>
          Get early access today
        </h3>
        <p className='section-text-2 open-sans w-400 center left-desktop white'>
          It only takes a minute to sign up and our
          free starter tier is extremely generous. If
          you have any questions, our support team
          would be happy to help you.
        </p>
      </div>

      <form className='early-acces__form'>
        <input
          type='email'
          name='email'
          id='email-b'
          placeholder='email@example.com'
          className='early-acces__email waleway w-400 dark-blue' />
        <p className='error-text-2 open-sans w-400 start white hide' id='error-text-b'>
          Please check your email
        </p>
        <input
          type='button'
          value='Get Started For Free'
          className='early-acces__btn white raleway w-700'
          onClick={validate} />
      </form>
    </section>
  );
};

export default EarlyAcces;