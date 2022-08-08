async function copyToClipboard() { 
    
    // Copy email to clipboard
    var value = "leroy.robrecht@gmail.com"
	navigator.clipboard.writeText(value);

    // Change border on click
    document.getElementById('border').style.boxShadow = "0px 0px 0px 4px rgba(0, 255, 0, 0.4)"
    await new Promise(resolve => setTimeout(resolve, 300));
    document.getElementById('border').style.boxShadow = ""
};