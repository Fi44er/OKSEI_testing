import "./Button.css"

const Button = ({
  children,
  widthBtn,
  colorBtn,
  backBtn,
  weightBtn,
  sizeBtn,
  borderBtn,
}) => {
  return (
    <button
      className="compButton_1i"
      style={{
        width: widthBtn,
        background: backBtn,
        color: colorBtn,
        border: borderBtn,
      }}
    >
      <div
        id="compButtonText_1i"
        style={{
          fontWeight: weightBtn,
          fontSize: sizeBtn,
        }}
      >
        {children}
      </div>
    </button>
  )
}

Button.defaultProps = {
  widthBtn: 422,
  backBtn: "#F2F60F",
  buttonImg: "none",
  colorBtn: "#000",
  weightBtn: 600,
  sizeBtn: 17,
  borderBtn: "none",
}

export default Button
