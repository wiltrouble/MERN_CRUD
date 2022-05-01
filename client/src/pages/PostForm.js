import { Formik, Form, Field, ErrorMessage } from "formik";
import { usePosts } from "../context/postContext";
import { Link, useNavigate, useParams } from "react-router-dom";
import * as Yup from "yup";
import { useEffect, useState } from "react";

export const PostForm = () => {
  const { createPost, getPost, updatePost } = usePosts();
  const navigate = useNavigate();
  const params = useParams();

  const [post, setPost] = useState({
    name: "",
    shift: "",
    image: null,
  });

  useEffect(() => {
    (async () => {
      if (params.id) {
        const post = await getPost(params.id);
        setPost(post);
      }
    })();
  }, [params.id, getPost]);

  return (
    <div className="flex items-center justify-center">
      <div className="bg-zinc-800 p-10 shadow-md shadow-black">
        <header className="flex justify-between py-2">
          <h3 className="text-xl text-white">New post</h3>
          <Link to="/" className="text-gray-400 text-sm hover:text-gray-300">
            Go Back
          </Link>
        </header>
        <Formik
          initialValues={post}
          validationSchema={Yup.object({
            name: Yup.string().required("Nombre es requerido!"),
            shift: Yup.string().required("Horario es requerido!"),
          })}
          onSubmit={async (values, actions) => {
            if (params.id) {
              await updatePost(params.id, values);
            } else {
              await createPost(values);
            }
            navigate("/");
          }}
          enableReinitialize
        >
          {({ handleSubmit, setFieldValue }) => (
            <Form onSubmit={handleSubmit}>
              <label
                className="text-sm block font-bold text-gray-400"
                htmlFor="name"
              >
                Nombre
              </label>
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
              <label
                className="text-sm block font-bold text-gray-400"
                htmlFor="name"
              >
                Horario
              </label>
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

              <label
                className="text-sm block font-bold text-gray-400"
                htmlFor="name"
              >
                Foto
              </label>
              <input
                type="file"
                name="image"
                className="px-3 py-2 focus:outline-none rounded bg-gray-600 text-white w-full"
                onChange={(e) => setFieldValue('image', e.target.files[0])}
              ></input>
              <button
                type="submit"
                className="bg-indigo-600 hover:bg-indigo-500 px-4 py-2 rounded mt-2 text-white focus:outline-none disabled:bg-indigo-400"
              >
                Guardar
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};
