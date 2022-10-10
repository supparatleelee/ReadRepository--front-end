import Recommendation from '../features/recommendation/Recommendation';
import GetStarted from '../layouts/getStarted/GetStarted';

function HomePage() {
  return (
    <div className="margin-left-8vw w-100 h-80 d-flex justify-content-between">
      <div className="left-div w-50">
        <GetStarted />
      </div>

      <div className="right-div w-50" style={{ marginLeft: '45px' }}>
        <Recommendation />
      </div>
    </div>
  );
}

export default HomePage;
