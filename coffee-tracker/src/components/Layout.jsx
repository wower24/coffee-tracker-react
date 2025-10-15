import Authentication from "./Authentication"
import Modal from './Modal'
import { useState } from 'react'

export default function Layout(props) {
    const { children } = props
    const [showModal, setShowModal] = useState(false)

    const header = (
        <header>
            <div>
                <h1>CAFFIEND</h1>
                <p>For Coffee Insatiates</p>
            </div>
            <button
            onClick={() => {setShowModal(true)}}>
                <p>Sign up free</p>
                <i class="fa-solid fa-mug-hot"></i>
            </button>
        </header>
    )

    const footer = (
        <footer>
            <p>
                <span className='text-gradient'>
                    Caffiend
                </span> was made by <a 
                href='https://www.wower.dev'
                target='_blank'>wower.code</a><br/>
                using the <a 
                href='https://www.fantacss.smoljames.com'
                target='_blank'>FantaCSS</a> design library.</p>
        </footer>
    )
    return (
        <>
            { showModal && (
            <Modal onCloseModal={() => {setShowModal(false)}}>
                <Authentication onCloseModal={() => {setShowModal(false)}}/>
            </Modal>
            )}
            { header }
            <main>
                { children }
            </main>
            { footer }
        </>
    )
}