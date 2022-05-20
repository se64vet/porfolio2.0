import React from 'react'
type FormProps = {
  formTitle: string
}
const Form = (props: FormProps) => {
  const handleSubmit = () => {}
  const handleChange = () => {}
  return (
    <>
      <h3 className="my-5 text-3xl font-bold text-orange-500">
        {props.formTitle}
      </h3>
      <form
        onSubmit={handleSubmit}
        className="flex-center-everything flex-col gap-3"
      >
        <input
          className="w-full border border-gray-700"
          type="text"
          placeholder="name"
          onChange={handleChange}
        />
        <input
          className="w-full border border-gray-700"
          type="email"
          placeholder="email"
        />
        <textarea
          className="w-full border border-gray-700"
          cols={40}
          rows={7}
          placeholder="message"
        ></textarea>
        <input
          className="self-end bg-orange-500 px-6 py-1 font-bold text-white"
          type="submit"
          value="Send"
        />
      </form>
    </>
  )
}

export default Form
