import React from "react";
import { Form, Formik, Field } from "formik";
import * as Yup from "yup";
import Input from "./ui/input-form.component";
import Button from "./ui/button.component";
import Error from "./ui/error.component";

const FormContact = () => {
  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        phone: "",
        message: "",
      }}
      validationSchema={Yup.object({
        name: Yup.string().required("Name is required."),
        email: Yup.string().email().required("Email is required."),
        phone: Yup.string().required("Phone is required."),
        message: Yup.string().required("Message is required."),
      })}
    >
      {({ errors, touched }) => (
        <Form className="flex flex-col items-center space-y-4">
          <div className="w-full">
            <Field as={Input} name="name" type="text" placeholder="Your name" />
            {errors.name && touched.name && <Error error={errors.name} />}
          </div>
          <div className="w-full">
            <Field as={Input} name="email" type="text" placeholder="Email" />
            {errors.email && touched.email && <Error error={errors.email} />}
          </div>
          <div className="w-full">
            <Field as={Input} name="phone" type="text" placeholder="Phone" />
            {errors.phone && touched.phone && <Error error={errors.phone} />}
          </div>
          <div className="w-full">
            <Field
              className="w-full mb-4 py-2 bg-slate-100 border-2 border-slate-200 rounded-lg px-4 text-lg placeholder:text-slate-500"
              as={"textarea"}
              name="message"
              type="textarea"
              placeholder="Message"
            />
            {errors.message && touched.message && (
              <Error error={errors.message} />
            )}
          </div>
          <Button style="bg-red-500 mt-4" title="Submit">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
              />
            </svg>
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default FormContact;
