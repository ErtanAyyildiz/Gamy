$("form").submit(function(){$("input[name='"+mds_config.csfr_token_name+"']").val($.cookie(mds_config.csfr_cookie_name))}),$(document).ready(function(){function o(e){e.each(function(){var e=$(this),t=e.data("delay"),n="animated "+e.data("animation");e.css({"animation-delay":t,"-webkit-animation-delay":t}),e.addClass(n).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",function(){e.removeClass(n)})})}$("#main-slider").on("init",function(e,t){o($("#main-slider .item:first-child").find("[data-animation]"))}),$("#main-slider").on("beforeChange",function(e,t,n,a){o($('#main-slider .item[data-slick-index="'+a+'"]').find("[data-animation]"))}),$("#main-slider").slick({autoplay:!0,autoplaySpeed:9e3,slidesToShow:1,slidesToScroll:1,infinite:!0,speed:500,fade:1==mds_config.slider_fade_effect,swipeToSlide:!0,rtl:mds_config.rtl,cssEase:"linear",prevArrow:$("#main-slider-nav .prev"),nextArrow:$("#main-slider-nav .next")}),$("#main-mobile-slider").on("init",function(e,t){o($("#main-mobile-slider .item:first-child").find("[data-animation]"))}),$("#main-mobile-slider").on("beforeChange",function(e,t,n,a){o($('#main-mobile-slider .item[data-slick-index="'+a+'"]').find("[data-animation]"))}),$("#main-mobile-slider").slick({autoplay:!0,autoplaySpeed:9e3,slidesToShow:1,slidesToScroll:1,infinite:!0,speed:500,fade:1==mds_config.slider_fade_effect,swipeToSlide:!0,rtl:mds_config.rtl,cssEase:"linear",prevArrow:$("#main-mobile-slider-nav .prev"),nextArrow:$("#main-mobile-slider-nav .next")}),0!=$("#slider_special_offers").length&&$("#slider_special_offers").slick({autoplay:!1,autoplaySpeed:4900,infinite:!0,speed:200,swipeToSlide:!0,rtl:mds_config.rtl,cssEase:"linear",lazyLoad:"progressive",prevArrow:$("#slider_special_offers_nav .prev"),nextArrow:$("#slider_special_offers_nav .next"),slidesToShow:5,slidesToScroll:5,responsive:[{breakpoint:992,settings:{slidesToShow:4,slidesToScroll:4}},{breakpoint:768,settings:{slidesToShow:3,slidesToScroll:3}},{breakpoint:576,settings:{slidesToShow:2,slidesToScroll:2}}]}),$("#product_slider").slick({slidesToShow:1,slidesToScroll:1,speed:300,arrows:!0,fade:!0,infinite:!1,swipeToSlide:!0,cssEase:"linear",lazyLoad:"progressive",prevArrow:$("#product-slider-nav .prev"),nextArrow:$("#product-slider-nav .next"),asNavFor:"#product_thumbnails_slider"}),$("#product_thumbnails_slider").slick({slidesToShow:7,slidesToScroll:1,speed:300,focusOnSelect:!0,arrows:!0,infinite:!1,vertical:!0,centerMode:!1,cssEase:"linear",lazyLoad:"progressive",prevArrow:$("#product-thumbnails-slider-nav .prev"),nextArrow:$("#product-thumbnails-slider-nav .next"),asNavFor:"#product_slider"}),$(document).on("click","#product_thumbnails_slider .slick-slide",function(){var e=$(this).attr("data-slick-index");$("#product_slider").slick("slickGoTo",parseInt(e))}),$(document).ready(function(){baguetteBox.run(".product-slider",{animation:1==mds_config.rtl?"fadeIn":"slideIn"})}),$(document).ajaxStop(function(){baguetteBox.run(".product-slider",{animation:1==mds_config.rtl?"fadeIn":"slideIn"})}),$("#blog-slider").slick({autoplay:!1,autoplaySpeed:4900,infinite:!0,speed:200,swipeToSlide:!0,rtl:mds_config.rtl,cssEase:"linear",prevArrow:$("#blog-slider-nav .prev"),nextArrow:$("#blog-slider-nav .next"),slidesToShow:3,slidesToScroll:3,responsive:[{breakpoint:768,settings:{slidesToShow:2,slidesToScroll:2}},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1}}]}),$(document).on("click",".rating-stars .label-star",function(){$("#user_rating").val($(this).attr("data-star"))}),$(document).on("click",".btn-open-mobile-nav",function(){$("#navMobile").hasClass("nav-mobile-open")?($("#navMobile").removeClass("nav-mobile-open"),$("#overlay_bg").hide()):($("#navMobile").addClass("nav-mobile-open"),$("#overlay_bg").show())}),$(document).on("click","#overlay_bg",function(){$("#navMobile").removeClass("nav-mobile-open"),$("#overlay_bg").hide()}),$(document).on("click",".close-menu-click",function(){$("#navMobile").removeClass("nav-mobile-open"),$("#overlay_bg").hide()})});var obj_mobile_nav={id:"",name:"",parent_id:"",parent_name:"",back_button:1};
function siparis_iptal(url, id, order_status, guncelleme, teslimatsuresi, auth_user_id, message) {
    swal({
        text: message,
        icon: "warning",
        buttons: true,
        buttons: [sweetalert_cancel, sweetalert_ok],
        dangerMode: true,
    }).then(function (willDelete) {
        if (willDelete) {
            var data = {
                'id': id,
                'order_status': order_status,
                'guncellemetarihi': guncelleme,
                'teslimatsuresi': teslimatsuresi,
                'auth_user_id': auth_user_id,
            };
            data[mds_config.csfr_token_name] = $.cookie(mds_config.csfr_cookie_name);
            $.ajax({
                type: "POST",
                url: mds_config.base_url + url,
                data: data,
				beforeSend: function() {
					Swal.fire({
						html: '<h5>Lütfen Bekleyiniz...</h5>',
						showConfirmButton: false,
						allowOutsideClick: false,
						didOpen: () => {
							Swal.showLoading()
						},
					});
				},
                success: function (response) {
                    location.reload();
                }
            });
        }
    });
};

function send_message_in_order(message_receiver_id2) {
	$('#messageModal_' + message_receiver_id2).modal('show');
	$("#form_send_message" + message_receiver_id2).submit(function (event) {
		event.preventDefault();
		var message_subject = $('#message_subject' + message_receiver_id2).val();
		var message_text = $('#message_text' + message_receiver_id2).val();
		var message_receiver_id = $('#message_receiver_id' + message_receiver_id2).val();
		var message_send_em = $('#message_send_em' + message_receiver_id2).val();
	
		
		var $form = $(this);
		var $inputs = $form.find("input, select, button, textarea");
		var serializedData = $form.serializeArray();
		serializedData.push({name: mds_config.csfr_token_name, value: $.cookie(mds_config.csfr_cookie_name)});
		serializedData.push({name: "sys_lang_id", value: mds_config.sys_lang_id});
		$inputs.prop("disabled", true);
		$.ajax({
			url: mds_config.base_url + "message_controller/add_conversation",
			type: "post",
			data: serializedData,
			success: function (response) {
				$inputs.prop("disabled", false);
				var obj = JSON.parse(response);
				if (obj.result == 1) {
					document.getElementById("send-message-result" + message_receiver_id2).innerHTML = obj.html_content;
					$("#form_send_message" + message_receiver_id2)[0].reset();
				}
				//send email
				if (message_send_em == 1) {
					send_message_as_email(obj.sender_id, message_receiver_id, message_subject, message_text);
				}
			}
		});
	});
};

function toast_swal(icon, title) {
    const Toast = Swal.mixin({
	toast: true,
	position: 'top-end',
	showConfirmButton: false,
	timer: 6000,
	timerProgressBar: true,
	showCloseButton: true,
	didOpen: (toast) => {
		toast.addEventListener('mouseenter', Swal.stopTimer)
		toast.addEventListener('mouseleave', Swal.resumeTimer)
	}
	});
	
	Toast.fire({
	icon: icon,
	title: title
	});
};

$(document).on('click', '.btn-item-add-to-cart-kat', function () {
    var product_id = $(this).attr("data-product-id");
    var button_id = $(this).attr("data-id");
    document.getElementById("btn_add_cart_kat_" + button_id).innerHTML = spinnerjs;
	$('#btn_add_cart_kat_' + button_id).attr("disabled", true);
    var data = {
        "product_id": product_id,
        "is_ajax": true,
        "sys_lang_id": mds_config.sys_lang_id
    };
    data[mds_config.csfr_token_name] = $.cookie(mds_config.csfr_cookie_name);
    $.ajax({
        type: "POST",
        url: mds_config.base_url + "cart_controller/add_to_cart_katalog",
        data: data,
        success: function (response) {
            var obj = JSON.parse(response);
            if (obj.result == 1) {
                setTimeout(function () {
                    $('#btn_add_cart_kat_' + button_id).css('background-color', 'rgb(40, 167, 69, .7)');
                    document.getElementById("btn_add_cart_kat_" + button_id).innerHTML =
                        ''+ spinnerjs +' Sepete Eklendi';
                    $('.span_cart_product_count').html(obj.product_count);
                    $('.span_cart_product_count').removeClass('visibility-hidden');
                    $('.span_cart_product_count').addClass('visibility-visible');
					toast_swal('success', obj.flashdata);
					gtag_report_conversion('https://www.itemhesap.com/add-to-cart');
                }, 400);
                setTimeout(function () {
                    $('#btn_add_cart_kat_' + button_id).css('background-color', 'rgba(255, 255, 255, .7)');
                    document.getElementById("btn_add_cart_kat_" + button_id).innerHTML = '<i class="icon-cart"></i> Satın Al';
					$('#btn_add_cart_kat_' + button_id).removeAttr("disabled");
                }, 2000);
            }
        }
    });
});

function switch_theme(theme_mode) {
	Swal.fire({
        title: "Tema Değişiyor",
		html: "Temayı değiştirmek istediğine emin misin?",
        icon: "warning",
		cancelButtonText: sweetalert_cancel,
        confirmButtonText: sweetalert_ok,
        showCancelButton: true,
		footer: 'Onayladıktan sonra kısa bir süre sayfanın yüklenmesini beklemelisin.',
    }).then(function (willDelete) {
        if (willDelete.isConfirmed) {
            var data = {
                'theme_mode': theme_mode,
            };
            data[mds_config.csfr_token_name] = $.cookie(mds_config.csfr_cookie_name);
            $.ajax({
                type: "POST",
                url: mds_config.base_url + "switch-dark-mode",
                data: data,
				beforeSend: function() {
					Swal.fire({
						html: '<h5>Lütfen Bekleyiniz...</h5>',
						showConfirmButton: false,
						allowOutsideClick: false,
						didOpen: () => {
							Swal.showLoading()
						},
					});
				},
                success: function (response) {
                    location.reload();
                }
            });
        }
    });
};

$(document).ready(function() {

	// initialize scrollbar for notification box
	$("#notification-box .list-group").mCustomScrollbar({
	    theme:"minimal-dark", // set mCustomScrollBar theme
	});

	// mark unread notifications as read
	// and remove the unread badge count from header
	$("#notification-btn").on("click", function() {
		if($("#notification-btn .unread-count").text() > 0) {
		    $.get(mds_config.base_url+"activity/mark-notifications-as-read", function(data) {
				$("#notification-btn .unread-count").fadeOut(function() {
					$(this).remove();
				});
			});
		}
	});
	
	$("#notification-btn-mobil").on("click", function() {
		if($("#notification-btn-mobil .unread-count").text() > 0) {
		    $.get(mds_config.base_url+"activity/mark-notifications-as-read", function(data) {
				$("#notification-btn-mobil .unread-count").fadeOut(function() {
					$(this).remove();
				});
			});
		}
	});

});

function iptal_hata(message) {
	Swal.fire({
        title: "Sipariş İptal Edilemedi!",
		html: message,
        icon: "error",
        confirmButtonText: "Tamam",
		footer: '<a href="https://www.ekrangoruntusu.com/images/2021/10/21/iptalet0d8607fa46450d10.png" target="_blank">Neden iptal edemiyorum?</a>',
    });
};

function genel_hata(message) {
	Swal.fire({
		html: message,
        icon: "error",
        confirmButtonText: "Tamam",
    });
};

function cuzdanla_ode(url, user_id, payment_amount, payment_type, lang, conversation_id, message) {
    swal({
        text: message,
        icon: "warning",
        buttons: true,
        buttons: [sweetalert_cancel, sweetalert_ok],
        dangerMode: true,
    }).then(function (willDelete) {
        if (willDelete) {
            var data = {
                'user_id': user_id,
                'payment_amount': payment_amount,
                'payment_type': payment_type,
                'lang': lang,
                'conversation_id': conversation_id,
            };
            data[mds_config.csfr_token_name] = $.cookie(mds_config.csfr_cookie_name);
            $.ajax({
                type: "POST",
                url: mds_config.base_url + url,
                data: data,
				beforeSend: function() {
					Swal.fire({
						html: '<h5>Lütfen Bekleyiniz...</h5>',
						showConfirmButton: false,
						allowOutsideClick: false,
						didOpen: () => {
							Swal.showLoading()
						},
					});
				},
                success: function (response) {
                    //location.reload();
                }
            });
        }
    });
};

function tel_verify(url, user_id, phone_number, message) {
	swal({
        text: message,
        icon: "warning",
        buttons: true,
        buttons: [sweetalert_cancel, sweetalert_ok],
        dangerMode: true,
    }).then(function (willDelete) {
        if (willDelete) {
            var data = {
                'user_id': user_id,
                'phone_number': document.querySelector(phone_number).value,
            };
            data[mds_config.csfr_token_name] = $.cookie(mds_config.csfr_cookie_name);
            $.ajax({
                type: "POST",
                url: mds_config.base_url + url,
                data: data,
				beforeSend: function() {
					Swal.fire({
						html: '<h5>Lütfen Bekleyiniz...</h5>',
						showConfirmButton: false,
						allowOutsideClick: false,
						didOpen: () => {
							Swal.showLoading()
						},
					});
				},
                success: function (response) {
                    location.reload();
                }
            });
        }
    });
};

function close_support_ticket(e, user_id) {
	swal({
        text: "Talebi kapatmak istediğinizden emin misiniz?",
        icon: "warning",
        buttons: true,
        buttons: [sweetalert_cancel, sweetalert_ok],
        dangerMode: true,
    }).then(function (willDelete) {
        if (willDelete) {
			var data = {
				'id': e,
                'user_id': user_id,
			};
			data[mds_config.csfr_token_name] = $.cookie(mds_config.csfr_cookie_name);
			$.ajax({
				type:"POST",
				url:mds_config.base_url+"support_controller/close_ticket_post",
				data:data,
				beforeSend: function() {
					Swal.fire({
						html: '<h5>Lütfen Bekleyiniz...</h5>',
						showConfirmButton: false,
						allowOutsideClick: false,
						didOpen: () => {
							Swal.showLoading()
						},
					});
				},
				success:function(response){
					location.reload()
				}
			});
		}
    });
};

function sorun_bildir(order_product_id, user_id) {
	swal({
        text: "Sorun bildirmek istediğinizden emin misiniz?\n Sorun bildirdiğiniz anda satıcıya sms atılarak sorun çözülene kadar paranız güvenli havuza geri çekilir bu sebeple gereksiz sorun bildiriminde bulunmak üyeliğinizin sorun bildirim hakkını yasaklatacaktır, lütfen gerçekten sorun yaşıyorsanız bu seçeneği kullanın.\n Siparişin tamamlanmasının üzerinden 24 saat geçtikten sonra sorun bildirimi yapamayacağınızı da unutmayınız.",
        icon: "warning",
        buttons: true,
        buttons: [sweetalert_cancel, sweetalert_ok],
        dangerMode: true,
		content: {
			element: "input",
			attributes: {
			placeholder: "Yaşadığınız sorun hakkında kısaca bahseder misiniz?",
			type: "textarea",
			},
		},
    }).then(function (willDelete) {
		if (willDelete === "") {
		swal("Hata!", "Lütfen sorun hakkında bilgi veriniz.", "error");
		return false
		}
        if (willDelete) {
			var data = {
				'order_product_id': order_product_id,
                'user_id': user_id,
                'message': willDelete,
			};
			data[mds_config.csfr_token_name] = $.cookie(mds_config.csfr_cookie_name);
			$.ajax({
				type:"POST",
				url:mds_config.base_url+"order_controller/submit_refund_request",
				data:data,
				beforeSend: function() {
					Swal.fire({
						html: '<h5>Lütfen Bekleyiniz...</h5>',
						showConfirmButton: false,
						allowOutsideClick: false,
						didOpen: () => {
							Swal.showLoading()
						},
					});
				},
				success:function(response){
					//location.reload()
					var obj = JSON.parse(response);
					if (obj.result == 1) {
						window.location.href=obj.Url2;
					} else {
						location.reload();
					}
				}
			});
		}
    });
};

//delete product
function sorun_cozuldu_musteri(request_id, submit_okey, message) {
    Swal.fire({
        text: message,
        icon: "warning",
		cancelButtonText: sweetalert_cancel,
        confirmButtonText: sweetalert_ok,
        showCancelButton: true,
		input: 'checkbox',
        inputPlaceholder: 'Son kararım, çözüldü olarak işaretlemek istiyorum.',
    }).then(function (willDelete) {
		if (willDelete.value) {
            var data = {
                "id": request_id,
                "submit": submit_okey,
            };
            data[mds_config.csfr_token_name] = $.cookie(mds_config.csfr_cookie_name);
            $.ajax({
                method: "POST",
                url: mds_config.base_url + "dashboard_controller/approve_decline_refund",
                data: data
            })
                .done(function (response) {
                    location.reload();
                })

        } else if (willDelete.value === 0) {
			Swal.fire({
				icon: "error",
				text: "Onay vermeden çözüldü olarak işaretleyemezsiniz.",
			});
		}
    });
};

//load more posts
function load_more_vitrined_products() {
    $("#load_vitrined_spinner").show();
    var data = {
        'offset': parseInt($("#vitrined_products_offset").val()),
        'sys_lang_id': mds_config.sys_lang_id
    };
    data[mds_config.csfr_token_name] = $.cookie(mds_config.csfr_cookie_name);
    $.ajax({
        type: "POST",
        url: mds_config.base_url + "home_controller/load_more_vitrined_products",
        data: data,
        success: function (response) {
            var obj = JSON.parse(response);
            if (obj.result == 1) {
                setTimeout(function () {
                    $("#vitrined_products_offset").val(obj.offset);
                    $("#row_vitrined_products").append(obj.html_content);
                    $("#load_vitrined_spinner").hide();
                    if (obj.hide_button) {
                        $(".vitrined-load-more-container").hide();
                    }
                }, 300);
            } else {
                setTimeout(function () {
                    $("#load_vitrined_spinner").hide();
                    if (obj.hide_button) {
                        $(".vitrined-load-more-container").hide();
                    }
                }, 300);
            }
        }
    });
};

//load more review
function load_more_review(product_id) {
    var limit = parseInt($("#product_review_limit").val());
    var data = {
        "product_id": product_id,
        "limit": limit,
        "sys_lang_id": mds_config.sys_lang_id
    };
    data[mds_config.csfr_token_name] = $.cookie(mds_config.csfr_cookie_name);
    $("#load_review_spinner").show();
    $.ajax({
        url: mds_config.base_url + "ajax_controller/load_more_review",
        type: "POST",
        data: data,
        success: function (response) {
            var obj = JSON.parse(response);
            if (obj.type == 'reviews') {
                setTimeout(function () {
                    $("#load_review_spinner").hide();
					$("#product_review_limit").val(obj.offset);
                    document.getElementById("review-result").innerHTML = obj.html_content;
                }, 500);
            }
        }
    });
}

//load more posts
function load_more_conversation_items() {
    $("#load_conversation_spinner").show();
    var data = {
        'offset': parseInt($("#conversation_items_offset").val()),
        'user_id': parseInt($("#conversation_items_user_id").val()),
        'sys_lang_id': mds_config.sys_lang_id
    };
    data[mds_config.csfr_token_name] = $.cookie(mds_config.csfr_cookie_name);
    $.ajax({
        type: "POST",
        url: mds_config.base_url + "home_controller/load_more_conversation_items",
        data: data,
        success: function (response) {
            var obj = JSON.parse(response);
            if (obj.result == 1) {
                setTimeout(function () {
                    $("#conversation_items_offset").val(obj.offset);
                    $("#row_conversation_items").append(obj.html_content);
                    $("#load_conversation_spinner").hide();
                    if (obj.hide_button) {
                        $(".conversation-load-more-container").hide();
                    }
                }, 300);
            } else {
                setTimeout(function () {
                    $("#load_conversation_spinner").hide();
                    if (obj.hide_button) {
                        $(".conversation-load-more-container").hide();
                    }
                }, 300);
            }
        }
    });
};
//delete item
function add_to_ready_message(url) {
    Swal.fire({
        title: 'Hazır Mesaj Ekle',
        footer: 'Mesajını tanımak için başlık kısmını gir, senden başkası göremez.',
		html:`
				Başlık:<br> <input id="input_title" class="swal2-input" placeholder="Örn: Sipariş Mesajım" maxlength="25" type="text" required><br><br>
				Mesaj (500 karakter):<br> <textarea id="input_message" rows="2" class="swal2-textarea" required></textarea>
			`,

		preConfirm:function(){
                input_label= $('#input_title').val();
                input_tr= $('#input_message').val();
                // lang_id kısmını fonksiyonda manuel ekle 
				if (!input_label || !input_tr) {
				Swal.showValidationMessage(`Boş kutucuk bırakma`)
				}
				return { input_label: input_label, input_tr: input_tr }
        }
	}).then(function (willDelete) {
		if (willDelete) {
			//if (in1 == '') {
			//	in1= willDelete.value;
			//}	
			var data = {
				'title': input_label,
				'message': input_tr,
			};
			data[mds_config.csfr_token_name] = $.cookie(mds_config.csfr_cookie_name);
			$.ajax({
				type: "POST",
				url: mds_config.base_url + url,
				data: data,
				success: function (response) {
					location.reload();
				}
			});
		}
	});
};
function gtag_report_conversion(url) {
  var callback = function () {
    //if (typeof(url) != 'undefined') {
    //  window.location = url;
    //}
  };
  gtag('event', 'conversion', {
      'send_to': 'AW-835926593/T7qOCNKksIMDEMH0zI4D',
      'event_callback': callback
  });
  //return false;
}
setInterval(function () {

    var renk = Math.floor((Math.random() * 255) + 1) + ',' + Math.floor((Math.random() * 255) + 1) + ',' + Math.floor((Math.random() * 255) + 1);

    $(".yanarli-donerli").css('color', 'rgb(' + renk + ')');

}, 1000);
function mobile_menu(){var e;0<$('.mega-menu li a[data-parent-id="'+obj_mobile_nav.id+'"]').length&&(1==obj_mobile_nav.back_button?$("#navbar_mobile_links").hide():($("#navbar_mobile_links").show(),$("#navbar_mobile_back_button").empty()),$("#navbar_mobile_categories").empty(),$("#navbar_mobile_back_button").empty(),1==obj_mobile_nav.back_button&&(0==obj_mobile_nav.parent_id?document.getElementById("navbar_mobile_back_button").innerHTML='<a href="javascript:void(0)" class="nav-link" data-id="0"><strong><i class="icon-angle-left"></i>'+obj_mobile_nav.name+"</strong></a>":(e=$('.mega-menu li a[data-id="'+obj_mobile_nav.parent_id+'"]').text(),document.getElementById("navbar_mobile_back_button").innerHTML='<a href="javascript:void(0)" class="nav-link" data-id="'+obj_mobile_nav.parent_id+'" data-category-name="'+e+'"><strong><i class="icon-angle-left"></i>'+obj_mobile_nav.name+"</strong></a>"),e=$('.mega-menu li a[data-id="'+obj_mobile_nav.id+'"]').attr("href"),document.getElementById("navbar_mobile_categories").innerHTML='<li class="nav-item"><a href="'+e+'" class="nav-link">'+mds_config.txt_all+"</a></li>"),$('.mega-menu li a[data-parent-id="'+obj_mobile_nav.id+'"]').each(function(){var e=$(this).attr("data-id"),t=obj_mobile_nav.id,n=$(this).attr("href"),a=$(this).text();1==$(this).attr("data-has-sb")?$("#navbar_mobile_categories").append('<li class="nav-item"><a href="javascript:void(0)" class="nav-link" data-id="'+e+'" data-parent-id="'+t+'">'+a+'<i class="icon-arrow-right"></i></a></li>'):$("#navbar_mobile_categories").append('<li class="nav-item"><a href="'+n+'" class="nav-link">'+a+"</a></li>")}),$(".nav-mobile-links").addClass("slide-in-150s"),setTimeout(function(){$(".nav-mobile-links").removeClass("slide-in-150s")},150))}function send_activation_email(e,t){$("#result-login").empty(),$(".spinner-activation-login").show();t={id:e,token:t,type:"login",sys_lang_id:mds_config.sys_lang_id};t[mds_config.csfr_token_name]=$.cookie(mds_config.csfr_cookie_name),$("#submit_review").prop("disabled",!0),$.ajax({type:"POST",url:mds_config.base_url+"auth_controller/send_activation_email_post",data:t,success:function(e){e=JSON.parse(e);1==e.result?($(".spinner-activation-login").hide(),document.getElementById("result-login").innerHTML=e.success_message):location.reload()}})}function send_activation_email_register(e,t){$("#result-register").empty(),$(".spinner-activation-register").show();t={id:e,token:t,type:"register",sys_lang_id:mds_config.sys_lang_id};t[mds_config.csfr_token_name]=$.cookie(mds_config.csfr_cookie_name),$("#submit_review").prop("disabled",!0),$.ajax({type:"POST",url:mds_config.base_url+"auth_controller/send_activation_email_post",data:t,success:function(e){e=JSON.parse(e);1==e.result?($(".spinner-activation-register").hide(),document.getElementById("result-register").innerHTML=e.success_message):location.reload()}})}function select_product_variation_option(t,n,a){var e={variation_id:t,selected_option_id:a,sys_lang_id:mds_config.sys_lang_id};e[mds_config.csfr_token_name]=$.cookie(mds_config.csfr_cookie_name),$.ajax({type:"POST",url:mds_config.base_url+"select-variation-option-post",data:e,success:function(e){e=JSON.parse(e);1==e.status&&(""!=e.html_content_price&&(document.getElementById("product_details_price_container").innerHTML=e.html_content_price),""!=e.html_content_stock&&(document.getElementById("text_product_stock_status").innerHTML=e.html_content_stock,0==e.stock_status?$(".btn-product-cart").attr("disabled",!0):$(".btn-product-cart").attr("disabled",!1)),""!=e.html_content_slider&&($("#product_slider").slick("unslick"),$("#product_thumbnails_slider").slick("unslick"),document.getElementById("product_slider_container").innerHTML=e.html_content_slider,$("#product_slider").slick({slidesToShow:1,slidesToScroll:1,speed:300,arrows:!0,fade:!0,infinite:!1,swipeToSlide:!0,cssEase:"linear",lazyLoad:"progressive",prevArrow:$("#product-slider-nav .prev"),nextArrow:$("#product-slider-nav .next"),asNavFor:"#product_thumbnails_slider"}),$("#product_thumbnails_slider").slick({slidesToShow:7,slidesToScroll:1,speed:300,focusOnSelect:!0,arrows:!0,infinite:!1,vertical:!0,centerMode:!1,cssEase:"linear",lazyLoad:"progressive",prevArrow:$("#product-thumbnails-slider-nav .prev"),nextArrow:$("#product-thumbnails-slider-nav .next"),asNavFor:"#product_slider"}))),"dropdown"==n&&get_sub_variation_options(t,a)}})}function get_sub_variation_options(e,t){e={variation_id:e,selected_option_id:t,sys_lang_id:mds_config.sys_lang_id};e[mds_config.csfr_token_name]=$.cookie(mds_config.csfr_cookie_name),$.ajax({url:mds_config.base_url+"get-sub-variation-options",type:"POST",data:e,success:function(e){e=JSON.parse(e);1==e.status&&(document.getElementById("variation_dropdown_"+e.subvariation_id).innerHTML=""==t?"":e.html_content)}})}function update_number_spinner(e){var t=(e=e).closest(".number-spinner").find("input").val().trim(),n=0,n="up"==e.attr("data-dir")?parseInt(t)+1:1<t?parseInt(t)-1:1;e.closest(".number-spinner").find("input").val(n)}function remove_cart_discount_coupon(){var e={sys_lang_id:mds_config.sys_lang_id};e[mds_config.csfr_token_name]=$.cookie(mds_config.csfr_cookie_name),$.ajax({url:mds_config.base_url+"ajax_controller/remove_cart_discount_coupon",type:"POST",data:e,success:function(e){location.reload()}})}function delete_review(t,n,a,e){swal({text:e,icon:"warning",buttons:[mds_config.sweetalert_cancel,mds_config.sweetalert_ok],dangerMode:!0}).then(function(e){e&&(e=parseInt($("#product_review_limit").val()),(e={id:t,product_id:n,user_id:a,limit:e,sys_lang_id:mds_config.sys_lang_id})[mds_config.csfr_token_name]=$.cookie(mds_config.csfr_cookie_name),$.ajax({method:"POST",url:mds_config.base_url+"home_controller/delete_review",data:e}).done(function(e){document.getElementById("review-result").innerHTML=e}))})}function load_more_comment(e){e={product_id:e,limit:parseInt($("#product_comment_limit").val()),sys_lang_id:mds_config.sys_lang_id};e[mds_config.csfr_token_name]=$.cookie(mds_config.csfr_cookie_name),$("#load_comment_spinner").show(),$.ajax({url:mds_config.base_url+"ajax_controller/load_more_comment",type:"POST",data:e,success:function(e){var t=JSON.parse(e);"comments"==t.type&&setTimeout(function(){$("#load_comment_spinner").hide(),$("#product_comment_limit").val(t.offset),document.getElementById("comment-result").innerHTML=t.html_content},500)}})}function is_email(e){return!!/^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(e)}function str_lenght(e){return""==e||null==e?0:(e=e.trim()).length}function delete_comment(t,n,e){swal({text:e,icon:"warning",buttons:[mds_config.sweetalert_cancel,mds_config.sweetalert_ok],dangerMode:!0}).then(function(e){e&&(e=parseInt($("#product_comment_limit").val()),(e={id:t,product_id:n,limit:e,sys_lang_id:mds_config.sys_lang_id})[mds_config.csfr_token_name]=$.cookie(mds_config.csfr_cookie_name),$.ajax({url:mds_config.base_url+"ajax_controller/delete_comment",type:"POST",data:e,success:function(e){e=JSON.parse(e);"comments"==e.type&&(document.getElementById("comment-result").innerHTML=e.html_content)}}))})}function show_comment_box(t){$(".visible-sub-comment").empty();var e=parseInt($("#product_comment_limit").val()),e={comment_id:t,limit:e,sys_lang_id:mds_config.sys_lang_id};e[mds_config.csfr_token_name]=$.cookie(mds_config.csfr_cookie_name),$.ajax({type:"POST",url:mds_config.base_url+"ajax_controller/load_subcomment_box",data:e,success:function(e){e=JSON.parse(e);"form"==e.type&&$("#sub_comment_form_"+t).append(e.html_content)}})}function load_more_blog_comment(e){e={post_id:e,limit:parseInt($("#blog_comment_limit").val()),sys_lang_id:mds_config.sys_lang_id};e[mds_config.csfr_token_name]=$.cookie(mds_config.csfr_cookie_name),$("#load_comment_spinner").show(),$.ajax({url:mds_config.base_url+"ajax_controller/load_more_blog_comments",type:"post",data:e,success:function(e){var t=JSON.parse(e);"comments"==t.type&&setTimeout(function(){$("#load_comment_spinner").hide(),document.getElementById("comment-result").innerHTML=t.html_content},500)}})}function delete_blog_comment(t,n,e){swal({text:e,icon:"warning",buttons:[mds_config.sweetalert_cancel,mds_config.sweetalert_ok],dangerMode:!0}).then(function(e){e&&(e=parseInt($("#blog_comment_limit").val()),(e={comment_id:t,post_id:n,limit:e,sys_lang_id:mds_config.sys_lang_id})[mds_config.csfr_token_name]=$.cookie(mds_config.csfr_cookie_name),$.ajax({url:mds_config.base_url+"ajax_controller/delete_blog_comment",type:"post",data:e,success:function(e){e=JSON.parse(e);"comments"==e.type&&(document.getElementById("comment-result").innerHTML=e.html_content)}}))})}function delete_conversation(t,e){swal({text:e,icon:"warning",buttons:[mds_config.sweetalert_cancel,mds_config.sweetalert_ok],dangerMode:!0}).then(function(e){e&&((e={conversation_id:t,sys_lang_id:mds_config.sys_lang_id})[mds_config.csfr_token_name]=$.cookie(mds_config.csfr_cookie_name),$.ajax({method:"POST",url:mds_config.base_url+"message_controller/delete_conversation",data:e}).done(function(e){location.reload()}))})}function remove_from_cart(e){e={cart_item_id:e,sys_lang_id:mds_config.sys_lang_id};e[mds_config.csfr_token_name]=$.cookie(mds_config.csfr_cookie_name),$.ajax({type:"POST",url:mds_config.base_url+"cart_controller/remove_from_cart",data:e,success:function(e){location.reload()}})}function approve_order_product(t,e){swal({text:e,icon:"warning",buttons:[mds_config.sweetalert_cancel,mds_config.sweetalert_ok],dangerMode:!0}).then(function(e){e&&((e={order_product_id:t,sys_lang_id:mds_config.sys_lang_id})[mds_config.csfr_token_name]=$.cookie(mds_config.csfr_cookie_name),$.ajax({type:"POST",url:mds_config.base_url+"order_controller/approve_order_product_post",data:e,success:function(e){location.reload()}}))})}function get_shipping_methods_by_location(e){$("#cart_shipping_methods_container").hide(),$(".cart-shipping-loader").show();e={state_id:e,sys_lang_id:mds_config.sys_lang_id};e[mds_config.csfr_token_name]=$.cookie(mds_config.csfr_cookie_name),$.ajax({type:"POST",url:mds_config.base_url+"cart_controller/get_shipping_methods_by_location",data:e,success:function(e){e=JSON.parse(e);1==e.result&&(document.getElementById("cart_shipping_methods_container").innerHTML=e.html_content,setTimeout(function(){$("#cart_shipping_methods_container").show(),$(".cart-shipping-loader").hide()},400))}})}function report_abuse(t,e){var n=$("#"+t).serializeArray();n.push({name:"item_type",value:e}),n.push({name:mds_config.csfr_token_name,value:$.cookie(mds_config.csfr_cookie_name)}),n.push({name:"sys_lang_id",value:mds_config.sys_lang_id}),$.ajax({url:mds_config.base_url+"ajax_controller/report_abuse_post",type:"post",data:n,success:function(e){e=JSON.parse(e);""!=e.message&&(document.getElementById("response_"+t).innerHTML=e.message,$("#"+t)[0].reset())}})}function set_site_language(e){e={lang_id:e,sys_lang_id:mds_config.sys_lang_id};e[mds_config.csfr_token_name]=$.cookie(mds_config.csfr_cookie_name),$.ajax({method:"POST",url:mds_config.base_url+"home_controller/set_site_language",data:e}).done(function(e){location.reload()})}function load_more_promoted_products(){$("#load_promoted_spinner").show();var e={offset:parseInt($("#promoted_products_offset").val()),sys_lang_id:mds_config.sys_lang_id};e[mds_config.csfr_token_name]=$.cookie(mds_config.csfr_cookie_name),$.ajax({type:"POST",url:mds_config.base_url+"home_controller/load_more_promoted_products",data:e,success:function(e){var t=JSON.parse(e);1==t.result?setTimeout(function(){$("#promoted_products_offset").val(t.offset),$("#row_promoted_products").append(t.html_content),$("#load_promoted_spinner").hide(),t.hide_button&&$(".promoted-load-more-container").hide()},300):setTimeout(function(){$("#load_promoted_spinner").hide(),t.hide_button&&$(".promoted-load-more-container").hide()},300)}})}function load_more_special_offers_products(){$("#load_special_spinner").show();var e={offset:parseInt($("#special_products_offset").val()),sys_lang_id:mds_config.sys_lang_id};e[mds_config.csfr_token_name]=$.cookie(mds_config.csfr_cookie_name),$.ajax({type:"POST",url:mds_config.base_url+"home_controller/load_more_special_offers_products",data:e,success:function(e){var t=JSON.parse(e);1==t.result?setTimeout(function(){$("#special_products_offset").val(t.offset),$("#row_special_offers_products").append(t.html_content),$("#load_special_spinner").hide(),t.hide_button&&$(".special-offer-load-more-container").hide()},300):setTimeout(function(){$("#load_special_spinner").hide(),t.hide_button&&$(".special-offer-load-more-container").hide()},300)}})}function send_message_as_email(e,t,n,a){a={email_type:"new_message",sender_id:e,receiver_id:t,message_subject:n,message_text:a,sys_lang_id:mds_config.sys_lang_id};a[mds_config.csfr_token_name]=$.cookie(mds_config.csfr_cookie_name),$.ajax({type:"POST",url:mds_config.base_url+"ajax_controller/send_email",data:a,success:function(e){}})}function get_states(e,t,n=""){""!=n&&(n="_"+n),$("#select_states"+n).children("option").remove(),$("#get_states_container"+n).hide(),$("#select_cities"+n).length&&($("#select_cities"+n).children("option").remove(),$("#get_cities_container"+n).hide());e={country_id:e,sys_lang_id:mds_config.sys_lang_id};e[mds_config.csfr_token_name]=$.cookie(mds_config.csfr_cookie_name),$.ajax({type:"POST",url:mds_config.base_url+"ajax_controller/get_states",data:e,success:function(e){e=JSON.parse(e);1==e.result?(document.getElementById("select_states"+n).innerHTML=e.content,$("#get_states_container"+n).show()):(document.getElementById("select_states"+n).innerHTML="",$("#get_states_container"+n).hide()),t&&update_product_map()}})}function get_cities(e,t){e={state_id:e,sys_lang_id:mds_config.sys_lang_id};e[mds_config.csfr_token_name]=$.cookie(mds_config.csfr_cookie_name),$.ajax({type:"POST",url:mds_config.base_url+"ajax_controller/get_cities",data:e,success:function(e){e=JSON.parse(e);1==e.result?(document.getElementById("select_cities").innerHTML=e.content,$("#get_cities_container").show()):(document.getElementById("select_cities").innerHTML="",$("#get_cities_container").hide()),t&&update_product_map()}})}function hide_cookies_warning(){$(".cookies-warning").hide();var e={sys_lang_id:mds_config.sys_lang_id};e[mds_config.csfr_token_name]=$.cookie(mds_config.csfr_cookie_name),$.ajax({type:"POST",url:mds_config.base_url+"home_controller/cookies_warning",data:e,success:function(e){}})}function delete_quote_request(t,e){swal({text:e,icon:"warning",buttons:[mds_config.sweetalert_cancel,mds_config.sweetalert_ok],dangerMode:!0}).then(function(e){e&&((e={id:t,sys_lang_id:mds_config.sys_lang_id})[mds_config.csfr_token_name]=$.cookie(mds_config.csfr_cookie_name),$.ajax({type:"POST",url:mds_config.base_url+"bidding_controller/delete_quote_request",data:e,success:function(e){location.reload()}}))})}function get_product_shipping_cost(e,t){$("#product_shipping_cost_container").empty(),$(".product-shipping-loader").show();t={state_id:e,product_id:t,sys_lang_id:mds_config.sys_lang_id};t[mds_config.csfr_token_name]=$.cookie(mds_config.csfr_cookie_name),$.ajax({type:"POST",url:mds_config.base_url+"ajax_controller/get_product_shipping_cost",data:t,success:function(e){var t=JSON.parse(e);1==t.result&&setTimeout(function(){document.getElementById("product_shipping_cost_container").innerHTML=t.response,$(".product-shipping-loader").hide()},300)}})}function delete_shipping_address(t,e){swal({text:e,icon:"warning",buttons:[mds_config.sweetalert_cancel,mds_config.sweetalert_ok],dangerMode:!0}).then(function(e){e&&((e={id:t,sys_lang_id:mds_config.sys_lang_id})[mds_config.csfr_token_name]=$.cookie(mds_config.csfr_cookie_name),$.ajax({type:"POST",url:mds_config.base_url+"profile_controller/delete_shipping_address_post",data:e,success:function(e){location.reload()}}))})}function load_product_shop_location_map(){var e=$("#span_shop_location_address").text();document.getElementById("iframe_shop_location_address").setAttribute("src","https://maps.google.com/maps?width=100%&height=600&hl=en&q="+e+"&ie=UTF8&t=&z=8&iwloc=B&output=embed&disableDefaultUI=true")}$(document).on("click","#navbar_mobile_categories li a",function(){obj_mobile_nav.id=$(this).attr("data-id"),obj_mobile_nav.name=""!=$(this).text()?$(this).text():"",obj_mobile_nav.parent_id=null!=$(this).attr("data-parent-id")?$(this).attr("data-parent-id"):0,obj_mobile_nav.back_button=1,mobile_menu()}),$(document).on("click","#navbar_mobile_back_button a",function(){obj_mobile_nav.id=$(this).attr("data-id"),obj_mobile_nav.name=null!=$(this).attr("data-category-name")?$(this).attr("data-category-name"):"",obj_mobile_nav.parent_id=null!=$(this).attr("data-parent-id")?$(this).attr("data-parent-id"):0,0==obj_mobile_nav.id&&(obj_mobile_nav.back_button=0),mobile_menu()}),$(document).on("click",".mobile-search .search-icon",function(){$(".mobile-search-form").hasClass("display-block")?($(".mobile-search-form").removeClass("display-block"),$(".mobile-search .search-icon i").removeClass("icon-close"),$(".mobile-search .search-icon i").addClass("icon-search")):($(".mobile-search-form").addClass("display-block"),$(".mobile-search .search-icon i").removeClass("icon-search"),$(".mobile-search .search-icon i").addClass("icon-close"))}),$(function(){$(".filter-custom-scrollbar").overlayScrollbars({}),$(".search-results-product").overlayScrollbars({}),$(".search-results-location").overlayScrollbars({}),$(".messages-sidebar").overlayScrollbars({}),0<$("#message-custom-scrollbar").length&&OverlayScrollbars(document.getElementById("message-custom-scrollbar"),{}).scroll({y:"100%"},0)}),$(".mega-menu .nav-item").hover(function(){var e=$(this).attr("data-category-id");$("#mega_menu_content_"+e).show(),$(".large-menu-item").removeClass("active"),$(".large-menu-item-first").addClass("active"),$(".large-menu-content-first").addClass("active")},function(){var e=$(this).attr("data-category-id");$("#mega_menu_content_"+e).hide()}),$(".mega-menu .dropdown-menu").hover(function(){$(this).show()},function(){}),$(".large-menu-item").hover(function(){var e=$(this).attr("data-subcategory-id");$(".large-menu-item").removeClass("active"),$(this).addClass("active"),$(".large-menu-content").removeClass("active"),$("#large_menu_content_"+e).addClass("active")},function(){}),$(window).scroll(function(){100<$(this).scrollTop()?$(".scrollup").fadeIn():$(".scrollup").fadeOut()}),$(".scrollup").click(function(){return $("html, body").animate({scrollTop:0},700),!1}),$(function(){$(".search-select a").click(function(){$(".search-select .btn").text($(this).text()),$(".search-select .btn").val($(this).text()),$(".search_type_input").val($(this).attr("data-value"))})}),$(document).on("click",".quantity-select-product .dropdown-menu .dropdown-item",function(){$(".quantity-select-product .btn span").text($(this).text()),$("input[name='product_quantity']").val($(this).text())}),$(document).on("click","#show_phone_number",function(){$(this).hide(),$("#phone_number").show()}),$(document).ready(function(){$(".select2").select2({placeholder:$(this).attr("data-placeholder"),height:42,dir:1==mds_config.rtl?"rtl":"ltr",language:{noResults:function(){return mds_config.txt_no_results_found}}})}),$(document).ready(function(){$("#form_login").submit(function(e){$('#LoginSubmit').attr("disabled", true);document.getElementById("LoginSubmit").innerHTML = spinnerjs + ' Giriş Yap';var t=$(this);!1===t[0].checkValidity()?(e.preventDefault(),e.stopPropagation()):(e.preventDefault(),t.find("input, select, button, textarea"),(e=t.serializeArray()).push({name:mds_config.csfr_token_name,value:$.cookie(mds_config.csfr_cookie_name)}),e.push({name:"sys_lang_id",value:mds_config.sys_lang_id}),$.ajax({url:mds_config.base_url+"auth_controller/login_post",type:"post",data:e,success:function(e){e=JSON.parse(e);1==e.result?location.reload():0==e.result&&(document.getElementById("result-login").innerHTML=e.error_message, $('#LoginSubmit').attr("disabled", false), document.getElementById("LoginSubmit").innerHTML = 'Giriş Yap')}})),t[0].classList.add("was-validated")})}),$(document).on("click",".product-add-to-cart-container .number-spinner button",function(){update_number_spinner($(this))}),$(document).on("input keyup paste change",".number-spinner input",function(){var e=$(this).val();e=(e=e.replace(",","")).replace(".",""),$.isNumeric(e)||(e=1),isNaN(e)&&(e=1),$(this).val(e)}),$(document).on("input paste change",".cart-item-quantity .number-spinner input",function(){var e={product_id:$(this).attr("data-product-id"),cart_item_id:$(this).attr("data-cart-item-id"),quantity:$(this).val(),sys_lang_id:mds_config.sys_lang_id};e[mds_config.csfr_token_name]=$.cookie(mds_config.csfr_cookie_name),$.ajax({type:"POST",url:mds_config.base_url+"update-cart-product-quantity",data:e,success:function(e){location.reload()}})}),$(document).on("click",".cart-item-quantity .btn-spinner-minus",function(){update_number_spinner($(this));var e=$(this).attr("data-cart-item-id");0!=$("#q-"+e).val()&&$("#q-"+e).change()}),$(document).on("click",".cart-item-quantity .btn-spinner-plus",function(){update_number_spinner($(this));var e=$(this).attr("data-cart-item-id");$("#q-"+e).change()}),$(document).on("click",".rate-product .rating-stars label",function(){$(".rate-product  .rating-stars label i").removeClass("icon-star"),$(".rate-product  .rating-stars label i").addClass("icon-star-o");var e=$(this).attr("data-star");$(".rate-product  .rating-stars label").each(function(){$(this).attr("data-star")<=e&&($(this).find("i").removeClass("icon-star-o"),$(this).find("i").addClass("icon-star"))})}),$(document).on("click",".rate-product .label-star-open-modal",function(){var e=$(this).attr("data-product-id"),f=$(this).attr("data-token-id"),t=$(this).attr("data-star");$("#rateProductModal #review_product_id").val(e),$("#rateProductModal #review_token_id").val(f),$("#rateProductModal #user_rating").val(t)}),$(document).on("click",".btn-add-review",function(){var e=$(this).attr("data-product-id"),f=$(this).attr("data-token-id");$("#rateProductModal #review_product_id").val(e),$("#rateProductModal #review_token_id").val(f)}),$(document).ready(function(){$("#form_add_comment").submit(function(e){e.preventDefault();var t=!0,n=!0,e=$("#form_add_comment").serializeArray();if(object_serialized={},$(e).each(function(e,t){object_serialized[t.name]=t.value,"g-recaptcha-response"==t.name&&(g_recaptcha=t.value)}),0<$("#form_add_comment").find("#comment_name").length&&(t=!1),0==t&&(str_lenght(object_serialized.name)<1?($("#comment_name").addClass("is-invalid"),n=!1):$("#comment_name").removeClass("is-invalid"),str_lenght(object_serialized.email)<1?($("#comment_email").addClass("is-invalid"),n=!1):$("#comment_email").removeClass("is-invalid"),1==mds_config.is_recaptcha_enabled&&0==t&&(""==g_recaptcha?($("#form_add_comment .g-recaptcha").addClass("is-recaptcha-invalid"),n=!1):$("#form_add_comment .g-recaptcha").removeClass("is-recaptcha-invalid"))),str_lenght(object_serialized.comment)<1?($("#comment_text").addClass("is-invalid"),n=!1):$("#comment_text").removeClass("is-invalid"),!n)return!1;e.push({name:mds_config.csfr_token_name,value:$.cookie(mds_config.csfr_cookie_name)}),e.push({name:"limit",value:parseInt($("#product_comment_limit").val())}),e.push({name:"sys_lang_id",value:mds_config.sys_lang_id}),$.ajax({url:mds_config.base_url+"ajax_controller/add_comment",type:"post",data:e,success:function(e){1==mds_config.is_recaptcha_enabled&&0==t&&grecaptcha.reset(),$("#form_add_comment")[0].reset();e=JSON.parse(e);"message"==e.type?document.getElementById("message-comment-result").innerHTML=e.html_content:document.getElementById("comment-result").innerHTML=e.html_content}})})}),$(document).on("click",".btn-submit-subcomment",function(){var o=$(this).attr("data-comment-id"),e={};e[mds_config.csfr_token_name]=$.cookie(mds_config.csfr_cookie_name),$("#form_add_subcomment_"+o).ajaxSubmit({beforeSubmit:function(){var e=!0,t=!0,n="";0<$("#form_add_subcomment_"+o).find(".form-comment-name").length&&(e=!1);var a=$("#form_add_subcomment_"+o).serializeArray();if(object_serialized={},$(a).each(function(e,t){object_serialized[t.name]=t.value,"g-recaptcha-response"==t.name&&(n=t.value)}),0==e&&(object_serialized.name.length<1?($(".form-comment-name").addClass("is-invalid"),t=!1):$(".form-comment-name").removeClass("is-invalid"),object_serialized.email.length<1||!is_email(object_serialized.email)?($(".form-comment-email").addClass("is-invalid"),t=!1):$(".form-comment-email").removeClass("is-invalid"),1==mds_config.is_recaptcha_enabled&&(""==n?($("#form_add_subcomment_"+o+" .g-recaptcha").addClass("is-recaptcha-invalid"),t=!1):$("#form_add_subcomment_"+o+" .g-recaptcha").removeClass("is-recaptcha-invalid"))),object_serialized.comment.length<1?($(".form-comment-text").addClass("is-invalid"),t=!1):$(".form-comment-text").removeClass("is-invalid"),0==t)return!1},type:"POST",url:mds_config.base_url+"ajax_controller/add_comment",data:e,success:function(e){e=JSON.parse(e);"message"==e.type?document.getElementById("sub_comment_form_"+o).innerHTML=e.html_content:document.getElementById("comment-result").innerHTML=e.html_content}})}),$(document).ready(function(){$("#form_add_blog_comment").submit(function(e){e.preventDefault();var t=!0,n=!0,e=$("#form_add_blog_comment").serializeArray();if(object_serialized={},$(e).each(function(e,t){object_serialized[t.name]=t.value,"g-recaptcha-response"==t.name&&(g_recaptcha=t.value)}),0<$("#form_add_blog_comment").find("#comment_name").length&&(t=!1),0==t&&(str_lenght(object_serialized.name)<1?($("#comment_name").addClass("is-invalid"),n=!1):$("#comment_name").removeClass("is-invalid"),str_lenght(object_serialized.email)<1?($("#comment_email").addClass("is-invalid"),n=!1):$("#comment_email").removeClass("is-invalid"),1==mds_config.is_recaptcha_enabled&&0==t&&(""==g_recaptcha?($("#form_add_blog_comment .g-recaptcha").addClass("is-recaptcha-invalid"),n=!1):$("#form_add_blog_comment .g-recaptcha").removeClass("is-recaptcha-invalid"))),str_lenght(object_serialized.comment)<1?($("#comment_text").addClass("is-invalid"),n=!1):$("#comment_text").removeClass("is-invalid"),!n)return!1;e.push({name:mds_config.csfr_token_name,value:$.cookie(mds_config.csfr_cookie_name)}),e.push({name:"limit",value:parseInt($("#blog_comment_limit").val())}),e.push({name:"sys_lang_id",value:mds_config.sys_lang_id}),$.ajax({url:mds_config.base_url+"ajax_controller/add_blog_comment",type:"post",data:e,success:function(e){1==mds_config.is_recaptcha_enabled&&0==t&&grecaptcha.reset(),$("#form_add_blog_comment")[0].reset();e=JSON.parse(e);"message"==e.type?document.getElementById("message-comment-result").innerHTML=e.html_content:document.getElementById("comment-result").innerHTML=e.html_content}})})}),$(document).on("click",".btn-cart-product-quantity-item",function(){var e=$(this).val(),e={product_id:$(this).attr("data-product-id"),quantity:e,sys_lang_id:mds_config.sys_lang_id};e[mds_config.csfr_token_name]=$.cookie(mds_config.csfr_cookie_name),$.ajax({type:"POST",url:mds_config.base_url+"cart_controller/update_cart_product_quantity",data:e,success:function(e){location.reload()}})}),$(document).ready(function(){$("#use_same_address_for_billing").change(function(){$(this).is(":checked")?($(".cart-form-billing-address").hide(),$(".cart-form-billing-address select").removeClass("select2-req")):($(".cart-form-billing-address").show(),$(".cart-form-billing-address select").addClass("select2-req"))})}),$(document).on("input paste click","#input_location",function(){var t=$(this).val();if(0<t.length?$(".btn-reset-location-input").show():($("#location_id_inputs input").val(""),$(".btn-reset-location-input").hide()),t.length<2)return $("#response_search_location").hide(),!1;var e={input_value:t,sys_lang_id:mds_config.sys_lang_id};e[mds_config.csfr_token_name]=$.cookie(mds_config.csfr_cookie_name),$.ajax({type:"POST",url:mds_config.base_url+"ajax_controller/search_location",data:e,success:function(e){e=JSON.parse(e);1==e.result&&(document.getElementById("response_search_location").innerHTML=e.response,$("#response_search_location").show()),$("#response_search_location ul li a").wrapInTag({words:[t]})}})}),$.fn.wrapInTag=function(t){var e=t.tag||"strong",n=t.words||[],a=RegExp(n.join("|"),"gi"),o="<"+e+">$&</"+e+">";$(this).contents().each(function(){var e;3===this.nodeType?$(this).replaceWith(((e=this).textContent||e.innerText).replace(a,o)):t.ignoreChildNodes||$(this).wrapInTag(t)})},$(document).on("click","#response_search_location ul li a",function(){$("#input_location").val($(this).text());var e=$(this).attr("data-country"),t=$(this).attr("data-state"),n=$(this).attr("data-city");$("#location_id_inputs").empty(),null!=e&&0!=e&&$("#location_id_inputs").append("<input type='hidden' value='"+e+"' name='country' class='input-location-filter'>"),null!=t&&0!=t&&$("#location_id_inputs").append("<input type='hidden' value='"+t+"' name='state' class='input-location-filter'>"),null!=n&&0!=n&&$("#location_id_inputs").append("<input type='hidden' value='"+n+"' name='city' class='input-location-filter'>")}),$(document).on("click","#btn_submit_location",function(){var e={country_id:$("#location_id_inputs input[name='country']").val(),state_id:$("#location_id_inputs input[name='state']").val(),city_id:$("#location_id_inputs input[name='city']").val(),sys_lang_id:mds_config.sys_lang_id};e[mds_config.csfr_token_name]=$.cookie(mds_config.csfr_cookie_name),$.ajax({type:"POST",url:mds_config.base_url+"set-default-location-post",data:e,success:function(e){location.reload()}})}),$(document).on("click",".btn-reset-location-input",function(){$("#input_location").val(""),$("#location_id_inputs input").val(""),$(this).hide()}),$(document).on("click",function(e){0===$(e.target).closest(".filter-location").length&&$("#response_search_location").hide()}),$("#form_report_product").submit(function(e){e.preventDefault(),report_abuse("form_report_product","product")}),$("#form_report_seller").submit(function(e){e.preventDefault(),report_abuse("form_report_seller","seller")}),$("#form_report_review").submit(function(e){e.preventDefault(),report_abuse("form_report_review","review")}),$("#form_report_comment").submit(function(e){e.preventDefault(),report_abuse("form_report_comment","comment")}),$(".profile-cover-image")[0]&&document.addEventListener("lazybeforeunveil",function(e){var t=e.target.getAttribute("data-bg-cover");t&&(e.target.style.backgroundImage="url("+t+")")}),$(document).on("input","#input_search",function(){var e=$(".search_type_input").val(),t=$(this).val();if(t.length<2)return $("#response_search_results").hide(),!1;e={search_type:e,input_value:t,lang_base_url:mds_config.lang_base_url,sys_lang_id:mds_config.sys_lang_id};e[mds_config.csfr_token_name]=$.cookie(mds_config.csfr_cookie_name),$.ajax({type:"POST",url:mds_config.base_url+"ajax_controller/ajax_search",data:e,success:function(e){e=JSON.parse(e);1==e.result&&(document.getElementById("response_search_results").innerHTML=e.response,$(".search-results-product").overlayScrollbars({}),$("#response_search_results").show()),$("#response_search_results ul li a").wrapInTag({words:[t]})}})}),$(document).on("input","#input_search_mobile",function(){var e=$("#search_type_input_mobile").val(),t=$(this).val();if(t.length<2)return $("#response_search_results_mobile").hide(),!1;e={search_type:e,input_value:t,lang_base_url:mds_config.lang_base_url,sys_lang_id:mds_config.sys_lang_id};e[mds_config.csfr_token_name]=$.cookie(mds_config.csfr_cookie_name),$.ajax({type:"POST",url:mds_config.base_url+"ajax_controller/ajax_search",data:e,success:function(e){e=JSON.parse(e);1==e.result&&(document.getElementById("response_search_results_mobile").innerHTML=e.response,$(".search-results-product").overlayScrollbars({}),$("#response_search_results_mobile").show()),$("#response_search_results_mobile ul li a").wrapInTag({words:[t]})}})}),$(document).on("click",function(e){0===$(e.target).closest(".top-search-bar").length&&$("#response_search_results").hide()}),$(document).on("change keyup paste",".filter-search-input",function(){var e=$(this).attr("data-filter-id"),n=$(this).val().toLowerCase();$("#"+e+" li").each(function(e,t){-1<$(this).find("label").text().toLowerCase().indexOf(n)?$(this).show():$(this).hide()})}),$(document).on("click","#btn_filter_price",function(){var e,t,n,a=$("#price_min").val(),o=$("#price_max").val(),i=$(this).attr("data-page");""==a&&""==o||(e=$(this).attr("data-query-string"),t=$(this).attr("data-current-url"),(n="")!=a?(n="p_min="+a,""!=o&&(n+="&p_max="+o)):""!=o&&(n="p_max="+o),e=""==e?"?"+n:e+"&"+n,"profile"==i&&(e+="#products"),window.location.replace(t+e))}),$(document).on("change","#select_sort_items",function(){var e=$(this).val(),t=$(this).attr("data-query-string"),n=$(this).attr("data-current-url");"most_recent"!=e&&"lowest_price"!=e&&"highest_price"!=e&&"most_sales"!=e&&"pre_sale"!=e||(e="sort="+e,t=""==t?"?"+e:t+"&"+e),"profile"==$(this).attr("data-page")&&(t+="#products"),window.location.replace(n+t)}),$(document).on("click","#btn_search_vendor",function(){var e,t,n=$("#input_search_vendor").val();""!=n&&(t=$(this).attr("data-query-string"),e=$(this).attr("data-current-url"),n="search="+n,t=""==t?"?"+n:t+"&"+n,window.location.replace(e+t+"#products"))}),$("#input_search_vendor").keyup(function(e){13===e.keyCode&&$("#btn_search_vendor").click()}),$("#form_send_message").submit(function(e){e.preventDefault();var t=$("#message_subject").val(),n=$("#message_text").val(),a=$("#message_receiver_id").val(),o=$("#message_send_em").val();if(t.length<1)return $("#message_subject").addClass("is-invalid"),!1;if($("#message_subject").removeClass("is-invalid"),n.length<1)return $("#message_text").addClass("is-invalid"),!1;$("#message_text").removeClass("is-invalid");var e=$(this),i=e.find("input, select, button, textarea"),e=e.serializeArray();e.push({name:mds_config.csfr_token_name,value:$.cookie(mds_config.csfr_cookie_name)}),e.push({name:"sys_lang_id",value:mds_config.sys_lang_id}),i.prop("disabled",!0),$.ajax({url:mds_config.base_url+"message_controller/add_conversation",type:"post",data:e,success:function(e){i.prop("disabled",!1);e=JSON.parse(e);1==e.result&&(document.getElementById("send-message-result").innerHTML=e.html_content,$("#form_send_message")[0].reset()),1==o&&send_message_as_email(e.sender_id,a,t,n)}})}),$(document).on("change","#address_input",function(){update_product_map()}),$(document).on("change","#zip_code_input",function(){update_product_map()}),$(document).on("click",".btn-add-remove-wishlist",function(){var e=$(this).attr("data-product-id"),t=$(this).attr("data-reload");"0"==t&&($(this).find("i").hasClass("icon-heart-o")?($(this).find("i").removeClass("icon-heart-o"),$(this).find("i").addClass("icon-heart")):($(this).find("i").removeClass("icon-heart"),$(this).find("i").addClass("icon-heart-o")));e={product_id:e,sys_lang_id:mds_config.sys_lang_id};e[mds_config.csfr_token_name]=$.cookie(mds_config.csfr_cookie_name),$.ajax({type:"POST",url:mds_config.base_url+"add-remove-wishlist-post",data:e,success:function(e){"1"==t&&location.reload()}})}),$(document).on("click",".btn-item-add-to-cart",function(){var e={product_id:$(this).attr("data-product-id"),is_ajax:!0,sys_lang_id:mds_config.sys_lang_id};e[mds_config.csfr_token_name]=$.cookie(mds_config.csfr_cookie_name),$.ajax({type:"POST",url:mds_config.base_url+"cart_controller/add_to_cart",data:e,success:function(e){setTimeout(function(){window.location.href=mds_config.lang_base_url+mds_config.cart_route},100)}})}),$("#form_validate").submit(function(){$(".custom-control-validate-input").removeClass("custom-control-validate-error"),setTimeout(function(){$(".custom-control-validate-input .error").each(function(){var e=$(this).attr("name");$(this).is(":visible")&&(e=e.replace("[]",""),$(".label_validate_"+e).addClass("custom-control-validate-error"))})},100)}),$(".custom-control-validate-input input").click(function(){var e=(e=$(this).attr("name")).replace("[]","");$(".label_validate_"+e).removeClass("custom-control-validate-error")}),$(document).ready(function(){0<$(".validate-form").length&&$(".validate-form").each(function(e,t){var n=$(this).attr("id");$("#"+n).validate()})}),$(".validate-form").submit(function(){$(".select2-req").each(function(e,t){var n=$(this).attr("id"),a=$(this).val();""==a||null==a||null==a?$('.select2-selection[aria-controls="select2-'+n+'-container"]').addClass("error"):$('.select2-selection[aria-controls="select2-'+n+'-container"]').removeClass("error")})}),$(document).on("change",".select2-req",function(){var e=$(this).attr("id");$('.select2-selection[aria-controls="select2-'+e+'-container"]').hasClass("error")&&$('.select2-selection[aria-controls="select2-'+e+'-container"]').removeClass("error")}),$("#form_validate").validate(),$("#form_validate_search").validate(),$("#form_validate_search_mobile").validate(),$("#form_validate_newsletter").validate(),$("#form_add_cart").validate(),$("#form_validate_checkout").validate(),$("#form_add_cart").submit(function(){$("#form_add_cart .custom-control-variation input").each(function(){var e;$(this).hasClass("error")?(e=$(this).attr("id"),$("#form_add_cart .custom-control-variation label").each(function(){$(this).attr("for")==e&&$(this).addClass("is-invalid")})):(e=$(this).attr("id"),$("#form_add_cart .custom-control-variation label").each(function(){$(this).attr("for")==e&&$(this).removeClass("is-invalid")}))})}),$(document).on("click",".custom-control-variation input",function(){var e=$(this).attr("name");$(".custom-control-variation label").each(function(){$(this).attr("data-input-name")==e&&$(this).removeClass("is-invalid")})}),$(document).ready(function(){$(".validate_terms").submit(function(e){$(".custom-control-validate-input p").remove(),$(".custom-control-validate-input input").is(":checked")?$(".custom-control-validate-input").removeClass("custom-control-validate-error"):(e.preventDefault(),$(".custom-control-validate-input").addClass("custom-control-validate-error"),$(".custom-control-validate-input").append("<p class='text-danger'>"+mds_config.msg_accept_terms+"</p>"))})}),$(document).on("input keyup paste change",".validate_price .price-input",function(){var e=(e=$(this).val()).replace(",",".");$.isNumeric(e)&&0!=e?$(this).removeClass("is-invalid"):$(this).addClass("is-invalid")}),$(document).ready(function(){$(".validate_price").submit(function(t){$(".validate_price .validate-price-input").each(function(){var e=$(this).val();""!=e&&(e=e.replace(",","."),$.isNumeric(e)&&0!=e?$(this).removeClass("is-invalid"):(t.preventDefault(),$(this).addClass("is-invalid"),$(this).focus()))})})}),$(document).on("input keyup paste change keypress",".price-input",function(){var e,t;void 0===mds_config.thousands_separator&&(mds_config.thousands_separator="."),"."==mds_config.thousands_separator?(e=$(this),46==event.which&&-1==e.val().indexOf(".")||!(event.which<48||57<event.which)||0==event.which||8==event.which||event.preventDefault(),-1!=(t=$(this).val()).indexOf(".")&&2<t.substring(t.indexOf(".")).length&&0!=event.which&&8!=event.which&&$(this)[0].selectionStart>=t.length-2&&event.preventDefault()):(e=$(this),44==event.which&&-1==e.val().indexOf(",")||!(event.which<48||57<event.which)||0==event.which||8==event.which||event.preventDefault(),-1!=(t=$(this).val()).indexOf(",")&&2<t.substring(t.indexOf(",")).length&&0!=event.which&&8!=event.which&&$(this)[0].selectionStart>=t.length-2&&event.preventDefault())}),$(document).ready(function(){$("iframe").attr("allowfullscreen","")}),$(document).on("change",".input-show-selected",function(){var e=$(this).attr("data-id"),t=$(this).val();$("#"+e).html(t.replace(/.*[\/\\]/,""))}),0<$(".fb-comments").length&&$(".fb-comments").attr("data-href",window.location.href),0<$(".post-text-responsive").length&&$(function(){$(".post-text-responsive iframe").wrap('<div class="embed-responsive embed-responsive-16by9"></div>'),$(".post-text-responsive iframe").addClass("embed-responsive-item")}),$("#productVideoModal").on("hidden.bs.modal",function(e){$(this).find("video")[0].pause()}),$("#productAudioModal").on("hidden.bs.modal",function(e){Amplitude.pause()}),$(document).ready(function(){$(".circle-loader").toggleClass("load-complete"),$(".checkmark").toggle()}),$(document).ready(function(){$('[data-toggle="tooltip"]').tooltip()});