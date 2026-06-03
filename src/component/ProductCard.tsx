interface productcardprops {
    name: string;
    price: number;
};
export const ProductCard = ({ name, price }:productcardprops) =>{
    return (
        <div style={{ border: '1px solid #ccc',padding:'16px',margin:'16px'}}>
            <h2>{name}</h2>
            <p>price: ${price.toFixed(2)}</p>
        </div>
    );
};