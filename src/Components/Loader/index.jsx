import { ThreeDots } from 'react-loader-spinner'


export default function Loader() {
    return (
        <div className="row justify-content-center align-items-center  ">
            <div className='col-2 '>
                <ThreeDots
                    height="80"
                    width="80"
                    radius="9"
                    color='#0DCAF0'
                    ariaLabel='three-dots-loading'
                    wrapperStyle
                    wrapperClass
                />
            </div>

        </div>
    );
}



