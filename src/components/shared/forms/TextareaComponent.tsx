interface TextareaComponentProps {
  name: string;
  id: string;
  placeholder: string;
}

const TextareaComponent = ({
  name,
  id,
  placeholder,
}: TextareaComponentProps) => {
  return (
    <textarea
      name={name}
      id={id}
      placeholder={placeholder}
      rows={3}
      className="bg-transparent rounded-none outline-none
          w-full border-b-[1px] border-white pb-4 px-6 text-base leading-bodyL font-medium
          focus:border-green"
    />
  );
};

export default TextareaComponent;
