function ininal() {
    $('#banka_secim_select').val("İninal").change();
    $('#banka_secim').hide();
    $('#banka_iban').attr("placeholder", "İninal Barkod Numaranızı Yazınız.");

}

function papara() {
    $('#banka_secim_select').val("Papara").change();
    $('#banka_secim').hide();
    $('#banka_iban').attr("placeholder", "Papara Numaranızı Yazınız.");
}

function bank() {
    $('#banka_secim').show();
    $('#banka_iban').attr("placeholder", "Iban Bilgilerinizi Yazınız.");
}

function create_magaza_keyup() {
    str = $("#magaza_nick").val();
    str = replaceSpecialChars(str);
    str = str.toLowerCase();
    str = str.replace(/\s\s+/g, ' ').replace(/[^a-z0-9\s]/gi, '').replace(/[^\w]/ig, "-");

    function replaceSpecialChars(str) {
        var specialChars = [["ş", "s"], ["ğ", "g"], ["ü", "u"], ["ı", "i"], ["_", "-"],
            ["ö", "o"], ["Ş", "S"], ["Ğ", "G"], ["Ç", "C"], ["ç", "c"],
            ["Ü", "U"], ["İ", "I"], ["Ö", "O"], ["ş", "s"]];
        for (var i = 0; i < specialChars.length; i++) {
            str = str.replace(eval("/" + specialChars[i][0] + "/ig"), specialChars[i][1]);
        }
        return str;
    }

    $("#magaza_nick").val(str);
    if (document.getElementById("magaza_nick").value !== "") {
        document.getElementById("magaza_url").value = url + "/s/" + str;
    }
}

function create_magaza(csrf) {
    if ($("#magaza_nick").val() !== "") {
        $.post(url + "/magaza/create", {_token: csrf, magaza_nick: $('#magaza_nick').val()}, function (result) {
            if (result == "1") {
                Swal.fire({
                    icon: 'success',
                    title: 'Başarılı',
                    text: 'Mağazanız başarıyla oluşturuldu!'
                }).then(function () {
                    location.reload();
                })
            } else if (result == "2") {
                Swal.fire({
                    icon: 'error',
                    title: 'Başarısız',
                    text: 'Bir sorun oluştu!'
                }).then(function () {
                    location.reload();
                })
            } else if (result == "3") {
                Swal.fire({
                    icon: 'error',
                    title: 'Başarısız',
                    text: 'Sistemsel bir sorun oluştu!'
                }).then(function () {
                    location.reload();
                })
            } else if (result == "4") {
                Swal.fire({
                    icon: 'error',
                    title: 'Başarısız',
                    text: 'Mail onayı yapmadan mağaza olamazsınız!'
                })
            } else if (result == "5") {
                Swal.fire({
                    icon: 'error',
                    title: 'Başarısız',
                    text: 'Telefon onayı yapmadan mağaza olamazsınız!'
                })
            } else if (result == "6") {
                Swal.fire({
                    icon: 'error',
                    title: 'Başarısız',
                    text: 'Kimlik onayı yapmadan mağaza olamazsınız!'
                })
            } else if (result == "7") {
                Swal.fire({
                    icon: 'error',
                    title: 'Başarısız',
                    text: '30 günlük üye olmadan mağaza olamazsınız!'
                })
            } else if (result == "8") {
                Swal.fire({
                    icon: 'error',
                    title: 'Başarısız',
                    text: 'Mağaza olmak için en az 30 başarılı satışa ihtiyacınız var!'
                })
            } else if (result == "9") {
                Swal.fire({
                    icon: 'error',
                    title: 'Başarısız',
                    text: 'Zaten mağazasınız!'
                }).then(function () {
                    location.reload();
                })
            } else if (result == "10") {
                Swal.fire({
                    icon: 'error',
                    title: 'Başarısız',
                    text: 'Bu mağaza ismi başka bir mağaza tarafından kullanılıyor!'
                }).then(function () {
                    location.reload();
                })
            } else if (result == "11") {
                Swal.fire({
                    icon: 'error',
                    title: 'Başarısız',
                    text: 'Mağaza ismi boş bırakılamaz!'
                }).then(function () {
                    location.reload();
                })
            }
        })
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Mağaza ismi boş bırakılamaz.'
        })
    }
}

