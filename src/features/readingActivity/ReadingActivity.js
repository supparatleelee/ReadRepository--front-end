import ReadingActivityContainer from './ReadingActivityContainer';
import ReadingActivityHeader from './ReadingActivityHeader';

function ReadingActivity() {
  let currentlyReading = 0;
  return (
    <>
      {currentlyReading ? (
        <>
          <ReadingActivityHeader />
          <ReadingActivityContainer />
        </>
      ) : (
        ''
      )}
    </>
  );
}

export default ReadingActivity;
