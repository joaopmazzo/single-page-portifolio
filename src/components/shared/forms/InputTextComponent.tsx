interface InputTextComponentProps {
  name: string;
  id: string;
  placeholder: string;
}

const InputTextComponent = ({
  name,
  id,
  placeholder,
}: InputTextComponentProps) => {
  return (
    <input
      type="text"
      name={name}
      id={id}
      placeholder={placeholder}
      className="bg-transparent rounded-none outline-none
          w-full border-b-[1px] border-white pb-4 px-6 text-bodyL leading-bodyL font-medium
          focus:border-green"
    />
  );
};

export default InputTextComponent;
