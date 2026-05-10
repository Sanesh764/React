
// import Product from "./Product.jsx";
// function ProductTab(){
//     // let options1=["hi-tech","durable","fast"];
//     // let options2={a:"hi-tech",b:"durable",c:"fast"} ; 
//     let options1=[<li>"hi-tech"</li>,<li>"durable"</li>,<li>"fast"</li>];
//     return(
//         <>
//       <Product title="Phone" price="3k"store={"flifcart"}/>
//       <Product title="Laptop" price={45000} />
//       <Product title="Tab" price={15980}/>
//         </>
//     );
// }


import Product from "./Product.jsx";
function ProductTab(){
    let styles = {
        display:"flex",
        flexWrap:"wrap",
        justifyContent:"center",
        alignItems:"center",
    };
    return (
        <div style={styles}>
        <Product title="Logitech Mx Master" idx={0}/>
        <Product title="Apple pencil (2nd Gen)" idx={1}/>
        <Product title="Zebronic Zeb-transformer" idx={2}/>
        <Product title="Petronic Toad 23" idx={3}/>
        </div>
    ); 
};
export default ProductTab;