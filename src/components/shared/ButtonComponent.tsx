interface ButtonComponentProps {
  text: string;
}

const ButtonComponent = ({ text }: ButtonComponentProps) => {
  return (
    <button
      type="button"
      className="text-bodyL leading-bodyL font-bold py-2 border-b-2 border-green
      hover:text-green"
    >
      {text}
    </button>
  );
};

export default ButtonComponent;
