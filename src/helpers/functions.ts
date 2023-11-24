/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { type ChangeEvent } from 'react'

export const handleChange = (
  event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  values: any,
  setValues: React.Dispatch<React.SetStateAction<any>>
): void => {
  setValues({ ...values, [event.target.name]: event.target.value })
}

export const handleDownload = (base64String: any, fileName: any) => {
  // Convert base64 string to a Blob
  const byteCharacters = atob(base64String)
  const byteNumbers = new Array(byteCharacters.length)
  for (let i = 0; i < byteCharacters.length; i++) {
    byteNumbers[i] = byteCharacters.charCodeAt(i)
  }
  const byteArray = new Uint8Array(byteNumbers)
  const blob = new Blob([byteArray], { type: 'image/png' }) // Adjust the MIME type as needed

  // Create a download link and trigger the download
  const link = document.createElement('a')
  link.href = URL.createObjectURL(blob)
  link.download = fileName || 'downloaded-image.png' // Provide a default filename if not specified
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}
