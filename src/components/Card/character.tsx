import { CharacterData } from "../../utils/models"
import AlertDialogSlide from '../Dialog/Dialog'

function Character({character}: {character:CharacterData}) {
  return (
    <div key={character.id} className='flex flex-col sm:flex-row mx-5 my-5 bg-gray-700 rounded-lg transition-opacity duration-300'>
        <img src={character.image} alt="character" className='sm:rounded-l-lg sm:w-[30%] object-cover'/>
        <div className="w-full flex flex-col rounded-r-lg p-2 px-3 text-white">
          <h2 className="text-lg font-bold">{character.name}</h2>
          <div>
            <span className="opacity-[.4]">Last known location:</span>
            <p
              className="whitespace-nowrap"
            >
              {character.location.name}
            </p>
          </div>
          <div>
            <span className="opacity-[.4]">First seen in:</span>
            <p>{character.origin.name}</p>
          </div>
          <div className="m-1 flex justify-center items-center">
            <AlertDialogSlide character={character}></AlertDialogSlide>
          </div>
        </div>
    </div>
  )
}
export default Character