function buy_product(csrf, id, amount = 1) {
    Swal.fire({
        title: 'Satın almak istediğinizden emin misiniz?',
        html: '<b></b> saniye içerisinde onay vermezseniz işlem iptal edilecek...',
        showDenyButton: true,
        confirmButtonText: 'Evet',
        denyButtonText: `Hayır`,
        focusConfirm: true,
        timer: 15000,
        timerProgressBar: true,
        allowOutsideClick: false,
        didOpen: () => {
            const b = Swal.getHtmlContainer().querySelector('b')
            timerInterval = setInterval(() => {
                b.textContent = (Swal.getTimerLeft() / 1000).toFixed()
            }, 100)
        },
        willClose: () => {
            clearInterval(timerInterval)
        }
    }).then((result) => {

        if (result.isConfirmed) {
            Swal.fire({
                title: 'Satın alma işlemi',
                icon: 'info',
                html: '<b></b> işleminiz gerçekleştiriliyor...',
                allowOutsideClick: false

            })
            $.post(url + "/product/buy/" + id + "/" + amount, {_token: csrf, id: id}, function (result) {
                if (result == "1") {
                    Swal.fire({
                        icon: 'error',
                        title: 'Başarısız',
                        text: 'Çerez hatası oluştu!'
                    }).then(function () {
                        window.location = url + '/dash/siparislerim/alinan_urunler/1';
                    })
                } else if (result == "2") {
                    Swal.fire({
                        icon: 'error',
                        title: 'Başarısız',
                        text: 'Ürün bulunamadı!'
                    }).then(function () {
                        window.location = url + '/dash/siparislerim/alinan_urunler/1';
                    })
                } else if (result == "3") {
                    Swal.fire({
                        icon: 'error',
                        title: 'Başarısız',
                        text: 'Bakiyeniz yetersiz!'
                    })

                } else if (result == "4") {
                    Swal.fire({
                        icon: 'error',
                        title: 'Başarısız',
                        text: 'Sistemsel hata oluştu!'
                    }).then(function () {
                        window.location = url + '/dash/siparislerim/alinan_urunler/1';
                    })
                } else if (result == "5") {
                    Swal.fire({
                        icon: 'success',
                        title: 'Başarılı',
                        text: 'Siparişinizi aldık! Stok bekleniyor.'
                    }).then(function () {
                        window.location = url + '/dash/siparislerim/alinan_urunler/1';
                    })
                } else if (result == "6") {
                    Swal.fire({
                        icon: 'success',
                        title: 'Başarılı',
                        text: 'Siparişinizi stoklardan teslim ettik.'
                    }).then(function () {
                        window.location = url + '/dash/siparislerim/alinan_urunler/1';
                    })
                } else if (result == "7") {
                    Swal.fire({
                        icon: 'success',
                        title: 'Başarılı',
                        text: 'Siparişinizi aldık! Stok bekleniyor.'
                    }).then(function () {
                        window.location = url + '/dash/siparislerim/alinan_urunler/1';
                    })
                } else if (result == "8") {
                    Swal.fire({
                        icon: 'success',
                        title: 'Başarılı',
                        text: 'Siparişinizi aldık! Stok bekleniyor.'
                    }).then(function () {
                        window.location = url + '/dash/siparislerim/alinan_urunler/1';
                    })
                } else if (result == "9") {
                    Swal.fire({
                        icon: 'success',
                        title: 'Başarılı',
                        text: 'Siparişinizi stoklardan teslim ettik.'
                    }).then(function () {
                        window.location = url + '/dash/siparislerim/alinan_urunler/1';
                    })
                } else if (result == "10") {
                    Swal.fire({
                        html:
                            '<br><img src="' + url + '/images/immigration.png" height="120px"><br>' +
                            '<br><font size="3" color="gray">TC KİMLİK NUMARANIZI ONAYLAYIN</font>' +
                            '<br><input type="" style="height:45px" id="first_name" class="swal2-input" placeholder="İsim">' +
                            '<br><input type="" style="height:45px" id="last_name" class="swal2-input" placeholder="Soyisim">' +
                            '<br><input type="number" style="height:45px" id="tc_number" class="swal2-input" placeholder="Tc kimlik no">' +
                            '<br><input type="number" style="height:45px" id="year" class="swal2-input" placeholder="Doğum Yılınız Ex. 1982">'
                        ,
                        inputAttributes: {
                            autocapitalize: 'off'
                        },
                        showCancelButton: true,
                        showCloseButton: true,
                        confirmButtonText: 'Onayla',
                        showLoaderOnConfirm: true,
                        preConfirm: (login) => {
                            return $.post("/dash/onay/tc_verification", {
                                _token: csrf,
                                first_name: $('#first_name').val(),
                                last_name: $('#last_name').val(),
                                tc_number: $('#tc_number').val(),
                                year: $('#year').val(),
                            }, function (result) {
                                return result.value;
                            })
                        },
                        allowOutsideClick: () => !Swal.isLoading()
                    }).then((result) => {
                        if (result.value == "1") {
                            Swal.fire({
                                icon: 'error',
                                title: 'Başarısız',
                                text: 'Sistemsel bir hata oluştu!'
                            }).then(function () {
                                location.reload();
                            })
                        } else if (result.value == "2") {
                            Swal.fire({
                                icon: 'error',
                                title: 'Başarısız',
                                text: 'Girdiğiniz bilgiler geçersiz!'
                            }).then(function () {
                                location.reload();
                            })
                        } else if (result.value == "3") {
                            Swal.fire({
                                icon: 'error',
                                title: 'Başarısız',
                                text: 'Onay işlemini zaten gerçekleştirmişsiniz!'
                            }).then(function () {
                                location.reload();
                            })
                        } else if (result.value == "4") {
                            Swal.fire({
                                icon: 'success',
                                title: 'Başarılı',
                                text: 'TC kimlik onayınız başarı ile gerçekleşti!'
                            }).then(function () {
                                location.reload();
                            })
                        }
                    })
                } else if (result == "11") {
                    Swal.fire({
                        html:
                            '<br><img src="' + url + '/images/smartphone.png" height="120px"><br>' +
                            '<br><font size="3" color="gray">TELEFON NUMARANIZI YAZIN</font>' +
                            '<br><input type="text" style="height:45px" id="phone_number" class="swal2-input" placeholder="Tel No">',
                        inputAttributes: {
                            autocapitalize: 'off'
                        },
                        showCancelButton: true,
                        showCloseButton: true,
                        confirmButtonText: 'Onayla',
                        cancelButtonText: 'Kapat',
                        showLoaderOnConfirm: true,
                        preConfirm: (login) => {
                            return $.post(url + "/dash/onay/phone_verification", {
                                _token: csrf,
                                phone_number: $('#phone_number').val(),
                            }, function (result) {
                                return result.value;
                            })
                        },
                        allowOutsideClick: () => !Swal.isLoading()
                    }).then((result) => {
                        if (result.value == "1") {
                            Swal.fire({
                                html:
                                    '<br><img src="' + url + '/images/verification.png" height="120px"><br>' +
                                    '<br><font size="3" color="gray">TELEFONUNUZA GELEN KODU GİRİNİZ</font><br><strong></strong> saniye kaldı' +
                                    '<br><input type="number" style="height:45px; width:190px;" id="phone_number_password" class="swal2-input" placeholder="KODU YAZINIZ">',
                                inputAttributes: {
                                    autocapitalize: 'off'
                                },
                                timer: 300000,
                                didOpen: () => {
                                    timerInterval = setInterval(() => {
                                        Swal.getHtmlContainer().querySelector('strong')
                                            .textContent = (Swal.getTimerLeft() / 1000)
                                            .toFixed(0)
                                    }, 100)
                                },
                                willClose: () => {
                                    clearInterval(timerInterval)
                                },
                                showCancelButton: true,
                                showCloseButton: false,
                                confirmButtonText: 'Numaranı Doğrula',
                                cancelButtonText: 'İptal',
                                showLoaderOnConfirm: true,
                                preConfirm: (login) => {
                                    return $.post(url + "/dash/onay/phone_verification", {
                                            _token: csrf,
                                            phone_number_password: $('#phone_number_password').val(),
                                        }, function (result) {
                                            return result.value;
                                        }
                                    )
                                },
                                allowOutsideClick: false
                            }).then((result) => {
                                if (result.value == "2") {
                                    Swal.fire({
                                        icon: 'error',
                                        title: 'Başarısız',
                                        text: 'Sistemsel bir hata oluştu!'
                                    }).then(function () {
                                        location.reload();
                                    })
                                } else if (result.value == "1") {
                                    Swal.fire({
                                        icon: 'success',
                                        title: 'Başarılı',
                                        text: 'Onay işleminiz başarı ile tamamlandı!'
                                    }).then(function () {
                                        location.reload();
                                    })
                                } else if (result.value == "3") {
                                    Swal.fire({
                                        icon: 'error',
                                        title: 'Başarısız',
                                        text: 'Girilen kod geçersiz!'
                                    })
                                } else {
                                    if (result.value == "0") {
                                        Swal.fire({
                                            icon: 'error',
                                            title: 'Başarısız',
                                            text: 'Sistemsel bir hata oluştu!'
                                        }).then(function () {
                                            location.reload();
                                        })
                                    }
                                }
                            })
                        } else if (result.value == "0") {
                            Swal.fire({
                                icon: 'error',
                                title: 'Başarısız',
                                text: 'Sistemsel bir hata oluştu!'
                            }).then(function () {
                                location.reload();
                            })
                        } else if (result.value == "2") {
                            Swal.fire({
                                icon: 'error',
                                title: 'Başarısız',
                                text: 'Sms gönderimi sırasında bir hata oluştu!'
                            }).then(function () {
                                location.reload();
                            })
                        }
                    })
                } else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Başarısız',
                        text: 'Bi sorun oluştu!'
                    }).then(function () {
                        alert(result);
                    })
                }
            })
        } else if (result.isDenied) {
            Swal.fire('İşlemi iptal ettiniz.', '', 'info')
        }
    })

}

