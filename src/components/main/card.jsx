
const Card = (data)=>{
  console.log(data); //datayı okuduk burada
  const {title, image, desc} = data;
  return (
    <div className="cards">
      <div className="cards">
        <div className="title"><h1>{title}</h1></div>
        
        <img src={image} alt="go" />
      </div>
      <div className="card-over">
        <p>
            {desc}
        </p>
      </div>
    </div>
  );
};

export default Card;

//ana componentim olan mainin içerisinde card componentini okumak istiyorum...