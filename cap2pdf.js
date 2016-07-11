// html2pdf.js
var page = new WebPage();
var system = require("system");

// change the paper size to letter, add some borders
// add a footer callback showing page numbers
page.paperSize = {
	format: "Letter",
	orientation: "Landscape",
	margin: {left:"0cm", right:"0cm", top:"0cm", bottom:"0cm"},
	footer: { height: "0.9cm",
 		contents: phantom.callback(function(pageNum, numPages) {			
			return "<div style='text-align:center;'><small>" + pageNum +
			" / " + numPages + "</small></div>";
			})
        }
};

page.zoomFactor = 1;

// assume the file is local, so we don't handle status errors
page.open(system.args[1], function (status) {
	// export to target (can be PNG, JPG or PDF!)
	page.render(system.args[2]);
	phantom.exit();
});
