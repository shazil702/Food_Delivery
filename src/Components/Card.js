const Card = (props)=>{
  
    const {
      name,
      img,
      cat,
      rat
    }=props.resdata
    
    return(
      <div className="restcard m-4 p-4 w-64 bg-amber-100 rounded-md">
        <img className="prodimg rounded-md" src={img}></img>
        <h3 className="font-bold py-3 text-lg">{name}</h3>
        <h4>{cat} </h4>
        <h4>{rat} </h4>
      </div>
    )
  }

  export const PromotedCard = (Card) => {
    return (props) => {
      console.log(props)
      return(
        <div>
          <label className="absolute bg-black text-white p-4 m-4">Promoted</label>
          <Card {...props}/>
        </div>
      )
    }
  }

  export default Card