function epinkasa_create(csrf) {
    var amount = $("#ekasa_olustur_miktar").val();
    if ($("#ekasa_olustur_miktar").val() == '') {
        Swal.fire({
            icon: 'error',
            title: 'Başarısız',
            text: 'Kod miktarı boş bırakılamaz!'
        })
    } else {
        Swal.fire({
            title: 'Kodu oluşturmak istediğinizden emin misiniz?',
            html: '<b></b> saniye içerisinde onay vermezseniz işlem iptal edilecek...',
            showDenyButton: true,
            confirmButtonText: 'Evet',
            denyButtonText: `Hayır`,
            focusConfirm: true,
            timer: 15000,
            timerProgressBar: true,
            didOpen: () => {
                const b = Swal.getHtmlContainer().querySelector('b')
                timerInterval = setInterval(() => {
                    b.textContent = (Swal.getTimerLeft() / 1000).toFixed()
                }, 100)
            },
            willClose: () => {
                clearInterval(timerInterval)
            }
        }).then((result) => {
            if (result.isConfirmed) {
                $.post(url + "/dash/deposit/ekasa/create", {_token: csrf, amount: amount}, function (result) {
                    if (result == "1") {
                        Swal.fire({
                            icon: 'error',
                            title: 'Başarısız',
                            text: 'Çerez hatası oluştu!'
                        }).then(function () {
                            location.reload();
                        })
                    } else if (result == "2") {
                        Swal.fire({
                            icon: 'error',
                            title: 'Başarısız',
                            text: 'Sistemsel bir hata oluştu. Daha sonra tekrar deneyiniz.'
                        }).then(function () {
                            location.reload();
                        })
                    } else if (result == "3") {
                        Swal.fire({
                            icon: 'error',
                            title: 'Başarısız',
                            text: 'Bakiye yetersiz.'
                        })

                    } else if (result == "4") {
                        Swal.fire({
                            icon: 'error',
                            title: 'Başarısız',
                            text: 'Sistemsel bir hata oluştu. Daha sonra tekrar deneyiniz.'
                        })
                    } else if (result == "5") {
                        Swal.fire({
                            icon: 'error',
                            title: 'Başarısız',
                            text: 'Sistemsel bir hata oluştu. Daha sonra tekrar deneyiniz.'
                        })
                    } else if (result == "6") {
                        Swal.fire({
                            icon: 'success',
                            title: 'Başarılı',
                            text: 'Kod başarıyla oluşturuldu.'
                        }).then(function () {
                            Swal.fire({
                                icon: 'info',
                                title: 'Bilgilendirme',
                                text: 'Oluşturulan kod 48 saat içerisinde kullanılmaz ise kod iptal edilir.'
                            }).then(function () {
                                location.reload();
                            })
                        })
                    }
                })
            } else if (result.isDenied) {
                Swal.fire('İşlemi iptal ettiniz.', '', 'info')
            }
        })
    }
}

