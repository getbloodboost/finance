// Pop Code for PrivacyInfo.htm, popped from EmailCap elements.
var alreadyOpen = false;
var brow_alreadyOpen = false;
var popupWin;
function openPrivacyInfoPop(url,name,w,h) {
	if (parseInt(navigator.appVersion) > 2) {
		if (alreadyOpen) {
			if (popupWin.closed) {
				popupWin = window.open(url,name,'scrollbars=no,resizable,width='+w+',height='+h);
			} 
			else {
				popupWin.location = url;
				popupWin.focus()
			}
		} 
		else {
			popupWin = window.open(url,name,'scrollbars=no,resizable,width='+w+',height='+h);
			alreadyOpen = true;
		}
	}
}