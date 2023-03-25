import "./styles/Gallery.css"

function Gallery() {
    return (
      <div className="Gallery">
        <section class={"gallery"}>
            <h2>Gallery</h2>
            <ul>
                <li>
                <img width={200} src="https://t4.ftcdn.net/jpg/00/97/58/97/240_F_97589769_t45CqXyzjz0KXwoBZT9PRaWGHRk5hQqQ.jpg" />
                </li>
                <li>
                <img width={200} src="https://t4.ftcdn.net/jpg/00/97/58/97/240_F_97589769_t45CqXyzjz0KXwoBZT9PRaWGHRk5hQqQ.jpg" />
                </li>
                <li>
                <img width={200} src="https://t4.ftcdn.net/jpg/00/97/58/97/240_F_97589769_t45CqXyzjz0KXwoBZT9PRaWGHRk5hQqQ.jpg" />
                </li>
            </ul>
        </section>
      </div>
    );
  }
  
  export default Gallery;
  