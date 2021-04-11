import "./button.scss"

interface iStyle {
  classes: string
}
interface iButton {
  text: JSX.Element,
  value: string,
  style: iStyle,
  update: () => void
}

function Button({ style, text, value, update }: iButton) {
  return (
    <button className={style.classes} value={value} onClick={update}>{text}</button>
  );
}

export default Button