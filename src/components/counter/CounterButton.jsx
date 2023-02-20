import { PropTypes } from "prop-types";
import "./Counter.css";

function CounterButton({ myvalue, incMethod, decMethod }) {
  return (
    <div className="Counter">
      <div>
        {/* We use arrow functions to pass parameter */}
        <button className="counterButton" onClick={() => incMethod(myvalue)}>
          +{myvalue}
        </button>
        <button className="counterButton" onClick={() => decMethod(myvalue)}>
          -{myvalue}
        </button>
      </div>
    </div>
  );
}
// * Setting input type
CounterButton.propTypes = {
  myvalue: PropTypes.number,
};
// * Setting Default İnput
CounterButton.defaultProps = {
  myvalue: 1,
};

export default CounterButton;
