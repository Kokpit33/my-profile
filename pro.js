const xhttpr = new XMLHttpRequest();
xhttpr.open('GET','Api_address',true);

xhttpr.send();

xhttpr.onload = () => {
    if(xhttpr.status===200) {
        const response = JSON.parse(xhttpr.response);
    }else{
        document.
    }
}