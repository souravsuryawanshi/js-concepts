import style from './CSS.module.css';
const CSS = () =>{
    const mySyle = {
        backgroundColor : "red",
        width : '200px',
        height : '400px',
        color : 'white'
        }
return (
    <>
    <div style={{color : 'red', backgroundColor : 'blue', height : '200px', width : '200px'}}>
      Sourav
    </div>
    <div style={mySyle}>
        Suryawanshi  
     </div>
     <dt className="text-sky-500">
              <span className="sr-only">Star rating</span>
        <svg width="16" height="20" fill="currentColor">
        <path d="M7.05 3.691c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.372 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.539 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.783.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.363-1.118L.98 9.483c-.784-.57-.381-1.81.587-1.81H5.03a1 1 0 00.95-.69L7.05 3.69z" />
      </svg>
      </dt>
      <div className={style.red}>
        Test
      </div>
      <div className={style.red+" "+style.bg}>
        Multiple Classes
      </div>
      <div className={[style.bg, style.red]}>
        Multiple Classes
      </div>
    </>
)
}

export default CSS;