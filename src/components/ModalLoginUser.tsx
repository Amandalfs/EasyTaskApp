import { Modal } from "./ui/Modal";
import { Button } from "./ui/Button";
import { Input } from "./ui/input";

interface ModalLoginUserProps {
    activedModal: boolean
    closeModal: () => void
}


export function ModalLoginUser({ activedModal, closeModal }: ModalLoginUserProps){
    return (
    <>
    <Modal.Root activated={activedModal}>
        <Modal.Title>Insira seus dados</Modal.Title>
        
        <Modal.SeparatorCol>
            <Input.Root>
                <Input.Label text="E-mail"></Input.Label>
                <Input.Default holder="Digite seu melhor e-mail"></Input.Default>
            </Input.Root>
            <Input.Root>
                <Input.Label text="Senha"></Input.Label>
                <Input.Default holder="Digite sua senha"></Input.Default>
            </Input.Root>
        </Modal.SeparatorCol>

        <Modal.SeparatorCol>
            <Button color='primary'>Entrar</Button>
            <Modal.Link>Esqueci minha senha</Modal.Link>
        </Modal.SeparatorCol>

    </Modal.Root>
        {
            activedModal && (<section onClick={()=>{
                closeModal()
            }}>
                <Modal.Filter/>
            </section>)
        }
    </>)
}