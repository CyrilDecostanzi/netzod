"use client";

import { useEffect } from "react";

const AdBanner = (props: any) => {
	useEffect(() => {
		try {
			(window.adsbygoogle = window.adsbygoogle || []).push({});
			console.log("adsbygoogle.push");
		} catch (err) {
			console.log(err);
		}
	}, []);

	return (
		<ins
			className="adsbygoogle"
			style={{
				display: "block",
				width: "100%"
			}}
			data-ad-client="ca-pub-9318353562472963"
			{...props}
		/>
	);
};
export default AdBanner;
