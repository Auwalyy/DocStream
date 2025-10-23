import React from "react";
import { Search } from "lucide-react";
import "./CompanyDetails.css";

const FindCompany = () => {
  return (
    <div className="find-company">
      <div className="find-card">
        <input type="text" placeholder="Station Name" className="find-input" />
        <button className="find-button">
          Search <Search size={18} />
        </button>
      </div>
    </div>
  );
};

export default FindCompany;