function epinkasa_bozdur(csrf) {
    var code = $("#epinkasa_bozdur_code").val();
    if ($("#epinkasa_bozdur_code").val() == '') {
        Swal.fire({
            icon: 'error',
            title: 'Başarısız',
            text: 'Bozdurulacak kod alanı boş bırakılamaz!'
        })
    } else {
        Swal.fire({
            title: 'Kodu bozdurmak istediğinizden emin misiniz?',
            html: '<b></b> saniye içerisinde onay vermezseniz işlem iptal edilecek...',
            showDenyButton: true,
            confirmButtonText: 'Evet',
            denyButtonText: `Hayır`,
            focusConfirm: true,
            timer: 15000,
            timerProgressBar: true,
            didOpen: () => {
                const b = Swal.getHtmlContainer().querySelector('b')
                timerInterval = setInterval(() => {
                    b.textContent = (Swal.getTimerLeft() / 1000).toFixed()
                }, 100)
            },
            willClose: () => {
                clearInterval(timerInterval)
            }
        }).then((result) => {
            if (result.isConfirmed) {
                $.post(url + "/dash/deposit/ekasa/bozdur", {_token: csrf, code: code}, function (result) {
                    if (result == "1") {
                        Swal.fire({
                            icon: 'error',
                            title: 'Başarısız',
                            text: 'Çerez hatası oluştu!'
                        }).then(function () {
                            location.reload();
                        })
                    } else if (result == "2") {
                        Swal.fire({
                            icon: 'error',
                            title: 'Başarısız',
                            text: 'Sistemsel bir hata oluştu. Daha sonra tekrar deneyiniz.'
                        }).then(function () {
                            location.reload();
                        })
                    } else if (result == "3") {
                        Swal.fire({
                            icon: 'error',
                            title: 'Başarısız',
                            text: 'Kod bulunamadı.'
                        })

                    } else if (result == "4") {
                        Swal.fire({
                            icon: 'error',
                            title: 'Başarısız',
                            text: 'Bu kod daha önce kullanılmış.'
                        })
                    } else if (result == "5") {
                        Swal.fire({
                            icon: 'error',
                            title: 'Başarısız',
                            text: 'Sistemsel bir hata oluştu. Daha sonra tekrar deneyiniz.'
                        })
                    } else if (result == "6") {
                        Swal.fire({
                            icon: 'success',
                            title: 'Başarılı',
                            text: 'Kod bakiyenize başarılı bir şekilde yansıtıldı.'
                        }).then(function () {
                            location.reload();
                        })
                    }
                })
            } else if (result.isDenied) {
                Swal.fire('İşlemi iptal ettiniz.', '', 'info')
            }
        })
    }
}

