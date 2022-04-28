import { Formik, Form, Field, ErrorMessage } from "formik";
import { usePosts } from "../context/postContext";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

export const PostForm = () => {
  const { createPost } = usePosts();
  const navigate = useNavigate();
  return (
    <div>
      <Formik
        initialValues={{
          name: "",
          shift: "",
        }}
        validationSchema={Yup.object({
          name: Yup.string().required("Nombre es requerido!"),
          shift: Yup.string().required("Horario es requerido!"),
        })}
        onSubmit={async (values, actions) => {
          await createPost(values);
          navigate("/");
        }}
      >
        {({ handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
            <Field
              name="name"
              placeholder="Nombre"
              className="px-3 py-2 focus:outline-none rounded bg-gray-600 text-white w-full"
            />
            <ErrorMessage
              component="div"
              className="text-red-400 text-sm"
              name="name"
            />
            <Field
              name="shift"
              placeholder="Horario"
              className="px-3 py-2 focus:outline-none rounded bg-gray-600 text-white w-full"
            />
            <ErrorMessage
              component="div"
              className="text-red-400 text-sm"
              name="shift"
            />
            <button type="submit" className="text-red-400">
              Inscribir
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
