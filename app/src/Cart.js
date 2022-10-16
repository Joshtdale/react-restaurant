function Cart(props) {
    // console.log(props)

    //     localStorage.setItem('shoppingCart', JSON.stringify(cart))

    // const stored = JSON.parse(localStorage.getItem('shoppingCart'));
    // console.log(stored)


    return (
        <>
            <div className="row justify-content-center">
                <div className="col-8">
                    {props.cart.map((item) => {

                        return (
                            <>
                                <div className="card">
                                    <div className="row">
                                        <div className="col">
                                            <h3>{item}</h3>
                                        </div>
                                    </div>
                                </div>
                            </>

                        )
                    })
                    }
                </div>
            </div>
        </>
    )
}

export default Cart