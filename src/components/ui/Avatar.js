function Avatar({ size }) {
  return (
    <img
      src="https://www.w3schools.com/images/picture.jpg"
      className="rounded-circle cursor-pointer"
      width={size || '32px'}
      height={size || '32px'}
      alt="User Icon"
    />
  );
}

export default Avatar;
