$(function(){$('.mob-menu').click(function(){$('.main-menu').fadeToggle(300);$(this).toggleClass("active");$('.head-top').fadeToggle(300);});});$(function(){$('.ym-dropper').click(function(){$(this).next("ul").slideToggle(300);$(this).toggleClass("active");});});$(function(){$('.ai-dropper').click(function(){$(this).next(".ai-dropped").slideToggle(300);$(this).toggleClass("active");});});$(document).ready(function(){$('.tabs li').click(function(){var tab_id=$(this).attr('data-tab');$('.tabs li').removeClass('active');$('.tab-content').removeClass('active');$(this).addClass('active');$("#"+tab_id).addClass('active');})})
$(document).ready(function(){$('.tabs3 li').click(function(){var tab_id=$(this).attr('data-tab3');$('.tabs3 li').removeClass('active');$('.sekme-content').removeClass('active');$(this).addClass('active');$("#"+tab_id).addClass('active');})})
$(document).ready(function(){$('.tabs2 li').click(function(){var tab_id=$(this).attr('data-tab2');$('.tabs2 li').removeClass('active');$('.yenitab').removeClass('active');$(this).addClass('active');$("#"+tab_id).addClass('active');})})
$(document).ready(function(){$('.tabses li').click(function(){var tab_id=$(this).attr('data-id');$(this).closest(".tab-system").find(".tabses li").removeClass('active');$(this).closest('.tab-system').find(".tabs-content").removeClass('active');$(this).addClass('active');$(this).closest(".tab-system").find("#"+tab_id).addClass('active');})})
$(document).ready(function(){$('.tab-item').click(function(){var tab_id=$(this).attr('tab-id');$('.tab-item').removeClass('active');$('.tab-content').removeClass('active');$(this).addClass('active');$("#"+tab_id).addClass('active');})})
$(document).ready(function(){$('.tab-item').click(function(){var tab_id=$(this).attr('tab-id');$('.tab-item').removeClass('active');$('.red-content').removeClass('active');$(this).addClass('active');$("#"+tab_id).addClass('active');})})
$(document).ready(function(){$('.loader').show();});$("img.lazy").lazyload({effect:"fadeIn"});$(function(){$('.tabs li').click(function(){$('img.lazy').lazyload({bind:"event"});});});$(document).ready(function(){$('.dropper').click(function(e){e.preventDefault();$(this).next('.dropped').fadeToggle(200);});$(document).click(function(e){if($(e.target).closest('.dropped').length>0||$(e.target).closest('.dropper').length>0)return;$('.dropped').fadeOut(200);});});$(function(){$('[data-toggle="tooltip"]').tooltip()})
$(function(){$('.acc-question').click(function(){$(this).next(".acc-answer").slideToggle(300);$(this).toggleClass("active");});});$(function(){$('.card-number-input').keyup(function(){$('.card-number-value').text($(this).val());});$('.card-name-input').keyup(function(){$('.card-name-value').text($(this).val());});$('.card-ay-select').change(function(){$('.card-ay-value').text($(this).val());});$('.card-yil-select').change(function(){$('.card-yil-value').text($(this).val());});});$(function(){$('.fixed-messages .messages .item').click(function(){$(".fixed-message-close").fadeIn().css("display","block");$(".fixed-messages").removeClass("active");$(".message-opened").removeClass("active");$(".message-opened").toggleClass("active");$(this).closest(".fixed-messages").toggleClass("active");});$('.fixed-message-close').click(function(){$(".fixed-messages").toggleClass("active");$(".message-opened").toggleClass("active");$(this).fadeToggle(300);});});var ele='body';$(document).ready(function(){if(localStorage.getItem('theme')=="darkmode"){$('#mode').prop('checked',true)}});$('#mode').on('click',function(){if($('#mode').prop('checked')){document.body.className="darkmode";localStorage.setItem('theme',"darkmode");}else{$(ele).removeClass('darkmode');localStorage.setItem('theme',"light");}});