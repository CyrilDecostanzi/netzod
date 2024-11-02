import Script from "next/script";

const GoogleAdsense: React.FC = () => {
	const client = process.env.NEXT_PUBLIC_GOOGLE_ADS_CLIENT_ID;
	return (
		<Script
			async
			src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9318353562472963`}
			crossOrigin="anonymous"
			strategy="afterInteractive"
		/>
	);
};

export default GoogleAdsense;
