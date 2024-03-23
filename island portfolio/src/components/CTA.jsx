import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className='cta'>
      <p className='cta-text'>
       Feel free to contact me! <br className='sm:block hidden' />
       I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.
      </p>
      <Link to='/contact' className='btn'>
        Contact
      </Link>
    </section>
  );
};

export default CTA;
