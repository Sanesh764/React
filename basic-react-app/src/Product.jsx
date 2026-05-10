
// import "./Product.css";
// function Product({title,price,store="amazon"}){
//     let isDiscount=price >30000;
//     let styles={backgroundColor: isDiscount ? "pink" : ""};
//     return (
//         <div className="Product" style={styles}>
//             <h3>{title}</h3>
//             <h5>Price:{price}</h5>
//             <h5>store:{store}</h5>
//             <h4>{isDiscount >3000 && <p>"discount 5%"</p>}</h4>
//         </div>
//     );
// }
import "./Product.css";
import Price from "./Price.jsx";
function Product({title,idx}){
    let oldPrices=["12,498","11,900","1499","649"];
    let newPrices=["13,450","12,980","799","499"];
    let Description=[
        ["8,000DPI","5 programmable buttons"],
        ["intutive surface","designed for ipad pro"],
        ["designed for ipad pro","intuitive surface"],
        ["wireless","optical orientation"]
    ];
    return (
        <div className="Product">
            <h4>{title}</h4>
            <p>{Description[idx][0]}</p>
            <p>{Description[idx][1]}</p>
            <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]}/>
        </div>
    );
}

export default Product;