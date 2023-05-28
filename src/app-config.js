export const isMainnet = false;

export const config = {
	lang: 'ru',
	walletConnectId: process.env.REACT_APP_WALLET_CONNECT_ID,
	ContractAddress: "",
	version: "1.0.0",
	is_iphone: iOS(),
	is_mobile: mobileDetect(),
}

function iOS() {
	return (
		[
			'iPad Simulator',
			'iPhone Simulator',
			'iPod Simulator',
			'iPad',
			'iPhone',
			'iPod',
		].includes(navigator.platform) ||
		// iPad on iOS 13 detection
		(navigator.userAgent.includes('Mac') && 'ontouchend' in document)
	);
}

function mobileDetect() {
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i
    .test(window.navigator.userAgent)) {
    return true;
  } else return false;
}