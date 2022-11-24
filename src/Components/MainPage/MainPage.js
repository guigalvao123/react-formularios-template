import React, { useEffect, useState } from 'react'
import { MainContainer, Form, Input } from './styles'
import { useForm } from "../../hooks/useForm"

function MainPage() {
  // // const [nome, setNome] = useState("")
  // // const [idade, setIdade] = useState("")
  // // const [email, setEmail] = useState("")
  // const [formulario, setFormulario] = useState({ nome: "", idade: "", email: "" })

  // console.log(formulario)

  // // const onChangeNome = (event) => {
  // //   setNome(event.target.value)
  // // }

  // // const onChangeIdade = (event) => {
  // //   setIdade(event.target.value)
  // // }

  // // const onChangeEmail = (event) => {
  // //   setEmail(event.target.value)
  // // }

  // // este onChange sera enviado a pasta hooks.

  // const onChange = (event) => {
  //   // const name = event.target.name
  //   // const valor = event.target.value
  //   const {name, value} = event.target
  //   setFormulario({...formulario,[name]:value})
  // }
  const [formulario, onChange] = useForm({ nome: "", profissao:"", idade: "", email: "" })
  useEffect(() => { }, [])
  useState("")


  const handleClick = (event) => {
    event.preventDefault()

    console.log(`nome: ${formulario.nome}, profissao:${formulario.profissao} idade: ${formulario.idade}, e-mail: ${formulario.email} `)
  }

  return (
    <MainContainer>
      <h2>Formulário de inscrição</h2>

      <Form onSubmit={handleClick}>
        <label htmlFor="nome">Nome:</label>
        <Input
          name="nome"
          id="nome"
          value={formulario.nome}
          onChange={onChange}
          required
          type="text"
        />

        <label htmlFor="idade">Idade:</label>
        <Input
          name="idade"
          id="idade"
          value={formulario.idade}
          onChange={onChange}
          type="number"
          required
        />

        <label htmlFor="profissao">Profissao:</label>
        <Input
          name="profissao"
          id="profissao"
          value={formulario.profissao}
          onChange={onChange}
          required
        />

        <label htmlFor="email">E-mail:</label>
        <Input
          name="email"
          id="email"
          value={formulario.email}
          onChange={onChange}
          type="email"
          required
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
        />


        <button type="submit">Enviar dados</button>
      </Form>
    </MainContainer>
  )
}

export default MainPage
