import { Link } from 'react-router-dom';
import { ArrowRightSecondaey } from '../../assets/icons';
import { useAuth } from '../../contexts/AuthContext';
import { useProfileContext } from '../../contexts/ProfileContext';

function GetStarted() {
  const { user } = useAuth();
  const { getAllUserCollection } = useProfileContext();

  const handleOnClick = async (e) => {
    await getAllUserCollection(user.id);
  };
  return (
    <div className="get-started-section" style={{ height: '40%' }}>
      <div className="get-started-hearder d-flex justify-content-between align-items-center">
        <h1
          className="text-primary"
          style={{ fontSize: '24px', fontWeight: 700 }}
        >
          Get Started
        </h1>
        <Link
          to={`/profile/${user.id}`}
          style={{
            border: 'none',
            backgroundColor: '#fff',
            textDecoration: 'none',
          }}
          onClick={handleOnClick}
        >
          <span
            className="text-secondary"
            style={{
              marginRight: '5px',
              fontSize: '14px',
            }}
          >
            Go to your profile
          </span>
          <ArrowRightSecondaey />
        </Link>
      </div>

      <div
        className="get-started-content border-raduis-10px w-100 border-radius-10px mt-3 box-shadow-5610 bg-white"
        style={{ height: '100%', padding: '25px', animation: 'fadeIn 1s' }}
      >
        <p className="text-secondary" style={{ fontWeight: 500 }}>
          Input your name and other information for more personalised
          experience!
        </p>
        <p style={{ fontWeight: 500 }}>You're almost all set!</p>

        <div className="progress-bar-section d-flex align-items-center justify-content-between">
          <div
            className="progress border-radius-10px"
            style={{
              height: '8px',
              width: '89%',
            }}
          >
            <div
              className="progress-bar border-radius-10px"
              role="progressbar"
              style={{
                width: '45%',
                background:
                  'linear-gradient(90deg, rgba(168,162,120,1) 0%, rgba(102,89,48,1) 100%)',
              }}
              aria-valuenow="45"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
          <span style={{ fontSize: '12px' }}>45%</span>
        </div>

        <button
          type="button"
          className="btn btn-primary mt-2 w-20 border-radius-10px"
          style={{
            marginLeft: '78%',
            fontSize: '14px',
            padding: '5px 15px',
          }}
        >
          Update
        </button>
      </div>
    </div>
  );
}

export default GetStarted;
