import { useState } from "react"

export const useForm = (initialState) => {
    const [formulario, setFormulario] = useState(initialState)

    console.log(formulario)

    const onChange = (event) => {
        // const name = event.target.name
        // const valor = event.target.value
        const { name, value } = event.target
        setFormulario({ ...formulario, [name]: value })
    }
    return [formulario, onChange]
}