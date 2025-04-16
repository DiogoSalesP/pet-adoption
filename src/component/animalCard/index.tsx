import { AnimalCardProps } from '../../types';

function AnimalCard({ listPet }: AnimalCardProps) {
  return (
    <>
      {
        listPet.map((pet) => 
        <div key={ pet.id }>
          <p>{ pet.type }</p>
          <img src={ pet.photo } alt={ `Foto de um ${pet.type} chamado ${pet.name}`}/>
          <div>
            <p>Nome: { pet.name }</p>
            <p><strong>Raça:</strong>{ pet.breed}</p>
            <p>Idade: { pet.age } anos</p>
          </div>
          <button>Tenho interesse</button>
        </div>)
      }
    </>
  )
}

export default AnimalCard;