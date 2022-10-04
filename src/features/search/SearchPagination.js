// import { Link } from 'react-router-dom';

function SearchPagination() {
  return (
    <nav
      aria-label="Page navigation example"
      style={{ position: 'absolute', right: '0', marginTop: '15px' }}
    >
      <ul class="pagination">
        <li class="page-item">
          <button class="page-link" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
          </button>
        </li>
        <li class="page-item">
          <button class="page-link">1</button>
        </li>
        <li class="page-item">
          <button class="page-link">2</button>
        </li>
        <li class="page-item">
          <button class="page-link">3</button>
        </li>
        <li class="page-item">
          <button class="page-link" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default SearchPagination;
