import * as C from '@chakra-ui/react'

const FormPessoal = () => {
    return(
        <C.VStack spacing={5}>
            <C.Text color='green' fontFamily="fantasy"> Insira seus dados </C.Text>
            <C.Input type='email' placeholder='Insira seu email'/>
            <C.Input type='text' placeholder='Insira seu nome'/>
            <C.RadioGroup>
                <C.Radio value='M'>Masculino</C.Radio>
                <C.Radio value='F'>Feminino</C.Radio>
                <C.Radio value='O'>Outro</C.Radio>
            </C.RadioGroup>
            <C.Input type='text' placeholder='Insira seu CPF'/>
            <C.Input type='text' placeholder='Insira seu telefone'/>
        </C.VStack>
    )
}

export default FormPessoal