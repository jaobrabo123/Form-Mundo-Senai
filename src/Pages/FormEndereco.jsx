import * as C from '@chakra-ui/react'

const FormEndereco = () => {
    return(
        <C.VStack spacing={5}>
            <C.Text color='green' fontFamily="fantasy"> Insira seu endereço </C.Text>
            <C.Input type='text' placeholder='Insira o Cep'/>
            <C.Input type='text' placeholder='Insira o Bairro'/>
            <C.Select placeholder='Insira a UF'>
                <option value='option1'>AC</option>
                <option value='option2'>AL</option>
                <option value='option3'>AP</option>
                <option value='option4'>AM</option>
                <option value='option5'>BA</option>
                <option value='option6'>CE</option>
                <option value='option7'>DF</option>
                <option value='option8'>ES</option>
                <option value='option9'>GO</option>
                <option value='option10'>MA</option>
                <option value='option11'>MT</option>
                <option value='option12'>MS</option>
                <option value='option13'>MG</option>
                <option value='option14'>PA</option>
                <option value='option15'>PB</option>
                <option value='option16'>PR</option>
                <option value='option17'>PE</option>
                <option value='option18'>RJ</option>
                <option value='option19'>RN</option>
                <option value='option20'>RS</option>
                <option value='option21'>RO</option>
                <option value='option22'>RR</option>
                <option value='option23'>SC</option>
                <option value='option24'>SP</option>
                <option value='option25'>SE</option>
                <option value='option26'>TO</option>
            </C.Select>
        </C.VStack>
    )
}

export default FormEndereco