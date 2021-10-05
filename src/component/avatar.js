import imag from './imagen/homero.jpg'
    export const MostrarAvatar = ({imagen}, alturImagen, anchuraImagen ) => {
    return (
        <div>
            <img src={imag} alt="Imagen" style={{
                borderRadius:imagen,
               // borderWidth:anchuraImagen,
               // height: alturImagen,

            }}/>
        </div>
    )
}
