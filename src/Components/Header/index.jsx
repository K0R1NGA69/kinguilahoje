import React from 'react';

function Header() {
    return (
        <header className='text-white'>
            <div class="d-flex  flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom border-info">
                <a href="/" class="d-flex align-items-center text-white  text-decoration-none">
                    <span class="fs-4">Kinguila Hoje</span>
                </a>

                <nav class="d-inline-flex  mt-2 mt-md-0 ms-md-auto navbar-dark bg-dark">
                    <a class="py-2 text-white text-decoration-none" href="#about">Sobre</a>
                </nav>
            </div>

            <div class="pricing-header p-3 pb-md-4 mx-auto text-center">
                <h1 class="display-4 fw-normal">Kinguila Hoje</h1>
                <p class="fs-5 text-muted">
                    Valor do Euro e Dólar no mercado informal
                </p>
            </div>
        </header>
    );
}

export default Header;