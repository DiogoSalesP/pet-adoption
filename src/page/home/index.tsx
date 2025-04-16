import AnimalCard from "../../component/animalCard";
import { animals } from "../../data";

function Home() {
  return (
    <div>
      <h1>Pets disponíveis para adoção</h1>
      <AnimalCard listPet={ animals } />
    </div>
)
}

export default Home;