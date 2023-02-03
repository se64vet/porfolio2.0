import React from 'react'
type FormProps = {
  formTitle: string
}
const Form = (props: FormProps) => {
  const handleSubmit = () => {}
  const handleChange = () => {}
  return (
    <>
      <h3 className="my-5 text-3xl font-semibold text-red-600">
        {props.formTitle}
      </h3>
      <form
        onSubmit={handleSubmit}
        className="flex-center-everything flex-col gap-3"
      >
        <input
          className="w-full border border-gray-700"
          type="text"
          placeholder=" name"
          onChange={handleChange}
        />
        <input
          className="w-full border border-gray-700"
          type="email"
          placeholder=" email"
        />
        <textarea
          className="w-full border border-gray-700"
          cols={40}
          rows={7}
          placeholder=" message"
        ></textarea>
        <input
			className="self-end bg-gray-400 px-6 py-1 font-bold text-white hover:bg-red-800"
          type="submit"
          value="Send"
        />
      </form>
    </>
  )
}

export default Form