function support_mesaj_gonder(csrf, support_id) {
    let text = $("#support_mesaj").val();
    if (text == "") {
        Swal.fire({
            icon: 'error',
            title: 'Başarısız',
            text: 'Mesaj alanı boş bırakılamaz!'
        })
    } else {
        Swal.fire({
            title: 'Bu mesajı göndermek istediğinizden emin misiniz?',
            html: '<b></b> saniye içerisinde onay vermezseniz işlem iptal edilecek...',
            showDenyButton: true,
            confirmButtonText: 'Evet',
            denyButtonText: `Hayır`,
            focusConfirm: true,
            timer: 15000,
            timerProgressBar: true,
            didOpen: () => {
                const b = Swal.getHtmlContainer().querySelector('b')
                timerInterval = setInterval(() => {
                    b.textContent = (Swal.getTimerLeft() / 1000).toFixed()
                }, 100)
            },
            willClose: () => {
                clearInterval(timerInterval)
            }
        }).then((result) => {
            if (result.isConfirmed) {
                $.post(url + "/support/" + support_id + "/send", {_token: csrf, text: text}, function (result) {
                    if (result == "1") {
                        Swal.fire({
                            icon: 'error',
                            title: 'Başarısız',
                            text: 'Çerez hatası oluştu!'
                        }).then(function () {
                            location.reload();
                        })
                    } else if (result == "2") {
                        Swal.fire({
                            icon: 'error',
                            title: 'Başarısız',
                            text: 'Sistemsel bir hata oluştu. Daha sonra tekrar deneyiniz.'
                        }).then(function () {
                            location.reload();
                        })
                    } else if (result == "3") {
                        Swal.fire({
                            icon: 'error',
                            title: 'Başarısız',
                            text: 'Sistemsel bir hata oluştu. Daha sonra tekrar deneyiniz.'
                        })
                    } else if (result == "4") {
                        Swal.fire({
                            icon: 'success',
                            title: 'Başarılı',
                            text: 'Mesajınız başarıyla gönderdiniz.'
                        }).then(function () {
                            location.reload();
                        })
                    }
                })
            } else if (result.isDenied) {
                Swal.fire('İşlemi iptal ettiniz.', '', 'info')
            }
        })
    }

}

