import * as C from '@chakra-ui/react'

const FormProjeto = () => {
    return(
        <C.VStack spacing={5}>
            <C.Text color='green' fontFamily="fantasy"> Insira os dados do seu projeto </C.Text>
            <C.Input type='text' placeholder='Insira o projeto'/>
            <C.Input type='text' placeholder='Área de atuação do projeto'/>
            <C.Stack spacing={2.5} direction='column'>
                <C.Checkbox>CETCC</C.Checkbox>
                <C.Checkbox>CETAFEST</C.Checkbox>
                <C.Checkbox>CETICC</C.Checkbox>
                <C.Checkbox>CETAFAJU</C.Checkbox>
            </C.Stack>
            <C.Input type='text' placeholder='Coodernador/Professor'/>
        </C.VStack>
    )
}

export default FormProjeto