import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";
import React from 'react';

class SearchPage extends React.Component{
    constructor(props){
     super(props);
     this.state = {
       filterText : '',
       inStockOnly : false
     };
     this.handleFilterChange = this.handleFilterChange.bind(this);
     this.handleInStockChange = this.handleInStockChange.bind(this);
    }
    handleFilterChange(filterText){
     this.setState({
       filterText : filterText
     });
    }
    handleInStockChange(inStockOnly){
     this.setState({
       inStockOnly : inStockOnly
     });
    }
     render(){
         return (
      <>
      <SearchBar 
       filterText = {this.state.filterText}
       inStockOnly = {this.state.inStockOnly}
       onFilterTextChange = {this.handleFilterChange}
       onInStockChange = {this.handleInStockChange}
       />
      <ProductTable 
       products = {this.props.product}
       filterText = {this.state.filterText}
       inStockOnly = {this.state.inStockOnly} 
       />
      </>
         )
     }
   }

   export default SearchPage;