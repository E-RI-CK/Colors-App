import './Modal.css'
export const Modal = ({ id, year, color, pantone_value }) => {
    return (
        <div id={id} className='modalMainContainer' style={{ zIndex: 1 }}>
            <div className="modalContainer animate__animated animate__fadeInLeft" style={{ background: `${color}` }} >
                <div className='textLeft'>
                    <span >{year}</span>
                </div>
                <div className='textCenter'>
                    <h1 >¡Copiado!</h1>
                </div>
                <div className='textRight'>
                    <span >{pantone_value}</span>
                </div>
            </div>
        </div >
    )
}
