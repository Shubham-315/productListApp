import React from "react";
import axios from 'axios';

function Home() {
    const [productList, setProductList] = React.useState("");
    React.useEffect(() => {
        // const request = axios.CancelToken.source()
        const productData = async () => {
            axios({
                method: "GET",
                headers: { "Content-type": 'Application/json' },
                url: "https://fakestoreapi.com/products",
            })
                .then(res => {
                    setProductList(res.data)
                })
                .catch((error) => {
                    console.log(error);
                })
        }
        return () => productData();
    }, [])
    if (productList !== undefined) {
        console.log(productList)
    }

    return (
        <div className="px-3 row">
            {
                productList !== undefined && productList !== "" ?
                    productList.map((data) => {
                        return (
                            <div className="col-12 col-md-3 my-4">
                                <div class="card">
                                    <img class="card-img-top p-3" src={data.image} alt="Card image cap" width="200px" height="200px" />
                                    <div class="card-body">
                                        <h5 class="card-title">{data.title}</h5>
                                        <p class="card-text">Price: {data.price}</p>
                                        <button type="button" class="btn btn-primary">Add to Cart</button>
                                        <button type="button" class="btn btn-primary">Add to Wishlist</button>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                    :
                    <></>
            }
        </div>
    );
}
export default Home;