import { useForm, Controller, FieldValues, UseFormProps } from 'react-hook-form'

export const useHookForm = <
  TFieldValues extends FieldValues = FieldValues,
  TContext = any,
  TTransformedValues extends FieldValues | undefined = undefined,
>(
  props?: UseFormProps<TFieldValues, TContext>,
) => {
  const handler = useForm<TFieldValues, TContext, TTransformedValues>(props)

  return { Controller, handler }
}
