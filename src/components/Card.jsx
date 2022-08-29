import Quotes from '../assets/icon-quotes.svg';
import Avatar from '../assets/avatar-testimonial.jpg';

const Card = () => {
  return (
    <div className='card'>
      <img
              src={Quotes}
              alt='quotes'
              className='card-img' />
      <p className='card-text open-sans w-400 start dark-blue'>
        Fylo has improved our team productivity by an
        order of magnitude. Since making the switch
        our team has become a well-oiled collaboration
        machine.
      </p>

      <div className='avatar'>
        <img
          src={Avatar}
          alt='Kyle'
          className='avatar-img' />
        
        <div className='avatar-info'>
          <h3 className='name open-sans w-700 dark-blue'>
            Kyle Burton
          </h3>
          <p className='position open-sans w-400 dark-blue'>
            Founder & CEO, Huddle
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;