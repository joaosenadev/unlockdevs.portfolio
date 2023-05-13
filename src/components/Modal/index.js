import { IoClose } from "react-icons/io5"
import "./modal.css"

export function Modal({ TitleColor, modalTitle, colorBtn, textBtn, txtBtnColor, isOpen, setModalOpen, children}) {

    if(isOpen){
        return (
        <div id="modal">
            <div className="modal-container">
                <div className="modal">
                    <div className="modal-header">
                        <h1>{modalTitle}</h1>

                        <IoClose onClick={setModalOpen} className="close-modal" size={30} color="gray" />
                    </div>

                    <div className="modal-content">
                        {children}
                    </div>

                    <div className="modal-buttons">
                        <button onClick={setModalOpen} className="close-btn">Fechar</button>
                    </div>
                </div>
            </div>
        </div>
    )}

    return null;
}