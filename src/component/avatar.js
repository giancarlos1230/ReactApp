//const MostrarAvatar=({imagen}, ancho, altura) =>{

import imag from './imagen/homero.jpg'
    export const MostrarAvatar = ({imagen}, ancho, altura) => {
    return (
        <div>
            <img src={imag} alt="Imagen" style={{
                borderRadius:imagen,
                borderWidth:ancho,
                height: altura,
               

            }}/>
        </div>
    )
}
