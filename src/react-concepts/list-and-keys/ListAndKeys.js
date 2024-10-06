const ListAndKeys = (props) => {
 const numbers = props.numbers;
 const listItems = numbers.map((number)=>{
    return (
        <li key={number.toString()}>{number}</li>
    );
 })
 return (
    <ul>
        {listItems}
    </ul>
 );
}

export default ListAndKeys;