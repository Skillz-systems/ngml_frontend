// /* eslint-disable @typescript-eslint/no-misused-promises */
// /* eslint-disable @typescript-eslint/strict-boolean-expressions */
// /* eslint-disable @typescript-eslint/explicit-function-return-type */
// import $ from 'jquery' // Load jquery
// import React, { createRef, useContext, useEffect, useState } from 'react' // For react component
// import { MyContext } from './context'
// // import the react-json-view component
// import ReactJson from 'react-json-view'
// window.jQuery = $ // JQuery alias
// window.$ = $ // JQuery alias

// require('jquery-ui-sortable') // For FormBuilder Element Drag and Drop
// require('formBuilder')// For FormBuilder

// const FormBuilder = () => {
//   const fb = createRef()
//   const [formBuilder, setFormBuilder] = useState(null)
//   const { form, setForm } = useContext(MyContext)
//   useEffect(() => {
//     // To create form
//     if (!formBuilder?.formData) {
//       setFormBuilder($(fb.current).formBuilder({
//         disabledActionButtons: ['data', 'clear', 'save'],
//         formData: []
//       })
//       )
//     }
//   }, [])
//   async function saveData () {
//     setForm(formBuilder.formData)
//   }
//   function clearData () {
//     formBuilder.actions.clearFields()
//     setForm({})
//   }
//   return (

//     <div>
//     <h1>Create Form</h1>
//     <div ref={fb} />
//     <div>
//     <div>
//       {Object.keys(form).length > 0 &&
//         <ReactJson src={JSON.parse(form)} />
//       }
//     </div>
//       <div>
//         <button
//           onClick={clearData}
//           type="button"
//         >
//           Clear
//         </button>
//         <button
//           onClick={saveData}
//           type="button"
//         >
//           Save
//         </button>
//       </div>
//     </div>
//   </div>
//   )
// }

// export default FormBuilder
