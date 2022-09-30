import { SettingSecondaryColor } from '../../assets/icons';
import Avatar from '../../components/ui/Avatar';

function ProfileInfoContainer() {
  return (
    <div className="d-flex mt-5">
      <div className="profile-image w-30">
        <img
          src="https://www.w3schools.com/images/picture.jpg"
          className="rounded-circle cursor-pointer"
          width="180px"
          height="180px"
          alt="User Icon"
        />
      </div>

      <div className="profile-info w-100" style={{ marginLeft: '70px' }}>
        <div className="d-flex justify-content-between">
          <h1 style={{ fontSize: '32px', fontWeight: 700 }}>Alex Chen</h1>
          <button className="profile-setting d-flex align-items-center no-button-style">
            <SettingSecondaryColor />
            <span className="text-secondary">Edit Profile</span>
          </button>
        </div>
        {/*  */}
        <div className="m-auto d-flex justify-content-center mt-5">
          <div className="text-primary font-weight-bold text-align-center d-flex flex-column">
            <p style={{ fontSize: '22px', textAlign: 'center' }}>
              100
              <br />
              <span style={{ fontSize: '20px' }}>Books</span>
            </p>
          </div>
          <div className="vertical-line" style={{ margin: '0 100px' }}></div>
          <div
            className="text-primary font-weight-bold d-flex flex-column"
            style={{ marginLeft: '10px' }}
          >
            <p style={{ fontSize: '22px', textAlign: 'center' }}>
              20
              <br />
              <span style={{ fontSize: '20px' }}>Friends</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileInfoContainer;
