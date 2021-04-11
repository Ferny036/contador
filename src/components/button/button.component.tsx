import "./button.scss"

interface iButton {
  text: JSX.Element,
  value: string,
  style: string,
  update: () => void
}

function Button({ style, text, value, update }: iButton) {
  return (
    <button className={style} value={value} onClick={update}>{text}</button>
  );
}

export default Button