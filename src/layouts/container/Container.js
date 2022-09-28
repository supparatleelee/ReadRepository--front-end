function Container({ children }) {
  return (
    <div
      className="min-vh-85 marginx-7"
      // style={{ backgroundColor: 'blue' }}
    >
      {children}
    </div>
  );
}

export default Container;
