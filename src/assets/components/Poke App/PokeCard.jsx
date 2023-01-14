


export default function PokeCard (props){
    return (
            <>
				<div className="card-info">
					<span className="pokemon-id">No.{props.id}</span>
					<h3>{(props.name).charAt(0).toUpperCase() + (props.name).slice(1)}</h3>
					<div className="card-types">
					</div>
				</div>
                <div className="card-img">
					<img
						src={props.img}
						alt="pokemon venusaur"
                        />
				</div>
            </>
    )
}






