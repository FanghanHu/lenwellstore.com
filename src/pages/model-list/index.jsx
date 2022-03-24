import "./style.css";
import banner from "../../assets/bg-home3.jpg";
import { Link, useParams } from "react-router-dom";
import { DEVICE_MODELS_RETAIL, DEVICE_MODELS_WHOLESALE } from "../../assets/models";
import { useEffect, useRef, useState } from "react";
import axios from "axios";

export default function ModelList() {
    const {deviceType} = useParams();
    const [filter, setFilter] = useState("");
    const [query, setQuery] = useState("");
    const [customers, setCustomers] = useState([]);
    //stops request from racing each other
    const lastReqRef = useRef(0);

    useEffect(() => {
        //load phone number from location storage
        const local = window.localStorage.getItem("account-query");
        if(local) {
            setQuery(local);
        }
    }, []);

    useEffect(() => {
        //update local storage and query for account
        if(query?.length > 0) {
            window.localStorage.setItem("account-query", query);
            const reqID = lastReqRef.current + 1;
            lastReqRef.current = reqID;
            axios.get("https://lenwellpro.repairshopr.com/api/v1/customers?query=" + query, {
                headers: {"Authorization": "T288c9b12d7fdfd2c4-f5fd32fade20409241668e0ea1e4231b"}
            }).then(res => {
                if(lastReqRef.current === reqID) {
                    setCustomers(res.data.customers);
                }
            })
        }
    }, [query, setCustomers])

    const customer = customers.length === 1 ? customers[0] : null;
    const DEVICE_MODELS = customer?.["referred_by"] === "Business with Tax ID" ? DEVICE_MODELS_WHOLESALE : DEVICE_MODELS_RETAIL;
    let discount = 0;
    if(customer){
        if(customer["business_and_full_name"].includes("VVIP")) discount = 13;
        if(customer["business_and_full_name"].includes("VIP1")) discount = 11;
        if(customer["business_and_full_name"].includes("VIP2")) discount = 8;
        if(customer["business_and_full_name"].includes("VIP3")) discount = 5;
    }

    const applyDiscount = (price) => (price * (100 + discount) / 100).toFixed(2);

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
                <span className="input-group-text">Find Model</span>
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Enter a model" 
                    value={filter} 
                    onChange={(e) => setFilter(e.target.value)}
                />
            </div>
            <div className="input-group m-3 mx-auto" style={{width: "22em"}}>
                <span className="input-group-text">Find My Price List</span>
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Enter Phone or Name" 
                    value={query} 
                    onChange={(e) => setQuery(e.target.value)}
                />
            </div>
            <div className="h5 text-center m-3">
                {
                    customers.length === 0 ? "Showing retail price, please enter your account information to find your specific price list" :
                    customers.length > 1 ? "We Found more than one result, please be more specific, or use your phone number." :
                    `Showing price list for: ${customer["business_and_full_name"]}, You have ${discount}% discount (already calculated).` 
                }
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
                                        <td>{model[2] ? "$" + applyDiscount(model[2]) : ""}</td>
                                        <td>{model[3] ? "$" + applyDiscount(model[3]) : ""}</td>
                                        <td>{model[4] ? "$" + applyDiscount(model[4]) : ""}</td>
                                        <td>{model[5] ? "$" + applyDiscount(model[5]) : ""}</td>
                                    </tr>
                                );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}