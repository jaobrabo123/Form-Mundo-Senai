import * as C from "@chakra-ui/react"
import { useState } from "react"
import  Step  from './Components/Step'
import FormPessoal from "./Pages/FormPessoal"
import FormEndereco from "./Pages/FormEndereco"
import FormProjeto from "./Pages/FormProjeto"

function App() {
const [step, setStep] = useState(1)
const Steps = [1,2,3]

const getCompStep = () => {
switch(step){
  case 1:
    return <FormPessoal/>
  case 2:
    return <FormEndereco/>
  case 3:
    return <FormProjeto/>
  default:
    return <FormPessoal/>
  }

}

  return (
    <C.Flex h="100vh" align="center" justify="center" border={6} borderColor={"green"}>
      <C.Box borderWidth='6px' borderRadius={5} borderColor='green.200'>
      <C.Center maxW={500} w="100%" py={11} px={2} flexDirection="column">
      <C.HStack spacing={4}>
        {Steps.map((item) => (
          <Step key={item} index={item} active={step===item}/>
          ))}
      </C.HStack>

      <C.Divider my={4} borderColor="blue.800"></C.Divider>

      <C.Box w="800"> {getCompStep()} </C.Box>

      <C.HStack spacing={10} mt={4}>

        <C.Button bg="gray.200"
        onClick={() => step !==1 && setStep(step-1)}
        disabled={step===1}
        > Voltar
        </C.Button>

        <C.Button bg="green"
        onClick={() => step !==3 && setStep(step+1)}
        >
        {step===3 ? "Enviar":"Próximo" }
        </C.Button>

      </C.HStack>
      </C.Center>
      </C.Box>
    </C.Flex>
  )
}

export default App
