const boton = document.getElementById("boton-final")
boton.addEventListener("click", (event) => {
    event.preventDefault()
    container.style.backgroundColor="Green"
})


const container = document.getElementById("mainContainer")

const check = document.getElementById("gridCheck")
check.addEventListener("click", AceptarCheck)

function AceptarCheck() {
    console.log("Aceptaste las condiciones para el envio!");
}

/*     let email = document.getElementById("inputEmail")

    email.addEventListener("keydown", EventKeyDown)

    function EventKeyDown() {
        cant_max=30;
        cant_disponible = cant_max - email.value.length;

        let color=""

        if (cant_disponible < 10) {
            color = 'text-warning'
        }

        document.getElementById
    }
 */