function support_cozuldu_olarak_isaretle(csrf, support_id) {

    Swal.fire({
        title: 'Bu mesajı çözüldü olarak işaretlemek istediğinizden emin misiniz?',
        text: 'Mesaj çözüldü olarak işaretlendikten sonra mesaj gönderimine kapanacaktır.',
        html: 'Mesaj çözüldü olarak işaretlendikten sonra mesaj gönderimine kapanacaktır.<br></bt> <b></b> saniye içerisinde onay vermezseniz işlem iptal edilecek...',
        showDenyButton: true,
        confirmButtonText: 'Evet',
        denyButtonText: `Hayır`,
        focusConfirm: true,
        timer: 15000,
        timerProgressBar: true,
        didOpen: () => {
            const b = Swal.getHtmlContainer().querySelector('b')
            timerInterval = setInterval(() => {
                b.textContent = (Swal.getTimerLeft() / 1000).toFixed()
            }, 100)
        },
        willClose: () => {
            clearInterval(timerInterval)
        }
    }).then((result) => {
        if (result.isConfirmed) {
            $.post(url + "/support/" + support_id + "/isaretle", {_token: csrf}, function (result) {
                if (result == "1") {
                    Swal.fire({
                        icon: 'error',
                        title: 'Başarısız',
                        text: 'Çerez hatası oluştu!'
                    }).then(function () {
                        location.reload();
                    })
                } else if (result == "2") {
                    Swal.fire({
                        icon: 'error',
                        title: 'Başarısız',
                        text: 'Sistemsel bir hata oluştu. Daha sonra tekrar deneyiniz.'
                    }).then(function () {
                        location.reload();
                    })
                } else if (result == "3") {
                    Swal.fire({
                        icon: 'error',
                        title: 'Başarısız',
                        text: 'Sistemsel bir hata oluştu. Daha sonra tekrar deneyiniz.'
                    })
                } else if (result == "4") {
                    Swal.fire({
                        icon: 'success',
                        title: 'Başarılı',
                        text: 'Destek talebi başarıyla çözüldü olarak işaretlendi.'
                    }).then(function () {
                        location.reload();
                    })
                }
            })
        } else if (result.isDenied) {
            Swal.fire('İşlemi iptal ettiniz.', '', 'info')
        }
    })
}

function support_create(csrf) {
    let konu = $("#konu").val();
    let text = $("#text").val();
    let yukumluluk = document.getElementById('yukumluluk');
    if (konu == "") {
        Swal.fire({
            icon: 'error',
            title: 'Başarısız',
            text: 'Talep başlığı boş bırakılamaz!'
        })
    } else if (text == "") {
        Swal.fire({
            icon: 'error',
            title: 'Başarısız',
            text: 'Talep alanı boş bırakılamaz!'
        })
    } else if (!yukumluluk.checked) {
        Swal.fire({
            icon: 'error',
            title: 'Başarısız',
            text: 'Yükümlülüklerinizi kabul etmeniz gerekmektedir!'
        })
    } else {
        Swal.fire({
            title: 'Bu talebi göndermek istediğinizden emin misiniz?',
            html: '<b></b> saniye içerisinde onay vermezseniz işlem iptal edilecek...',
            showDenyButton: true,
            confirmButtonText: 'Evet',
            denyButtonText: `Hayır`,
            focusConfirm: true,
            timer: 15000,
            timerProgressBar: true,
            didOpen: () => {
                const b = Swal.getHtmlContainer().querySelector('b')
                timerInterval = setInterval(() => {
                    b.textContent = (Swal.getTimerLeft() / 1000).toFixed()
                }, 100)
            },
            willClose: () => {
                clearInterval(timerInterval)
            }
        }).then((result) => {
            if (result.isConfirmed) {
                $.post(url + "/support/create", {_token: csrf, konu: konu, text: text}, function (result) {
                    if (result == "1") {
                        Swal.fire({
                            icon: 'error',
                            title: 'Başarısız',
                            text: 'Çerez hatası oluştu!'
                        }).then(function () {
                            location.reload();
                        })
                    } else if (result == "2") {
                        Swal.fire({
                            icon: 'error',
                            title: 'Başarısız',
                            text: 'Sistemsel bir hata oluştu. Daha sonra tekrar deneyiniz.'
                        }).then(function () {
                            location.reload();
                        })
                    } else if (result == "3") {
                        Swal.fire({
                            icon: 'error',
                            title: 'Başarısız',
                            text: 'Kapanmamış destek talebini var iken yeni bir destek talebi oluşturamazsınız.'
                        })
                    } else if (result == "4") {
                        Swal.fire({
                            icon: 'error',
                            title: 'Başarısız',
                            text: 'Sistemsel bir hata oluştu. Daha sonra tekrar deneyiniz.'
                        })
                    } else if (result == "5") {
                        Swal.fire({
                            icon: 'success',
                            title: 'Başarılı',
                            text: 'Talep başarıyla oluşturuldu.'
                        }).then(function () {
                            window.location = url + "/support/";
                        })
                    }
                })
            } else if (result.isDenied) {
                Swal.fire('İşlemi iptal ettiniz.', '', 'info')
            }
        })
    }
}

function bank_id(id) {
    $("#bank_id").val(id);
}

function withdraw_calculate() {
    if ($("#withdraw_amount").val() > 4) {
        let withdrawable_balance_with_comission = $("#withdraw_amount").val();
        $("#withdrawable_balance_with_comission").val((withdrawable_balance_with_comission - 4).toFixed(2));

    }

}

