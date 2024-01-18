/**
 * Function to check whether current device is IOS or not 
 * @returns boolean. true / false
 */
const isIOSDevice = ():boolean => {
	try{
		return (
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
			/iPad|iPhone|iPod/.test(navigator.userAgent) && !(window as any).MSStream
		);
	}
	catch{
		return false;
	}
};

export { isIOSDevice };
