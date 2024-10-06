import Accordion from './lib/accordion/Accordion';
import Carousel from './lib/carousel/Carousel';
import { IMAGES } from './mock-json/images';
import { PRODUCTS } from './mock-json/products';
import SearchPage from './react-concepts/thinking-in-react /SearchPage';
import Pagination from './lib/pagination/Pagination';
import SearchComponent from './lib/search-filter/Search';
import CSS from './lib/css/CSS';
const products = PRODUCTS;
const images = IMAGES;
const content = "This is a test script for content";
function App() {
  const handlePaginationChange = (currentPage) => {
    console.log(currentPage)
  }
  const searchHandler = (val) =>{
   console.log(val);
  }
  return (
    <>
    {/* <SearchPage product = {products}/> */}
    {/* <Carousel images={images} /> */}
    {/* <Accordion content = { content }/> */}
    {/* <Pagination limit={10} totalRecords={200} handlePaginationChange={handlePaginationChange}/> */}
    {/* <SearchComponent  searchHandler={searchHandler}/> */}
    {/* <CSS /> */}
    </>
  );
}





























export default App;
