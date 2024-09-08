import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsOps';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useId } from 'react';
import * as Yup from 'yup';
import css from './ContactForm.module.css';

const сontactSchema = Yup.object().shape({
  name: Yup.string().min(3, 'Name too Short!').max(50, 'Name too Long!').required('Name is required'),
  phone: Yup.string().matches(/^\d{3}-\d{2}-\d{2}$/, 'Number format must be 123-45-67').required('Number is required'),
});

const initialValues = {
  name: '',
  phone: '',
};

export default function ContactForm() {
  const dispatch = useDispatch();
  const nameFieldId = useId();
  const phoneFieldId = useId();

  const handleSubmit = (values, actions) => {    
    dispatch(addContact(values));
    actions.resetForm();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={сontactSchema}>
      <Form className={css.contactForm}>
        <div className={css.fieldWrapper}>
          <label htmlFor={nameFieldId}>Name</label>
          <Field type="text" name="name" id={nameFieldId} />
          <ErrorMessage name="name" component="span" />
        </div>

        <div className={css.fieldWrapper}>
          <label htmlFor={phoneFieldId}>Number</label>
          <Field type="text" name="phone" id={phoneFieldId} />
          <ErrorMessage name="phone" component="span" />
        </div>

        <button type="submit">Add Contact</button>
      </Form>
    </Formik>
  );
}
