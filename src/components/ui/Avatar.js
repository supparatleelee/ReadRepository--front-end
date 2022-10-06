function Avatar({ size }) {
  return (
    <img
      src="https://d2qp0siotla746.cloudfront.net/img/use-cases/profile-picture/template_0.jpg"
      className="rounded-circle cursor-pointer"
      width={size || '32px'}
      height={size || '32px'}
      alt="User Icon"
    />
  );
}

export default Avatar;
