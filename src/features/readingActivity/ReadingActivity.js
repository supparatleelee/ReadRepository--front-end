import { useBookContext } from '../../contexts/BookContext';
import ReadingActivityContainer from './ReadingActivityContainer';
import ReadingActivityHeader from './ReadingActivityHeader';

function ReadingActivity() {
  const { thisBookStatus } = useBookContext();
  return (
    <>
      {thisBookStatus === 'CURRENTLY_READING' && (
        <>
          <ReadingActivityHeader />
          <ReadingActivityContainer />
        </>
      )}
    </>
  );
}

export default ReadingActivity;
