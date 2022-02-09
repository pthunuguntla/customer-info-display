
import sn from "classnames";

import "./select.scss"

const blockName = "select-container"



const Select = (props) => {
    const { onSelectChange } = props;


    return (
        <div className={sn(blockName, "form-group")}>
            <select id="maxRows" onChange={(value) => onSelectChange(value)}>
                <option value="5000">Show ALL Rows</option>
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="15">15</option>
                <option value="20">20</option>
                <option value="50">50</option>
                <option value="70">70</option>
                <option value="100">100</option>
            </select>
        </div>
    )
}

export default Select