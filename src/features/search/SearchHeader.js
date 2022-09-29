import { Filter } from '../../assets/icons';

function SearchHeader() {
  return (
    <>
      {/* Header and filter = d-flex justify-content-between */}
      <div className="d-flex align-items-center justify-content-between">
        <h1 style={{ fontSize: '24px' }} className="text-primary">
          Results
        </h1>

        <div>
          <span
            className="text-secondary"
            style={{ fontSize: '14px', marginRight: '3px' }}
          >
            Filter
          </span>
          <Filter />
        </div>
      </div>
    </>
  );
}

export default SearchHeader;
