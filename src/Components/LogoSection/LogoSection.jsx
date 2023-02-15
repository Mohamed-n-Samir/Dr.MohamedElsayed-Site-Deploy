import React from 'react';
import "./logo-section.css"
import { useTranslation } from "react-i18next";



const LogoSection = () => {
    const [t, i18n] = useTranslation();

    return (
        <div className = "search-parent">
            <h1 className="name-logo">DR.Mohamed ElSayed</h1>
				<div className="search-box container">
					<input
						placeholder={t("searchPlaceHolder")}
						type="text"
						name="query"
						id="lectures-search"
					/>
					<button type="submit" className="search-button">
						{t("searchBtn")}
					</button>
				</div>
        </div>
    );
};

export default LogoSection;