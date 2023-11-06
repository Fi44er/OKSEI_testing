import "./Input.css"

const Input = ({
  widthInp,
  colorInp,
  backInp,
  weightInp,
  sizeInp,
  typeBtn,
  placeInp,
  borderInp,
  heightInp,

}) => {
  return (
    <input
      className="compInp_i1"
      type={typeBtn}
      placeholder={placeInp}
      style={{
        width: widthInp,
        color: colorInp,
        background: backInp,
        border: borderInp,
        fontSize: sizeInp,
        fontWeight: weightInp,
        height: heightInp,
      }}
    />
  )
}

Input.defaultProps = {
  widthInp: 422,
  colorInp: "#A5A8AF",
  backInp: "#1E2538",
  borderInp: "none",
  sizeInp: 17,
  weightInp: 400,
  heightInp: 50,
}

export default Input
