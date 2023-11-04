import React from "react";

interface heading {
    topText: string;
    secondText: string;
}
const SidebarHeading = ({ topText, secondText }: heading) => {
    return (
        <div>
            <span className="text-softTextColor">{topText}</span>
            <p className="text-3xl font-semibold text-text">{secondText}</p>
        </div>
    );
};

export default SidebarHeading;
