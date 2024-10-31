const Sizes = ({ sizes }) => {
  return (
    <div>
      <ul>
        {sizes.map((size, index) => (
          <li key={index}>{size}</li>
        ))}
      </ul>
    </div>
  );
};

export default Sizes;
