import { Link } from 'react-router-dom';

function SearchPagination() {
  return (
    <nav
      aria-label="Page navigation example"
      style={{ position: 'absolute', right: '0', marginTop: '15px' }}
    >
      <ul class="pagination">
        <li class="page-item">
          <Link class="page-link" to="#" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
          </Link>
        </li>
        <li class="page-item">
          <Link class="page-link" to="#">
            1
          </Link>
        </li>
        <li class="page-item">
          <Link class="page-link" to="#">
            2
          </Link>
        </li>
        <li class="page-item">
          <Link class="page-link" to="#">
            3
          </Link>
        </li>
        <li class="page-item">
          <Link class="page-link" to="#" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default SearchPagination;
