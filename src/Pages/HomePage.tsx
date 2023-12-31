import React from 'react'
import AppModal from 'src/Components/AppModal'
import RequestModal from 'src/Components/ResponseComponent/RequestModal'
// import ResponseModal from 'src/Components/ResponseComponent/ResponseModal'

const HomePageInfo: React.FC = () => {
  const [modalIsOpen, setIsOpen] = React.useState(false)

  return (
    <div className="m-5 bg-white/40 flex-1 p-5 overflow-x-hidden rounded-xl">
      <div className="flex justify-between">
        <h3 className="text-left capitalize font-semibold text-3xl text-neutral-600">
          Home Page
        </h3>
        <p className="px-4 py-1 border cursor-pointer hover:text-neutral-700 ease-in-out duration-300 transition-all border-neutral-400 rounded-3xl text-neutral-600">
          Cancel
        </p>
      </div>
      {/* delete below  */}
      <div>
        <div className="w-full flex-1 bg-white rounded-xl h-96 p-5">
          <div
            onClick={() => {
              setIsOpen(true)
            }}
          >
            show Modal
          </div>
          {/* Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Quibusdam corporis, vitae culpa omnis minus labore molestiae
           unde? Non unde architecto aliquam sequi error.
            Pariatur aperiam quasi rerum sint laboriosam est? */}
        </div>

        <AppModal
          height="499px"
          width="100%"
          modalIsOpen={modalIsOpen}
          setIsOpen={setIsOpen}
        >
          <RequestModal/>
          {/* <ResponseModal
            type="error"
            action={() => {
              console.log()
            }}
            continueAction={() => {
              console.log()
            }}
          /> */}
        </AppModal>
      </div>
    </div>
  )
}

export default HomePageInfo
