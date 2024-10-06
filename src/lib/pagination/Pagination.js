import { useState } from "react"

const Pagination = ({totalRecords, limit, handlePaginationChange}) => {
    const [currentPage, setCurrentPage] = useState(1);
    const pageList = new Array(Math.floor(totalRecords/limit)).fill(1);


    const handleCurrentPage = (index) => {
        setCurrentPage(index);
        handlePaginationChange(index);
    }

    return (
        <>
         <button onClick={()=>handleCurrentPage(currentPage-1)}
          disabled={currentPage < 2 ? true : false}>
         Previous
        </button>
        {
            pageList && pageList.length && pageList.map((_,index)=>{
                return (
                    <>
                    <button onClick={()=>{handleCurrentPage(index+1)}}
                     style={{'color' : index === currentPage-1 ? 'green' : 'red'}}>
                        {index+1}
                    </button>
                    </>
                )
            })
        }
         <button onClick={()=>handleCurrentPage(currentPage+1)}
          disabled={currentPage > pageList.length-1 ? true : false}>
          Next
        </button>
        </>
    )
}

export default Pagination;