function Cart(props) {
    // console.log(props)

    //     localStorage.setItem('shoppingCart', JSON.stringify(cart))

    // const stored = JSON.parse(localStorage.getItem('shoppingCart'));
    // console.log(stored)


    return (
        <>
            <div className="row justify-content-center">
                <div className="col-8">
                    <div className="card">
                        {props.cart.map((item) => {

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
                        Total: $
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cart