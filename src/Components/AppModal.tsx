import React, { type FC, type ReactNode } from 'react'
import Modal from 'react-modal'

/**
 * Represents the Default Modal Component
 * @function
 * @param {object} children - react props to render wrapped children component
 * @param {Function} setIsOpen - updates/sets the modal state
 * @param {boolean} modalIsOpen - holds the state of the modal
 * @param {string} title - stores the title of the modal
 * @Description - this component handles the Modal functionalities on the application
 * The setIsOpen and modalIsOpen should be created using a react usestate
 * implementation can be reference to modalComponent.test.js or dashboard component
 */

interface ModalomponentProps {
  children: ReactNode
  setIsOpen: (state: boolean) => void
  modalIsOpen?: boolean
  title?: string
  height?: string
  width?: string
}

const AppModal: FC<ModalomponentProps> = ({
  children,
  setIsOpen,
  modalIsOpen,
  title,
  height = '60vh',
  width = '466px'
}) => {
  // let subtitle: string = ''

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      overflow: 'auto',
      height,
      width,
      border: 'none',
      background: 'none'
    }
  }

  function afterOpenModal (): void {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = '#000000'
  }

  function closeModal (): void {
    setIsOpen(false)
  }

  return (
    <div>
      <Modal
        isOpen={modalIsOpen ?? false}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="App Modal"
        ariaHideApp={true}
      >
        <div>
          <div className="flex justify-between mb-10">
            <h2
              className="cursor-pointer"
              // ref={(_subtitle) => (subtitle = _subtitle)}
            >
              <b>{title?.toUpperCase()}</b>
            </h2>
          </div>
          <div className="h-[100%]">{children}</div>
        </div>
      </Modal>
    </div>
  )
}

export default AppModal
