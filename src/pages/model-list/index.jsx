import "./style.css";
import banner from "../../assets/bg-home3.jpg";
import { Link, useParams } from "react-router-dom";
import DEVICE_MODELS from "../../assets/models";
import { useState } from "react";

export default function ModelList() {
    const {deviceType} = useParams();
    const [filter, setFilter] = useState("");
    return (
        <div>
            <div className="display-6 m-3 border-bottom w-fit-content">
				Repair Service Price List
			</div>
			<div
				className="background w-100 px-1 pt-3 pb-4 p-md-5"
				style={{ backgroundImage: `url(${banner})`, height: "350px" }}
			>
            </div>
            <div className="p-3 py-3">
                <Link to={-1}>
                    Back
                </Link>
            </div>
            <div className="input-group m-3 mx-auto" style={{width: "20em"}}>
                <span className="input-group-text">Find</span>
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Enter a model" 
                    value={filter} 
                    onChange={(e) => setFilter(e.target.value)}
                />
            </div>
            <div style={{overflowX: "auto", width: "100vw"}}>

            <table className="table table-striped align-items-center my-3 mx-auto" style={{ maxWidth : "1300px", verticalAlign: "middle"}}>
                    <thead>
                        <tr>
                            <th>Model Name</th>
                            <th>Model Number</th>
                            <th>Glass Repair</th>
                            <th>Touch Repair</th>
                            <th>LCD Repair</th>
                            <th>Backdoor Repair</th>
                        </tr>
                    </thead>
                    <tbody>
                        {DEVICE_MODELS[deviceType]
                            .filter(model => 
                                filter.length > 0 ?
                                model[0].toLowerCase().includes(filter.toLowerCase()) ||
                                model[1].toLowerCase().includes(filter.toLowerCase()) : true)
                            .map((model, index) => {
                                return (
                                    <tr key={`model-` + index}>
                                        <td>{model[0]}</td>
                                        <td>{model[1]}</td>
                                        <td>{model[2] ? "$" + model[2] : ""}</td>
                                        <td>{model[3] ? "$" + model[3] : ""}</td>
                                        <td>{model[4] ? "$" + model[4] : ""}</td>
                                        <td>{model[5] ? "$" + model[5] : ""}</td>
                                    </tr>
                                );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}