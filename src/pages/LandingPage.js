import landingPageImg from '../assets/images/landing-page-img.png';
import RegisterModal from '../features/loginRegister/RegisterModal';
import { useState } from 'react';

function LandingPage() {
  const [isOpenModal2, setIsOpenModal2] = useState(false);
  return (
    <div
      className="d-flex"
      // style={{ display: 'flex' }}
    >
      <div
        style={{
          backgroundColor: 'salmon',
          borderRadius: '0px 10px 0 0',
          marginLeft: '0',
        }}
      >
        <img
          src={landingPageImg}
          // width={250}
          height={671}
          alt="Book"
        ></img>
      </div>

      <div
        style={{
          // backgroundColor: 'blue',
          width: '100%',
        }}
      >
        <div
          style={{
            width: '90%',
            marginTop: '20vh',
            marginLeft: '12%',
            letterSpacing: '2px',
            lineHeight: '2em',
          }}
        >
          <h1 className="text-primary" style={{ fontSize: '52px' }}>
            Find and read more books you will love
          </h1>
          <p
            className="mt-3"
            style={{ fontSize: '18px', letterSpacing: '1px' }}
          >
            You’re in the right place. Tell us what titles or gernes you’ve
            enjoyed in the past, and we’ll give you new ones.
          </p>
          <button
            type="button"
            className="btn btn-secondary btn-lg px-5 py-2 mt-2"
            onClick={() => setIsOpenModal2(true)}
          >
            <span style={{ fontSize: '16px' }}>Get Started</span>
          </button>
          <RegisterModal
            open={isOpenModal2}
            onClose={() => setIsOpenModal2(false)}
          />
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
