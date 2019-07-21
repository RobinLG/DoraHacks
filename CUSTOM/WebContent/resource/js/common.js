$(function() {

	var $window = $(window),
		$app = $('.app')
    
    $window.resize(toggleFooter)
    toggleFooter()
	
	$('.app').on('click', '#lang-selector li', function() {
		var params = window.location.search

		if (params.length == 0) {
			params += '?lang=' + $(this).data('lang')
        } else if (/lang=[^&]+/.test(params)) {
        	params = params.replace(/lang=[^&]+/, 'lang=' + $(this).data('lang'))
        } else {
        	params += '&lang=' + $(this).data('lang')
        }
		window.location.href = window.location.pathname + params
	})
	
	jQuery.validator.addMethod("regex", function(value, element, params) {　　　　　　　　　　
        var exp = new RegExp(params)
        return exp.test(value)
    }, "error")
    
    $('.app').on('change pase', '.upper-case', function() {
    	$(this).val($(this).val().toUpperCase())
    })

})

function isEmpty(obj) {
	return (obj == undefined || obj == '')
}

function toggleModalShowType($modal, type) {
    $modal.find('.dynamic-dom').each(function () {
        var showType = $(this).data('show-type')
        if (showType == type) {
            $(this).show()
        } else {
            $(this).hide()
        }
    })
}

var sc = "鲁沪苏辽宁赣闵粤贵云琼晋陕", tc = "魯滬蘇遼寧贛閔粵貴雲瓊晉陝"
function autoFixChinaLicense(license) {
	for (var i in sc) {
		license = license.replace(new RegExp(sc[i], 'g'), tc[i])
	}
	if (/^[魯京津滬浙蘇冀豫遼吉黑渝蒙桂寧藏新港贛皖閔粵貴雲鄂湘川瓊晉陝甘青台](([A-Z0-9]{5}澳)|([A-Z0-9]{6}))$/.test(license)) {
		license = license.substring(0, 2) + '.' + license.substring(2)
	}
	return license
}

function toggleFooter() {
	$('.app-footer').removeClass('fixed')
    if ($('.app').height() < $(window).height()) {
    	$('.app-footer').addClass('fixed')
    }
}