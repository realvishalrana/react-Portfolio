import "./product.css";

function Product({ img, link, hover = false }) {
  return (
    <div className="p" style={{ height: hover ? '40vh': '30vh' }}>
      <div className="p-browser">
        <div className="p-circle"></div>
        <div className="p-circle"></div>
        <div className="p-circle"></div>
      </div>
      <a href={link} target="_blank" rel="noreferrer">
        <img src={img} alt="" className={hover ? 'p-hover-img p-img' : 'p-img'} />
      </a>
    </div>
  );
}

export default Product;
