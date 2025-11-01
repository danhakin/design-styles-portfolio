const Card = ({ children, title, image, ...props }) => {
  return (
    <div className="card" {...props}>
      {image && (
        <div className="card-image">
          <img src={image.src} alt={image.alt || ''} />
        </div>
      )}
      <div className="card-content">
        {title && <h3 className="card-title">{title}</h3>}
        {children}
      </div>
    </div>
  );
};

export default Card;