function withdraw(csrf) {
    if ($("#withdraw_amount").val() < 4) {
        $("#withdraw_amount").val("4.00");
    }
    let withdraw_amount = $("#withdraw_amount").val();
    let bank_id = $("#bank_id").val();
    if (withdraw_amount == "") {
        Swal.fire({
            icon: 'error',
            title: 'Başarısız',
            text: 'Çekilecek miktar boş bırakılamaz!'
        })
    } else {
        Swal.fire({
            title: 'Bakiyenizi çekmek istediğinizden emin misiniz?',
            html: '<b></b> saniye içerisinde onay vermezseniz işlem iptal edilecek...',
            showDenyButton: true,
            confirmButtonText: 'Evet',
            denyButtonText: `Hayır`,
            focusConfirm: true,
            timer: 15000,
            timerProgressBar: true,
            didOpen: () => {
                const b = Swal.getHtmlContainer().querySelector('b')
                timerInterval = setInterval(() => {
                    b.textContent = (Swal.getTimerLeft() / 1000).toFixed()
                }, 100)
            },
            willClose: () => {
                clearInterval(timerInterval)
            }
        }).then((result) => {
            if (result.isConfirmed) {
                $.post(url + "/dash/withdraw", {
                    _token: csrf,
                    bank_id: bank_id,
                    withdraw_amount: withdraw_amount
                }, function (result) {
                    if (result == "1") {
                        Swal.fire({
                            icon: 'error',
                            title: 'Başarısız',
                            text: 'Çerez hatası oluştu!'
                        }).then(function () {
                            location.reload();
                        })
                    } else if (result == "2") {
                        Swal.fire({
                            icon: 'error',
                            title: 'Başarısız',
                            text: 'Sistemsel bir hata oluştu. Daha sonra tekrar deneyiniz.'
                        }).then(function () {
                            location.reload();
                        })
                    } else if (result == "3") {
                        Swal.fire({
                            icon: 'error',
                            title: 'Başarısız',
                            text: 'Çekilecek tutar 10TL altında olamaz.'
                        })
                    } else if (result == "4") {
                        Swal.fire({
                            icon: 'error',
                            title: 'Başarısız',
                            text: 'Çekilebilecek bakiyenizden yüksek bir miktar girdiniz.'
                        })
                    } else if (result == "5") {
                        Swal.fire({
                            icon: 'success',
                            title: 'Başarılı',
                            text: 'Çekim talebiniz başarıyla oluşturuldu.'
                        }).then(function () {
                            window.location = url + "/dash/";
                        })
                    }
                })
            } else if (result.isDenied) {
                Swal.fire('İşlemi iptal ettiniz.', '', 'info')
            }
        })
    }
}

function help_yes(csrf, help_id, user_id) {
    $.post(url + "/api/help/yes", {
        _token: csrf,
        help_id: help_id,
        user_id: user_id,
    }, function (result) {
        if (result == "1") {
            Swal.fire({
                icon: 'error',
                title: 'Başarısız',
                text: 'Çerez hatası oluştu!'
            }).then(function () {
                location.reload();
            })
        } else if (result == "2") {
            Swal.fire({
                icon: 'error',
                title: 'Başarısız',
                text: 'Zaten oy vermişsiniz!'
            })
        } else if (result == "3") {
            Swal.fire({
                icon: 'success',
                title: 'Başarılı',
                text: 'Oyunuz kayıt edildi!'
            }).then(function () {
                location.reload();
            })
        }
    })
}

function help_no(csrf, help_id, user_id) {
    $.post(url + "/api/help/no", {
        _token: csrf,
        help_id: help_id,
        user_id: user_id,
    }, function (result) {
        if (result == "1") {
            Swal.fire({
                icon: 'error',
                title: 'Başarısız',
                text: 'Çerez hatası oluştu!'
            }).then(function () {
                location.reload();
            })
        } else if (result == "3") {
            Swal.fire({
                icon: 'success',
                title: 'Başarılı',
                text: 'Oyunuz kayıt edildi!'
            }).then(function () {
                location.reload();
            })
        }
    })
    if (Tawk_API) {
        Tawk_API.toggle();
    }
}

function takip(csrf, id) {

    url = url + '/dash/follow/1';
    $.post(url, {_token: csrf, id: id}, function (result) {

        if (result.errorcode == "1" || result.errorcode == "2") {
            Swal.fire({
                title: 'Başarısız!',
                text: 'Giriş yapmadan bu işlemi gerçekleştiremesiniz',
                icon: 'error',
                confirmButtonText: 'Tamam'
            });
        }
        if (result.errorcode == "3") {
            Swal.fire({
                title: 'Başarısız!',
                text: 'Kendinizi takip edemesiniz',
                icon: 'error',
                confirmButtonText: 'Tamam'
            });
        }
        if (result.errorcode == "4") {
            Swal.fire({
                title: 'Başarısız!',
                text: 'Zaten takiptesiniz',
                icon: 'error',
                confirmButtonText: 'Tamam'
            });
        }

        if (result.errorcode == "0") {
            Swal.fire({
                title: 'Başarılı!',
                text: 'Başarıyla takip ettiniz',
                icon: 'success',
                confirmButtonText: 'Tamam'
            }).then(function () {
                location.reload();
            });
        }

    })


}

