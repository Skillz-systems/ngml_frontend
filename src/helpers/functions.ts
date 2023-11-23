import { type ChangeEvent } from 'react'

export const handleChange = (
  event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  values: any,
  setValues: React.Dispatch<React.SetStateAction<any>>
): void => {
  setValues({ ...values, [event.target.name]: event.target.value })
}
