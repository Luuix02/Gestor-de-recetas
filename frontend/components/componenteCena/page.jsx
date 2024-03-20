import "../../src/styles/stylesCardsCategorias/styles.css"
export default function CardCena() {
  return (
    <main>
      <div className="card">
      <img src= "https://www.wholesomeyum.com/wp-content/uploads/2019/05/wholesomeyum-Protein-Pancakes-9.jpg" className="recipe-image" />
      <div className="recipe-details">
        <h2 className="recipe-name">Pancakes</h2>
        <div className="recipe-times">
          <img src="https://cdn-icons-png.flaticon.com/512/826/826165.png" alt="Clock" className="clock-icon" />
          <span className="prep-time">10 minutos</span>
          
        </div>
      </div>
    </div>
    </main>
  )
}
