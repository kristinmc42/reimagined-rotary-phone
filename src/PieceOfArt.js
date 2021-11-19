function PieceOfArt (props){
  return(
    <div key={props.key}>
      <h2>{props.title}</h2>
      <img src={props.imagePath} alt={props.alt}/>
    </div>
  )
}

export default PieceOfArt;