/**
 * A simple JavaScript templating engine, reads templates then places data into them.
 * 
 * @author André Figueira
 * @version 0.0.3
 * 
 * @param {type} template
 * @param {type} options
 * @returns {$.fn.tmpl.defaults}
 * 
 */
$.fn.tmpl = function(template, options)
{

    var defaults = {
        templateDir: 'templates/',
        extension: 'html',
        regex: /\{\{ (.*?) \}\}/g
    };

    var options = $.extend(defaults, options);
    
	function templateUrl()
	{
		
		return options.templateDir + template + '.' + options.extension;
		
	};
    
    defaults.parse = function(parseData)
    {
    
    	var template = getTemplate();
    	var html = '';
    	
    	console.log(parseData);
    	
    	$(parseData).each(function(k, v){
    	
    		html += template.replace(options.regex, function(match, token){
                
			    return v[token];
                
			});
    		
    	});
    	
    	return html;
	    
    };
    
    function getTemplate()
    {
    
    	var fileContents;
    
    	$.ajax({	 
    		url: templateUrl(),
    		success: function(data){
    		
    			fileContents = data;
	    		
    		},
    		async: false
    	});
    	
    	return fileContents;
	    
    };
    
    return defaults;

};