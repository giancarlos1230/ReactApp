const MostrarAlert = ({altura, ancho, colorfondo, colorText, texto}) => {
    return (
        <div>
            <div style={{
                width: ancho,
                heigth: altura,
                background: colorfondo,
                color: colorText
            }}>
                {texto}
            </div>
            
               <br />
        </div>

    )
}

export {
    MostrarAlert
}