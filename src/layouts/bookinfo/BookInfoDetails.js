function BookInfoDetails() {
  return (
    <div
      className="w-100 d-flex justify-content-around px-5"
      style={{
        paddingLeft: '10px',
        paddingRight: '10px',
        flexDirection: 'column',
      }}
    >
      <div>
        <h1 style={{ fontSize: '32px', fontWeight: 700 }}>Peak</h1>
        <h2 style={{ fontSize: '24px', fontWeight: 500 }} className="pt-2">
          Anders Ericsson
        </h2>

        <div className="pt-2">
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star"></span>
          <span class="fa fa-star"></span>
          <span style={{ fontSize: '18px' }}>(4.03)</span>
        </div>

        <p className="pt-4" style={{ fontSize: '16px' }}>
          Successful products require good decisions. Reliable information about
          what users are trying to achieve, their context and whether they can
          and will use your product is essential to making good product
          decisions.
        </p>
      </div>

      <div className="d-flex">
        <div className="text-primary font-weight-bold">
          <h3 style={{ fontSize: '22px' }}>Publish Year</h3>
          <p style={{ fontSize: '20px' }}>2012</p>
        </div>
        <div className="vertical-line"></div>
        <div
          className="text-primary font-weight-bold"
          style={{ marginLeft: '10px' }}
        >
          <h3 style={{ fontSize: '22px' }}>Genre</h3>
          <p style={{ fontSize: '20px' }}>Business, Product Management</p>
        </div>
      </div>
    </div>
  );
}

export default BookInfoDetails;