function guvence() {
    Swal.fire({
        icon: 'info',
        text: 'İlan satın aldığınızda paranız teslim alma işlemi sonlanana kadar EpinKasa güvencesinde bekletilir. Ancak alıcı ürünü teslim aldığını beyan eden onayı verdikten sonra para satıcıya geçecektir.Böylelikle teslim alamadığınız ürüne para ödememiş olursunuz  ve paranız  EpinKasa ile güvende olur.'
    })
}
function guvenilirlik() {
    Swal.fire({
        icon: 'info',
        text: 'Güvenilir Satıcı Rozeti, Epinkasa üzerinde kimlik, Telefon, Eposta bilgilerini doğrulamış üyelere verilir. Güvenilir Satıcı doğrulaması yapan üyelerin dolandırıcı olma ihtimali kimlik bilgileri ve telefon numaraları onaylı olduğu için çok daha düşüktür. Herhangi bir dolandırıcılık durumunda bize ulaşan bir resmi tebligat durumunda dolandırıcı olan kişinin kişişel bilgilerini sadece savcılık ile paylaşırız. Bundan dolayı Güvenilir Satıcı Rütbesi olan kullanıcılar dolandırıcılık denemesinde genellikle bulunmazlar. Dolandırıcılık yapmış bir üyenin kimlik bilgileri sistem tarafından yasaklanır ve tekrardan üye olamazlar.'
    })
}

function otomatik() {
    Swal.fire({
        icon: 'info',
        text: 'Bu ilanı satın aldığınızda ürün otomatik olarak teslim edilecektir. Bildirimler ve mesajlar sayfasından teslim edilen ürüne erişebilirsiniz.\n' +
            '        Ürünle ilgili sorun olması durumunda video kaydı alarak canlı desteğe ulaşmanız gerekmektedir.'
    })
}

function streamer_register() {
    $("#streamer_register").submit();
}

function convert_withdrawable_balance_to_balance(csrf) {
    var amount = $("#withdrawable_balance_for_convert").val();
    if ($("#withdrawable_balance_for_convert").val() == '') {
        Swal.fire({
            icon: 'error',
            title: 'Başarısız',
            text: 'Miktar alanı boş bırakılamaz!'
        })
    } else {
        Swal.fire({
            title: 'Bakiyeyi dönüştürmek istediğinizden emin misiniz?',
            html: '<b></b> saniye içerisinde onay vermezseniz işlem iptal edilecek...',
            showDenyButton: true,
            confirmButtonText: 'Evet',
            denyButtonText: `Hayır`,
            focusConfirm: true,
            timer: 15000,
            timerProgressBar: true,
            didOpen: () => {
                const b = Swal.getHtmlContainer().querySelector('b')
                timerInterval = setInterval(() => {
                    b.textContent = (Swal.getTimerLeft() / 1000).toFixed()
                }, 100)
            },
            willClose: () => {
                clearInterval(timerInterval)
            }
        }).then((result) => {
            if (result.isConfirmed) {
                $.post(url + "/dash/deposit/balance/convert", {_token: csrf, amount}, function (result) {
                    if (result === "1") {
                        Swal.fire({
                            icon: 'error',
                            title: 'Başarısız',
                            text: 'Çerez hatası oluştu!'
                        }).then(function () {
                            location.reload();
                        })
                    } else if (result === "2") {
                        Swal.fire({
                            icon: 'error',
                            title: 'Başarısız',
                            text: 'Sistemsel bir hata oluştu. Daha sonra tekrar deneyiniz.'
                        }).then(function () {
                            location.reload();
                        })
                    }  else if (result === "3") {
                        Swal.fire({
                            icon: 'error',
                            title: 'Başarısız',
                            text: 'Bu işlem için çekilebilir bakiyeniz yeterli değil.'
                        })
                    }else if (result === "4") {
                        Swal.fire({
                            icon: 'success',
                            title: 'Başarılı',
                            text: 'Bakiyeniz başarılı bir şekilde dönüştürüldü.'
                        }).then(function () {
                            location.reload();
                        })
                    }
                })
            } else if (result.isDenied) {
                Swal.fire('İşlemi iptal ettiniz.', '', 'info')
            }
        })
    }
}