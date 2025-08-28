import { useEffect, useState } from "react"
import { Button } from "./ui/button"
import { IllustratedButton } from "./ui/illustrated_button"
import { useNavigate } from "react-router"

function BotonConBloqueo({ categoria }) {
  const navigate = useNavigate()
  const [disabled, setDisabled] = useState(false)
  const [timeLeft, setTimeLeft] = useState(0)

  useEffect(() => {
    const bloqueos = JSON.parse(localStorage.getItem("bloqueos") || "{}")
    const blockUntil = bloqueos[categoria.id]

    if (blockUntil && Date.now() < blockUntil) {
      setDisabled(true)
      setTimeLeft(blockUntil - Date.now())

      const timer = setInterval(() => {
        const remaining = blockUntil - Date.now()
        if (remaining <= 0) {
          clearInterval(timer)
          setDisabled(false)

          // Eliminar bloqueo al expirar
          const updated = { ...bloqueos }
          delete updated[categoria.id]
          localStorage.setItem("bloqueos", JSON.stringify(updated))
        } else {
          setTimeLeft(remaining)
        }
      }, 1000)

      return () => clearInterval(timer)
    }
  }, [categoria.id])

  const handleClick = () => {
    // Navegar y pasar datos de la categoría
    navigate(categoria.ruta, { state: { categoria } })

    // Bloquear por 10 segundos
    const tenSeconds = 5 * 1000
    const twoHours = 30 * 60 * 1000
    const blockUntil = Date.now() + tenSeconds

    const bloqueos = JSON.parse(localStorage.getItem("bloqueos") || "{}")
    bloqueos[categoria.id] = blockUntil
    localStorage.setItem("bloqueos", JSON.stringify(bloqueos))

    setDisabled(true)
    setTimeLeft(tenSeconds)
  }

  return (
    disabled ? (
      <IllustratedButton 
        key={categoria.id}
        variant="disabled"
        size="sm"
        disabled
      >
        Bloqueado por {Math.ceil(timeLeft / 60000)} min
      </IllustratedButton>
    ) : (
      <IllustratedButton
        key={categoria.id}
        variant="primary"
        size="sm"
        onClick={handleClick}
        disabled={disabled}
      >
        {categoria.nombre}
      </IllustratedButton>
    )
  )
}


export default BotonConBloqueo
