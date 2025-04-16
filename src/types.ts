export type dataPetType = {
  id: number,
  name: string,
  type: string,
  breed: string,
  age: number,
  size: string,
  description: string,
  vaccinated: boolean,
  castrated: boolean,
  photo: string
}

export type AnimalCardProps = {
  listPet: dataPetType[]
}