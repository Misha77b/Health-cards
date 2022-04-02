import * as yup from 'yup';

export const validationSchema = yup.object({
    fullName: yup.string()
      .nullable()
      .required('Full name is required'),
    visitPurpose: yup.string()
      .nullable()
      .required('Visit purpose is required'),
    visitShortDescription: yup.string()
      .nullable()
      .required('Is required')
});