import { Routes, Route } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import HeaderLayout from '../layouts/header/HeaderLayout';
import HomePage from '../pages/HomePage';
import SearchPage from '../pages/SearchPage';
import ProfilePage from '../pages/ProfilePage';
import ProfileSettingPage from '../pages/ProfileSettingPage';
import BookInfoPage from '../pages/BookInfoPage';
import UserCollectionPage from '../pages/UserCollectionPage';
import LandingPage from '../pages/LandingPage';
import SideNavLayout from '../layouts/sidenav/SideNavLayout';

function Router() {
  let user = 0;
  return (
    <Routes>
      {user ? (
        <Route path="/" element={<HeaderLayout />}>
          <Route path="/" element={<SideNavLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/profile/:id" element={<ProfilePage />} />
            <Route path="/profile/:id/edit" element={<ProfileSettingPage />} />
            {/* <Route path="/friend" element={<FriendPage />} /> */}
            <Route path="/book/info/:bookId" element={<BookInfoPage />} />
            <Route
              path="/profile/:id/collection/:id"
              element={<UserCollectionPage />}
            />
            <Route path="*" element={<Navigate to="/" />} />
          </Route>
        </Route>
      ) : (
        <Route path="/" element={<HeaderLayout />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      )}
    </Routes>
  );
}

export default Router;
