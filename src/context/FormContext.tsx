import { ReactNode, createContext, useState } from 'react'
import { UseFormReturn, useForm } from 'react-hook-form'
import { FormData } from '../pages/Cart'

interface FormCartContextProps {
  formMethods: UseFormReturn<FormData>
  updatedFormData: (data: FormData) => void
  data: FormData | null
}
export const FormCartContext = createContext<FormCartContextProps>({
  formMethods: {} as UseFormReturn<FormData>,
  updatedFormData: () => {},
  data: null,
})

export function FormCartProvider({ children }: { children: ReactNode }) {
  const [data, setData] = useState<FormData | null>(null)
  const formMethods = useForm<FormData>()

  function updatedFormData(data: FormData) {
    setData(data)
  }
  return (
    <FormCartContext.Provider value={{ formMethods, updatedFormData, data }}>
      {children}
    </FormCartContext.Provider>
  )
}
