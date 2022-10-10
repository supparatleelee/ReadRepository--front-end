import { Link } from 'react-router-dom';
import { ArrowRightSecondaey } from '../../assets/icons';
import RecommendedItem from './RecommendedItem';

function Recommendation() {
  return (
    <div
      className="get-started-section"
      style={{ height: '80%', marginTop: '7px' }}
    >
      <div className="get-started-hearder d-flex justify-content-between align-items-center">
        <h1
          className="text-black"
          style={{ fontSize: '18px', fontWeight: 400 }}
        >
          Recommended for you
        </h1>
        <Link
          to={`/`}
          style={{
            border: 'none',
            backgroundColor: '#fff',
            textDecoration: 'none',
          }}
        >
          <span
            className="text-secondary"
            style={{
              marginRight: '5px',
              fontSize: '14px',
            }}
          >
            See all
          </span>
          <ArrowRightSecondaey />
        </Link>
      </div>

      <div
        className="border-raduis-10px w-100 border-radius-10px mt-3 box-shadow-5610 bg-white"
        style={{ padding: '25px', animation: 'fadeIn 1s' }}
      >
        <div className="d-flex gap-2 justify-content-between">
          <RecommendedItem />
          <RecommendedItem />
        </div>
        <div className="d-flex gap-2 justify-content-between mt-4">
          <RecommendedItem />
          <RecommendedItem />
        </div>
      </div>
    </div>
  );
}

export default Recommendation;
