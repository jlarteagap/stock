import { Form, Formik } from 'formik'
import React, { useState } from 'react'
import * as Yup from 'yup'
import { InputField, TextAreaField } from './form/InputField'

export const FormContact = ({ toggleModal }) => {
  const [status, setStatus] = useState(false)

  const validate = Yup.object({
    nombre: Yup.string().required('Su nombre es requerido'),
    email: Yup.string()
      .email('El correo no válido')
      .required('Su nombre es requerido'),
    mensaje: Yup.string()
      .min(
        6,
        'Su mensaje es demasioado corto, intente enviar ampliar su mensaje'
      )
      .required('Es su mensaje es importante')
  })
  return (
    <Formik
      initialValues={{
        nombre: '',
        email: '',
        mensaje: ''
      }}
      validationSchema={validate}
      onSubmit={(values, { resetForm }) => {
        console.log(values)
        setStatus(status)
        resetForm()
      }}
    >
      {formik => (
        <div>
          {status && (
            <>
              <div className="notification is-success is-light">
                Su mensaje ha sido enviado correctamente.
              </div>
              <div className="is-flex is-justify-content-center">
                <button
                  className="button is-success is-outlined"
                  onClick={toggleModal}
                >
                  Cerrar
                </button>
              </div>
            </>
          )}
          {status || (
            <Form>
              <InputField label="Nombre" type="text" name="nombre" />
              <InputField label="Email" type="email" name="email" />
              <TextAreaField label="Deje su mensaje" name="mensaje" />
              <div className="mt-3">
                <button
                  className="button is-danger is-inverted mr-5"
                  type="button"
                  onClick={toggleModal}
                >
                  Cancelar
                </button>
                <button type="submit" className="button is-success">
                  Enviar mensaje
                </button>
              </div>
            </Form>
          )}
        </div>
      )}
    </Formik>
  )
}
