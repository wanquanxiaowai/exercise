function hello(){
var fido={name="fido",weight=40};
var prop;
for(prop in fido)
	{
		alert("fido has a "+prop +" property");
		if (prop =="name")
			{
				alert("this is "+fido[prop]);
			}
	}
}