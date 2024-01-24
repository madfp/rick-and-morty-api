import { useEffect, useState } from 'react'
import { instance } from './utils/axios'
import { CharacterData } from './utils/models'
import Footer from './components/common/footer-navigation'
import Character from './components/Card/character'

function App() {
  const [characters, setCharacters] = useState<[]>([])
  const [page, setPage] = useState(1)

  useEffect(()=>{
    setCharacters([])
    instance.get(`/character/?page=${page}`)
      .then(function (response) {
        setCharacters(response?.data?.results)
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
  }, [page])

  return (
    <>
      <div className='w-full grid grid-cols-1 justify-center items-center md:grid-cols-2 lg:grid-cols-3 py-20'>
        {
          characters.map(
            (character:CharacterData)=>(
              <Character key={character.id} character={character}/>
            )
          )
        }
      </div>
      <Footer page={page} setPage={setPage}/>
    </>
  )
}

export default App
