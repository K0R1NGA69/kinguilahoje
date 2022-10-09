import React from "react";
import './index.css'


export default function Post({euro,dolar,when}) {
    const euroBuy = euro.buy
    const euroSell =euro.sell
    const dolarBuy =dolar.buy
    const dolarSell =dolar.sell
    const option = {
        year: 'numeric',
        month: ('long' || 'short' || 'numeric'),
        weekday: ('long' || 'short'),
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        }
    const date = when.toDate().toLocaleDateString('pt-br',option)
    return (
        <div class="row row-cols-1 justify-content-center mb-3 text-center">
            <div className="date text-capitalize fs-4">{date}</div>
            <div class="row justify-content-center  row-cols-2">
                <div class="card col-md-4 mb-4 border-0 text-white bg-dark ">
                    <div class="card-header border border-info py-3">
                        <h4 class="my-0 fw-normal">Euro</h4>
                    </div>

                    <div class="card-body">
                        <h4>Compra</h4>
                        <h1 class="card-title pricing-card-title">{euroBuy}kz<small class="text-muted fw-light">/1€</small></h1>
                        <h4>Venda</h4>
                        <h1>{euroSell}Akz<small class="text-muted  fw-light">/1€</small></h1>
                    </div>

                </div>
                <div class="card col-md-4 mb-4  border-0 text-white bg-dark ">
                    <div class="card-header border border-info py-3">
                        <h4 class="my-0 fw-normal">Dólar</h4>
                    </div>

                    <div class="card-body ">
                        <h4>Compra</h4>
                        <h1 class="card-title pricing-card-title">{dolarBuy}Akz<small class="text-muted fw-light">/1$</small></h1>
                        <h4>Venda</h4>
                        <h1>{dolarSell}Akz<small class="text-muted fw-light">/1$</small></h1>
                    </div>

                </div>
            </div>
            {/* <div class="col">
                <div class="card mb-4 rounded-3 shadow-sm">
                    <div class="card-header py-3">
                        <h4 class="my-0 fw-normal">Dolar</h4>
                    </div>

                    <div class="card-body">
                        <h4>Compra</h4>
                        <h1 class="card-title pricing-card-title">480Akz<small class="text-muted fw-light">/1$</small></h1>
                        <h4>Venda</h4>
                        <h1>490Akz<small class="text-muted fw-light">/1$</small></h1>
                    </div>

                </div>
            </div> */}
        </div>
    )
}