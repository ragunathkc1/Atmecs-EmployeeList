import React from "react";

function Dropdown(props) {
   
    return <>
    <Dropdown.Toggle variant="success" id="dropdown-basic">
    Dropdown Button
  </Dropdown.Toggle>
        <select {...props} onChange={props.changeEmp} value={"empId-1"}>
            {props.options &&
                props.options.map(o =>
                    <option key={o.empId} value={o.empId}>
                        {o.name}
                    </option>)
            }
        </select>
    </>;
}
export default Dropdown;