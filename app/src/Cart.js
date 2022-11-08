function Cart(props) {
    // console.log(props)

    //     localStorage.setItem('shoppingCart', JSON.stringify(cart))

    // const stored = JSON.parse(localStorage.getItem('shoppingCart'));
    // console.log(stored)

    // let numArray = []

    // props.price.forEach(str => {
    //     numArray.push(Number(str));
    // });
    // console.log(numArray)

    const total = props.price.reduce((accumulator, value) => {
        return accumulator + value;
    }, 0);

    // console.log(total);

    // console.log(props.price)

    return (
        <>
            <div className="row justify-content-center mt-3">
                <div className="col-8">
                    <div className="card overflow-auto">
                        {props.storage.map((item) => {

                            return (
                                <>
                                    <div className="row">
                                        <div className="col">
                                            <h3>{item}</h3>
                                        </div>
                                    </div>
                                </>

                            )
                        })
                        }
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col text-end m-5">
                    <button className="btn btn-secondary m-2 mt-1">Checkout</button>
                    Total: ${total}.00
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cart