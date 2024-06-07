import css from "./ContactForm.module.css"
import { Field, Form, Formik, ErrorMessage } from 'formik';
import { useId } from 'react';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
    name: Yup.string()
    .min(3,"min 3 symbol")
    .max(50,"max 50 symbol")
    .required("required Name"),
    number: Yup.string()
    .min(9)
    .matches(
        /^\d{3}-\d{2}-\d{2}$/,
        'Invalid phone number! Enter the number in the format 000-00-00',
      )
    .max(50,"max 50 symbol")
    .required("required Phone number")

})

function ContactForm({onAdd}) {
    const nameField = useId();
  const numberField = useId();
  return (
    <Formik
      initialValues ={{
        name: '',
        number: '',
      }}
      onSubmit ={(values, actions) => {
        onAdd({
          id: Date.now(),
          ...values,
        });
        actions.resetForm();
      }}
      validationSchema={validationSchema}
      >
      <Form className={css.form}>
        <label htmlFor="nameField" className={css.label}>Name</label>
        <Field className={css.field} type="text" name="name" id={nameField} placeholder="Enter Name" />
        <ErrorMessage className={css.error} name="name" component="span" />
        <br />
        <label htmlFor="numberField" className={css.label}>Phone number</label>
        <Field className={css.field} type="text" name="number" id={numberField} placeholder="format 000-00-00"/>
        <ErrorMessage className={css.error} name="number" component="span" />
        <button  type='submit' >Add Contact</button>
      </Form>
    </Formik>
  );
}

export default ContactForm;
