import landingPageImg from '../assets/images/landing-page-img.png';

function LandingPage() {
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
        <div style={{ width: '80%', marginTop: '25vh', marginLeft: '50px' }}>
          <h1>Find and read more books you will love</h1>
          <p>
            You’re in the right place. Tell us what titles or gernes you’ve
            enjoyed in the past, and we’ll give you new ones.
          </p>
          <button type="button" class="btn btn-primary btn-lg px-5 py-2">
            <span style={{ fontSize: '16px' }}>Get Started</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
