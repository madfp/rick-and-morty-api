import { ChangeEvent } from "react";
import { Pagination } from "@mui/material"
function Footer({page, setPage}:{page:number, setPage:Function}) {

  const handleChange = (event: ChangeEvent<unknown>, value: number) => {
    if (event){
      setPage(value);
    }  
  };

  return (
    <div className='fixed bottom-0 left-0 right-0 z-10 flex justify-center bg-gray-300 p-3'>
        <Pagination count={42} page={page} onChange={handleChange} />
    </div>
  )
}
export default Footer