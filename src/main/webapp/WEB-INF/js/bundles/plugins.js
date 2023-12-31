(function($) {
	var
		// CSS EVENT DETECT
		csse = {
			t : 'transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd',
			a : 'webkitAnimationEnd mozAnimationEnd oAnimationEnd oanimationend animationend'
		},
		// I18N
		i18n = {
			'en' : {
				name : 'English',
				gregorian : false,
				months : {
					short: [
						'Jan',
						'Feb',
						'Mar',
						'Apr',
						'May',
						'June',
						'July',
						'Aug',
						'Sept',
						'Oct',
						'Nov',
						'Dec'
					],
					full : [
						'January',
						'February',
						'March',
						'April',
						'May',
						'June',
						'July',
						'August',
						'September',
						'October',
						'November',
						'December'
					]
				},
				weekdays : {
					short : [
						'S',
						'M',
						'T',
						'W',
						'T',
						'F',
						'S'
					],
					full : [
						'Sunday',
						'Monday',
						'Tuesday',
						'Wednesday',
						'Thursday',
						'Friday',
						'Saturday'
					]
				}
			},
			'ka' : {
				name : 'Georgian',
				gregorian : false,
				months : {
					short: [
						'იან',
						'თებ',
						'მარტ',
						'აპრ',
						'მაი',
						'ივნ',
						'ივლ',
						'აგვ',
						'სექტ',
						'ოქტ',
						'ნოემბ',
						'დეკ'
					],
					full : [
						'იანვარი',
						'თებერვალი',
						'მარტი',
						'აპრილი',
						'მაისი',
						'ივნისი',
						'ივლისი',
						'აგვისტო',
						'სექტემბერი',
						'ოქტომბერი',
						'ნოემბერი',
						'დეკემბერი'
					]
				},
				weekdays : {
					short : [
						'კვ',
						'ორ',
						'სამ',
						'ოთხ',
						'ხუთ',
						'პარ',
						'შაბ'
					],
					full : [
						'კვირა',
						'ორშაბათი',
						'სამშაბათი',
						'ოთხშაბათი',
						'ხუთშაბათი',
						'პარასკევი',
						'შაბათი'
					]
				}
			},//
			'it' : {
				name : 'Italiano',
				gregorian : true,
				months : {
					short: [
						'Gen',
						'Feb',
						'Mar',
						'Apr',
						'Mag',
						'Giu',
						'Lug',
						'Ago',
						'Set',
						'Ott',
						'Nov',
						'Dic'
					],
					full : [
						'Gennaio',
						'Febbraio',
						'Marzo',
						'Aprile',
						'Maggio',
						'Giugno',
						'Luglio',
						'Agosto',
						'Settembre',
						'Ottobre',
						'Novembre',
						'Dicembre'
					]
				},
				weekdays : {
					short : [
						'D',
						'L',
						'M',
						'M',
						'G',
						'V',
						'S'
					],
					full : [
						'Domenica',
						'Lunedì',
						'Martedì',
						'Mercoledì',
						'Giovedì',
						'Venerdì',
						'Sabato'
					]
				}
			},
			'fr' : {
				name : 'Français',
				gregorian : true,
				months : {
					short: [
						'Jan',
						'Fév',
						'Mar',
						'Avr',
						'Mai',
						'Jui',
						'Jui',
						'Aoû',
						'Sep',
						'Oct',
						'Nov',
						'Déc'
					],
					full : [
						'Janvier',
						'Février',
						'Mars',
						'Avril',
						'Mai',
						'Juin',
						'Juillet',
						'Août',
						'Septembre',
						'Octobre',
						'Novembre',
						'Décembre'
					]
				},
				weekdays : {
					short : [
						'D',
						'L',
						'M',
						'M',
						'J',
						'V',
						'S'
					],
					full : [
						'Dimanche',
						'Lundi',
						'Mardi',
						'Mercredi',
						'Jeudi',
						'Vendredi',
						'Samedi'
					]
				}
			},
			'zh' : {
				name : '中文',
				gregorian : true,
				months : {
					short: [
						'一月',
						'二月',
						'三月',
						'四月',
						'五月',
						'六月',
						'七月',
						'八月',
						'九月',
						'十月',
						'十一月',
						'十二月'
					],
					full : [
						'一月',
						'二月',
						'三月',
						'四月',
						'五月',
						'六月',
						'七月',
						'八月',
						'九月',
						'十月',
						'十一月',
						'十二月'
					]
				},
				weekdays : {
					short : [
						'天',
						'一',
						'二',
						'三',
						'四',
						'五',
						'六'
					],
					full : [
						'星期天',
						'星期一',
						'星期二',
						'星期三',
						'星期四',
						'星期五',
						'星期六'
					]
				}
			},
			'ar' : {
				name : 'العَرَبِيَّة',
				gregorian : false,
				months : {
					short: [
						'جانفي',
						'فيفري',
						'مارس',
						'أفريل',
						'ماي',
						'جوان',
						'جويلية',
						'أوت',
						'سبتمبر',
						'أكتوبر',
						'نوفمبر',
						'ديسمبر'
					],
					full : [
						'جانفي',
						'فيفري',
						'مارس',
						'أفريل',
						'ماي',
						'جوان',
						'جويلية',
						'أوت',
						'سبتمبر',
						'أكتوبر',
						'نوفمبر',
						'ديسمبر'
					]
				},
				weekdays : {
					short : [
						'S',
						'M',
						'T',
						'W',
						'T',
						'F',
						'S'
					],
					full : [
						'الأحد',
						'الإثنين',
						'الثلثاء',
						'الأربعاء',
						'الخميس',
						'الجمعة',
						'السبت'
					]
				}
			},
			'fa' : {
				name : 'فارسی',
				gregorian : false,
				months : {
					short: [
						'ژانویه',
						'فووریه',
						'مارچ',
						'آپریل',
						'می',
						'جون',
						'جولای',
						'آگوست',
						'سپتامبر',
						'اکتبر',
						'نوامبر',
						'دسامبر'
					],
					full : [
						'ژانویه',
						'فووریه',
						'مارچ',
						'آپریل',
						'می',
						'جون',
						'جولای',
						'آگوست',
						'سپتامبر',
						'اکتبر',
						'نوامبر',
						'دسامبر'
					]
				},
				weekdays : {
					short : [
						'S',
						'M',
						'T',
						'W',
						'T',
						'F',
						'S'
					],
					full : [
						'یکشنبه',
						'دوشنبه',
						'سه شنبه',
						'چهارشنبه',
						'پنج شنبه',
						'جمعه',
						'شنبه'
					]
				}
			},
			'hu' : {
				name : 'Hungarian',
				gregorian : true,
				months : {
					short: [
						"jan",
						"feb",
						"már",
						"ápr",
						"máj",
						"jún",
						"júl",
						"aug",
						"sze",
						"okt",
						"nov",
						"dec"
					],
					full : [
						"január",
						"február",
						"március",
						"április",
						"május",
						"június",
						"július",
						"augusztus",
						"szeptember",
						"október",
						"november",
						"december"
					]
				},
				weekdays : {
					short : [
						'v',
						'h',
						'k',
						's',
						'c',
						'p',
						's'
					],
					full : [
						'vasárnap',
						'hétfő',
						'kedd',
						'szerda',
						'csütörtök',
						'péntek',
						'szombat'
					]
				}
			},
			'gr' : {
				name : 'Ελληνικά',
				gregorian : true,
				months : {
					short: [
						"Ιαν",
						"Φεβ",
						"Μάρ",
						"Απρ",
						"Μάι",
						"Ιούν",
						"Ιούλ",
						"Αύγ",
						"Σεπ",
						"Οκτ",
						"Νοέ",
						"Δεκ"
					],
					full : [
						"Ιανουάριος",
						"Φεβρουάριος",
						"Μάρτιος",
						"Απρίλιος",
						"Μάιος",
						"Ιούνιος",
						"Ιούλιος",
						"Αύγουστος",
						"Σεπτέμβριος",
						"Οκτώβριος",
						"Νοέμβριος",
						"Δεκέμβριος"
					]
				},
				weekdays : {
					short : [
						'Κ',
						'Δ',
						'Τ',
						'Τ',
						'Π',
						'Π',
						'Σ'
					],
					full : [
						'Κυριακή',
						'Δευτέρα',
						'Τρίτη',
						'Τετάρτη',
						'Πέμπτη',
						'Παρασκευή',
						'Σάββατο'
					]
				}
			},
			'es' : {
				name : 'Español',
				gregorian : true,
				months : {
					short: [
						"Ene",
						"Feb",
						"Mar",
						"Abr",
						"May",
						"Jun",
						"Jul",
						"Ago",
						"Sep",
						"Oct",
						"Nov",
						"Dic"
					],
					full : [
						"Enero",
						"Febrero",
						"Marzo",
						"Abril",
						"Mayo",
						"Junio",
						"Julio",
						"Agosto",
						"Septiembre",
						"Octubre",
						"Noviembre",
						"Diciembre"
					]
				},
				weekdays : {
					short : [
						'D',
						'L',
						'M',
						'X',
						'J',
						'V',
						'S'
					],
					full : [
						'Domingo',
						'Lunes',
						'Martes',
						'Miércoles',
						'Jueves',
						'Viernes',
						'Sábado'
					]
				}
			},
			'da' : {
				name : 'Dansk',
				gregorian : true,
				months : {
					short: [
						"jan",
						"feb",
						"mar",
						"apr",
						"maj",
						"jun",
						"jul",
						"aug",
						"sep",
						"okt",
						"nov",
						"dec"
					],
					full : [
						"januar",
						"februar",
						"marts",
						"april",
						"maj",
						"juni",
						"juli",
						"august",
						"september",
						"oktober",
						"november",
						"december"
					]
				},
				weekdays : {
					short : [
						's',
						'm',
						't',
						'o',
						't',
						'f',
						'l'
					],
					full : [
						'søndag',
						'mandag',
						'tirsdag',
						'onsdag',
						'torsdag',
						'fredag',
						'lørdag'
					]
				}
			},
			'de' : {
				name : 'Deutsch',
				gregorian : true,
				months : {
					short: [
						"Jan",
						"Feb",
						"Mär",
						"Apr",
						"Mai",
						"Jun",
						"Jul",
						"Aug",
						"Sep",
						"Okt",
						"Nov",
						"Dez"
					],
					full : [
						"Januar",
						"Februar",
						"März",
						"April",
						"Mai",
						"Juni",
						"Juli",
						"August",
						"September",
						"Oktober",
						"November",
						"Dezember"
					]
				},
				weekdays : {
					short : [
						'S',
						'M',
						'D',
						'M',
						'D',
						'F',
						'S'
					],
					full : [
						'Sonntag',
						'Montag',
						'Dienstag',
						'Mittwoch',
						'Donnerstag',
						'Freitag',
						'Samstag'
					]
				}
			},
			'nl' : {
				name : 'Nederlands',
				gregorian : true,
				months : {
					short: [
						"jan",
						"feb",
						"maa",
						"apr",
						"mei",
						"jun",
						"jul",
						"aug",
						"sep",
						"okt",
						"nov",
						"dec"
					],
					full : [
						"januari",
						"februari",
						"maart",
						"april",
						"mei",
						"juni",
						"juli",
						"augustus",
						"september",
						"oktober",
						"november",
						"december"
					]
				},
				weekdays : {
					short : [
						'z',
						'm',
						'd',
						'w',
						'd',
						'v',
						'z'
					],
					full : [
						'zondag',
						'maandag',
						'dinsdag',
						'woensdag',
						'donderdag',
						'vrijdag',
						'zaterdag'
					]
				}
			},
			'pl' : {
				name : 'język polski',
				gregorian : true,
				months : {
					short: [
						"sty",
						"lut",
						"mar",
						"kwi",
						"maj",
						"cze",
						"lip",
						"sie",
						"wrz",
						"paź",
						"lis",
						"gru"
					],
					full : [
						"styczeń",
						"luty",
						"marzec",
						"kwiecień",
						"maj",
						"czerwiec",
						"lipiec",
						"sierpień",
						"wrzesień",
						"październik",
						"listopad",
						"grudzień"
					]
				},
				weekdays : {
					short : [
						'n',
						'p',
						'w',
						'ś',
						'c',
						'p',
						's'
					],
					full : [
						'niedziela',
						'poniedziałek',
						'wtorek',
						'środa',
						'czwartek',
						'piątek',
						'sobota'
					]
				}
			},
			'pt' : {
				name : 'Português',
				gregorian : true,
				months : {
					short: [
						"Janeiro",
						"Fevereiro",
						"Março",
						"Abril",
						"Maio",
						"Junho",
						"Julho",
						"Agosto",
						"Setembro",
						"Outubro",
						"Novembro",
						"Dezembro"
					],
					full : [
						"Janeiro",
						"Fevereiro",
						"Março",
						"Abril",
						"Maio",
						"Junho",
						"Julho",
						"Agosto",
						"Setembro",
						"Outubro",
						"Novembro",
						"Dezembro"
					]
				},
				weekdays : {
					short : [
						"D",
						"S",
						"T",
						"Q",
						"Q",
						"S",
						"S"
					],
					full : [
						"Domingo",
						"Segunda",
						"Terça",
						"Quarta",
						"Quinta",
						"Sexta",
						"Sábado"
					]
				}
			},
			'si' : {
				name : 'Slovenščina',
				gregorian : true,
				months : {
					short: [
						"jan",
						"feb",
						"mar",
						"apr",
						"maj",
						"jun",
						"jul",
						"avg",
						"sep",
						"okt",
						"nov",
						"dec"
					],
					full : [
						"januar",
						"februar",
						"marec",
						"april",
						"maj",
						"junij",
						"julij",
						"avgust",
						"september",
						"oktober",
						"november",
						"december"
					]
				},
				weekdays : {
					short : [
						'n',
						'p',
						't',
						's',
						'č',
						'p',
						's'
					],
					full : [
						'nedelja',
						'ponedeljek',
						'torek',
						'sreda',
						'četrtek',
						'petek',
						'sobota'
					]
				}
			},
			'uk' : {
				name : 'українська мова',
				gregorian : true,
				months : {
					short: [
						"січень",
						"лютий",
						"березень",
						"квітень",
						"травень",
						"червень",
						"липень",
						"серпень",
						"вересень",
						"жовтень",
						"листопад",
						"грудень"
					],
					full : [
						"січень",
						"лютий",
						"березень",
						"квітень",
						"травень",
						"червень",
						"липень",
						"серпень",
						"вересень",
						"жовтень",
						"листопад",
						"грудень"
					]
				},
				weekdays : {
					short : [
						'н',
						'п',
						'в',
						'с',
						'ч',
						'п',
						'с'
					],
					full : [
						'неділя',
						'понеділок',
						'вівторок',
						'середа',
						'четвер',
						'п\'ятниця',
						'субота'
					]
				}
			},
			'ru' : {
				name : 'русский язык',
				gregorian : true,
				months : {
					short: [
						"январь",
						"февраль",
						"март",
						"апрель",
						"май",
						"июнь",
						"июль",
						"август",
						"сентябрь",
						"октябрь",
						"ноябрь",
						"декабрь"
					],
					full : [
						"январь",
						"февраль",
						"март",
						"апрель",
						"май",
						"июнь",
						"июль",
						"август",
						"сентябрь",
						"октябрь",
						"ноябрь",
						"декабрь"
					]
				},
				weekdays : {
					short : [
						'в',
						'п',
						'в',
						'с',
						'ч',
						'п',
						'с'
					],
					full : [
						'воскресенье',
						'понедельник',
						'вторник',
						'среда',
						'четверг',
						'пятница',
						'суббота'
					]
				}
			},
			'tr' : {
				name : 'Türkçe',
				gregorian : true,
				months : {
					short: [
						"Oca",
						"Şub",
						"Mar",
						"Nis",
						"May",
						"Haz",
						"Tem",
						"Ağu",
						"Eyl",
						"Eki",
						"Kas",
						"Ara"
					],
					full : [
						"Ocak",
						"Şubat",
						"Mart",
						"Nisan",
						"Mayıs",
						"Haziran",
						"Temmuz",
						"Ağustos",
						"Eylül",
						"Ekim",
						"Kasım",
						"Aralık"
					]
				},
				weekdays : {
					short : [
						'P',
						'P',
						'S',
						'Ç',
						'P',
						'C',
						'C'
					],
					full : [
						'Pazar',
						'Pazartesi',
						'Sali',
						'Çarşamba',
						'Perşembe',
						'Cuma',
						'Cumartesi'
					]
				}
			},
			'ko' : {
				name : '조선말',
				gregorian : true,
				months : {
					short: [
						"1월",
						"2월",
						"3월",
						"4월",
						"5월",
						"6월",
						"7월",
						"8월",
						"9월",
						"10월",
						"11월",
						"12월"
					],
					full : [
						"1월",
						"2월",
						"3월",
						"4월",
						"5월",
						"6월",
						"7월",
						"8월",
						"9월",
						"10월",
						"11월",
						"12월"
					]
				},
				weekdays : {
					short : [
						'일',
						'월',
						'화',
						'수',
						'목',
						'금',
						'토'
					],
					full : [
						'일요일',
						'월요일',
						'화요일',
						'수요일',
						'목요일',
						'금요일',
						'토요일'
					]
				}
			},
			'fi' : {
				name : 'suomen kieli',
				gregorian : true,
				months : {
					short: [
						"Tam",
						"Hel",
						"Maa",
						"Huh",
						"Tou",
						"Kes",
						"Hei",
						"Elo",
						"Syy",
						"Lok",
						"Mar",
						"Jou"
					],
					full : [
						"Tammikuu",
						"Helmikuu",
						"Maaliskuu",
						"Huhtikuu",
						"Toukokuu",
						"Kesäkuu",
						"Heinäkuu",
						"Elokuu",
						"Syyskuu",
						"Lokakuu",
						"Marraskuu",
						"Joulukuu"
					]
				},
				weekdays : {
					short : [
						'S',
						'M',
						'T',
						'K',
						'T',
						'P',
						'L'
					],
					full : [
						'Sunnuntai',
						'Maanantai',
						'Tiistai',
						'Keskiviikko',
						'Torstai',
						'Perjantai',
						'Lauantai'
					]
				}
			},
			'vi':{
				name:'Tiếng việt',
				gregorian:false,
				months:{
					short:[
						'Th.01',
						'Th.02',
						'Th.03',
						'Th.04',
						'Th.05',
						'Th.06',
						'Th.07',
						'Th.08',
						'Th.09',
						'Th.10',
						'Th.11',
						'Th.12'
					],
					full:[
						'Tháng 01',
						'Tháng 02',
						'Tháng 03',
						'Tháng 04',
						'Tháng 05',
						'Tháng 06',
						'Tháng 07',
						'Tháng 08',
						'Tháng 09',
						'Tháng 10',
						'Tháng 11',
						'Tháng 12'
					]
				},
				weekdays:{
					short:[
						'CN',
						'T2',
						'T3',
						'T4',
						'T5',
						'T6',
						'T7'
					],
					full:[
						'Chủ nhật',
						'Thứ hai',
						'Thứ ba',
						'Thứ tư',
						'Thứ năm',
						'Thứ sáu',
						'Thứ bảy'
					]
				}
			}
		},

		// MAIN VARS

		pickers = {},
		picker = null,
		picker_ctrl = false,
		pick_dragged = null,
		pick_drag_offset = null,
		pick_drag_temp = null,

		// CHECK FUNCTIONS

		is_click = false,
		is_ie = function() {
			var
				n = navigator.userAgent.toLowerCase();
			return (n.indexOf('msie') != -1) ? parseInt(n.split('msie')[1]) : false;
		},
		is_touch = function() {
			if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))
				return true;
			else
				return false;
		},
		is_fx_mobile = function() {
			if(picker&&pickers[picker.id].fx&&!pickers[picker.id].fxmobile) {
				if($(window).width()<480)
					picker.element.removeClass('picker-fxs');
				else
					picker.element.addClass('picker-fxs')
			}
		},
		is_jumpable = function() {
			if( pickers[picker.id].jump >= pickers[picker.id].key.y.max - pickers[picker.id].key.y.min )
				return false;
			else
				return true;
		},
		is_locked = function() {
			var
				unix_current = get_unix(get_current_full()),
				unix_today = get_unix(get_today_full());

			if(pickers[picker.id].lock) {
				if(pickers[picker.id].lock=='from') {
					if(unix_current<unix_today) {
						picker_alrt();
						picker.element.addClass('picker-lkd');
						return true;
					}
					else {
						picker.element.removeClass('picker-lkd');
						return false;
					}
				}
				if(pickers[picker.id].lock=='to') {
					if(unix_current>unix_today) {
						picker_alrt();
						picker.element.addClass('picker-lkd');
						return true;
					}
					else {
						picker.element.removeClass('picker-lkd');
						return false;
					}
				}
			}

			if(pickers[picker.id].disabledays) {
				if(pickers[picker.id].disabledays.indexOf(unix_current) != -1) {
					picker_alrt();
					picker.element.addClass('picker-lkd');
					return true;
				}
				else {
					picker.element.removeClass('picker-lkd');
					return false;
				}
			}
		},
		is_int = function(n) {
			return n % 1 === 0;
		},
		is_date = function(value) {
			var
				format = /(^\d{1,4}[\.|\\/|-]\d{1,2}[\.|\\/|-]\d{1,4})(\s*(?:0?[1-9]:[0-5]|1(?=[012])\d:[0-5])\d\s*[ap]m)?$/;
			return format.test(value);
		},

		// REST FUNCTIONS

		get_current = function(k){
			return parseInt(pickers[picker.id].key[k].current);
		},
		get_today = function(k){
			return parseInt(pickers[picker.id].key[k].today);
		},
		get_today_full = function() {
			return get_today('m')+'/'+get_today('d')+'/'+get_today('y');
		},
		get_current_full = function() {
			return get_current('m')+'/'+get_current('d')+'/'+get_current('y');
		},
		get_jumped = function(k,val) {
			var
				a = [],
				key_values = pickers[picker.id].key[k];
			for (var i = key_values.min; i <= key_values.max; i++)
				if (i%val == 0)
					a.push(i);
			return a;
		},
		get_closest_jumped = function(int,arr) {
			var c = arr[0];
			var d = Math.abs (int - c);
			for (var i = 0; i < arr.length; i++) {
				var n = Math.abs (int - arr[i]);
				if (n < d) {
					d = n;
					c = arr[i];
				}
			}
			return c;
		},
		get_clear = function(k,n){
			var
				key_values = pickers[picker.id].key[k];
			if( n > key_values.max )
				return get_clear( k , (n-key_values.max)+(key_values.min-1) );
			else if( n < key_values.min )
				return get_clear( k , (n+1) + (key_values.max - key_values.min));
			else
				return n;
		},
		get_days_array = function() {
			if(i18n[pickers[picker.id].lang].gregorian)
				return [1,2,3,4,5,6,0];
			else
				return [0,1,2,3,4,5,6];
		},
		get_ul = function(k) {
			return get_picker_els('ul.pick[data-k="'+k+'"]');
		},
		get_eq = function(k,d) {
			ul = get_ul(k);
			var
				o = [];

			ul.find('li').each(function(){
				o.push($(this).attr('value'));
			});

			if(d=='last')
				return o[o.length-1];
			else
				return o[0];

		},
		get_picker_els = function(el) {
			if(picker)
				return picker.element.find(el);
		},
		get_unix = function(d) {
			return Date.parse(d) / 1000;
		},

		// RENDER FUNCTIONS

		picker_large_onoff = function() {
			if(pickers[picker.id].large) {
				picker.element.toggleClass('picker-lg');
				picker_render_calendar();
			}
		},
		picker_translate_onoff = function() {
			get_picker_els('ul.pick.pick-l').toggleClass('visible');
		},
		picker_offset = function(){
			if(!picker.element.hasClass('picker-modal')){
				var
					input = picker.input,
					left = input.offset().left + input.outerWidth()/2,
					top = input.offset().top + input.outerHeight();
				picker.element.css({
					'left' : left,
					'top' : top
				});
			}
		},
		picker_translate = function(v) {
			pickers[picker.id].lang = Object.keys(i18n)[v];
			picker_set_lang();
			picker_set();
		},
		picker_set_lang = function() {
			var
				picker_day_offset = get_days_array();
			get_picker_els('.pick-lg .pick-lg-h li').each(function(i){
				$(this).html(i18n[pickers[picker.id].lang].weekdays.short[picker_day_offset[i]]);
			});
			get_picker_els('ul.pick.pick-m li').each(function(){
				$(this).html(i18n[pickers[picker.id].lang].months.short[$(this).attr('value')-1]);
			});
		},
		picker_show = function() {
			picker.element.addClass('picker-focus');
		},
		picker_hide = function() {
			if(!is_locked()) {
				picker.element.removeClass('picker-focus');
				if(picker.element.hasClass('picker-modal'))
					$('.picker-modal-overlay').addClass('tohide');
				picker = null;
			}
			picker_ctrl = false;
		},
		picker_render_ul = function(k){
			var
				ul = get_ul(k),
				key_values = pickers[picker.id].key[k];

			//CURRENT VALUE
			pickers[picker.id].key[k].current = key_values.today < key_values.min && key_values.min || key_values.today;

			for (i = key_values.min; i <= key_values.max; i++) {
				var
					html = i;

				if(k=='m')
					html = i18n[pickers[picker.id].lang].months.short[i-1];
				if(k=='l')
					html = i18n[Object.keys(i18n)[i]].name;

				html += k=='d' ? '<span></span>' : '';

				$('<li>', {
					value: i,
					html: html
				})
				.appendTo(ul)
			}

			//PREV BUTTON
			$('<div>', {
				class: 'pick-arw pick-arw-s1 pick-arw-l',
				html: $('<i>', {
					class: 'pick-i-l'
				})
			})
			.appendTo(ul);

			//NEXT BUTTON
			$('<div>', {
				class: 'pick-arw pick-arw-s1 pick-arw-r',
				html: $('<i>', {
					class: 'pick-i-r'
				})
			})
			.appendTo(ul);

			if(k=='y') {

				//PREV BUTTON
				$('<div>', {
					class: 'pick-arw pick-arw-s2 pick-arw-l',
					html: $('<i>', {
						class: 'pick-i-l'
					})
				})
				.appendTo(ul);

				//NEXT BUTTON
				$('<div>', {
					class: 'pick-arw pick-arw-s2 pick-arw-r',
					html: $('<i>', {
						class: 'pick-i-r'
					})
				})
				.appendTo(ul);

			}

			picker_ul_transition(k,get_current(k));

		},
		picker_render_calendar = function() {

			var
				index = 0,
				w = get_picker_els('.pick-lg-b');

			w.find('li')
			.empty()
			.removeClass('pick-n pick-b pick-a pick-v pick-lk pick-sl pick-h')
			.attr('data-value','');

			var
				_C = new Date(get_current_full()),
				_S = new Date(get_current_full()),
				_L = new Date(get_current_full()),
				_NUM = function(d){
					var
						m = d.getMonth(),
						y = d.getFullYear();
					var l = ((y % 4) == 0 && ((y % 100) != 0 || (y % 400) == 0));
					return [31, (l ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][m];
				};

			_L.setMonth(_L.getMonth()-1);
			_S.setDate(1);

			var
				o = _S.getDay()-1;
				if(o<0)
					o = 6;
				if(i18n[pickers[picker.id].lang].gregorian) {
					o--;
					if(o<0)
						o=6;
				}

			//before
			for(var i = _NUM(_L)-o ; i <= _NUM(_L) ; i++) {
				w.find('li').eq(index)
				.html(i)
				.addClass('pick-b pick-n pick-h');
				index++;
			}
			//current
			for(var i = 1 ; i <= _NUM(_S) ; i++) {
				w.find('li').eq(index)
				.html(i)
				.addClass('pick-n pick-v')
				.attr('data-value',i);
				index++;
			}
			//after
			if(w.find('li.pick-n').length < 42) {
				var
					e = 42 - w.find('li.pick-n').length;
				for(var i = 1 ; i <= e; i++) {
					w.find('li').eq(index).html(i)
					.addClass('pick-a pick-n pick-h');
					index++;
				}
			}
			if(pickers[picker.id].lock) {
				if(pickers[picker.id].lock==='from') {
					if(get_current('y')<=get_today('y')) {
						if(get_current('m')==get_today('m')) {
							get_picker_els('.pick-lg .pick-lg-b li.pick-v[data-value="'+get_today('d')+'"]')
							.prevAll('li')
							.addClass('pick-lk')
						}
						else {
							if(get_current('m')<get_today('m')) {
								get_picker_els('.pick-lg .pick-lg-b li')
								.addClass('pick-lk')
							}
							else if(get_current('m')>get_today('m')&&get_current('y')<get_today('y')) {
								get_picker_els('.pick-lg .pick-lg-b li')
								.addClass('pick-lk')
							}
						}
					}
				}
				else {
					if(get_current('y')>=get_today('y')) {
						if(get_current('m')==get_today('m')) {
							get_picker_els('.pick-lg .pick-lg-b li.pick-v[data-value="'+get_today('d')+'"]')
							.nextAll('li')
							.addClass('pick-lk')
						}
						else {
							if(get_current('m')>get_today('m')) {
								get_picker_els('.pick-lg .pick-lg-b li')
								.addClass('pick-lk')
							}
							else if(get_current('m')<get_today('m')&&get_current('y')>get_today('y')) {
								get_picker_els('.pick-lg .pick-lg-b li')
								.addClass('pick-lk')
							}
						}
					}
				}
			}
			if(pickers[picker.id].disabledays) {
				$.each(pickers[picker.id].disabledays, function( i, v ) {
					if(v&&is_date(v)) {
						var
							d = new Date(v*1000);
						if(d.getMonth()+1==get_current('m')&&d.getFullYear()==get_current('y'))
							get_picker_els('.pick-lg .pick-lg-b li.pick-v[data-value="'+d.getDate()+'"]')
							.addClass('pick-lk');
					}
				});
			}

			get_picker_els('.pick-lg-b li.pick-v[data-value='+get_current('d')+']').addClass('pick-sl');

		},
		picker_fills = function() {

			var
				m = get_current('m'),
				y = get_current('y'),
				l = ((y % 4) == 0 && ((y % 100) != 0 || (y % 400) == 0));

			pickers[picker.id].key['d'].max =  [31, (l ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][m-1];

			if(get_current('d')>pickers[picker.id].key['d'].max) {
				pickers[picker.id].key['d'].current = pickers[picker.id].key['d'].max;
				picker_ul_transition('d',get_current('d'));
			}

			get_picker_els('.pick-d li')
			.removeClass('pick-wke')
			.each(function() {
				var
					d = new Date(m+"/"+$(this).attr('value')+"/"+y).getDay();

				$(this)
				.find('span')
				.html(i18n[pickers[picker.id].lang].weekdays.full[d]);

				if(d==0||d==6)
					$(this).addClass('pick-wke');

			});

			if(picker.element.hasClass('picker-lg')) {
				get_picker_els('.pick-lg-b li').removeClass('pick-wke');
				get_picker_els('.pick-lg-b li.pick-v')
				.each(function() {
					var
						d = new Date(m+"/"+$(this).attr('data-value')+"/"+y).getDay();
					if(d==0||d==6)
						$(this).addClass('pick-wke');

				});
			}

		},
		picker_set = function() {
			if(picker.element.hasClass('picker-lg'))
				picker_render_calendar();
			picker_fills();
			input_change_value();
		},

		// ACTION FUNCTIONS

		picker_ul_transition = function(k,i) {

			var
				ul = get_ul(k);

			ul.find('li').removeClass('pick-sl pick-bfr pick-afr');

			if(i==get_eq(k,'last')) {
				var li = ul.find('li[value="'+get_eq(k,'first')+'"]');
				li.clone().insertAfter(ul.find('li[value='+i+']'));
				li.remove();
			}
			if(i==get_eq(k,'first')) {
				var li = ul.find('li[value="'+get_eq(k,'last')+'"]');
				li.clone().insertBefore(ul.find('li[value='+i+']'));
				li.remove();
			}

			ul.find('li[value='+i+']').addClass('pick-sl');
			ul.find('li.pick-sl').nextAll('li').addClass('pick-afr');
			ul.find('li.pick-sl').prevAll('li').addClass('pick-bfr');

		},
		picker_values_increase = function(k,v) {

			var
				key_values = pickers[picker.id].key[k];

			if(v>key_values.max) {
				if(k=='d')
					picker_ul_turn('m','right');
				if(k=='m')
					picker_ul_turn('y','right');
				v = key_values.min;
			}
			if(v<key_values.min) {
				if(k=='d')
					picker_ul_turn('m','left');
				if(k=='m')
					picker_ul_turn('y','left');
				v = key_values.max;
			}
			pickers[picker.id].key[k].current = v;
			picker_ul_transition(k,v);

		},
		picker_ul_turn = function(k,d) {
			var
				v = get_current(k);
			if(d=='right')
				v++;
			else
				v--;
			picker_values_increase(k,v);
		},
		picker_alrt = function() {
			picker.element
			.addClass('picker-rmbl');
		},

		/* INPUT FUNCTIONS */

		input_fill = function(n) {
			return n < 10 ? '0' + n : n
		},
		input_ordinal_suffix = function(n) {
			var
				s=["th","st","nd","rd"],
				v=n%100;
			return n+(s[(v-20)%10]||s[v]||s[0]);
		},
		input_change_value = function() {

			if(!is_locked()&&picker_ctrl) {

				var
					d = get_current('d'),
					m = get_current('m'),
					y = get_current('y'),
					get_day = new Date(m+"/"+d+"/"+y).getDay(),

					str =
					pickers[picker.id].format
					.replace(/\b(d)\b/g, input_fill(d))
					.replace(/\b(m)\b/g, input_fill(m))
					.replace(/\b(S)\b/g, input_ordinal_suffix(d)) //new
					.replace(/\b(Y)\b/g, y)
					.replace(/\b(U)\b/g, get_unix(get_current_full())) //new
					.replace(/\b(D)\b/g, i18n[pickers[picker.id].lang].weekdays.short[get_day])
					.replace(/\b(l)\b/g, i18n[pickers[picker.id].lang].weekdays.full[get_day])
					.replace(/\b(F)\b/g, i18n[pickers[picker.id].lang].months.full[m-1])
					.replace(/\b(M)\b/g, i18n[pickers[picker.id].lang].months.short[m-1])
					.replace(/\b(n)\b/g, m)
					.replace(/\b(j)\b/g, d);

				picker
				.input
				.val(str)
				.change();

				picker_ctrl = false;

			}

		};

	// GET UI EVENT

	if(is_touch())
		var
			ui_event = {
				i : 'touchstart',
				m	: 'touchmove',
				e : 'touchend'
			}
	else
		var
			ui_event = {
				i : 'mousedown',
				m	: 'mousemove',
				e : 'mouseup'
			}


	var
		picker_node_el = 'div.datedropper.picker-focus';

	$(document)


	//CLOSE PICKER
	.on('click',function(e) {
		if(picker) {
			if(!picker.input.is(e.target) && !picker.element.is(e.target) && picker.element.has(e.target).length === 0) {
				picker_hide();
				pick_dragged = null;
			}
		}
	})

	//LOCK ANIMATION
	.on(csse.a,picker_node_el + '.picker-rmbl',function(){
		if(picker.element.hasClass('picker-rmbl'))
			$(this).removeClass('picker-rmbl');
	})

	//HIDE MODAL OVERLAY
	.on(csse.t,'.picker-modal-overlay',function(){
		$(this).remove();
	})


	//LARGE-MODE DAY CLICK
	.on(ui_event.i,picker_node_el+' .pick-lg li.pick-v',function(){
		get_picker_els('.pick-lg-b li').removeClass('pick-sl');
		$(this).addClass('pick-sl');
		pickers[picker.id].key['d'].current = $(this).attr('data-value');
		picker_ul_transition('d',$(this).attr('data-value'));
		picker_ctrl = true;
	})

	//BUTTON LARGE-MODE
	.on('click',picker_node_el+' .pick-btn-sz',function(){
		picker_large_onoff();
	})

	//BUTTON TRANSLATE-MODE
	.on('click',picker_node_el+' .pick-btn-lng',function(){
		picker_translate_onoff();
	})

	//JUMP
	.on(ui_event.i,picker_node_el+' .pick-arw.pick-arw-s2',function(e){

		e.preventDefault();
		pick_dragged = null;

		var
			i,
			k = $(this).closest('ul').data('k'),
			jump = pickers[picker.id].jump;

		if($(this).hasClass('pick-arw-r'))
			i = get_current('y') + jump;
		else
			i = get_current('y') - jump;

		var
			jumped_array = get_jumped('y',jump);

		if(i>jumped_array[jumped_array.length-1])
			i = jumped_array[0];
		if(i<jumped_array[0])
			i = jumped_array[jumped_array.length-1];

		pickers[picker.id].key['y'].current = i;
		picker_ul_transition('y',get_current('y'));

		picker_ctrl = true;

	})

	//DEFAULT ARROW
	.on(ui_event.i,picker_node_el+' .pick-arw.pick-arw-s1',function(e){
		e.preventDefault();
		pick_dragged = null;
		var
			k = $(this).closest('ul').data('k');
		if($(this).hasClass('pick-arw-r'))
			picker_ul_turn(k,'right');
		else
			picker_ul_turn(k,'left');

		picker_ctrl = true;

	})

	// JUMP
	.on(ui_event.i,picker_node_el+' ul.pick.pick-y li',function(){
		is_click = true;
	})
	.on(ui_event.e,picker_node_el+' ul.pick.pick-y li',function(){
		if(is_click&&is_jumpable()) {
			$(this).closest('ul').toggleClass('pick-jump');
			var
				jumped = get_closest_jumped(get_current('y'),get_jumped('y',pickers[picker.id].jump));
			pickers[picker.id].key['y'].current = jumped;
			picker_ul_transition('y',get_current('y'));
			is_click = false;
		}
	})

	//TOGGLE CALENDAR
	.on(ui_event.i,picker_node_el+' ul.pick.pick-d li',function(){
		is_click = true;
	})
	.on(ui_event.e,picker_node_el+' ul.pick.pick-d li',function(){
		if(is_click) {
			picker_large_onoff();
			is_click = false;
		}
	})

	//TOGGLE TRANSLATE MODE
	.on(ui_event.i,picker_node_el+' ul.pick.pick-l li',function(){
		is_click = true;
	})
	.on(ui_event.e,picker_node_el+' ul.pick.pick-l li',function(){
		if(is_click) {
			picker_translate_onoff();
			picker_translate($(this).val());
			is_click = false;
		}
	})

	//MOUSEDOWN ON UL
	.on(ui_event.i,picker_node_el+' ul.pick',function(e){
		pick_dragged = $(this);
		if(pick_dragged) {
			var
				k = pick_dragged.data('k');
			pick_drag_offset = is_touch() ? e.originalEvent.touches[0].pageY : e.pageY;
			pick_drag_temp = get_current(k);
		}
	})

	//MOUSEMOVE ON UL
	.on(ui_event.m,function(e){

		is_click = false;

		if(pick_dragged) {
			e.preventDefault();
			var
				k = pick_dragged.data('k');
				o = is_touch() ? e.originalEvent.touches[0].pageY : e.pageY;
			o = pick_drag_offset - o;
			o = Math.round(o * .026);
			i = pick_drag_temp + o;
			var
				int = get_clear(k,i);
			if(int!=pickers[picker.id].key[k].current)
				picker_values_increase(k,int);

			picker_ctrl = true;
		}
	})

	//MOUSEUP ON UL
	.on(ui_event.e,function(e){
		if( pick_dragged )
			pick_dragged = null,
			pick_drag_offset = null,
			pick_drag_temp = null;
		if(picker)
			picker_set();
	})

	//CLICK SUBMIT
	.on(ui_event.i,picker_node_el+' .pick-submit',function(){
		picker_hide();
	});

	$(window).resize(function(){
		if(picker) {
			picker_offset();
			is_fx_mobile();
		}
	});

	$.fn.dateDropper = function(options) {
		return $(this).each(function(){
			if($(this).is('input')&&!$(this).hasClass('picker-input')) {

				var
					input = $(this),
					id = 'datedropper-' + Object.keys(pickers).length;

				input
				.attr('data-id',id)
				.addClass('picker-input')
				.prop({
					'type':'text',
					'readonly' : true
				});

				var
					picker_default_date = (input.data('default-date')&&is_date(input.data('default-date'))) ? input.data('default-date') : null,
					picker_disabled_days = (input.data('disabled-days')) ? input.data('disabled-days').split(',') : null,
					picker_format = input.data('format') || 'Y-m-d',
					picker_fx = (input.data('fx')===false) ? input.data('fx') : true,
					picker_fx_class = (input.data('fx')===false) ? '' : 'picker-fxs',
					picker_fx_mobile = (input.data('fx-mobile')===false) ? input.data('fx-mobile') : true,
					picker_init_set = (input.data('init-set')===false) ? false : true,
					picker_lang = (input.data('lang')&&(input.data('lang') in i18n)) ? input.data('lang') : 'en',
					picker_large = (input.data('large-mode')===true) ? true : false,
					picker_large_class = (input.data('large-default')===true && picker_large===true) ? 'picker-lg' : '',
					picker_lock = (input.data('lock')=='from'||input.data('lock')=='to') ? input.data('lock') : false,
					picker_jump = (input.data('jump')&&is_int(input.data('jump'))) ? input.data('jump') : 10,
					picker_max_year = (input.data('max-year')&&is_int(input.data('max-year'))) ? input.data('max-year') : new Date().getFullYear(),
					picker_min_year = (input.data('min-year')&&is_int(input.data('min-year'))) ? input.data('min-year') : 1970,

					picker_modal = (input.data('modal')===true) ? 'picker-modal' : '',
					picker_theme = input.data('theme') || 'primary',
					picker_translate_mode = (input.data('translate-mode')===true) ? true : false;

				if(picker_disabled_days) {
					$.each(picker_disabled_days, function( index, value ) {
						if(value&&is_date(value))
							picker_disabled_days[index] = get_unix(value);
					});
				}

				pickers[id] = {
					disabledays : picker_disabled_days,
					format : picker_format,
					fx : picker_fx,
					fxmobile : picker_fx_mobile,
					lang : picker_lang,
					large : picker_large,
					lock : picker_lock,
					jump : picker_jump,
					key : {
						m : {
							min : 1,
							max : 12,
							current : 1,
							today : (new Date().getMonth()+1)
						},
						d : {
							min : 1,
							max : 31,
							current : 1,
							today : new Date().getDate()
						},
						y : {
							min : picker_min_year,
							max : picker_max_year,
							current : picker_min_year,
							today : new Date().getFullYear()
						},
						l : {
							min : 0,
							max : Object.keys(i18n).length-1,
							current : 0,
							today : 0
						}
					},
					translate : picker_translate_mode
				};

				if(picker_default_date) {

					var regex = /\d+/g;
					var string = picker_default_date;
					var matches = string.match(regex);

					$.each(matches, function( index, value ) {
						matches[index] = parseInt(value);
					});

					pickers[id].key.m.today = (matches[0]&&matches[0]<=12) ? matches[0] : pickers[id].key.m.today;
					pickers[id].key.d.today = (matches[1]&&matches[1]<=31) ? matches[1] : pickers[id].key.d.today;
					pickers[id].key.y.today = (matches[2]) ? matches[2] : pickers[id].key.y.today;

					if(pickers[id].key.y.today>pickers[id].key.y.max)
						pickers[id].key.y.max = pickers[id].key.y.today;
					if(pickers[id].key.y.today<pickers[id].key.y.min)
						pickers[id].key.y.min = pickers[id].key.y.today;

				}

				$('<div>', {
					class: 'datedropper ' + picker_modal + ' ' + picker_theme + ' ' + picker_fx_class + ' ' + picker_large_class,
					id: id,
					html: $('<div>', {
						class: 'picker'
					})
				})
				.appendTo('body');

				picker = {
					id : id,
					input : input,
					element : $('#' + id)
				};

				for( var k in pickers[id].key ) {
					$('<ul>', {
						class: 'pick pick-' + k,
						'data-k' : k
					})
					.appendTo(get_picker_els('.picker'));
					picker_render_ul(k);
				}

				if(pickers[id].large) {

					//calendar
					$('<div>', {
						class: 'pick-lg'
					})
					.insertBefore(get_picker_els('.pick-d'));

					$('<ul class="pick-lg-h"></ul><ul class="pick-lg-b"></ul>')
					.appendTo(get_picker_els('.pick-lg'));

					var
						picker_day_offset = get_days_array();

					for(var i = 0; i < 7 ; i++) {
						$('<li>', {
							html: i18n[pickers[picker.id].lang].weekdays.short[picker_day_offset[i]]
						})
						.appendTo(get_picker_els('.pick-lg .pick-lg-h'))
					}
					for(var i = 0; i < 42 ; i++) {
						$('<li>')
						.appendTo(get_picker_els('.pick-lg .pick-lg-b'))
					}
				}

				//buttons
				$('<div>', {
					class: 'pick-btns'
				})
				.appendTo(get_picker_els('.picker'));

				$('<div>', {
					class: 'pick-submit',
					id:'pick-submit'
				})
				.appendTo(get_picker_els('.pick-btns'));

				if(pickers[picker.id].translate) {
					$('<div>', {
						class: 'pick-btn pick-btn-lng'
					})
					.appendTo(get_picker_els('.pick-btns'));
				}
				if(pickers[picker.id].large) {
					$('<div>', {
						class: 'pick-btn pick-btn-sz'
					})
					.appendTo(get_picker_els('.pick-btns'));
				}

				if(picker_format=='Y'||picker_format=='m') {
					get_picker_els('.pick-d,.pick-btn-sz').hide();
					picker.element.addClass('picker-tiny');
					if(picker_format=='Y')
						get_picker_els('.pick-m,.pick-btn-lng').hide();
					if(picker_format=='m')
						get_picker_els('.pick-y').hide();
				}

				if(picker_init_set) {
					picker_ctrl = true;
					input_change_value();
				}

				picker = null;

			}

		})
		.focus(function(e){

			e.preventDefault();
			$(this).blur();

			if(picker)
				picker_hide();

			picker = {
				id : $(this).data('id'),
				input : $(this),
				element : $('#'+$(this).data('id'))
			};

			is_fx_mobile();
			picker_offset();
			picker_set();
			picker_show();

			if(picker.element.hasClass('picker-modal'))
				$('body').append('<div class="picker-modal-overlay"></div>')

		});
	};
}(jQuery));

var fakeId = 2;


var scheduledEvent;
var select = document.getElementById("selectEvent");
var output = "";
var container = document.getElementById("findUsers");
(function () {
  if (window.location.href.indexOf("login") === -1) {
    console.log("10");
    fetch("http://localhost:8080/events").then(response => {
      return response.json();
    }).then(data => {
      for (i = 0; i < data.length; i++) {
        var option = document.createElement("option");
        option.value = data[i].id;
        option.innerHTML = data[i].type;
        option.classList.add("hover");
        if(select !=null)
        {

        
        select.appendChild(option);
        }
      }
    })
  }
  if (window.location.href.indexOf("login") === -1) {
    fetch("http://localhost:8080/users").then(response => {
      return response.json();
    }).then(data => {

      for (i = 0; i < data.length; i++) {
        if (idUser != data[i].id) {
          output += `<div class="row wrapper__width justify-content-between align-items-center user">
                     <img src="${data[i].photo}" alt="User" class="wrapper__searchPhoto">
                     <p class="wrapper__fullName">${data[i].firstName} ${data[i].lastName}</p>
                     <input type="checkbox" class="checkbox" name="user" id="${data[i].id}">

                      </div>`;
        }
      }

      if(container !=null)
      {
        container.innerHTML = output;
      }

    })
  }
})()






document.addEventListener('DOMContentLoaded', function () {
  (function () {
    if (window.location.href.indexOf("login") === -1) {
      fetch("http://localhost:8080/schedules/all").then(response => {
        return response.json();
      }).then(data => {
        scheduledEvent = data;
        for (i = 0; i < scheduledEvent.length; i++) {
          calendar.addEvent({
            groupId: scheduledEvent[i].user.id,
            id: scheduledEvent[i].event.id,
            title: scheduledEvent[i].event.type,
            start: moment(new Date(scheduledEvent[i].dateAndTime[0], scheduledEvent[i].dateAndTime[1] - 1, scheduledEvent[i].dateAndTime[2], scheduledEvent[i].dateAndTime[3], scheduledEvent[i].dateAndTime[4])).format("YYYY-MM-DDTHH:mm"),
            end: moment(new Date(scheduledEvent[i].endTime[0], scheduledEvent[i].endTime[1] - 1, scheduledEvent[i].endTime[2], scheduledEvent[i].endTime[3], scheduledEvent[i].endTime[4])).format("YYYY-MM-DDTHH:mm"),
            creatorId: scheduledEvent[i].event.user,
            editable: false
          })
        }
      })
    }

  })();
  setTimeout(function () 
  {
    var preloader = document.getElementById('loader');
    if (preloader != null ) 
    {
      if (!preloader.classList.contains('done')) {
        preloader.classList.add('done');
      }
    }
  }, 1000)
  var calendarEl = document.getElementById('calendar');
  var calendar = new FullCalendar.Calendar(calendarEl, {
    schedulerLicenseKey: 'CC-Attribution-NonCommercial-NoDerivatives',
    // timeZone: 'local',
    initialView: 'dayGridMonth',
    headerToolbar: {
      left: 'prev,next,addEventButton',
      center: 'title',
      right: 'today,timeGridWeek,dayGridMonth,listMonth'
    },
    //    editable: true,
    selectable: true,
    eventStartEditable: true,
    eventDurationEditable: true,
    //    businessHours: {
    //      // days of week. an array of zero-based day of week integers (0=Sunday)
    //      daysOfWeek: [1, 2, 3, 4, 5], // Monday - Thursday
    //
    //      startTime: '07:00', // a start time (10am in this example)
    //      endTime: '18:00', // an end time (6pm in this example)
    //    },
    eventClick: function (info) {
      if (info.event.groupId != idUser) {
        document.getElementById("deleteButton").style.setProperty("display", "none");

      }
      document.getElementById("editButton").style.setProperty("display", "none");
      var a = calendar.getEventById(info.event.id);
      var modalInfo = document.getElementById("infoModal");
      var spanCloseInfo = document.getElementsByClassName("close")[1];
      modalInfo.style.display = "block";
      document.getElementById("infoTitle").innerHTML = `<i class='fas fa-calendar-alt'></i> ${info.event.title}`;
      var infoStr = info.event.start;
      var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      var infoEnd = info.event._instance.range.end;
      var monthStart = months[infoStr.getMonth()];
      var monthEnd = months[infoEnd.getMonth()];
      var dayStart = days[infoStr.getDay()];
      var dayEnd = days[infoEnd.getDay()];
      var minStart = info.event.start.getMinutes();

      if (minStart < 10) {
        minStart = '0' + minStart;
      } else {
        minStart = minStart + '';
      }
      var hoursStart = info.event.start.getHours();

      if (hoursStart < 10) {
        hoursStart = '0' + hoursStart;
      } else {
        hoursStart = hoursStart + '';
      }
      var minEnd = info.event._instance.range.end.getMinutes();

      if (minEnd < 10) {
        minEnd = '0' + minEnd;
      } else {
        minEnd = minEnd + '';
      }
      var hoursEnd = info.event._instance.range.end.getHours();

      if (hoursEnd < 10) {
        hoursEnd = '0' + hoursEnd;
      } else {
        hoursEnd = hoursEnd + '';
      }
      document.getElementById("infoStart").innerHTML = "<span class='wrapper__spanBold'><i class='far fa-clock'></i> Start: <br>Date: </span>" + dayStart + " " + infoStr.getDate() + "/" + monthStart + "/" + infoStr.getFullYear() + "<br> <span class='wrapper__spanBold'>Time: </span>" + hoursStart + ":" + minStart;
      document.getElementById("infoEnd").innerHTML = "<span class='wrapper__spanBold'><i class='far fa-clock'></i> End: <br>Date: </span>" + dayEnd + " " + infoEnd.getDate() + "/" + monthEnd + "/" + infoEnd.getFullYear() + "<br> <span class='wrapper__spanBold'>Time: </span>" + hoursEnd + ":" + minEnd;
      spanCloseInfo.onclick = function () {

        document.getElementById("editForm").reset();
        document.getElementById("edit").style.display = "none";
        document.getElementById("info").style.display = "block";
        modalInfo.style.display = "none";
      };

      document.getElementById("deleteButton").onclick = function () {
        var vreme = '2020-12-13T15:00:00';
        var min = info.event.start.getMinutes();

        if (min < 10) {
          min = '0' + min;
        } else {
          min = min + '';
        }
        var dateStart = info.event.start.toISOString().slice(0, 11) + info.event.start.getHours() + ":" + min + ":00";
        if (window.location.href.indexOf("login") === -1) {
        fetch("http://localhost:8080/schedule", {
          method: "DELETE",
          headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id: info.event.id,
            dateAndTime: dateStart
          })
        }).then(response => {
          return response.text();
        }).then(data => {
          console.log(data);
          console.log(JSON.stringify({
            id: info.event.id,
            dateAndTime: dateStart
          }));
        });
        info.event.remove();
        modalInfo.style.display = "none";
      };
    }
      document.getElementById("editButton").onclick = function () {
        document.getElementById("info").style.display = "none";
        document.getElementById("edit").style.display = "block";
        document.getElementById("editTitle").value = info.event.title;
        var momentStart = info.event.start.getTime();
        var momentStr = moment(momentStart).format("YYYY-MM-DDTHH:mm");
        var momentEnd = info.event._instance.range.end.getTime();
        var momentE = moment(momentEnd).format("YYYY-MM-DDTHH:mm");
        document.getElementById("editStr").value = momentStr;
        console.log(info.event.start.toISOString().slice(0, 16));
        console.log(info.event.start.getTime());
        console.log(info.event.start.toISOString().slice(0, 16));
        console.log(momentStr, momentE);
        document.getElementById("editEnd").value = momentE;
        console.log(calendar.getEvents());

      };



      document.getElementById("editDoneButton").onclick = function () {
        var editedTitle = document.getElementById("editTitle").value;
        var editedStart = document.getElementById("editStr").value;
        var editedEnd = document.getElementById("editEnd").value;

        calendar.getEventById(info.event.id).setProp('title', editedTitle)
        calendar.getEventById(info.event.id).setDates(new Date(editedStart), new Date(editedEnd));
        document.getElementById("editForm").reset();
        document.getElementById("info").style.display = "block";
        document.getElementById("edit").style.display = "none";
        modalInfo.style.display = "none";
      };
    },

    //    events: [{
    //        id: 9,
    //        title: 'Colovic',
    //        start: '2020-11-12',
    //        end: '2020-11-15'
    //      },
    //      {
    //        id: 10,
    //        title: 'Antic',
    //        start: '2020-11-08',
    //        end: '2020-11-10'
    //      }
    //    ],
    customButtons: {
      addEventButton: {
        text: 'Add Event',
        click: function () {
          var modal = document.getElementById("myModal");
          var spanClose = document.getElementsByClassName("close")[0];
          modal.style.display = "block";

          document.getElementById("btnAdd").onclick = function () {

            var checkboxValues = {};
            var checkboxes = document.querySelectorAll('input[name="user"]:checked');
            for (i = 0; i < checkboxes.length; i++) {
              checkboxValues[i] = checkboxes[i].id;
            }
            console.log(checkboxValues);
            var dateStr = document.getElementById("dateStr").value;
            var dateEnd = document.getElementById("dateEnd").value;
            var eventType = document.getElementById("selectEvent");
            eventSelected = eventType.options[eventType.selectedIndex].value;
            selectedType = eventType.options[eventType.selectedIndex].text;
            //            console.log(eventType.options[eventType.selectedIndex]);
            var str = new Date(dateStr);
            console.log(str);
            var end = new Date(dateEnd);
            //            var title = eventTitle;
            var addForm = document.getElementById("addForm");
            addForm.reset();
            if (!isNaN(str.valueOf()) && !isNaN(end.valueOf())) {
              var scheduleStr = moment(str).format("YYYY-MM-DDTHH:mm:ss");
              var scheduleEnd = moment(end).format("YYYY-MM-DDTHH:mm:ss");
              console.log(JSON.stringify({
                user: idUser,
                event: eventSelected,
                dateAndTime: scheduleStr,
                endTime: scheduleEnd,
                users: checkboxValues
              }));

              fetch("http://localhost:8080/schedule", {
                method: "POST",
                headers: {
                  "Accept": "application/json",
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  user: idUser,
                  event: eventSelected,
                  dateAndTime: scheduleStr,
                  endTime: scheduleEnd,
                  users: checkboxValues
                })
              }).then(response => {
                console.log(response);
                return response.text();
              }).then(data => {
                console.log(data);
                calendar.addEvent({
                  groupId: idUser,
                  id: eventSelected,
                  title: selectedType,
                  start: scheduleStr,
                  end: scheduleEnd,
                });
                //                        console.log(JSON.stringify({id: info.event.id, dateAndTime: dateStart}));
              });

              //              calendar.addEvent(obj);
              fakeId++;
              modal.style.display = "none";
            } else {
              alert('Invalid date.');
              modal.style.display = "none";
            }

          };
          spanClose.onclick = function () {
            modal.style.display = "none";
          }

        }
      }

    }
  });

  calendar.render();

});

var idUser;
(function () {
  console.log(document.cookie);
  idUser = document.cookie.slice(7);
  if (window.location.href.indexOf("login") === -1) {
    fetch(`http://localhost:8080/users/${idUser}`).then(response => {
      console.log(response);
      return response.json();
    }).then(data => {
      document.getElementById("headerName").innerText = data.firstName + " " + data.lastName;
      document.getElementById("headerNameSmall").innerText = data.firstName;
      document.getElementById("userImage").src = data.photo;
      document.getElementById("userImageSmall").src = data.photo;
    })
  }
})();



window.onload = function () {
  document.getElementById("edit").style.display = "none";
}

let search = document.getElementById('search');
let usersList = document.getElementById('users');
// Filter Items

if (search != null) {


  search.addEventListener('keyup', (e) => {
    const text = e.target.value.toLowerCase();
    const users = usersList.getElementsByClassName('user');
    Array.from(users).forEach((user) => {
      let userName = user.firstElementChild.nextElementSibling.textContent;


      if (userName.toLowerCase().indexOf(text) != -1) {
        user.style.display = 'flex';
        user.display = 'block';
      } else {
        user.style.display = 'none';

      }
    });
  });
}

//var triggered = false;
//document.getElementById("selectAll").onclick = function() {
//    var selectAll = document.querySelectorAll('input[name="user"]');
//    if(!triggered){
//    for(i=0;i<selectAll.length;i++) {
//        selectAll[i].checked = true;
//        triggered = true;
//    }} else {
//    for(i=0;i<selectAll.length;i++) {
//            selectAll[i].checked = false;
//            triggered = false;
//        }
//    }
//}
var isEnabled = true;
var isDisabled = false;



var selectAll = document.getElementById("selectall");
var deselectAll = document.getElementById("deselectall");
var selectAllCheckBox = document.getElementsByClassName("checkbox");

if (selectAll != null) {


  selectAll.onclick = function () {
    for (var i = 0; i < selectAllCheckBox.length; i++) {
      selectAllCheckBox[i].checked = true
    }
    selectAll.style.display = "none";
    deselectAll.style.display = "flex";
    selectAll.classList.remove("d-flex");
  };
}
if (deselectAll != null) {
  deselectAll.onclick = function () {
    for (var i = 0; i < selectAllCheckBox.length; i++) {
      selectAllCheckBox[i].checked = false;
    }
    selectAll.style.display = "flex";
    deselectAll.style.display = "none";
  };
}
if(FullCalendar != undefined)
{


[].push.apply(FullCalendar.globalLocales, function () {
    "use strict";
    return [{
        code: "af",
        week: {
            dow: 1,
            doy: 4
        },
        buttonText: {
            prev: "Vorige",
            next: "Volgende",
            today: "Vandag",
            year: "Jaar",
            month: "Maand",
            week: "Week",
            day: "Dag",
            list: "Agenda"
        },
        allDayText: "Heeldag",
        moreLinkText: "Addisionele",
        noEventsText: "Daar is geen gebeurtenisse nie"
    }, {
        code: "ar-dz",
        week: {
            dow: 0,
            doy: 4
        },
        direction: "rtl",
        buttonText: {
            prev: "السابق",
            next: "التالي",
            today: "اليوم",
            month: "شهر",
            week: "أسبوع",
            day: "يوم",
            list: "أجندة"
        },
        weekText: "أسبوع",
        allDayText: "اليوم كله",
        moreLinkText: "أخرى",
        noEventsText: "أي أحداث لعرض"
    }, {
        code: "ar-kw",
        week: {
            dow: 0,
            doy: 12
        },
        direction: "rtl",
        buttonText: {
            prev: "السابق",
            next: "التالي",
            today: "اليوم",
            month: "شهر",
            week: "أسبوع",
            day: "يوم",
            list: "أجندة"
        },
        weekText: "أسبوع",
        allDayText: "اليوم كله",
        moreLinkText: "أخرى",
        noEventsText: "أي أحداث لعرض"
    }, {
        code: "ar-ly",
        week: {
            dow: 6,
            doy: 12
        },
        direction: "rtl",
        buttonText: {
            prev: "السابق",
            next: "التالي",
            today: "اليوم",
            month: "شهر",
            week: "أسبوع",
            day: "يوم",
            list: "أجندة"
        },
        weekText: "أسبوع",
        allDayText: "اليوم كله",
        moreLinkText: "أخرى",
        noEventsText: "أي أحداث لعرض"
    }, {
        code: "ar-ma",
        week: {
            dow: 6,
            doy: 12
        },
        direction: "rtl",
        buttonText: {
            prev: "السابق",
            next: "التالي",
            today: "اليوم",
            month: "شهر",
            week: "أسبوع",
            day: "يوم",
            list: "أجندة"
        },
        weekText: "أسبوع",
        allDayText: "اليوم كله",
        moreLinkText: "أخرى",
        noEventsText: "أي أحداث لعرض"
    }, {
        code: "ar-sa",
        week: {
            dow: 0,
            doy: 6
        },
        direction: "rtl",
        buttonText: {
            prev: "السابق",
            next: "التالي",
            today: "اليوم",
            month: "شهر",
            week: "أسبوع",
            day: "يوم",
            list: "أجندة"
        },
        weekText: "أسبوع",
        allDayText: "اليوم كله",
        moreLinkText: "أخرى",
        noEventsText: "أي أحداث لعرض"
    }, {
        code: "ar-tn",
        week: {
            dow: 1,
            doy: 4
        },
        direction: "rtl",
        buttonText: {
            prev: "السابق",
            next: "التالي",
            today: "اليوم",
            month: "شهر",
            week: "أسبوع",
            day: "يوم",
            list: "أجندة"
        },
        weekText: "أسبوع",
        allDayText: "اليوم كله",
        moreLinkText: "أخرى",
        noEventsText: "أي أحداث لعرض"
    }, {
        code: "ar",
        week: {
            dow: 6,
            doy: 12
        },
        direction: "rtl",
        buttonText: {
            prev: "السابق",
            next: "التالي",
            today: "اليوم",
            month: "شهر",
            week: "أسبوع",
            day: "يوم",
            list: "أجندة"
        },
        weekText: "أسبوع",
        allDayText: "اليوم كله",
        moreLinkText: "أخرى",
        noEventsText: "أي أحداث لعرض"
    }, {
        code: "az",
        week: {
            dow: 1,
            doy: 4
        },
        buttonText: {
            prev: "Əvvəl",
            next: "Sonra",
            today: "Bu Gün",
            month: "Ay",
            week: "Həftə",
            day: "Gün",
            list: "Gündəm"
        },
        weekText: "Həftə",
        allDayText: "Bütün Gün",
        moreLinkText: e => "+ daha çox " + e,
        noEventsText: "Göstərmək üçün hadisə yoxdur"
    }, {
        code: "bg",
        week: {
            dow: 1,
            doy: 7
        },
        buttonText: {
            prev: "назад",
            next: "напред",
            today: "днес",
            month: "Месец",
            week: "Седмица",
            day: "Ден",
            list: "График"
        },
        allDayText: "Цял ден",
        moreLinkText: e => "+още " + e,
        noEventsText: "Няма събития за показване"
    }, {
        code: "bs",
        week: {
            dow: 1,
            doy: 7
        },
        buttonText: {
            prev: "Prošli",
            next: "Sljedeći",
            today: "Danas",
            month: "Mjesec",
            week: "Sedmica",
            day: "Dan",
            list: "Raspored"
        },
        weekText: "Sed",
        allDayText: "Cijeli dan",
        moreLinkText: e => "+ još " + e,
        noEventsText: "Nema događaja za prikazivanje"
    }, {
        code: "ca",
        week: {
            dow: 1,
            doy: 4
        },
        buttonText: {
            prev: "Anterior",
            next: "Següent",
            today: "Avui",
            month: "Mes",
            week: "Setmana",
            day: "Dia",
            list: "Agenda"
        },
        weekText: "Set",
        allDayText: "Tot el dia",
        moreLinkText: "més",
        noEventsText: "No hi ha esdeveniments per mostrar"
    }, {
        code: "cs",
        week: {
            dow: 1,
            doy: 4
        },
        buttonText: {
            prev: "Dříve",
            next: "Později",
            today: "Nyní",
            month: "Měsíc",
            week: "Týden",
            day: "Den",
            list: "Agenda"
        },
        weekText: "Týd",
        allDayText: "Celý den",
        moreLinkText: e => "+další: " + e,
        noEventsText: "Žádné akce k zobrazení"
    }, {
        code: "da",
        week: {
            dow: 1,
            doy: 4
        },
        buttonText: {
            prev: "Forrige",
            next: "Næste",
            today: "I dag",
            month: "Måned",
            week: "Uge",
            day: "Dag",
            list: "Agenda"
        },
        weekText: "Uge",
        allDayText: "Hele dagen",
        moreLinkText: "flere",
        noEventsText: "Ingen arrangementer at vise"
    }, {
        code: "de",
        week: {
            dow: 1,
            doy: 4
        },
        buttonText: {
            prev: "Zurück",
            next: "Vor",
            today: "Heute",
            year: "Jahr",
            month: "Monat",
            week: "Woche",
            day: "Tag",
            list: "Terminübersicht"
        },
        weekText: "KW",
        allDayText: "Ganztägig",
        moreLinkText: e => "+ weitere " + e,
        noEventsText: "Keine Ereignisse anzuzeigen"
    }, {
        code: "el",
        week: {
            dow: 1,
            doy: 4
        },
        buttonText: {
            prev: "Προηγούμενος",
            next: "Επόμενος",
            today: "Σήμερα",
            month: "Μήνας",
            week: "Εβδομάδα",
            day: "Ημέρα",
            list: "Ατζέντα"
        },
        weekText: "Εβδ",
        allDayText: "Ολοήμερο",
        moreLinkText: "περισσότερα",
        noEventsText: "Δεν υπάρχουν γεγονότα προς εμφάνιση"
    }, {
        code: "en-au",
        week: {
            dow: 1,
            doy: 4
        }
    }, {
        code: "en-gb",
        week: {
            dow: 1,
            doy: 4
        }
    }, {
        code: "en-nz",
        week: {
            dow: 1,
            doy: 4
        }
    }, {
        code: "es",
        week: {
            dow: 0,
            doy: 6
        },
        buttonText: {
            prev: "Ant",
            next: "Sig",
            today: "Hoy",
            month: "Mes",
            week: "Semana",
            day: "Día",
            list: "Agenda"
        },
        weekText: "Sm",
        allDayText: "Todo el día",
        moreLinkText: "más",
        noEventsText: "No hay eventos para mostrar"
    }, {
        code: "es",
        week: {
            dow: 1,
            doy: 4
        },
        buttonText: {
            prev: "Ant",
            next: "Sig",
            today: "Hoy",
            month: "Mes",
            week: "Semana",
            day: "Día",
            list: "Agenda"
        },
        weekText: "Sm",
        allDayText: "Todo el día",
        moreLinkText: "más",
        noEventsText: "No hay eventos para mostrar"
    }, {
        code: "et",
        week: {
            dow: 1,
            doy: 4
        },
        buttonText: {
            prev: "Eelnev",
            next: "Järgnev",
            today: "Täna",
            month: "Kuu",
            week: "Nädal",
            day: "Päev",
            list: "Päevakord"
        },
        weekText: "näd",
        allDayText: "Kogu päev",
        moreLinkText: e => "+ veel " + e,
        noEventsText: "Kuvamiseks puuduvad sündmused"
    }, {
        code: "eu",
        week: {
            dow: 1,
            doy: 7
        },
        buttonText: {
            prev: "Aur",
            next: "Hur",
            today: "Gaur",
            month: "Hilabetea",
            week: "Astea",
            day: "Eguna",
            list: "Agenda"
        },
        weekText: "As",
        allDayText: "Egun osoa",
        moreLinkText: "gehiago",
        noEventsText: "Ez dago ekitaldirik erakusteko"
    }, {
        code: "fa",
        week: {
            dow: 6,
            doy: 12
        },
        direction: "rtl",
        buttonText: {
            prev: "قبلی",
            next: "بعدی",
            today: "امروز",
            month: "ماه",
            week: "هفته",
            day: "روز",
            list: "برنامه"
        },
        weekText: "هف",
        allDayText: "تمام روز",
        moreLinkText: e => "بیش از " + e,
        noEventsText: "هیچ رویدادی به نمایش"
    }, {
        code: "fi",
        week: {
            dow: 1,
            doy: 4
        },
        buttonText: {
            prev: "Edellinen",
            next: "Seuraava",
            today: "Tänään",
            month: "Kuukausi",
            week: "Viikko",
            day: "Päivä",
            list: "Tapahtumat"
        },
        weekText: "Vk",
        allDayText: "Koko päivä",
        moreLinkText: "lisää",
        noEventsText: "Ei näytettäviä tapahtumia"
    }, {
        code: "fr",
        buttonText: {
            prev: "Précédent",
            next: "Suivant",
            today: "Aujourd'hui",
            year: "Année",
            month: "Mois",
            week: "Semaine",
            day: "Jour",
            list: "Mon planning"
        },
        weekText: "Sem.",
        allDayText: "Toute la journée",
        moreLinkText: "en plus",
        noEventsText: "Aucun événement à afficher"
    }, {
        code: "fr-ch",
        week: {
            dow: 1,
            doy: 4
        },
        buttonText: {
            prev: "Précédent",
            next: "Suivant",
            today: "Courant",
            year: "Année",
            month: "Mois",
            week: "Semaine",
            day: "Jour",
            list: "Mon planning"
        },
        weekText: "Sm",
        allDayText: "Toute la journée",
        moreLinkText: "en plus",
        noEventsText: "Aucun événement à afficher"
    }, {
        code: "fr",
        week: {
            dow: 1,
            doy: 4
        },
        buttonText: {
            prev: "Précédent",
            next: "Suivant",
            today: "Aujourd'hui",
            year: "Année",
            month: "Mois",
            week: "Semaine",
            day: "Jour",
            list: "Planning"
        },
        weekText: "Sem.",
        allDayText: "Toute la journée",
        moreLinkText: "en plus",
        noEventsText: "Aucun événement à afficher"
    }, {
        code: "gl",
        week: {
            dow: 1,
            doy: 4
        },
        buttonText: {
            prev: "Ant",
            next: "Seg",
            today: "Hoxe",
            month: "Mes",
            week: "Semana",
            day: "Día",
            list: "Axenda"
        },
        weekText: "Sm",
        allDayText: "Todo o día",
        moreLinkText: "máis",
        noEventsText: "Non hai eventos para amosar"
    }, {
        code: "he",
        direction: "rtl",
        buttonText: {
            prev: "הקודם",
            next: "הבא",
            today: "היום",
            month: "חודש",
            week: "שבוע",
            day: "יום",
            list: "סדר יום"
        },
        allDayText: "כל היום",
        moreLinkText: "אחר",
        noEventsText: "אין אירועים להצגה",
        weekText: "שבוע"
    }, {
        code: "hi",
        week: {
            dow: 0,
            doy: 6
        },
        buttonText: {
            prev: "पिछला",
            next: "अगला",
            today: "आज",
            month: "महीना",
            week: "सप्ताह",
            day: "दिन",
            list: "कार्यसूची"
        },
        weekText: "हफ्ता",
        allDayText: "सभी दिन",
        moreLinkText: e => "+अधिक " + e,
        noEventsText: "कोई घटनाओं को प्रदर्शित करने के लिए"
    }, {
        code: "hr",
        week: {
            dow: 1,
            doy: 7
        },
        buttonText: {
            prev: "Prijašnji",
            next: "Sljedeći",
            today: "Danas",
            month: "Mjesec",
            week: "Tjedan",
            day: "Dan",
            list: "Raspored"
        },
        weekText: "Tje",
        allDayText: "Cijeli dan",
        moreLinkText: e => "+ još " + e,
        noEventsText: "Nema događaja za prikaz"
    }, {
        code: "hu",
        week: {
            dow: 1,
            doy: 4
        },
        buttonText: {
            prev: "vissza",
            next: "előre",
            today: "ma",
            month: "Hónap",
            week: "Hét",
            day: "Nap",
            list: "Napló"
        },
        weekText: "Hét",
        allDayText: "Egész nap",
        moreLinkText: "további",
        noEventsText: "Nincs megjeleníthető esemény"
    }, {
        code: "id",
        week: {
            dow: 1,
            doy: 7
        },
        buttonText: {
            prev: "mundur",
            next: "maju",
            today: "hari ini",
            month: "Bulan",
            week: "Minggu",
            day: "Hari",
            list: "Agenda"
        },
        weekText: "Mg",
        allDayText: "Sehari penuh",
        moreLinkText: "lebih",
        noEventsText: "Tidak ada acara untuk ditampilkan"
    }, {
        code: "is",
        week: {
            dow: 1,
            doy: 4
        },
        buttonText: {
            prev: "Fyrri",
            next: "Næsti",
            today: "Í dag",
            month: "Mánuður",
            week: "Vika",
            day: "Dagur",
            list: "Dagskrá"
        },
        weekText: "Vika",
        allDayText: "Allan daginn",
        moreLinkText: "meira",
        noEventsText: "Engir viðburðir til að sýna"
    }, {
        code: "it",
        week: {
            dow: 1,
            doy: 4
        },
        buttonText: {
            prev: "Prec",
            next: "Succ",
            today: "Oggi",
            month: "Mese",
            week: "Settimana",
            day: "Giorno",
            list: "Agenda"
        },
        weekText: "Sm",
        allDayText: "Tutto il giorno",
        moreLinkText: e => "+altri " + e,
        noEventsText: "Non ci sono eventi da visualizzare"
    }, {
        code: "ja",
        buttonText: {
            prev: "前",
            next: "次",
            today: "今日",
            month: "月",
            week: "週",
            day: "日",
            list: "予定リスト"
        },
        weekText: "週",
        allDayText: "終日",
        moreLinkText: e => "他 " + e + " 件",
        noEventsText: "表示する予定はありません"
    }, {
        code: "ka",
        week: {
            dow: 1,
            doy: 7
        },
        buttonText: {
            prev: "წინა",
            next: "შემდეგი",
            today: "დღეს",
            month: "თვე",
            week: "კვირა",
            day: "დღე",
            list: "დღის წესრიგი"
        },
        weekText: "კვ",
        allDayText: "მთელი დღე",
        moreLinkText: e => "+ კიდევ " + e,
        noEventsText: "ღონისძიებები არ არის"
    }, {
        code: "kk",
        week: {
            dow: 1,
            doy: 7
        },
        buttonText: {
            prev: "Алдыңғы",
            next: "Келесі",
            today: "Бүгін",
            month: "Ай",
            week: "Апта",
            day: "Күн",
            list: "Күн тәртібі"
        },
        weekText: "Не",
        allDayText: "Күні бойы",
        moreLinkText: e => "+ тағы " + e,
        noEventsText: "Көрсету үшін оқиғалар жоқ"
    }, {
        code: "ko",
        buttonText: {
            prev: "이전달",
            next: "다음달",
            today: "오늘",
            month: "월",
            week: "주",
            day: "일",
            list: "일정목록"
        },
        weekText: "주",
        allDayText: "종일",
        moreLinkText: "개",
        noEventsText: "일정이 없습니다"
    }, {
        code: "lb",
        week: {
            dow: 1,
            doy: 4
        },
        buttonText: {
            prev: "Zréck",
            next: "Weider",
            today: "Haut",
            month: "Mount",
            week: "Woch",
            day: "Dag",
            list: "Terminiwwersiicht"
        },
        weekText: "W",
        allDayText: "Ganzen Dag",
        moreLinkText: "méi",
        noEventsText: "Nee Evenementer ze affichéieren"
    }, {
        code: "lt",
        week: {
            dow: 1,
            doy: 4
        },
        buttonText: {
            prev: "Atgal",
            next: "Pirmyn",
            today: "Šiandien",
            month: "Mėnuo",
            week: "Savaitė",
            day: "Diena",
            list: "Darbotvarkė"
        },
        weekText: "SAV",
        allDayText: "Visą dieną",
        moreLinkText: "daugiau",
        noEventsText: "Nėra įvykių rodyti"
    }, {
        code: "lv",
        week: {
            dow: 1,
            doy: 4
        },
        buttonText: {
            prev: "Iepr.",
            next: "Nāk.",
            today: "Šodien",
            month: "Mēnesis",
            week: "Nedēļa",
            day: "Diena",
            list: "Dienas kārtība"
        },
        weekText: "Ned.",
        allDayText: "Visu dienu",
        moreLinkText: e => "+vēl " + e,
        noEventsText: "Nav notikumu"
    }, {
        code: "mk",
        buttonText: {
            prev: "претходно",
            next: "следно",
            today: "Денес",
            month: "Месец",
            week: "Недела",
            day: "Ден",
            list: "График"
        },
        weekText: "Сед",
        allDayText: "Цел ден",
        moreLinkText: e => "+повеќе " + e,
        noEventsText: "Нема настани за прикажување"
    }, {
        code: "ms",
        week: {
            dow: 1,
            doy: 7
        },
        buttonText: {
            prev: "Sebelum",
            next: "Selepas",
            today: "hari ini",
            month: "Bulan",
            week: "Minggu",
            day: "Hari",
            list: "Agenda"
        },
        weekText: "Mg",
        allDayText: "Sepanjang hari",
        moreLinkText: e => "masih ada " + e + " acara",
        noEventsText: "Tiada peristiwa untuk dipaparkan"
    }, {
        code: "nb",
        week: {
            dow: 1,
            doy: 4
        },
        buttonText: {
            prev: "Forrige",
            next: "Neste",
            today: "I dag",
            month: "Måned",
            week: "Uke",
            day: "Dag",
            list: "Agenda"
        },
        weekText: "Uke",
        allDayText: "Hele dagen",
        moreLinkText: "til",
        noEventsText: "Ingen hendelser å vise"
    }, {
        code: "ne",
        week: {
            dow: 7,
            doy: 1
        },
        buttonText: {
            prev: "अघिल्लो",
            next: "अर्को",
            today: "आज",
            month: "महिना",
            week: "हप्ता",
            day: "दिन",
            list: "सूची"
        },
        weekText: "हप्ता",
        allDayText: "दिनभरि",
        moreLinkText: "थप लिंक",
        noEventsText: "देखाउनको लागि कुनै घटनाहरू छैनन्"
    }, {
        code: "nl",
        week: {
            dow: 1,
            doy: 4
        },
        buttonText: {
            prev: "Voorgaand",
            next: "Volgende",
            today: "Vandaag",
            year: "Jaar",
            month: "Maand",
            week: "Week",
            day: "Dag",
            list: "Agenda"
        },
        allDayText: "Hele dag",
        moreLinkText: "extra",
        noEventsText: "Geen evenementen om te laten zien"
    }, {
        code: "nn",
        week: {
            dow: 1,
            doy: 4
        },
        buttonText: {
            prev: "Førre",
            next: "Neste",
            today: "I dag",
            month: "Månad",
            week: "Veke",
            day: "Dag",
            list: "Agenda"
        },
        weekText: "Veke",
        allDayText: "Heile dagen",
        moreLinkText: "til",
        noEventsText: "Ingen hendelser å vise"
    }, {
        code: "pl",
        week: {
            dow: 1,
            doy: 4
        },
        buttonText: {
            prev: "Poprzedni",
            next: "Następny",
            today: "Dziś",
            month: "Miesiąc",
            week: "Tydzień",
            day: "Dzień",
            list: "Plan dnia"
        },
        weekText: "Tydz",
        allDayText: "Cały dzień",
        moreLinkText: "więcej",
        noEventsText: "Brak wydarzeń do wyświetlenia"
    }, {
        code: "pt-br",
        buttonText: {
            prev: "Anterior",
            next: "Próximo",
            today: "Hoje",
            month: "Mês",
            week: "Semana",
            day: "Dia",
            list: "Lista"
        },
        weekText: "Sm",
        allDayText: "dia inteiro",
        moreLinkText: e => "mais +" + e,
        noEventsText: "Não há eventos para mostrar"
    }, {
        code: "pt",
        week: {
            dow: 1,
            doy: 4
        },
        buttonText: {
            prev: "Anterior",
            next: "Seguinte",
            today: "Hoje",
            month: "Mês",
            week: "Semana",
            day: "Dia",
            list: "Agenda"
        },
        weekText: "Sem",
        allDayText: "Todo o dia",
        moreLinkText: "mais",
        noEventsText: "Não há eventos para mostrar"
    }, {
        code: "ro",
        week: {
            dow: 1,
            doy: 7
        },
        buttonText: {
            prev: "precedentă",
            next: "următoare",
            today: "Azi",
            month: "Lună",
            week: "Săptămână",
            day: "Zi",
            list: "Agendă"
        },
        weekText: "Săpt",
        allDayText: "Toată ziua",
        moreLinkText: e => "+alte " + e,
        noEventsText: "Nu există evenimente de afișat"
    }, {
        code: "ru",
        week: {
            dow: 1,
            doy: 4
        },
        buttonText: {
            prev: "Пред",
            next: "След",
            today: "Сегодня",
            month: "Месяц",
            week: "Неделя",
            day: "День",
            list: "Повестка дня"
        },
        weekText: "Нед",
        allDayText: "Весь день",
        moreLinkText: e => "+ ещё " + e,
        noEventsText: "Нет событий для отображения"
    }, {
        code: "sk",
        week: {
            dow: 1,
            doy: 4
        },
        buttonText: {
            prev: "Predchádzajúci",
            next: "Nasledujúci",
            today: "Dnes",
            month: "Mesiac",
            week: "Týždeň",
            day: "Deň",
            list: "Rozvrh"
        },
        weekText: "Ty",
        allDayText: "Celý deň",
        moreLinkText: e => "+ďalšie: " + e,
        noEventsText: "Žiadne akcie na zobrazenie"
    }, {
        code: "sl",
        week: {
            dow: 1,
            doy: 7
        },
        buttonText: {
            prev: "Prejšnji",
            next: "Naslednji",
            today: "Trenutni",
            month: "Mesec",
            week: "Teden",
            day: "Dan",
            list: "Dnevni red"
        },
        weekText: "Teden",
        allDayText: "Ves dan",
        moreLinkText: "več",
        noEventsText: "Ni dogodkov za prikaz"
    }, {
        code: "sq",
        week: {
            dow: 1,
            doy: 4
        },
        buttonText: {
            prev: "mbrapa",
            next: "Përpara",
            today: "sot",
            month: "Muaj",
            week: "Javë",
            day: "Ditë",
            list: "Listë"
        },
        weekText: "Ja",
        allDayText: "Gjithë ditën",
        moreLinkText: e => "+më tepër " + e,
        noEventsText: "Nuk ka evente për të shfaqur"
    }, {
        code: "sr-cyrl",
        week: {
            dow: 1,
            doy: 7
        },
        buttonText: {
            prev: "Претходна",
            next: "следећи",
            today: "Данас",
            month: "Месец",
            week: "Недеља",
            day: "Дан",
            list: "Планер"
        },
        weekText: "Сед",
        allDayText: "Цео дан",
        moreLinkText: e => "+ још " + e,
        noEventsText: "Нема догађаја за приказ"
    }, {
        code: "sr",
        week: {
            dow: 1,
            doy: 7
        },
        buttonText: {
            prev: "Prethodna",
            next: "Sledeći",
            today: "Danas",
            month: "Mеsеc",
            week: "Nеdеlja",
            day: "Dan",
            list: "Planеr"
        },
        weekText: "Sed",
        allDayText: "Cеo dan",
        moreLinkText: e => "+ još " + e,
        noEventsText: "Nеma događaja za prikaz"
    }, {
        code: "sv",
        week: {
            dow: 1,
            doy: 4
        },
        buttonText: {
            prev: "Förra",
            next: "Nästa",
            today: "Idag",
            month: "Månad",
            week: "Vecka",
            day: "Dag",
            list: "Program"
        },
        weekText: "v.",
        allDayText: "Heldag",
        moreLinkText: "till",
        noEventsText: "Inga händelser att visa"
    }, {
        code: "th",
        week: {
            dow: 1,
            doy: 4
        },
        buttonText: {
            prev: "ก่อนหน้า",
            next: "ถัดไป",
            prevYear: "ปีก่อนหน้า",
            nextYear: "ปีถัดไป",
            year: "ปี",
            today: "วันนี้",
            month: "เดือน",
            week: "สัปดาห์",
            day: "วัน",
            list: "กำหนดการ"
        },
        weekText: "สัปดาห์",
        allDayText: "ตลอดวัน",
        moreLinkText: "เพิ่มเติม",
        noEventsText: "ไม่มีกิจกรรมที่จะแสดง"
    }, {
        code: "tr",
        week: {
            dow: 1,
            doy: 7
        },
        buttonText: {
            prev: "geri",
            next: "ileri",
            today: "bugün",
            month: "Ay",
            week: "Hafta",
            day: "Gün",
            list: "Ajanda"
        },
        weekText: "Hf",
        allDayText: "Tüm gün",
        moreLinkText: "daha fazla",
        noEventsText: "Gösterilecek etkinlik yok"
    }, {
        code: "ug",
        buttonText: {
            month: "ئاي",
            week: "ھەپتە",
            day: "كۈن",
            list: "كۈنتەرتىپ"
        },
        allDayText: "پۈتۈن كۈن"
    }, {
        code: "uk",
        week: {
            dow: 1,
            doy: 7
        },
        buttonText: {
            prev: "Попередній",
            next: "далі",
            today: "Сьогодні",
            month: "Місяць",
            week: "Тиждень",
            day: "День",
            list: "Порядок денний"
        },
        weekText: "Тиж",
        allDayText: "Увесь день",
        moreLinkText: e => "+ще " + e + "...",
        noEventsText: "Немає подій для відображення"
    }, {
        code: "uz",
        buttonText: {
            month: "Oy",
            week: "Xafta",
            day: "Kun",
            list: "Kun tartibi"
        },
        allDayText: "Kun bo'yi",
        moreLinkText: e => "+ yana " + e,
        noEventsText: "Ko'rsatish uchun voqealar yo'q"
    }, {
        code: "vi",
        week: {
            dow: 1,
            doy: 4
        },
        buttonText: {
            prev: "Trước",
            next: "Tiếp",
            today: "Hôm nay",
            month: "Tháng",
            week: "Tuần",
            day: "Ngày",
            list: "Lịch biểu"
        },
        weekText: "Tu",
        allDayText: "Cả ngày",
        moreLinkText: e => "+ thêm " + e,
        noEventsText: "Không có sự kiện để hiển thị"
    }, {
        code: "zh-cn",
        week: {
            dow: 1,
            doy: 4
        },
        buttonText: {
            prev: "上月",
            next: "下月",
            today: "今天",
            month: "月",
            week: "周",
            day: "日",
            list: "日程"
        },
        weekText: "周",
        allDayText: "全天",
        moreLinkText: e => "另外 " + e + " 个",
        noEventsText: "没有事件显示"
    }, {
        code: "zh-tw",
        buttonText: {
            prev: "上月",
            next: "下月",
            today: "今天",
            month: "月",
            week: "週",
            day: "天",
            list: "活動列表"
        },
        weekText: "周",
        allDayText: "整天",
        moreLinkText: "顯示更多",
        noEventsText: "没有任何活動"
    }]
}());
}
/*!
FullCalendar Scheduler v5.3.2
Docs & License: https://fullcalendar.io/scheduler
(c) 2020 Adam Shaw
*/
var FullCalendar=function(e){"use strict";var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(e,n)};function n(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}var r=function(){return(r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};function o(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var r=Array(e),o=0;for(t=0;t<n;t++)for(var i=arguments[t],a=0,s=i.length;a<s;a++,o++)r[o]=i[a];return r}var i,a,s,l,u,c,d={},p=[],f=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function h(e,t){for(var n in t)e[n]=t[n];return e}function g(e){var t=e.parentNode;t&&t.removeChild(e)}function v(e,t,n){var r,o,i,a=arguments,s={};for(i in t)"key"==i?r=t[i]:"ref"==i?o=t[i]:s[i]=t[i];if(arguments.length>3)for(n=[n],i=3;i<arguments.length;i++)n.push(a[i]);if(null!=n&&(s.children=n),"function"==typeof e&&null!=e.defaultProps)for(i in e.defaultProps)void 0===s[i]&&(s[i]=e.defaultProps[i]);return m(e,s,r,o,null)}function m(e,t,n,r,o){var a={type:e,props:t,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:o};return null==o&&(a.__v=a),null!=i.vnode&&i.vnode(a),a}function y(e){return e.children}function S(e,t){this.props=e,this.context=t}function E(e,t){if(null==t)return e.__?E(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e)return n.__e;return"function"==typeof e.type?E(e):null}function C(e){var t,n;if(null!=(e=e.__)&&null!=e.__c){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e){e.__e=e.__c.base=n.__e;break}return C(e)}}function b(e){(!e.__d&&(e.__d=!0)&&a.push(e)&&!D.__r++||l!==i.debounceRendering)&&((l=i.debounceRendering)||s)(D)}function D(){for(var e;D.__r=a.length;)e=a.sort(function(e,t){return e.__v.__b-t.__v.__b}),a=[],e.some(function(e){var t,n,r,o,i,a,s;e.__d&&(a=(i=(t=e).__v).__e,(s=t.__P)&&(n=[],(r=h({},i)).__v=r,o=I(s,i,r,t.__n,void 0!==s.ownerSVGElement,null!=i.__h?[a]:null,n,null==a?E(i):a,i.__h),_(n,i),o!=a&&C(i)))})}function R(e,t,n,r,o,i,a,s,l,u){var c,f,h,v,S,C,b,D=r&&r.__k||p,R=D.length;for(l==d&&(l=null!=a?a[0]:R?E(r,0):null),n.__k=[],c=0;c<t.length;c++)if(null!=(v=n.__k[c]=null==(v=t[c])||"boolean"==typeof v?null:"string"==typeof v||"number"==typeof v?m(null,v,null,null,v):Array.isArray(v)?m(y,{children:v},null,null,null):null!=v.__e||null!=v.__c?m(v.type,v.props,v.key,null,v.__v):v)){if(v.__=n,v.__b=n.__b+1,null===(h=D[c])||h&&v.key==h.key&&v.type===h.type)D[c]=void 0;else for(f=0;f<R;f++){if((h=D[f])&&v.key==h.key&&v.type===h.type){D[f]=void 0;break}h=null}S=I(e,v,h=h||d,o,i,a,s,l,u),(f=v.ref)&&h.ref!=f&&(b||(b=[]),h.ref&&b.push(h.ref,null,v),b.push(f,v.__c||S,v)),null!=S?(null==C&&(C=S),l=w(e,v,h,D,a,S,l),u||"option"!=n.type?"function"==typeof n.type&&(n.__d=l):e.value=""):l&&h.__e==l&&l.parentNode!=e&&(l=E(h))}if(n.__e=C,null!=a&&"function"!=typeof n.type)for(c=a.length;c--;)null!=a[c]&&g(a[c]);for(c=R;c--;)null!=D[c]&&O(D[c],D[c]);if(b)for(c=0;c<b.length;c++)H(b[c],b[++c],b[++c])}function w(e,t,n,r,o,i,a){var s,l,u;if(void 0!==t.__d)s=t.__d,t.__d=void 0;else if(o==n||i!=a||null==i.parentNode)e:if(null==a||a.parentNode!==e)e.appendChild(i),s=null;else{for(l=a,u=0;(l=l.nextSibling)&&u<r.length;u+=2)if(l==i)break e;e.insertBefore(i,a),s=a}return void 0!==s?s:i.nextSibling}function T(e,t,n){"-"===t[0]?e.setProperty(t,n):e[t]=null==n?"":"number"!=typeof n||f.test(t)?n:n+"px"}function x(e,t,n,r,o){var i,a,s;if(o&&"className"==t&&(t="class"),"style"===t)if("string"==typeof n)e.style.cssText=n;else{if("string"==typeof r&&(e.style.cssText=r=""),r)for(t in r)n&&t in n||T(e.style,t,"");if(n)for(t in n)r&&n[t]===r[t]||T(e.style,t,n[t])}else"o"===t[0]&&"n"===t[1]?(i=t!==(t=t.replace(/Capture$/,"")),(a=t.toLowerCase())in e&&(t=a),t=t.slice(2),e.l||(e.l={}),e.l[t+i]=n,s=i?k:M,n?r||e.addEventListener(t,s,i):e.removeEventListener(t,s,i)):"list"!==t&&"tagName"!==t&&"form"!==t&&"type"!==t&&"size"!==t&&"download"!==t&&"href"!==t&&!o&&t in e?e[t]=null==n?"":n:"function"!=typeof n&&"dangerouslySetInnerHTML"!==t&&(t!==(t=t.replace(/xlink:?/,""))?null==n||!1===n?e.removeAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase()):e.setAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase(),n):null==n||!1===n&&!/^ar/.test(t)?e.removeAttribute(t):e.setAttribute(t,n))}function M(e){this.l[e.type+!1](i.event?i.event(e):e)}function k(e){this.l[e.type+!0](i.event?i.event(e):e)}function P(e,t,n){var r,o;for(r=0;r<e.__k.length;r++)(o=e.__k[r])&&(o.__=e,o.__e&&("function"==typeof o.type&&o.__k.length>1&&P(o,t,n),t=w(n,o,o,e.__k,null,o.__e,t),"function"==typeof e.type&&(e.__d=t)))}function I(e,t,n,r,o,a,s,l,u){var c,d,p,f,g,v,m,E,C,b,D,w=t.type;if(void 0!==t.constructor)return null;null!=n.__h&&(u=n.__h,l=t.__e=n.__e,t.__h=null,a=[l]),(c=i.__b)&&c(t);try{e:if("function"==typeof w){if(E=t.props,C=(c=w.contextType)&&r[c.__c],b=c?C?C.props.value:c.__:r,n.__c?m=(d=t.__c=n.__c).__=d.__E:("prototype"in w&&w.prototype.render?t.__c=d=new w(E,b):(t.__c=d=new S(E,b),d.constructor=w,d.render=W),C&&C.sub(d),d.props=E,d.state||(d.state={}),d.context=b,d.__n=r,p=d.__d=!0,d.__h=[]),null==d.__s&&(d.__s=d.state),null!=w.getDerivedStateFromProps&&(d.__s==d.state&&(d.__s=h({},d.__s)),h(d.__s,w.getDerivedStateFromProps(E,d.__s))),f=d.props,g=d.state,p)null==w.getDerivedStateFromProps&&null!=d.componentWillMount&&d.componentWillMount(),null!=d.componentDidMount&&d.__h.push(d.componentDidMount);else{if(null==w.getDerivedStateFromProps&&E!==f&&null!=d.componentWillReceiveProps&&d.componentWillReceiveProps(E,b),!d.__e&&null!=d.shouldComponentUpdate&&!1===d.shouldComponentUpdate(E,d.__s,b)||t.__v===n.__v){null!=__k&&(d.props=E,d.state=d.__s,t.__v!==n.__v&&(d.__d=!1),d.__v=t,t.__e=n.__e,t.__k=n.__k,d.__h.length&&s.push(d),P(t,l,e));break e}null!=d.componentWillUpdate&&d.componentWillUpdate(E,d.__s,b),null!=d.componentDidUpdate&&d.__h.push(function(){d.componentDidUpdate(f,g,v)})}d.context=b,d.props=E,d.state=d.__s,(c=i.__r)&&c(t),d.__d=!1,d.__v=t,d.__P=e,c=d.render(d.props,d.state,d.context),d.state=d.__s,null!=d.getChildContext&&(r=h(h({},r),d.getChildContext())),p||null==d.getSnapshotBeforeUpdate||(v=d.getSnapshotBeforeUpdate(f,g)),D=null!=c&&c.type==y&&null==c.key?c.props.children:c,R(e,Array.isArray(D)?D:[D],t,n,r,o,a,s,l,u),d.base=t.__e,t.__h=null,d.__h.length&&s.push(d),m&&(d.__E=d.__=null),d.__e=!1}else null==a&&t.__v===n.__v?(t.__k=n.__k,t.__e=n.__e):t.__e=N(n.__e,t,n,r,o,a,s,u);(c=i.diffed)&&c(t)}catch(e){t.__v=null,(u||null!=a)&&(t.__e=l,t.__h=!!u,a[a.indexOf(l)]=null),i.__e(e,t,n)}return t.__e}function _(e,t){i.__c&&i.__c(t,e),e.some(function(t){try{e=t.__h,t.__h=[],e.some(function(e){e.call(t)})}catch(e){i.__e(e,t.__v)}})}function N(e,t,n,r,o,i,a,s){var l,u,c,f,h,g=n.props,v=t.props;if(o="svg"===t.type||o,null!=i)for(l=0;l<i.length;l++)if(null!=(u=i[l])&&((null===t.type?3===u.nodeType:u.localName===t.type)||e==u)){e=u,i[l]=null;break}if(null==e){if(null===t.type)return document.createTextNode(v);e=o?document.createElementNS("http://www.w3.org/2000/svg",t.type):document.createElement(t.type,v.is&&{is:v.is}),i=null,s=!1}if(null===t.type)g===v||s&&e.data===v||(e.data=v);else{if(null!=i&&(i=p.slice.call(e.childNodes)),c=(g=n.props||d).dangerouslySetInnerHTML,f=v.dangerouslySetInnerHTML,!s){if(null!=i)for(g={},h=0;h<e.attributes.length;h++)g[e.attributes[h].name]=e.attributes[h].value;(f||c)&&(f&&(c&&f.__html==c.__html||f.__html===e.innerHTML)||(e.innerHTML=f&&f.__html||""))}(function(e,t,n,r,o){var i;for(i in n)"children"===i||"key"===i||i in t||x(e,i,null,n[i],r);for(i in t)o&&"function"!=typeof t[i]||"children"===i||"key"===i||"value"===i||"checked"===i||n[i]===t[i]||x(e,i,t[i],n[i],r)})(e,v,g,o,s),f?t.__k=[]:(l=t.props.children,R(e,Array.isArray(l)?l:[l],t,n,r,"foreignObject"!==t.type&&o,i,a,d,s)),s||("value"in v&&void 0!==(l=v.value)&&(l!==e.value||"progress"===t.type&&!l)&&x(e,"value",l,g.value,!1),"checked"in v&&void 0!==(l=v.checked)&&l!==e.checked&&x(e,"checked",l,g.checked,!1))}return e}function H(e,t,n){try{"function"==typeof e?e(t):e.current=t}catch(e){i.__e(e,n)}}function O(e,t,n){var r,o,a;if(i.unmount&&i.unmount(e),(r=e.ref)&&(r.current&&r.current!==e.__e||H(r,null,t)),n||"function"==typeof e.type||(n=null!=(o=e.__e)),e.__e=e.__d=void 0,null!=(r=e.__c)){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(e){i.__e(e,t)}r.base=r.__P=null}if(r=e.__k)for(a=0;a<r.length;a++)r[a]&&O(r[a],t,n);null!=o&&g(o)}function W(e,t,n){return this.constructor(e,n)}function A(e,t,n){var r,o,a,s=r?t:n||t;null!=s&&(i.__&&i.__(e,t),o=(r=n===u)?null:n&&n.__k||t.__k,e=v(y,null,[e]),a=[],I(t,s.__k=e,o||d,d,void 0!==t.ownerSVGElement,n&&!r?[n]:o?null:t.childNodes.length?p.slice.call(t.childNodes):null,a,n||d,r),_(a,e))}i={__e:function(e,t){for(var n,r,o,i=t.__h;t=t.__;)if((n=t.__c)&&!n.__)try{if((r=n.constructor)&&null!=r.getDerivedStateFromError&&(n.setState(r.getDerivedStateFromError(e)),o=n.__d),null!=n.componentDidCatch&&(n.componentDidCatch(e),o=n.__d),o)return t.__h=i,n.__E=n}catch(t){e=t}throw e}},S.prototype.setState=function(e,t){var n;n=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=h({},this.state),"function"==typeof e&&(e=e(h({},n),this.props)),e&&h(n,e),null!=e&&this.__v&&(t&&this.__h.push(t),b(this))},S.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),b(this))},S.prototype.render=y,a=[],s="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,D.__r=0,u=d,c=0;var L="undefined"!=typeof globalThis?globalThis:window;L.FullCalendarVDom?console.warn("FullCalendar VDOM already loaded"):L.FullCalendarVDom={Component:S,createElement:v,render:A,createRef:function(){return{current:null}},Fragment:y,createContext:function(e){var t=function(e,t){var n={__c:t="__cC"+c++,__:e,Consumer:function(e,t){return e.children(t)},Provider:function(e,n,r){return this.getChildContext||(n=[],(r={})[t]=this,this.getChildContext=function(){return r},this.shouldComponentUpdate=function(e){this.props.value!==e.value&&n.some(b)},this.sub=function(e){n.push(e);var t=e.componentWillUnmount;e.componentWillUnmount=function(){n.splice(n.indexOf(e),1),t&&t.call(e)}}),e.children}};return n.Provider.__=n.Consumer.contextType=n}(e),n=t.Provider;return t.Provider=function(){var e=this,t=!this.getChildContext,r=n.apply(this,arguments);if(t){var o=[];this.shouldComponentUpdate=function(t){e.props.value!==t.value&&o.forEach(function(e){e.context=t.value,e.forceUpdate()})},this.sub=function(e){o.push(e);var t=e.componentWillUnmount;e.componentWillUnmount=function(){o.splice(o.indexOf(e),1),t&&t.call(e)}}}return r},t},flushToDom:function(){var e=i.debounceRendering,t=[];for(i.debounceRendering=function(e){t.push(e)},A(v(U,{}),document.createElement("div"));t.length;)t.shift()();i.debounceRendering=e},unmountComponentAtNode:function(e){A(null,e)}};var U=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return n(t,e),t.prototype.render=function(){return v("div",{})},t.prototype.componentDidMount=function(){this.setState({})},t}(S),B=function(){function e(e,t){this.context=e,this.internalEventSource=t}return e.prototype.remove=function(){this.context.dispatch({type:"REMOVE_EVENT_SOURCE",sourceId:this.internalEventSource.sourceId})},e.prototype.refetch=function(){this.context.dispatch({type:"FETCH_EVENT_SOURCES",sourceIds:[this.internalEventSource.sourceId]})},Object.defineProperty(e.prototype,"id",{get:function(){return this.internalEventSource.publicId},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"url",{get:function(){return this.internalEventSource.meta.url},enumerable:!1,configurable:!0}),e}();function z(e){e.parentNode&&e.parentNode.removeChild(e)}function V(e,t){if(e.closest)return e.closest(t);if(!document.documentElement.contains(e))return null;do{if(F(e,t))return e;e=e.parentElement||e.parentNode}while(null!==e&&1===e.nodeType);return null}function F(e,t){return(e.matches||e.matchesSelector||e.msMatchesSelector).call(e,t)}function j(e,t){for(var n=e instanceof HTMLElement?[e]:e,r=[],o=0;o<n.length;o+=1)for(var i=n[o].querySelectorAll(t),a=0;a<i.length;a+=1)r.push(i[a]);return r}function G(e,t){for(var n=e instanceof HTMLElement?[e]:e,r=[],o=0;o<n.length;o+=1)for(var i=n[o].children,a=0;a<i.length;a+=1){var s=i[a];t&&!F(s,t)||r.push(s)}return r}var q=/(top|left|right|bottom|width|height)$/i;function Y(e,t){for(var n in t)Z(e,n,t[n])}function Z(e,t,n){null==n?e.style[t]="":"number"==typeof n&&q.test(t)?e.style[t]=n+"px":e.style[t]=n}function X(e){e.preventDefault()}function K(e,t){return function(n){var r=V(n.target,e);r&&t.call(r,n,r)}}function J(e,t,n,r){var o=K(n,r);return e.addEventListener(t,o),function(){e.removeEventListener(t,o)}}var $=["webkitTransitionEnd","otransitionend","oTransitionEnd","msTransitionEnd","transitionend"];function Q(e,t){var n=function(r){t(r),$.forEach(function(t){e.removeEventListener(t,n)})};$.forEach(function(t){e.addEventListener(t,n)})}var ee=0;function te(){return String(ee+=1)}function ne(){document.body.classList.add("fc-not-allowed")}function re(){document.body.classList.remove("fc-not-allowed")}function oe(e){e.classList.add("fc-unselectable"),e.addEventListener("selectstart",X)}function ie(e){e.classList.remove("fc-unselectable"),e.removeEventListener("selectstart",X)}function ae(e){e.addEventListener("contextmenu",X)}function se(e){e.removeEventListener("contextmenu",X)}function le(e){var t,n,r=[],o=[];for("string"==typeof e?o=e.split(/\s*,\s*/):"function"==typeof e?o=[e]:Array.isArray(e)&&(o=e),t=0;t<o.length;t+=1)"string"==typeof(n=o[t])?r.push("-"===n.charAt(0)?{field:n.substring(1),order:-1}:{field:n,order:1}):"function"==typeof n&&r.push({func:n});return r}function ue(e,t,n){var r,o;for(r=0;r<n.length;r+=1)if(o=ce(e,t,n[r]))return o;return 0}function ce(e,t,n){return n.func?n.func(e,t):de(e[n.field],t[n.field])*(n.order||1)}function de(e,t){return e||t?null==t?-1:null==e?1:"string"==typeof e||"string"==typeof t?String(e).localeCompare(String(t)):e-t:0}function pe(e,t){var n=String(e);return"000".substr(0,t-n.length)+n}function fe(e,t){return e-t}function he(e){return e%1==0}function ge(e){var t=e.querySelector(".fc-scrollgrid-shrink-frame"),n=e.querySelector(".fc-scrollgrid-shrink-cushion");if(!t)throw new Error("needs fc-scrollgrid-shrink-frame className");if(!n)throw new Error("needs fc-scrollgrid-shrink-cushion className");return e.getBoundingClientRect().width-t.getBoundingClientRect().width+n.getBoundingClientRect().width}var ve=["sun","mon","tue","wed","thu","fri","sat"];function me(e,t){var n=ke(e);return n[2]+=7*t,Pe(n)}function ye(e,t){var n=ke(e);return n[2]+=t,Pe(n)}function Se(e,t){var n=ke(e);return n[6]+=t,Pe(n)}function Ee(e,t){return Ce(e,t)/7}function Ce(e,t){return(t.valueOf()-e.valueOf())/864e5}function be(e,t){var n=we(e),r=we(t);return{years:0,months:0,days:Math.round(Ce(n,r)),milliseconds:t.valueOf()-r.valueOf()-(e.valueOf()-n.valueOf())}}function De(e,t){var n=Re(e,t);return null!==n&&n%7==0?n/7:null}function Re(e,t){return _e(e)===_e(t)?Math.round(Ce(e,t)):null}function we(e){return Pe([e.getUTCFullYear(),e.getUTCMonth(),e.getUTCDate()])}function Te(e,t,n,r){var o=Pe([t,0,1+function(e,t,n){var r=7+t-n;return-(7+Pe([e,0,r]).getUTCDay()-t)%7+r-1}(t,n,r)]),i=we(e),a=Math.round(Ce(o,i));return Math.floor(a/7)+1}function xe(e){return[e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()]}function Me(e){return new Date(e[0],e[1]||0,null==e[2]?1:e[2],e[3]||0,e[4]||0,e[5]||0)}function ke(e){return[e.getUTCFullYear(),e.getUTCMonth(),e.getUTCDate(),e.getUTCHours(),e.getUTCMinutes(),e.getUTCSeconds(),e.getUTCMilliseconds()]}function Pe(e){return 1===e.length&&(e=e.concat([0])),new Date(Date.UTC.apply(Date,e))}function Ie(e){return!isNaN(e.valueOf())}function _e(e){return 1e3*e.getUTCHours()*60*60+1e3*e.getUTCMinutes()*60+1e3*e.getUTCSeconds()+e.getUTCMilliseconds()}function Ne(e,t,n,r){return{instanceId:te(),defId:e,range:t,forcedStartTzo:null==n?null:n,forcedEndTzo:null==r?null:r}}var He=Object.prototype.hasOwnProperty;function Oe(e,t){var n={};if(t)for(var r in t){for(var o=[],i=e.length-1;i>=0;i-=1){var a=e[i][r];if("object"==typeof a&&a)o.unshift(a);else if(void 0!==a){n[r]=a;break}}o.length&&(n[r]=Oe(o))}for(i=e.length-1;i>=0;i-=1){var s=e[i];for(var l in s)l in n||(n[l]=s[l])}return n}function We(e,t){var n={};for(var r in e)t(e[r],r)&&(n[r]=e[r]);return n}function Ae(e,t){var n={};for(var r in e)n[r]=t(e[r],r);return n}function Le(e){for(var t={},n=0,r=e;n<r.length;n++)t[r[n]]=!0;return t}function Ue(e){var t=[];for(var n in e)t.push(e[n]);return t}function Be(e,t){if(e===t)return!0;for(var n in e)if(He.call(e,n)&&!(n in t))return!1;for(var n in t)if(He.call(t,n)&&e[n]!==t[n])return!1;return!0}function ze(e,t){var n=[];for(var r in e)He.call(e,r)&&(r in t||n.push(r));for(var r in t)He.call(t,r)&&e[r]!==t[r]&&n.push(r);return n}function Ve(e,t,n){if(void 0===n&&(n={}),e===t)return!0;for(var r in t)if(!(r in e&&Fe(e[r],t[r],n[r])))return!1;for(var r in e)if(!(r in t))return!1;return!0}function Fe(e,t,n){return e===t||!0===n||!!n&&n(e,t)}function je(e,t,n,r){void 0===t&&(t=0),void 0===r&&(r=1);var o=[];null==n&&(n=Object.keys(e).length);for(var i=t;i<n;i+=r){var a=e[i];void 0!==a&&o.push(a)}return o}function Ge(e,t,n){var r=n.dateEnv,o=n.pluginHooks,i=n.options,a=e.defs,s=e.instances;for(var l in s=We(s,function(e){return!a[e.defId].recurringDef}),a){var u=a[l];if(u.recurringDef){var c=u.recurringDef.duration;c||(c=u.allDay?i.defaultAllDayEventDuration:i.defaultTimedEventDuration);for(var d=0,p=qe(u,c,t,r,o.recurringTypes);d<p.length;d++){var f=p[d],h=Ne(l,{start:f,end:r.add(f,c)});s[h.instanceId]=h}}}return{defs:a,instances:s}}function qe(e,t,n,r,o){var i=o[e.recurringDef.typeId].expand(e.recurringDef.typeData,{start:r.subtract(n.start,t),end:n.end},r);return e.allDay&&(i=i.map(we)),i}var Ye=["years","months","days","milliseconds"],Ze=/^(-?)(?:(\d+)\.)?(\d+):(\d\d)(?::(\d\d)(?:\.(\d\d\d))?)?/;function Xe(e,t){var n;return"string"==typeof e?function(e){var t=Ze.exec(e);if(t){var n=t[1]?-1:1;return{years:0,months:0,days:n*(t[2]?parseInt(t[2],10):0),milliseconds:n*(60*(t[3]?parseInt(t[3],10):0)*60*1e3+60*(t[4]?parseInt(t[4],10):0)*1e3+1e3*(t[5]?parseInt(t[5],10):0)+(t[6]?parseInt(t[6],10):0))}}return null}(e):"object"==typeof e&&e?Ke(e):"number"==typeof e?Ke(((n={})[t||"milliseconds"]=e,n)):null}function Ke(e){var t={years:e.years||e.year||0,months:e.months||e.month||0,days:e.days||e.day||0,milliseconds:60*(e.hours||e.hour||0)*60*1e3+60*(e.minutes||e.minute||0)*1e3+1e3*(e.seconds||e.second||0)+(e.milliseconds||e.millisecond||e.ms||0)},n=e.weeks||e.week;return n&&(t.days+=7*n,t.specifiedWeeks=!0),t}function Je(e){return e.years||e.months||e.milliseconds?0:e.days}function $e(e,t){return{years:e.years+t.years,months:e.months+t.months,days:e.days+t.days,milliseconds:e.milliseconds+t.milliseconds}}function Qe(e,t){return{years:e.years*t,months:e.months*t,days:e.days*t,milliseconds:e.milliseconds*t}}function et(e){return rt(e)/864e5}function tt(e){return rt(e)/6e4}function nt(e){return rt(e)/1e3}function rt(e){return 31536e6*e.years+2592e6*e.months+864e5*e.days+e.milliseconds}function ot(e,t){for(var n=null,r=0;r<Ye.length;r+=1){var o=Ye[r];if(t[o]){var i=e[o]/t[o];if(!he(i)||null!==n&&n!==i)return null;n=i}else if(e[o])return null}return n}function it(e){var t=e.milliseconds;if(t){if(t%1e3!=0)return{unit:"millisecond",value:t};if(t%6e4!=0)return{unit:"second",value:t/1e3};if(t%36e5!=0)return{unit:"minute",value:t/6e4};if(t)return{unit:"hour",value:t/36e5}}return e.days?e.specifiedWeeks&&e.days%7==0?{unit:"week",value:e.days/7}:{unit:"day",value:e.days}:e.months?{unit:"month",value:e.months}:e.years?{unit:"year",value:e.years}:{unit:"millisecond",value:0}}function at(e){return e.toISOString().replace(/T.*$/,"")}function st(e){return pe(e.getUTCHours(),2)+":"+pe(e.getUTCMinutes(),2)+":"+pe(e.getUTCSeconds(),2)}function lt(e,t){void 0===t&&(t=!1);var n=e<0?"-":"+",r=Math.abs(e),o=Math.floor(r/60),i=Math.round(r%60);return t?n+pe(o,2)+":"+pe(i,2):"GMT"+n+o+(i?":"+pe(i,2):"")}function ut(e,t){for(var n=0,r=0;r<e.length;)e[r]===t?(e.splice(r,1),n+=1):r+=1;return n}function ct(e,t,n){if(e===t)return!0;var r,o=e.length;if(o!==t.length)return!1;for(r=0;r<o;r+=1)if(!(n?n(e[r],t[r]):e[r]===t[r]))return!1;return!0}function dt(e,t,n){var r,o;return function(){for(var i=[],a=0;a<arguments.length;a++)i[a]=arguments[a];if(r){if(!ct(r,i)){n&&n(o);var s=e.apply(this,i);t&&t(s,o)||(o=s)}}else o=e.apply(this,i);return r=i,o}}function pt(e,t,n){var r,o,i=this;return function(a){if(r){if(!Be(r,a)){n&&n(o);var s=e.call(i,a);t&&t(s,o)||(o=s)}}else o=e.call(i,a);return r=a,o}}function ft(e,t,n){var r=this,o=[],i=[];return function(a){for(var s=o.length,l=a.length,u=0;u<s;u+=1)if(a[u]){if(!ct(o[u],a[u])){n&&n(i[u]);var c=e.apply(r,a[u]);t&&t(c,i[u])||(i[u]=c)}}else n&&n(i[u]);for(;u<l;u+=1)i[u]=e.apply(r,a[u]);return o=a,i.splice(l),i}}function ht(e,t,n){var r=this,o={},i={};return function(a){var s={};for(var l in a)if(i[l])if(ct(o[l],a[l]))s[l]=i[l];else{n&&n(i[l]);var u=e.apply(r,a[l]);s[l]=t&&t(u,i[l])?i[l]:u}else s[l]=e.apply(r,a[l]);return o=a,i=s,s}}var gt={week:3,separator:0,omitZeroMinute:0,meridiem:0,omitCommas:0},vt={timeZoneName:7,era:6,year:5,month:4,day:2,weekday:2,hour:1,minute:1,second:1},mt=/\s*([ap])\.?m\.?/i,yt=/,/g,St=/\s+/g,Et=/\u200e/g,Ct=/UTC|GMT/,bt=function(){function e(e){var t={},n={},r=0;for(var o in e)o in gt?(n[o]=e[o],r=Math.max(gt[o],r)):(t[o]=e[o],o in vt&&(r=Math.max(vt[o],r)));this.standardDateProps=t,this.extendedSettings=n,this.severity=r,this.buildFormattingFunc=dt(Dt)}return e.prototype.format=function(e,t){return this.buildFormattingFunc(this.standardDateProps,this.extendedSettings,t)(e)},e.prototype.formatRange=function(e,t,n,r){var o=this.standardDateProps,i=this.extendedSettings,a=function(e,t,n){return n.getMarkerYear(e)!==n.getMarkerYear(t)?5:n.getMarkerMonth(e)!==n.getMarkerMonth(t)?4:n.getMarkerDay(e)!==n.getMarkerDay(t)?2:_e(e)!==_e(t)?1:0}(e.marker,t.marker,n.calendarSystem);if(!a)return this.format(e,n);var s=a;!(s>1)||"numeric"!==o.year&&"2-digit"!==o.year||"numeric"!==o.month&&"2-digit"!==o.month||"numeric"!==o.day&&"2-digit"!==o.day||(s=1);var l=this.format(e,n),u=this.format(t,n);if(l===u)return l;var c=Dt(function(e,t){var n={};for(var r in e)(!(r in vt)||vt[r]<=t)&&(n[r]=e[r]);return n}(o,s),i,n),d=c(e),p=c(t),f=function(e,t,n,r){for(var o=0;o<e.length;){var i=e.indexOf(t,o);if(-1===i)break;var a=e.substr(0,i);o=i+t.length;for(var s=e.substr(o),l=0;l<n.length;){var u=n.indexOf(r,l);if(-1===u)break;var c=n.substr(0,u);l=u+r.length;var d=n.substr(l);if(a===c&&s===d)return{before:a,after:s}}}return null}(l,d,u,p),h=i.separator||r||n.defaultSeparator||"";return f?f.before+d+h+p+f.after:l+h+u},e.prototype.getLargestUnit=function(){switch(this.severity){case 7:case 6:case 5:return"year";case 4:return"month";case 3:return"week";case 2:return"day";default:return"time"}},e}();function Dt(e,t,n){var o=Object.keys(e).length;return 1===o&&"short"===e.timeZoneName?function(e){return lt(e.timeZoneOffset)}:0===o&&t.week?function(e){return function(e,t,n,r){var o=[];return"narrow"===r?o.push(t):"short"===r&&o.push(t," "),o.push(n.simpleNumberFormat.format(e)),"rtl"===n.options.direction&&o.reverse(),o.join("")}(n.computeWeekNumber(e.marker),n.weekText,n.locale,t.week)}:function(e,t,n){e=r({},e),t=r({},t),function(e,t){e.timeZoneName&&(e.hour||(e.hour="2-digit"),e.minute||(e.minute="2-digit")),"long"===e.timeZoneName&&(e.timeZoneName="short"),t.omitZeroMinute&&(e.second||e.millisecond)&&delete t.omitZeroMinute}(e,t),e.timeZone="UTC";var o,i=new Intl.DateTimeFormat(n.locale.codes,e);if(t.omitZeroMinute){var a=r({},e);delete a.minute,o=new Intl.DateTimeFormat(n.locale.codes,a)}return function(r){var a=r.marker;return function(e,t,n,r,o){return e=e.replace(Et,""),"short"===n.timeZoneName&&(e=function(e,t){var n=!1;return e=e.replace(Ct,function(){return n=!0,t}),n||(e+=" "+t),e}(e,"UTC"===o.timeZone||null==t.timeZoneOffset?"UTC":lt(t.timeZoneOffset))),r.omitCommas&&(e=e.replace(yt,"").trim()),r.omitZeroMinute&&(e=e.replace(":00","")),!1===r.meridiem?e=e.replace(mt,"").trim():"narrow"===r.meridiem?e=e.replace(mt,function(e,t){return t.toLocaleLowerCase()}):"short"===r.meridiem?e=e.replace(mt,function(e,t){return t.toLocaleLowerCase()+"m"}):"lowercase"===r.meridiem&&(e=e.replace(mt,function(e){return e.toLocaleLowerCase()})),(e=e.replace(St," ")).trim()}((o&&!a.getUTCMinutes()?o:i).format(a),r,e,t,n)}}(e,t,n)}function Rt(e,t){var n=t.markerToArray(e.marker);return{marker:e.marker,timeZoneOffset:e.timeZoneOffset,array:n,year:n[0],month:n[1],day:n[2],hour:n[3],minute:n[4],second:n[5],millisecond:n[6]}}function wt(e,t,n,r){var o=Rt(e,n.calendarSystem);return{date:o,start:o,end:t?Rt(t,n.calendarSystem):null,timeZone:n.timeZone,localeCodes:n.locale.codes,defaultSeparator:r||n.defaultSeparator}}var Tt=function(){function e(e){this.cmdStr=e}return e.prototype.format=function(e,t,n){return t.cmdFormatter(this.cmdStr,wt(e,null,t,n))},e.prototype.formatRange=function(e,t,n,r){return n.cmdFormatter(this.cmdStr,wt(e,t,n,r))},e}(),xt=function(){function e(e){this.func=e}return e.prototype.format=function(e,t,n){return this.func(wt(e,null,t,n))},e.prototype.formatRange=function(e,t,n,r){return this.func(wt(e,t,n,r))},e}();function Mt(e){return"object"==typeof e&&e?new bt(e):"string"==typeof e?new Tt(e):"function"==typeof e?new xt(e):null}var kt={navLinkDayClick:Lt,navLinkWeekClick:Lt,duration:Xe,bootstrapFontAwesome:Lt,buttonIcons:Lt,customButtons:Lt,defaultAllDayEventDuration:Xe,defaultTimedEventDuration:Xe,nextDayThreshold:Xe,scrollTime:Xe,slotMinTime:Xe,slotMaxTime:Xe,dayPopoverFormat:Mt,slotDuration:Xe,snapDuration:Xe,headerToolbar:Lt,footerToolbar:Lt,defaultRangeSeparator:String,titleRangeSeparator:String,forceEventDuration:Boolean,dayHeaders:Boolean,dayHeaderFormat:Mt,dayHeaderClassNames:Lt,dayHeaderContent:Lt,dayHeaderDidMount:Lt,dayHeaderWillUnmount:Lt,dayCellClassNames:Lt,dayCellContent:Lt,dayCellDidMount:Lt,dayCellWillUnmount:Lt,initialView:String,aspectRatio:Number,weekends:Boolean,weekNumberCalculation:Lt,weekNumbers:Boolean,weekNumberClassNames:Lt,weekNumberContent:Lt,weekNumberDidMount:Lt,weekNumberWillUnmount:Lt,editable:Boolean,viewClassNames:Lt,viewDidMount:Lt,viewWillUnmount:Lt,nowIndicator:Boolean,nowIndicatorClassNames:Lt,nowIndicatorContent:Lt,nowIndicatorDidMount:Lt,nowIndicatorWillUnmount:Lt,showNonCurrentDates:Boolean,lazyFetching:Boolean,startParam:String,endParam:String,timeZoneParam:String,timeZone:String,locales:Lt,locale:Lt,themeSystem:String,dragRevertDuration:Number,dragScroll:Boolean,allDayMaintainDuration:Boolean,unselectAuto:Boolean,dropAccept:Lt,eventOrder:le,handleWindowResize:Boolean,windowResizeDelay:Number,longPressDelay:Number,eventDragMinDistance:Number,expandRows:Boolean,height:Lt,contentHeight:Lt,direction:String,weekNumberFormat:Mt,eventResizableFromStart:Boolean,displayEventTime:Boolean,displayEventEnd:Boolean,weekText:String,progressiveEventRendering:Boolean,businessHours:Lt,initialDate:Lt,now:Lt,eventDataTransform:Lt,stickyHeaderDates:Lt,stickyFooterScrollbar:Lt,viewHeight:Lt,defaultAllDay:Boolean,eventSourceFailure:Lt,eventSourceSuccess:Lt,eventDisplay:String,eventStartEditable:Boolean,eventDurationEditable:Boolean,eventOverlap:Lt,eventConstraint:Lt,eventAllow:Lt,eventBackgroundColor:String,eventBorderColor:String,eventTextColor:String,eventColor:String,eventClassNames:Lt,eventContent:Lt,eventDidMount:Lt,eventWillUnmount:Lt,selectConstraint:Lt,selectOverlap:Lt,selectAllow:Lt,droppable:Boolean,unselectCancel:String,slotLabelFormat:Lt,slotLaneClassNames:Lt,slotLaneContent:Lt,slotLaneDidMount:Lt,slotLaneWillUnmount:Lt,slotLabelClassNames:Lt,slotLabelContent:Lt,slotLabelDidMount:Lt,slotLabelWillUnmount:Lt,dayMaxEvents:Lt,dayMaxEventRows:Lt,dayMinWidth:Number,slotLabelInterval:Xe,allDayText:String,allDayClassNames:Lt,allDayContent:Lt,allDayDidMount:Lt,allDayWillUnmount:Lt,slotMinWidth:Number,navLinks:Boolean,eventTimeFormat:Mt,rerenderDelay:Number,moreLinkText:Lt,selectMinDistance:Number,selectable:Boolean,selectLongPressDelay:Number,eventLongPressDelay:Number,selectMirror:Boolean,eventMinHeight:Number,slotEventOverlap:Boolean,plugins:Lt,firstDay:Number,dayCount:Number,dateAlignment:String,dateIncrement:Xe,hiddenDays:Lt,monthMode:Boolean,fixedWeekCount:Boolean,validRange:Lt,visibleRange:Lt,titleFormat:Lt,noEventsText:String},Pt={eventDisplay:"auto",defaultRangeSeparator:" - ",titleRangeSeparator:" – ",defaultTimedEventDuration:"01:00:00",defaultAllDayEventDuration:{day:1},forceEventDuration:!1,nextDayThreshold:"00:00:00",dayHeaders:!0,initialView:"",aspectRatio:1.35,headerToolbar:{start:"title",center:"",end:"today prev,next"},weekends:!0,weekNumbers:!1,weekNumberCalculation:"local",editable:!1,nowIndicator:!1,scrollTime:"06:00:00",slotMinTime:"00:00:00",slotMaxTime:"24:00:00",showNonCurrentDates:!0,lazyFetching:!0,startParam:"start",endParam:"end",timeZoneParam:"timeZone",timeZone:"local",locales:[],locale:"",themeSystem:"standard",dragRevertDuration:500,dragScroll:!0,allDayMaintainDuration:!1,unselectAuto:!0,dropAccept:"*",eventOrder:"start,-duration,allDay,title",dayPopoverFormat:{month:"long",day:"numeric",year:"numeric"},handleWindowResize:!0,windowResizeDelay:100,longPressDelay:1e3,eventDragMinDistance:5,expandRows:!1,navLinks:!1,selectable:!1},It={datesSet:Lt,eventsSet:Lt,eventAdd:Lt,eventChange:Lt,eventRemove:Lt,windowResize:Lt,eventClick:Lt,eventMouseEnter:Lt,eventMouseLeave:Lt,select:Lt,unselect:Lt,loading:Lt,_unmount:Lt,_beforeprint:Lt,_afterprint:Lt,_noEventDrop:Lt,_noEventResize:Lt,_resize:Lt,_scrollRequest:Lt},_t={buttonText:Lt,views:Lt,plugins:Lt,initialEvents:Lt,events:Lt,eventSources:Lt},Nt={headerToolbar:Ht,footerToolbar:Ht,buttonText:Ht,buttonIcons:Ht};function Ht(e,t){return"object"==typeof e&&"object"==typeof t&&e&&t?Be(e,t):e===t}var Ot={type:String,component:Lt,buttonText:String,buttonTextKey:String,dateProfileGeneratorClass:Lt,usesMinMaxTime:Boolean,classNames:Lt,content:Lt,didMount:Lt,willUnmount:Lt};function Wt(e){return Oe(e,Nt)}function At(e,t){var n={},r={};for(var o in t)o in e&&(n[o]=t[o](e[o]));for(var o in e)o in t||(r[o]=e[o]);return{refined:n,extra:r}}function Lt(e){return e}function Ut(e,t,n,r){for(var o={defs:{},instances:{}},i=tn(n),a=0,s=e;a<s.length;a++){var l=Qt(s[a],t,n,r,i);l&&Bt(l,o)}return o}function Bt(e,t){return void 0===t&&(t={defs:{},instances:{}}),t.defs[e.def.defId]=e.def,e.instance&&(t.instances[e.instance.instanceId]=e.instance),t}function zt(e,t){var n=e.instances[t];if(n){var r=e.defs[n.defId],o=Ft(e,function(e){return t=r,n=e,Boolean(t.groupId&&t.groupId===n.groupId);var t,n});return o.defs[r.defId]=r,o.instances[n.instanceId]=n,o}return{defs:{},instances:{}}}function Vt(e,t){return{defs:r(r({},e.defs),t.defs),instances:r(r({},e.instances),t.instances)}}function Ft(e,t){var n=We(e.defs,t),r=We(e.instances,function(e){return n[e.defId]});return{defs:n,instances:r}}function jt(e){return Array.isArray(e)?e:"string"==typeof e?e.split(/\s+/):[]}var Gt={display:String,editable:Boolean,startEditable:Boolean,durationEditable:Boolean,constraint:Lt,overlap:Lt,allow:Lt,className:jt,classNames:jt,color:String,backgroundColor:String,borderColor:String,textColor:String},qt={display:null,startEditable:null,durationEditable:null,constraints:[],overlap:null,allows:[],backgroundColor:"",borderColor:"",textColor:"",classNames:[]};function Yt(e,t){var n=function(e,t){return Array.isArray(e)?Ut(e,null,t,!0):"object"==typeof e&&e?Ut([e],null,t,!0):null!=e?String(e):null}(e.constraint,t);return{display:e.display||null,startEditable:null!=e.startEditable?e.startEditable:e.editable,durationEditable:null!=e.durationEditable?e.durationEditable:e.editable,constraints:null!=n?[n]:[],overlap:null!=e.overlap?e.overlap:null,allows:null!=e.allow?[e.allow]:[],backgroundColor:e.backgroundColor||e.color||"",borderColor:e.borderColor||e.color||"",textColor:e.textColor||"",classNames:(e.className||[]).concat(e.classNames||[])}}function Zt(e){return e.reduce(Xt,qt)}function Xt(e,t){return{display:null!=t.display?t.display:e.display,startEditable:null!=t.startEditable?t.startEditable:e.startEditable,durationEditable:null!=t.durationEditable?t.durationEditable:e.durationEditable,constraints:e.constraints.concat(t.constraints),overlap:"boolean"==typeof t.overlap?t.overlap:e.overlap,allows:e.allows.concat(t.allows),backgroundColor:t.backgroundColor||e.backgroundColor,borderColor:t.borderColor||e.borderColor,textColor:t.textColor||e.textColor,classNames:e.classNames.concat(t.classNames)}}var Kt={id:String,groupId:String,title:String,url:String},Jt={start:Lt,end:Lt,date:Lt,allDay:Boolean},$t=r(r(r({},Kt),Jt),{extendedProps:Lt});function Qt(e,t,n,r,o){void 0===o&&(o=tn(n));var i=en(e,n,o),a=i.refined,s=i.extra,l=function(e,t){var n=null;return e&&(n=e.defaultAllDay),null==n&&(n=t.options.defaultAllDay),n}(t,n),u=function(e,t,n,r){for(var o=0;o<r.length;o+=1){var i=r[o].parse(e,n);if(i){var a=e.allDay;return null==a&&null==(a=t)&&null==(a=i.allDayGuess)&&(a=!1),{allDay:a,duration:i.duration,typeData:i.typeData,typeId:o}}}return null}(a,l,n.dateEnv,n.pluginHooks.recurringTypes);if(u)return(c=nn(a,s,t?t.sourceId:"",u.allDay,Boolean(u.duration),n)).recurringDef={typeId:u.typeId,typeData:u.typeData,duration:u.duration},{def:c,instance:null};var c,d=function(e,t,n,r){var o,i,a=e.allDay,s=null,l=!1,u=null,c=null!=e.start?e.start:e.date;if(o=n.dateEnv.createMarkerMeta(c))s=o.marker;else if(!r)return null;return null!=e.end&&(i=n.dateEnv.createMarkerMeta(e.end)),null==a&&(a=null!=t?t:(!o||o.isTimeUnspecified)&&(!i||i.isTimeUnspecified)),a&&s&&(s=we(s)),i&&(u=i.marker,a&&(u=we(u)),s&&u<=s&&(u=null)),u?l=!0:r||(l=n.options.forceEventDuration||!1,u=n.dateEnv.add(s,a?n.options.defaultAllDayEventDuration:n.options.defaultTimedEventDuration)),{allDay:a,hasEnd:l,range:{start:s,end:u},forcedStartTzo:o?o.forcedTzo:null,forcedEndTzo:i?i.forcedTzo:null}}(a,l,n,r);return d?{def:c=nn(a,s,t?t.sourceId:"",d.allDay,d.hasEnd,n),instance:Ne(c.defId,d.range,d.forcedStartTzo,d.forcedEndTzo)}:null}function en(e,t,n){return void 0===n&&(n=tn(t)),At(e,n)}function tn(e){return r(r(r({},Gt),$t),e.pluginHooks.eventRefiners)}function nn(e,t,n,o,i,a){for(var s={title:e.title||"",groupId:e.groupId||"",publicId:e.id||"",url:e.url||"",recurringDef:null,defId:te(),sourceId:n,allDay:o,hasEnd:i,ui:Yt(e,a),extendedProps:r(r({},e.extendedProps||{}),t)},l=0,u=a.pluginHooks.eventDefMemberAdders;l<u.length;l++){var c=u[l];r(s,c(e))}return Object.freeze(s.ui.classNames),Object.freeze(s.extendedProps),s}function rn(e){var t=Math.floor(Ce(e.start,e.end))||1,n=we(e.start);return{start:n,end:ye(n,t)}}function on(e,t){void 0===t&&(t=Xe(0));var n=null,r=null;if(e.end){r=we(e.end);var o=e.end.valueOf()-r.valueOf();o&&o>=rt(t)&&(r=ye(r,1))}return e.start&&(n=we(e.start),r&&r<=n&&(r=ye(n,1))),{start:n,end:r}}function an(e){var t=on(e);return Ce(t.start,t.end)>1}function sn(e,t,n,r){return"year"===r?Xe(n.diffWholeYears(e,t),"year"):"month"===r?Xe(n.diffWholeMonths(e,t),"month"):be(e,t)}function ln(e,t){var n,r,o=[],i=t.start;for(e.sort(un),n=0;n<e.length;n+=1)(r=e[n]).start>i&&o.push({start:i,end:r.start}),r.end>i&&(i=r.end);return i<t.end&&o.push({start:i,end:t.end}),o}function un(e,t){return e.start.valueOf()-t.start.valueOf()}function cn(e,t){var n=e.start,r=e.end,o=null;return null!==t.start&&(n=null===n?t.start:new Date(Math.max(n.valueOf(),t.start.valueOf()))),null!=t.end&&(r=null===r?t.end:new Date(Math.min(r.valueOf(),t.end.valueOf()))),(null===n||null===r||n<r)&&(o={start:n,end:r}),o}function dn(e,t){return(null===e.start?null:e.start.valueOf())===(null===t.start?null:t.start.valueOf())&&(null===e.end?null:e.end.valueOf())===(null===t.end?null:t.end.valueOf())}function pn(e,t){return(null===e.end||null===t.start||e.end>t.start)&&(null===e.start||null===t.end||e.start<t.end)}function fn(e,t){return(null===e.start||null!==t.start&&t.start>=e.start)&&(null===e.end||null!==t.end&&t.end<=e.end)}function hn(e,t){return(null===e.start||t>=e.start)&&(null===e.end||t<e.end)}function gn(e,t,n,r){var o={},i={},a={},s=[],l=[],u=Sn(e.defs,t);for(var c in e.defs)"inverse-background"===(f=u[(E=e.defs[c]).defId]).display&&(E.groupId?(o[E.groupId]=[],a[E.groupId]||(a[E.groupId]=E)):i[c]=[]);for(var d in e.instances){var p=e.instances[d],f=u[(E=e.defs[p.defId]).defId],h=p.range,g=!E.allDay&&r?on(h,r):h,v=cn(g,n);v&&("inverse-background"===f.display?E.groupId?o[E.groupId].push(v):i[p.defId].push(v):"none"!==f.display&&("background"===f.display?s:l).push({def:E,ui:f,instance:p,range:v,isStart:g.start&&g.start.valueOf()===v.start.valueOf(),isEnd:g.end&&g.end.valueOf()===v.end.valueOf()}))}for(var m in o)for(var y=0,S=ln(o[m],n);y<S.length;y++){var E,C=S[y];f=u[(E=a[m]).defId],s.push({def:E,ui:f,instance:null,range:C,isStart:!1,isEnd:!1})}for(var c in i)for(var b=0,D=ln(i[c],n);b<D.length;b++)C=D[b],s.push({def:e.defs[c],ui:u[c],instance:null,range:C,isStart:!1,isEnd:!1});return{bg:s,fg:l}}function vn(e){return"background"===e.ui.display||"inverse-background"===e.ui.display}function mn(e,t){e.fcSeg=t}function yn(e){return e.fcSeg||e.parentNode.fcSeg||null}function Sn(e,t){return Ae(e,function(e){return En(e,t)})}function En(e,t){var n=[];return t[""]&&n.push(t[""]),t[e.defId]&&n.push(t[e.defId]),n.push(e.ui),Zt(n)}function Cn(e,t){var n=e.map(bn);return n.sort(function(e,n){return ue(e,n,t)}),n.map(function(e){return e._seg})}function bn(e){var t=e.eventRange,n=t.def,o=t.instance?t.instance.range:t.range,i=o.start?o.start.valueOf():0,a=o.end?o.end.valueOf():0;return r(r(r({},n.extendedProps),n),{id:n.publicId,start:i,end:a,duration:a-i,allDay:Number(n.allDay),_seg:e})}function Dn(e,t){for(var n=t.pluginHooks.isDraggableTransformers,r=e.eventRange,o=r.def,i=r.ui,a=i.startEditable,s=0,l=n;s<l.length;s++)a=(0,l[s])(a,o,i,t);return a}function Rn(e,t){return e.isStart&&e.eventRange.ui.durationEditable&&t.options.eventResizableFromStart}function wn(e,t){return e.isEnd&&e.eventRange.ui.durationEditable}function Tn(e,t,n,r,o,i,a){var s=n.dateEnv,l=n.options,u=l.displayEventTime,c=l.displayEventEnd,d=e.eventRange.def,p=e.eventRange.instance;if(null==u&&(u=!1!==r),null==c&&(c=!1!==o),u&&!d.allDay&&(e.isStart||e.isEnd)){var f=i||(e.isStart?p.range.start:e.start||e.eventRange.range.start),h=a||(e.isEnd?p.range.end:e.end||e.eventRange.range.end);return c&&d.hasEnd?s.formatRange(f,h,t,{forcedStartTzo:i?null:p.forcedStartTzo,forcedEndTzo:a?null:p.forcedEndTzo}):s.format(f,t,{forcedTzo:i?null:p.forcedStartTzo})}return""}function xn(e,t,n){var r=e.eventRange.range;return{isPast:r.end<(n||t.start),isFuture:r.start>=(n||t.end),isToday:t&&hn(t,r.start)}}function Mn(e){var t=["fc-event"];return e.isMirror&&t.push("fc-event-mirror"),e.isDraggable&&t.push("fc-event-draggable"),(e.isStartResizable||e.isEndResizable)&&t.push("fc-event-resizable"),e.isDragging&&t.push("fc-event-dragging"),e.isResizing&&t.push("fc-event-resizing"),e.isSelected&&t.push("fc-event-selected"),e.isStart&&t.push("fc-event-start"),e.isEnd&&t.push("fc-event-end"),e.isPast&&t.push("fc-event-past"),e.isToday&&t.push("fc-event-today"),e.isFuture&&t.push("fc-event-future"),t}function kn(e){return e.instance?e.instance.instanceId:e.def.defId+":"+e.range.start.toISOString()}var Pn={start:Lt,end:Lt,allDay:Boolean};function In(e,t,n){var o=function(e,t){var n=At(e,Pn),o=n.refined,i=n.extra,a=o.start?t.createMarkerMeta(o.start):null,s=o.end?t.createMarkerMeta(o.end):null,l=o.allDay;return null==l&&(l=a&&a.isTimeUnspecified&&(!s||s.isTimeUnspecified)),r({range:{start:a?a.marker:null,end:s?s.marker:null},allDay:l},i)}(e,t),i=o.range;if(!i.start)return null;if(!i.end){if(null==n)return null;i.end=t.add(i.start,n)}return o}function _n(e,t){return dn(e.range,t.range)&&e.allDay===t.allDay&&function(e,t){for(var n in t)if("range"!==n&&"allDay"!==n&&e[n]!==t[n])return!1;for(var n in e)if(!(n in t))return!1;return!0}(e,t)}function Nn(e,t,n){return r(r({},Hn(e,t,n)),{timeZone:t.timeZone})}function Hn(e,t,n){return{start:t.toDate(e.start),end:t.toDate(e.end),startStr:t.formatIso(e.start,{omitTime:n}),endStr:t.formatIso(e.end,{omitTime:n})}}function On(e,t,n){n.emitter.trigger("select",r(r({},Wn(e,n)),{jsEvent:t?t.origEvent:null,view:n.viewApi||n.calendarApi.view}))}function Wn(e,t){for(var n,o,i={},a=0,s=t.pluginHooks.dateSpanTransforms;a<s.length;a++){var l=s[a];r(i,l(e,t))}return r(i,(n=e,o=t.dateEnv,r(r({},Hn(n.range,o,n.allDay)),{allDay:n.allDay}))),i}function An(e,t,n){var r=n.dateEnv,o=n.options,i=t;return e?(i=we(i),i=r.add(i,o.defaultAllDayEventDuration)):i=r.add(i,o.defaultTimedEventDuration),i}function Ln(e,t,n,r){var o=Sn(e.defs,t),i={defs:{},instances:{}};for(var a in e.defs){var s=e.defs[a];i.defs[a]=Un(s,o[a],n,r)}for(var l in e.instances){var u=e.instances[l];s=i.defs[u.defId],i.instances[l]=Bn(u,s,o[u.defId],n,r)}return i}function Un(e,t,n,o){var i=n.standardProps||{};null==i.hasEnd&&t.durationEditable&&(n.startDelta||n.endDelta)&&(i.hasEnd=!0);var a=r(r(r({},e),i),{ui:r(r({},e.ui),i.ui)});n.extendedProps&&(a.extendedProps=r(r({},a.extendedProps),n.extendedProps));for(var s=0,l=o.pluginHooks.eventDefMutationAppliers;s<l.length;s++)(0,l[s])(a,n,o);return!a.hasEnd&&o.options.forceEventDuration&&(a.hasEnd=!0),a}function Bn(e,t,n,o,i){var a=i.dateEnv,s=o.standardProps&&!0===o.standardProps.allDay,l=o.standardProps&&!1===o.standardProps.hasEnd,u=r({},e);return s&&(u.range=rn(u.range)),o.datesDelta&&n.startEditable&&(u.range={start:a.add(u.range.start,o.datesDelta),end:a.add(u.range.end,o.datesDelta)}),o.startDelta&&n.durationEditable&&(u.range={start:a.add(u.range.start,o.startDelta),end:u.range.end}),o.endDelta&&n.durationEditable&&(u.range={start:u.range.start,end:a.add(u.range.end,o.endDelta)}),l&&(u.range={start:u.range.start,end:An(t.allDay,u.range.start,i)}),t.allDay&&(u.range={start:we(u.range.start),end:we(u.range.end)}),u.range.end<u.range.start&&(u.range.end=An(t.allDay,u.range.start,i)),u}var zn=function(){function e(e,t,n){this.type=e,this.getCurrentData=t,this.dateEnv=n}return Object.defineProperty(e.prototype,"calendar",{get:function(){return this.getCurrentData().calendarApi},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"title",{get:function(){return this.getCurrentData().viewTitle},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"activeStart",{get:function(){return this.dateEnv.toDate(this.getCurrentData().dateProfile.activeRange.start)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"activeEnd",{get:function(){return this.dateEnv.toDate(this.getCurrentData().dateProfile.activeRange.end)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"currentStart",{get:function(){return this.dateEnv.toDate(this.getCurrentData().dateProfile.currentRange.start)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"currentEnd",{get:function(){return this.dateEnv.toDate(this.getCurrentData().dateProfile.currentRange.end)},enumerable:!1,configurable:!0}),e.prototype.getOption=function(e){return this.getCurrentData().options[e]},e}(),Vn={id:String,defaultAllDay:Boolean,url:String,events:Lt,eventDataTransform:Lt,success:Lt,failure:Lt};function Fn(e,t,n){var r;if(void 0===n&&(n=jn(t)),"string"==typeof e?r={url:e}:"function"==typeof e||Array.isArray(e)?r={events:e}:"object"==typeof e&&e&&(r=e),r){var o=At(r,n),i=o.refined,a=o.extra,s=function(e,t){for(var n=t.pluginHooks.eventSourceDefs,r=n.length-1;r>=0;r-=1){var o=n[r].parseMeta(e);if(o)return{sourceDefId:r,meta:o}}return null}(i,t);if(s)return{_raw:e,isFetching:!1,latestFetchId:"",fetchRange:null,defaultAllDay:i.defaultAllDay,eventDataTransform:i.eventDataTransform,success:i.success,failure:i.failure,publicId:i.id||"",sourceId:te(),sourceDefId:s.sourceDefId,meta:s.meta,ui:Yt(i,t),extendedProps:a}}return null}function jn(e){return r(r(r({},Gt),Vn),e.pluginHooks.eventSourceRefiners)}function Gn(e,t){return"function"==typeof e&&(e=e()),null==e?t.createNowMarker():t.createMarker(e)}var qn=function(){function e(){}return e.prototype.getCurrentData=function(){return this.currentDataManager.getCurrentData()},e.prototype.dispatch=function(e){return this.currentDataManager.dispatch(e)},Object.defineProperty(e.prototype,"view",{get:function(){return this.getCurrentData().viewApi},enumerable:!1,configurable:!0}),e.prototype.batchRendering=function(e){e()},e.prototype.updateSize=function(){this.trigger("_resize",!0)},e.prototype.setOption=function(e,t){this.dispatch({type:"SET_OPTION",optionName:e,rawOptionValue:t})},e.prototype.getOption=function(e){return this.currentDataManager.currentCalendarOptionsInput[e]},e.prototype.getAvailableLocaleCodes=function(){return Object.keys(this.getCurrentData().availableRawLocales)},e.prototype.on=function(e,t){var n=this.currentDataManager;n.currentCalendarOptionsRefiners[e]?n.emitter.on(e,t):console.warn("Unknown listener name '"+e+"'")},e.prototype.off=function(e,t){this.currentDataManager.emitter.off(e,t)},e.prototype.trigger=function(e){for(var t,n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r];(t=this.currentDataManager.emitter).trigger.apply(t,o([e],n))},e.prototype.changeView=function(e,t){var n=this;this.batchRendering(function(){if(n.unselect(),t)if(t.start&&t.end)n.dispatch({type:"CHANGE_VIEW_TYPE",viewType:e}),n.dispatch({type:"SET_OPTION",optionName:"visibleRange",rawOptionValue:t});else{var r=n.getCurrentData().dateEnv;n.dispatch({type:"CHANGE_VIEW_TYPE",viewType:e,dateMarker:r.createMarker(t)})}else n.dispatch({type:"CHANGE_VIEW_TYPE",viewType:e})})},e.prototype.zoomTo=function(e,t){var n;t=t||"day",n=this.getCurrentData().viewSpecs[t]||this.getUnitViewSpec(t),this.unselect(),n?this.dispatch({type:"CHANGE_VIEW_TYPE",viewType:n.type,dateMarker:e}):this.dispatch({type:"CHANGE_DATE",dateMarker:e})},e.prototype.getUnitViewSpec=function(e){var t,n,r=this.getCurrentData(),o=r.viewSpecs,i=r.toolbarConfig,a=[].concat(i.viewsWithButtons);for(var s in o)a.push(s);for(t=0;t<a.length;t+=1)if((n=o[a[t]])&&n.singleUnit===e)return n;return null},e.prototype.prev=function(){this.unselect(),this.dispatch({type:"PREV"})},e.prototype.next=function(){this.unselect(),this.dispatch({type:"NEXT"})},e.prototype.prevYear=function(){var e=this.getCurrentData();this.unselect(),this.dispatch({type:"CHANGE_DATE",dateMarker:e.dateEnv.addYears(e.currentDate,-1)})},e.prototype.nextYear=function(){var e=this.getCurrentData();this.unselect(),this.dispatch({type:"CHANGE_DATE",dateMarker:e.dateEnv.addYears(e.currentDate,1)})},e.prototype.today=function(){var e=this.getCurrentData();this.unselect(),this.dispatch({type:"CHANGE_DATE",dateMarker:Gn(e.calendarOptions.now,e.dateEnv)})},e.prototype.gotoDate=function(e){var t=this.getCurrentData();this.unselect(),this.dispatch({type:"CHANGE_DATE",dateMarker:t.dateEnv.createMarker(e)})},e.prototype.incrementDate=function(e){var t=this.getCurrentData(),n=Xe(e);n&&(this.unselect(),this.dispatch({type:"CHANGE_DATE",dateMarker:t.dateEnv.add(t.currentDate,n)}))},e.prototype.getDate=function(){var e=this.getCurrentData();return e.dateEnv.toDate(e.currentDate)},e.prototype.formatDate=function(e,t){var n=this.getCurrentData().dateEnv;return n.format(n.createMarker(e),Mt(t))},e.prototype.formatRange=function(e,t,n){var r=this.getCurrentData().dateEnv;return r.formatRange(r.createMarker(e),r.createMarker(t),Mt(n),n)},e.prototype.formatIso=function(e,t){var n=this.getCurrentData().dateEnv;return n.formatIso(n.createMarker(e),{omitTime:t})},e.prototype.select=function(e,t){var n;n=null==t?null!=e.start?e:{start:e,end:null}:{start:e,end:t};var r=this.getCurrentData(),o=In(n,r.dateEnv,Xe({days:1}));o&&(this.dispatch({type:"SELECT_DATES",selection:o}),On(o,null,r))},e.prototype.unselect=function(e){var t=this.getCurrentData();t.dateSelection&&(this.dispatch({type:"UNSELECT_DATES"}),function(e,t){t.emitter.trigger("unselect",{jsEvent:e?e.origEvent:null,view:t.viewApi||t.calendarApi.view})}(e,t))},e.prototype.addEvent=function(e,t){if(e instanceof Yn){var n=e._def,r=e._instance;return this.getCurrentData().eventStore.defs[n.defId]||(this.dispatch({type:"ADD_EVENTS",eventStore:Bt({def:n,instance:r})}),this.triggerEventAdd(e)),e}var o,i=this.getCurrentData();if(t instanceof B)o=t.internalEventSource;else if("boolean"==typeof t)t&&(o=Ue(i.eventSources)[0]);else if(null!=t){var a=this.getEventSourceById(t);if(!a)return console.warn('Could not find an event source with ID "'+t+'"'),null;o=a.internalEventSource}var s=Qt(e,o,i,!1);if(s){var l=new Yn(i,s.def,s.def.recurringDef?null:s.instance);return this.dispatch({type:"ADD_EVENTS",eventStore:Bt(s)}),this.triggerEventAdd(l),l}return null},e.prototype.triggerEventAdd=function(e){var t=this;this.getCurrentData().emitter.trigger("eventAdd",{event:e,relatedEvents:[],revert:function(){t.dispatch({type:"REMOVE_EVENTS",eventStore:Zn(e)})}})},e.prototype.getEventById=function(e){var t=this.getCurrentData(),n=t.eventStore,r=n.defs,o=n.instances;for(var i in e=String(e),r){var a=r[i];if(a.publicId===e){if(a.recurringDef)return new Yn(t,a,null);for(var s in o){var l=o[s];if(l.defId===a.defId)return new Yn(t,a,l)}}}return null},e.prototype.getEvents=function(){var e=this.getCurrentData();return Xn(e.eventStore,e)},e.prototype.removeAllEvents=function(){this.dispatch({type:"REMOVE_ALL_EVENTS"})},e.prototype.getEventSources=function(){var e=this.getCurrentData(),t=e.eventSources,n=[];for(var r in t)n.push(new B(e,t[r]));return n},e.prototype.getEventSourceById=function(e){var t=this.getCurrentData(),n=t.eventSources;for(var r in e=String(e),n)if(n[r].publicId===e)return new B(t,n[r]);return null},e.prototype.addEventSource=function(e){var t=this.getCurrentData();if(e instanceof B)return t.eventSources[e.internalEventSource.sourceId]||this.dispatch({type:"ADD_EVENT_SOURCES",sources:[e.internalEventSource]}),e;var n=Fn(e,t);return n?(this.dispatch({type:"ADD_EVENT_SOURCES",sources:[n]}),new B(t,n)):null},e.prototype.removeAllEventSources=function(){this.dispatch({type:"REMOVE_ALL_EVENT_SOURCES"})},e.prototype.refetchEvents=function(){this.dispatch({type:"FETCH_EVENT_SOURCES"})},e.prototype.scrollToTime=function(e){var t=Xe(e);t&&this.trigger("_scrollRequest",{time:t})},e}(),Yn=function(){function e(e,t,n){this._context=e,this._def=t,this._instance=n||null}return e.prototype.setProp=function(e,t){var n,r;if(e in Jt)console.warn("Could not set date-related prop 'name'. Use one of the date-related methods instead.");else if(e in Kt)t=Kt[e](t),this.mutate({standardProps:(n={},n[e]=t,n)});else if(e in Gt){var o=Gt[e](t);"color"===e?o={backgroundColor:t,borderColor:t}:"editable"===e?o={startEditable:t,durationEditable:t}:((r={})[e]=t,o=r),this.mutate({standardProps:{ui:o}})}else console.warn("Could not set prop '"+e+"'. Use setExtendedProp instead.")},e.prototype.setExtendedProp=function(e,t){var n;this.mutate({extendedProps:(n={},n[e]=t,n)})},e.prototype.setStart=function(e,t){void 0===t&&(t={});var n=this._context.dateEnv,r=n.createMarker(e);if(r&&this._instance){var o=sn(this._instance.range.start,r,n,t.granularity);t.maintainDuration?this.mutate({datesDelta:o}):this.mutate({startDelta:o})}},e.prototype.setEnd=function(e,t){void 0===t&&(t={});var n,r=this._context.dateEnv;if((null==e||(n=r.createMarker(e)))&&this._instance)if(n){var o=sn(this._instance.range.end,n,r,t.granularity);this.mutate({endDelta:o})}else this.mutate({standardProps:{hasEnd:!1}})},e.prototype.setDates=function(e,t,n){void 0===n&&(n={});var r,o,i,a=this._context.dateEnv,s={allDay:n.allDay},l=a.createMarker(e);if(l&&(null==t||(r=a.createMarker(t)))&&this._instance){var u=this._instance.range;!0===n.allDay&&(u=rn(u));var c=sn(u.start,l,a,n.granularity);if(r){var d=sn(u.end,r,a,n.granularity);i=d,(o=c).years===i.years&&o.months===i.months&&o.days===i.days&&o.milliseconds===i.milliseconds?this.mutate({datesDelta:c,standardProps:s}):this.mutate({startDelta:c,endDelta:d,standardProps:s})}else s.hasEnd=!1,this.mutate({datesDelta:c,standardProps:s})}},e.prototype.moveStart=function(e){var t=Xe(e);t&&this.mutate({startDelta:t})},e.prototype.moveEnd=function(e){var t=Xe(e);t&&this.mutate({endDelta:t})},e.prototype.moveDates=function(e){var t=Xe(e);t&&this.mutate({datesDelta:t})},e.prototype.setAllDay=function(e,t){void 0===t&&(t={});var n={allDay:e},r=t.maintainDuration;null==r&&(r=this._context.options.allDayMaintainDuration),this._def.allDay!==e&&(n.hasEnd=r),this.mutate({standardProps:n})},e.prototype.formatRange=function(e){var t=this._context.dateEnv,n=this._instance,r=Mt(e);return this._def.hasEnd?t.formatRange(n.range.start,n.range.end,r,{forcedStartTzo:n.forcedStartTzo,forcedEndTzo:n.forcedEndTzo}):t.format(n.range.start,r,{forcedTzo:n.forcedStartTzo})},e.prototype.mutate=function(t){var n=this._instance;if(n){var r=this._def,o=this._context,i=zt(o.getCurrentData().eventStore,n.instanceId);i=Ln(i,{"":{display:"",startEditable:!0,durationEditable:!0,constraints:[],overlap:null,allows:[],backgroundColor:"",borderColor:"",textColor:"",classNames:[]}},t,o);var a=new e(o,r,n);this._def=i.defs[r.defId],this._instance=i.instances[n.instanceId],o.dispatch({type:"MERGE_EVENTS",eventStore:i}),o.emitter.trigger("eventChange",{oldEvent:a,event:this,relatedEvents:Xn(i,o,n),revert:function(){o.dispatch({type:"REMOVE_EVENTS",eventStore:i})}})}},e.prototype.remove=function(){var e=this._context,t=Zn(this);e.dispatch({type:"REMOVE_EVENTS",eventStore:t}),e.emitter.trigger("eventRemove",{event:this,relatedEvents:[],revert:function(){e.dispatch({type:"MERGE_EVENTS",eventStore:t})}})},Object.defineProperty(e.prototype,"source",{get:function(){var e=this._def.sourceId;return e?new B(this._context,this._context.getCurrentData().eventSources[e]):null},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"start",{get:function(){return this._instance?this._context.dateEnv.toDate(this._instance.range.start):null},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"end",{get:function(){return this._instance&&this._def.hasEnd?this._context.dateEnv.toDate(this._instance.range.end):null},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"startStr",{get:function(){var e=this._instance;return e?this._context.dateEnv.formatIso(e.range.start,{omitTime:this._def.allDay,forcedTzo:e.forcedStartTzo}):""},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"endStr",{get:function(){var e=this._instance;return e&&this._def.hasEnd?this._context.dateEnv.formatIso(e.range.end,{omitTime:this._def.allDay,forcedTzo:e.forcedEndTzo}):""},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"id",{get:function(){return this._def.publicId},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"groupId",{get:function(){return this._def.groupId},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"allDay",{get:function(){return this._def.allDay},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"title",{get:function(){return this._def.title},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"url",{get:function(){return this._def.url},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"display",{get:function(){return this._def.ui.display||"auto"},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"startEditable",{get:function(){return this._def.ui.startEditable},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"durationEditable",{get:function(){return this._def.ui.durationEditable},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"constraint",{get:function(){return this._def.ui.constraints[0]||null},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"overlap",{get:function(){return this._def.ui.overlap},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"allow",{get:function(){return this._def.ui.allows[0]||null},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"backgroundColor",{get:function(){return this._def.ui.backgroundColor},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"borderColor",{get:function(){return this._def.ui.borderColor},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"textColor",{get:function(){return this._def.ui.textColor},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"classNames",{get:function(){return this._def.ui.classNames},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"extendedProps",{get:function(){return this._def.extendedProps},enumerable:!1,configurable:!0}),e.prototype.toPlainObject=function(e){void 0===e&&(e={});var t=this._def,n=t.ui,o=this.startStr,i=this.endStr,a={};return t.title&&(a.title=t.title),o&&(a.start=o),i&&(a.end=i),t.publicId&&(a.id=t.publicId),t.groupId&&(a.groupId=t.groupId),t.url&&(a.url=t.url),n.display&&"auto"!==n.display&&(a.display=n.display),e.collapseColor&&n.backgroundColor&&n.backgroundColor===n.borderColor?a.color=n.backgroundColor:(n.backgroundColor&&(a.backgroundColor=n.backgroundColor),n.borderColor&&(a.borderColor=n.borderColor)),n.textColor&&(a.textColor=n.textColor),n.classNames.length&&(a.classNames=n.classNames),Object.keys(t.extendedProps).length&&(e.collapseExtendedProps?r(a,t.extendedProps):a.extendedProps=t.extendedProps),a},e.prototype.toJSON=function(){return this.toPlainObject()},e}();function Zn(e){var t,n,r=e._def,o=e._instance;return{defs:(t={},t[r.defId]=r,t),instances:o?(n={},n[o.instanceId]=o,n):{}}}function Xn(e,t,n){var r=e.defs,o=e.instances,i=[],a=n?n.instanceId:"";for(var s in o){var l=o[s],u=r[l.defId];l.instanceId!==a&&i.push(new Yn(t,u,l))}return i}var Kn,Jn={};Kn=function(){function e(){}return e.prototype.getMarkerYear=function(e){return e.getUTCFullYear()},e.prototype.getMarkerMonth=function(e){return e.getUTCMonth()},e.prototype.getMarkerDay=function(e){return e.getUTCDate()},e.prototype.arrayToMarker=function(e){return Pe(e)},e.prototype.markerToArray=function(e){return ke(e)},e}(),Jn.gregory=Kn;var $n=/^\s*(\d{4})(-?(\d{2})(-?(\d{2})([T ](\d{2}):?(\d{2})(:?(\d{2})(\.(\d+))?)?(Z|(([-+])(\d{2})(:?(\d{2}))?))?)?)?)?$/;function Qn(e){var t=$n.exec(e);if(t){var n=new Date(Date.UTC(Number(t[1]),t[3]?Number(t[3])-1:0,Number(t[5]||1),Number(t[7]||0),Number(t[8]||0),Number(t[10]||0),t[12]?1e3*Number("0."+t[12]):0));if(Ie(n)){var r=null;return t[13]&&(r=("-"===t[15]?-1:1)*(60*Number(t[16]||0)+Number(t[18]||0))),{marker:n,isTimeUnspecified:!t[6],timeZoneOffset:r}}}return null}var er=function(){function e(e){var t=this.timeZone=e.timeZone,n="local"!==t&&"UTC"!==t;e.namedTimeZoneImpl&&n&&(this.namedTimeZoneImpl=new e.namedTimeZoneImpl(t)),this.canComputeOffset=Boolean(!n||this.namedTimeZoneImpl),this.calendarSystem=function(e){return new Jn[e]}(e.calendarSystem),this.locale=e.locale,this.weekDow=e.locale.week.dow,this.weekDoy=e.locale.week.doy,"ISO"===e.weekNumberCalculation&&(this.weekDow=1,this.weekDoy=4),"number"==typeof e.firstDay&&(this.weekDow=e.firstDay),"function"==typeof e.weekNumberCalculation&&(this.weekNumberFunc=e.weekNumberCalculation),this.weekText=null!=e.weekText?e.weekText:e.locale.options.weekText,this.cmdFormatter=e.cmdFormatter,this.defaultSeparator=e.defaultSeparator}return e.prototype.createMarker=function(e){var t=this.createMarkerMeta(e);return null===t?null:t.marker},e.prototype.createNowMarker=function(){return this.canComputeOffset?this.timestampToMarker((new Date).valueOf()):Pe(xe(new Date))},e.prototype.createMarkerMeta=function(e){if("string"==typeof e)return this.parse(e);var t=null;return"number"==typeof e?t=this.timestampToMarker(e):e instanceof Date?(e=e.valueOf(),isNaN(e)||(t=this.timestampToMarker(e))):Array.isArray(e)&&(t=Pe(e)),null!==t&&Ie(t)?{marker:t,isTimeUnspecified:!1,forcedTzo:null}:null},e.prototype.parse=function(e){var t=Qn(e);if(null===t)return null;var n=t.marker,r=null;return null!==t.timeZoneOffset&&(this.canComputeOffset?n=this.timestampToMarker(n.valueOf()-60*t.timeZoneOffset*1e3):r=t.timeZoneOffset),{marker:n,isTimeUnspecified:t.isTimeUnspecified,forcedTzo:r}},e.prototype.getYear=function(e){return this.calendarSystem.getMarkerYear(e)},e.prototype.getMonth=function(e){return this.calendarSystem.getMarkerMonth(e)},e.prototype.add=function(e,t){var n=this.calendarSystem.markerToArray(e);return n[0]+=t.years,n[1]+=t.months,n[2]+=t.days,n[6]+=t.milliseconds,this.calendarSystem.arrayToMarker(n)},e.prototype.subtract=function(e,t){var n=this.calendarSystem.markerToArray(e);return n[0]-=t.years,n[1]-=t.months,n[2]-=t.days,n[6]-=t.milliseconds,this.calendarSystem.arrayToMarker(n)},e.prototype.addYears=function(e,t){var n=this.calendarSystem.markerToArray(e);return n[0]+=t,this.calendarSystem.arrayToMarker(n)},e.prototype.addMonths=function(e,t){var n=this.calendarSystem.markerToArray(e);return n[1]+=t,this.calendarSystem.arrayToMarker(n)},e.prototype.diffWholeYears=function(e,t){var n=this.calendarSystem;return _e(e)===_e(t)&&n.getMarkerDay(e)===n.getMarkerDay(t)&&n.getMarkerMonth(e)===n.getMarkerMonth(t)?n.getMarkerYear(t)-n.getMarkerYear(e):null},e.prototype.diffWholeMonths=function(e,t){var n=this.calendarSystem;return _e(e)===_e(t)&&n.getMarkerDay(e)===n.getMarkerDay(t)?n.getMarkerMonth(t)-n.getMarkerMonth(e)+12*(n.getMarkerYear(t)-n.getMarkerYear(e)):null},e.prototype.greatestWholeUnit=function(e,t){var n=this.diffWholeYears(e,t);return null!==n?{unit:"year",value:n}:null!==(n=this.diffWholeMonths(e,t))?{unit:"month",value:n}:null!==(n=De(e,t))?{unit:"week",value:n}:null!==(n=Re(e,t))?{unit:"day",value:n}:he(n=function(e,t){return(t.valueOf()-e.valueOf())/36e5}(e,t))?{unit:"hour",value:n}:he(n=function(e,t){return(t.valueOf()-e.valueOf())/6e4}(e,t))?{unit:"minute",value:n}:he(n=function(e,t){return(t.valueOf()-e.valueOf())/1e3}(e,t))?{unit:"second",value:n}:{unit:"millisecond",value:t.valueOf()-e.valueOf()}},e.prototype.countDurationsBetween=function(e,t,n){var r;return n.years&&null!==(r=this.diffWholeYears(e,t))?r/(et(n)/365):n.months&&null!==(r=this.diffWholeMonths(e,t))?r/(et(n)/30):n.days&&null!==(r=Re(e,t))?r/et(n):(t.valueOf()-e.valueOf())/rt(n)},e.prototype.startOf=function(e,t){return"year"===t?this.startOfYear(e):"month"===t?this.startOfMonth(e):"week"===t?this.startOfWeek(e):"day"===t?we(e):"hour"===t?function(e){return Pe([e.getUTCFullYear(),e.getUTCMonth(),e.getUTCDate(),e.getUTCHours()])}(e):"minute"===t?function(e){return Pe([e.getUTCFullYear(),e.getUTCMonth(),e.getUTCDate(),e.getUTCHours(),e.getUTCMinutes()])}(e):"second"===t?function(e){return Pe([e.getUTCFullYear(),e.getUTCMonth(),e.getUTCDate(),e.getUTCHours(),e.getUTCMinutes(),e.getUTCSeconds()])}(e):null},e.prototype.startOfYear=function(e){return this.calendarSystem.arrayToMarker([this.calendarSystem.getMarkerYear(e)])},e.prototype.startOfMonth=function(e){return this.calendarSystem.arrayToMarker([this.calendarSystem.getMarkerYear(e),this.calendarSystem.getMarkerMonth(e)])},e.prototype.startOfWeek=function(e){return this.calendarSystem.arrayToMarker([this.calendarSystem.getMarkerYear(e),this.calendarSystem.getMarkerMonth(e),e.getUTCDate()-(e.getUTCDay()-this.weekDow+7)%7])},e.prototype.computeWeekNumber=function(e){return this.weekNumberFunc?this.weekNumberFunc(this.toDate(e)):function(e,t,n){var r=e.getUTCFullYear(),o=Te(e,r,t,n);if(o<1)return Te(e,r-1,t,n);var i=Te(e,r+1,t,n);return i>=1?Math.min(o,i):o}(e,this.weekDow,this.weekDoy)},e.prototype.format=function(e,t,n){return void 0===n&&(n={}),t.format({marker:e,timeZoneOffset:null!=n.forcedTzo?n.forcedTzo:this.offsetForMarker(e)},this)},e.prototype.formatRange=function(e,t,n,r){return void 0===r&&(r={}),r.isEndExclusive&&(t=Se(t,-1)),n.formatRange({marker:e,timeZoneOffset:null!=r.forcedStartTzo?r.forcedStartTzo:this.offsetForMarker(e)},{marker:t,timeZoneOffset:null!=r.forcedEndTzo?r.forcedEndTzo:this.offsetForMarker(t)},this,r.defaultSeparator)},e.prototype.formatIso=function(e,t){void 0===t&&(t={});var n=null;return t.omitTimeZoneOffset||(n=null!=t.forcedTzo?t.forcedTzo:this.offsetForMarker(e)),function(e,t,n){void 0===n&&(n=!1);var r=e.toISOString();return r=r.replace(".000",""),n&&(r=r.replace("T00:00:00Z","")),r.length>10&&(null==t?r=r.replace("Z",""):0!==t&&(r=r.replace("Z",lt(t,!0)))),r}(e,n,t.omitTime)},e.prototype.timestampToMarker=function(e){return"local"===this.timeZone?Pe(xe(new Date(e))):"UTC"!==this.timeZone&&this.namedTimeZoneImpl?Pe(this.namedTimeZoneImpl.timestampToArray(e)):new Date(e)},e.prototype.offsetForMarker=function(e){return"local"===this.timeZone?-Me(ke(e)).getTimezoneOffset():"UTC"===this.timeZone?0:this.namedTimeZoneImpl?this.namedTimeZoneImpl.offsetForArray(ke(e)):null},e.prototype.toDate=function(e,t){return"local"===this.timeZone?Me(ke(e)):"UTC"===this.timeZone?new Date(e.valueOf()):this.namedTimeZoneImpl?new Date(e.valueOf()-1e3*this.namedTimeZoneImpl.offsetForArray(ke(e))*60):new Date(e.valueOf()-(t||0))},e}(),tr=[],nr={code:"en",week:{dow:0,doy:4},direction:"ltr",buttonText:{prev:"prev",next:"next",prevYear:"prev year",nextYear:"next year",year:"year",today:"today",month:"month",week:"week",day:"day",list:"list"},weekText:"W",allDayText:"all-day",moreLinkText:"more",noEventsText:"No events to display"};function rr(e){for(var t=e.length>0?e[0].code:"en",n=tr.concat(e),r={en:nr},o=0,i=n;o<i.length;o++){var a=i[o];r[a.code]=a}return{map:r,defaultCode:t}}function or(e,t){return"object"!=typeof e||Array.isArray(e)?function(e,t){var n=[].concat(e||[]),r=function(e,t){for(var n=0;n<e.length;n+=1)for(var r=e[n].toLocaleLowerCase().split("-"),o=r.length;o>0;o-=1){var i=r.slice(0,o).join("-");if(t[i])return t[i]}return null}(n,t)||nr;return ir(e,n,r)}(e,t):ir(e.code,[e.code],e)}function ir(e,t,n){var r=Oe([nr,n],["buttonText"]);delete r.code;var o=r.week;return delete r.week,{codeArg:e,codes:t,week:o,simpleNumberFormat:new Intl.NumberFormat(e),options:r}}function ar(e){var t=or(e.locale||"en",rr([]).map);return new er(r(r({timeZone:Pt.timeZone,calendarSystem:"gregory"},e),{locale:t}))}var sr,lr={startTime:"09:00",endTime:"17:00",daysOfWeek:[1,2,3,4,5],display:"inverse-background",classNames:"fc-non-business",groupId:"_businessHours"};function ur(e,t){return Ut(function(e){return(!0===e?[{}]:Array.isArray(e)?e.filter(function(e){return e.daysOfWeek}):"object"==typeof e&&e?[e]:[]).map(function(e){return r(r({},lr),e)})}(e),null,t)}function cr(e,t){return e.left>=t.left&&e.left<t.right&&e.top>=t.top&&e.top<t.bottom}function dr(e,t){var n={left:Math.max(e.left,t.left),right:Math.min(e.right,t.right),top:Math.max(e.top,t.top),bottom:Math.min(e.bottom,t.bottom)};return n.left<n.right&&n.top<n.bottom&&n}function pr(e,t,n){return{left:e.left+t,right:e.right+t,top:e.top+n,bottom:e.bottom+n}}function fr(e,t){return{left:Math.min(Math.max(e.left,t.left),t.right),top:Math.min(Math.max(e.top,t.top),t.bottom)}}function hr(e){return{left:(e.left+e.right)/2,top:(e.top+e.bottom)/2}}function gr(e,t){return{left:e.left-t.left,top:e.top-t.top}}function vr(){return null==sr&&(sr=function(){if("undefined"==typeof document)return!0;var e=document.createElement("div");e.style.position="absolute",e.style.top="0px",e.style.left="0px",e.innerHTML="<table><tr><td><div></div></td></tr></table>",e.querySelector("table").style.height="100px",e.querySelector("div").style.height="100%",document.body.appendChild(e);var t=e.querySelector("div").offsetHeight>0;return document.body.removeChild(e),t}()),sr}var mr={defs:{},instances:{}},yr=function(){function e(){this.getKeysForEventDefs=dt(this._getKeysForEventDefs),this.splitDateSelection=dt(this._splitDateSpan),this.splitEventStore=dt(this._splitEventStore),this.splitIndividualUi=dt(this._splitIndividualUi),this.splitEventDrag=dt(this._splitInteraction),this.splitEventResize=dt(this._splitInteraction),this.eventUiBuilders={}}return e.prototype.splitProps=function(e){var t=this,n=this.getKeyInfo(e),r=this.getKeysForEventDefs(e.eventStore),o=this.splitDateSelection(e.dateSelection),i=this.splitIndividualUi(e.eventUiBases,r),a=this.splitEventStore(e.eventStore,r),s=this.splitEventDrag(e.eventDrag),l=this.splitEventResize(e.eventResize),u={};for(var c in this.eventUiBuilders=Ae(n,function(e,n){return t.eventUiBuilders[n]||dt(Sr)}),n){var d=n[c],p=a[c]||mr,f=this.eventUiBuilders[c];u[c]={businessHours:d.businessHours||e.businessHours,dateSelection:o[c]||null,eventStore:p,eventUiBases:f(e.eventUiBases[""],d.ui,i[c]),eventSelection:p.instances[e.eventSelection]?e.eventSelection:"",eventDrag:s[c]||null,eventResize:l[c]||null}}return u},e.prototype._splitDateSpan=function(e){var t={};if(e)for(var n=0,r=this.getKeysForDateSpan(e);n<r.length;n++)t[r[n]]=e;return t},e.prototype._getKeysForEventDefs=function(e){var t=this;return Ae(e.defs,function(e){return t.getKeysForEventDef(e)})},e.prototype._splitEventStore=function(e,t){var n=e.defs,r=e.instances,o={};for(var i in n)for(var a=0,s=t[i];a<s.length;a++)o[p=s[a]]||(o[p]={defs:{},instances:{}}),o[p].defs[i]=n[i];for(var l in r)for(var u=r[l],c=0,d=t[u.defId];c<d.length;c++){var p;o[p=d[c]]&&(o[p].instances[l]=u)}return o},e.prototype._splitIndividualUi=function(e,t){var n={};for(var r in e)if(r)for(var o=0,i=t[r];o<i.length;o++){var a=i[o];n[a]||(n[a]={}),n[a][r]=e[r]}return n},e.prototype._splitInteraction=function(e){var t={};if(e){var n=this._splitEventStore(e.affectedEvents,this._getKeysForEventDefs(e.affectedEvents)),r=this._getKeysForEventDefs(e.mutatedEvents),o=this._splitEventStore(e.mutatedEvents,r),i=function(r){t[r]||(t[r]={affectedEvents:n[r]||mr,mutatedEvents:o[r]||mr,isEvent:e.isEvent})};for(var a in n)i(a);for(var a in o)i(a)}return t},e}();function Sr(e,t,n){var o=[];e&&o.push(e),t&&o.push(t);var i={"":Zt(o)};return n&&r(i,n),i}function Er(e,t,n,r){return{dow:e.getUTCDay(),isDisabled:Boolean(r&&!hn(r.activeRange,e)),isOther:Boolean(r&&!hn(r.currentRange,e)),isToday:Boolean(t&&hn(t,e)),isPast:Boolean(n?e<n:!!t&&e<t.start),isFuture:Boolean(n?e>n:!!t&&e>=t.end)}}function Cr(e,t){var n=["fc-day","fc-day-"+ve[e.dow]];return e.isDisabled?n.push("fc-day-disabled"):(e.isToday&&(n.push("fc-day-today"),n.push(t.getClass("today"))),e.isPast&&n.push("fc-day-past"),e.isFuture&&n.push("fc-day-future"),e.isOther&&n.push("fc-day-other")),n}function br(e,t){var n=["fc-slot","fc-slot-"+ve[e.dow]];return e.isDisabled?n.push("fc-slot-disabled"):(e.isToday&&(n.push("fc-slot-today"),n.push(t.getClass("today"))),e.isPast&&n.push("fc-slot-past"),e.isFuture&&n.push("fc-slot-future")),n}function Dr(e,t){return void 0===t&&(t="day"),JSON.stringify({date:at(e),type:t})}var Rr,wr=null;function Tr(){return null===wr&&(wr=function(){var e=document.createElement("div");Y(e,{position:"absolute",top:-1e3,left:0,border:0,padding:0,overflow:"scroll",direction:"rtl"}),e.innerHTML="<div></div>",document.body.appendChild(e);var t=e.firstChild.getBoundingClientRect().left>e.getBoundingClientRect().left;return z(e),t}()),wr}function xr(){return Rr||(Rr=function(){var e=document.createElement("div");e.style.overflow="scroll",document.body.appendChild(e);var t=Mr(e);return document.body.removeChild(e),t}()),Rr}function Mr(e){return{x:e.offsetHeight-e.clientHeight,y:e.offsetWidth-e.clientWidth}}function kr(e,t){void 0===t&&(t=!1);var n=window.getComputedStyle(e),r=parseInt(n.borderLeftWidth,10)||0,o=parseInt(n.borderRightWidth,10)||0,i=parseInt(n.borderTopWidth,10)||0,a=parseInt(n.borderBottomWidth,10)||0,s=Mr(e),l=s.y-r-o,u={borderLeft:r,borderRight:o,borderTop:i,borderBottom:a,scrollbarBottom:s.x-i-a,scrollbarLeft:0,scrollbarRight:0};return Tr()&&"rtl"===n.direction?u.scrollbarLeft=l:u.scrollbarRight=l,t&&(u.paddingLeft=parseInt(n.paddingLeft,10)||0,u.paddingRight=parseInt(n.paddingRight,10)||0,u.paddingTop=parseInt(n.paddingTop,10)||0,u.paddingBottom=parseInt(n.paddingBottom,10)||0),u}function Pr(e,t,n){void 0===t&&(t=!1);var r=n?e.getBoundingClientRect():Ir(e),o=kr(e,t),i={left:r.left+o.borderLeft+o.scrollbarLeft,right:r.right-o.borderRight-o.scrollbarRight,top:r.top+o.borderTop,bottom:r.bottom-o.borderBottom-o.scrollbarBottom};return t&&(i.left+=o.paddingLeft,i.right-=o.paddingRight,i.top+=o.paddingTop,i.bottom-=o.paddingBottom),i}function Ir(e){var t=e.getBoundingClientRect();return{left:t.left+window.pageXOffset,top:t.top+window.pageYOffset,right:t.right+window.pageXOffset,bottom:t.bottom+window.pageYOffset}}function _r(e){for(var t=[];e instanceof HTMLElement;){var n=window.getComputedStyle(e);if("fixed"===n.position)break;/(auto|scroll)/.test(n.overflow+n.overflowY+n.overflowX)&&t.push(e),e=e.parentNode}return t}function Nr(e,t,n){var r=!1,o=function(){r||(r=!0,t.apply(this,arguments))},i=function(){r||(r=!0,n&&n.apply(this,arguments))},a=e(o,i);a&&"function"==typeof a.then&&a.then(o,i)}var Hr=function(){function e(){this.handlers={},this.thisContext=null}return e.prototype.setThisContext=function(e){this.thisContext=e},e.prototype.setOptions=function(e){this.options=e},e.prototype.on=function(e,t){!function(e,t,n){(e[t]||(e[t]=[])).push(n)}(this.handlers,e,t)},e.prototype.off=function(e,t){!function(e,t,n){n?e[t]&&(e[t]=e[t].filter(function(e){return e!==n})):delete e[t]}(this.handlers,e,t)},e.prototype.trigger=function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];for(var r=this.handlers[e]||[],o=this.options&&this.options[e],i=0,a=[].concat(o||[],r);i<a.length;i++){a[i].apply(this.thisContext,t)}},e.prototype.hasHandlers=function(e){return this.handlers[e]&&this.handlers[e].length||this.options&&this.options[e]},e}(),Or=function(){function e(e,t,n,r){this.els=t;var o=this.originClientRect=e.getBoundingClientRect();n&&this.buildElHorizontals(o.left),r&&this.buildElVerticals(o.top)}return e.prototype.buildElHorizontals=function(e){for(var t=[],n=[],r=0,o=this.els;r<o.length;r++){var i=o[r].getBoundingClientRect();t.push(i.left-e),n.push(i.right-e)}this.lefts=t,this.rights=n},e.prototype.buildElVerticals=function(e){for(var t=[],n=[],r=0,o=this.els;r<o.length;r++){var i=o[r].getBoundingClientRect();t.push(i.top-e),n.push(i.bottom-e)}this.tops=t,this.bottoms=n},e.prototype.leftToIndex=function(e){var t,n=this.lefts,r=this.rights,o=n.length;for(t=0;t<o;t+=1)if(e>=n[t]&&e<r[t])return t},e.prototype.topToIndex=function(e){var t,n=this.tops,r=this.bottoms,o=n.length;for(t=0;t<o;t+=1)if(e>=n[t]&&e<r[t])return t},e.prototype.getWidth=function(e){return this.rights[e]-this.lefts[e]},e.prototype.getHeight=function(e){return this.bottoms[e]-this.tops[e]},e}(),Wr=function(){function e(){}return e.prototype.getMaxScrollTop=function(){return this.getScrollHeight()-this.getClientHeight()},e.prototype.getMaxScrollLeft=function(){return this.getScrollWidth()-this.getClientWidth()},e.prototype.canScrollVertically=function(){return this.getMaxScrollTop()>0},e.prototype.canScrollHorizontally=function(){return this.getMaxScrollLeft()>0},e.prototype.canScrollUp=function(){return this.getScrollTop()>0},e.prototype.canScrollDown=function(){return this.getScrollTop()<this.getMaxScrollTop()},e.prototype.canScrollLeft=function(){return this.getScrollLeft()>0},e.prototype.canScrollRight=function(){return this.getScrollLeft()<this.getMaxScrollLeft()},e}(),Ar=function(e){function t(t){var n=e.call(this)||this;return n.el=t,n}return n(t,e),t.prototype.getScrollTop=function(){return this.el.scrollTop},t.prototype.getScrollLeft=function(){return this.el.scrollLeft},t.prototype.setScrollTop=function(e){this.el.scrollTop=e},t.prototype.setScrollLeft=function(e){this.el.scrollLeft=e},t.prototype.getScrollWidth=function(){return this.el.scrollWidth},t.prototype.getScrollHeight=function(){return this.el.scrollHeight},t.prototype.getClientHeight=function(){return this.el.clientHeight},t.prototype.getClientWidth=function(){return this.el.clientWidth},t}(Wr),Lr=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return n(t,e),t.prototype.getScrollTop=function(){return window.pageYOffset},t.prototype.getScrollLeft=function(){return window.pageXOffset},t.prototype.setScrollTop=function(e){window.scroll(window.pageXOffset,e)},t.prototype.setScrollLeft=function(e){window.scroll(e,window.pageYOffset)},t.prototype.getScrollWidth=function(){return document.documentElement.scrollWidth},t.prototype.getScrollHeight=function(){return document.documentElement.scrollHeight},t.prototype.getClientHeight=function(){return document.documentElement.clientHeight},t.prototype.getClientWidth=function(){return document.documentElement.clientWidth},t}(Wr),Ur=function(){function e(e){this.iconOverrideOption&&this.setIconOverride(e[this.iconOverrideOption])}return e.prototype.setIconOverride=function(e){var t,n;if("object"==typeof e&&e){for(n in t=r({},this.iconClasses),e)t[n]=this.applyIconOverridePrefix(e[n]);this.iconClasses=t}else!1===e&&(this.iconClasses={})},e.prototype.applyIconOverridePrefix=function(e){var t=this.iconOverridePrefix;return t&&0!==e.indexOf(t)&&(e=t+e),e},e.prototype.getClass=function(e){return this.classes[e]||""},e.prototype.getIconClass=function(e,t){var n;return(n=t&&this.rtlIconClasses&&this.rtlIconClasses[e]||this.iconClasses[e])?this.baseIconClass+" "+n:""},e.prototype.getCustomButtonIconClass=function(e){var t;return this.iconOverrideCustomButtonOption&&(t=e[this.iconOverrideCustomButtonOption])?this.baseIconClass+" "+this.applyIconOverridePrefix(t):""},e}();if(Ur.prototype.classes={},Ur.prototype.iconClasses={},Ur.prototype.baseIconClass="",Ur.prototype.iconOverridePrefix="","undefined"==typeof FullCalendarVDom)throw new Error("Please import the top-level fullcalendar lib before attempting to import a plugin.");var Br=FullCalendarVDom.Component,zr=FullCalendarVDom.createElement,Vr=FullCalendarVDom.render,Fr=FullCalendarVDom.createRef,jr=FullCalendarVDom.Fragment,Gr=FullCalendarVDom.createContext,qr=FullCalendarVDom.flushToDom,Yr=FullCalendarVDom.unmountComponentAtNode,Zr=function(){function e(e,t,n){var o=this;this.execFunc=e,this.emitter=t,this.scrollTime=n,this.handleScrollRequest=function(e){o.queuedRequest=r({},o.queuedRequest||{},e),o.drain()},t.on("_scrollRequest",this.handleScrollRequest),this.fireInitialScroll()}return e.prototype.detach=function(){this.emitter.off("_scrollRequest",this.handleScrollRequest)},e.prototype.update=function(e){e?this.fireInitialScroll():this.drain()},e.prototype.fireInitialScroll=function(){this.handleScrollRequest({time:this.scrollTime})},e.prototype.drain=function(){this.queuedRequest&&this.execFunc(this.queuedRequest)&&(this.queuedRequest=null)},e}(),Xr=Gr({});function Kr(e,t,n,r,o,i,a,s,l,u,c,d,p){return{dateEnv:o,options:n,pluginHooks:a,emitter:u,dispatch:s,getCurrentData:l,calendarApi:c,viewSpec:e,viewApi:t,dateProfileGenerator:r,theme:i,isRtl:"rtl"===n.direction,addResizeHandler:function(e){u.on("_resize",e)},removeResizeHandler:function(e){u.off("_resize",e)},createScrollResponder:function(e){return new Zr(e,u,Xe(n.scrollTime))},registerInteractiveComponent:d,unregisterInteractiveComponent:p}}var Jr=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return n(t,e),t.prototype.shouldComponentUpdate=function(e,t){return this.debug&&console.log(ze(e,this.props),ze(t,this.state)),!Ve(this.props,e,this.propEquality)||!Ve(this.state,t,this.stateEquality)},t.addPropsEquality=Qr,t.addStateEquality=eo,t.contextType=Xr,t}(Br);Jr.prototype.propEquality={},Jr.prototype.stateEquality={};var $r=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return n(t,e),t.contextType=Xr,t}(Jr);function Qr(e){var t=Object.create(this.prototype.propEquality);r(t,e),this.prototype.propEquality=t}function eo(e){var t=Object.create(this.prototype.stateEquality);r(t,e),this.prototype.stateEquality=t}function to(e,t){"function"==typeof e?e(t):e&&(e.current=t)}function no(e,t){var n;if(t){n=[];for(var r=0,o=e;r<o.length;r++){var i=o[r],a=t(i);a?n.push(a):null==a&&n.push(i)}}else n=e;return n}function ro(e,t){return Ft(e,function(e){return e.sourceId!==t})}function oo(e,t){return io({eventDrag:e},t)}function io(e,t){var n=t.getCurrentData(),o=r({businessHours:n.businessHours,dateSelection:"",eventStore:n.eventStore,eventUiBases:n.eventUiBases,eventSelection:"",eventDrag:null,eventResize:null},e);return(t.pluginHooks.isPropsValid||ao)(o,t)}function ao(e,t,n,o){return void 0===n&&(n={}),!(e.eventDrag&&!function(e,t,n,o){var i=t.getCurrentData(),a=e.eventDrag,s=a.mutatedEvents,l=s.defs,u=s.instances,c=Sn(l,a.isEvent?e.eventUiBases:{"":i.selectionConfig});o&&(c=Ae(c,o));var d,p,f=(d=e.eventStore,p=a.affectedEvents.instances,{defs:d.defs,instances:We(d.instances,function(e){return!p[e.instanceId]})}),h=f.defs,g=f.instances,v=Sn(h,e.eventUiBases);for(var m in u){var y=u[m],S=y.range,E=c[y.defId],C=l[y.defId];if(!so(E.constraints,S,f,e.businessHours,t))return!1;var b=t.options.eventOverlap,D="function"==typeof b?b:null;for(var R in g){var w=g[R];if(pn(S,w.range)){if(!1===v[w.defId].overlap&&a.isEvent)return!1;if(!1===E.overlap)return!1;if(D&&!D(new Yn(t,h[w.defId],w),new Yn(t,C,y)))return!1}}for(var T=i.eventStore,x=0,M=E.allows;x<M.length;x++){var k,P=M[x],I=r(r({},n),{range:y.range,allDay:C.allDay}),_=T.defs[C.defId],N=T.instances[m];if(k=_?new Yn(t,_,N):new Yn(t,C),!P(Wn(I,t),k))return!1}}return!0}(e,t,n,o)||e.dateSelection&&!function(e,t,n,o){var i=e.eventStore,a=i.defs,s=i.instances,l=e.dateSelection,u=l.range,c=t.getCurrentData().selectionConfig;if(o&&(c=o(c)),!so(c.constraints,u,i,e.businessHours,t))return!1;var d=t.options.selectOverlap,p="function"==typeof d?d:null;for(var f in s){var h=s[f];if(pn(u,h.range)){if(!1===c.overlap)return!1;if(p&&!p(new Yn(t,a[h.defId],h),null))return!1}}for(var g=0,v=c.allows;g<v.length;g++){if(!(0,v[g])(Wn(r(r({},n),l),t),null))return!1}return!0}(e,t,n,o))}function so(e,t,n,r,o){for(var i=0,a=e;i<a.length;i++)if(!co(lo(a[i],t,n,r,o),t))return!1;return!0}function lo(e,t,n,r,o){return"businessHours"===e?uo(Ge(r,t,o)):"string"==typeof e?uo(Ft(n,function(t){return t.groupId===e})):"object"==typeof e&&e?uo(Ge(e,t,o)):[]}function uo(e){var t=e.instances,n=[];for(var r in t)n.push(t[r].range);return n}function co(e,t){for(var n=0,r=e;n<r.length;n++)if(fn(r[n],t))return!0;return!1}var po=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.uid=te(),t}return n(t,e),t.prototype.prepareHits=function(){},t.prototype.queryHit=function(e,t,n,r){return null},t.prototype.isInteractionValid=function(e){var t=this.props.dateProfile,n=e.mutatedEvents.instances;if(t)for(var r in n)if(!fn(t.validRange,n[r].range))return!1;return oo(e,this.context)},t.prototype.isDateSelectionValid=function(e){var t=this.props.dateProfile;return!(t&&!fn(t.validRange,e.range))&&io({dateSelection:e},this.context)},t.prototype.isValidSegDownEl=function(e){return!this.props.eventDrag&&!this.props.eventResize&&!V(e,".fc-event-mirror")&&(this.isPopover()||!this.isInPopover(e))},t.prototype.isValidDateDownEl=function(e){return!(V(e,".fc-event:not(.fc-bg-event)")||V(e,".fc-daygrid-more-link")||V(e,"a[data-navlink]")||this.isInPopover(e))},t.prototype.isPopover=function(){return!1},t.prototype.isInPopover=function(e){return Boolean(V(e,".fc-popover"))},t}($r);function fo(e){return{id:te(),deps:e.deps||[],reducers:e.reducers||[],contextInit:[].concat(e.contextInit||[]),eventRefiners:e.eventRefiners||{},eventDefMemberAdders:e.eventDefMemberAdders||[],eventSourceRefiners:e.eventSourceRefiners||{},isDraggableTransformers:e.isDraggableTransformers||[],eventDragMutationMassagers:e.eventDragMutationMassagers||[],eventDefMutationAppliers:e.eventDefMutationAppliers||[],dateSelectionTransformers:e.dateSelectionTransformers||[],datePointTransforms:e.datePointTransforms||[],dateSpanTransforms:e.dateSpanTransforms||[],views:e.views||{},viewPropsTransformers:e.viewPropsTransformers||[],isPropsValid:e.isPropsValid||null,externalDefTransforms:e.externalDefTransforms||[],eventResizeJoinTransforms:e.eventResizeJoinTransforms||[],viewContainerAppends:e.viewContainerAppends||[],eventDropTransformers:e.eventDropTransformers||[],componentInteractions:e.componentInteractions||[],calendarInteractions:e.calendarInteractions||[],themeClasses:e.themeClasses||{},eventSourceDefs:e.eventSourceDefs||[],cmdFormatter:e.cmdFormatter,recurringTypes:e.recurringTypes||[],namedTimeZonedImpl:e.namedTimeZonedImpl,initialView:e.initialView||"",elementDraggingImpl:e.elementDraggingImpl,optionChangeHandlers:e.optionChangeHandlers||{},scrollGridImpl:e.scrollGridImpl||null,contentTypeHandlers:e.contentTypeHandlers||{},listenerRefiners:e.listenerRefiners||{},optionRefiners:e.optionRefiners||{},propSetHandlers:e.propSetHandlers||{}}}var ho=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return n(t,e),t}(Ur);function go(e,t,n,o){if(t[e])return t[e];var i=function(e,t,n,o){var i=n[e],a=o[e],s=function(e){return i&&null!==i[e]?i[e]:a&&null!==a[e]?a[e]:null},l=s("component"),u=s("superType"),c=null;if(u){if(u===e)throw new Error("Can't have a custom view type that references itself");c=go(u,t,n,o)}return!l&&c&&(l=c.component),l?{type:e,component:l,defaults:r(r({},c?c.defaults:{}),i?i.rawOptions:{}),overrides:r(r({},c?c.overrides:{}),a?a.rawOptions:{})}:null}(e,t,n,o);return i&&(t[e]=i),i}ho.prototype.classes={root:"fc-theme-standard",tableCellShaded:"fc-cell-shaded",buttonGroup:"fc-button-group",button:"fc-button fc-button-primary",buttonActive:"fc-button-active"},ho.prototype.baseIconClass="fc-icon",ho.prototype.iconClasses={close:"fc-icon-x",prev:"fc-icon-chevron-left",next:"fc-icon-chevron-right",prevYear:"fc-icon-chevrons-left",nextYear:"fc-icon-chevrons-right"},ho.prototype.rtlIconClasses={prev:"fc-icon-chevron-right",next:"fc-icon-chevron-left",prevYear:"fc-icon-chevrons-right",nextYear:"fc-icon-chevrons-left"},ho.prototype.iconOverrideOption="buttonIcons",ho.prototype.iconOverrideCustomButtonOption="icon",ho.prototype.iconOverridePrefix="fc-icon-";var vo=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.rootElRef=Fr(),t.handleRootEl=function(e){to(t.rootElRef,e),t.props.elRef&&to(t.props.elRef,e)},t}return n(t,e),t.prototype.render=function(){var e=this,t=this.props,n=t.hookProps;return zr(Eo,{hookProps:n,didMount:t.didMount,willUnmount:t.willUnmount,elRef:this.handleRootEl},function(r){return zr(yo,{hookProps:n,content:t.content,defaultContent:t.defaultContent,backupElRef:e.rootElRef},function(e,o){return t.children(r,bo(t.classNames,n),e,o)})})},t}($r),mo=Gr(0);function yo(e){return zr(mo.Consumer,null,function(t){return zr(So,r({renderId:t},e))})}var So=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.innerElRef=Fr(),t}return n(t,e),t.prototype.render=function(){return this.props.children(this.innerElRef,this.renderInnerContent())},t.prototype.componentDidMount=function(){this.updateCustomContent()},t.prototype.componentDidUpdate=function(){this.updateCustomContent()},t.prototype.componentWillUnmount=function(){this.customContentInfo&&this.customContentInfo.destroy&&this.customContentInfo.destroy()},t.prototype.renderInnerContent=function(){var e=this.context.pluginHooks.contentTypeHandlers,t=this.props,n=this.customContentInfo,o=Do(t.content,t.hookProps),i=null;if(void 0===o&&(o=Do(t.defaultContent,t.hookProps)),void 0!==o){if(n)n.contentVal=o[n.contentKey];else if("object"==typeof o)for(var a in e)if(void 0!==o[a]){var s=e[a]();n=this.customContentInfo=r({contentKey:a,contentVal:o[a]},s);break}i=n?[]:o}return i},t.prototype.updateCustomContent=function(){this.customContentInfo&&this.customContentInfo.render(this.innerElRef.current||this.props.backupElRef.current,this.customContentInfo.contentVal)},t}($r),Eo=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.handleRootEl=function(e){t.rootEl=e,t.props.elRef&&to(t.props.elRef,e)},t}return n(t,e),t.prototype.render=function(){return this.props.children(this.handleRootEl)},t.prototype.componentDidMount=function(){var e=this.props.didMount;e&&e(r(r({},this.props.hookProps),{el:this.rootEl}))},t.prototype.componentWillUnmount=function(){var e=this.props.willUnmount;e&&e(r(r({},this.props.hookProps),{el:this.rootEl}))},t}($r);function Co(){var e,t,n=[];return function(r,o){return t&&Be(t,o)&&r===e||(e=r,t=o,n=bo(r,o)),n}}function bo(e,t){return"function"==typeof e&&(e=e(t)),jt(e)}function Do(e,t){return"function"==typeof e?e(t,zr):e}var Ro=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.normalizeClassNames=Co(),t}return n(t,e),t.prototype.render=function(){var e=this.props,t=this.context,n=t.options,r={view:t.viewApi},o=this.normalizeClassNames(n.viewClassNames,r);return zr(Eo,{hookProps:r,didMount:n.viewDidMount,willUnmount:n.viewWillUnmount,elRef:e.elRef},function(t){return e.children(t,["fc-"+e.viewSpec.type+"-view","fc-view"].concat(o))})},t}($r);function wo(e){return Ae(e,To)}function To(e){var t,n="function"==typeof e?{component:e}:e,o=n.component;return n.content&&(t=n,o=function(e){return zr(Xr.Consumer,null,function(n){return zr(Ro,{viewSpec:n.viewSpec},function(o,i){var a=r(r({},e),{nextDayThreshold:n.options.nextDayThreshold});return zr(vo,{hookProps:a,classNames:t.classNames,content:t.content,didMount:t.didMount,willUnmount:t.willUnmount,elRef:o},function(e,t,n,r){return zr("div",{className:i.concat(t).join(" "),ref:e},r)})})})}),{superType:n.type,component:o,rawOptions:n}}function xo(e,t,n,o){var i=wo(e),a=wo(t.views);return Ae(function(e,t){var n,r={};for(n in e)go(n,r,e,t);for(n in t)go(n,r,e,t);return r}(i,a),function(e){return function(e,t,n,o,i){var a=e.overrides.duration||e.defaults.duration||o.duration||n.duration,s=null,l="",u="",c={};if(a&&(s=function(e){var t=JSON.stringify(e),n=Mo[t];return void 0===n&&(n=Xe(e),Mo[t]=n),n}(a))){var d=it(s);l=d.unit,1===d.value&&(u=l,c=t[l]?t[l].rawOptions:{})}var p=function(t){var n=t.buttonText||{},r=e.defaults.buttonTextKey;return null!=r&&null!=n[r]?n[r]:null!=n[e.type]?n[e.type]:null!=n[u]?n[u]:null};return{type:e.type,component:e.component,duration:s,durationUnit:l,singleUnit:u,optionDefaults:e.defaults,optionOverrides:r(r({},c),e.overrides),buttonTextOverride:p(o)||p(n)||e.overrides.buttonText,buttonTextDefault:p(i)||e.defaults.buttonText||p(Pt)||e.type}}(e,a,t,n,o)})}var Mo={},ko=function(){function e(e){this.props=e,this.nowDate=Gn(e.nowInput,e.dateEnv),this.initHiddenDays()}return e.prototype.buildPrev=function(e,t,n){var r=this.props.dateEnv,o=r.subtract(r.startOf(t,e.currentRangeUnit),e.dateIncrement);return this.build(o,-1,n)},e.prototype.buildNext=function(e,t,n){var r=this.props.dateEnv,o=r.add(r.startOf(t,e.currentRangeUnit),e.dateIncrement);return this.build(o,1,n)},e.prototype.build=function(e,t,n){void 0===n&&(n=!0);var r,o,i,a,s,l,u,c,d=this.props;return r=this.buildValidRange(),r=this.trimHiddenDays(r),n&&(u=e,e=null!=(c=r).start&&u<c.start?c.start:null!=c.end&&u>=c.end?new Date(c.end.valueOf()-1):u),o=this.buildCurrentRangeInfo(e,t),i=/^(year|month|week|day)$/.test(o.unit),a=this.buildRenderRange(this.trimHiddenDays(o.range),o.unit,i),s=a=this.trimHiddenDays(a),d.showNonCurrentDates||(s=cn(s,o.range)),s=cn(s=this.adjustActiveRange(s),r),l=pn(o.range,r),{validRange:r,currentRange:o.range,currentRangeUnit:o.unit,isRangeAllDay:i,activeRange:s,renderRange:a,slotMinTime:d.slotMinTime,slotMaxTime:d.slotMaxTime,isValid:l,dateIncrement:this.buildDateIncrement(o.duration)}},e.prototype.buildValidRange=function(){var e=this.props.validRangeInput,t="function"==typeof e?e.call(this.props.calendarApi,this.nowDate):e;return this.refineRange(t)||{start:null,end:null}},e.prototype.buildCurrentRangeInfo=function(e,t){var n,r=this.props,o=null,i=null,a=null;return r.duration?(o=r.duration,i=r.durationUnit,a=this.buildRangeFromDuration(e,t,o,i)):(n=this.props.dayCount)?(i="day",a=this.buildRangeFromDayCount(e,t,n)):(a=this.buildCustomVisibleRange(e))?i=r.dateEnv.greatestWholeUnit(a.start,a.end).unit:(i=it(o=this.getFallbackDuration()).unit,a=this.buildRangeFromDuration(e,t,o,i)),{duration:o,unit:i,range:a}},e.prototype.getFallbackDuration=function(){return Xe({day:1})},e.prototype.adjustActiveRange=function(e){var t=this.props,n=t.dateEnv,r=t.usesMinMaxTime,o=t.slotMinTime,i=t.slotMaxTime,a=e.start,s=e.end;return r&&(et(o)<0&&(a=we(a),a=n.add(a,o)),et(i)>1&&(s=ye(s=we(s),-1),s=n.add(s,i))),{start:a,end:s}},e.prototype.buildRangeFromDuration=function(e,t,n,r){var o,i,a,s=this.props,l=s.dateEnv,u=s.dateAlignment;if(!u){var c=this.props.dateIncrement;u=c&&rt(c)<rt(n)?it(c).unit:r}function d(){o=l.startOf(e,u),i=l.add(o,n),a={start:o,end:i}}return et(n)<=1&&this.isHiddenDay(o)&&(o=we(o=this.skipHiddenDays(o,t))),d(),this.trimHiddenDays(a)||(e=this.skipHiddenDays(e,t),d()),a},e.prototype.buildRangeFromDayCount=function(e,t,n){var r,o=this.props,i=o.dateEnv,a=o.dateAlignment,s=0,l=e;a&&(l=i.startOf(l,a)),l=we(l),r=l=this.skipHiddenDays(l,t);do{r=ye(r,1),this.isHiddenDay(r)||(s+=1)}while(s<n);return{start:l,end:r}},e.prototype.buildCustomVisibleRange=function(e){var t=this.props,n=t.visibleRangeInput,r="function"==typeof n?n.call(t.calendarApi,t.dateEnv.toDate(e)):n,o=this.refineRange(r);return!o||null!=o.start&&null!=o.end?o:null},e.prototype.buildRenderRange=function(e,t,n){return e},e.prototype.buildDateIncrement=function(e){var t;return this.props.dateIncrement||((t=this.props.dateAlignment)?Xe(1,t):e||Xe({days:1}))},e.prototype.refineRange=function(e){if(e){var t=(n=e,r=this.props.dateEnv,o=null,i=null,n.start&&(o=r.createMarker(n.start)),n.end&&(i=r.createMarker(n.end)),o||i?o&&i&&i<o?null:{start:o,end:i}:null);return t&&(t=on(t)),t}var n,r,o,i;return null},e.prototype.initHiddenDays=function(){var e,t=this.props.hiddenDays||[],n=[],r=0;for(!1===this.props.weekends&&t.push(0,6),e=0;e<7;e+=1)(n[e]=-1!==t.indexOf(e))||(r+=1);if(!r)throw new Error("invalid hiddenDays");this.isHiddenDayHash=n},e.prototype.trimHiddenDays=function(e){var t=e.start,n=e.end;return t&&(t=this.skipHiddenDays(t)),n&&(n=this.skipHiddenDays(n,-1,!0)),null==t||null==n||t<n?{start:t,end:n}:null},e.prototype.isHiddenDay=function(e){return e instanceof Date&&(e=e.getUTCDay()),this.isHiddenDayHash[e]},e.prototype.skipHiddenDays=function(e,t,n){for(void 0===t&&(t=1),void 0===n&&(n=!1);this.isHiddenDayHash[(e.getUTCDay()+(n?t:0)+7)%7];)e=ye(e,t);return e},e}();function Po(e){var t=0;for(var n in e)e[n].isFetching&&(t+=1);return t}function Io(e,t,n,o){for(var i={},a=0,s=t;a<s.length;a++){var l=s[a];i[l.sourceId]=l}return n&&(i=_o(i,n,o)),r(r({},e),i)}function _o(e,t,n){return No(e,We(e,function(e){return function(e,t,n){return Wo(e,n)?!n.options.lazyFetching||!e.fetchRange||e.isFetching||t.start<e.fetchRange.start||t.end>e.fetchRange.end:!e.latestFetchId}(e,t,n)}),t,n)}function No(e,t,n,r){var o={};for(var i in e){var a=e[i];t[i]?o[i]=Ho(a,n,r):o[i]=a}return o}function Ho(e,t,n){var o=n.options,i=n.calendarApi,a=n.pluginHooks.eventSourceDefs[e.sourceDefId],s=te();return a.fetch({eventSource:e,range:t,context:n},function(r){var a=r.rawEvents;o.eventSourceSuccess&&(a=o.eventSourceSuccess.call(i,a,r.xhr)||a),e.success&&(a=e.success.call(i,a,r.xhr)||a),n.dispatch({type:"RECEIVE_EVENTS",sourceId:e.sourceId,fetchId:s,fetchRange:t,rawEvents:a})},function(r){console.warn(r.message,r),o.eventSourceFailure&&o.eventSourceFailure.call(i,r),e.failure&&e.failure(r),n.dispatch({type:"RECEIVE_EVENT_ERROR",sourceId:e.sourceId,fetchId:s,fetchRange:t,error:r})}),r(r({},e),{isFetching:!0,latestFetchId:s})}function Oo(e,t){return We(e,function(e){return Wo(e,t)})}function Wo(e,t){return!t.pluginHooks.eventSourceDefs[e.sourceDefId].ignoreRange}function Ao(e,t,n,r,o){var i=[];return{headerToolbar:e.headerToolbar?Lo(e.headerToolbar,e,t,n,r,o,i):null,footerToolbar:e.footerToolbar?Lo(e.footerToolbar,e,t,n,r,o,i):null,viewsWithButtons:i}}function Lo(e,t,n,r,o,i,a){return Ae(e,function(e){return function(e,t,n,r,o,i,a){var s="rtl"===t.direction,l=t.customButtons||{},u=n.buttonText||{},c=t.buttonText||{};return(e?e.split(" "):[]).map(function(e){return e.split(",").map(function(e){return"title"===e?{buttonName:e}:((t=l[e])?(d=function(e){t.click&&t.click.call(e.target,e,e.target)},(p=r.getCustomButtonIconClass(t))||(p=r.getIconClass(e,s))||(f=t.text)):(n=o[e])?(a.push(e),d=function(){i.changeView(e)},(f=n.buttonTextOverride)||(p=r.getIconClass(e,s))||(f=n.buttonTextDefault)):i[e]&&(d=function(){i[e]()},(f=u[e])||(p=r.getIconClass(e,s))||(f=c[e])),{buttonName:e,buttonClick:d,buttonIcon:p,buttonText:f});var t,n,d,p,f})})}(e,t,n,r,o,i,a)})}function Uo(e,t,n,r,o){var i=null;"GET"===(e=e.toUpperCase())?t=function(e,t){return e+(-1===e.indexOf("?")?"?":"&")+Bo(t)}(t,n):i=Bo(n);var a=new XMLHttpRequest;a.open(e,t,!0),"GET"!==e&&a.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),a.onload=function(){if(a.status>=200&&a.status<400){var e=!1,t=void 0;try{t=JSON.parse(a.responseText),e=!0}catch(e){}e?r(t,a):o("Failure parsing JSON",a)}else o("Request failed",a)},a.onerror=function(){o("Request failed",a)},a.send(i)}function Bo(e){var t=[];for(var n in e)t.push(encodeURIComponent(n)+"="+encodeURIComponent(e[n]));return t.join("&")}function zo(e,t){for(var n=Ue(t.getCurrentData().eventSources),r=[],o=0,i=e;o<i.length;o++){for(var a=i[o],s=!1,l=0;l<n.length;l+=1)if(n[l]._raw===a){n.splice(l,1),s=!0;break}s||r.push(a)}for(var u=0,c=n;u<c.length;u++){var d=c[u];t.dispatch({type:"REMOVE_EVENT_SOURCE",sourceId:d.sourceId})}for(var p=0,f=r;p<f.length;p++){var h=f[p];t.calendarApi.addEventSource(h)}}var Vo=[fo({eventSourceDefs:[{ignoreRange:!0,parseMeta:function(e){return Array.isArray(e.events)?e.events:null},fetch:function(e,t){t({rawEvents:e.eventSource.meta})}}]}),fo({eventSourceDefs:[{parseMeta:function(e){return"function"==typeof e.events?e.events:null},fetch:function(e,t,n){var r=e.context.dateEnv;Nr(e.eventSource.meta.bind(null,Nn(e.range,r)),function(e){t({rawEvents:e})},n)}}]}),fo({eventSourceRefiners:{method:String,extraParams:Lt,startParam:String,endParam:String,timeZoneParam:String},eventSourceDefs:[{parseMeta:function(e){return e.url?{url:e.url,method:(e.method||"GET").toUpperCase(),extraParams:e.extraParams,startParam:e.startParam,endParam:e.endParam,timeZoneParam:e.timeZoneParam}:null},fetch:function(e,t,n){var o=e.eventSource.meta,i=function(e,t,n){var o,i,a,s,l=n.dateEnv,u=n.options,c={};return null==(o=e.startParam)&&(o=u.startParam),null==(i=e.endParam)&&(i=u.endParam),null==(a=e.timeZoneParam)&&(a=u.timeZoneParam),s="function"==typeof e.extraParams?e.extraParams():e.extraParams||{},r(c,s),c[o]=l.formatIso(t.start),c[i]=l.formatIso(t.end),"local"!==l.timeZone&&(c[a]=l.timeZone),c}(o,e.range,e.context);Uo(o.method,o.url,i,function(e,n){t({rawEvents:e,xhr:n})},function(e,t){n({message:e,xhr:t})})}}]}),fo({recurringTypes:[{parse:function(e,t){if(e.daysOfWeek||e.startTime||e.endTime||e.startRecur||e.endRecur){var n={daysOfWeek:e.daysOfWeek||null,startTime:e.startTime||null,endTime:e.endTime||null,startRecur:e.startRecur?t.createMarker(e.startRecur):null,endRecur:e.endRecur?t.createMarker(e.endRecur):null},r=void 0;return e.duration&&(r=e.duration),!r&&e.startTime&&e.endTime&&(o=e.endTime,i=e.startTime,r={years:o.years-i.years,months:o.months-i.months,days:o.days-i.days,milliseconds:o.milliseconds-i.milliseconds}),{allDayGuess:Boolean(!e.startTime&&!e.endTime),duration:r,typeData:n}}var o,i;return null},expand:function(e,t,n){var r=cn(t,{start:e.startRecur,end:e.endRecur});return r?function(e,t,n,r){for(var o=e?Le(e):null,i=we(n.start),a=n.end,s=[];i<a;){var l=void 0;o&&!o[i.getUTCDay()]||(l=t?r.add(i,t):i,s.push(l)),i=ye(i,1)}return s}(e.daysOfWeek,e.startTime,r,n):[]}}],eventRefiners:{daysOfWeek:Lt,startTime:Xe,endTime:Xe,duration:Xe,startRecur:Lt,endRecur:Lt}}),fo({optionChangeHandlers:{events:function(e,t){zo([e],t)},eventSources:zo}}),fo({contentTypeHandlers:{html:function(){return{render:Fo}},domNodes:function(){return{render:jo}}},propSetHandlers:{dateProfile:function(e,t){t.emitter.trigger("datesSet",r(r({},Nn(e.activeRange,t.dateEnv)),{view:t.viewApi}))},eventStore:function(e,t){var n=t.emitter;n.hasHandlers("eventsSet")&&n.trigger("eventsSet",Xn(e,t))}}})];function Fo(e,t){e.innerHTML=t}function jo(e,t){var n=Array.prototype.slice.call(e.childNodes),r=Array.prototype.slice.call(t);if(!ct(n,r)){for(var o=0,i=r;o<i.length;o++){var a=i[o];e.appendChild(a)}n.forEach(z)}}var Go=function(){function e(e){this.drainedOption=e,this.isRunning=!1,this.isDirty=!1,this.pauseDepths={},this.timeoutId=0}return e.prototype.request=function(e){this.isDirty=!0,this.isPaused()||(this.clearTimeout(),null==e?this.tryDrain():this.timeoutId=setTimeout(this.tryDrain.bind(this),e))},e.prototype.pause=function(e){void 0===e&&(e="");var t=this.pauseDepths;t[e]=(t[e]||0)+1,this.clearTimeout()},e.prototype.resume=function(e,t){void 0===e&&(e="");var n=this.pauseDepths;e in n&&(t?delete n[e]:(n[e]-=1,n[e]<=0&&delete n[e]),this.tryDrain())},e.prototype.isPaused=function(){return Object.keys(this.pauseDepths).length},e.prototype.tryDrain=function(){if(!this.isRunning&&!this.isPaused()){for(this.isRunning=!0;this.isDirty;)this.isDirty=!1,this.drained();this.isRunning=!1}},e.prototype.clear=function(){this.clearTimeout(),this.isDirty=!1,this.pauseDepths={}},e.prototype.clearTimeout=function(){this.timeoutId&&(clearTimeout(this.timeoutId),this.timeoutId=0)},e.prototype.drained=function(){this.drainedOption&&this.drainedOption()},e}(),qo=function(){function e(e,t){this.runTaskOption=e,this.drainedOption=t,this.queue=[],this.delayedRunner=new Go(this.drain.bind(this))}return e.prototype.request=function(e,t){this.queue.push(e),this.delayedRunner.request(t)},e.prototype.pause=function(e){this.delayedRunner.pause(e)},e.prototype.resume=function(e,t){this.delayedRunner.resume(e,t)},e.prototype.drain=function(){for(var e=this.queue;e.length;){for(var t=[],n=void 0;n=e.shift();)this.runTask(n),t.push(n);this.drained(t)}},e.prototype.runTask=function(e){this.runTaskOption&&this.runTaskOption(e)},e.prototype.drained=function(e){this.drainedOption&&this.drainedOption(e)},e}();function Yo(e,t,n){var r;return r=/^(year|month)$/.test(e.currentRangeUnit)?e.currentRange:e.activeRange,n.formatRange(r.start,r.end,Mt(t.titleFormat||function(e){var t=e.currentRangeUnit;if("year"===t)return{year:"numeric"};if("month"===t)return{year:"numeric",month:"long"};var n=Re(e.currentRange.start,e.currentRange.end);return null!==n&&n>1?{year:"numeric",month:"short",day:"numeric"}:{year:"numeric",month:"long",day:"numeric"}}(e)),{isEndExclusive:e.isRangeAllDay,defaultSeparator:t.titleRangeSeparator})}var Zo=function(){function e(e){var t=this;this.computeOptionsData=dt(this._computeOptionsData),this.computeCurrentViewData=dt(this._computeCurrentViewData),this.organizeRawLocales=dt(rr),this.buildLocale=dt(or),this.buildPluginHooks=function(){var e,t=[],n=[];return function(o,i){return e&&ct(o,t)&&ct(i,n)||(e=function(e,t){var n={},o={reducers:[],contextInit:[],eventRefiners:{},eventDefMemberAdders:[],eventSourceRefiners:{},isDraggableTransformers:[],eventDragMutationMassagers:[],eventDefMutationAppliers:[],dateSelectionTransformers:[],datePointTransforms:[],dateSpanTransforms:[],views:{},viewPropsTransformers:[],isPropsValid:null,externalDefTransforms:[],eventResizeJoinTransforms:[],viewContainerAppends:[],eventDropTransformers:[],componentInteractions:[],calendarInteractions:[],themeClasses:{},eventSourceDefs:[],cmdFormatter:null,recurringTypes:[],namedTimeZonedImpl:null,initialView:"",elementDraggingImpl:null,optionChangeHandlers:{},scrollGridImpl:null,contentTypeHandlers:{},listenerRefiners:{},optionRefiners:{},propSetHandlers:{}};function i(e){for(var t=0,a=e;t<a.length;t++){var s=a[t];n[s.id]||(n[s.id]=!0,i(s.deps),u=s,o={reducers:(l=o).reducers.concat(u.reducers),contextInit:l.contextInit.concat(u.contextInit),eventRefiners:r(r({},l.eventRefiners),u.eventRefiners),eventDefMemberAdders:l.eventDefMemberAdders.concat(u.eventDefMemberAdders),eventSourceRefiners:r(r({},l.eventSourceRefiners),u.eventSourceRefiners),isDraggableTransformers:l.isDraggableTransformers.concat(u.isDraggableTransformers),eventDragMutationMassagers:l.eventDragMutationMassagers.concat(u.eventDragMutationMassagers),eventDefMutationAppliers:l.eventDefMutationAppliers.concat(u.eventDefMutationAppliers),dateSelectionTransformers:l.dateSelectionTransformers.concat(u.dateSelectionTransformers),datePointTransforms:l.datePointTransforms.concat(u.datePointTransforms),dateSpanTransforms:l.dateSpanTransforms.concat(u.dateSpanTransforms),views:r(r({},l.views),u.views),viewPropsTransformers:l.viewPropsTransformers.concat(u.viewPropsTransformers),isPropsValid:u.isPropsValid||l.isPropsValid,externalDefTransforms:l.externalDefTransforms.concat(u.externalDefTransforms),eventResizeJoinTransforms:l.eventResizeJoinTransforms.concat(u.eventResizeJoinTransforms),viewContainerAppends:l.viewContainerAppends.concat(u.viewContainerAppends),eventDropTransformers:l.eventDropTransformers.concat(u.eventDropTransformers),calendarInteractions:l.calendarInteractions.concat(u.calendarInteractions),componentInteractions:l.componentInteractions.concat(u.componentInteractions),themeClasses:r(r({},l.themeClasses),u.themeClasses),eventSourceDefs:l.eventSourceDefs.concat(u.eventSourceDefs),cmdFormatter:u.cmdFormatter||l.cmdFormatter,recurringTypes:l.recurringTypes.concat(u.recurringTypes),namedTimeZonedImpl:u.namedTimeZonedImpl||l.namedTimeZonedImpl,initialView:l.initialView||u.initialView,elementDraggingImpl:l.elementDraggingImpl||u.elementDraggingImpl,optionChangeHandlers:r(r({},l.optionChangeHandlers),u.optionChangeHandlers),scrollGridImpl:u.scrollGridImpl||l.scrollGridImpl,contentTypeHandlers:r(r({},l.contentTypeHandlers),u.contentTypeHandlers),listenerRefiners:r(r({},l.listenerRefiners),u.listenerRefiners),optionRefiners:r(r({},l.optionRefiners),u.optionRefiners),propSetHandlers:r(r({},l.propSetHandlers),u.propSetHandlers)})}var l,u}return e&&i(e),i(t),o}(o,i)),t=o,n=i,e}}(),this.buildDateEnv=dt(Xo),this.buildTheme=dt(Ko),this.parseToolbars=dt(Ao),this.buildViewSpecs=dt(xo),this.buildDateProfileGenerator=pt(Jo),this.buildViewApi=dt($o),this.buildViewUiProps=pt(ti),this.buildEventUiBySource=dt(Qo,Be),this.buildEventUiBases=dt(ei),this.parseContextBusinessHours=pt(ni),this.buildTitle=dt(Yo),this.emitter=new Hr,this.actionRunner=new qo(this._handleAction.bind(this),this.updateData.bind(this)),this.currentCalendarOptionsInput={},this.currentCalendarOptionsRefined={},this.currentViewOptionsInput={},this.currentViewOptionsRefined={},this.currentCalendarOptionsRefiners={},this.getCurrentData=function(){return t.data},this.dispatch=function(e){t.actionRunner.request(e)},this.props=e,this.actionRunner.pause();var n={},o=this.computeOptionsData(e.optionOverrides,n,e.calendarApi),i=o.calendarOptions.initialView||o.pluginHooks.initialView,a=this.computeCurrentViewData(i,o,e.optionOverrides,n);e.calendarApi.currentDataManager=this,this.emitter.setThisContext(e.calendarApi),this.emitter.setOptions(a.options);var s,l,u,c=(s=o.calendarOptions,l=o.dateEnv,null!=(u=s.initialDate)?l.createMarker(u):Gn(s.now,l)),d=a.dateProfileGenerator.build(c);hn(d.activeRange,c)||(c=d.currentRange.start);for(var p={dateEnv:o.dateEnv,options:o.calendarOptions,pluginHooks:o.pluginHooks,calendarApi:e.calendarApi,dispatch:this.dispatch,emitter:this.emitter,getCurrentData:this.getCurrentData},f=0,h=o.pluginHooks.contextInit;f<h.length;f++)(0,h[f])(p);for(var g=function(e,t,n){var r=t?t.activeRange:null;return Io({},function(e,t){var n=jn(t),r=[].concat(e.eventSources||[]),o=[];e.initialEvents&&r.unshift(e.initialEvents),e.events&&r.unshift(e.events);for(var i=0,a=r;i<a.length;i++){var s=Fn(a[i],t,n);s&&o.push(s)}return o}(e,n),r,n)}(o.calendarOptions,d,p),v={dynamicOptionOverrides:n,currentViewType:i,currentDate:c,dateProfile:d,businessHours:this.parseContextBusinessHours(p),eventSources:g,eventUiBases:{},loadingLevel:Po(g),eventStore:{defs:{},instances:{}},renderableEventStore:{defs:{},instances:{}},dateSelection:null,eventSelection:"",eventDrag:null,eventResize:null,selectionConfig:this.buildViewUiProps(p).selectionConfig},m=r(r({},p),v),y=0,S=o.pluginHooks.reducers;y<S.length;y++){var E=S[y];r(v,E(null,null,m))}v.loadingLevel&&this.emitter.trigger("loading",!0),this.state=v,this.updateData(),this.actionRunner.resume()}return e.prototype.resetOptions=function(e,t){var n=this.props;n.optionOverrides=t?r(r({},n.optionOverrides),e):e,this.actionRunner.request({type:"NOTHING"})},e.prototype._handleAction=function(e){var t=this.props,n=this.state,o=this.emitter,i=function(e,t){var n;switch(t.type){case"SET_OPTION":return r(r({},e),((n={})[t.optionName]=t.rawOptionValue,n));default:return e}}(n.dynamicOptionOverrides,e),a=this.computeOptionsData(t.optionOverrides,i,t.calendarApi),s=function(e,t){switch(t.type){case"CHANGE_VIEW_TYPE":e=t.viewType}return e}(n.currentViewType,e),l=this.computeCurrentViewData(s,a,t.optionOverrides,i);t.calendarApi.currentDataManager=this,o.setThisContext(t.calendarApi),o.setOptions(l.options);var u={dateEnv:a.dateEnv,options:a.calendarOptions,pluginHooks:a.pluginHooks,calendarApi:t.calendarApi,dispatch:this.dispatch,emitter:o,getCurrentData:this.getCurrentData},c=n.currentDate,d=n.dateProfile;this.data&&this.data.dateProfileGenerator!==l.dateProfileGenerator&&(d=l.dateProfileGenerator.build(c)),hn((d=function(e,t,n,r){var o;switch(t.type){case"CHANGE_VIEW_TYPE":return r.build(t.dateMarker||n);case"CHANGE_DATE":if(!e.activeRange||!hn(e.currentRange,t.dateMarker))return r.build(t.dateMarker);break;case"PREV":if((o=r.buildPrev(e,n)).isValid)return o;break;case"NEXT":if((o=r.buildNext(e,n)).isValid)return o}return e}(d,e,c=function(e,t){switch(t.type){case"CHANGE_DATE":return t.dateMarker;default:return e}}(c,e),l.dateProfileGenerator)).currentRange,c)||(c=d.currentRange.start);for(var p=function(e,t,n,o){var i,a,s=n?n.activeRange:null;switch(t.type){case"ADD_EVENT_SOURCES":return Io(e,t.sources,s,o);case"REMOVE_EVENT_SOURCE":return i=e,a=t.sourceId,We(i,function(e){return e.sourceId!==a});case"PREV":case"NEXT":case"CHANGE_DATE":case"CHANGE_VIEW_TYPE":return n?_o(e,s,o):e;case"FETCH_EVENT_SOURCES":return No(e,t.sourceIds?Le(t.sourceIds):Oo(e,o),s,o);case"RECEIVE_EVENTS":case"RECEIVE_EVENT_ERROR":return function(e,t,n,o){var i,a=e[t];return a&&n===a.latestFetchId?r(r({},e),((i={})[t]=r(r({},a),{isFetching:!1,fetchRange:o}),i)):e}(e,t.sourceId,t.fetchId,t.fetchRange);case"REMOVE_ALL_EVENT_SOURCES":return{};default:return e}}(n.eventSources,e,d,u),f=Po(p),h=function(e,t,n,r,o){switch(t.type){case"RECEIVE_EVENTS":return function(e,t,n,r,o,i){if(t&&n===t.latestFetchId){var a=Ut(function(e,t,n){var r=i.options.eventDataTransform,o=t?t.eventDataTransform:null;return o&&(e=no(e,o)),r&&(e=no(e,r)),e}(o,t),t,i);return r&&(a=Ge(a,r,i)),Vt(ro(e,t.sourceId),a)}return e}(e,n[t.sourceId],t.fetchId,t.fetchRange,t.rawEvents,o);case"ADD_EVENTS":return function(e,t,n,r){return n&&(t=Ge(t,n,o)),Vt(e,t)}(e,t.eventStore,r?r.activeRange:null);case"MERGE_EVENTS":return Vt(e,t.eventStore);case"PREV":case"NEXT":case"CHANGE_DATE":case"CHANGE_VIEW_TYPE":return r?Ge(e,r.activeRange,o):e;case"REMOVE_EVENTS":return function(e,t){var n=e.defs,r=e.instances,o={},i={};for(var a in n)t.defs[a]||(o[a]=n[a]);for(var s in r)!t.instances[s]&&o[r[s].defId]&&(i[s]=r[s]);return{defs:o,instances:i}}(e,t.eventStore);case"REMOVE_EVENT_SOURCE":return ro(e,t.sourceId);case"REMOVE_ALL_EVENT_SOURCES":return Ft(e,function(e){return!e.sourceId});case"REMOVE_ALL_EVENTS":return{defs:{},instances:{}};default:return e}}(n.eventStore,e,p,d,u),g=f&&!l.options.progressiveEventRendering&&n.renderableEventStore||h,v=this.buildViewUiProps(u),m=v.eventUiSingleBase,y=v.selectionConfig,S=this.buildEventUiBySource(p),E=this.buildEventUiBases(g.defs,m,S),C=n.loadingLevel||0,b=f,D={dynamicOptionOverrides:i,currentViewType:s,currentDate:c,dateProfile:d,eventSources:p,eventStore:h,renderableEventStore:g,selectionConfig:y,eventUiBases:E,loadingLevel:b,businessHours:this.parseContextBusinessHours(u),dateSelection:function(e,t){switch(t.type){case"UNSELECT_DATES":return null;case"SELECT_DATES":return t.selection;default:return e}}(n.dateSelection,e),eventSelection:function(e,t){switch(t.type){case"UNSELECT_EVENT":return"";case"SELECT_EVENT":return t.eventInstanceId;default:return e}}(n.eventSelection,e),eventDrag:function(e,t){var n;switch(t.type){case"UNSET_EVENT_DRAG":return null;case"SET_EVENT_DRAG":return{affectedEvents:(n=t.state).affectedEvents,mutatedEvents:n.mutatedEvents,isEvent:n.isEvent};default:return e}}(n.eventDrag,e),eventResize:function(e,t){var n;switch(t.type){case"UNSET_EVENT_RESIZE":return null;case"SET_EVENT_RESIZE":return{affectedEvents:(n=t.state).affectedEvents,mutatedEvents:n.mutatedEvents,isEvent:n.isEvent};default:return e}}(n.eventResize,e)},R=r(r({},u),D),w=0,T=a.pluginHooks.reducers;w<T.length;w++){var x=T[w];r(D,x(n,e,R))}!C&&b?o.trigger("loading",!0):C&&!b&&o.trigger("loading",!1),this.state=D,t.onAction&&t.onAction(e)},e.prototype.updateData=function(){var e,t,n,o,i=this.props,a=this.state,s=this.data,l=this.computeOptionsData(i.optionOverrides,a.dynamicOptionOverrides,i.calendarApi),u=this.computeCurrentViewData(a.currentViewType,l,i.optionOverrides,a.dynamicOptionOverrides),c=this.data=r(r(r({viewTitle:this.buildTitle(a.dateProfile,u.options,l.dateEnv),calendarApi:i.calendarApi,dispatch:this.dispatch,emitter:this.emitter,getCurrentData:this.getCurrentData},l),u),a),d=l.pluginHooks.optionChangeHandlers,p=s&&s.calendarOptions,f=l.calendarOptions;if(p&&p!==f)for(var h in p.timeZone!==f.timeZone&&(a.eventSources=c.eventSources=(e=c.eventSources,n=c,o=(t=a.dateProfile)?t.activeRange:null,No(e,Oo(e,n),o,n)),a.eventStore=c.eventStore=function(e,t,n){var o=e.defs,i=Ae(e.instances,function(e){var i=o[e.defId];return i.allDay||i.recurringDef?e:r(r({},e),{range:{start:n.createMarker(t.toDate(e.range.start,e.forcedStartTzo)),end:n.createMarker(t.toDate(e.range.end,e.forcedEndTzo))},forcedStartTzo:n.canComputeOffset?null:e.forcedStartTzo,forcedEndTzo:n.canComputeOffset?null:e.forcedEndTzo})});return{defs:o,instances:i}}(c.eventStore,s.dateEnv,c.dateEnv)),d)p[h]!==f[h]&&d[h](f[h],c);i.onData&&i.onData(c)},e.prototype._computeOptionsData=function(e,t,n){var r=this.processRawCalendarOptions(e,t),o=r.refinedOptions,i=r.pluginHooks,a=r.localeDefaults,s=r.availableLocaleData;ri(r.extra);var l=this.buildDateEnv(o.timeZone,o.locale,o.weekNumberCalculation,o.firstDay,o.weekText,i,s,o.defaultRangeSeparator),u=this.buildViewSpecs(i.views,e,t,a),c=this.buildTheme(o,i);return{calendarOptions:o,pluginHooks:i,dateEnv:l,viewSpecs:u,theme:c,toolbarConfig:this.parseToolbars(o,e,c,u,n),localeDefaults:a,availableRawLocales:s.map}},e.prototype.processRawCalendarOptions=function(e,t){var n=Wt([Pt,e,t]),o=n.locales,i=n.locale,a=this.organizeRawLocales(o),s=a.map,l=this.buildLocale(i||a.defaultCode,s).options,u=this.buildPluginHooks(e.plugins||[],Vo),c=this.currentCalendarOptionsRefiners=r(r(r(r(r({},kt),It),_t),u.listenerRefiners),u.optionRefiners),d={},p=Wt([Pt,l,e,t]),f={},h=this.currentCalendarOptionsInput,g=this.currentCalendarOptionsRefined,v=!1;for(var m in p)"plugins"!==m&&(p[m]===h[m]||Nt[m]&&m in h&&Nt[m](h[m],p[m])?f[m]=g[m]:c[m]?(f[m]=c[m](p[m]),v=!0):d[m]=h[m]);return v&&(this.currentCalendarOptionsInput=p,this.currentCalendarOptionsRefined=f),{rawOptions:this.currentCalendarOptionsInput,refinedOptions:this.currentCalendarOptionsRefined,pluginHooks:u,availableLocaleData:a,localeDefaults:l,extra:d}},e.prototype._computeCurrentViewData=function(e,t,n,r){var o=t.viewSpecs[e];if(!o)throw new Error('viewType "'+e+"\" is not available. Please make sure you've loaded all neccessary plugins");var i=this.processRawViewOptions(o,t.pluginHooks,t.localeDefaults,n,r),a=i.refinedOptions;return ri(i.extra),{viewSpec:o,options:a,dateProfileGenerator:this.buildDateProfileGenerator({dateProfileGeneratorClass:o.optionDefaults.dateProfileGeneratorClass,duration:o.duration,durationUnit:o.durationUnit,usesMinMaxTime:o.optionDefaults.usesMinMaxTime,dateEnv:t.dateEnv,calendarApi:this.props.calendarApi,slotMinTime:a.slotMinTime,slotMaxTime:a.slotMaxTime,showNonCurrentDates:a.showNonCurrentDates,dayCount:a.dayCount,dateAlignment:a.dateAlignment,dateIncrement:a.dateIncrement,hiddenDays:a.hiddenDays,weekends:a.weekends,nowInput:a.now,validRangeInput:a.validRange,visibleRangeInput:a.visibleRange,monthMode:a.monthMode,fixedWeekCount:a.fixedWeekCount}),viewApi:this.buildViewApi(e,this.getCurrentData,t.dateEnv)}},e.prototype.processRawViewOptions=function(e,t,n,o,i){var a=Wt([Pt,e.optionDefaults,n,o,e.optionOverrides,i]),s=r(r(r(r(r(r({},kt),It),_t),Ot),t.listenerRefiners),t.optionRefiners),l={},u=this.currentViewOptionsInput,c=this.currentViewOptionsRefined,d=!1,p={};for(var f in a)a[f]===u[f]?l[f]=c[f]:(a[f]===this.currentCalendarOptionsInput[f]?f in this.currentCalendarOptionsRefined&&(l[f]=this.currentCalendarOptionsRefined[f]):s[f]?l[f]=s[f](a[f]):p[f]=a[f],d=!0);return d&&(this.currentViewOptionsInput=a,this.currentViewOptionsRefined=l),{rawOptions:this.currentViewOptionsInput,refinedOptions:this.currentViewOptionsRefined,extra:p}},e}();function Xo(e,t,n,r,o,i,a,s){var l=or(t||a.defaultCode,a.map);return new er({calendarSystem:"gregory",timeZone:e,namedTimeZoneImpl:i.namedTimeZonedImpl,locale:l,weekNumberCalculation:n,firstDay:r,weekText:o,cmdFormatter:i.cmdFormatter,defaultSeparator:s})}function Ko(e,t){return new(t.themeClasses[e.themeSystem]||ho)(e)}function Jo(e){return new(e.dateProfileGeneratorClass||ko)(e)}function $o(e,t,n){return new zn(e,t,n)}function Qo(e){return Ae(e,function(e){return e.ui})}function ei(e,t,n){var r={"":t};for(var o in e){var i=e[o];i.sourceId&&n[i.sourceId]&&(r[o]=n[i.sourceId])}return r}function ti(e){var t=e.options;return{eventUiSingleBase:Yt({display:t.eventDisplay,editable:t.editable,startEditable:t.eventStartEditable,durationEditable:t.eventDurationEditable,constraint:t.eventConstraint,overlap:"boolean"==typeof t.eventOverlap?t.eventOverlap:void 0,allow:t.eventAllow,backgroundColor:t.eventBackgroundColor,borderColor:t.eventBorderColor,textColor:t.eventTextColor,color:t.eventColor},e),selectionConfig:Yt({constraint:t.selectConstraint,overlap:"boolean"==typeof t.selectOverlap?t.selectOverlap:void 0,allow:t.selectAllow},e)}}function ni(e){return ur(e.options.businessHours,e)}function ri(e,t){for(var n in e)console.warn("Unknown option '"+n+"'"+(t?" for view '"+t+"'":""))}var oi=function(e){function t(t){var n=e.call(this,t)||this;return n.handleData=function(e){n.dataManager?n.setState(e):n.state=e},n.dataManager=new Zo({optionOverrides:t.optionOverrides,calendarApi:t.calendarApi,onData:n.handleData}),n}return n(t,e),t.prototype.render=function(){return this.props.children(this.state)},t.prototype.componentDidUpdate=function(e){var t=this.props.optionOverrides;t!==e.optionOverrides&&this.dataManager.resetOptions(t)},t}(Br),ii=function(){function e(e){this.component=e.component}return e.prototype.destroy=function(){},e}();function ai(e){var t;return(t={})[e.component.uid]=e,t}var si={},li=function(){function e(e,t){this.emitter=new Hr}return e.prototype.destroy=function(){},e.prototype.setMirrorIsVisible=function(e){},e.prototype.setMirrorNeedsRevert=function(e){},e.prototype.setAutoScrollEnabled=function(e){},e}(),ui={},ci={startTime:Xe,duration:Xe,create:Boolean,sourceId:String};function di(e){var t=At(e,ci),n=t.refined,r=t.extra;return{startTime:n.startTime||null,duration:n.duration||null,create:null==n.create||n.create,sourceId:n.sourceId,leftoverProps:r}}var pi=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return n(t,e),t.prototype.render=function(){var e=this,t=this.props.widgetGroups.map(function(t){return e.renderWidgetGroup(t)});return zr.apply(void 0,o(["div",{className:"fc-toolbar-chunk"}],t))},t.prototype.renderWidgetGroup=function(e){for(var t=this.props,n=this.context.theme,i=[],a=!0,s=0,l=e;s<l.length;s++){var u=l[s],c=u.buttonName,d=u.buttonClick,p=u.buttonText,f=u.buttonIcon;if("title"===c)a=!1,i.push(zr("h2",{className:"fc-toolbar-title"},t.title));else{var h=f?{"aria-label":c}:{},g=["fc-"+c+"-button",n.getClass("button")];c===t.activeButton&&g.push(n.getClass("buttonActive"));var v=!t.isTodayEnabled&&"today"===c||!t.isPrevEnabled&&"prev"===c||!t.isNextEnabled&&"next"===c;i.push(zr("button",r({disabled:v,className:g.join(" "),onClick:d,type:"button"},h),p||(f?zr("span",{className:f}):"")))}}if(i.length>1){var m=a&&n.getClass("buttonGroup")||"";return zr.apply(void 0,o(["div",{className:m}],i))}return i[0]},t}($r),fi=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return n(t,e),t.prototype.render=function(){var e,t,n=this.props,r=n.model,o=n.extraClassName,i=!1,a=r.center;return r.left?(i=!0,e=r.left):e=r.start,r.right?(i=!0,t=r.right):t=r.end,zr("div",{className:[o||"","fc-toolbar",i?"fc-toolbar-ltr":""].join(" ")},this.renderSection("start",e||[]),this.renderSection("center",a||[]),this.renderSection("end",t||[]))},t.prototype.renderSection=function(e,t){var n=this.props;return zr(pi,{key:e,widgetGroups:t,title:n.title,activeButton:n.activeButton,isTodayEnabled:n.isTodayEnabled,isPrevEnabled:n.isPrevEnabled,isNextEnabled:n.isNextEnabled})},t}($r),hi=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.state={availableWidth:null},t.handleEl=function(e){t.el=e,to(t.props.elRef,e),t.updateAvailableWidth()},t.handleResize=function(){t.updateAvailableWidth()},t}return n(t,e),t.prototype.render=function(){var e=this.props,t=this.state,n=e.aspectRatio,r=["fc-view-harness",n||e.liquid||e.height?"fc-view-harness-active":"fc-view-harness-passive"],o="",i="";return n?null!==t.availableWidth?o=t.availableWidth/n:i=1/n*100+"%":o=e.height||"",zr("div",{ref:this.handleEl,onClick:e.onClick,className:r.join(" "),style:{height:o,paddingBottom:i}},e.children)},t.prototype.componentDidMount=function(){this.context.addResizeHandler(this.handleResize)},t.prototype.componentWillUnmount=function(){this.context.removeResizeHandler(this.handleResize)},t.prototype.updateAvailableWidth=function(){this.el&&this.props.aspectRatio&&this.setState({availableWidth:this.el.offsetWidth})},t}($r),gi=function(e){function t(t){var n=e.call(this,t)||this;return n.handleSegClick=function(e,t){var r=n.component,o=r.context,i=yn(t);if(i&&r.isValidSegDownEl(e.target)){var a=V(e.target,".fc-event-forced-url"),s=a?a.querySelector("a[href]").href:"";o.emitter.trigger("eventClick",{el:t,event:new Yn(r.context,i.eventRange.def,i.eventRange.instance),jsEvent:e,view:o.viewApi}),s&&!e.defaultPrevented&&(window.location.href=s)}},n.destroy=J(t.el,"click",".fc-event",n.handleSegClick),n}return n(t,e),t}(ii),vi=function(e){function t(t){var n,r,o,i,a=e.call(this,t)||this;return a.handleEventElRemove=function(e){e===a.currentSegEl&&a.handleSegLeave(null,a.currentSegEl)},a.handleSegEnter=function(e,t){yn(t)&&(a.currentSegEl=t,a.triggerEvent("eventMouseEnter",e,t))},a.handleSegLeave=function(e,t){a.currentSegEl&&(a.currentSegEl=null,a.triggerEvent("eventMouseLeave",e,t))},a.removeHoverListeners=(n=t.el,".fc-event",r=a.handleSegEnter,o=a.handleSegLeave,J(n,"mouseover",".fc-event",function(e,t){if(t!==i){i=t,r(e,t);var n=function(e){i=null,o(e,t),t.removeEventListener("mouseleave",n)};t.addEventListener("mouseleave",n)}})),a}return n(t,e),t.prototype.destroy=function(){this.removeHoverListeners()},t.prototype.triggerEvent=function(e,t,n){var r=this.component,o=r.context,i=yn(n);t&&!r.isValidSegDownEl(t.target)||o.emitter.trigger(e,{el:n,event:new Yn(o,i.eventRange.def,i.eventRange.instance),jsEvent:t,view:o.viewApi})},t}(ii),mi=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.buildViewContext=dt(Kr),t.buildViewPropTransformers=dt(Si),t.buildToolbarProps=dt(yi),t.handleNavLinkClick=K("a[data-navlink]",t._handleNavLinkClick.bind(t)),t.headerRef=Fr(),t.footerRef=Fr(),t.interactionsStore={},t.registerInteractiveComponent=function(e,n){var r=function(e,t){return{component:e,el:t.el,useEventCenter:null==t.useEventCenter||t.useEventCenter}}(e,n),o=[gi,vi].concat(t.props.pluginHooks.componentInteractions).map(function(e){return new e(r)});t.interactionsStore[e.uid]=o,si[e.uid]=r},t.unregisterInteractiveComponent=function(e){for(var n=0,r=t.interactionsStore[e.uid];n<r.length;n++)r[n].destroy();delete t.interactionsStore[e.uid],delete si[e.uid]},t.resizeRunner=new Go(function(){t.props.emitter.trigger("_resize",!0),t.props.emitter.trigger("windowResize",{view:t.props.viewApi})}),t.handleWindowResize=function(e){var n=t.props.options;n.handleWindowResize&&e.target===window&&t.resizeRunner.request(n.windowResizeDelay)},t}return n(t,e),t.prototype.render=function(){var e,t=this.props,n=t.toolbarConfig,o=t.options,i=this.buildToolbarProps(t.viewSpec,t.dateProfile,t.dateProfileGenerator,t.currentDate,Gn(t.options.now,t.dateEnv),t.viewTitle),a=!1,s="";t.isHeightAuto||t.forPrint?s="":null!=o.height?a=!0:null!=o.contentHeight?s=o.contentHeight:e=Math.max(o.aspectRatio,.5);var l=this.buildViewContext(t.viewSpec,t.viewApi,t.options,t.dateProfileGenerator,t.dateEnv,t.theme,t.pluginHooks,t.dispatch,t.getCurrentData,t.emitter,t.calendarApi,this.registerInteractiveComponent,this.unregisterInteractiveComponent);return zr(Xr.Provider,{value:l},n.headerToolbar&&zr(fi,r({ref:this.headerRef,extraClassName:"fc-header-toolbar",model:n.headerToolbar},i)),zr(hi,{liquid:a,height:s,aspectRatio:e,onClick:this.handleNavLinkClick},this.renderView(t),this.buildAppendContent()),n.footerToolbar&&zr(fi,r({ref:this.footerRef,extraClassName:"fc-footer-toolbar",model:n.footerToolbar},i)))},t.prototype.componentDidMount=function(){var e=this.props;this.calendarInteractions=e.pluginHooks.calendarInteractions.map(function(t){return new t(e)}),window.addEventListener("resize",this.handleWindowResize);var t=e.pluginHooks.propSetHandlers;for(var n in t)t[n](e[n],e)},t.prototype.componentDidUpdate=function(e){var t=this.props,n=t.pluginHooks.propSetHandlers;for(var r in n)t[r]!==e[r]&&n[r](t[r],t)},t.prototype.componentWillUnmount=function(){window.removeEventListener("resize",this.handleWindowResize),this.resizeRunner.clear();for(var e=0,t=this.calendarInteractions;e<t.length;e++)t[e].destroy();this.props.emitter.trigger("_unmount")},t.prototype._handleNavLinkClick=function(e,t){var n=this.props,r=n.dateEnv,o=n.options,i=n.calendarApi,a=t.getAttribute("data-navlink");a=a?JSON.parse(a):{};var s=r.createMarker(a.date),l=a.type,u="day"===l?o.navLinkDayClick:"week"===l?o.navLinkWeekClick:null;"function"==typeof u?u.call(i,r.toDate(s),e):("string"==typeof u&&(l=u),i.zoomTo(s,l))},t.prototype.buildAppendContent=function(){var e=this.props,t=e.pluginHooks.viewContainerAppends.map(function(t){return t(e)});return zr.apply(void 0,o([jr,{}],t))},t.prototype.renderView=function(e){for(var t=e.pluginHooks,n=e.viewSpec,o={dateProfile:e.dateProfile,businessHours:e.businessHours,eventStore:e.renderableEventStore,eventUiBases:e.eventUiBases,dateSelection:e.dateSelection,eventSelection:e.eventSelection,eventDrag:e.eventDrag,eventResize:e.eventResize,isHeightAuto:e.isHeightAuto,forPrint:e.forPrint},i=0,a=this.buildViewPropTransformers(t.viewPropsTransformers);i<a.length;i++){var s=a[i];r(o,s.transform(o,e))}var l=n.component;return zr(l,r({},o))},t}(Jr);function yi(e,t,n,r,o,i){var a=n.build(o,void 0,!1),s=n.buildPrev(t,r,!1),l=n.buildNext(t,r,!1);return{title:i,activeButton:e.type,isTodayEnabled:a.isValid&&!hn(t.currentRange,o),isPrevEnabled:s.isValid,isNextEnabled:l.isValid}}function Si(e){return e.map(function(e){return new e})}var Ei=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.state={forPrint:!1},t.handleBeforePrint=function(){t.setState({forPrint:!0})},t.handleAfterPrint=function(){t.setState({forPrint:!1})},t}return n(t,e),t.prototype.render=function(){var e=this.props,t=e.options,n=this.state.forPrint,r=n||"auto"===t.height||"auto"===t.contentHeight,o=r||null==t.height?"":t.height,i=["fc",n?"fc-media-print":"fc-media-screen","fc-direction-"+t.direction,e.theme.getClass("root")];return vr()||i.push("fc-liquid-hack"),e.children(i,o,r,n)},t.prototype.componentDidMount=function(){var e=this.props.emitter;e.on("_beforeprint",this.handleBeforePrint),e.on("_afterprint",this.handleAfterPrint)},t.prototype.componentWillUnmount=function(){var e=this.props.emitter;e.off("_beforeprint",this.handleBeforePrint),e.off("_afterprint",this.handleAfterPrint)},t}($r);function Ci(e,t){return Mt(!e||t>10?{weekday:"short"}:t>1?{weekday:"short",month:"numeric",day:"numeric",omitCommas:!0}:{weekday:"long"})}var bi="fc-col-header-cell";function Di(e){return e.text}var Ri=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return n(t,e),t.prototype.render=function(){var e=this.context,t=e.dateEnv,n=e.options,o=e.theme,i=e.viewApi,a=this.props,s=a.date,l=a.dateProfile,u=Er(s,a.todayRange,null,l),c=[bi].concat(Cr(u,o)),d=t.format(s,a.dayHeaderFormat),p=n.navLinks&&!u.isDisabled&&a.colCnt>1?{"data-navlink":Dr(s),tabIndex:0}:{},f=r(r(r({date:t.toDate(s),view:i},a.extraHookProps),{text:d}),u);return zr(vo,{hookProps:f,classNames:n.dayHeaderClassNames,content:n.dayHeaderContent,defaultContent:Di,didMount:n.dayHeaderDidMount,willUnmount:n.dayHeaderWillUnmount},function(e,t,n,o){return zr("th",r({ref:e,className:c.concat(t).join(" "),"data-date":u.isDisabled?void 0:at(s),colSpan:a.colSpan},a.extraDataAttrs),zr("div",{className:"fc-scrollgrid-sync-inner"},!u.isDisabled&&zr("a",r({ref:n,className:["fc-col-header-cell-cushion",a.isSticky?"fc-sticky":""].join(" ")},p),o)))})},t}($r),wi=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return n(t,e),t.prototype.render=function(){var e=this.props,t=this.context,n=t.dateEnv,o=t.theme,i=t.viewApi,a=t.options,s=ye(new Date(2592e5),e.dow),l={dow:e.dow,isDisabled:!1,isFuture:!1,isPast:!1,isToday:!1,isOther:!1},u=[bi].concat(Cr(l,o),e.extraClassNames||[]),c=n.format(s,e.dayHeaderFormat),d=r(r(r(r({date:s},l),{view:i}),e.extraHookProps),{text:c});return zr(vo,{hookProps:d,classNames:a.dayHeaderClassNames,content:a.dayHeaderContent,defaultContent:Di,didMount:a.dayHeaderDidMount,willUnmount:a.dayHeaderWillUnmount},function(t,n,o,i){return zr("th",r({ref:t,className:u.concat(n).join(" "),colSpan:e.colSpan},e.extraDataAttrs),zr("div",{className:"fc-scrollgrid-sync-inner"},zr("a",{className:["fc-col-header-cell-cushion",e.isSticky?"fc-sticky":""].join(" "),ref:o},i)))})},t}($r),Ti=function(e){function t(t,n){var r=e.call(this,t,n)||this;return r.initialNowDate=Gn(n.options.now,n.dateEnv),r.initialNowQueriedMs=(new Date).valueOf(),r.state=r.computeTiming().currentState,r}return n(t,e),t.prototype.render=function(){var e=this.props,t=this.state;return e.children(t.nowDate,t.todayRange)},t.prototype.componentDidMount=function(){this.setTimeout()},t.prototype.componentDidUpdate=function(e){e.unit!==this.props.unit&&(this.clearTimeout(),this.setTimeout())},t.prototype.componentWillUnmount=function(){this.clearTimeout()},t.prototype.computeTiming=function(){var e=this.props,t=this.context,n=Se(this.initialNowDate,(new Date).valueOf()-this.initialNowQueriedMs),r=t.dateEnv.startOf(n,e.unit),o=t.dateEnv.add(r,Xe(1,e.unit)),i=o.valueOf()-n.valueOf();return{currentState:{nowDate:r,todayRange:xi(r)},nextState:{nowDate:o,todayRange:xi(o)},waitMs:i}},t.prototype.setTimeout=function(){var e=this,t=this.computeTiming(),n=t.nextState,r=t.waitMs;this.timeoutId=setTimeout(function(){e.setState(n,function(){e.setTimeout()})},r)},t.prototype.clearTimeout=function(){this.timeoutId&&clearTimeout(this.timeoutId)},t.contextType=Xr,t}(Br);function xi(e){var t=we(e);return{start:t,end:ye(t,1)}}var Mi=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.createDayHeaderFormatter=dt(ki),t}return n(t,e),t.prototype.render=function(){var e=this.context,t=this.props,n=t.dates,r=t.dateProfile,o=t.datesRepDistinctDays,i=t.renderIntro,a=this.createDayHeaderFormatter(e.options.dayHeaderFormat,o,n.length);return zr(Ti,{unit:"day"},function(e,t){return zr("tr",null,i&&i(),n.map(function(e){return o?zr(Ri,{key:e.toISOString(),date:e,dateProfile:r,todayRange:t,colCnt:n.length,dayHeaderFormat:a}):zr(wi,{key:e.getUTCDay(),dow:e.getUTCDay(),dayHeaderFormat:a})}))})},t}($r);function ki(e,t,n){return e||Ci(t,n)}var Pi=function(){function e(e,t){for(var n=e.start,r=e.end,o=[],i=[],a=-1;n<r;)t.isHiddenDay(n)?o.push(a+.5):(a+=1,o.push(a),i.push(n)),n=ye(n,1);this.dates=i,this.indices=o,this.cnt=i.length}return e.prototype.sliceRange=function(e){var t=this.getDateDayIndex(e.start),n=this.getDateDayIndex(ye(e.end,-1)),r=Math.max(0,t),o=Math.min(this.cnt-1,n);return(r=Math.ceil(r))<=(o=Math.floor(o))?{firstIndex:r,lastIndex:o,isStart:t===r,isEnd:n===o}:null},e.prototype.getDateDayIndex=function(e){var t=this.indices,n=Math.floor(Ce(this.dates[0],e));return n<0?t[0]-1:n>=t.length?t[t.length-1]+1:t[n]},e}(),Ii=function(){function e(e,t){var n,r,o,i=e.dates;if(t){for(r=i[0].getUTCDay(),n=1;n<i.length&&i[n].getUTCDay()!==r;n+=1);o=Math.ceil(i.length/n)}else o=1,n=i.length;this.rowCnt=o,this.colCnt=n,this.daySeries=e,this.cells=this.buildCells(),this.headerDates=this.buildHeaderDates()}return e.prototype.buildCells=function(){for(var e=[],t=0;t<this.rowCnt;t+=1){for(var n=[],r=0;r<this.colCnt;r+=1)n.push(this.buildCell(t,r));e.push(n)}return e},e.prototype.buildCell=function(e,t){var n=this.daySeries.dates[e*this.colCnt+t];return{key:n.toISOString(),date:n}},e.prototype.buildHeaderDates=function(){for(var e=[],t=0;t<this.colCnt;t+=1)e.push(this.cells[0][t].date);return e},e.prototype.sliceRange=function(e){var t=this.colCnt,n=this.daySeries.sliceRange(e),r=[];if(n)for(var o=n.firstIndex,i=n.lastIndex,a=o;a<=i;){var s=Math.floor(a/t),l=Math.min((s+1)*t,i+1);r.push({row:s,firstCol:a%t,lastCol:(l-1)%t,isStart:n.isStart&&a===o,isEnd:n.isEnd&&l-1===i}),a=l}return r},e}(),_i=function(){function e(){this.sliceBusinessHours=dt(this._sliceBusinessHours),this.sliceDateSelection=dt(this._sliceDateSpan),this.sliceEventStore=dt(this._sliceEventStore),this.sliceEventDrag=dt(this._sliceInteraction),this.sliceEventResize=dt(this._sliceInteraction),this.forceDayIfListItem=!1}return e.prototype.sliceProps=function(e,t,n,r){for(var i=[],a=4;a<arguments.length;a++)i[a-4]=arguments[a];var s=e.eventUiBases,l=this.sliceEventStore.apply(this,o([e.eventStore,s,t,n],i));return{dateSelectionSegs:this.sliceDateSelection.apply(this,o([e.dateSelection,s,r],i)),businessHourSegs:this.sliceBusinessHours.apply(this,o([e.businessHours,t,n,r],i)),fgEventSegs:l.fg,bgEventSegs:l.bg,eventDrag:this.sliceEventDrag.apply(this,o([e.eventDrag,s,t,n],i)),eventResize:this.sliceEventResize.apply(this,o([e.eventResize,s,t,n],i)),eventSelection:e.eventSelection}},e.prototype.sliceNowDate=function(e,t){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];return this._sliceDateSpan.apply(this,o([{range:{start:e,end:Se(e,1)},allDay:!1},{},t],n))},e.prototype._sliceBusinessHours=function(e,t,n,r){for(var i=[],a=4;a<arguments.length;a++)i[a-4]=arguments[a];return e?this._sliceEventStore.apply(this,o([Ge(e,Ni(t,Boolean(n)),r),{},t,n],i)).bg:[]},e.prototype._sliceEventStore=function(e,t,n,r){for(var o=[],i=4;i<arguments.length;i++)o[i-4]=arguments[i];if(e){var a=gn(e,t,Ni(n,Boolean(r)),r);return{bg:this.sliceEventRanges(a.bg,o),fg:this.sliceEventRanges(a.fg,o)}}return{bg:[],fg:[]}},e.prototype._sliceInteraction=function(e,t,n,r){for(var o=[],i=4;i<arguments.length;i++)o[i-4]=arguments[i];if(!e)return null;var a=gn(e.mutatedEvents,t,Ni(n,Boolean(r)),r);return{segs:this.sliceEventRanges(a.fg,o),affectedInstances:e.affectedEvents.instances,isEvent:e.isEvent}},e.prototype._sliceDateSpan=function(e,t,n){for(var r=[],i=3;i<arguments.length;i++)r[i-3]=arguments[i];if(!e)return[];for(var a=function(e,t,n){var r=en({editable:!1},n),o=nn(r.refined,r.extra,"",e.allDay,!0,n);return{def:o,ui:En(o,t),instance:Ne(o.defId,e.range),range:e.range,isStart:!0,isEnd:!0}}(e,t,n),s=this.sliceRange.apply(this,o([e.range],r)),l=0,u=s;l<u.length;l++){u[l].eventRange=a}return s},e.prototype.sliceEventRanges=function(e,t){for(var n=[],r=0,o=e;r<o.length;r++){var i=o[r];n.push.apply(n,this.sliceEventRange(i,t))}return n},e.prototype.sliceEventRange=function(e,t){var n=e.range;this.forceDayIfListItem&&"list-item"===e.ui.display&&(n={start:n.start,end:ye(n.start,1)});for(var r=this.sliceRange.apply(this,o([n],t)),i=0,a=r;i<a.length;i++){var s=a[i];s.eventRange=e,s.isStart=e.isStart&&s.isStart,s.isEnd=e.isEnd&&s.isEnd}return r},e}();function Ni(e,t){var n=e.activeRange;return t?n:{start:Se(n.start,e.slotMinTime.milliseconds),end:Se(n.end,e.slotMaxTime.milliseconds-864e5)}}var Hi=/^(visible|hidden)$/,Oi=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.handleEl=function(e){t.el=e,to(t.props.elRef,e)},t}return n(t,e),t.prototype.render=function(){var e=this.props,t=e.liquid,n=e.liquidIsAbsolute,r=t&&n,o=["fc-scroller"];return t&&(n?o.push("fc-scroller-liquid-absolute"):o.push("fc-scroller-liquid")),zr("div",{ref:this.handleEl,className:o.join(" "),style:{overflowX:e.overflowX,overflowY:e.overflowY,left:r&&-(e.overcomeLeft||0)||"",right:r&&-(e.overcomeRight||0)||"",bottom:r&&-(e.overcomeBottom||0)||"",marginLeft:!r&&-(e.overcomeLeft||0)||"",marginRight:!r&&-(e.overcomeRight||0)||"",marginBottom:!r&&-(e.overcomeBottom||0)||"",maxHeight:e.maxHeight||""}},e.children)},t.prototype.needsXScrolling=function(){if(Hi.test(this.props.overflowX))return!1;for(var e=this.el,t=this.el.getBoundingClientRect().width-this.getYScrollbarWidth(),n=e.children,r=0;r<n.length;r+=1)if(n[r].getBoundingClientRect().width>t)return!0;return!1},t.prototype.needsYScrolling=function(){if(Hi.test(this.props.overflowY))return!1;for(var e=this.el,t=this.el.getBoundingClientRect().height-this.getXScrollbarWidth(),n=e.children,r=0;r<n.length;r+=1)if(n[r].getBoundingClientRect().height>t)return!0;return!1},t.prototype.getXScrollbarWidth=function(){return Hi.test(this.props.overflowX)?0:this.el.offsetHeight-this.el.clientHeight},t.prototype.getYScrollbarWidth=function(){return Hi.test(this.props.overflowY)?0:this.el.offsetWidth-this.el.clientWidth},t}($r),Wi=function(){function e(e){var t=this;this.masterCallback=e,this.currentMap={},this.depths={},this.callbackMap={},this.handleValue=function(e,n){var r=t,o=r.depths,i=r.currentMap,a=!1,s=!1;null!==e?(a=n in i,i[n]=e,o[n]=(o[n]||0)+1,s=!0):(o[n]-=1,o[n]||(delete i[n],delete t.callbackMap[n],a=!0)),t.masterCallback&&(a&&t.masterCallback(null,String(n)),s&&t.masterCallback(e,String(n)))}}return e.prototype.createRef=function(e){var t=this,n=this.callbackMap[e];return n||(n=this.callbackMap[e]=function(n){t.handleValue(n,String(e))}),n},e.prototype.collect=function(e,t,n){return je(this.currentMap,e,t,n)},e.prototype.getAll=function(){return Ue(this.currentMap)},e}();function Ai(e){for(var t=0,n=0,r=j(e,".fc-scrollgrid-shrink");n<r.length;n++){var o=r[n];t=Math.max(t,ge(o))}return Math.ceil(t)}function Li(e,t){return e.liquid&&t.liquid}function Ui(e,t){return null!=t.maxHeight||Li(e,t)}function Bi(e,t,n){var r=n.expandRows;return"function"==typeof t.content?t.content(n):zr("table",{className:[t.tableClassName,e.syncRowHeights?"fc-scrollgrid-sync-table":""].join(" "),style:{minWidth:n.tableMinWidth,width:n.clientWidth,height:r?n.clientHeight:""}},n.tableColGroupNode,zr("tbody",{},"function"==typeof t.rowContent?t.rowContent(n):t.rowContent))}function zi(e,t){return ct(e,t,Be)}function Vi(e,t){for(var n=[],r=0,i=e;r<i.length;r++)for(var a=i[r],s=a.span||1,l=0;l<s;l+=1)n.push(zr("col",{style:{width:"shrink"===a.width?Fi(t):a.width||"",minWidth:a.minWidth||""}}));return zr.apply(void 0,o(["colgroup",{}],n))}function Fi(e){return null==e?4:e}function ji(e){for(var t=0,n=e;t<n.length;t++)if("shrink"===n[t].width)return!0;return!1}function Gi(e,t){var n=["fc-scrollgrid",t.theme.getClass("table")];return e&&n.push("fc-scrollgrid-liquid"),n}function qi(e,t){var n=["fc-scrollgrid-section","fc-scrollgrid-section-"+e.type,e.className];return t&&e.liquid&&null==e.maxHeight&&n.push("fc-scrollgrid-section-liquid"),e.isSticky&&n.push("fc-scrollgrid-section-sticky"),n}function Yi(e){return zr("div",{className:"fc-scrollgrid-sticky-shim",style:{width:e.clientWidth,minWidth:e.tableMinWidth}})}function Zi(e){var t=e.stickyHeaderDates;return null!=t&&"auto"!==t||(t="auto"===e.height||"auto"===e.viewHeight),t}function Xi(e){var t=e.stickyFooterScrollbar;return null!=t&&"auto"!==t||(t="auto"===e.height||"auto"===e.viewHeight),t}var Ki=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.processCols=dt(function(e){return e},zi),t.renderMicroColGroup=dt(Vi),t.scrollerRefs=new Wi,t.scrollerElRefs=new Wi(t._handleScrollerEl.bind(t)),t.state={shrinkWidth:null,forceYScrollbars:!1,scrollerClientWidths:{},scrollerClientHeights:{}},t.handleSizing=function(){t.setState(r({shrinkWidth:t.computeShrinkWidth()},t.computeScrollerDims()))},t}return n(t,e),t.prototype.render=function(){for(var e,t=this.props,n=this.state,r=this.context,i=t.sections||[],a=this.processCols(t.cols),s=this.renderMicroColGroup(a,n.shrinkWidth),l=Gi(t.liquid,r),u=i.length,c=0,d=[],p=[],f=[];c<u&&"header"===(e=i[c]).type;)d.push(this.renderSection(e,c,s)),c+=1;for(;c<u&&"body"===(e=i[c]).type;)p.push(this.renderSection(e,c,s)),c+=1;for(;c<u&&"footer"===(e=i[c]).type;)f.push(this.renderSection(e,c,s)),c+=1;var h=!vr();return zr("table",{className:l.join(" "),style:{height:t.height}},Boolean(!h&&d.length)&&zr.apply(void 0,o(["thead",{}],d)),Boolean(!h&&p.length)&&zr.apply(void 0,o(["tbody",{}],p)),Boolean(!h&&f.length)&&zr.apply(void 0,o(["tfoot",{}],f)),h&&zr.apply(void 0,o(["tbody",{}],d,p,f)))},t.prototype.renderSection=function(e,t,n){return"outerContent"in e?zr(jr,{key:e.key},e.outerContent):zr("tr",{key:e.key,className:qi(e,this.props.liquid).join(" ")},this.renderChunkTd(e,t,n,e.chunk))},t.prototype.renderChunkTd=function(e,t,n,r){if("outerContent"in r)return r.outerContent;var o=this.props,i=this.state,a=i.forceYScrollbars,s=i.scrollerClientWidths,l=i.scrollerClientHeights,u=Ui(o,e),c=Li(o,e),d=o.liquid?a?"scroll":u?"auto":"hidden":"visible",p=Bi(e,r,{tableColGroupNode:n,tableMinWidth:"",clientWidth:void 0!==s[t]?s[t]:null,clientHeight:void 0!==l[t]?l[t]:null,expandRows:e.expandRows,syncRowHeights:!1,rowSyncHeights:[],reportRowHeightChange:function(){}});return zr("td",{ref:r.elRef},zr("div",{className:"fc-scroller-harness"+(c?" fc-scroller-harness-liquid":"")},zr(Oi,{ref:this.scrollerRefs.createRef(t),elRef:this.scrollerElRefs.createRef(t),overflowY:d,overflowX:o.liquid?"hidden":"visible",maxHeight:e.maxHeight,liquid:c,liquidIsAbsolute:!0},p)))},t.prototype._handleScrollerEl=function(e,t){var n=parseInt(t,10);to(this.props.sections[n].chunk.scrollerElRef,e)},t.prototype.componentDidMount=function(){this.handleSizing(),this.context.addResizeHandler(this.handleSizing)},t.prototype.componentDidUpdate=function(){this.handleSizing()},t.prototype.componentWillUnmount=function(){this.context.removeResizeHandler(this.handleSizing)},t.prototype.computeShrinkWidth=function(){return ji(this.props.cols)?Ai(this.scrollerElRefs.getAll()):0},t.prototype.computeScrollerDims=function(){for(var e=xr(),t=this.props.sections.length,n=this.scrollerRefs,r=this.scrollerElRefs,o=!1,i={},a={},s=0;s<t;s+=1){var l=n.currentMap[s];if(l&&l.needsYScrolling()){o=!0;break}}for(s=0;s<t;s+=1){var u=r.currentMap[s];if(u){var c=u.parentNode;i[s]=Math.floor(c.getBoundingClientRect().width-(o?e.y:0)),a[s]=Math.floor(c.getBoundingClientRect().height)}}return{forceYScrollbars:o,scrollerClientWidths:i,scrollerClientHeights:a}},t}($r);Ki.addStateEquality({scrollerClientWidths:Be,scrollerClientHeights:Be});var Ji=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.elRef=Fr(),t}return n(t,e),t.prototype.render=function(){var e=this.props,t=this.context,n=t.options,r=e.seg,o=r.eventRange,i=o.ui,a={event:new Yn(t,o.def,o.instance),view:t.viewApi,timeText:e.timeText,textColor:i.textColor,backgroundColor:i.backgroundColor,borderColor:i.borderColor,isDraggable:!e.disableDragging&&Dn(r,t),isStartResizable:!e.disableResizing&&Rn(r,t),isEndResizable:!e.disableResizing&&wn(r),isMirror:Boolean(e.isDragging||e.isResizing||e.isDateSelecting),isStart:Boolean(r.isStart),isEnd:Boolean(r.isEnd),isPast:Boolean(e.isPast),isFuture:Boolean(e.isFuture),isToday:Boolean(e.isToday),isSelected:Boolean(e.isSelected),isDragging:Boolean(e.isDragging),isResizing:Boolean(e.isResizing)},s=Mn(a).concat(i.classNames);return zr(vo,{hookProps:a,classNames:n.eventClassNames,content:n.eventContent,defaultContent:e.defaultContent,didMount:n.eventDidMount,willUnmount:n.eventWillUnmount,elRef:this.elRef},function(t,n,r,o){return e.children(t,s.concat(n),r,o,a)})},t.prototype.componentDidMount=function(){mn(this.elRef.current,this.props.seg)},t.prototype.componentDidUpdate=function(e){var t=this.props.seg;t!==e.seg&&mn(this.elRef.current,t)},t}($r),$i=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return n(t,e),t.prototype.render=function(){var e=this.props,t=this.context,n=e.seg,o=t.options.eventTimeFormat||e.defaultTimeFormat,i=Tn(n,o,t,e.defaultDisplayEventTime,e.defaultDisplayEventEnd);return zr(Ji,{seg:n,timeText:i,disableDragging:e.disableDragging,disableResizing:e.disableResizing,defaultContent:e.defaultContent||Qi,isDragging:e.isDragging,isResizing:e.isResizing,isDateSelecting:e.isDateSelecting,isSelected:e.isSelected,isPast:e.isPast,isFuture:e.isFuture,isToday:e.isToday},function(t,o,i,a,s){return zr("a",r({className:e.extraClassNames.concat(o).join(" "),style:{borderColor:s.borderColor,backgroundColor:s.backgroundColor},ref:t},function(e){var t=n.eventRange.def.url;return t?{href:t}:{}}()),zr("div",{className:"fc-event-main",ref:i,style:{color:s.textColor}},a),s.isStartResizable&&zr("div",{className:"fc-event-resizer fc-event-resizer-start"}),s.isEndResizable&&zr("div",{className:"fc-event-resizer fc-event-resizer-end"}))})},t}($r);function Qi(e){return zr("div",{className:"fc-event-main-frame"},e.timeText&&zr("div",{className:"fc-event-time"},e.timeText),zr("div",{className:"fc-event-title-container"},zr("div",{className:"fc-event-title fc-sticky"},e.event.title||zr(jr,null," "))))}var ea=function(e){return zr(Xr.Consumer,null,function(t){var n=t.options,r={isAxis:e.isAxis,date:t.dateEnv.toDate(e.date),view:t.viewApi};return zr(vo,{hookProps:r,classNames:n.nowIndicatorClassNames,content:n.nowIndicatorContent,didMount:n.nowIndicatorDidMount,willUnmount:n.nowIndicatorWillUnmount},e.children)})},ta=Mt({day:"numeric"}),na=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return n(t,e),t.prototype.render=function(){var e=this.props,t=this.context,n=t.options,r=ra({date:e.date,dateProfile:e.dateProfile,todayRange:e.todayRange,showDayNumber:e.showDayNumber,extraProps:e.extraHookProps,viewApi:t.viewApi,dateEnv:t.dateEnv});return zr(yo,{hookProps:r,content:n.dayCellContent,defaultContent:e.defaultContent},e.children)},t}($r);function ra(e){var t=e.date,n=e.dateEnv,o=Er(t,e.todayRange,null,e.dateProfile);return r(r(r({date:n.toDate(t),view:e.viewApi},o),{dayNumberText:e.showDayNumber?n.format(t,ta):""}),e.extraProps)}var oa=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.refineHookProps=pt(ra),t.normalizeClassNames=Co(),t}return n(t,e),t.prototype.render=function(){var e=this.props,t=this.context,n=t.options,r=this.refineHookProps({date:e.date,dateProfile:e.dateProfile,todayRange:e.todayRange,showDayNumber:e.showDayNumber,extraProps:e.extraHookProps,viewApi:t.viewApi,dateEnv:t.dateEnv}),o=Cr(r,t.theme).concat(r.isDisabled?[]:this.normalizeClassNames(n.dayCellClassNames,r)),i=r.isDisabled?{}:{"data-date":at(e.date)};return zr(Eo,{hookProps:r,didMount:n.dayCellDidMount,willUnmount:n.dayCellWillUnmount,elRef:e.elRef},function(t){return e.children(t,o,i,r.isDisabled)})},t}($r);function ia(e){return zr("div",{className:"fc-"+e})}var aa=function(e){return zr(Ji,{defaultContent:sa,seg:e.seg,timeText:"",disableDragging:!0,disableResizing:!0,isDragging:!1,isResizing:!1,isDateSelecting:!1,isSelected:!1,isPast:e.isPast,isFuture:e.isFuture,isToday:e.isToday},function(e,t,n,r,o){return zr("div",{ref:e,className:["fc-bg-event"].concat(t).join(" "),style:{backgroundColor:o.backgroundColor}},r)})};function sa(e){return e.event.title&&zr("div",{className:"fc-event-title"},e.event.title)}var la=function(e){return zr(Xr.Consumer,null,function(t){var n=t.dateEnv,r=t.options,o=e.date,i=r.weekNumberFormat||e.defaultFormat,a=n.computeWeekNumber(o),s=n.format(o,i);return zr(vo,{hookProps:{num:a,text:s,date:o},classNames:r.weekNumberClassNames,content:r.weekNumberContent,defaultContent:ua,didMount:r.weekNumberDidMount,willUnmount:r.weekNumberWillUnmount},e.children)})};function ua(e){return e.text}var ca=function(e){function t(t,n){void 0===n&&(n={});var o=e.call(this)||this;return o.isRendering=!1,o.isRendered=!1,o.currentClassNames=[],o.customContentRenderId=0,o.handleAction=function(e){switch(e.type){case"SET_EVENT_DRAG":case"SET_EVENT_RESIZE":o.renderRunner.tryDrain()}},o.handleData=function(e){o.currentData=e,o.renderRunner.request(e.calendarOptions.rerenderDelay)},o.handleRenderRequest=function(){if(o.isRendering){o.isRendered=!0;var e=o.currentData;Vr(zr(Ei,{options:e.calendarOptions,theme:e.theme,emitter:e.emitter},function(t,n,i,a){return o.setClassNames(t),o.setHeight(n),zr(mo.Provider,{value:o.customContentRenderId},zr(mi,r({isHeightAuto:i,forPrint:a},e)))}),o.el)}else o.isRendered&&(o.isRendered=!1,Yr(o.el),o.setClassNames([]),o.setHeight(""));qr()},o.el=t,o.renderRunner=new Go(o.handleRenderRequest),new Zo({optionOverrides:n,calendarApi:o,onAction:o.handleAction,onData:o.handleData}),o}return n(t,e),Object.defineProperty(t.prototype,"view",{get:function(){return this.currentData.viewApi},enumerable:!1,configurable:!0}),t.prototype.render=function(){var e=this.isRendering;e?this.customContentRenderId+=1:this.isRendering=!0,this.renderRunner.request(),e&&this.updateSize()},t.prototype.destroy=function(){this.isRendering&&(this.isRendering=!1,this.renderRunner.request())},t.prototype.updateSize=function(){e.prototype.updateSize.call(this),qr()},t.prototype.batchRendering=function(e){this.renderRunner.pause("batchRendering"),e(),this.renderRunner.resume("batchRendering")},t.prototype.pauseRendering=function(){this.renderRunner.pause("pauseRendering")},t.prototype.resumeRendering=function(){this.renderRunner.resume("pauseRendering",!0)},t.prototype.resetOptions=function(e,t){this.currentDataManager.resetOptions(e,t)},t.prototype.setClassNames=function(e){if(!ct(e,this.currentClassNames)){for(var t=this.el.classList,n=0,r=this.currentClassNames;n<r.length;n++){var o=r[n];t.remove(o)}for(var i=0,a=e;i<a.length;i++)o=a[i],t.add(o);this.currentClassNames=e}},t.prototype.setHeight=function(e){Z(this.el,"height",e)},t}(qn);ui.touchMouseIgnoreWait=500;var da=0,pa=0,fa=!1,ha=function(){function e(e){var t=this;this.subjectEl=null,this.selector="",this.handleSelector="",this.shouldIgnoreMove=!1,this.shouldWatchScroll=!0,this.isDragging=!1,this.isTouchDragging=!1,this.wasTouchScroll=!1,this.handleMouseDown=function(e){if(!t.shouldIgnoreMouse()&&function(e){return 0===e.button&&!e.ctrlKey}(e)&&t.tryStart(e)){var n=t.createEventFromMouse(e,!0);t.emitter.trigger("pointerdown",n),t.initScrollWatch(n),t.shouldIgnoreMove||document.addEventListener("mousemove",t.handleMouseMove),document.addEventListener("mouseup",t.handleMouseUp)}},this.handleMouseMove=function(e){var n=t.createEventFromMouse(e);t.recordCoords(n),t.emitter.trigger("pointermove",n)},this.handleMouseUp=function(e){document.removeEventListener("mousemove",t.handleMouseMove),document.removeEventListener("mouseup",t.handleMouseUp),t.emitter.trigger("pointerup",t.createEventFromMouse(e)),t.cleanup()},this.handleTouchStart=function(e){if(t.tryStart(e)){t.isTouchDragging=!0;var n=t.createEventFromTouch(e,!0);t.emitter.trigger("pointerdown",n),t.initScrollWatch(n);var r=e.target;t.shouldIgnoreMove||r.addEventListener("touchmove",t.handleTouchMove),r.addEventListener("touchend",t.handleTouchEnd),r.addEventListener("touchcancel",t.handleTouchEnd),window.addEventListener("scroll",t.handleTouchScroll,!0)}},this.handleTouchMove=function(e){var n=t.createEventFromTouch(e);t.recordCoords(n),t.emitter.trigger("pointermove",n)},this.handleTouchEnd=function(e){if(t.isDragging){var n=e.target;n.removeEventListener("touchmove",t.handleTouchMove),n.removeEventListener("touchend",t.handleTouchEnd),n.removeEventListener("touchcancel",t.handleTouchEnd),window.removeEventListener("scroll",t.handleTouchScroll,!0),t.emitter.trigger("pointerup",t.createEventFromTouch(e)),t.cleanup(),t.isTouchDragging=!1,da+=1,setTimeout(function(){da-=1},ui.touchMouseIgnoreWait)}},this.handleTouchScroll=function(){t.wasTouchScroll=!0},this.handleScroll=function(e){if(!t.shouldIgnoreMove){var n=window.pageXOffset-t.prevScrollX+t.prevPageX,r=window.pageYOffset-t.prevScrollY+t.prevPageY;t.emitter.trigger("pointermove",{origEvent:e,isTouch:t.isTouchDragging,subjectEl:t.subjectEl,pageX:n,pageY:r,deltaX:n-t.origPageX,deltaY:r-t.origPageY})}},this.containerEl=e,this.emitter=new Hr,e.addEventListener("mousedown",this.handleMouseDown),e.addEventListener("touchstart",this.handleTouchStart,{passive:!0}),1===(pa+=1)&&window.addEventListener("touchmove",ga,{passive:!1})}return e.prototype.destroy=function(){this.containerEl.removeEventListener("mousedown",this.handleMouseDown),this.containerEl.removeEventListener("touchstart",this.handleTouchStart,{passive:!0}),(pa-=1)||window.removeEventListener("touchmove",ga,{passive:!1})},e.prototype.tryStart=function(e){var t=this.querySubjectEl(e),n=e.target;return!(!t||this.handleSelector&&!V(n,this.handleSelector)||(this.subjectEl=t,this.isDragging=!0,this.wasTouchScroll=!1,0))},e.prototype.cleanup=function(){fa=!1,this.isDragging=!1,this.subjectEl=null,this.destroyScrollWatch()},e.prototype.querySubjectEl=function(e){return this.selector?V(e.target,this.selector):this.containerEl},e.prototype.shouldIgnoreMouse=function(){return da||this.isTouchDragging},e.prototype.cancelTouchScroll=function(){this.isDragging&&(fa=!0)},e.prototype.initScrollWatch=function(e){this.shouldWatchScroll&&(this.recordCoords(e),window.addEventListener("scroll",this.handleScroll,!0))},e.prototype.recordCoords=function(e){this.shouldWatchScroll&&(this.prevPageX=e.pageX,this.prevPageY=e.pageY,this.prevScrollX=window.pageXOffset,this.prevScrollY=window.pageYOffset)},e.prototype.destroyScrollWatch=function(){this.shouldWatchScroll&&window.removeEventListener("scroll",this.handleScroll,!0)},e.prototype.createEventFromMouse=function(e,t){var n=0,r=0;return t?(this.origPageX=e.pageX,this.origPageY=e.pageY):(n=e.pageX-this.origPageX,r=e.pageY-this.origPageY),{origEvent:e,isTouch:!1,subjectEl:this.subjectEl,pageX:e.pageX,pageY:e.pageY,deltaX:n,deltaY:r}},e.prototype.createEventFromTouch=function(e,t){var n,r,o=e.touches,i=0,a=0;return o&&o.length?(n=o[0].pageX,r=o[0].pageY):(n=e.pageX,r=e.pageY),t?(this.origPageX=n,this.origPageY=r):(i=n-this.origPageX,a=r-this.origPageY),{origEvent:e,isTouch:!0,subjectEl:this.subjectEl,pageX:n,pageY:r,deltaX:i,deltaY:a}},e}();function ga(e){fa&&e.preventDefault()}var va=function(){function e(){this.isVisible=!1,this.sourceEl=null,this.mirrorEl=null,this.sourceElRect=null,this.parentNode=document.body,this.zIndex=9999,this.revertDuration=0}return e.prototype.start=function(e,t,n){this.sourceEl=e,this.sourceElRect=this.sourceEl.getBoundingClientRect(),this.origScreenX=t-window.pageXOffset,this.origScreenY=n-window.pageYOffset,this.deltaX=0,this.deltaY=0,this.updateElPosition()},e.prototype.handleMove=function(e,t){this.deltaX=e-window.pageXOffset-this.origScreenX,this.deltaY=t-window.pageYOffset-this.origScreenY,this.updateElPosition()},e.prototype.setIsVisible=function(e){e?this.isVisible||(this.mirrorEl&&(this.mirrorEl.style.display=""),this.isVisible=e,this.updateElPosition()):this.isVisible&&(this.mirrorEl&&(this.mirrorEl.style.display="none"),this.isVisible=e)},e.prototype.stop=function(e,t){var n=this,r=function(){n.cleanup(),t()};e&&this.mirrorEl&&this.isVisible&&this.revertDuration&&(this.deltaX||this.deltaY)?this.doRevertAnimation(r,this.revertDuration):setTimeout(r,0)},e.prototype.doRevertAnimation=function(e,t){var n=this.mirrorEl,r=this.sourceEl.getBoundingClientRect();n.style.transition="top "+t+"ms,left "+t+"ms",Y(n,{left:r.left,top:r.top}),Q(n,function(){n.style.transition="",e()})},e.prototype.cleanup=function(){this.mirrorEl&&(z(this.mirrorEl),this.mirrorEl=null),this.sourceEl=null},e.prototype.updateElPosition=function(){this.sourceEl&&this.isVisible&&Y(this.getMirrorEl(),{left:this.sourceElRect.left+this.deltaX,top:this.sourceElRect.top+this.deltaY})},e.prototype.getMirrorEl=function(){var e=this.sourceElRect,t=this.mirrorEl;return t||((t=this.mirrorEl=this.sourceEl.cloneNode(!0)).classList.add("fc-unselectable"),t.classList.add("fc-event-dragging"),Y(t,{position:"fixed",zIndex:this.zIndex,visibility:"",boxSizing:"border-box",width:e.right-e.left,height:e.bottom-e.top,right:"auto",bottom:"auto",margin:0}),this.parentNode.appendChild(t)),t},e}(),ma=function(e){function t(t,n){var r=e.call(this)||this;return r.handleScroll=function(){r.scrollTop=r.scrollController.getScrollTop(),r.scrollLeft=r.scrollController.getScrollLeft(),r.handleScrollChange()},r.scrollController=t,r.doesListening=n,r.scrollTop=r.origScrollTop=t.getScrollTop(),r.scrollLeft=r.origScrollLeft=t.getScrollLeft(),r.scrollWidth=t.getScrollWidth(),r.scrollHeight=t.getScrollHeight(),r.clientWidth=t.getClientWidth(),r.clientHeight=t.getClientHeight(),r.clientRect=r.computeClientRect(),r.doesListening&&r.getEventTarget().addEventListener("scroll",r.handleScroll),r}return n(t,e),t.prototype.destroy=function(){this.doesListening&&this.getEventTarget().removeEventListener("scroll",this.handleScroll)},t.prototype.getScrollTop=function(){return this.scrollTop},t.prototype.getScrollLeft=function(){return this.scrollLeft},t.prototype.setScrollTop=function(e){this.scrollController.setScrollTop(e),this.doesListening||(this.scrollTop=Math.max(Math.min(e,this.getMaxScrollTop()),0),this.handleScrollChange())},t.prototype.setScrollLeft=function(e){this.scrollController.setScrollLeft(e),this.doesListening||(this.scrollLeft=Math.max(Math.min(e,this.getMaxScrollLeft()),0),this.handleScrollChange())},t.prototype.getClientWidth=function(){return this.clientWidth},t.prototype.getClientHeight=function(){return this.clientHeight},t.prototype.getScrollWidth=function(){return this.scrollWidth},t.prototype.getScrollHeight=function(){return this.scrollHeight},t.prototype.handleScrollChange=function(){},t}(Wr),ya=function(e){function t(t,n){return e.call(this,new Ar(t),n)||this}return n(t,e),t.prototype.getEventTarget=function(){return this.scrollController.el},t.prototype.computeClientRect=function(){return Pr(this.scrollController.el)},t}(ma),Sa=function(e){function t(t){return e.call(this,new Lr,t)||this}return n(t,e),t.prototype.getEventTarget=function(){return window},t.prototype.computeClientRect=function(){return{left:this.scrollLeft,right:this.scrollLeft+this.clientWidth,top:this.scrollTop,bottom:this.scrollTop+this.clientHeight}},t.prototype.handleScrollChange=function(){this.clientRect=this.computeClientRect()},t}(ma),Ea="function"==typeof performance?performance.now:Date.now,Ca=function(){function e(){var e=this;this.isEnabled=!0,this.scrollQuery=[window,".fc-scroller"],this.edgeThreshold=50,this.maxVelocity=300,this.pointerScreenX=null,this.pointerScreenY=null,this.isAnimating=!1,this.scrollCaches=null,this.everMovedUp=!1,this.everMovedDown=!1,this.everMovedLeft=!1,this.everMovedRight=!1,this.animate=function(){if(e.isAnimating){var t=e.computeBestEdge(e.pointerScreenX+window.pageXOffset,e.pointerScreenY+window.pageYOffset);if(t){var n=Ea();e.handleSide(t,(n-e.msSinceRequest)/1e3),e.requestAnimation(n)}else e.isAnimating=!1}}}return e.prototype.start=function(e,t){this.isEnabled&&(this.scrollCaches=this.buildCaches(),this.pointerScreenX=null,this.pointerScreenY=null,this.everMovedUp=!1,this.everMovedDown=!1,this.everMovedLeft=!1,this.everMovedRight=!1,this.handleMove(e,t))},e.prototype.handleMove=function(e,t){if(this.isEnabled){var n=e-window.pageXOffset,r=t-window.pageYOffset,o=null===this.pointerScreenY?0:r-this.pointerScreenY,i=null===this.pointerScreenX?0:n-this.pointerScreenX;o<0?this.everMovedUp=!0:o>0&&(this.everMovedDown=!0),i<0?this.everMovedLeft=!0:i>0&&(this.everMovedRight=!0),this.pointerScreenX=n,this.pointerScreenY=r,this.isAnimating||(this.isAnimating=!0,this.requestAnimation(Ea()))}},e.prototype.stop=function(){if(this.isEnabled){this.isAnimating=!1;for(var e=0,t=this.scrollCaches;e<t.length;e++)t[e].destroy();this.scrollCaches=null}},e.prototype.requestAnimation=function(e){this.msSinceRequest=e,requestAnimationFrame(this.animate)},e.prototype.handleSide=function(e,t){var n=e.scrollCache,r=this.edgeThreshold,o=r-e.distance,i=o*o/(r*r)*this.maxVelocity*t,a=1;switch(e.name){case"left":a=-1;case"right":n.setScrollLeft(n.getScrollLeft()+i*a);break;case"top":a=-1;case"bottom":n.setScrollTop(n.getScrollTop()+i*a)}},e.prototype.computeBestEdge=function(e,t){for(var n=this.edgeThreshold,r=null,o=0,i=this.scrollCaches;o<i.length;o++){var a=i[o],s=a.clientRect,l=e-s.left,u=s.right-e,c=t-s.top,d=s.bottom-t;l>=0&&u>=0&&c>=0&&d>=0&&(c<=n&&this.everMovedUp&&a.canScrollUp()&&(!r||r.distance>c)&&(r={scrollCache:a,name:"top",distance:c}),d<=n&&this.everMovedDown&&a.canScrollDown()&&(!r||r.distance>d)&&(r={scrollCache:a,name:"bottom",distance:d}),l<=n&&this.everMovedLeft&&a.canScrollLeft()&&(!r||r.distance>l)&&(r={scrollCache:a,name:"left",distance:l}),u<=n&&this.everMovedRight&&a.canScrollRight()&&(!r||r.distance>u)&&(r={scrollCache:a,name:"right",distance:u}))}return r},e.prototype.buildCaches=function(){return this.queryScrollEls().map(function(e){return e===window?new Sa(!1):new ya(e,!1)})},e.prototype.queryScrollEls=function(){for(var e=[],t=0,n=this.scrollQuery;t<n.length;t++){var r=n[t];"object"==typeof r?e.push(r):e.push.apply(e,Array.prototype.slice.call(document.querySelectorAll(r)))}return e},e}(),ba=function(e){function t(t,n){var r=e.call(this,t)||this;r.delay=null,r.minDistance=0,r.touchScrollAllowed=!0,r.mirrorNeedsRevert=!1,r.isInteracting=!1,r.isDragging=!1,r.isDelayEnded=!1,r.isDistanceSurpassed=!1,r.delayTimeoutId=null,r.onPointerDown=function(e){r.isDragging||(r.isInteracting=!0,r.isDelayEnded=!1,r.isDistanceSurpassed=!1,oe(document.body),ae(document.body),e.isTouch||e.origEvent.preventDefault(),r.emitter.trigger("pointerdown",e),r.isInteracting&&!r.pointer.shouldIgnoreMove&&(r.mirror.setIsVisible(!1),r.mirror.start(e.subjectEl,e.pageX,e.pageY),r.startDelay(e),r.minDistance||r.handleDistanceSurpassed(e)))},r.onPointerMove=function(e){if(r.isInteracting){if(r.emitter.trigger("pointermove",e),!r.isDistanceSurpassed){var t=r.minDistance,n=e.deltaX,o=e.deltaY;n*n+o*o>=t*t&&r.handleDistanceSurpassed(e)}r.isDragging&&("scroll"!==e.origEvent.type&&(r.mirror.handleMove(e.pageX,e.pageY),r.autoScroller.handleMove(e.pageX,e.pageY)),r.emitter.trigger("dragmove",e))}},r.onPointerUp=function(e){r.isInteracting&&(r.isInteracting=!1,ie(document.body),se(document.body),r.emitter.trigger("pointerup",e),r.isDragging&&(r.autoScroller.stop(),r.tryStopDrag(e)),r.delayTimeoutId&&(clearTimeout(r.delayTimeoutId),r.delayTimeoutId=null))};var o=r.pointer=new ha(t);return o.emitter.on("pointerdown",r.onPointerDown),o.emitter.on("pointermove",r.onPointerMove),o.emitter.on("pointerup",r.onPointerUp),n&&(o.selector=n),r.mirror=new va,r.autoScroller=new Ca,r}return n(t,e),t.prototype.destroy=function(){this.pointer.destroy(),this.onPointerUp({})},t.prototype.startDelay=function(e){var t=this;"number"==typeof this.delay?this.delayTimeoutId=setTimeout(function(){t.delayTimeoutId=null,t.handleDelayEnd(e)},this.delay):this.handleDelayEnd(e)},t.prototype.handleDelayEnd=function(e){this.isDelayEnded=!0,this.tryStartDrag(e)},t.prototype.handleDistanceSurpassed=function(e){this.isDistanceSurpassed=!0,this.tryStartDrag(e)},t.prototype.tryStartDrag=function(e){this.isDelayEnded&&this.isDistanceSurpassed&&(this.pointer.wasTouchScroll&&!this.touchScrollAllowed||(this.isDragging=!0,this.mirrorNeedsRevert=!1,this.autoScroller.start(e.pageX,e.pageY),this.emitter.trigger("dragstart",e),!1===this.touchScrollAllowed&&this.pointer.cancelTouchScroll()))},t.prototype.tryStopDrag=function(e){this.mirror.stop(this.mirrorNeedsRevert,this.stopDrag.bind(this,e))},t.prototype.stopDrag=function(e){this.isDragging=!1,this.emitter.trigger("dragend",e)},t.prototype.setIgnoreMove=function(e){this.pointer.shouldIgnoreMove=e},t.prototype.setMirrorIsVisible=function(e){this.mirror.setIsVisible(e)},t.prototype.setMirrorNeedsRevert=function(e){this.mirrorNeedsRevert=e},t.prototype.setAutoScrollEnabled=function(e){this.autoScroller.isEnabled=e},t}(li),Da=function(){function e(e){this.origRect=Ir(e),this.scrollCaches=_r(e).map(function(e){return new ya(e,!0)})}return e.prototype.destroy=function(){for(var e=0,t=this.scrollCaches;e<t.length;e++)t[e].destroy()},e.prototype.computeLeft=function(){for(var e=this.origRect.left,t=0,n=this.scrollCaches;t<n.length;t++){var r=n[t];e+=r.origScrollLeft-r.getScrollLeft()}return e},e.prototype.computeTop=function(){for(var e=this.origRect.top,t=0,n=this.scrollCaches;t<n.length;t++){var r=n[t];e+=r.origScrollTop-r.getScrollTop()}return e},e.prototype.isWithinClipping=function(e,t){for(var n,r={left:e,top:t},o=0,i=this.scrollCaches;o<i.length;o++){var a=i[o];if(void 0,"HTML"!==(n=a.getEventTarget().tagName)&&"BODY"!==n&&!cr(r,a.clientRect))return!1}return!0},e}(),Ra=function(){function e(e,t){var n=this;this.useSubjectCenter=!1,this.requireInitial=!0,this.initialHit=null,this.movingHit=null,this.finalHit=null,this.handlePointerDown=function(e){var t=n.dragging;n.initialHit=null,n.movingHit=null,n.finalHit=null,n.prepareHits(),n.processFirstCoord(e),n.initialHit||!n.requireInitial?(t.setIgnoreMove(!1),n.emitter.trigger("pointerdown",e)):t.setIgnoreMove(!0)},this.handleDragStart=function(e){n.emitter.trigger("dragstart",e),n.handleMove(e,!0)},this.handleDragMove=function(e){n.emitter.trigger("dragmove",e),n.handleMove(e)},this.handlePointerUp=function(e){n.releaseHits(),n.emitter.trigger("pointerup",e)},this.handleDragEnd=function(e){n.movingHit&&n.emitter.trigger("hitupdate",null,!0,e),n.finalHit=n.movingHit,n.movingHit=null,n.emitter.trigger("dragend",e)},this.droppableStore=t,e.emitter.on("pointerdown",this.handlePointerDown),e.emitter.on("dragstart",this.handleDragStart),e.emitter.on("dragmove",this.handleDragMove),e.emitter.on("pointerup",this.handlePointerUp),e.emitter.on("dragend",this.handleDragEnd),this.dragging=e,this.emitter=new Hr}return e.prototype.processFirstCoord=function(e){var t,n={left:e.pageX,top:e.pageY},r=n,o=e.subjectEl;o!==document&&(r=fr(r,t=Ir(o)));var i=this.initialHit=this.queryHitForOffset(r.left,r.top);if(i){if(this.useSubjectCenter&&t){var a=dr(t,i.rect);a&&(r=hr(a))}this.coordAdjust=gr(r,n)}else this.coordAdjust={left:0,top:0}},e.prototype.handleMove=function(e,t){var n=this.queryHitForOffset(e.pageX+this.coordAdjust.left,e.pageY+this.coordAdjust.top);!t&&wa(this.movingHit,n)||(this.movingHit=n,this.emitter.trigger("hitupdate",n,!1,e))},e.prototype.prepareHits=function(){this.offsetTrackers=Ae(this.droppableStore,function(e){return e.component.prepareHits(),new Da(e.el)})},e.prototype.releaseHits=function(){var e=this.offsetTrackers;for(var t in e)e[t].destroy();this.offsetTrackers={}},e.prototype.queryHitForOffset=function(e,t){var n=this.droppableStore,r=this.offsetTrackers,o=null;for(var i in n){var a=n[i].component,s=r[i];if(s&&s.isWithinClipping(e,t)){var l=s.computeLeft(),u=s.computeTop(),c=e-l,d=t-u,p=s.origRect,f=p.right-p.left,h=p.bottom-p.top;if(c>=0&&c<f&&d>=0&&d<h){var g=a.queryHit(c,d,f,h),v=a.context.getCurrentData().dateProfile;g&&fn(v.activeRange,g.dateSpan.range)&&(!o||g.layer>o.layer)&&(g.rect.left+=l,g.rect.right+=l,g.rect.top+=u,g.rect.bottom+=u,o=g)}}}return o},e}();function wa(e,t){return!e&&!t||Boolean(e)===Boolean(t)&&_n(e.dateSpan,t.dateSpan)}function Ta(e,t){for(var n,o,i={},a=0,s=t.pluginHooks.datePointTransforms;a<s.length;a++){var l=s[a];r(i,l(e,t))}return r(i,(n=e,{date:(o=t.dateEnv).toDate(n.range.start),dateStr:o.formatIso(n.range.start,{omitTime:n.allDay}),allDay:n.allDay})),i}var xa=function(e){function t(t){var n=e.call(this,t)||this;n.handlePointerDown=function(e){var t=n.dragging,r=e.origEvent.target;t.setIgnoreMove(!n.component.isValidDateDownEl(r))},n.handleDragEnd=function(e){var t=n.component;if(!n.dragging.pointer.wasTouchScroll){var o=n.hitDragging,i=o.initialHit,a=o.finalHit;if(i&&a&&wa(i,a)){var s=t.context,l=r(r({},Ta(i.dateSpan,s)),{dayEl:i.dayEl,jsEvent:e.origEvent,view:s.viewApi||s.calendarApi.view});s.emitter.trigger("dateClick",l)}}},n.dragging=new ba(t.el),n.dragging.autoScroller.isEnabled=!1;var o=n.hitDragging=new Ra(n.dragging,ai(t));return o.emitter.on("pointerdown",n.handlePointerDown),o.emitter.on("dragend",n.handleDragEnd),n}return n(t,e),t.prototype.destroy=function(){this.dragging.destroy()},t}(ii),Ma=function(e){function t(t){var n=e.call(this,t)||this;n.dragSelection=null,n.handlePointerDown=function(e){var t=n,r=t.component,o=t.dragging,i=r.context.options.selectable&&r.isValidDateDownEl(e.origEvent.target);o.setIgnoreMove(!i),o.delay=e.isTouch?function(e){var t=r.context.options,n=t.selectLongPressDelay;return null==n&&(n=t.longPressDelay),n}():null},n.handleDragStart=function(e){n.component.context.calendarApi.unselect(e)},n.handleHitUpdate=function(e,t){var o=n.component.context,i=null,a=!1;e&&((i=function(e,t,n){var o=e.dateSpan,i=t.dateSpan,a=[o.range.start,o.range.end,i.range.start,i.range.end];a.sort(fe);for(var s={},l=0,u=n;l<u.length;l++){var c=(0,u[l])(e,t);if(!1===c)return null;c&&r(s,c)}return s.range={start:a[0],end:a[3]},s.allDay=o.allDay,s}(n.hitDragging.initialHit,e,o.pluginHooks.dateSelectionTransformers))&&n.component.isDateSelectionValid(i)||(a=!0,i=null)),i?o.dispatch({type:"SELECT_DATES",selection:i}):t||o.dispatch({type:"UNSELECT_DATES"}),a?ne():re(),t||(n.dragSelection=i)},n.handlePointerUp=function(e){n.dragSelection&&(On(n.dragSelection,e,n.component.context),n.dragSelection=null)};var o=t.component.context.options,i=n.dragging=new ba(t.el);i.touchScrollAllowed=!1,i.minDistance=o.selectMinDistance||0,i.autoScroller.isEnabled=o.dragScroll;var a=n.hitDragging=new Ra(n.dragging,ai(t));return a.emitter.on("pointerdown",n.handlePointerDown),a.emitter.on("dragstart",n.handleDragStart),a.emitter.on("hitupdate",n.handleHitUpdate),a.emitter.on("pointerup",n.handlePointerUp),n}return n(t,e),t.prototype.destroy=function(){this.dragging.destroy()},t}(ii),ka=function(e){function t(n){var o=e.call(this,n)||this;o.subjectEl=null,o.subjectSeg=null,o.isDragging=!1,o.eventRange=null,o.relevantEvents=null,o.receivingContext=null,o.validMutation=null,o.mutatedRelevantEvents=null,o.handlePointerDown=function(e){var t=e.origEvent.target,n=o,r=n.component,i=n.dragging,a=i.mirror,s=r.context.options,l=r.context;o.subjectEl=e.subjectEl;var u=o.subjectSeg=yn(e.subjectEl),c=(o.eventRange=u.eventRange).instance.instanceId;o.relevantEvents=zt(l.getCurrentData().eventStore,c),i.minDistance=e.isTouch?0:s.eventDragMinDistance,i.delay=e.isTouch&&c!==r.props.eventSelection?function(e){var t=r.context.options,n=t.eventLongPressDelay;return null==n&&(n=t.longPressDelay),n}():null,s.fixedMirrorParent?a.parentNode=s.fixedMirrorParent:a.parentNode=V(t,".fc"),a.revertDuration=s.dragRevertDuration;var d=r.isValidSegDownEl(t)&&!V(t,".fc-event-resizer");i.setIgnoreMove(!d),o.isDragging=d&&e.subjectEl.classList.contains("fc-event-draggable")},o.handleDragStart=function(e){var t=o.component.context,n=o.eventRange,r=n.instance.instanceId;e.isTouch?r!==o.component.props.eventSelection&&t.dispatch({type:"SELECT_EVENT",eventInstanceId:r}):t.dispatch({type:"UNSELECT_EVENT"}),o.isDragging&&(t.calendarApi.unselect(e),t.emitter.trigger("eventDragStart",{el:o.subjectEl,event:new Yn(t,n.def,n.instance),jsEvent:e.origEvent,view:t.viewApi}))},o.handleHitUpdate=function(e,t){if(o.isDragging){var n=o.relevantEvents,r=o.hitDragging.initialHit,i=o.component.context,a=null,s=null,l=null,u=!1,c={affectedEvents:n,mutatedEvents:{defs:{},instances:{}},isEvent:!0};if(e){var d=e.component,p=(a=d.context).options;i===a||p.editable&&p.droppable?(s=function(e,t,n){var r=e.dateSpan,o=t.dateSpan,i=r.range.start,a=o.range.start,s={};r.allDay!==o.allDay&&(s.allDay=o.allDay,s.hasEnd=t.component.context.options.allDayMaintainDuration,o.allDay&&(i=we(i)));var l=sn(i,a,e.component.context.dateEnv,e.component===t.component?e.component.largeUnit:null);l.milliseconds&&(s.allDay=!1);for(var u={datesDelta:l,standardProps:s},c=0,d=n;c<d.length;c++)(0,d[c])(u,e,t);return u}(r,e,a.getCurrentData().pluginHooks.eventDragMutationMassagers))&&(l=Ln(n,a.getCurrentData().eventUiBases,s,a),c.mutatedEvents=l,d.isInteractionValid(c)||(u=!0,s=null,l=null,c.mutatedEvents={defs:{},instances:{}})):a=null}o.displayDrag(a,c),u?ne():re(),t||(i===a&&wa(r,e)&&(s=null),o.dragging.setMirrorNeedsRevert(!s),o.dragging.setMirrorIsVisible(!e||!document.querySelector(".fc-event-mirror")),o.receivingContext=a,o.validMutation=s,o.mutatedRelevantEvents=l)}},o.handlePointerUp=function(){o.isDragging||o.cleanup()},o.handleDragEnd=function(e){if(o.isDragging){var t=o.component.context,n=t.viewApi,i=o,a=i.receivingContext,s=i.validMutation,l=o.eventRange.def,u=o.eventRange.instance,c=new Yn(t,l,u),d=o.relevantEvents,p=o.mutatedRelevantEvents,f=o.hitDragging.finalHit;if(o.clearDrag(),t.emitter.trigger("eventDragStop",{el:o.subjectEl,event:c,jsEvent:e.origEvent,view:n}),s){if(a===t){var h=new Yn(t,p.defs[l.defId],u?p.instances[u.instanceId]:null);t.dispatch({type:"MERGE_EVENTS",eventStore:p});for(var g={oldEvent:c,event:h,relatedEvents:Xn(p,t,u),revert:function(){t.dispatch({type:"MERGE_EVENTS",eventStore:d})}},v={},m=0,y=t.getCurrentData().pluginHooks.eventDropTransformers;m<y.length;m++){var S=y[m];r(v,S(s,t))}t.emitter.trigger("eventDrop",r(r(r({},g),v),{el:e.subjectEl,delta:s.datesDelta,jsEvent:e.origEvent,view:n})),t.emitter.trigger("eventChange",g)}else if(a){var E={event:c,relatedEvents:Xn(d,t,u),revert:function(){t.dispatch({type:"MERGE_EVENTS",eventStore:d})}};t.emitter.trigger("eventLeave",r(r({},E),{draggedEl:e.subjectEl,view:n})),t.dispatch({type:"REMOVE_EVENTS",eventStore:d}),t.emitter.trigger("eventRemove",E);var C=p.defs[l.defId],b=p.instances[u.instanceId],D=new Yn(a,C,b);a.dispatch({type:"MERGE_EVENTS",eventStore:p});var R={event:D,relatedEvents:Xn(p,a,b),revert:function(){a.dispatch({type:"REMOVE_EVENTS",eventStore:p})}};a.emitter.trigger("eventAdd",R),e.isTouch&&a.dispatch({type:"SELECT_EVENT",eventInstanceId:u.instanceId}),a.emitter.trigger("drop",r(r({},Ta(f.dateSpan,a)),{draggedEl:e.subjectEl,jsEvent:e.origEvent,view:f.component.context.viewApi})),a.emitter.trigger("eventReceive",r(r({},R),{draggedEl:e.subjectEl,view:f.component.context.viewApi}))}}else t.emitter.trigger("_noEventDrop")}o.cleanup()};var i=o.component.context.options,a=o.dragging=new ba(n.el);a.pointer.selector=t.SELECTOR,a.touchScrollAllowed=!1,a.autoScroller.isEnabled=i.dragScroll;var s=o.hitDragging=new Ra(o.dragging,si);return s.useSubjectCenter=n.useEventCenter,s.emitter.on("pointerdown",o.handlePointerDown),s.emitter.on("dragstart",o.handleDragStart),s.emitter.on("hitupdate",o.handleHitUpdate),s.emitter.on("pointerup",o.handlePointerUp),s.emitter.on("dragend",o.handleDragEnd),o}return n(t,e),t.prototype.destroy=function(){this.dragging.destroy()},t.prototype.displayDrag=function(e,t){var n=this.component.context,r=this.receivingContext;r&&r!==e&&(r===n?r.dispatch({type:"SET_EVENT_DRAG",state:{affectedEvents:t.affectedEvents,mutatedEvents:{defs:{},instances:{}},isEvent:!0}}):r.dispatch({type:"UNSET_EVENT_DRAG"})),e&&e.dispatch({type:"SET_EVENT_DRAG",state:t})},t.prototype.clearDrag=function(){var e=this.component.context,t=this.receivingContext;t&&t.dispatch({type:"UNSET_EVENT_DRAG"}),e!==t&&e.dispatch({type:"UNSET_EVENT_DRAG"})},t.prototype.cleanup=function(){this.subjectSeg=null,this.isDragging=!1,this.eventRange=null,this.relevantEvents=null,this.receivingContext=null,this.validMutation=null,this.mutatedRelevantEvents=null},t.SELECTOR=".fc-event-draggable, .fc-event-resizable",t}(ii),Pa=function(e){function t(t){var n=e.call(this,t)||this;n.draggingSegEl=null,n.draggingSeg=null,n.eventRange=null,n.relevantEvents=null,n.validMutation=null,n.mutatedRelevantEvents=null,n.handlePointerDown=function(e){var t=n.component,r=yn(n.querySegEl(e)),o=n.eventRange=r.eventRange;n.dragging.minDistance=t.context.options.eventDragMinDistance,n.dragging.setIgnoreMove(!n.component.isValidSegDownEl(e.origEvent.target)||e.isTouch&&n.component.props.eventSelection!==o.instance.instanceId)},n.handleDragStart=function(e){var t=n.component.context,r=n.eventRange;n.relevantEvents=zt(t.getCurrentData().eventStore,n.eventRange.instance.instanceId);var o=n.querySegEl(e);n.draggingSegEl=o,n.draggingSeg=yn(o),t.calendarApi.unselect(),t.emitter.trigger("eventResizeStart",{el:o,event:new Yn(t,r.def,r.instance),jsEvent:e.origEvent,view:t.viewApi})},n.handleHitUpdate=function(e,t,o){var i=n.component.context,a=n.relevantEvents,s=n.hitDragging.initialHit,l=n.eventRange.instance,u=null,c=null,d=!1,p={affectedEvents:a,mutatedEvents:{defs:{},instances:{}},isEvent:!0};e&&(u=function(e,t,n,o,i){for(var a=e.component.context.dateEnv,s=sn(e.dateSpan.range.start,t.dateSpan.range.start,a,e.component.largeUnit),l={},u=0,c=i;u<c.length;u++){var d=(0,c[u])(e,t);if(!1===d)return null;d&&r(l,d)}if(n){if(a.add(o.start,s)<o.end)return l.startDelta=s,l}else if(a.add(o.end,s)>o.start)return l.endDelta=s,l;return null}(s,e,o.subjectEl.classList.contains("fc-event-resizer-start"),l.range,i.pluginHooks.eventResizeJoinTransforms)),u&&(c=Ln(a,i.getCurrentData().eventUiBases,u,i),p.mutatedEvents=c,n.component.isInteractionValid(p)||(d=!0,u=null,c=null,p.mutatedEvents=null)),c?i.dispatch({type:"SET_EVENT_RESIZE",state:p}):i.dispatch({type:"UNSET_EVENT_RESIZE"}),d?ne():re(),t||(u&&wa(s,e)&&(u=null),n.validMutation=u,n.mutatedRelevantEvents=c)},n.handleDragEnd=function(e){var t=n.component.context,o=n.eventRange.def,i=n.eventRange.instance,a=new Yn(t,o,i),s=n.relevantEvents,l=n.mutatedRelevantEvents;if(t.emitter.trigger("eventResizeStop",{el:n.draggingSegEl,event:a,jsEvent:e.origEvent,view:t.viewApi}),n.validMutation){var u=new Yn(t,l.defs[o.defId],i?l.instances[i.instanceId]:null);t.dispatch({type:"MERGE_EVENTS",eventStore:l});var c={oldEvent:a,event:u,relatedEvents:Xn(l,t,i),revert:function(){t.dispatch({type:"MERGE_EVENTS",eventStore:s})}};t.emitter.trigger("eventResize",r(r({},c),{el:n.draggingSegEl,startDelta:n.validMutation.startDelta||Xe(0),endDelta:n.validMutation.endDelta||Xe(0),jsEvent:e.origEvent,view:t.viewApi})),t.emitter.trigger("eventChange",c)}else t.emitter.trigger("_noEventResize");n.draggingSeg=null,n.relevantEvents=null,n.validMutation=null};var o=t.component,i=n.dragging=new ba(t.el);i.pointer.selector=".fc-event-resizer",i.touchScrollAllowed=!1,i.autoScroller.isEnabled=o.context.options.dragScroll;var a=n.hitDragging=new Ra(n.dragging,ai(t));return a.emitter.on("pointerdown",n.handlePointerDown),a.emitter.on("dragstart",n.handleDragStart),a.emitter.on("hitupdate",n.handleHitUpdate),a.emitter.on("dragend",n.handleDragEnd),n}return n(t,e),t.prototype.destroy=function(){this.dragging.destroy()},t.prototype.querySegEl=function(e){return V(e.subjectEl,".fc-event")},t}(ii),Ia=function(){function e(e){var t=this;this.context=e,this.isRecentPointerDateSelect=!1,this.matchesCancel=!1,this.matchesEvent=!1,this.onSelect=function(e){e.jsEvent&&(t.isRecentPointerDateSelect=!0)},this.onDocumentPointerDown=function(e){var n=t.context.options.unselectCancel,r=e.origEvent.target;t.matchesCancel=!!V(r,n),t.matchesEvent=!!V(r,ka.SELECTOR)},this.onDocumentPointerUp=function(e){var n=t.context,r=t.documentPointer,o=n.getCurrentData();if(!r.wasTouchScroll){if(o.dateSelection&&!t.isRecentPointerDateSelect){var i=n.options.unselectAuto;!i||i&&t.matchesCancel||n.calendarApi.unselect(e)}o.eventSelection&&!t.matchesEvent&&n.dispatch({type:"UNSELECT_EVENT"})}t.isRecentPointerDateSelect=!1};var n=this.documentPointer=new ha(document);n.shouldIgnoreMove=!0,n.shouldWatchScroll=!1,n.emitter.on("pointerdown",this.onDocumentPointerDown),n.emitter.on("pointerup",this.onDocumentPointerUp),e.emitter.on("select",this.onSelect)}return e.prototype.destroy=function(){this.context.emitter.off("select",this.onSelect),this.documentPointer.destroy()},e}(),_a={fixedMirrorParent:Lt},Na={dateClick:Lt,eventDragStart:Lt,eventDragStop:Lt,eventDrop:Lt,eventResizeStart:Lt,eventResizeStop:Lt,eventResize:Lt,drop:Lt,eventReceive:Lt,eventLeave:Lt},Ha=function(){function e(e,t){var n=this;this.receivingContext=null,this.droppableEvent=null,this.suppliedDragMeta=null,this.dragMeta=null,this.handleDragStart=function(e){n.dragMeta=n.buildDragMeta(e.subjectEl)},this.handleHitUpdate=function(e,t,o){var i=n.hitDragging.dragging,a=null,s=null,l=!1,u={affectedEvents:{defs:{},instances:{}},mutatedEvents:{defs:{},instances:{}},isEvent:n.dragMeta.create};e&&(a=e.component.context,n.canDropElOnCalendar(o.subjectEl,a)&&(s=function(e,t,n){for(var o=r({},t.leftoverProps),i=0,a=n.pluginHooks.externalDefTransforms;i<a.length;i++){var s=a[i];r(o,s(e,t))}var l=en(o,n),u=nn(l.refined,l.extra,t.sourceId,e.allDay,n.options.forceEventDuration||Boolean(t.duration),n),c=e.range.start;e.allDay&&t.startTime&&(c=n.dateEnv.add(c,t.startTime));var d=t.duration?n.dateEnv.add(c,t.duration):An(e.allDay,c,n);return{def:u,instance:Ne(u.defId,{start:c,end:d})}}(e.dateSpan,n.dragMeta,a),u.mutatedEvents=Bt(s),(l=!oo(u,a))&&(u.mutatedEvents={defs:{},instances:{}},s=null))),n.displayDrag(a,u),i.setMirrorIsVisible(t||!s||!document.querySelector(".fc-event-mirror")),l?ne():re(),t||(i.setMirrorNeedsRevert(!s),n.receivingContext=a,n.droppableEvent=s)},this.handleDragEnd=function(e){var t=n,o=t.receivingContext,i=t.droppableEvent;if(n.clearDrag(),o&&i){var a=n.hitDragging.finalHit,s=a.component.context.viewApi,l=n.dragMeta;if(o.emitter.trigger("drop",r(r({},Ta(a.dateSpan,o)),{draggedEl:e.subjectEl,jsEvent:e.origEvent,view:s})),l.create){var u=Bt(i);o.dispatch({type:"MERGE_EVENTS",eventStore:u}),e.isTouch&&o.dispatch({type:"SELECT_EVENT",eventInstanceId:i.instance.instanceId}),o.emitter.trigger("eventReceive",{event:new Yn(o,i.def,i.instance),relatedEvents:[],revert:function(){o.dispatch({type:"REMOVE_EVENTS",eventStore:u})},draggedEl:e.subjectEl,view:s})}}n.receivingContext=null,n.droppableEvent=null};var o=this.hitDragging=new Ra(e,si);o.requireInitial=!1,o.emitter.on("dragstart",this.handleDragStart),o.emitter.on("hitupdate",this.handleHitUpdate),o.emitter.on("dragend",this.handleDragEnd),this.suppliedDragMeta=t}return e.prototype.buildDragMeta=function(e){return"object"==typeof this.suppliedDragMeta?di(this.suppliedDragMeta):"function"==typeof this.suppliedDragMeta?di(this.suppliedDragMeta(e)):di((t=function(e,t){var n=ui.dataAttrPrefix,r=(n?n+"-":"")+"event";return e.getAttribute("data-"+r)||""}(e))?JSON.parse(t):{create:!1});var t},e.prototype.displayDrag=function(e,t){var n=this.receivingContext;n&&n!==e&&n.dispatch({type:"UNSET_EVENT_DRAG"}),e&&e.dispatch({type:"SET_EVENT_DRAG",state:t})},e.prototype.clearDrag=function(){this.receivingContext&&this.receivingContext.dispatch({type:"UNSET_EVENT_DRAG"})},e.prototype.canDropElOnCalendar=function(e,t){var n=t.options.dropAccept;return"function"==typeof n?n.call(t.calendarApi,e):"string"!=typeof n||!n||Boolean(F(e,n))},e}();ui.dataAttrPrefix="";var Oa=function(){function e(e,t){var n=this;void 0===t&&(t={}),this.handlePointerDown=function(e){var t=n.dragging,r=n.settings,o=r.minDistance,i=r.longPressDelay;t.minDistance=null!=o?o:e.isTouch?0:Pt.eventDragMinDistance,t.delay=e.isTouch?null!=i?i:Pt.longPressDelay:0},this.handleDragStart=function(e){e.isTouch&&n.dragging.delay&&e.subjectEl.classList.contains("fc-event")&&n.dragging.mirror.getMirrorEl().classList.add("fc-event-selected")},this.settings=t;var r=this.dragging=new ba(e);r.touchScrollAllowed=!1,null!=t.itemSelector&&(r.pointer.selector=t.itemSelector),null!=t.appendTo&&(r.mirror.parentNode=t.appendTo),r.emitter.on("pointerdown",this.handlePointerDown),r.emitter.on("dragstart",this.handleDragStart),new Ha(r,t.eventData)}return e.prototype.destroy=function(){this.dragging.destroy()},e}(),Wa=function(e){function t(t){var n=e.call(this,t)||this;n.shouldIgnoreMove=!1,n.mirrorSelector="",n.currentMirrorEl=null,n.handlePointerDown=function(e){n.emitter.trigger("pointerdown",e),n.shouldIgnoreMove||n.emitter.trigger("dragstart",e)},n.handlePointerMove=function(e){n.shouldIgnoreMove||n.emitter.trigger("dragmove",e)},n.handlePointerUp=function(e){n.emitter.trigger("pointerup",e),n.shouldIgnoreMove||n.emitter.trigger("dragend",e)};var r=n.pointer=new ha(t);return r.emitter.on("pointerdown",n.handlePointerDown),r.emitter.on("pointermove",n.handlePointerMove),r.emitter.on("pointerup",n.handlePointerUp),n}return n(t,e),t.prototype.destroy=function(){this.pointer.destroy()},t.prototype.setIgnoreMove=function(e){this.shouldIgnoreMove=e},t.prototype.setMirrorIsVisible=function(e){if(e)this.currentMirrorEl&&(this.currentMirrorEl.style.visibility="",this.currentMirrorEl=null);else{var t=this.mirrorSelector?document.querySelector(this.mirrorSelector):null;t&&(this.currentMirrorEl=t,t.style.visibility="hidden")}},t}(li),Aa=function(){function e(e,t){var n=document;e===document||e instanceof Element?(n=e,t=t||{}):t=e||{};var r=this.dragging=new Wa(n);"string"==typeof t.itemSelector?r.pointer.selector=t.itemSelector:n===document&&(r.pointer.selector="[data-event]"),"string"==typeof t.mirrorSelector&&(r.mirrorSelector=t.mirrorSelector),new Ha(r,t.eventData)}return e.prototype.destroy=function(){this.dragging.destroy()},e}(),La=fo({componentInteractions:[xa,Ma,ka,Pa],calendarInteractions:[Ia],elementDraggingImpl:ba,optionRefiners:_a,listenerRefiners:Na}),Ua=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.headerElRef=Fr(),t}return n(t,e),t.prototype.renderSimpleLayout=function(e,t){var n=this.props,r=this.context,o=[],i=Zi(r.options);return e&&o.push({type:"header",key:"header",isSticky:i,chunk:{elRef:this.headerElRef,tableClassName:"fc-col-header",rowContent:e}}),o.push({type:"body",key:"body",liquid:!0,chunk:{content:t}}),zr(Ro,{viewSpec:r.viewSpec},function(e,t){return zr("div",{ref:e,className:["fc-daygrid"].concat(t).join(" ")},zr(Ki,{liquid:!n.isHeightAuto&&!n.forPrint,cols:[],sections:o}))})},t.prototype.renderHScrollLayout=function(e,t,n,r){var o=this.context.pluginHooks.scrollGridImpl;if(!o)throw new Error("No ScrollGrid implementation");var i=this.props,a=this.context,s=!i.forPrint&&Zi(a.options),l=!i.forPrint&&Xi(a.options),u=[];return e&&u.push({type:"header",key:"header",isSticky:s,chunks:[{key:"main",elRef:this.headerElRef,tableClassName:"fc-col-header",rowContent:e}]}),u.push({type:"body",key:"body",liquid:!0,chunks:[{key:"main",content:t}]}),l&&u.push({type:"footer",key:"footer",isSticky:!0,chunks:[{key:"main",content:Yi}]}),zr(Ro,{viewSpec:a.viewSpec},function(e,t){return zr("div",{ref:e,className:["fc-daygrid"].concat(t).join(" ")},zr(o,{liquid:!i.isHeightAuto&&!i.forPrint,colGroups:[{cols:[{span:n,minWidth:r}]}],sections:u}))})},t}(po);function Ba(e,t){for(var n=[],r=0;r<t;r+=1)n[r]=[];for(var o=0,i=e;o<i.length;o++){var a=i[o];n[a.row].push(a)}return n}function za(e,t){for(var n=[],r=0;r<t;r+=1)n[r]=[];for(var o=0,i=e;o<i.length;o++){var a=i[o];n[a.firstCol].push(a)}return n}function Va(e,t){var n=[];if(e){for(a=0;a<t;a+=1)n[a]={affectedInstances:e.affectedInstances,isEvent:e.isEvent,segs:[]};for(var r=0,o=e.segs;r<o.length;r++){var i=o[r];n[i.row].segs.push(i)}}else for(var a=0;a<t;a+=1)n[a]=null;return n}var Fa=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return n(t,e),t.prototype.render=function(){var e=this.props,t=this.context.options.navLinks?{"data-navlink":Dr(e.date),tabIndex:0}:{};return zr(na,{date:e.date,dateProfile:e.dateProfile,todayRange:e.todayRange,showDayNumber:e.showDayNumber,extraHookProps:e.extraHookProps,defaultContent:ja},function(n,o){return(o||e.forceDayTop)&&zr("div",{className:"fc-daygrid-day-top",ref:n},zr("a",r({className:"fc-daygrid-day-number"},t),o||zr(jr,null," ")))})},t}($r);function ja(e){return e.dayNumberText}var Ga=Mt({week:"narrow"}),qa=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.handleRootEl=function(e){t.rootEl=e,to(t.props.elRef,e)},t.handleMoreLinkClick=function(e){var n=t.props;if(n.onMoreClick){var r=n.segsByEachCol,o=r.filter(function(e){return n.segIsHidden[e.eventRange.instance.instanceId]});n.onMoreClick({date:n.date,allSegs:r,hiddenSegs:o,moreCnt:n.moreCnt,dayEl:t.rootEl,ev:e})}},t}return n(t,e),t.prototype.render=function(){var e=this,t=this.context,n=t.options,o=t.viewApi,i=this.props,a=i.date,s=i.dateProfile,l={num:i.moreCnt,text:i.buildMoreLinkText(i.moreCnt),view:o},u=n.navLinks?{"data-navlink":Dr(a,"week"),tabIndex:0}:{};return zr(oa,{date:a,dateProfile:s,todayRange:i.todayRange,showDayNumber:i.showDayNumber,extraHookProps:i.extraHookProps,elRef:this.handleRootEl},function(t,o,c,d){return zr("td",r({ref:t,className:["fc-daygrid-day"].concat(o,i.extraClassNames||[]).join(" ")},c,i.extraDataAttrs),zr("div",{className:"fc-daygrid-day-frame fc-scrollgrid-sync-inner",ref:i.innerElRef},i.showWeekNumber&&zr(la,{date:a,defaultFormat:Ga},function(e,t,n,o){return zr("a",r({ref:e,className:["fc-daygrid-week-number"].concat(t).join(" ")},u),o)}),!d&&zr(Fa,{date:a,dateProfile:s,showDayNumber:i.showDayNumber,forceDayTop:i.forceDayTop,todayRange:i.todayRange,extraHookProps:i.extraHookProps}),zr("div",{className:"fc-daygrid-day-events",ref:i.fgContentElRef,style:{paddingBottom:i.fgPaddingBottom}},i.fgContent,Boolean(i.moreCnt)&&zr("div",{className:"fc-daygrid-day-bottom",style:{marginTop:i.moreMarginTop}},zr(vo,{hookProps:l,classNames:n.moreLinkClassNames,content:n.moreLinkContent,defaultContent:Ya,didMount:n.moreLinkDidMount,willUnmount:n.moreLinkWillUnmount},function(t,n,r,o){return zr("a",{ref:t,className:["fc-daygrid-more-link"].concat(n).join(" "),onClick:e.handleMoreLinkClick},o)}))),zr("div",{className:"fc-daygrid-day-bg"},i.bgContent)))})},t}(po);function Ya(e){return e.text}var Za=Mt({hour:"numeric",minute:"2-digit",omitZeroMinute:!0,meridiem:"narrow"});function Xa(e){var t=e.eventRange.ui.display;return"list-item"===t||"auto"===t&&!e.eventRange.def.allDay&&e.firstCol===e.lastCol&&e.isStart&&e.isEnd}var Ka=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return n(t,e),t.prototype.render=function(){var e=this.props,t=this.context,n=t.options.eventTimeFormat||Za,o=Tn(e.seg,n,t,!0,e.defaultDisplayEventEnd);return zr(Ji,{seg:e.seg,timeText:o,defaultContent:Ja,isDragging:e.isDragging,isResizing:!1,isDateSelecting:!1,isSelected:e.isSelected,isPast:e.isPast,isFuture:e.isFuture,isToday:e.isToday},function(t,n,o,i){return zr("a",r({className:["fc-daygrid-event","fc-daygrid-dot-event"].concat(n).join(" "),ref:t},(a=e.seg.eventRange.def.url)?{href:a}:{}),i);var a})},t}($r);function Ja(e){return zr(jr,null,zr("div",{className:"fc-daygrid-event-dot",style:{borderColor:e.borderColor||e.backgroundColor}}),e.timeText&&zr("div",{className:"fc-event-time"},e.timeText),zr("div",{className:"fc-event-title"},e.event.title||zr(jr,null," ")))}var $a=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return n(t,e),t.prototype.render=function(){var e=this.props;return zr($i,r({},e,{extraClassNames:["fc-daygrid-event","fc-daygrid-block-event","fc-h-event"],defaultTimeFormat:Za,defaultDisplayEventEnd:e.defaultDisplayEventEnd,disableResizing:!e.seg.eventRange.def.allDay}))},t}($r);function Qa(e,t,n,o,i,a,s,l){for(var u=[],c=[],d={},p={},f={},h={},g={},v=0;v<s;v+=1)u.push([]),c.push(0);for(var m=0,y=t=Cn(t,l);m<y.length;m++)T(R=y[m],i[R.eventRange.instance.instanceId+":"+R.firstCol]||0);!0===n||!0===o?function(e,t,n,r){ts(c,d,u,!0,function(e){return e.bottom<=r})}(0,0,0,a):"number"==typeof n?function(e,t,n,r){ts(c,d,u,!1,function(e,t){return t<r})}(0,0,0,n):"number"==typeof o&&function(e,t,n,r){ts(c,d,u,!0,function(e,t){return t<r})}(0,0,0,o);for(var S=0;S<s;S+=1){for(var E=0,C=0,b=0,D=u[S];b<D.length;b++){var R,w=D[b];d[(R=w.seg).eventRange.instance.instanceId]||(p[R.eventRange.instance.instanceId]=w.top,R.firstCol===R.lastCol&&R.isStart&&R.isEnd?(f[R.eventRange.instance.instanceId]=w.top-E,C=0,E=w.bottom):C=w.bottom-E)}C&&(c[S]?h[S]=C:g[S]=C)}function T(e,t){if(!x(e,t,0))for(var n=e.firstCol;n<=e.lastCol;n+=1)for(var r=0,o=u[n];r<o.length;r++)if(x(e,t,o[r].bottom))return}function x(e,t,n){if(function(e,t,n){for(var r=e.firstCol;r<=e.lastCol;r+=1)for(var o=0,i=u[r];o<i.length;o++){var a=i[o];if(n<a.bottom&&n+t>a.top)return!1}return!0}(e,t,n)){for(var r=e.firstCol;r<=e.lastCol;r+=1){for(var o=u[r],i=0;i<o.length&&n>=o[i].top;)i+=1;o.splice(i,0,{seg:e,top:n,bottom:n+t})}return!0}return!1}for(var M in i)i[M]||(d[M.split(":")[0]]=!0);return{segsByFirstCol:u.map(es),segsByEachCol:u.map(function(t,n){var o=function(e){for(var t=[],n=0,r=e;n<r.length;n++){var o=r[n];t.push(o.seg)}return t}(t);return function(e,t,n){for(var o={start:t,end:ye(t,1)},i=[],a=0,s=e;a<s.length;a++){var l=s[a],u=l.eventRange,c=u.range,d=cn(c,o);d&&i.push(r(r({},l),{firstCol:n,lastCol:n,eventRange:{def:u.def,ui:r(r({},u.ui),{durationEditable:!1}),instance:u.instance,range:d},isStart:l.isStart&&d.start.valueOf()===c.start.valueOf(),isEnd:l.isEnd&&d.end.valueOf()===c.end.valueOf()}))}return i}(o,e[n].date,n)}),segIsHidden:d,segTops:p,segMarginTops:f,moreCnts:c,moreTops:h,paddingBottoms:g}}function es(e,t){for(var n=[],r=0,o=e;r<o.length;r++){var i=o[r];i.seg.firstCol===t&&n.push(i.seg)}return n}function ts(e,t,n,r,o){for(var i=e.length,a={},s=[],l=0;l<i;l+=1)s.push([]);for(l=0;l<i;l+=1)for(var u=0,c=0,d=n[l];c<d.length;c++){var p=d[c];o(p,u)?f(p):h(p,u,r),p.top!==p.bottom&&(u+=1)}function f(e){var t=e.seg,n=t.eventRange.instance.instanceId;if(!a[n]){a[n]=!0;for(var r=t.firstCol;r<=t.lastCol;r+=1)s[r].push(e)}}function h(n,r,o){var i=n.seg,a=i.eventRange.instance.instanceId;if(!t[a]){t[a]=!0;for(var l=i.firstCol;l<=i.lastCol;l+=1){e[l]+=1;var u=e[l];if(o&&1===u&&r>0)for(var c=r-1;s[l].length>c;)h(s[l].pop(),s[l].length,!1)}}}}var ns=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.cellElRefs=new Wi,t.frameElRefs=new Wi,t.fgElRefs=new Wi,t.segHarnessRefs=new Wi,t.rootElRef=Fr(),t.state={framePositions:null,maxContentHeight:null,segHeights:{}},t}return n(t,e),t.prototype.render=function(){var e=this,t=this.props,n=this.state,r=this.context,o=t.cells.length,i=za(t.businessHourSegs,o),a=za(t.bgEventSegs,o),s=za(this.getHighlightSegs(),o),l=za(this.getMirrorSegs(),o),u=Qa(t.cells,t.fgEventSegs,t.dayMaxEvents,t.dayMaxEventRows,n.segHeights,n.maxContentHeight,o,r.options.eventOrder),c=u.paddingBottoms,d=u.segsByFirstCol,p=u.segsByEachCol,f=u.segIsHidden,h=u.segTops,g=u.segMarginTops,v=u.moreCnts,m=u.moreTops,y=t.eventDrag&&t.eventDrag.affectedInstances||t.eventResize&&t.eventResize.affectedInstances||{};return zr("tr",{ref:this.rootElRef},t.renderIntro&&t.renderIntro(),t.cells.map(function(n,r){var o=e.renderFgSegs(d[r],f,h,g,y,t.todayRange),u=e.renderFgSegs(l[r],{},h,{},{},t.todayRange,Boolean(t.eventDrag),Boolean(t.eventResize),!1);return zr(qa,{key:n.key,elRef:e.cellElRefs.createRef(n.key),innerElRef:e.frameElRefs.createRef(n.key),dateProfile:t.dateProfile,date:n.date,showDayNumber:t.showDayNumbers,showWeekNumber:t.showWeekNumbers&&0===r,forceDayTop:t.showWeekNumbers,todayRange:t.todayRange,extraHookProps:n.extraHookProps,extraDataAttrs:n.extraDataAttrs,extraClassNames:n.extraClassNames,moreCnt:v[r],buildMoreLinkText:t.buildMoreLinkText,onMoreClick:t.onMoreClick,segIsHidden:f,moreMarginTop:m[r],segsByEachCol:p[r],fgPaddingBottom:c[r],fgContentElRef:e.fgElRefs.createRef(n.key),fgContent:zr(jr,null,zr(jr,null,o),zr(jr,null,u)),bgContent:zr(jr,null,e.renderFillSegs(s[r],"highlight"),e.renderFillSegs(i[r],"non-business"),e.renderFillSegs(a[r],"bg-event"))})}))},t.prototype.componentDidMount=function(){this.updateSizing(!0)},t.prototype.componentDidUpdate=function(e,t){var n=this.props;this.updateSizing(!Be(e,n))},t.prototype.getHighlightSegs=function(){var e=this.props;return e.eventDrag&&e.eventDrag.segs.length?e.eventDrag.segs:e.eventResize&&e.eventResize.segs.length?e.eventResize.segs:e.dateSelectionSegs},t.prototype.getMirrorSegs=function(){var e=this.props;return e.eventResize&&e.eventResize.segs.length?e.eventResize.segs:[]},t.prototype.renderFgSegs=function(e,t,n,o,i,a,s,l,u){var c=this.context,d=this.props.eventSelection,p=this.state.framePositions,f=1===this.props.cells.length,h=[];if(p)for(var g=0,v=e;g<v.length;g++){var m=v[g],y=m.eventRange.instance.instanceId,S=s||l||u,E=i[y],C=t[y]||E,b=t[y]||S||m.firstCol!==m.lastCol||!m.isStart||!m.isEnd,D=void 0,R=void 0,w=void 0,T=void 0;b?(R=n[y],c.isRtl?(T=0,w=p.lefts[m.lastCol]-p.lefts[m.firstCol]):(w=0,T=p.rights[m.firstCol]-p.rights[m.lastCol])):D=o[y],h.push(zr("div",{className:"fc-daygrid-event-harness"+(b?" fc-daygrid-event-harness-abs":""),key:y,ref:S?null:this.segHarnessRefs.createRef(y+":"+m.firstCol),style:{visibility:C?"hidden":"",marginTop:D||"",top:R||"",left:w||"",right:T||""}},Xa(m)?zr(Ka,r({seg:m,isDragging:s,isSelected:y===d,defaultDisplayEventEnd:f},xn(m,a))):zr($a,r({seg:m,isDragging:s,isResizing:l,isDateSelecting:u,isSelected:y===d,defaultDisplayEventEnd:f},xn(m,a)))))}return h},t.prototype.renderFillSegs=function(e,t){var n=this.context.isRtl,i=this.props.todayRange,a=this.state.framePositions,s=[];if(a)for(var l=0,u=e;l<u.length;l++){var c=u[l],d=n?{right:0,left:a.lefts[c.lastCol]-a.lefts[c.firstCol]}:{left:0,right:a.rights[c.firstCol]-a.rights[c.lastCol]};s.push(zr("div",{key:kn(c.eventRange),className:"fc-daygrid-bg-harness",style:d},"bg-event"===t?zr(aa,r({seg:c},xn(c,i))):ia(t)))}return zr.apply(void 0,o([jr,{}],s))},t.prototype.updateSizing=function(e){var t=this.props,n=this.frameElRefs;if(null!==t.clientWidth){if(e){var r=t.cells.map(function(e){return n.currentMap[e.key]});if(r.length){var o=this.rootElRef.current;this.setState({framePositions:new Or(o,r,!0,!1)})}}var i=!0===t.dayMaxEvents||!0===t.dayMaxEventRows;this.setState({segHeights:this.computeSegHeights(),maxContentHeight:i?this.computeMaxContentHeight():null})}},t.prototype.computeSegHeights=function(){return Ae(this.segHarnessRefs.currentMap,function(e){return e.getBoundingClientRect().height})},t.prototype.computeMaxContentHeight=function(){var e=this.props.cells[0].key,t=this.cellElRefs.currentMap[e],n=this.fgElRefs.currentMap[e];return t.getBoundingClientRect().bottom-n.getBoundingClientRect().top},t.prototype.getCellEls=function(){var e=this.cellElRefs.currentMap;return this.props.cells.map(function(t){return e[t.key]})},t}(po);ns.addStateEquality({segHeights:Be});var rs=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.repositioner=new Go(t.updateSize.bind(t)),t.handleRootEl=function(e){t.rootEl=e,t.props.elRef&&to(t.props.elRef,e)},t.handleDocumentMousedown=function(e){var n=t.props.onClose;n&&!t.rootEl.contains(e.target)&&n()},t.handleDocumentScroll=function(){t.repositioner.request(10)},t.handleCloseClick=function(){var e=t.props.onClose;e&&e()},t}return n(t,e),t.prototype.render=function(){var e=this.context.theme,t=this.props,n=["fc-popover",e.getClass("popover")].concat(t.extraClassNames||[]);return zr("div",r({className:n.join(" ")},t.extraAttrs,{ref:this.handleRootEl}),zr("div",{className:"fc-popover-header "+e.getClass("popoverHeader")},zr("span",{className:"fc-popover-title"},t.title),zr("span",{className:"fc-popover-close "+e.getIconClass("close"),onClick:this.handleCloseClick})),zr("div",{className:"fc-popover-body "+e.getClass("popoverContent")},t.children))},t.prototype.componentDidMount=function(){document.addEventListener("mousedown",this.handleDocumentMousedown),document.addEventListener("scroll",this.handleDocumentScroll),this.updateSize()},t.prototype.componentWillUnmount=function(){document.removeEventListener("mousedown",this.handleDocumentMousedown),document.removeEventListener("scroll",this.handleDocumentScroll)},t.prototype.updateSize=function(){var e=this.props,t=e.alignmentEl,n=e.topAlignmentEl,r=this.rootEl;if(r){var o,i=r.getBoundingClientRect(),a=t.getBoundingClientRect(),s=n?n.getBoundingClientRect().top:a.top;s=Math.min(s,window.innerHeight-i.height-10),s=Math.max(s,10),o=this.context.isRtl?a.right-i.width:a.left,o=Math.min(o,window.innerWidth-i.width-10),Y(r,{top:s,left:o=Math.max(o,10)})}},t}($r),os=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.handlePopoverEl=function(e){t.popoverEl=e,e?t.context.registerInteractiveComponent(t,{el:e,useEventCenter:!1}):t.context.unregisterInteractiveComponent(t)},t}return n(t,e),t.prototype.render=function(){var e=this.context,t=e.options,n=e.dateEnv,o=this.props,i=o.date,a=o.hiddenInstances,s=o.todayRange,l=o.dateProfile,u=o.selectedInstanceId,c=n.format(i,t.dayPopoverFormat);return zr(oa,{date:i,dateProfile:l,todayRange:s,elRef:this.handlePopoverEl},function(e,t,n){return zr(rs,{elRef:e,title:c,extraClassNames:["fc-more-popover"].concat(t),extraAttrs:n,onClose:o.onCloseClick,alignmentEl:o.alignmentEl,topAlignmentEl:o.topAlignmentEl},zr(na,{date:i,dateProfile:l,todayRange:s},function(e,t){return t&&zr("div",{className:"fc-more-popover-misc",ref:e},t)}),o.segs.map(function(e){var t=e.eventRange.instance.instanceId;return zr("div",{className:"fc-daygrid-event-harness",key:t,style:{visibility:a[t]?"hidden":""}},Xa(e)?zr(Ka,r({seg:e,isDragging:!1,isSelected:t===u,defaultDisplayEventEnd:!1},xn(e,s))):zr($a,r({seg:e,isDragging:!1,isResizing:!1,isDateSelecting:!1,isSelected:t===u,defaultDisplayEventEnd:!1},xn(e,s))))}))})},t.prototype.queryHit=function(e,t,n,r){var o=this.props.date;return e<n&&t<r?{component:this,dateSpan:{allDay:!0,range:{start:o,end:ye(o,1)}},dayEl:this.popoverEl,rect:{left:0,top:0,right:n,bottom:r},layer:1}:null},t.prototype.isPopover=function(){return!0},t}(po),is=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.splitBusinessHourSegs=dt(Ba),t.splitBgEventSegs=dt(Ba),t.splitFgEventSegs=dt(Ba),t.splitDateSelectionSegs=dt(Ba),t.splitEventDrag=dt(Va),t.splitEventResize=dt(Va),t.buildBuildMoreLinkText=dt(as),t.rowRefs=new Wi,t.state={morePopoverState:null},t.handleRootEl=function(e){t.rootEl=e,to(t.props.elRef,e)},t.handleMoreLinkClick=function(e){var n=t.context,o=n.dateEnv,i=n.options.moreLinkClick;function a(e){var t=e.eventRange,r=t.def,i=t.instance,a=t.range;return{event:new Yn(n,r,i),start:o.toDate(a.start),end:o.toDate(a.end),isStart:e.isStart,isEnd:e.isEnd}}"function"==typeof i&&(i=i({date:o.toDate(e.date),allDay:!0,allSegs:e.allSegs.map(a),hiddenSegs:e.hiddenSegs.map(a),jsEvent:e.ev,view:n.viewApi})),i&&"popover"!==i?"string"==typeof i&&n.calendarApi.zoomTo(e.date,i):t.setState({morePopoverState:r(r({},e),{currentFgEventSegs:t.props.fgEventSegs})})},t.handleMorePopoverClose=function(){t.setState({morePopoverState:null})},t}return n(t,e),t.prototype.render=function(){var e=this,t=this.props,n=t.dateProfile,r=t.dayMaxEventRows,o=t.dayMaxEvents,i=t.expandRows,a=this.state.morePopoverState,s=t.cells.length,l=this.splitBusinessHourSegs(t.businessHourSegs,s),u=this.splitBgEventSegs(t.bgEventSegs,s),c=this.splitFgEventSegs(t.fgEventSegs,s),d=this.splitDateSelectionSegs(t.dateSelectionSegs,s),p=this.splitEventDrag(t.eventDrag,s),f=this.splitEventResize(t.eventResize,s),h=this.buildBuildMoreLinkText(this.context.options.moreLinkText),g=!0===o||!0===r;return g&&!i&&(g=!1,r=null,o=null),zr("div",{className:["fc-daygrid-body",g?"fc-daygrid-body-balanced":"fc-daygrid-body-unbalanced",i?"":"fc-daygrid-body-natural"].join(" "),ref:this.handleRootEl,style:{width:t.clientWidth,minWidth:t.tableMinWidth}},zr(Ti,{unit:"day"},function(g,v){return zr(jr,null,zr("table",{className:"fc-scrollgrid-sync-table",style:{width:t.clientWidth,minWidth:t.tableMinWidth,height:i?t.clientHeight:""}},t.colGroupNode,zr("tbody",null,t.cells.map(function(i,a){return zr(ns,{ref:e.rowRefs.createRef(a),key:i.length?i[0].date.toISOString():a,showDayNumbers:s>1,showWeekNumbers:t.showWeekNumbers,todayRange:v,dateProfile:n,cells:i,renderIntro:t.renderRowIntro,businessHourSegs:l[a],eventSelection:t.eventSelection,bgEventSegs:u[a].filter(ss),fgEventSegs:c[a],dateSelectionSegs:d[a],eventDrag:p[a],eventResize:f[a],dayMaxEvents:o,dayMaxEventRows:r,clientWidth:t.clientWidth,clientHeight:t.clientHeight,buildMoreLinkText:h,onMoreClick:e.handleMoreLinkClick})}))),!t.forPrint&&a&&a.currentFgEventSegs===t.fgEventSegs&&zr(os,{date:a.date,dateProfile:n,segs:a.allSegs,alignmentEl:a.dayEl,topAlignmentEl:1===s?t.headerAlignElRef.current:null,onCloseClick:e.handleMorePopoverClose,selectedInstanceId:t.eventSelection,hiddenInstances:(t.eventDrag?t.eventDrag.affectedInstances:null)||(t.eventResize?t.eventResize.affectedInstances:null)||{},todayRange:v}))}))},t.prototype.prepareHits=function(){this.rowPositions=new Or(this.rootEl,this.rowRefs.collect().map(function(e){return e.getCellEls()[0]}),!1,!0),this.colPositions=new Or(this.rootEl,this.rowRefs.currentMap[0].getCellEls(),!0,!1)},t.prototype.positionToHit=function(e,t){var n=this.colPositions,r=this.rowPositions,o=n.leftToIndex(e),i=r.topToIndex(t);return null!=i&&null!=o?{row:i,col:o,dateSpan:{range:this.getCellRange(i,o),allDay:!0},dayEl:this.getCellEl(i,o),relativeRect:{left:n.lefts[o],right:n.rights[o],top:r.tops[i],bottom:r.bottoms[i]}}:null},t.prototype.getCellEl=function(e,t){return this.rowRefs.currentMap[e].getCellEls()[t]},t.prototype.getCellRange=function(e,t){var n=this.props.cells[e][t].date;return{start:n,end:ye(n,1)}},t}(po);function as(e){return"function"==typeof e?e:function(t){return"+"+t+" "+e}}function ss(e){return e.eventRange.def.allDay}var ls=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.forceDayIfListItem=!0,t}return n(t,e),t.prototype.sliceRange=function(e,t){return t.sliceRange(e)},t}(_i),us=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.slicer=new ls,t.tableRef=Fr(),t.handleRootEl=function(e){e?t.context.registerInteractiveComponent(t,{el:e}):t.context.unregisterInteractiveComponent(t)},t}return n(t,e),t.prototype.render=function(){var e=this.props,t=this.context;return zr(is,r({ref:this.tableRef,elRef:this.handleRootEl},this.slicer.sliceProps(e,e.dateProfile,e.nextDayThreshold,t,e.dayTableModel),{dateProfile:e.dateProfile,cells:e.dayTableModel.cells,colGroupNode:e.colGroupNode,tableMinWidth:e.tableMinWidth,renderRowIntro:e.renderRowIntro,dayMaxEvents:e.dayMaxEvents,dayMaxEventRows:e.dayMaxEventRows,showWeekNumbers:e.showWeekNumbers,expandRows:e.expandRows,headerAlignElRef:e.headerAlignElRef,clientWidth:e.clientWidth,clientHeight:e.clientHeight,forPrint:e.forPrint}))},t.prototype.prepareHits=function(){this.tableRef.current.prepareHits()},t.prototype.queryHit=function(e,t){var n=this.tableRef.current.positionToHit(e,t);return n?{component:this,dateSpan:n.dateSpan,dayEl:n.dayEl,rect:{left:n.relativeRect.left,right:n.relativeRect.right,top:n.relativeRect.top,bottom:n.relativeRect.bottom},layer:0}:null},t}(po),cs=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.buildDayTableModel=dt(ds),t.headerRef=Fr(),t.tableRef=Fr(),t}return n(t,e),t.prototype.render=function(){var e=this,t=this.context,n=t.options,r=t.dateProfileGenerator,o=this.props,i=this.buildDayTableModel(o.dateProfile,r),a=n.dayHeaders&&zr(Mi,{ref:this.headerRef,dateProfile:o.dateProfile,dates:i.headerDates,datesRepDistinctDays:1===i.rowCnt}),s=function(t){return zr(us,{ref:e.tableRef,dateProfile:o.dateProfile,dayTableModel:i,businessHours:o.businessHours,dateSelection:o.dateSelection,eventStore:o.eventStore,eventUiBases:o.eventUiBases,eventSelection:o.eventSelection,eventDrag:o.eventDrag,eventResize:o.eventResize,nextDayThreshold:n.nextDayThreshold,colGroupNode:t.tableColGroupNode,tableMinWidth:t.tableMinWidth,dayMaxEvents:n.dayMaxEvents,dayMaxEventRows:n.dayMaxEventRows,showWeekNumbers:n.weekNumbers,expandRows:!o.isHeightAuto,headerAlignElRef:e.headerElRef,clientWidth:t.clientWidth,clientHeight:t.clientHeight,forPrint:o.forPrint})};return n.dayMinWidth?this.renderHScrollLayout(a,s,i.colCnt,n.dayMinWidth):this.renderSimpleLayout(a,s)},t}(Ua);function ds(e,t){var n=new Pi(e.renderRange,t);return new Ii(n,/year|month|week/.test(e.currentRangeUnit))}var ps=fo({initialView:"dayGridMonth",optionRefiners:{moreLinkClick:Lt,moreLinkClassNames:Lt,moreLinkContent:Lt,moreLinkDidMount:Lt,moreLinkWillUnmount:Lt},views:{dayGrid:{component:cs,dateProfileGeneratorClass:function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return n(t,e),t.prototype.buildRenderRange=function(t,n,r){var o,i=this.props.dateEnv,a=e.prototype.buildRenderRange.call(this,t,n,r),s=a.start,l=a.end;return/^(year|month)$/.test(n)&&(s=i.startOfWeek(s),(o=i.startOfWeek(l)).valueOf()!==l.valueOf()&&(l=me(o,1))),this.props.monthMode&&this.props.fixedWeekCount&&(l=me(l,6-Math.ceil(Ee(s,l)))),{start:s,end:l}},t}(ko)},dayGridDay:{type:"dayGrid",duration:{days:1}},dayGridWeek:{type:"dayGrid",duration:{weeks:1}},dayGridMonth:{type:"dayGrid",duration:{months:1},monthMode:!0,fixedWeekCount:!0}}}),fs=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return n(t,e),t.prototype.getKeyInfo=function(){return{allDay:{},timed:{}}},t.prototype.getKeysForDateSpan=function(e){return e.allDay?["allDay"]:["timed"]},t.prototype.getKeysForEventDef=function(e){return e.allDay?vn(e)?["timed","allDay"]:["allDay"]:["timed"]},t}(yr),hs=Mt({hour:"numeric",minute:"2-digit",omitZeroMinute:!0,meridiem:"short"});function gs(e){var t=["fc-timegrid-slot","fc-timegrid-slot-label",e.isLabeled?"fc-scrollgrid-shrink":"fc-timegrid-slot-minor"];return zr(Xr.Consumer,null,function(n){if(!e.isLabeled)return zr("td",{className:t.join(" "),"data-time":e.isoTimeStr});var r=n.dateEnv,o=n.options,i=n.viewApi,a=null==o.slotLabelFormat?hs:Array.isArray(o.slotLabelFormat)?Mt(o.slotLabelFormat[0]):Mt(o.slotLabelFormat),s={level:0,time:e.time,date:r.toDate(e.date),view:i,text:r.format(e.date,a)};return zr(vo,{hookProps:s,classNames:o.slotLabelClassNames,content:o.slotLabelContent,defaultContent:vs,didMount:o.slotLabelDidMount,willUnmount:o.slotLabelWillUnmount},function(n,r,o,i){return zr("td",{ref:n,className:t.concat(r).join(" "),"data-time":e.isoTimeStr},zr("div",{className:"fc-timegrid-slot-label-frame fc-scrollgrid-shrink-frame"},zr("div",{className:"fc-timegrid-slot-label-cushion fc-scrollgrid-shrink-cushion",ref:o},i)))})})}function vs(e){return e.text}var ms=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return n(t,e),t.prototype.render=function(){return this.props.slatMetas.map(function(e){return zr("tr",{key:e.key},zr(gs,r({},e)))})},t}($r),ys=Mt({week:"short"}),Ss=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.allDaySplitter=new fs,t.headerElRef=Fr(),t.rootElRef=Fr(),t.scrollerElRef=Fr(),t.state={slatCoords:null},t.handleScrollTopRequest=function(e){var n=t.scrollerElRef.current;n&&(n.scrollTop=e)},t.renderHeadAxis=function(e){void 0===e&&(e="");var n=t.context.options,o=t.props.dateProfile.renderRange,i=Ce(o.start,o.end),a=n.navLinks&&1===i?{"data-navlink":Dr(o.start,"week"),tabIndex:0}:{};return n.weekNumbers?zr(la,{date:o.start,defaultFormat:ys},function(t,n,o,i){return zr("th",{ref:t,className:["fc-timegrid-axis","fc-scrollgrid-shrink"].concat(n).join(" ")},zr("div",{className:"fc-timegrid-axis-frame fc-scrollgrid-shrink-frame fc-timegrid-axis-frame-liquid",style:{height:e}},zr("a",r({ref:o,className:"fc-timegrid-axis-cushion fc-scrollgrid-shrink-cushion fc-scrollgrid-sync-inner"},a),i)))}):zr("th",{className:"fc-timegrid-axis"},zr("div",{className:"fc-timegrid-axis-frame",style:{height:e}}))},t.renderTableRowAxis=function(e){var n=t.context,r=n.options,o=n.viewApi,i={text:r.allDayText,view:o};return zr(vo,{hookProps:i,classNames:r.allDayClassNames,content:r.allDayContent,defaultContent:Es,didMount:r.allDayDidMount,willUnmount:r.allDayWillUnmount},function(t,n,r,o){return zr("td",{ref:t,className:["fc-timegrid-axis","fc-scrollgrid-shrink"].concat(n).join(" ")},zr("div",{className:"fc-timegrid-axis-frame fc-scrollgrid-shrink-frame"+(null==e?" fc-timegrid-axis-frame-liquid":""),style:{height:e}},zr("span",{className:"fc-timegrid-axis-cushion fc-scrollgrid-shrink-cushion fc-scrollgrid-sync-inner",ref:r},o)))})},t.handleSlatCoords=function(e){t.setState({slatCoords:e})},t}return n(t,e),t.prototype.renderSimpleLayout=function(e,t,n){var r=this.context,o=this.props,i=[],a=Zi(r.options);return e&&i.push({type:"header",key:"header",isSticky:a,chunk:{elRef:this.headerElRef,tableClassName:"fc-col-header",rowContent:e}}),t&&(i.push({type:"body",key:"all-day",chunk:{content:t}}),i.push({type:"body",key:"all-day-divider",outerContent:zr("tr",{className:"fc-scrollgrid-section"},zr("td",{className:"fc-timegrid-divider "+r.theme.getClass("tableCellShaded")}))})),i.push({type:"body",key:"body",liquid:!0,expandRows:Boolean(r.options.expandRows),chunk:{scrollerElRef:this.scrollerElRef,content:n}}),zr(Ro,{viewSpec:r.viewSpec,elRef:this.rootElRef},function(e,t){return zr("div",{className:["fc-timegrid"].concat(t).join(" "),ref:e},zr(Ki,{liquid:!o.isHeightAuto&&!o.forPrint,cols:[{width:"shrink"}],sections:i}))})},t.prototype.renderHScrollLayout=function(e,t,n,r,o,i,a){var s=this,l=this.context.pluginHooks.scrollGridImpl;if(!l)throw new Error("No ScrollGrid implementation");var u=this.context,c=this.props,d=!c.forPrint&&Zi(u.options),p=!c.forPrint&&Xi(u.options),f=[];e&&f.push({type:"header",key:"header",isSticky:d,syncRowHeights:!0,chunks:[{key:"axis",rowContent:function(e){return zr("tr",null,s.renderHeadAxis(e.rowSyncHeights[0]))}},{key:"cols",elRef:this.headerElRef,tableClassName:"fc-col-header",rowContent:e}]}),t&&(f.push({type:"body",key:"all-day",syncRowHeights:!0,chunks:[{key:"axis",rowContent:function(e){return zr("tr",null,s.renderTableRowAxis(e.rowSyncHeights[0]))}},{key:"cols",content:t}]}),f.push({key:"all-day-divider",type:"body",outerContent:zr("tr",{className:"fc-scrollgrid-section"},zr("td",{colSpan:2,className:"fc-timegrid-divider "+u.theme.getClass("tableCellShaded")}))}));var h=u.options.nowIndicator;return f.push({type:"body",key:"body",liquid:!0,expandRows:Boolean(u.options.expandRows),chunks:[{key:"axis",content:function(e){return zr("div",{className:"fc-timegrid-axis-chunk"},zr("table",{style:{height:e.expandRows?e.clientHeight:""}},e.tableColGroupNode,zr("tbody",null,zr(ms,{slatMetas:i}))),zr("div",{className:"fc-timegrid-now-indicator-container"},zr(Ti,{unit:h?"minute":"day"},function(e){var t=h&&a&&a.safeComputeTop(e);return"number"==typeof t?zr(ea,{isAxis:!0,date:e},function(e,n,r,o){return zr("div",{ref:e,className:["fc-timegrid-now-indicator-arrow"].concat(n).join(" "),style:{top:t}},o)}):null})))}},{key:"cols",scrollerElRef:this.scrollerElRef,content:n}]}),p&&f.push({key:"footer",type:"footer",isSticky:!0,chunks:[{key:"axis",content:Yi},{key:"cols",content:Yi}]}),zr(Ro,{viewSpec:u.viewSpec,elRef:this.rootElRef},function(e,t){return zr("div",{className:["fc-timegrid"].concat(t).join(" "),ref:e},zr(l,{liquid:!c.isHeightAuto&&!c.forPrint,colGroups:[{width:"shrink",cols:[{width:"shrink"}]},{cols:[{span:r,minWidth:o}]}],sections:f}))})},t.prototype.getAllDayMaxEventProps=function(){var e=this.context.options,t=e.dayMaxEvents,n=e.dayMaxEventRows;return!0!==t&&!0!==n||(t=void 0,n=5),{dayMaxEvents:t,dayMaxEventRows:n}},t}(po);function Es(e){return e.text}var Cs=function(){function e(e,t,n){this.positions=e,this.dateProfile=t,this.slatMetas=n}return e.prototype.safeComputeTop=function(e){var t=this.dateProfile;if(hn(t.currentRange,e)){var n=we(e),r=e.valueOf()-n.valueOf();if(r>=rt(t.slotMinTime)&&r<rt(t.slotMaxTime))return this.computeTimeTop(Xe(r))}return null},e.prototype.computeDateTop=function(e,t){return t||(t=we(e)),this.computeTimeTop(Xe(e.valueOf()-t.valueOf()))},e.prototype.computeTimeTop=function(e){var t,n,r=this.positions,o=this.dateProfile,i=this.slatMetas,a=r.els.length,s=i[1].date.valueOf()-i[0].date.valueOf(),l=(e.milliseconds-rt(o.slotMinTime))/s;return l=Math.max(0,l),l=Math.min(a,l),t=Math.floor(l),n=l-(t=Math.min(t,a-1)),r.tops[t]+r.getHeight(t)*n},e}(),bs=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return n(t,e),t.prototype.render=function(){var e=this.props,t=this.context,n=t.options,o=e.slatElRefs;return zr("tbody",null,e.slatMetas.map(function(i,a){var s={time:i.time,date:t.dateEnv.toDate(i.date),view:t.viewApi},l=["fc-timegrid-slot","fc-timegrid-slot-lane",i.isLabeled?"":"fc-timegrid-slot-minor"];return zr("tr",{key:i.key,ref:o.createRef(i.key)},e.axis&&zr(gs,r({},i)),zr(vo,{hookProps:s,classNames:n.slotLaneClassNames,content:n.slotLaneContent,didMount:n.slotLaneDidMount,willUnmount:n.slotLaneWillUnmount},function(e,t,n,r){return zr("td",{ref:e,className:l.concat(t).join(" "),"data-time":i.isoTimeStr},r)}))}))},t}($r),Ds=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.rootElRef=Fr(),t.slatElRefs=new Wi,t}return n(t,e),t.prototype.render=function(){var e=this.props,t=this.context;return zr("div",{className:"fc-timegrid-slots",ref:this.rootElRef},zr("table",{className:t.theme.getClass("table"),style:{minWidth:e.tableMinWidth,width:e.clientWidth,height:e.minHeight}},e.tableColGroupNode,zr(bs,{slatElRefs:this.slatElRefs,axis:e.axis,slatMetas:e.slatMetas})))},t.prototype.componentDidMount=function(){this.updateSizing()},t.prototype.componentDidUpdate=function(){this.updateSizing()},t.prototype.componentWillUnmount=function(){this.props.onCoords&&this.props.onCoords(null)},t.prototype.updateSizing=function(){var e,t=this.props;t.onCoords&&null!==t.clientWidth&&this.rootElRef.current.offsetHeight&&t.onCoords(new Cs(new Or(this.rootElRef.current,(e=this.slatElRefs.currentMap,t.slatMetas.map(function(t){return e[t.key]})),!1,!0),this.props.dateProfile,t.slatMetas))},t}($r);function Rs(e,t){var n,r=[];for(n=0;n<t;n+=1)r.push([]);if(e)for(n=0;n<e.length;n+=1)r[e[n].col].push(e[n]);return r}function ws(e,t){var n=[];if(e){for(a=0;a<t;a+=1)n[a]={affectedInstances:e.affectedInstances,isEvent:e.isEvent,segs:[]};for(var r=0,o=e.segs;r<o.length;r++){var i=o[r];n[i.col].segs.push(i)}}else for(var a=0;a<t;a+=1)n[a]=null;return n}function Ts(e,t,n,r){for(var o=0,i=e;o<i.length;o++){var a=i[o];a.top=n.computeDateTop(a.start,t),a.bottom=Math.max(a.top+(r||0),n.computeDateTop(a.end,t))}}function xs(e,t,n){void 0===n&&(n=[]);for(var r=0;r<t.length;r+=1)o=e,i=t[r],o.bottom>i.top&&o.top<i.bottom&&n.push(t[r]);var o,i;return n}function Ms(e){var t,n,r=e.forwardSegs,o=0;if(null==e.forwardPressure){for(t=0;t<r.length;t+=1)Ms(n=r[t]),o=Math.max(o,1+n.forwardPressure);e.forwardPressure=o}}function ks(e,t,n,r){var o,i=e.forwardSegs;if(null==e.forwardCoord)for(i.length?(function(e,t){var n=i.map(Ps),r=[{field:"forwardPressure",order:-1},{field:"backwardCoord",order:1}].concat(t);n.sort(function(e,t){return ue(e,t,r)}),n.map(function(e){return e._seg})}(0,r),ks(i[0],t+1,n,r),e.forwardCoord=i[0].backwardCoord):e.forwardCoord=1,e.backwardCoord=e.forwardCoord-(e.forwardCoord-n)/(t+1),o=0;o<i.length;o+=1)ks(i[o],0,e.forwardCoord,r)}function Ps(e){var t=bn(e);return t.forwardPressure=e.forwardPressure,t.backwardCoord=e.backwardCoord,t}var Is=Mt({hour:"numeric",minute:"2-digit",meridiem:!1}),_s=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return n(t,e),t.prototype.render=function(){var e=["fc-timegrid-event","fc-v-event"];return this.props.isCondensed&&e.push("fc-timegrid-event-condensed"),zr($i,r({},this.props,{defaultTimeFormat:Is,extraClassNames:e}))},t}($r),Ns=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return n(t,e),t.prototype.render=function(){var e=this.props;return zr(na,{date:e.date,dateProfile:e.dateProfile,todayRange:e.todayRange,extraHookProps:e.extraHookProps},function(e,t){return t&&zr("div",{className:"fc-timegrid-col-misc",ref:e},t)})},t}($r);ui.timeGridEventCondensedHeight=30;var Hs=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return n(t,e),t.prototype.render=function(){var e=this,t=this.props,n=this.context.options.selectMirror,o=t.eventDrag&&t.eventDrag.segs||t.eventResize&&t.eventResize.segs||n&&t.dateSelectionSegs||[],i=t.eventDrag&&t.eventDrag.affectedInstances||t.eventResize&&t.eventResize.affectedInstances||{};return zr(oa,{elRef:t.elRef,date:t.date,dateProfile:t.dateProfile,todayRange:t.todayRange,extraHookProps:t.extraHookProps},function(a,s,l){return zr("td",r({ref:a,className:["fc-timegrid-col"].concat(s,t.extraClassNames||[]).join(" ")},l,t.extraDataAttrs),zr("div",{className:"fc-timegrid-col-frame"},zr("div",{className:"fc-timegrid-col-bg"},e.renderFillSegs(t.businessHourSegs,"non-business"),e.renderFillSegs(t.bgEventSegs,"bg-event"),e.renderFillSegs(t.dateSelectionSegs,"highlight")),zr("div",{className:"fc-timegrid-col-events"},e.renderFgSegs(t.fgEventSegs,i)),zr("div",{className:"fc-timegrid-col-events"},e.renderFgSegs(o,{},Boolean(t.eventDrag),Boolean(t.eventResize),Boolean(n))),zr("div",{className:"fc-timegrid-now-indicator-container"},e.renderNowIndicator(t.nowIndicatorSegs)),zr(Ns,{date:t.date,dateProfile:t.dateProfile,todayRange:t.todayRange,extraHookProps:t.extraHookProps})))})},t.prototype.renderFgSegs=function(e,t,n,r,o){var i=this.props;return i.forPrint?this.renderPrintFgSegs(e):i.slatCoords?this.renderPositionedFgSegs(e,t,n,r,o):null},t.prototype.renderPrintFgSegs=function(e){var t=this.props;return(e=Cn(e,this.context.options.eventOrder)).map(function(e){return zr("div",{className:"fc-timegrid-event-harness",key:e.eventRange.instance.instanceId},zr(_s,r({seg:e,isDragging:!1,isResizing:!1,isDateSelecting:!1,isSelected:!1,isCondensed:!1},xn(e,t.todayRange,t.nowDate))))})},t.prototype.renderPositionedFgSegs=function(e,t,n,o,i){var a=this,s=this.context,l=this.props;return(e=function(e,t,n,r,o){return Ts(e,t,n,r),function(e,t){for(var n=0,r=e;n<r.length;n++)(c=r[n]).level=null,c.forwardCoord=null,c.backwardCoord=null,c.forwardPressure=null;var o,i=function(e){var t,n,r,o=[];for(t=0;t<e.length;t+=1){for(n=e[t],r=0;r<o.length&&xs(n,o[r]).length;r+=1);n.level=r,(o[r]||(o[r]=[])).push(n)}return o}(e=Cn(e,t));if(function(e){var t,n,r,o,i;for(t=0;t<e.length;t+=1)for(n=e[t],r=0;r<n.length;r+=1)for((o=n[r]).forwardSegs=[],i=t+1;i<e.length;i+=1)xs(o,e[i],o.forwardSegs)}(i),o=i[0]){for(var a=0,s=o;a<s.length;a++)Ms(c=s[a]);for(var l=0,u=o;l<u.length;l++){var c;ks(c=u[l],0,0,t)}}return e}(e,o)}(e,l.date,l.slatCoords,s.options.eventMinHeight,s.options.eventOrder)).map(function(e){var s=e.eventRange.instance.instanceId,u=n||o||i?r({left:0,right:0},a.computeSegTopBottomCss(e)):a.computeFgSegPositionCss(e);return zr("div",{className:"fc-timegrid-event-harness"+(e.level>0?" fc-timegrid-event-harness-inset":""),key:s,style:r({visibility:t[s]?"hidden":""},u)},zr(_s,r({seg:e,isDragging:n,isResizing:o,isDateSelecting:i,isSelected:s===l.eventSelection,isCondensed:e.bottom-e.top<ui.timeGridEventCondensedHeight},xn(e,l.todayRange,l.nowDate))))})},t.prototype.renderFillSegs=function(e,t){var n=this,o=this.context,i=this.props;if(!i.slatCoords)return null;Ts(e,i.date,i.slatCoords,o.options.eventMinHeight);var a=e.map(function(e){return zr("div",{key:kn(e.eventRange),className:"fc-timegrid-bg-harness",style:n.computeSegTopBottomCss(e)},"bg-event"===t?zr(aa,r({seg:e},xn(e,i.todayRange,i.nowDate))):ia(t))});return zr(jr,null,a)},t.prototype.renderNowIndicator=function(e){var t=this.props,n=t.slatCoords,r=t.date;return n?e.map(function(e,t){return zr(ea,{isAxis:!1,date:r,key:t},function(t,o,i,a){return zr("div",{ref:t,className:["fc-timegrid-now-indicator-line"].concat(o).join(" "),style:{top:n.computeDateTop(e.start,r)}},a)})}):null},t.prototype.computeFgSegPositionCss=function(e){var t,n,o=this.context,i=o.isRtl,a=o.options.slotEventOverlap,s=e.backwardCoord,l=e.forwardCoord;a&&(l=Math.min(1,s+2*(l-s))),i?(t=1-l,n=s):(t=s,n=1-l);var u={zIndex:e.level+1,left:100*t+"%",right:100*n+"%"};return a&&e.forwardPressure&&(u[i?"marginLeft":"marginRight"]=20),r(r({},u),this.computeSegTopBottomCss(e))},t.prototype.computeSegTopBottomCss=function(e){return{top:e.top,bottom:-e.bottom}},t}($r),Os=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.splitFgEventSegs=dt(Rs),t.splitBgEventSegs=dt(Rs),t.splitBusinessHourSegs=dt(Rs),t.splitNowIndicatorSegs=dt(Rs),t.splitDateSelectionSegs=dt(Rs),t.splitEventDrag=dt(ws),t.splitEventResize=dt(ws),t.rootElRef=Fr(),t.cellElRefs=new Wi,t}return n(t,e),t.prototype.render=function(){var e=this,t=this.props,n=this.context.options.nowIndicator&&t.slatCoords&&t.slatCoords.safeComputeTop(t.nowDate),r=t.cells.length,o=this.splitFgEventSegs(t.fgEventSegs,r),i=this.splitBgEventSegs(t.bgEventSegs,r),a=this.splitBusinessHourSegs(t.businessHourSegs,r),s=this.splitNowIndicatorSegs(t.nowIndicatorSegs,r),l=this.splitDateSelectionSegs(t.dateSelectionSegs,r),u=this.splitEventDrag(t.eventDrag,r),c=this.splitEventResize(t.eventResize,r);return zr("div",{className:"fc-timegrid-cols",ref:this.rootElRef},zr("table",{style:{minWidth:t.tableMinWidth,width:t.clientWidth}},t.tableColGroupNode,zr("tbody",null,zr("tr",null,t.axis&&zr("td",{className:"fc-timegrid-col fc-timegrid-axis"},zr("div",{className:"fc-timegrid-col-frame"},zr("div",{className:"fc-timegrid-now-indicator-container"},"number"==typeof n&&zr(ea,{isAxis:!0,date:t.nowDate},function(e,t,r,o){return zr("div",{ref:e,className:["fc-timegrid-now-indicator-arrow"].concat(t).join(" "),style:{top:n}},o)})))),t.cells.map(function(n,r){return zr(Hs,{key:n.key,elRef:e.cellElRefs.createRef(n.key),dateProfile:t.dateProfile,date:n.date,nowDate:t.nowDate,todayRange:t.todayRange,extraHookProps:n.extraHookProps,extraDataAttrs:n.extraDataAttrs,extraClassNames:n.extraClassNames,fgEventSegs:o[r],bgEventSegs:i[r],businessHourSegs:a[r],nowIndicatorSegs:s[r],dateSelectionSegs:l[r],eventDrag:u[r],eventResize:c[r],slatCoords:t.slatCoords,eventSelection:t.eventSelection,forPrint:t.forPrint})})))))},t.prototype.componentDidMount=function(){this.updateCoords()},t.prototype.componentDidUpdate=function(){this.updateCoords()},t.prototype.updateCoords=function(){var e,t=this.props;t.onColCoords&&null!==t.clientWidth&&t.onColCoords(new Or(this.rootElRef.current,(e=this.cellElRefs.currentMap,t.cells.map(function(t){return e[t.key]})),!0,!1))},t}($r),Ws=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.processSlotOptions=dt(As),t.state={slatCoords:null},t.handleScrollRequest=function(e){var n=t.props.onScrollTopRequest,r=t.state.slatCoords;if(n&&r){if(e.time){var o=r.computeTimeTop(e.time);(o=Math.ceil(o))&&(o+=1),n(o)}return!0}return!1},t.handleColCoords=function(e){t.colCoords=e},t.handleSlatCoords=function(e){t.setState({slatCoords:e}),t.props.onSlatCoords&&t.props.onSlatCoords(e)},t}return n(t,e),t.prototype.render=function(){var e=this.props,t=this.state;return zr("div",{className:"fc-timegrid-body",ref:e.rootElRef,style:{width:e.clientWidth,minWidth:e.tableMinWidth}},zr(Ds,{axis:e.axis,dateProfile:e.dateProfile,slatMetas:e.slatMetas,clientWidth:e.clientWidth,minHeight:e.expandRows?e.clientHeight:"",tableMinWidth:e.tableMinWidth,tableColGroupNode:e.axis?e.tableColGroupNode:null,onCoords:this.handleSlatCoords}),zr(Os,{cells:e.cells,axis:e.axis,dateProfile:e.dateProfile,businessHourSegs:e.businessHourSegs,bgEventSegs:e.bgEventSegs,fgEventSegs:e.fgEventSegs,dateSelectionSegs:e.dateSelectionSegs,eventSelection:e.eventSelection,eventDrag:e.eventDrag,eventResize:e.eventResize,todayRange:e.todayRange,nowDate:e.nowDate,nowIndicatorSegs:e.nowIndicatorSegs,clientWidth:e.clientWidth,tableMinWidth:e.tableMinWidth,tableColGroupNode:e.tableColGroupNode,slatCoords:t.slatCoords,onColCoords:this.handleColCoords,forPrint:e.forPrint}))},t.prototype.componentDidMount=function(){this.scrollResponder=this.context.createScrollResponder(this.handleScrollRequest)},t.prototype.componentDidUpdate=function(e){this.scrollResponder.update(e.dateProfile!==this.props.dateProfile)},t.prototype.componentWillUnmount=function(){this.scrollResponder.detach()},t.prototype.positionToHit=function(e,t){var n=this.context,r=n.dateEnv,o=n.options,i=this.colCoords,a=this.props.dateProfile,s=this.state.slatCoords,l=this.processSlotOptions(this.props.slotDuration,o.snapDuration),u=l.snapDuration,c=l.snapsPerSlot,d=i.leftToIndex(e),p=s.positions.topToIndex(t);if(null!=d&&null!=p){var f=s.positions.tops[p],h=s.positions.getHeight(p),g=(t-f)/h,v=p*c+Math.floor(g*c),m=this.props.cells[d].date,y=$e(a.slotMinTime,Qe(u,v)),S=r.add(m,y);return{col:d,dateSpan:{range:{start:S,end:r.add(S,u)},allDay:!1},dayEl:i.els[d],relativeRect:{left:i.lefts[d],right:i.rights[d],top:f,bottom:f+h}}}return null},t}($r);function As(e,t){var n=t||e,r=ot(e,n);return null===r&&(n=e,r=1),{snapDuration:n,snapsPerSlot:r}}var Ls=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return n(t,e),t.prototype.sliceRange=function(e,t){for(var n=[],r=0;r<t.length;r+=1){var o=cn(e,t[r]);o&&n.push({start:o.start,end:o.end,isStart:o.start.valueOf()===e.start.valueOf(),isEnd:o.end.valueOf()===e.end.valueOf(),col:r})}return n},t}(_i),Us=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.buildDayRanges=dt(Bs),t.slicer=new Ls,t.timeColsRef=Fr(),t.handleRootEl=function(e){e?t.context.registerInteractiveComponent(t,{el:e}):t.context.unregisterInteractiveComponent(t)},t}return n(t,e),t.prototype.render=function(){var e=this,t=this.props,n=this.context,o=t.dateProfile,i=t.dayTableModel,a=n.options.nowIndicator,s=this.buildDayRanges(i,o,n.dateEnv);return zr(Ti,{unit:a?"minute":"day"},function(l,u){return zr(Ws,r({ref:e.timeColsRef,rootElRef:e.handleRootEl},e.slicer.sliceProps(t,o,null,n,s),{forPrint:t.forPrint,axis:t.axis,dateProfile:o,slatMetas:t.slatMetas,slotDuration:t.slotDuration,cells:i.cells[0],tableColGroupNode:t.tableColGroupNode,tableMinWidth:t.tableMinWidth,clientWidth:t.clientWidth,clientHeight:t.clientHeight,expandRows:t.expandRows,nowDate:l,nowIndicatorSegs:a&&e.slicer.sliceNowDate(l,n,s),todayRange:u,onScrollTopRequest:t.onScrollTopRequest,onSlatCoords:t.onSlatCoords}))})},t.prototype.queryHit=function(e,t){var n=this.timeColsRef.current.positionToHit(e,t);return n?{component:this,dateSpan:n.dateSpan,dayEl:n.dayEl,rect:{left:n.relativeRect.left,right:n.relativeRect.right,top:n.relativeRect.top,bottom:n.relativeRect.bottom},layer:0}:null},t}(po);function Bs(e,t,n){for(var r=[],o=0,i=e.headerDates;o<i.length;o++){var a=i[o];r.push({start:n.add(a,t.slotMinTime),end:n.add(a,t.slotMaxTime)})}return r}var zs=[{hours:1},{minutes:30},{minutes:15},{seconds:30},{seconds:15}];function Vs(e,t,n,r,o){for(var i=new Date(0),a=e,s=Xe(0),l=n||function(e){var t,n,r;for(t=zs.length-1;t>=0;t-=1)if(null!==(r=ot(n=Xe(zs[t]),e))&&r>1)return n;return e}(r),u=[];rt(a)<rt(t);){var c=o.add(i,a),d=null!==ot(s,l);u.push({date:c,time:a,key:c.toISOString(),isoTimeStr:st(c),isLabeled:d}),a=$e(a,r),s=$e(s,r)}return u}var Fs=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.buildTimeColsModel=dt(js),t.buildSlatMetas=dt(Vs),t}return n(t,e),t.prototype.render=function(){var e=this,t=this.context,n=t.options,o=t.dateEnv,i=t.dateProfileGenerator,a=this.props,s=a.dateProfile,l=this.buildTimeColsModel(s,i),u=this.allDaySplitter.splitProps(a),c=this.buildSlatMetas(s.slotMinTime,s.slotMaxTime,n.slotLabelInterval,n.slotDuration,o),d=n.dayMinWidth,p=!d,f=d,h=n.dayHeaders&&zr(Mi,{dates:l.headerDates,dateProfile:s,datesRepDistinctDays:!0,renderIntro:p?this.renderHeadAxis:null}),g=!1!==n.allDaySlot&&function(t){return zr(us,r({},u.allDay,{dateProfile:s,dayTableModel:l,nextDayThreshold:n.nextDayThreshold,tableMinWidth:t.tableMinWidth,colGroupNode:t.tableColGroupNode,renderRowIntro:p?e.renderTableRowAxis:null,showWeekNumbers:!1,expandRows:!1,headerAlignElRef:e.headerElRef,clientWidth:t.clientWidth,clientHeight:t.clientHeight,forPrint:a.forPrint},e.getAllDayMaxEventProps()))},v=function(t){return zr(Us,r({},u.timed,{dayTableModel:l,dateProfile:s,axis:p,slotDuration:n.slotDuration,slatMetas:c,forPrint:a.forPrint,tableColGroupNode:t.tableColGroupNode,tableMinWidth:t.tableMinWidth,clientWidth:t.clientWidth,clientHeight:t.clientHeight,onSlatCoords:e.handleSlatCoords,expandRows:t.expandRows,onScrollTopRequest:e.handleScrollTopRequest}))};return f?this.renderHScrollLayout(h,g,v,l.colCnt,d,c,this.state.slatCoords):this.renderSimpleLayout(h,g,v)},t}(Ss);function js(e,t){var n=new Pi(e.renderRange,t);return new Ii(n,!1)}var Gs=fo({initialView:"timeGridWeek",optionRefiners:{allDaySlot:Boolean},views:{timeGrid:{component:Fs,usesMinMaxTime:!0,allDaySlot:!0,slotDuration:"00:30:00",slotEventOverlap:!0},timeGridDay:{type:"timeGrid",duration:{days:1}},timeGridWeek:{type:"timeGrid",duration:{weeks:1}}}}),qs=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return n(t,e),t.prototype.render=function(){var e=this.props,t=e.dayDate,n=e.todayRange,o=this.context,i=o.theme,a=o.dateEnv,s=o.options,l=o.viewApi,u=Er(t,n),c=s.listDayFormat?a.format(t,s.listDayFormat):"",d=s.listDaySideFormat?a.format(t,s.listDaySideFormat):"",p=s.navLinks?Dr(t):null,f=r({date:a.toDate(t),view:l,text:c,sideText:d,navLinkData:p},u),h=["fc-list-day"].concat(Cr(u,i));return zr(vo,{hookProps:f,classNames:s.dayHeaderClassNames,content:s.dayHeaderContent,defaultContent:Ys,didMount:s.dayHeaderDidMount,willUnmount:s.dayHeaderWillUnmount},function(e,n,r,o){return zr("tr",{ref:e,className:h.concat(n).join(" "),"data-date":at(t)},zr("th",{colSpan:3},zr("div",{className:"fc-list-day-cushion "+i.getClass("tableCellShaded"),ref:r},o)))})},t}($r);function Ys(e){var t=e.navLinkData?{"data-navlink":e.navLinkData,tabIndex:0}:{};return zr(jr,null,e.text&&zr("a",r({className:"fc-list-day-text"},t),e.text),e.sideText&&zr("a",r({className:"fc-list-day-side-text"},t),e.sideText))}var Zs=Mt({hour:"numeric",minute:"2-digit",meridiem:"short"}),Xs=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return n(t,e),t.prototype.render=function(){var e=this.props,t=this.context,n=e.seg,r=t.options.eventTimeFormat||Zs;return zr(Ji,{seg:n,timeText:"",disableDragging:!0,disableResizing:!0,defaultContent:Ks,isPast:e.isPast,isFuture:e.isFuture,isToday:e.isToday,isSelected:e.isSelected,isDragging:e.isDragging,isResizing:e.isResizing,isDateSelecting:e.isDateSelecting},function(e,o,i,a,s){return zr("tr",{className:["fc-list-event",s.event.url?"fc-event-forced-url":""].concat(o).join(" "),ref:e},function(e,t,n){var r=n.options;if(!1!==r.displayEventTime){var o=e.eventRange.def,i=e.eventRange.instance,a=!1,s=void 0;if(o.allDay?a=!0:an(e.eventRange.range)?e.isStart?s=Tn(e,t,n,null,null,i.range.start,e.end):e.isEnd?s=Tn(e,t,n,null,null,e.start,i.range.end):a=!0:s=Tn(e,t,n),a){var l={text:n.options.allDayText,view:n.viewApi};return zr(vo,{hookProps:l,classNames:r.allDayClassNames,content:r.allDayContent,defaultContent:Js,didMount:r.allDayDidMount,willUnmount:r.allDayWillUnmount},function(e,t,n,r){return zr("td",{className:["fc-list-event-time"].concat(t).join(" "),ref:e},r)})}return zr("td",{className:"fc-list-event-time"},s)}return null}(n,r,t),zr("td",{className:"fc-list-event-graphic"},zr("span",{className:"fc-list-event-dot",style:{borderColor:s.borderColor||s.backgroundColor}})),zr("td",{className:"fc-list-event-title",ref:i},a))})},t}($r);function Ks(e){var t=e.event,n=t.url;return zr("a",r({},n?{href:n}:{}),t.title)}function Js(e){return e.text}var $s=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.computeDateVars=dt(el),t.eventStoreToSegs=dt(t._eventStoreToSegs),t.setRootEl=function(e){e?t.context.registerInteractiveComponent(t,{el:e}):t.context.unregisterInteractiveComponent(t)},t}return n(t,e),t.prototype.render=function(){var e=this,t=this.props,n=this.context,r=["fc-list",n.theme.getClass("table"),!1!==n.options.stickyHeaderDates?"fc-list-sticky":""],o=this.computeDateVars(t.dateProfile),i=o.dayDates,a=o.dayRanges,s=this.eventStoreToSegs(t.eventStore,t.eventUiBases,a);return zr(Ro,{viewSpec:n.viewSpec,elRef:this.setRootEl},function(n,o){return zr("div",{ref:n,className:r.concat(o).join(" ")},zr(Oi,{liquid:!t.isHeightAuto,overflowX:t.isHeightAuto?"visible":"hidden",overflowY:t.isHeightAuto?"visible":"auto"},s.length>0?e.renderSegList(s,i):e.renderEmptyMessage()))})},t.prototype.renderEmptyMessage=function(){var e=this.context,t=e.options,n=e.viewApi,r={text:t.noEventsText,view:n};return zr(vo,{hookProps:r,classNames:t.noEventsClassNames,content:t.noEventsContent,defaultContent:Qs,didMount:t.noEventsDidMount,willUnmount:t.noEventsWillUnmount},function(e,t,n,r){return zr("div",{className:["fc-list-empty"].concat(t).join(" "),ref:e},zr("div",{className:"fc-list-empty-cushion",ref:n},r))})},t.prototype.renderSegList=function(e,t){var n=this.context,o=n.theme,i=n.options,a=function(e){var t,n,r=[];for(t=0;t<e.length;t+=1)(r[(n=e[t]).dayIndex]||(r[n.dayIndex]=[])).push(n);return r}(e);return zr(Ti,{unit:"day"},function(e,n){for(var s=[],l=0;l<a.length;l+=1){var u=a[l];if(u){var c=t[l].toISOString();s.push(zr(qs,{key:c,dayDate:t[l],todayRange:n}));for(var d=0,p=u=Cn(u,i.eventOrder);d<p.length;d++){var f=p[d];s.push(zr(Xs,r({key:c+":"+f.eventRange.instance.instanceId,seg:f,isDragging:!1,isResizing:!1,isDateSelecting:!1,isSelected:!1},xn(f,n,e))))}}}return zr("table",{className:"fc-list-table "+o.getClass("table")},zr("tbody",null,s))})},t.prototype._eventStoreToSegs=function(e,t,n){return this.eventRangesToSegs(gn(e,t,this.props.dateProfile.activeRange,this.context.options.nextDayThreshold).fg,n)},t.prototype.eventRangesToSegs=function(e,t){for(var n=[],r=0,o=e;r<o.length;r++){var i=o[r];n.push.apply(n,this.eventRangeToSegs(i,t))}return n},t.prototype.eventRangeToSegs=function(e,t){var n,r,o,i=this.context.dateEnv,a=this.context.options.nextDayThreshold,s=e.range,l=e.def.allDay,u=[];for(n=0;n<t.length;n+=1)if((r=cn(s,t[n]))&&(o={component:this,eventRange:e,start:r.start,end:r.end,isStart:e.isStart&&r.start.valueOf()===s.start.valueOf(),isEnd:e.isEnd&&r.end.valueOf()===s.end.valueOf(),dayIndex:n},u.push(o),!o.isEnd&&!l&&n+1<t.length&&s.end<i.add(t[n+1].start,a))){o.end=s.end,o.isEnd=!0;break}return u},t}(po);function Qs(e){return e.text}function el(e){for(var t=we(e.renderRange.start),n=e.renderRange.end,r=[],o=[];t<n;)r.push(t),o.push({start:t,end:ye(t,1)}),t=ye(t,1);return{dayDates:r,dayRanges:o}}function tl(e){return!1===e?null:Mt(e)}var nl=fo({optionRefiners:{listDayFormat:tl,listDaySideFormat:tl,noEventsClassNames:Lt,noEventsContent:Lt,noEventsDidMount:Lt,noEventsWillUnmount:Lt},views:{list:{component:$s,buttonTextKey:"list",listDayFormat:{month:"long",day:"numeric",year:"numeric"}},listDay:{type:"list",duration:{days:1},listDayFormat:{weekday:"long"}},listWeek:{type:"list",duration:{weeks:1},listDayFormat:{weekday:"long"},listDaySideFormat:{month:"long",day:"numeric",year:"numeric"}},listMonth:{type:"list",duration:{month:1},listDaySideFormat:{weekday:"long"}},listYear:{type:"list",duration:{year:1},listDaySideFormat:{weekday:"long"}}}}),rl=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return n(t,e),t}(Ur);rl.prototype.classes={root:"fc-theme-bootstrap",table:"table-bordered",tableCellShaded:"table-active",buttonGroup:"btn-group",button:"btn btn-primary",buttonActive:"active",popover:"popover",popoverHeader:"popover-header",popoverContent:"popover-body"},rl.prototype.baseIconClass="fa",rl.prototype.iconClasses={close:"fa-times",prev:"fa-chevron-left",next:"fa-chevron-right",prevYear:"fa-angle-double-left",nextYear:"fa-angle-double-right"},rl.prototype.rtlIconClasses={prev:"fa-chevron-right",next:"fa-chevron-left",prevYear:"fa-angle-double-right",nextYear:"fa-angle-double-left"},rl.prototype.iconOverrideOption="bootstrapFontAwesome",rl.prototype.iconOverrideCustomButtonOption="bootstrapFontAwesome",rl.prototype.iconOverridePrefix="fa-";var ol,il=fo({themeClasses:{bootstrap:rl}}),al=fo({eventSourceDefs:[{parseMeta:function(e){var t=e.googleCalendarId;return!t&&e.url&&(t=function(e){var t;return/^[^/]+@([^/.]+\.)*(google|googlemail|gmail)\.com$/.test(e)?e:(t=/^https:\/\/www.googleapis.com\/calendar\/v3\/calendars\/([^/]*)/.exec(e))||(t=/^https?:\/\/www.google.com\/calendar\/feeds\/([^/]*)/.exec(e))?decodeURIComponent(t[1]):null}(e.url)),t?{googleCalendarId:t,googleCalendarApiKey:e.googleCalendarApiKey,googleCalendarApiBase:e.googleCalendarApiBase,extraParams:e.extraParams}:null},fetch:function(e,t,n){var o=e.context,i=o.dateEnv,a=o.options,s=e.eventSource.meta,l=s.googleCalendarApiKey||a.googleCalendarApiKey;if(l){var u=function(e){var t=e.googleCalendarApiBase;return t||(t="https://www.googleapis.com/calendar/v3/calendars"),t+"/"+encodeURIComponent(e.googleCalendarId)+"/events"}(s),c=s.extraParams,d="function"==typeof c?c():c,p=function(e,t,n,o){var i,a,s;return o.canComputeOffset?(a=o.formatIso(e.start),s=o.formatIso(e.end)):(a=ye(e.start,-1).toISOString(),s=ye(e.end,1).toISOString()),i=r(r({},n||{}),{key:t,timeMin:a,timeMax:s,singleEvents:!0,maxResults:9999}),"local"!==o.timeZone&&(i.timeZone=o.timeZone),i}(e.range,l,d,i);Uo("GET",u,p,function(e,r){var o,i;e.error?n({message:"Google Calendar API: "+e.error.message,errors:e.error.errors,xhr:r}):t({rawEvents:(o=e.items,i=p.timeZone,o.map(function(e){return function(e,t){var n=e.htmlLink||null;return n&&t&&(n=function(e,t){return n.replace(/(\?.*?)?(#|$)/,function(e,n,r){return(n?n+"&":"?")+t+r})}(0,"ctz="+t)),{id:e.id,title:e.summary,start:e.start.dateTime||e.start.date,end:e.end.dateTime||e.end.date,url:n,location:e.location,description:e.description}}(e,i)})),xhr:r})},function(e,t){n({message:e,xhr:t})})}else n({message:"Specify a googleCalendarApiKey. See http://fullcalendar.io/docs/google_calendar/"})}}],optionRefiners:{googleCalendarApiKey:String},eventSourceRefiners:{googleCalendarApiKey:String,googleCalendarId:String,googleCalendarApiBase:String,extraParams:Lt}}),sl=["GPL-My-Project-Is-Open-Source","CC-Attribution-NonCommercial-NoDerivatives"],ll={position:"absolute",zIndex:99999,bottom:"1px",left:"1px",background:"#eee",borderColor:"#ddd",borderStyle:"solid",borderWidth:"1px 1px 0 0",padding:"2px 4px",fontSize:"12px",borderTopRightRadius:"3px"},ul=fo({optionRefiners:{schedulerLicenseKey:String},viewContainerAppends:[function(e){var t,n=e.options.schedulerLicenseKey;if(t=window.location.href,!/\w+:\/\/fullcalendar\.io\/|\/examples\/[\w-]+\.html$/.test(t)){var r=function(e){if(-1!==sl.indexOf(e))return"valid";var t=(e||"").match(/^(\d+)-fcs-(\d+)$/);if(t&&10===t[1].length){var n=new Date(1e3*parseInt(t[2],10)),r=new Date(ui.mockSchedulerReleaseDate||"2020-11-12");if(Ie(r))return ye(r,-372)<n?"valid":"outdated"}return"invalid"}(n);if("valid"!==r)return zr("div",{className:"fc-license-message",style:ll},"outdated"===r?zr(jr,null,"Your license key is too old to work with this version. ",zr("a",{href:"http://fullcalendar.io/docs/schedulerLicenseKey#outdated"},"More Info")):zr(jr,null,"Your license key is invalid. ",zr("a",{href:"http://fullcalendar.io/docs/schedulerLicenseKey#invalid"},"More Info")))}return null}]}),cl="wheel mousewheel DomMouseScroll MozMousePixelScroll".split(" "),dl=function(){function e(e){var t=this;this.el=e,this.emitter=new Hr,this.isScrolling=!1,this.isTouching=!1,this.isRecentlyWheeled=!1,this.isRecentlyScrolled=!1,this.wheelWaiter=new Go(this._handleWheelWaited.bind(this)),this.scrollWaiter=new Go(this._handleScrollWaited.bind(this)),this.handleScroll=function(){t.startScroll(),t.emitter.trigger("scroll",t.isRecentlyWheeled,t.isTouching),t.isRecentlyScrolled=!0,t.scrollWaiter.request(500)},this.handleWheel=function(){t.isRecentlyWheeled=!0,t.wheelWaiter.request(500)},this.handleTouchStart=function(){t.isTouching=!0},this.handleTouchEnd=function(){t.isTouching=!1,t.isRecentlyScrolled||t.endScroll()},e.addEventListener("scroll",this.handleScroll),e.addEventListener("touchstart",this.handleTouchStart,{passive:!0}),e.addEventListener("touchend",this.handleTouchEnd);for(var n=0,r=cl;n<r.length;n++){var o=r[n];e.addEventListener(o,this.handleWheel)}}return e.prototype.destroy=function(){var e=this.el;e.removeEventListener("scroll",this.handleScroll),e.removeEventListener("touchstart",this.handleTouchStart,{passive:!0}),e.removeEventListener("touchend",this.handleTouchEnd);for(var t=0,n=cl;t<n.length;t++){var r=n[t];e.removeEventListener(r,this.handleWheel)}},e.prototype.startScroll=function(){this.isScrolling||(this.isScrolling=!0,this.emitter.trigger("scrollStart",this.isRecentlyWheeled,this.isTouching))},e.prototype.endScroll=function(){this.isScrolling&&(this.emitter.trigger("scrollEnd"),this.isScrolling=!1,this.isRecentlyScrolled=!0,this.isRecentlyWheeled=!1,this.scrollWaiter.clear(),this.wheelWaiter.clear())},e.prototype._handleScrollWaited=function(){this.isRecentlyScrolled=!1,this.isTouching||this.endScroll()},e.prototype._handleWheelWaited=function(){this.isRecentlyWheeled=!1},e}();function pl(e){var t=e.scrollLeft;if("rtl"===window.getComputedStyle(e).direction)switch(hl()){case"negative":t=e.scrollWidth-e.clientWidth+t;break;case"reverse":t=e.scrollWidth-e.clientWidth-t}return t}function fl(e,t){if("rtl"===window.getComputedStyle(e).direction)switch(hl()){case"positive":t=e.scrollWidth-e.clientWidth+t;break;case"reverse":t=-t}e.scrollLeft=t}function hl(){return ol||((t=document.createElement("div")).style.position="absolute",t.style.top="-1000px",t.style.width="1px",t.style.height="1px",t.style.overflow="scroll",t.style.direction="rtl",t.style.fontSize="100px",t.innerHTML="A",document.body.appendChild(t),t.scrollLeft>0?e="positive":(t.scrollLeft=1,e=t.scrollLeft>0?"reverse":"negative"),z(t),ol=e);var e,t}var gl=/Edge/.test(navigator.userAgent),vl=function(){function e(e,t){var n=this;this.scrollEl=e,this.isRtl=t,this.usingRelative=null,this.updateSize=function(){var e=n.scrollEl,t=j(e,".fc-sticky"),r=n.queryElGeoms(t),o=e.clientWidth,i=e.clientHeight;n.usingRelative?function(e,t,n,r,o){e.forEach(function(e,i){var a,s,l=t[i],u=l.naturalBound,c=l.parentBound,d=c.right-c.left,p=c.bottom-c.bottom;d>r||p>o?(a=n[i].left-u.left,s=n[i].top-u.top):(a="",s=""),Y(e,{position:"relative",left:a,right:-a,top:s})})}(t,r,n.computeElDestinations(r,o),o,i):function(e,t,n){e.forEach(function(e,r){var o,i=t[r],a=i.textAlign,s=i.elWidth,l=i.parentBound,u=l.right-l.left;Y(e,{left:o="center"===a&&u>n?(n-s)/2:"",right:o,top:0})})}(t,r,o)},this.usingRelative=!function(){var e=document.createElement("div");e.className="fc-sticky",document.body.appendChild(e);var t=window.getComputedStyle(e).position;return z(e),-1!==t.indexOf("sticky")?t:null}()||gl&&t,this.usingRelative&&(this.listener=new dl(e),this.listener.emitter.on("scrollEnd",this.updateSize))}return e.prototype.destroy=function(){this.listener&&this.listener.destroy()},e.prototype.queryElGeoms=function(e){for(var t=this.scrollEl,n=this.isRtl,r=function(e){var t=e.getBoundingClientRect(),n=kr(e);return{left:t.left+n.borderLeft+n.scrollbarLeft-pl(e),top:t.top+n.borderTop-e.scrollTop}}(t),o=[],i=0,a=e;i<a.length;i++){var s=a[i],l=pr(Pr(s.parentNode,!0,!0),-r.left,-r.top),u=s.getBoundingClientRect(),c=window.getComputedStyle(s),d=window.getComputedStyle(s.parentNode).textAlign,p=null;"start"===d?d=n?"right":"left":"end"===d&&(d=n?"left":"right"),"sticky"!==c.position&&(p=pr(u,-r.left-(parseFloat(c.left)||0),-r.top-(parseFloat(c.top)||0))),o.push({parentBound:l,naturalBound:p,elWidth:u.width,elHeight:u.height,textAlign:d})}return o},e.prototype.computeElDestinations=function(e,t){var n=this.scrollEl,r=n.scrollTop,o=pl(n),i=o+t;return e.map(function(e){var t,n,a=e.elWidth,s=e.elHeight,l=e.parentBound,u=e.naturalBound;switch(e.textAlign){case"left":t=o;break;case"right":t=i-a;break;case"center":t=(o+i)/2-a/2}return t=Math.min(t,l.right-a),t=Math.max(t,l.left),n=r,n=Math.min(n,l.bottom-s),{left:t,top:n=Math.max(n,u.top)}})},e}(),ml=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.elRef=Fr(),t.state={xScrollbarWidth:xr().x,yScrollbarWidth:xr().y},t.handleScroller=function(e){t.scroller=e,to(t.props.scrollerRef,e)},t.handleSizing=function(){var e=t.props;"scroll-hidden"===e.overflowY&&t.setState({yScrollbarWidth:t.scroller.getYScrollbarWidth()}),"scroll-hidden"===e.overflowX&&t.setState({xScrollbarWidth:t.scroller.getXScrollbarWidth()})},t}return n(t,e),t.prototype.render=function(){var e=this.props,t=this.state,n=this.context.isRtl&&Tr(),r=0,o=0,i=0;return"scroll-hidden"===e.overflowX&&(i=t.xScrollbarWidth),"scroll-hidden"===e.overflowY&&null!=t.yScrollbarWidth&&(n?r=t.yScrollbarWidth:o=t.yScrollbarWidth),zr("div",{ref:this.elRef,className:"fc-scroller-harness"+(e.liquid?" fc-scroller-harness-liquid":"")},zr(Oi,{ref:this.handleScroller,elRef:this.props.scrollerElRef,overflowX:"scroll-hidden"===e.overflowX?"scroll":e.overflowX,overflowY:"scroll-hidden"===e.overflowY?"scroll":e.overflowY,overcomeLeft:r,overcomeRight:o,overcomeBottom:i,maxHeight:"number"==typeof e.maxHeight?e.maxHeight+("scroll-hidden"===e.overflowX?t.xScrollbarWidth:0):"",liquid:e.liquid,liquidIsAbsolute:!0},e.children))},t.prototype.componentDidMount=function(){this.handleSizing(),this.context.addResizeHandler(this.handleSizing)},t.prototype.componentDidUpdate=function(e){Be(e,this.props)||this.handleSizing()},t.prototype.componentWillUnmount=function(){this.context.removeResizeHandler(this.handleSizing)},t.prototype.needsXScrolling=function(){return this.scroller.needsXScrolling()},t.prototype.needsYScrolling=function(){return this.scroller.needsYScrolling()},t}($r),yl=function(){function e(e,t){var n=this;this.isVertical=e,this.scrollEls=t,this.isPaused=!1,this.scrollListeners=t.map(function(e){return n.bindScroller(e)})}return e.prototype.destroy=function(){for(var e=0,t=this.scrollListeners;e<t.length;e++)t[e].destroy()},e.prototype.bindScroller=function(e){var t=this,n=this.scrollEls,r=this.isVertical,o=new dl(e);return o.emitter.on("scroll",function(o,i){if(!t.isPaused&&((!t.masterEl||t.masterEl!==e&&(o||i))&&t.assignMaster(e),t.masterEl===e))for(var a=0,s=n;a<s.length;a++){var l=s[a];l!==e&&(r?l.scrollTop=e.scrollTop:l.scrollLeft=e.scrollLeft)}}),o.emitter.on("scrollEnd",function(){t.masterEl===e&&(t.masterEl=null)}),o},e.prototype.assignMaster=function(e){this.masterEl=e;for(var t=0,n=this.scrollListeners;t<n.length;t++){var r=n[t];r.el!==e&&r.endScroll()}},e.prototype.forceScrollLeft=function(e){this.isPaused=!0;for(var t=0,n=this.scrollListeners;t<n.length;t++)fl(n[t].el,e);this.isPaused=!1},e.prototype.forceScrollTop=function(e){this.isPaused=!0;for(var t=0,n=this.scrollListeners;t<n.length;t++)n[t].el.scrollTop=e;this.isPaused=!1},e}(),Sl=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.compileColGroupStats=ft(Dl,Tl),t.renderMicroColGroups=ft(Vi),t.clippedScrollerRefs=new Wi,t.scrollerElRefs=new Wi(t._handleScrollerEl.bind(t)),t.chunkElRefs=new Wi(t._handleChunkEl.bind(t)),t.getStickyScrolling=ft(kl,null,Pl),t.getScrollSyncersBySection=ht(xl.bind(t,!0),null,Ml),t.getScrollSyncersByColumn=ht(xl.bind(t,!1),null,Ml),t.stickyScrollings=[],t.scrollSyncersBySection={},t.scrollSyncersByColumn={},t.rowUnstableMap=new Map,t.rowInnerMaxHeightMap=new Map,t.anyRowHeightsChanged=!1,t.state={shrinkWidths:[],forceYScrollbars:!1,forceXScrollbars:!1,scrollerClientWidths:{},scrollerClientHeights:{},sectionRowMaxHeights:[]},t.handleSizing=function(e,n){n||(t.anyRowHeightsChanged=!0);var o={};(e||!n&&!t.rowUnstableMap.size)&&(o.sectionRowMaxHeights=t.computeSectionRowMaxHeights()),t.setState(r(r({shrinkWidths:t.computeShrinkWidths()},t.computeScrollerDims()),o),function(){t.rowUnstableMap.size||t.updateStickyScrolling()})},t.handleRowHeightChange=function(e,n){var r=t,o=r.rowUnstableMap,i=r.rowInnerMaxHeightMap;if(n){o.delete(e);var a=Cl(e);i.has(e)&&i.get(e)===a||(i.set(e,a),t.anyRowHeightsChanged=!0),!o.size&&t.anyRowHeightsChanged&&(t.anyRowHeightsChanged=!1,t.setState({sectionRowMaxHeights:t.computeSectionRowMaxHeights()}))}else o.set(e,!0)},t}return n(t,e),t.prototype.render=function(){for(var e,t=this.props,n=this.state,r=this.context,i=n.shrinkWidths,a=this.compileColGroupStats(t.colGroups.map(function(e){return[e]})),s=this.renderMicroColGroups(a.map(function(e,t){return[e.cols,i[t]]})),l=Gi(t.liquid,r),u=this.getDims(),c=(u[0],u[1],t.sections),d=c.length,p=0,f=[],h=[],g=[];p<d&&"header"===(e=c[p]).type;)f.push(this.renderSection(e,p,a,s,n.sectionRowMaxHeights)),p+=1;for(;p<d&&"body"===(e=c[p]).type;)h.push(this.renderSection(e,p,a,s,n.sectionRowMaxHeights)),p+=1;for(;p<d&&"footer"===(e=c[p]).type;)g.push(this.renderSection(e,p,a,s,n.sectionRowMaxHeights)),p+=1;var v=!vr();return zr("table",{ref:t.elRef,className:l.join(" ")},function(e,t){var n=a.map(function(e,n){var r=e.width;return"shrink"===r&&(r=e.totalColWidth+Fi(t[n])+1),zr("col",{style:{width:r}})});return zr.apply(void 0,o(["colgroup",{}],n))}(0,i),Boolean(!v&&f.length)&&zr.apply(void 0,o(["thead",{}],f)),Boolean(!v&&h.length)&&zr.apply(void 0,o(["tbody",{}],h)),Boolean(!v&&g.length)&&zr.apply(void 0,o(["tfoot",{}],g)),v&&zr.apply(void 0,o(["tbody",{}],f,h,g)))},t.prototype.renderSection=function(e,t,n,r,o){var i=this;return"outerContent"in e?zr(jr,{key:e.key},e.outerContent):zr("tr",{key:e.key,className:qi(e,this.props.liquid).join(" ")},e.chunks.map(function(a,s){return i.renderChunk(e,t,n[s],r[s],a,s,(o[t]||[])[s]||[])}))},t.prototype.renderChunk=function(e,t,n,r,o,i,a){if("outerContent"in o)return zr(jr,{key:o.key},o.outerContent);var s=this.state,l=s.scrollerClientWidths,u=s.scrollerClientHeights,c=this.getDims(),d=c[0],p=c[1],f=t*p+i,h=i===(!this.context.isRtl||Tr()?p-1:0),g=t===d-1,v=g&&s.forceXScrollbars,m=h&&s.forceYScrollbars,y=n&&n.allowXScrolling,S=Ui(this.props,e),E=Li(this.props,e),C=e.expandRows&&E,b=Bi(e,o,{tableColGroupNode:r,tableMinWidth:n&&n.totalColMinWidth||"",clientWidth:void 0!==l[f]?l[f]:null,clientHeight:void 0!==u[f]?u[f]:null,expandRows:C,syncRowHeights:Boolean(e.syncRowHeights),rowSyncHeights:a,reportRowHeightChange:this.handleRowHeightChange}),D=v?g?"scroll":"scroll-hidden":y?g?"auto":"scroll-hidden":"hidden",R=m?h?"scroll":"scroll-hidden":S?h?"auto":"scroll-hidden":"hidden";return b=zr(ml,{ref:this.clippedScrollerRefs.createRef(f),scrollerElRef:this.scrollerElRefs.createRef(f),overflowX:D,overflowY:R,liquid:E,maxHeight:e.maxHeight},b),zr("td",{key:o.key,ref:this.chunkElRefs.createRef(f)},b)},t.prototype.componentDidMount=function(){this.updateScrollSyncers(),this.handleSizing(!1),this.context.addResizeHandler(this.handleSizing)},t.prototype.componentDidUpdate=function(e,t){this.updateScrollSyncers(),this.handleSizing(!1,t.sectionRowMaxHeights!==this.state.sectionRowMaxHeights)},t.prototype.componentWillUnmount=function(){this.context.removeResizeHandler(this.handleSizing),this.destroyStickyScrolling(),this.destroyScrollSyncers()},t.prototype.computeShrinkWidths=function(){var e=this,t=this.compileColGroupStats(this.props.colGroups.map(function(e){return[e]})),n=this.getDims(),r=n[0],o=n[1],i=r*o,a=[];return t.forEach(function(t,n){if(t.hasShrinkCol){var r=e.chunkElRefs.collect(n,i,o);a[n]=Ai(r)}}),a},t.prototype.computeSectionRowMaxHeights=function(){for(var e=new Map,t=this.getDims(),n=t[0],r=t[1],o=[],i=0;i<n;i+=1){var a=this.props.sections[i],s=[];if(a&&a.syncRowHeights){for(var l=[],u=0;u<r;u+=1){var c,d=i*r+u,p=this.chunkElRefs.currentMap[d];c=p?j(p,".fc-scrollgrid-sync-table tr").map(function(t){var n=Cl(t);return e.set(t,n),n}):[],l.push(c)}var f=l[0].length,h=!0;for(u=1;u<r;u+=1)if((!a.chunks[u]||void 0===a.chunks[u].outerContent)&&l[u].length!==f){h=!1;break}if(h){for(u=0;u<r;u+=1)s.push([]);for(E=0;E<f;E+=1){var g=[];for(u=0;u<r;u+=1){var v=l[u][E];null!=v&&g.push(v)}var m=Math.max.apply(Math,g);for(u=0;u<r;u+=1)s[u].push(m)}}else{var y=[];for(u=0;u<r;u+=1)y.push(El(l[u])+l[u].length);var S=Math.max.apply(Math,y);for(u=0;u<r;u+=1){var E,C=l[u].length,b=S-C,D=Math.floor(b/C),R=b-D*(C-1),w=[];for((E=0)<C&&(w.push(R),E+=1);E<C;)w.push(D),E+=1;s.push(w)}}}o.push(s)}return this.rowInnerMaxHeightMap=e,o},t.prototype.computeScrollerDims=function(){for(var e=xr(),t=this.getDims(),n=t[0],r=t[1],o=!this.context.isRtl||Tr()?r-1:0,i=n-1,a=this.clippedScrollerRefs.currentMap,s=this.scrollerElRefs.currentMap,l=!1,u=!1,c={},d={},p=0;p<n;p+=1)if((h=a[g=p*r+o])&&h.needsYScrolling()){l=!0;break}for(var f=0;f<r;f+=1){var h;if((h=a[g=i*r+f])&&h.needsXScrolling()){u=!0;break}}for(p=0;p<n;p+=1)for(f=0;f<r;f+=1){var g,v=s[g=p*r+f];if(v){var m=v.parentNode;c[g]=Math.floor(m.getBoundingClientRect().width-(f===o&&l?e.y:0)),d[g]=Math.floor(m.getBoundingClientRect().height-(p===i&&u?e.x:0))}}return{forceYScrollbars:l,forceXScrollbars:u,scrollerClientWidths:c,scrollerClientHeights:d}},t.prototype.updateStickyScrolling=function(){var e=this.context.isRtl,t=this.scrollerElRefs.getAll().map(function(t){return[t,e]}),n=this.getStickyScrolling(t);n.forEach(function(e){return e.updateSize()}),this.stickyScrollings=n},t.prototype.destroyStickyScrolling=function(){this.stickyScrollings.forEach(Pl)},t.prototype.updateScrollSyncers=function(){for(var e=this.getDims(),t=e[0],n=e[1],r=t*n,o={},i={},a=this.scrollerElRefs.currentMap,s=0;s<t;s+=1){var l=s*n,u=l+n;o[s]=je(a,l,u,1)}for(var c=0;c<n;c+=1)i[c]=this.scrollerElRefs.collect(c,r,n);this.scrollSyncersBySection=this.getScrollSyncersBySection(o),this.scrollSyncersByColumn=this.getScrollSyncersByColumn(i)},t.prototype.destroyScrollSyncers=function(){Ae(this.scrollSyncersBySection,Ml),Ae(this.scrollSyncersByColumn,Ml)},t.prototype.getChunkConfigByIndex=function(e){var t=this.getDims()[1],n=Math.floor(e/t),r=e%t,o=this.props.sections[n];return o&&o.chunks[r]},t.prototype.forceScrollLeft=function(e,t){var n=this.scrollSyncersByColumn[e];n&&n.forceScrollLeft(t)},t.prototype.forceScrollTop=function(e,t){var n=this.scrollSyncersBySection[e];n&&n.forceScrollTop(t)},t.prototype._handleChunkEl=function(e,t){var n=this.getChunkConfigByIndex(parseInt(t,10));n&&to(n.elRef,e)},t.prototype._handleScrollerEl=function(e,t){var n=this.getChunkConfigByIndex(parseInt(t,10));n&&to(n.scrollerElRef,e)},t.prototype.getDims=function(){var e=this.props.sections.length;return[e,e?this.props.sections[0].chunks.length:0]},t}($r);function El(e){for(var t=0,n=0,r=e;n<r.length;n++)t+=r[n];return t}function Cl(e){var t=j(e,".fc-scrollgrid-sync-inner").map(bl);return t.length?Math.max.apply(Math,t):0}function bl(e){return e.offsetHeight}function Dl(e){var t=Rl(e.cols,"width"),n=Rl(e.cols,"minWidth"),r=ji(e.cols);return{hasShrinkCol:r,totalColWidth:t,totalColMinWidth:n,allowXScrolling:"shrink"!==e.width&&Boolean(t||n||r),cols:e.cols,width:e.width}}function Rl(e,t){for(var n=0,r=0,o=e;r<o.length;r++){var i=o[r],a=i[t];"number"==typeof a&&(n+=a*(i.span||1))}return n}Sl.addStateEquality({shrinkWidths:ct,scrollerClientWidths:Be,scrollerClientHeights:Be});var wl={cols:zi};function Tl(e,t){return Ve(e,t,wl)}function xl(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new yl(e,t)}function Ml(e){e.destroy()}function kl(e,t){return new vl(e,t)}function Pl(e){e.destroy()}var Il=fo({deps:[ul],scrollGridImpl:Sl}),_l=[],Nl=[],Hl=fo({deps:[ul],contextInit:function(e){_l.length||(window.addEventListener("beforeprint",Ol),window.addEventListener("afterprint",Wl)),_l.push(e),e.calendarApi.on("_unmount",function(){ut(_l,e),_l.length||(window.removeEventListener("beforeprint",Ol),window.removeEventListener("afterprint",Wl))})}});function Ol(){for(var e=j(document.body,".fc-scroller-harness > .fc-scroller"),t=e.map(function(e){var t=window.getComputedStyle(e);return{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop,overflowX:t.overflowX,overflowY:t.overflowY,marginBottom:t.marginBottom}}),n=0,r=_l;n<r.length;n++)r[n].emitter.trigger("_beforeprint");qr(),function(e,t){e.forEach(function(e,n){e.style.overflowX="visible",e.style.overflowY="visible",e.style.marginBottom="",e.style.left=-t[n].scrollLeft+"px"})}(e,t),Nl.push(function(){return function(e,t){e.forEach(function(e,n){var r=t[n];e.style.overflowX=r.overflowX,e.style.overflowY=r.overflowY,e.style.marginBottom=r.marginBottom,e.style.left="",e.scrollLeft=r.scrollLeft,e.scrollTop=r.scrollTop})}(e,t)}),Nl.push(function(){var e=j(document.body,".fc-scrollgrid");return e.forEach(Al),function(){return e.forEach(Ll)}}())}function Wl(){for(var e=0,t=_l;e<t.length;e++)t[e].emitter.trigger("_afterprint");for(qr();Nl.length;)Nl.shift()()}function Al(e){e.style.width=e.getBoundingClientRect().width+"px"}function Ll(e){e.style.width=""}ui.MAX_TIMELINE_SLOTS=1e3;var Ul=[{years:1},{months:1},{days:1},{hours:1},{minutes:30},{minutes:15},{minutes:10},{minutes:5},{minutes:1},{seconds:30},{seconds:15},{seconds:10},{seconds:5},{seconds:1},{milliseconds:500},{milliseconds:100},{milliseconds:10},{milliseconds:1}];function Bl(e,t,n,r){var o={labelInterval:n.slotLabelInterval,slotDuration:n.slotDuration};!function(e,t,n){var r=t.currentRange;if(e.labelInterval&&n.countDurationsBetween(r.start,r.end,e.labelInterval)>ui.MAX_TIMELINE_SLOTS&&(console.warn("slotLabelInterval results in too many cells"),e.labelInterval=null),e.slotDuration&&n.countDurationsBetween(r.start,r.end,e.slotDuration)>ui.MAX_TIMELINE_SLOTS&&(console.warn("slotDuration results in too many cells"),e.slotDuration=null),e.labelInterval&&e.slotDuration){var o=ot(e.labelInterval,e.slotDuration);(null===o||o<1)&&(console.warn("slotLabelInterval must be a multiple of slotDuration"),e.slotDuration=null)}}(o,e,t),Fl(o,e,t),function(e,t,n){var r=t.currentRange,o=e.slotDuration;if(!o){for(var i=Fl(e,t,n),a=0,s=Ul;a<s.length;a++){var l=Xe(s[a]),u=ot(i,l);if(null!==u&&u>1&&u<=6){o=l;break}}o&&n.countDurationsBetween(r.start,r.end,o)>200&&(o=null),o||(o=i),e.slotDuration=o}}(o,e,t);var i=n.slotLabelFormat,a=Array.isArray(i)?i:null!=i?[i]:function(e,t,n,r){var o,i,a=e.labelInterval,s=it(a).unit,l=r.weekNumbers,u=o=i=null;switch("week"!==s||l||(s="day"),s){case"year":u={year:"numeric"};break;case"month":jl("years",t,n)>1&&(u={year:"numeric"}),o={month:"short"};break;case"week":jl("years",t,n)>1&&(u={year:"numeric"}),o={week:"narrow"};break;case"day":jl("years",t,n)>1?u={year:"numeric",month:"long"}:jl("months",t,n)>1&&(u={month:"long"}),l&&(o={week:"short"}),i={weekday:"narrow",day:"numeric"};break;case"hour":l&&(u={week:"short"}),jl("days",t,n)>1&&(o={weekday:"short",day:"numeric",month:"numeric",omitCommas:!0}),i={hour:"numeric",minute:"2-digit",omitZeroMinute:!0,meridiem:"short"};break;case"minute":tt(a)/60>=6?(u={hour:"numeric",meridiem:"short"},o=function(e){return":"+pe(e.date.minute,2)}):u={hour:"numeric",minute:"numeric",meridiem:"short"};break;case"second":nt(a)/60>=6?(u={hour:"numeric",minute:"2-digit",meridiem:"lowercase"},o=function(e){return":"+pe(e.date.second,2)}):u={hour:"numeric",minute:"2-digit",second:"2-digit",meridiem:"lowercase"};break;case"millisecond":u={hour:"numeric",minute:"2-digit",second:"2-digit",meridiem:"lowercase"},o=function(e){return"."+pe(e.millisecond,3)}}return[].concat(u||[],o||[],i||[])}(o,e,t,n);o.headerFormats=a.map(function(e){return Mt(e)}),o.isTimeScale=Boolean(o.slotDuration.milliseconds);var s=null;if(!o.isTimeScale){var l=it(o.slotDuration).unit;/year|month|week/.test(l)&&(s=l)}o.largeUnit=s,o.emphasizeWeeks=1===Je(o.slotDuration)&&jl("weeks",e,t)>=2&&!n.businessHours;var u,c,d=n.snapDuration;d&&(u=Xe(d),c=ot(o.slotDuration,u)),null==c&&(u=o.slotDuration,c=1),o.snapDuration=u,o.snapsPerSlot=c;var p=rt(e.slotMaxTime)-rt(e.slotMinTime),f=zl(e.renderRange.start,o,t),h=zl(e.renderRange.end,o,t);o.isTimeScale&&(f=t.add(f,e.slotMinTime),h=t.add(ye(h,-1),e.slotMaxTime)),o.timeWindowMs=p,o.normalizedRange={start:f,end:h};for(var g=[],v=f;v<h;)Vl(v,o,e,r)&&g.push(v),v=t.add(v,o.slotDuration);o.slotDates=g;var m=-1,y=0,S=[],E=[];for(v=f;v<h;)Vl(v,o,e,r)?(m+=1,S.push(m),E.push(y)):S.push(m+.5),v=t.add(v,o.snapDuration),y+=1;return o.snapDiffToIndex=S,o.snapIndexToDiff=E,o.snapCnt=m+1,o.slotCnt=o.snapCnt/o.snapsPerSlot,o.isWeekStarts=function(e,t){for(var n=e.slotDates,r=e.emphasizeWeeks,o=null,i=[],a=0,s=n;a<s.length;a++){var l=s[a],u=t.computeWeekNumber(l),c=r&&null!==o&&o!==u;o=u,i.push(c)}return i}(o,t),o.cellRows=function(e,t){for(var n=e.slotDates,r=e.headerFormats,o=r.map(function(){return[]}),i=Je(e.slotDuration),a=7===i?"week":1===i?"day":null,s=r.map(function(e){return e.getLargestUnit?e.getLargestUnit():null}),l=0;l<n.length;l+=1)for(var u=n[l],c=e.isWeekStarts[l],d=0;d<r.length;d+=1){var p=r[d],f=o[d],h=f[f.length-1],g=d===r.length-1,v=r.length>1&&!g,m=null,y=s[d]||(g?a:null);if(v){var S=t.format(u,p);h&&h.text===S?h.colspan+=1:m=Gl(u,S,y)}else!h||he(t.countDurationsBetween(e.normalizedRange.start,u,e.labelInterval))?m=Gl(u,S=t.format(u,p),y):h.colspan+=1;m&&(m.weekStart=c,f.push(m))}return o}(o,t),o.slotsPerLabel=ot(o.labelInterval,o.slotDuration),o}function zl(e,t,n){var r=e;return t.isTimeScale||(r=we(r),t.largeUnit&&(r=n.startOf(r,t.largeUnit))),r}function Vl(e,t,n,r){if(r.isHiddenDay(e))return!1;if(t.isTimeScale){var o=we(e),i=e.valueOf()-o.valueOf()-rt(n.slotMinTime);return(i=(i%864e5+864e5)%864e5)<t.timeWindowMs}return!0}function Fl(e,t,n){var r=t.currentRange,o=e.labelInterval;if(!o){if(e.slotDuration){for(var i=0,a=Ul;i<a.length;i++){var s=Xe(a[i]),l=ot(s,e.slotDuration);if(null!==l&&l<=6){o=s;break}}o||(o=e.slotDuration)}else for(var u=0,c=Ul;u<c.length&&(o=Xe(c[u]),!(n.countDurationsBetween(r.start,r.end,o)>=18));u++);e.labelInterval=o}return o}function jl(e,t,n){var r=t.currentRange,o=null;return"years"===e?o=n.diffWholeYears(r.start,r.end):"months"===e||"weeks"===e?o=n.diffWholeMonths(r.start,r.end):"days"===e&&(o=Re(r.start,r.end)),o||0}function Gl(e,t,n){return{date:e,text:t,rowUnit:n,colspan:1,isWeekStart:!1}}var ql=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return n(t,e),t.prototype.render=function(){var e=this.props,t=this.context,n=e.navLinkData?{"data-navlink":e.navLinkData,tabIndex:0}:{};return zr(yo,{hookProps:e.hookProps,content:t.options.slotLabelContent,defaultContent:Yl},function(t,o){return zr("a",r({ref:t,className:"fc-timeline-slot-cushion fc-scrollgrid-sync-inner"+(e.isSticky?" fc-sticky":"")},n),o)})},t}($r);function Yl(e){return e.text}function Zl(e){return{level:e.level,date:e.dateEnv.toDate(e.dateMarker),view:e.viewApi,text:e.text}}var Xl=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.refineHookProps=pt(Zl),t.normalizeClassNames=Co(),t}return n(t,e),t.prototype.render=function(){var e=this.props,t=this.context,n=t.dateEnv,r=t.options,o=e.cell,i=e.dateProfile,a=e.tDateProfile,s=Er(o.date,e.todayRange,e.nowDate,i),l=["fc-timeline-slot","fc-timeline-slot-label"].concat("time"===o.rowUnit?br(s,t.theme):Cr(s,t.theme));o.isWeekStart&&l.push("fc-timeline-slot-em");var u=r.navLinks&&o.rowUnit&&"time"!==o.rowUnit?Dr(o.date,o.rowUnit):null,c=this.refineHookProps({level:e.rowLevel,dateMarker:o.date,text:o.text,dateEnv:t.dateEnv,viewApi:t.viewApi}),d=this.normalizeClassNames(r.slotLabelClassNames,c);return zr(Eo,{hookProps:c,didMount:r.slotLabelDidMount,willUnmount:r.slotLabelWillUnmount},function(t){return zr("th",{ref:t,className:l.concat(d).join(" "),"data-date":n.formatIso(o.date,{omitTime:!a.isTimeScale,omitTimeZoneOffset:!0}),colSpan:o.colspan},zr("div",{className:"fc-timeline-slot-frame",style:{height:e.rowInnerHeight}},zr(ql,{hookProps:c,isSticky:e.isSticky,navLinkData:u})))})},t}($r),Kl=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return n(t,e),t.prototype.render=function(){var e=this.props,t=e.dateProfile,n=e.tDateProfile,r=e.rowInnerHeights,o=e.todayRange,i=e.nowDate,a=n.cellRows;return zr(jr,null,a.map(function(e,s){var l=s===a.length-1,u=n.isTimeScale&&l;return zr("tr",{key:s,className:["fc-timeline-header-row",u?"fc-timeline-header-row-chrono":""].join(" ")},e.map(function(e){return zr(Xl,{key:e.date.toISOString(),cell:e,rowLevel:s,dateProfile:t,tDateProfile:n,todayRange:o,nowDate:i,rowInnerHeight:r&&r[s],isSticky:!l})}))}))},t}($r),Jl=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.rootElRef=Fr(),t}return n(t,e),t.prototype.render=function(){var e=this,t=this.props,n=this.context,r=it(t.tDateProfile.slotDuration).unit,o=t.slatCoords&&t.slatCoords.dateProfile===t.dateProfile?t.slatCoords:null;return zr(Ti,{unit:r},function(r,i){return zr("div",{className:"fc-timeline-header",ref:e.rootElRef},zr("table",{className:"fc-scrollgrid-sync-table",style:{minWidth:t.tableMinWidth,width:t.clientWidth}},t.tableColGroupNode,zr("tbody",null,zr(Kl,{dateProfile:t.dateProfile,tDateProfile:t.tDateProfile,nowDate:r,todayRange:i,rowInnerHeights:t.rowInnerHeights}))),n.options.nowIndicator&&zr("div",{className:"fc-timeline-now-indicator-container"},o&&o.isDateInRange(r)&&zr(ea,{isAxis:!0,date:r},function(e,t,n,i){return zr("div",{ref:e,className:["fc-timeline-now-indicator-arrow"].concat(t).join(" "),style:{left:o.dateToCoord(r)}},i)})))})},t.prototype.componentDidMount=function(){this.updateSize()},t.prototype.componentDidUpdate=function(){this.updateSize()},t.prototype.updateSize=function(){this.props.onMaxCushionWidth&&this.props.onMaxCushionWidth(this.computeMaxCushionWidth())},t.prototype.computeMaxCushionWidth=function(){return Math.max.apply(Math,j(this.rootElRef.current,".fc-timeline-header-row:last-child .fc-timeline-slot-cushion").map(function(e){return e.getBoundingClientRect().width}))},t}($r),$l=function(){function e(e,t,n,r,o,i){this.slatRootEl=e,this.dateProfile=n,this.tDateProfile=r,this.dateEnv=o,this.isRtl=i,this.outerCoordCache=new Or(e,t,!0,!1),this.innerCoordCache=new Or(e,G(t,"div"),!0,!1)}return e.prototype.rangeToCoords=function(e){return this.isRtl?{right:this.dateToCoord(e.start),left:this.dateToCoord(e.end)}:{left:this.dateToCoord(e.start),right:this.dateToCoord(e.end)}},e.prototype.isDateInRange=function(e){return hn(this.dateProfile.currentRange,e)},e.prototype.dateToCoord=function(e){var t=this.tDateProfile,n=this.computeDateSnapCoverage(e)/t.snapsPerSlot,r=Math.floor(n),o=n-(r=Math.min(r,t.slotCnt-1)),i=this.innerCoordCache,a=this.outerCoordCache;return this.isRtl?a.rights[r]-i.getWidth(r)*o-a.originClientRect.width:a.lefts[r]+i.getWidth(r)*o},e.prototype.computeDateSnapCoverage=function(e){return Ql(e,this.tDateProfile,this.dateEnv)},e.prototype.computeDurationLeft=function(e){var t=this.dateProfile,n=this.tDateProfile,r=this.dateEnv,o=this.isRtl,i=0;if(t){var a=r.add(t.activeRange.start,e);n.isTimeScale||(a=we(a)),i=this.dateToCoord(a),!o&&i&&(i+=1)}return i},e}();function Ql(e,t,n){var r=n.countDurationsBetween(t.normalizedRange.start,e,t.snapDuration);if(r<0)return 0;if(r>=t.snapDiffToIndex.length)return t.snapCnt;var o=Math.floor(r),i=t.snapDiffToIndex[o];return he(i)?i+=r-o:i=Math.ceil(i),i}var eu=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return n(t,e),t.prototype.render=function(){var e=this.props,t=this.context,n=t.dateEnv,o=t.options,i=t.theme,a=e.date,s=e.tDateProfile,l=e.isEm,u=Er(e.date,e.todayRange,e.nowDate,e.dateProfile),c=["fc-timeline-slot","fc-timeline-slot-lane"],d={"data-date":n.formatIso(a,{omitTimeZoneOffset:!0,omitTime:!s.isTimeScale})},p=r(r({date:n.toDate(e.date)},u),{view:t.viewApi});return l&&c.push("fc-timeline-slot-em"),s.isTimeScale&&c.push(he(n.countDurationsBetween(s.normalizedRange.start,e.date,s.labelInterval))?"fc-timeline-slot-major":"fc-timeline-slot-minor"),c.push.apply(c,e.isDay?Cr(u,i):br(u,i)),zr(vo,{hookProps:p,classNames:o.slotLaneClassNames,content:o.slotLaneContent,didMount:o.slotLaneDidMount,willUnmount:o.slotLaneWillUnmount,elRef:e.elRef},function(e,t,n,o){return zr("td",r({ref:e,className:c.concat(t).join(" ")},d),zr("div",{ref:n},o))})},t}($r),tu=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return n(t,e),t.prototype.render=function(){var e=this.props,t=e.tDateProfile,n=e.cellElRefs,r=t.slotDates,o=t.isWeekStarts,i=!t.isTimeScale&&!t.largeUnit;return zr("tbody",null,zr("tr",null,r.map(function(r,a){var s=r.toISOString();return zr(eu,{key:s,elRef:n.createRef(s),date:r,dateProfile:e.dateProfile,tDateProfile:t,nowDate:e.nowDate,todayRange:e.todayRange,isEm:o[a],isDay:i})})))},t}($r),nu=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.rootElRef=Fr(),t.cellElRefs=new Wi,t.handleScrollRequest=function(e){var n=t.props.onScrollLeftRequest,r=t.coords;return n&&r?(e.time&&n(r.computeDurationLeft(e.time)),!0):null},t}return n(t,e),t.prototype.render=function(){var e=this.props,t=this.context;return zr("div",{className:"fc-timeline-slots",ref:this.rootElRef},zr("table",{className:t.theme.getClass("table"),style:{minWidth:e.tableMinWidth,width:e.clientWidth}},e.tableColGroupNode,zr(tu,{cellElRefs:this.cellElRefs,dateProfile:e.dateProfile,tDateProfile:e.tDateProfile,nowDate:e.nowDate,todayRange:e.todayRange})))},t.prototype.componentDidMount=function(){this.updateSizing(),this.scrollResponder=this.context.createScrollResponder(this.handleScrollRequest)},t.prototype.componentDidUpdate=function(e){this.updateSizing(),this.scrollResponder.update(e.dateProfile!==this.props.dateProfile)},t.prototype.componentWillUnmount=function(){this.scrollResponder.detach(),this.props.onCoords&&this.props.onCoords(null)},t.prototype.updateSizing=function(){var e,t=this.props,n=this.context;null!==t.clientWidth&&this.scrollResponder&&this.rootElRef.current.offsetWidth&&(this.coords=new $l(this.rootElRef.current,(e=this.cellElRefs.currentMap,t.tDateProfile.slotDates.map(function(t){var n=t.toISOString();return e[n]})),t.dateProfile,t.tDateProfile,n.dateEnv,n.isRtl),t.onCoords&&t.onCoords(this.coords),this.scrollResponder.update(!1))},t.prototype.positionToHit=function(e){var t=this.coords.outerCoordCache,n=this.context,r=n.dateEnv,o=n.isRtl,i=this.props.tDateProfile,a=t.leftToIndex(e);if(null!=a){var s=t.getWidth(a),l=o?(t.rights[a]-e)/s:(e-t.lefts[a])/s,u=Math.floor(l*i.snapsPerSlot),c=r.add(i.slotDates[a],Qe(i.snapDuration,u));return{dateSpan:{range:{start:c,end:r.add(c,i.snapDuration)},allDay:!this.props.tDateProfile.isTimeScale},dayEl:this.cellElRefs.currentMap[a],left:t.lefts[a],right:t.rights[a]}}return null},t}($r),ru=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return n(t,e),t.prototype.render=function(){var e=this.props,t=[].concat(e.eventResizeSegs,e.dateSelectionSegs);return e.timelineCoords&&zr("div",{className:"fc-timeline-bg"},this.renderSegs(e.businessHourSegs||[],e.timelineCoords,"non-business"),this.renderSegs(e.bgEventSegs||[],e.timelineCoords,"bg-event"),this.renderSegs(t,e.timelineCoords,"highlight"))},t.prototype.renderSegs=function(e,t,n){var o=this.props,i=o.todayRange,a=o.nowDate,s=e.map(function(e){var o=t.rangeToCoords(e);return zr("div",{key:kn(e.eventRange),className:"fc-timeline-bg-harness",style:{left:o.left,right:-o.right}},"bg-event"===n?zr(aa,r({seg:e},xn(e,i,a))):ia(n))});return zr(jr,null,s)},t}($r),ou=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return n(t,e),t.prototype.sliceRange=function(e,t,n,r,o){var i=function(e,t,n){if(!t.isTimeScale&&(e=on(e),t.largeUnit)){var r=e;((e={start:n.startOf(e.start,t.largeUnit),end:n.startOf(e.end,t.largeUnit)}).end.valueOf()!==r.end.valueOf()||e.end<=e.start)&&(e={start:e.start,end:n.add(e.end,t.slotDuration)})}return e}(e,r,o),a=[];if(Ql(i.start,r,o)<Ql(i.end,r,o)){var s=cn(i,r.normalizedRange);s&&a.push({start:s.start,end:s.end,isStart:s.start.valueOf()===i.start.valueOf()&&Vl(s.start,r,t,n),isEnd:s.end.valueOf()===i.end.valueOf()&&Vl(Se(s.end,-1),r,t,n)})}return a},t}(_i),iu=Mt({hour:"numeric",minute:"2-digit",omitZeroMinute:!0,meridiem:"narrow"}),au=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return n(t,e),t.prototype.render=function(){var e=this.props;return zr($i,r({},e,{extraClassNames:["fc-timeline-event","fc-h-event"],defaultTimeFormat:iu,defaultDisplayEventTime:!e.isTimeScale}))},t}($r);function su(e,t){var n={};if(t)for(var r=0,o=e;r<o.length;r++){var i=o[r];n[i.eventRange.instance.instanceId]=t.rangeToCoords(i)}return n}function lu(e,t,n){var r,o,i,a,s=[],l=0;if(n)for(var u=0,c=e=Cn(e,t);u<c.length;u++){var d=c[u].eventRange.instance.instanceId,p=n[d];if(p){for(var f=0,h=0,g=0;g<s.length;g+=1){var v=s[g];r=p,o=f,i=v.dims,a=v.top,r.right>i.left&&r.left<i.right&&o+r.height>a&&o<a+i.height&&(f=v.top+v.dims.height,h=g)}for(;h<s.length&&f>=s[h].top;)h+=1;s.splice(h,0,{key:d,dims:p,top:f}),l=Math.max(l,f+p.height)}}for(var m={},y=0,S=s;y<S.length;y++)m[(v=S[y]).key]=v.top;return{segTops:m,height:l}}var uu=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.slicer=new ou,t.computeFgSegHorizontals=dt(su),t.computeSegVerticals=dt(lu),t.harnessElRefs=new Wi,t.innerElRef=Fr(),t.state={segDims:null},t}return n(t,e),t.prototype.render=function(){var e=this.props,t=this.state,n=this.context,r=e.dateProfile,o=e.tDateProfile,i=this.slicer.sliceProps(e,r,o.isTimeScale?null:e.nextDayThreshold,n,r,n.dateProfileGenerator,o,n.dateEnv),a=(i.eventDrag?i.eventDrag.segs:null)||(i.eventResize?i.eventResize.segs:null)||[],s=this.computeFgSegHorizontals(i.fgEventSegs,e.timelineCoords),l=this.computeSegVerticals(i.fgEventSegs,n.options.eventOrder,t.segDims),u=l.segTops,c=l.height,d=(i.eventDrag?i.eventDrag.affectedInstances:null)||(i.eventResize?i.eventResize.affectedInstances:null)||{};return zr(jr,null,zr(ru,{businessHourSegs:i.businessHourSegs,bgEventSegs:i.bgEventSegs,timelineCoords:e.timelineCoords,eventResizeSegs:i.eventResize?i.eventResize.segs:[],dateSelectionSegs:i.dateSelectionSegs,nowDate:e.nowDate,todayRange:e.todayRange}),zr("div",{className:"fc-timeline-events fc-scrollgrid-sync-inner",ref:this.innerElRef,style:{height:c}},this.renderFgSegs(i.fgEventSegs,s,u,d,!1,!1,!1),this.renderFgSegs(a,su(a,e.timelineCoords),u,{},Boolean(i.eventDrag),Boolean(i.eventResize),!1)))},t.prototype.componentDidMount=function(){this.updateSize()},t.prototype.componentDidUpdate=function(e,t){e.eventStore===this.props.eventStore&&e.timelineCoords===this.props.timelineCoords||this.updateSize()},t.prototype.updateSize=function(){var e=this,t=this.props,n=t.timelineCoords;if(t.onHeightChange&&t.onHeightChange(this.innerElRef.current,!1),n){var r=n.slatRootEl.getBoundingClientRect();this.setState({segDims:Ae(this.harnessElRefs.currentMap,function(e){var t=e.getBoundingClientRect();return{left:Math.round(t.left-r.left),right:Math.round(t.right-r.left),height:Math.round(t.height)}})},function(){t.onHeightChange&&t.onHeightChange(e.innerElRef.current,!0)})}},t.prototype.renderFgSegs=function(e,t,n,o,i,a,s){var l=this,u=this.harnessElRefs,c=this.props,d=i||a||s;return zr(jr,null,e.map(function(e){var p=e.eventRange.instance.instanceId,f=t[p],h=n[p];return zr("div",{key:p,ref:d?null:u.createRef(p),className:"fc-timeline-event-harness",style:{left:f?f.left:"",right:f?-f.right:"",top:null!=h?h:"",visibility:o[p]?"hidden":""}},zr(au,r({isTimeScale:l.props.tDateProfile.isTimeScale,seg:e,isDragging:i,isResizing:a,isDateSelecting:s,isSelected:p===l.props.eventSelection},xn(e,c.todayRange,c.nowDate))))}))},t}($r),cu=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.slatsRef=Fr(),t.state={coords:null},t.handeEl=function(e){e?t.context.registerInteractiveComponent(t,{el:e}):t.context.unregisterInteractiveComponent(t)},t.handleCoords=function(e){t.setState({coords:e}),t.props.onSlatCoords&&t.props.onSlatCoords(e)},t}return n(t,e),t.prototype.render=function(){var e=this,t=this.props,n=this.state,r=this.context.options,o=t.dateProfile,i=t.tDateProfile,a=it(i.slotDuration).unit;return zr("div",{className:"fc-timeline-body",ref:this.handeEl,style:{minWidth:t.tableMinWidth,height:t.clientHeight,width:t.clientWidth}},zr(Ti,{unit:a},function(a,s){return zr(jr,null,zr(nu,{ref:e.slatsRef,dateProfile:o,tDateProfile:i,nowDate:a,todayRange:s,clientWidth:t.clientWidth,tableColGroupNode:t.tableColGroupNode,tableMinWidth:t.tableMinWidth,onCoords:e.handleCoords,onScrollLeftRequest:t.onScrollLeftRequest}),zr(uu,{dateProfile:o,tDateProfile:t.tDateProfile,nowDate:a,todayRange:s,nextDayThreshold:r.nextDayThreshold,businessHours:t.businessHours,eventStore:t.eventStore,eventUiBases:t.eventUiBases,dateSelection:t.dateSelection,eventSelection:t.eventSelection,eventDrag:t.eventDrag,eventResize:t.eventResize,timelineCoords:n.coords}),r.nowIndicator&&n.coords&&n.coords.isDateInRange(a)&&zr("div",{className:"fc-timeline-now-indicator-container"},zr(ea,{isAxis:!1,date:a},function(e,t,r,o){return zr("div",{ref:e,className:["fc-timeline-now-indicator-line"].concat(t).join(" "),style:{left:n.coords.dateToCoord(a)}},o)})))}))},t.prototype.queryHit=function(e,t,n,r){var o=this.slatsRef.current.positionToHit(e);return o?{component:this,dateSpan:o.dateSpan,rect:{left:o.left,right:o.right,top:0,bottom:r},dayEl:o.dayEl,layer:0}:null},t}(po),du=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.buildTimelineDateProfile=dt(Bl),t.scrollGridRef=Fr(),t.state={slatCoords:null,slotCushionMaxWidth:null},t.handleSlatCoords=function(e){t.setState({slatCoords:e})},t.handleScrollLeftRequest=function(e){t.scrollGridRef.current.forceScrollLeft(0,e)},t.handleMaxCushionWidth=function(e){t.setState({slotCushionMaxWidth:Math.ceil(e)})},t}return n(t,e),t.prototype.render=function(){var e=this,t=this.props,n=this.state,o=this.context,i=o.options,a=!t.forPrint&&Zi(i),s=!t.forPrint&&Xi(i),l=this.buildTimelineDateProfile(t.dateProfile,o.dateEnv,i,o.dateProfileGenerator),u=["fc-timeline",!1===i.eventOverlap?"fc-timeline-overlap-disabled":""],c=i.slotMinWidth,d=pu(l,c||this.computeFallbackSlotMinWidth(l)),p=[{type:"header",key:"header",isSticky:a,chunks:[{key:"timeline",content:function(r){return zr(Jl,{dateProfile:t.dateProfile,clientWidth:r.clientWidth,clientHeight:r.clientHeight,tableMinWidth:r.tableMinWidth,tableColGroupNode:r.tableColGroupNode,tDateProfile:l,slatCoords:n.slatCoords,onMaxCushionWidth:c?null:e.handleMaxCushionWidth})}}]},{type:"body",key:"body",liquid:!0,chunks:[{key:"timeline",content:function(n){return zr(cu,r({},t,{clientWidth:n.clientWidth,clientHeight:n.clientHeight,tableMinWidth:n.tableMinWidth,tableColGroupNode:n.tableColGroupNode,tDateProfile:l,onSlatCoords:e.handleSlatCoords,onScrollLeftRequest:e.handleScrollLeftRequest}))}}]}];return s&&p.push({type:"footer",key:"footer",isSticky:!0,chunks:[{key:"timeline",content:Yi}]}),zr(Ro,{viewSpec:o.viewSpec},function(n,r){return zr("div",{ref:n,className:u.concat(r).join(" ")},zr(Sl,{ref:e.scrollGridRef,liquid:!t.isHeightAuto&&!t.forPrint,colGroups:[{cols:d}],sections:p}))})},t.prototype.computeFallbackSlotMinWidth=function(e){return Math.max(30,(this.state.slotCushionMaxWidth||0)/e.slotsPerLabel)},t}(po);function pu(e,t){return[{span:e.slotCnt,minWidth:t||1}]}var fu=fo({deps:[ul],initialView:"timelineDay",views:{timeline:{component:du,usesMinMaxTime:!0,eventResizableFromStart:!0},timelineDay:{type:"timeline",duration:{days:1}},timelineWeek:{type:"timeline",duration:{weeks:1}},timelineMonth:{type:"timeline",duration:{months:1}},timelineYear:{type:"timeline",duration:{years:1}}}});function hu(e,t){var n=e.resourceEditable;if(null==n){var r=e.sourceId&&t.getCurrentData().eventSources[e.sourceId];r&&(n=r.extendedProps.resourceEditable),null==n&&null==(n=t.options.eventResourceEditable)&&(n=t.options.editable)}return n}var gu=function(){function e(){this.filterResources=dt(vu)}return e.prototype.transform=function(e,t){return t.viewSpec.optionDefaults.needsResourceData?{resourceStore:this.filterResources(t.resourceStore,t.options.filterResourcesWithEvents,t.eventStore,t.dateProfile.activeRange),resourceEntityExpansions:t.resourceEntityExpansions}:null},e}();function vu(e,t,n,o){if(t){var i=function(e,t){var n={};for(var r in e)for(var o=0,i=t[e[r].defId].resourceIds;o<i.length;o++){n[i[o]]=!0}return n}(function(e,t){return We(e,function(e){return pn(e.range,t)})}(n.instances,o),n.defs);return r(i,function(e,t){var n={};for(var r in e)for(var o=void 0;(o=t[r])&&(r=o.parentId);)n[r]=!0;return n}(i,e)),We(e,function(e,t){return i[t]})}return e}var mu=function(){function e(){this.buildResourceEventUis=dt(yu,Be),this.injectResourceEventUis=dt(Su)}return e.prototype.transform=function(e,t){return t.viewSpec.optionDefaults.needsResourceData?null:{eventUiBases:this.injectResourceEventUis(e.eventUiBases,e.eventStore.defs,this.buildResourceEventUis(t.resourceStore))}},e}();function yu(e){return Ae(e,function(e){return e.ui})}function Su(e,t,n){return Ae(e,function(e,r){return r?function(e,t,n){for(var r=[],o=0,i=t.resourceIds;o<i.length;o++){var a=i[o];n[a]&&r.unshift(n[a])}return r.unshift(e),Zt(r)}(e,t[r],n):e})}var Eu=[];function Cu(e){Eu.push(e)}function bu(e){return Eu[e]}var Du={id:String,resources:Lt,url:String,method:String,startParam:String,endParam:String,timeZoneParam:String,extraParams:Lt};function Ru(e){var t;if("string"==typeof e?t={url:e}:"function"==typeof e||Array.isArray(e)?t={resources:e}:"object"==typeof e&&e&&(t=e),t){var n=At(t,Du),r=n.refined;!function(e){for(var t in e)console.warn("Unknown resource prop '"+t+"'")}(n.extra);var o=function(e){for(var t=Eu,n=t.length-1;n>=0;n-=1){var r=t[n].parseMeta(e);if(r)return{meta:r,sourceDefId:n}}return null}(r);if(o)return{_raw:e,sourceId:te(),sourceDefId:o.sourceDefId,meta:o.meta,publicId:r.id||"",isFetching:!1,latestFetchId:"",fetchRange:null}}return null}function wu(e,t,n,r){if(e){var o=Ru(e);return Tu(o,n?t:null,r)}return null}function Tu(e,t,n){var o=bu(e.sourceDefId),i=te();return o.fetch({resourceSource:e,range:t,context:n},function(e){n.dispatch({type:"RECEIVE_RESOURCES",fetchId:i,fetchRange:t,rawResources:e.rawResources})},function(e){n.dispatch({type:"RECEIVE_RESOURCE_ERROR",fetchId:i,fetchRange:t,error:e})}),r(r({},e),{isFetching:!0,latestFetchId:i})}var xu={id:String,parentId:String,children:Lt,title:String,businessHours:Lt,extendedProps:Lt,eventEditable:Boolean,eventStartEditable:Boolean,eventDurationEditable:Boolean,eventConstraint:Lt,eventOverlap:Boolean,eventAllow:Lt,eventClassNames:jt,eventBackgroundColor:String,eventBorderColor:String,eventTextColor:String,eventColor:String};function Mu(e,t,n,o){void 0===t&&(t="");var i=At(e,xu),a=i.refined,s=i.extra,l={id:a.id||"_fc:"+te(),parentId:a.parentId||t,title:a.title||"",businessHours:a.businessHours?ur(a.businessHours,o):null,ui:Yt({editable:a.eventEditable,startEditable:a.eventStartEditable,durationEditable:a.eventDurationEditable,constraint:a.eventConstraint,overlap:a.eventOverlap,allow:a.eventAllow,classNames:a.eventClassNames,backgroundColor:a.eventBackgroundColor,borderColor:a.eventBorderColor,textColor:a.eventTextColor,color:a.eventColor},o),extendedProps:r(r({},s),a.extendedProps)};if(Object.freeze(l.ui.classNames),Object.freeze(l.extendedProps),n[l.id]);else if(n[l.id]=l,a.children)for(var u=0,c=a.children;u<c.length;u++)Mu(c[u],l.id,n,o);return l}function ku(e){return 0===e.indexOf("_fc:")?"":e}var Pu={resourceId:String,resourceIds:Lt,resourceEditable:Boolean},Iu=function(){function e(e,t){this._context=e,this._resource=t}return e.prototype.setProp=function(e,t){var n=this._resource;this._context.dispatch({type:"SET_RESOURCE_PROP",resourceId:n.id,propName:e,propValue:t}),this.sync(n)},e.prototype.setExtendedProp=function(e,t){var n=this._resource;this._context.dispatch({type:"SET_RESOURCE_EXTENDED_PROP",resourceId:n.id,propName:e,propValue:t}),this.sync(n)},e.prototype.sync=function(t){var n=this._context,r=t.id;this._resource=n.getCurrentData().resourceStore[r],n.emitter.trigger("resourceChange",{oldResource:new e(n,t),resource:this,revert:function(){var e;n.dispatch({type:"ADD_RESOURCE",resourceHash:(e={},e[r]=t,e)})}})},e.prototype.remove=function(){var e=this._context,t=this._resource,n=t.id;e.dispatch({type:"REMOVE_RESOURCE",resourceId:n}),e.emitter.trigger("resourceRemove",{resource:this,revert:function(){var r;e.dispatch({type:"ADD_RESOURCE",resourceHash:(r={},r[n]=t,r)})}})},e.prototype.getParent=function(){var t=this._context,n=this._resource.parentId;return n?new e(t,t.getCurrentData().resourceSource[n]):null},e.prototype.getChildren=function(){var t=this._resource.id,n=this._context,r=n.getCurrentData().resourceStore,o=[];for(var i in r)r[i].parentId===t&&o.push(new e(n,r[i]));return o},e.prototype.getEvents=function(){var e=this._resource.id,t=this._context,n=t.getCurrentData().eventStore,r=n.defs,o=n.instances,i=[];for(var a in o){var s=o[a],l=r[s.defId];-1!==l.resourceIds.indexOf(e)&&i.push(new Yn(t,l,s))}return i},Object.defineProperty(e.prototype,"id",{get:function(){return ku(this._resource.id)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"title",{get:function(){return this._resource.title},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"eventConstraint",{get:function(){return this._resource.ui.constraints[0]||null},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"eventOverlap",{get:function(){return this._resource.ui.overlap},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"eventAllow",{get:function(){return this._resource.ui.allows[0]||null},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"eventBackgroundColor",{get:function(){return this._resource.ui.backgroundColor},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"eventBorderColor",{get:function(){return this._resource.ui.borderColor},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"eventTextColor",{get:function(){return this._resource.ui.textColor},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"eventClassNames",{get:function(){return this._resource.ui.classNames},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"extendedProps",{get:function(){return this._resource.extendedProps},enumerable:!1,configurable:!0}),e.prototype.toPlainObject=function(e){void 0===e&&(e={});var t=this._resource,n=t.ui,o=this.id,i={};return o&&(i.id=o),t.title&&(i.title=t.title),e.collapseEventColor&&n.backgroundColor&&n.backgroundColor===n.borderColor?i.eventColor=n.backgroundColor:(n.backgroundColor&&(i.eventBackgroundColor=n.backgroundColor),n.borderColor&&(i.eventBorderColor=n.borderColor)),n.textColor&&(i.eventTextColor=n.textColor),n.classNames.length&&(i.eventClassNames=n.classNames),Object.keys(t.extendedProps).length&&(e.collapseExtendedProps?r(i,t.extendedProps):i.extendedProps=t.extendedProps),i},e.prototype.toJSON=function(){return this.toPlainObject()},e}();qn.prototype.addResource=function(e,t){var n,r=this;void 0===t&&(t=!0);var o,i,a=this.getCurrentData();e instanceof Iu?((n={})[(i=e._resource).id]=i,o=n):i=Mu(e,"",o={},a),this.dispatch({type:"ADD_RESOURCE",resourceHash:o}),t&&this.trigger("_scrollRequest",{resourceId:i.id});var s=new Iu(a,i);return a.emitter.trigger("resourceAdd",{resource:s,revert:function(){r.dispatch({type:"REMOVE_RESOURCE",resourceId:i.id})}}),s},qn.prototype.getResourceById=function(e){e=String(e);var t=this.getCurrentData();if(t.resourceStore){var n=t.resourceStore[e];if(n)return new Iu(t,n)}return null},qn.prototype.getResources=function(){var e=this.getCurrentData(),t=e.resourceStore,n=[];if(t)for(var r in t)n.push(new Iu(e,t[r]));return n},qn.prototype.getTopLevelResources=function(){var e=this.getCurrentData(),t=e.resourceStore,n=[];if(t)for(var r in t)t[r].parentId||n.push(new Iu(e,t[r]));return n},qn.prototype.refetchResources=function(){this.dispatch({type:"REFETCH_RESOURCES"})};var _u=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return n(t,e),t.prototype.getKeyInfo=function(e){return r({"":{}},e.resourceStore)},t.prototype.getKeysForDateSpan=function(e){return[e.resourceId||""]},t.prototype.getKeysForEventDef=function(e){var t=e.resourceIds;return t.length?t:[""]},t}(yr);function Nu(e,t){return r(r({},t),{constraints:function(e,t){return t.map(function(t){var n=t.defs;if(n)for(var r in n){var o=n[r].resourceIds;if(o.length&&-1===o.indexOf(e))return!1}return t})}(e,t.constraints)})}Yn.prototype.getResources=function(){var e=this._context.calendarApi;return this._def.resourceIds.map(function(t){return e.getResourceById(t)})},Yn.prototype.setResources=function(e){for(var t=[],n=0,r=e;n<r.length;n++){var o=r[n],i=null;"string"==typeof o?i=o:"number"==typeof o?i=String(o):o instanceof Iu?i=o.id:console.warn("unknown resource type: "+o),i&&t.push(i)}this.mutate({standardProps:{resourceIds:t}})};var Hu=le("id,title"),Ou={initialResources:Lt,resources:Lt,eventResourceEditable:Boolean,refetchResourcesOnNavigate:Boolean,resourceOrder:le,filterResourcesWithEvents:Boolean,resourceGroupField:String,resourceAreaWidth:Lt,resourceAreaColumns:Lt,resourcesInitiallyExpanded:Boolean,datesAboveResources:Boolean,needsResourceData:Boolean,resourceAreaHeaderClassNames:Lt,resourceAreaHeaderContent:Lt,resourceAreaHeaderDidMount:Lt,resourceAreaHeaderWillUnmount:Lt,resourceGroupLabelClassNames:Lt,resourceGroupLabelContent:Lt,resourceGroupLabelDidMount:Lt,resourceGroupLabelWillUnmount:Lt,resourceLabelClassNames:Lt,resourceLabelContent:Lt,resourceLabelDidMount:Lt,resourceLabelWillUnmount:Lt,resourceLaneClassNames:Lt,resourceLaneContent:Lt,resourceLaneDidMount:Lt,resourceLaneWillUnmount:Lt,resourceGroupLaneClassNames:Lt,resourceGroupLaneContent:Lt,resourceGroupLaneDidMount:Lt,resourceGroupLaneWillUnmount:Lt},Wu={resourcesSet:Lt,resourceAdd:Lt,resourceChange:Lt,resourceRemove:Lt};function Au(e){return zr(Xr.Consumer,null,function(t){var n=t.options,r={resource:new Iu(t,e.resource),date:e.date?t.dateEnv.toDate(e.date):null,view:t.viewApi},o={"data-resource-id":e.resource.id,"data-date":e.date?at(e.date):void 0};return zr(vo,{hookProps:r,classNames:n.resourceLabelClassNames,content:n.resourceLabelContent,defaultContent:Lu,didMount:n.resourceLabelDidMount,willUnmount:n.resourceLabelWillUnmount},function(t,n,r,i){return e.children(t,n,o,r,i)})})}function Lu(e){return e.resource.title||e.resource.id}Cu({ignoreRange:!0,parseMeta:function(e){return Array.isArray(e.resources)?e.resources:null},fetch:function(e,t){t({rawResources:e.resourceSource.meta})}}),Cu({parseMeta:function(e){return"function"==typeof e.resources?e.resources:null},fetch:function(e,t,n){var r=e.context.dateEnv,o=e.resourceSource.meta,i=e.range?{start:r.toDate(e.range.start),end:r.toDate(e.range.end),startStr:r.formatIso(e.range.start),endStr:r.formatIso(e.range.end),timeZone:r.timeZone}:{};Nr(o.bind(null,i),function(e){t({rawResources:e})},n)}}),Cu({parseMeta:function(e){return e.url?{url:e.url,method:(e.method||"GET").toUpperCase(),extraParams:e.extraParams}:null},fetch:function(e,t,n){var o=e.resourceSource.meta,i=function(e,t,n){var o,i,a,s,l=n.dateEnv,u=n.options,c={};return t&&(null==(o=e.startParam)&&(o=u.startParam),null==(i=e.endParam)&&(i=u.endParam),null==(a=e.timeZoneParam)&&(a=u.timeZoneParam),c[o]=l.formatIso(t.start),c[i]=l.formatIso(t.end),"local"!==l.timeZone&&(c[a]=l.timeZone)),s="function"==typeof e.extraParams?e.extraParams():e.extraParams||{},r(c,s),c}(o,e.range,e.context);Uo(o.method,o.url,i,function(e,n){t({rawResources:e,xhr:n})},function(e,t){n({message:e,xhr:t})})}});var Uu=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return n(t,e),t.prototype.render=function(){var e=this.props;return zr(Au,{resource:e.resource,date:e.date},function(t,n,o,i,a){return zr("th",r({ref:t,className:["fc-col-header-cell","fc-resource"].concat(n).join(" "),colSpan:e.colSpan},o),zr("div",{className:"fc-scrollgrid-sync-inner"},zr("span",{className:["fc-col-header-cell-cushion",e.isSticky?"fc-sticky":""].join(" "),ref:i},a)))})},t}($r),Bu=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.buildDateFormat=dt(zu),t}return n(t,e),t.prototype.render=function(){var e=this,t=this.props,n=this.context,r=this.buildDateFormat(n.options.dayHeaderFormat,t.datesRepDistinctDays,t.dates.length);return zr(Ti,{unit:"day"},function(o,i){return 1===t.dates.length?e.renderResourceRow(t.resources,t.dates[0]):n.options.datesAboveResources?e.renderDayAndResourceRows(t.dates,r,i,t.resources):e.renderResourceAndDayRows(t.resources,t.dates,r,i)})},t.prototype.renderResourceRow=function(e,t){var n=e.map(function(e){return zr(Uu,{key:e.id,resource:e,colSpan:1,date:t})});return this.buildTr(n,"resources")},t.prototype.renderDayAndResourceRows=function(e,t,n,r){for(var o=[],i=[],a=0,s=e;a<s.length;a++){var l=s[a];o.push(this.renderDateCell(l,t,n,r.length,null,!0));for(var u=0,c=r;u<c.length;u++){var d=c[u];i.push(zr(Uu,{key:d.id+":"+l.toISOString(),resource:d,colSpan:1,date:l}))}}return zr(jr,null,this.buildTr(o,"day"),this.buildTr(i,"resources"))},t.prototype.renderResourceAndDayRows=function(e,t,n,r){for(var o=[],i=[],a=0,s=e;a<s.length;a++){var l=s[a];o.push(zr(Uu,{key:l.id,resource:l,colSpan:t.length,isSticky:!0}));for(var u=0,c=t;u<c.length;u++){var d=c[u];i.push(this.renderDateCell(d,n,r,1,l))}}return zr(jr,null,this.buildTr(o,"day"),this.buildTr(i,"resources"))},t.prototype.renderDateCell=function(e,t,n,r,o,i){var a=this.props,s=o?":"+o.id:"",l=o?{resource:new Iu(this.context,o)}:{},u=o?{"data-resource-id":o.id}:{};return a.datesRepDistinctDays?zr(Ri,{key:e.toISOString()+s,date:e,dateProfile:a.dateProfile,todayRange:n,colCnt:a.dates.length*a.resources.length,dayHeaderFormat:t,colSpan:r,isSticky:i,extraHookProps:l,extraDataAttrs:u}):zr(wi,{key:e.getUTCDay()+s,dow:e.getUTCDay(),dayHeaderFormat:t,colSpan:r,isSticky:i,extraHookProps:l,extraDataAttrs:u})},t.prototype.buildTr=function(e,t){var n=this.props.renderIntro;return e.length||(e=[zr("td",{key:0}," ")]),zr("tr",{key:t},n&&n(),e)},t}($r);function zu(e,t,n){return e||Ci(t,n)}var Vu=function(e){for(var t={},n=[],r=0;r<e.length;r+=1){var o=e[r].id;n.push(o),t[o]=r}this.ids=n,this.indicesById=t,this.length=e.length},Fu=function(){function e(e,t,n){this.dayTableModel=e,this.resources=t,this.context=n,this.resourceIndex=new Vu(t),this.rowCnt=e.rowCnt,this.colCnt=e.colCnt*t.length,this.cells=this.buildCells()}return e.prototype.buildCells=function(){for(var e=this.rowCnt,t=this.dayTableModel,n=this.resources,r=[],o=0;o<e;o+=1){for(var i=[],a=0;a<t.colCnt;a+=1)for(var s=0;s<n.length;s+=1){var l=n[s],u={resource:new Iu(this.context,l)},c={"data-resource-id":l.id},d=t.cells[o][a].date;i[this.computeCol(a,s)]={key:l.id+":"+d.toISOString(),date:d,resource:l,extraHookProps:u,extraDataAttrs:c,extraClassNames:["fc-resource"]}}r.push(i)}return r},e}(),ju=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return n(t,e),t.prototype.computeCol=function(e,t){return t*this.dayTableModel.colCnt+e},t.prototype.computeColRanges=function(e,t,n){return[{firstCol:this.computeCol(e,n),lastCol:this.computeCol(t,n),isStart:!0,isEnd:!0}]},t}(Fu),Gu=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return n(t,e),t.prototype.computeCol=function(e,t){return e*this.resources.length+t},t.prototype.computeColRanges=function(e,t,n){for(var r=[],o=e;o<=t;o+=1){var i=this.computeCol(o,n);r.push({firstCol:i,lastCol:i,isStart:o===e,isEnd:o===t})}return r},t}(Fu),qu=[],Yu=function(){function e(){this.joinDateSelection=dt(this.joinSegs),this.joinBusinessHours=dt(this.joinSegs),this.joinFgEvents=dt(this.joinSegs),this.joinBgEvents=dt(this.joinSegs),this.joinEventDrags=dt(this.joinInteractions),this.joinEventResizes=dt(this.joinInteractions)}return e.prototype.joinProps=function(e,t){for(var n=[],r=[],i=[],a=[],s=[],l=[],u="",c=0,d=t.resourceIndex.ids.concat([""]);c<d.length;c++){var p=d[c],f=e[p];n.push(f.dateSelectionSegs),r.push(p?f.businessHourSegs:qu),i.push(p?f.fgEventSegs:qu),a.push(f.bgEventSegs),s.push(f.eventDrag),l.push(f.eventResize),u=u||f.eventSelection}return{dateSelectionSegs:this.joinDateSelection.apply(this,o([t],n)),businessHourSegs:this.joinBusinessHours.apply(this,o([t],r)),fgEventSegs:this.joinFgEvents.apply(this,o([t],i)),bgEventSegs:this.joinBgEvents.apply(this,o([t],a)),eventDrag:this.joinEventDrags.apply(this,o([t],s)),eventResize:this.joinEventResizes.apply(this,o([t],l)),eventSelection:u}},e.prototype.joinSegs=function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];for(var r=e.resources.length,o=[],i=0;i<r;i+=1){for(var a=0,s=t[i];a<s.length;a++){var l=s[a];o.push.apply(o,this.transformSeg(l,e,i))}for(var u=0,c=t[r];u<c.length;u++)l=c[u],o.push.apply(o,this.transformSeg(l,e,i))}return o},e.prototype.expandSegs=function(e,t){for(var n=e.resources.length,r=[],o=0;o<n;o+=1)for(var i=0,a=t;i<a.length;i++){var s=a[i];r.push.apply(r,this.transformSeg(s,e,o))}return r},e.prototype.joinInteractions=function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];for(var o=e.resources.length,i={},a=[],s=!1,l=!1,u=0;u<o;u+=1){var c=t[u];if(c){s=!0;for(var d=0,p=c.segs;d<p.length;d++){var f=p[d];a.push.apply(a,this.transformSeg(f,e,u))}r(i,c.affectedInstances),l=l||c.isEvent}if(t[o])for(var h=0,g=t[o].segs;h<g.length;h++)f=g[h],a.push.apply(a,this.transformSeg(f,e,u))}return s?{affectedInstances:i,segs:a,isEvent:l}:null},e}(),Zu=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return n(t,e),t.prototype.getKeyInfo=function(e){var t=e.resourceDayTableModel,n=Ae(t.resourceIndex.indicesById,function(e){return t.resources[e]});return n[""]={},n},t.prototype.getKeysForDateSpan=function(e){return[e.resourceId||""]},t.prototype.getKeysForEventDef=function(e){var t=e.resourceIds;return t.length?t:[""]},t}(yr);function Xu(e,t){return Ku(e,[],t,!1,{},!0).map(function(e){return e.resource})}function Ku(e,t,n,r,o,i){var a=[];return function e(t,n,r,o,i,a,s){for(var l=0;l<t.length;l+=1){var u=t[l],c=u.group;if(c)if(r){var d=n.length,p=o.length;if(e(u.children,n,r,o.concat(0),i,a,s),d<n.length){var f=n[d];(f.rowSpans=f.rowSpans.slice())[p]=n.length-d}}else{var h=c.spec.field+":"+c.value,g=null!=a[h]?a[h]:s;n.push({id:h,group:c,isExpanded:g}),g&&e(u.children,n,r,o,i+1,a,s)}else u.resource&&(g=null!=a[h=u.resource.id]?a[h]:s,n.push({id:h,rowSpans:o,depth:i,isExpanded:g,hasChildren:Boolean(u.children.length),resource:u.resource,resourceFields:u.resourceFields}),g&&e(u.children,n,r,o,i+1,a,s))}}(function(e,t,n,r){var o=function(e,t){var n={};for(var r in e){var o=e[r];n[r]={resource:o,resourceFields:Qu(o),children:[]}}for(var r in e)if((o=e[r]).parentId){var i=n[o.parentId];i&&$u(n[r],i.children,t)}return n}(e,r),i=[];for(var a in o){var s=o[a];s.resource.parentId||Ju(s,i,n,0,t,r)}return i}(e,r?-1:1,t,n),a,r,[],0,o,i),a}function Ju(e,t,n,r,o,i){n.length&&(-1===o||r<=o)?Ju(e,function(e,t,n){var r,o,i=e.resourceFields[n.field];if(n.order){for(o=0;o<t.length;o+=1)if((s=t[o]).group){var a=de(i,s.group.value)*n.order;if(0===a){r=s;break}if(a<0)break}}else for(o=0;o<t.length;o+=1){var s;if((s=t[o]).group&&i===s.group.value){r=s;break}}return r||(r={group:{value:i,spec:n},children:[]},t.splice(o,0,r)),r}(e,t,n[0]).children,n.slice(1),r+1,o,i):$u(e,t,i)}function $u(e,t,n){var r;for(r=0;r<t.length&&!(ue(t[r].resourceFields,e.resourceFields,n)>0);r+=1);t.splice(r,0,e)}function Qu(e){var t=r(r(r({},e.extendedProps),e.ui),e);return delete t.ui,delete t.extendedProps,t}function ec(e,t){return e.spec===t.spec&&e.value===t.value}var tc=fo({deps:[ul],reducers:[function(e,t,n){var o=function(e,t,n){var o=n.options,i=n.dateProfile;if(!e||!t)return wu(o.initialResources||o.resources,i.activeRange,o.refetchResourcesOnNavigate,n);switch(t.type){case"RESET_RESOURCE_SOURCE":return wu(t.resourceSourceInput,i.activeRange,o.refetchResourcesOnNavigate,n);case"PREV":case"NEXT":case"CHANGE_DATE":case"CHANGE_VIEW_TYPE":return function(e,t,n,r){return!n||function(e){return Boolean(bu(e.sourceDefId).ignoreRange)}(e)||e.fetchRange&&dn(e.fetchRange,t)?e:Tu(e,t,r)}(e,i.activeRange,o.refetchResourcesOnNavigate,n);case"RECEIVE_RESOURCES":case"RECEIVE_RESOURCE_ERROR":return function(e,t,n){return t===e.latestFetchId?r(r({},e),{isFetching:!1,fetchRange:n}):e}(e,t.fetchId,t.fetchRange);case"REFETCH_RESOURCES":return Tu(e,i.activeRange,n);default:return e}}(e&&e.resourceSource,t,n);return{resourceSource:o,resourceStore:function(e,t,n,o){if(!e||!t)return{};switch(t.type){case"RECEIVE_RESOURCES":return function(e,t,n,r,o){if(r.latestFetchId===n){for(var i={},a=0,s=t;a<s.length;a++)Mu(s[a],"",i,o);return i}return e}(e,t.rawResources,t.fetchId,n,o);case"ADD_RESOURCE":return i=e,a=t.resourceHash,r(r({},i),a);case"REMOVE_RESOURCE":return function(e,t){var n=r({},e);for(var o in delete n[t],n)n[o].parentId===t&&(n[o]=r(r({},n[o]),{parentId:""}));return n}(e,t.resourceId);case"SET_RESOURCE_PROP":return function(e,t,n,o){var i,a,s=e[t];return s?r(r({},e),((i={})[t]=r(r({},s),((a={})[n]=o,a)),i)):e}(e,t.resourceId,t.propName,t.propValue);case"SET_RESOURCE_EXTENDED_PROP":return function(e,t,n,o){var i,a,s=e[t];return s?r(r({},e),((i={})[t]=r(r({},s),{extendedProps:r(r({},s.extendedProps),(a={},a[n]=o,a))}),i)):e}(e,t.resourceId,t.propName,t.propValue);default:return e}var i,a}(e&&e.resourceStore,t,o,n),resourceEntityExpansions:function(e,t){var n;if(!e||!t)return{};switch(t.type){case"SET_RESOURCE_ENTITY_EXPANDED":return r(r({},e),((n={})[t.id]=t.isExpanded,n));default:return e}}(e&&e.resourceEntityExpansions,t),loadingLevel:n.loadingLevel+(o&&o.isFetching?1:0)}}],eventRefiners:Pu,eventDefMemberAdders:[function(e){return{resourceIds:(t=e.resourceIds,(t||[]).map(function(e){return String(e)})).concat(e.resourceId?[e.resourceId]:[]),resourceEditable:e.resourceEditable};var t}],isDraggableTransformers:[function(e,t,n,r){if(!e){var o=r.getCurrentData();if(o.viewSpecs[o.currentViewType].optionDefaults.needsResourceData&&hu(t,r))return!0}return e}],eventDragMutationMassagers:[function(e,t,n){var r=t.dateSpan.resourceId,o=n.dateSpan.resourceId;r&&o&&r!==o&&(e.resourceMutation={matchResourceId:r,setResourceId:o})}],eventDefMutationAppliers:[function(e,t,n){var r=t.resourceMutation;if(r&&hu(e,n)){var o=e.resourceIds.indexOf(r.matchResourceId);if(-1!==o){var i=e.resourceIds.slice();i.splice(o,1),-1===i.indexOf(r.setResourceId)&&i.push(r.setResourceId),e.resourceIds=i}}}],dateSelectionTransformers:[function(e,t){var n=e.dateSpan.resourceId,r=t.dateSpan.resourceId;return n&&r?(!1!==e.component.allowAcrossResources||n===r)&&{resourceId:n}:null}],datePointTransforms:[function(e,t){return e.resourceId?{resource:t.calendarApi.getResourceById(e.resourceId)}:{}}],dateSpanTransforms:[function(e,t){return e.resourceId?{resource:t.calendarApi.getResourceById(e.resourceId)}:{}}],viewPropsTransformers:[gu,mu],isPropsValid:function(e,t){var n=(new _u).splitProps(r(r({},e),{resourceStore:t.getCurrentData().resourceStore}));for(var o in n){var i=n[o];if(o&&n[""]&&(i=r(r({},i),{eventStore:Vt(n[""].eventStore,i.eventStore),eventUiBases:r(r({},n[""].eventUiBases),i.eventUiBases)})),!ao(i,t,{resourceId:o},Nu.bind(null,o)))return!1}return!0},externalDefTransforms:[function(e){return e.resourceId?{resourceId:e.resourceId}:{}}],eventResizeJoinTransforms:[function(e,t){return(!1!==e.component.allowAcrossResources||e.dateSpan.resourceId===t.dateSpan.resourceId)&&null}],eventDropTransformers:[function(e,t){var n=e.resourceMutation;if(n){var r=t.calendarApi;return{oldResource:r.getResourceById(n.matchResourceId),newResource:r.getResourceById(n.setResourceId)}}return{oldResource:null,newResource:null}}],optionChangeHandlers:{resources:function(e,t){t.getCurrentData().resourceSource._raw!==e&&t.dispatch({type:"RESET_RESOURCE_SOURCE",resourceSourceInput:e})}},optionRefiners:Ou,listenerRefiners:Wu,propSetHandlers:{resourceStore:function(e,t){var n=t.emitter;n.hasHandlers("resourcesSet")&&n.trigger("resourcesSet",function(e,t){var n=[];for(var r in e)n.push(new Iu(t,e[r]));return n}(e,t))}}}),nc=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return n(t,e),t.prototype.transformSeg=function(e,t,n){return t.computeColRanges(e.firstCol,e.lastCol,n).map(function(t){return r(r(r({},e),t),{isStart:e.isStart&&t.isStart,isEnd:e.isEnd&&t.isEnd})})},t}(Yu),rc=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.allowAcrossResources=!1,t.splitter=new Zu,t.slicers={},t.joiner=new nc,t.tableRef=Fr(),t.handleRootEl=function(e){e?t.context.registerInteractiveComponent(t,{el:e}):t.context.unregisterInteractiveComponent(t)},t}return n(t,e),t.prototype.render=function(){var e=this,t=this.props,n=this.context,o=t.resourceDayTableModel,i=t.nextDayThreshold,a=t.dateProfile,s=this.splitter.splitProps(t);this.slicers=Ae(s,function(t,n){return e.slicers[n]||new ls});var l=Ae(this.slicers,function(e,t){return e.sliceProps(s[t],a,i,n,o.dayTableModel)});return this.allowAcrossResources=1===o.dayTableModel.colCnt,zr(is,r({forPrint:t.forPrint,ref:this.tableRef,elRef:this.handleRootEl},this.joiner.joinProps(l,o),{cells:o.cells,dateProfile:a,colGroupNode:t.colGroupNode,tableMinWidth:t.tableMinWidth,renderRowIntro:t.renderRowIntro,dayMaxEvents:t.dayMaxEvents,dayMaxEventRows:t.dayMaxEventRows,showWeekNumbers:t.showWeekNumbers,expandRows:t.expandRows,headerAlignElRef:t.headerAlignElRef,clientWidth:t.clientWidth,clientHeight:t.clientHeight}))},t.prototype.prepareHits=function(){this.tableRef.current.prepareHits()},t.prototype.queryHit=function(e,t){var n=this.tableRef.current.positionToHit(e,t);return n?{component:this,dateSpan:{range:n.dateSpan.range,allDay:n.dateSpan.allDay,resourceId:this.props.resourceDayTableModel.cells[n.row][n.col].resource.id},dayEl:n.dayEl,rect:{left:n.relativeRect.left,right:n.relativeRect.right,top:n.relativeRect.top,bottom:n.relativeRect.bottom},layer:0}:null},t}(po),oc=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.flattenResources=dt(Xu),t.buildResourceDayTableModel=dt(ic),t.headerRef=Fr(),t.tableRef=Fr(),t}return n(t,e),t.prototype.render=function(){var e=this,t=this.props,n=this.context,r=n.options,o=r.resourceOrder||Hu,i=this.flattenResources(t.resourceStore,o),a=this.buildResourceDayTableModel(t.dateProfile,n.dateProfileGenerator,i,r.datesAboveResources,n),s=r.dayHeaders&&zr(Bu,{ref:this.headerRef,resources:i,dateProfile:t.dateProfile,dates:a.dayTableModel.headerDates,datesRepDistinctDays:!0}),l=function(n){return zr(rc,{ref:e.tableRef,dateProfile:t.dateProfile,resourceDayTableModel:a,businessHours:t.businessHours,eventStore:t.eventStore,eventUiBases:t.eventUiBases,dateSelection:t.dateSelection,eventSelection:t.eventSelection,eventDrag:t.eventDrag,eventResize:t.eventResize,nextDayThreshold:r.nextDayThreshold,tableMinWidth:n.tableMinWidth,colGroupNode:n.tableColGroupNode,dayMaxEvents:r.dayMaxEvents,dayMaxEventRows:r.dayMaxEventRows,showWeekNumbers:r.weekNumbers,expandRows:!t.isHeightAuto,headerAlignElRef:e.headerElRef,clientWidth:n.clientWidth,clientHeight:n.clientHeight,forPrint:t.forPrint})};return r.dayMinWidth?this.renderHScrollLayout(s,l,a.colCnt,r.dayMinWidth):this.renderSimpleLayout(s,l)},t}(Ua);function ic(e,t,n,r,o){var i=ds(e,t);return r?new Gu(i,n,o):new ju(i,n,o)}var ac=fo({deps:[ul,tc,ps],initialView:"resourceDayGridDay",views:{resourceDayGrid:{type:"dayGrid",component:oc,needsResourceData:!0},resourceDayGridDay:{type:"resourceDayGrid",duration:{days:1}},resourceDayGridWeek:{type:"resourceDayGrid",duration:{weeks:1}},resourceDayGridMonth:{type:"resourceDayGrid",duration:{months:1},monthMode:!0,fixedWeekCount:!0}}}),sc=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return n(t,e),t.prototype.transformSeg=function(e,t,n){return[r(r({},e),{col:t.computeCol(e.col,n)})]},t}(Yu),lc=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.allowAcrossResources=!1,t.buildDayRanges=dt(Bs),t.splitter=new Zu,t.slicers={},t.joiner=new sc,t.timeColsRef=Fr(),t.handleRootEl=function(e){e?t.context.registerInteractiveComponent(t,{el:e}):t.context.unregisterInteractiveComponent(t)},t}return n(t,e),t.prototype.render=function(){var e=this,t=this.props,n=this.context,o=n.dateEnv,i=n.options,a=t.dateProfile,s=t.resourceDayTableModel,l=this.dayRanges=this.buildDayRanges(s.dayTableModel,a,o),u=this.splitter.splitProps(t);this.slicers=Ae(u,function(t,n){return e.slicers[n]||new Ls});var c=Ae(this.slicers,function(e,t){return e.sliceProps(u[t],a,null,n,l)});return this.allowAcrossResources=1===l.length,zr(Ti,{unit:i.nowIndicator?"minute":"day"},function(n,o){return zr(Ws,r({ref:e.timeColsRef,rootElRef:e.handleRootEl},e.joiner.joinProps(c,s),{dateProfile:a,axis:t.axis,slotDuration:t.slotDuration,slatMetas:t.slatMetas,cells:s.cells[0],tableColGroupNode:t.tableColGroupNode,tableMinWidth:t.tableMinWidth,clientWidth:t.clientWidth,clientHeight:t.clientHeight,expandRows:t.expandRows,nowDate:n,nowIndicatorSegs:i.nowIndicator&&e.buildNowIndicatorSegs(n),todayRange:o,onScrollTopRequest:t.onScrollTopRequest,forPrint:t.forPrint,onSlatCoords:t.onSlatCoords}))})},t.prototype.buildNowIndicatorSegs=function(e){var t=this.slicers[""].sliceNowDate(e,this.context,this.dayRanges);return this.joiner.expandSegs(this.props.resourceDayTableModel,t)},t.prototype.queryHit=function(e,t){var n=this.timeColsRef.current.positionToHit(e,t);return n?{component:this,dateSpan:{range:n.dateSpan.range,allDay:n.dateSpan.allDay,resourceId:this.props.resourceDayTableModel.cells[0][n.col].resource.id},dayEl:n.dayEl,rect:{left:n.relativeRect.left,right:n.relativeRect.right,top:n.relativeRect.top,bottom:n.relativeRect.bottom},layer:0}:null},t}(po),uc=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.flattenResources=dt(Xu),t.buildResourceTimeColsModel=dt(cc),t.buildSlatMetas=dt(Vs),t}return n(t,e),t.prototype.render=function(){var e=this,t=this.props,n=this.context,o=n.options,i=n.dateEnv,a=t.dateProfile,s=this.allDaySplitter.splitProps(t),l=o.resourceOrder||Hu,u=this.flattenResources(t.resourceStore,l),c=this.buildResourceTimeColsModel(a,n.dateProfileGenerator,u,o.datesAboveResources,n),d=this.buildSlatMetas(a.slotMinTime,a.slotMaxTime,o.slotLabelInterval,o.slotDuration,i),p=o.dayMinWidth,f=!p,h=p,g=o.dayHeaders&&zr(Bu,{resources:u,dates:c.dayTableModel.headerDates,dateProfile:a,datesRepDistinctDays:!0,renderIntro:f?this.renderHeadAxis:null}),v=!1!==o.allDaySlot&&function(n){return zr(rc,r({},s.allDay,{dateProfile:a,resourceDayTableModel:c,nextDayThreshold:o.nextDayThreshold,tableMinWidth:n.tableMinWidth,colGroupNode:n.tableColGroupNode,renderRowIntro:f?e.renderTableRowAxis:null,showWeekNumbers:!1,expandRows:!1,headerAlignElRef:e.headerElRef,clientWidth:n.clientWidth,clientHeight:n.clientHeight,forPrint:t.forPrint},e.getAllDayMaxEventProps()))},m=function(n){return zr(lc,r({},s.timed,{dateProfile:a,axis:f,slotDuration:o.slotDuration,slatMetas:d,resourceDayTableModel:c,tableColGroupNode:n.tableColGroupNode,tableMinWidth:n.tableMinWidth,clientWidth:n.clientWidth,clientHeight:n.clientHeight,onSlatCoords:e.handleSlatCoords,expandRows:n.expandRows,forPrint:t.forPrint,onScrollTopRequest:e.handleScrollTopRequest}))};return h?this.renderHScrollLayout(g,v,m,c.colCnt,p,d,this.state.slatCoords):this.renderSimpleLayout(g,v,m)},t}(Ss);function cc(e,t,n,r,o){var i=js(e,t);return r?new Gu(i,n,o):new ju(i,n,o)}var dc=fo({deps:[ul,tc,Gs],initialView:"resourceTimeGridDay",views:{resourceTimeGrid:{type:"timeGrid",component:uc,needsResourceData:!0},resourceTimeGridDay:{type:"resourceTimeGrid",duration:{days:1}},resourceTimeGridWeek:{type:"resourceTimeGrid",duration:{weeks:1}}}});function pc(e){for(var t=e.depth,n=e.hasChildren,r=e.isExpanded,i=e.onExpanderClick,a=[],s=0;s<t;s+=1)a.push(zr("span",{className:"fc-icon"}));var l=["fc-icon"];return n&&(r?l.push("fc-icon-minus-square"):l.push("fc-icon-plus-square")),a.push(zr("span",{className:"fc-datagrid-expander"+(n?"":" fc-datagrid-expander-placeholder"),onClick:i},zr("span",{className:l.join(" ")}))),zr.apply(void 0,o([jr,{}],a))}function fc(e){return{resource:new Iu(e.context,e.resource),fieldValue:e.fieldValue,view:e.context.viewApi}}var hc=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return n(t,e),t.prototype.render=function(){var e=this.props;return zr(yo,{hookProps:e.hookProps,content:e.colSpec.cellContent,defaultContent:gc},function(e,t){return zr("span",{className:"fc-datagrid-cell-main",ref:e},t)})},t}($r);function gc(e){return e.fieldValue||zr(jr,null," ")}var vc=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.refineHookProps=pt(fc),t.normalizeClassNames=Co(),t.onExpanderClick=function(e){var n=t.props;n.hasChildren&&t.context.dispatch({type:"SET_RESOURCE_ENTITY_EXPANDED",id:n.resource.id,isExpanded:!n.isExpanded})},t}return n(t,e),t.prototype.render=function(){var e=this,t=this.props,n=this.context,r=t.colSpec,o=this.refineHookProps({resource:t.resource,fieldValue:t.fieldValue,context:n}),i=this.normalizeClassNames(r.cellClassNames,o);return zr(Eo,{hookProps:o,didMount:r.cellDidMount,willUnmount:r.cellWillUnmount},function(n){return zr("td",{ref:n,"data-resource-id":t.resource.id,className:["fc-datagrid-cell","fc-resource"].concat(i).join(" ")},zr("div",{className:"fc-datagrid-cell-frame",style:{height:t.innerHeight}},zr("div",{className:"fc-datagrid-cell-cushion fc-scrollgrid-sync-inner"},r.isMain&&zr(pc,{depth:t.depth,hasChildren:t.hasChildren,isExpanded:t.isExpanded,onExpanderClick:e.onExpanderClick}),zr(hc,{hookProps:o,colSpec:r}))))})},t}($r),mc=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return n(t,e),t.prototype.render=function(){var e=this.props,t=this.context,n=e.colSpec,r={groupValue:e.fieldValue,view:t.viewApi};return zr(vo,{hookProps:r,classNames:n.cellClassNames,content:n.cellContent,defaultContent:yc,didMount:n.cellDidMount,willUnmount:n.cellWillUnmount},function(t,n,r,o){return zr("td",{className:["fc-datagrid-cell","fc-resource-group"].concat(n).join(" "),rowSpan:e.rowSpan,ref:t},zr("div",{className:"fc-datagrid-cell-frame fc-datagrid-cell-frame-liquid"},zr("div",{className:"fc-datagrid-cell-cushion fc-sticky",ref:r},o)))})},t}($r);function yc(e){return e.groupValue||zr(jr,null," ")}var Sc=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return n(t,e),t.prototype.render=function(){var e=this.props,t=e.resource,n=e.rowSpans,r=e.depth,o=Qu(t);return zr("tr",null,e.colSpecs.map(function(i,a){var s=n[a];if(0===s)return null;null==s&&(s=1);var l=i.field?o[i.field]:t.title||ku(t.id);return s>1?zr(mc,{key:a,colSpec:i,fieldValue:l,rowSpan:s}):zr(vc,{key:a,colSpec:i,resource:t,fieldValue:l,depth:r,hasChildren:e.hasChildren,isExpanded:e.isExpanded,innerHeight:e.innerHeight})}))},t}($r);Sc.addPropsEquality({rowSpans:ct});var Ec=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.innerInnerRef=Fr(),t.onExpanderClick=function(){var e=t.props;t.context.dispatch({type:"SET_RESOURCE_ENTITY_EXPANDED",id:e.id,isExpanded:!e.isExpanded})},t}return n(t,e),t.prototype.render=function(){var e=this,t=this.props,n=this.context,r={groupValue:t.group.value,view:n.viewApi},o=t.group.spec;return zr("tr",null,zr(vo,{hookProps:r,classNames:o.labelClassNames,content:o.labelContent,defaultContent:Cc,didMount:o.labelDidMount,willUnmount:o.labelWillUnmount},function(r,o,i,a){return zr("td",{ref:r,colSpan:t.spreadsheetColCnt,className:["fc-datagrid-cell","fc-resource-group",n.theme.getClass("tableCellShaded")].concat(o).join(" ")},zr("div",{className:"fc-datagrid-cell-frame",style:{height:t.innerHeight}},zr("div",{className:"fc-datagrid-cell-cushion fc-scrollgrid-sync-inner",ref:e.innerInnerRef},zr(pc,{depth:0,hasChildren:!0,isExpanded:t.isExpanded,onExpanderClick:e.onExpanderClick}),zr("span",{className:"fc-datagrid-cell-main",ref:i},a))))}))},t}($r);function Cc(e){return e.groupValue||zr(jr,null," ")}Ec.addPropsEquality({group:ec});var bc=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.resizerElRefs=new Wi(t._handleColResizerEl.bind(t)),t.colDraggings={},t}return n(t,e),t.prototype.render=function(){var e=this,t=this.props,n=t.colSpecs,r=t.superHeaderRendering,o=t.rowInnerHeights,i={view:this.context.viewApi},a=[];if(o=o.slice(),r){var s=o.shift();a.push(zr("tr",{key:"row-super"},zr(vo,{hookProps:i,classNames:r.headerClassNames,content:r.headerContent,didMount:r.headerDidMount,willUnmount:r.headerWillUnmount},function(e,t,r,o){return zr("th",{colSpan:n.length,ref:e,className:["fc-datagrid-cell","fc-datagrid-cell-super"].concat(t).join(" ")},zr("div",{className:"fc-datagrid-cell-frame",style:{height:s}},zr("div",{className:"fc-datagrid-cell-cushion fc-scrollgrid-sync-inner",ref:r},o)))})))}var l=o.shift();return a.push(zr("tr",{key:"row"},n.map(function(t,r){var o=r===n.length-1;return zr(vo,{key:r,hookProps:i,classNames:t.headerClassNames,content:t.headerContent,didMount:t.headerDidMount,willUnmount:t.headerWillUnmount},function(n,i,a,s){return zr("th",{ref:n,className:["fc-datagrid-cell"].concat(i).join(" ")},zr("div",{className:"fc-datagrid-cell-frame",style:{height:l}},zr("div",{className:"fc-datagrid-cell-cushion fc-scrollgrid-sync-inner"},t.isMain&&zr("span",{className:"fc-datagrid-expander fc-datagrid-expander-placeholder"},zr("span",{className:"fc-icon"})),zr("span",{className:"fc-datagrid-cell-main",ref:a},s)),!o&&zr("div",{className:"fc-datagrid-cell-resizer",ref:e.resizerElRefs.createRef(r)})))})}))),zr(jr,null,a)},t.prototype._handleColResizerEl=function(e,t){var n,r=this.colDraggings;e?(n=this.initColResizing(e,parseInt(t,10)))&&(r[t]=n):(n=r[t])&&(n.destroy(),delete r[t])},t.prototype.initColResizing=function(e,t){var n=this.context,r=n.pluginHooks,o=n.isRtl,i=this.props.onColWidthChange,a=r.elementDraggingImpl;if(a){var s,l,u=new a(e);return u.emitter.on("dragstart",function(){var n=j(V(e,"tr"),"th");l=n.map(function(e){return e.getBoundingClientRect().width}),s=l[t]}),u.emitter.on("dragmove",function(e){l[t]=Math.max(s+e.deltaX*(o?-1:1),20),i&&i(l.slice())}),u.setAutoScrollEnabled(!1),u}return null},t}($r),Dc=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return n(t,e),t.prototype.render=function(){var e=this.props,t=this.context,n={resource:new Iu(t,e.resource)};return zr(yo,{hookProps:n,content:t.options.resourceLaneContent},function(e,t){return t&&zr("div",{className:"fc-timeline-lane-misc",ref:e},t)})},t}($r),Rc=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.refineHookProps=pt(wc),t.normalizeClassNames=Co(),t.handleHeightChange=function(e,n){t.props.onHeightChange&&t.props.onHeightChange(V(e,"tr"),n)},t}return n(t,e),t.prototype.render=function(){var e=this,t=this.props,n=this.context,r=n.options,o=this.refineHookProps({resource:t.resource,context:n}),i=this.normalizeClassNames(r.resourceLaneClassNames,o);return zr("tr",{ref:t.elRef},zr(Eo,{hookProps:o,didMount:r.resourceLaneDidMount,willUnmount:r.resourceLaneWillUnmount},function(n){return zr("td",{ref:n,className:["fc-timeline-lane","fc-resource"].concat(i).join(" "),"data-resource-id":t.resource.id},zr("div",{className:"fc-timeline-lane-frame",style:{height:t.innerHeight}},zr(Dc,{resource:t.resource}),zr(uu,{dateProfile:t.dateProfile,tDateProfile:t.tDateProfile,nowDate:t.nowDate,todayRange:t.todayRange,nextDayThreshold:t.nextDayThreshold,businessHours:t.businessHours,eventStore:t.eventStore,eventUiBases:t.eventUiBases,dateSelection:t.dateSelection,eventSelection:t.eventSelection,eventDrag:t.eventDrag,eventResize:t.eventResize,timelineCoords:t.timelineCoords,onHeightChange:e.handleHeightChange})))}))},t}($r);function wc(e){return{resource:new Iu(e.context,e.resource)}}var Tc=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return n(t,e),t.prototype.render=function(){var e=this,t=this.props,n=this.props.renderingHooks,r={groupValue:t.groupValue,view:this.context.viewApi};return zr("tr",{ref:t.elRef},zr(vo,{hookProps:r,classNames:n.laneClassNames,content:n.laneContent,didMount:n.laneDidMount,willUnmount:n.laneWillUnmount},function(n,r,o,i){return zr("td",{ref:n,className:["fc-timeline-lane","fc-resource-group",e.context.theme.getClass("tableCellShaded")].concat(r).join(" ")},zr("div",{style:{height:t.innerHeight},ref:o},i))}))},t}($r),xc=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return n(t,e),t.prototype.render=function(){var e=this.props,t=this.context,n=e.rowElRefs,o=e.innerHeights;return zr("tbody",null,e.rowNodes.map(function(i,a){if(i.group)return zr(Tc,{key:i.id,elRef:n.createRef(i.id),groupValue:i.group.value,renderingHooks:i.group.spec,innerHeight:o[a]||""});if(i.resource){var s=i.resource;return zr(Rc,r({key:i.id,elRef:n.createRef(i.id)},e.splitProps[s.id],{resource:s,dateProfile:e.dateProfile,tDateProfile:e.tDateProfile,nowDate:e.nowDate,todayRange:e.todayRange,nextDayThreshold:t.options.nextDayThreshold,businessHours:s.businessHours||e.fallbackBusinessHours,innerHeight:o[a]||"",timelineCoords:e.slatCoords,onHeightChange:e.onRowHeightChange}))}return null}))},t}($r),Mc=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.rootElRef=Fr(),t.rowElRefs=new Wi,t}return n(t,e),t.prototype.render=function(){var e=this.props,t=this.context;return zr("table",{ref:this.rootElRef,className:"fc-scrollgrid-sync-table "+t.theme.getClass("table"),style:{minWidth:e.tableMinWidth,width:e.clientWidth,height:e.minHeight}},zr(xc,{rowElRefs:this.rowElRefs,rowNodes:e.rowNodes,dateProfile:e.dateProfile,tDateProfile:e.tDateProfile,nowDate:e.nowDate,todayRange:e.todayRange,splitProps:e.splitProps,fallbackBusinessHours:e.fallbackBusinessHours,slatCoords:e.slatCoords,innerHeights:e.innerHeights,onRowHeightChange:e.onRowHeightChange}))},t.prototype.componentDidMount=function(){this.updateCoords()},t.prototype.componentDidUpdate=function(){this.updateCoords()},t.prototype.componentWillUnmount=function(){this.props.onRowCoords&&this.props.onRowCoords(null)},t.prototype.updateCoords=function(){var e,t=this.props;t.onRowCoords&&null!==t.clientWidth&&this.props.onRowCoords(new Or(this.rootElRef.current,(e=this.rowElRefs.currentMap,t.rowNodes.map(function(t){return e[t.id]})),!1,!0))},t}($r),kc=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.computeHasResourceBusinessHours=dt(Pc),t.resourceSplitter=new _u,t.bgSlicer=new ou,t.slatsRef=Fr(),t.state={slatCoords:null},t.handleEl=function(e){e?t.context.registerInteractiveComponent(t,{el:e}):t.context.unregisterInteractiveComponent(t)},t.handleSlatCoords=function(e){t.setState({slatCoords:e}),t.props.onSlatCoords&&t.props.onSlatCoords(e)},t.handleRowCoords=function(e){t.rowCoords=e,t.props.onRowCoords&&t.props.onRowCoords(e)},t}return n(t,e),t.prototype.render=function(){var e=this,t=this.props,n=this.state,r=this.context,o=t.dateProfile,i=t.tDateProfile,a=it(i.slotDuration).unit,s=this.computeHasResourceBusinessHours(t.rowNodes),l=this.resourceSplitter.splitProps(t),u=l[""],c=this.bgSlicer.sliceProps(u,o,i.isTimeScale?null:t.nextDayThreshold,r,o,r.dateProfileGenerator,i,r.dateEnv),d=n.slatCoords&&n.slatCoords.dateProfile===t.dateProfile?n.slatCoords:null;return zr("div",{ref:this.handleEl,className:"fc-timeline-body",style:{minWidth:t.tableMinWidth}},zr(Ti,{unit:a},function(n,a){return zr(jr,null,zr(nu,{ref:e.slatsRef,dateProfile:o,tDateProfile:i,nowDate:n,todayRange:a,clientWidth:t.clientWidth,tableColGroupNode:t.tableColGroupNode,tableMinWidth:t.tableMinWidth,onCoords:e.handleSlatCoords,onScrollLeftRequest:t.onScrollLeftRequest}),zr(ru,{businessHourSegs:s?null:c.businessHourSegs,bgEventSegs:c.bgEventSegs,timelineCoords:d,eventResizeSegs:c.eventResize?c.eventResize.segs:[],dateSelectionSegs:c.dateSelectionSegs,nowDate:n,todayRange:a}),zr(Mc,{rowNodes:t.rowNodes,dateProfile:o,tDateProfile:t.tDateProfile,nowDate:n,todayRange:a,splitProps:l,fallbackBusinessHours:s?t.businessHours:null,clientWidth:t.clientWidth,minHeight:t.expandRows?t.clientHeight:"",tableMinWidth:t.tableMinWidth,innerHeights:t.rowInnerHeights,slatCoords:d,onRowCoords:e.handleRowCoords,onRowHeightChange:t.onRowHeightChange}),r.options.nowIndicator&&d&&d.isDateInRange(n)&&zr("div",{className:"fc-timeline-now-indicator-container"},zr(ea,{isAxis:!1,date:n},function(e,t,r,o){return zr("div",{ref:e,className:["fc-timeline-now-indicator-line"].concat(t).join(" "),style:{left:d.dateToCoord(n)}},o)})))}))},t.prototype.queryHit=function(e,t){var n=this.rowCoords,r=n.topToIndex(t);if(null!=r){var o=this.props.rowNodes[r].resource;if(o){var i=this.slatsRef.current.positionToHit(e);if(i)return{component:this,dateSpan:{range:i.dateSpan.range,allDay:i.dateSpan.allDay,resourceId:o.id},rect:{left:i.left,right:i.right,top:n.tops[r],bottom:n.bottoms[r]},dayEl:i.dayEl,layer:0}}}return null},t}(po);function Pc(e){for(var t=0,n=e;t<n.length;t++){var r=n[t].resource;if(r&&r.businessHours)return!0}return!1}var Ic=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.scrollGridRef=Fr(),t.timeBodyScrollerElRef=Fr(),t.spreadsheetHeaderChunkElRef=Fr(),t.rootElRef=Fr(),t.state={resourceAreaWidthOverride:null},t}return n(t,e),t.prototype.render=function(){var e=this.props,t=this.state,n=this.context,r=n.options,o=!e.forPrint&&Zi(r),i=!e.forPrint&&Xi(r),a=[{type:"header",key:"header",syncRowHeights:!0,isSticky:o,chunks:[{key:"datagrid",elRef:this.spreadsheetHeaderChunkElRef,tableClassName:"fc-datagrid-header",rowContent:e.spreadsheetHeaderRows},{key:"divider",outerContent:zr("td",{className:"fc-resource-timeline-divider "+n.theme.getClass("tableCellShaded")})},{key:"timeline",content:e.timeHeaderContent}]},{type:"body",key:"body",syncRowHeights:!0,liquid:!0,expandRows:Boolean(r.expandRows),chunks:[{key:"datagrid",tableClassName:"fc-datagrid-body",rowContent:e.spreadsheetBodyRows},{key:"divider",outerContent:zr("td",{className:"fc-resource-timeline-divider "+n.theme.getClass("tableCellShaded")})},{key:"timeline",scrollerElRef:this.timeBodyScrollerElRef,content:e.timeBodyContent}]}];i&&a.push({type:"footer",key:"footer",isSticky:!0,chunks:[{key:"datagrid",content:Yi},{key:"divider",outerContent:zr("td",{className:"fc-resource-timeline-divider "+n.theme.getClass("tableCellShaded")})},{key:"timeline",content:Yi}]});var s=null!=t.resourceAreaWidthOverride?t.resourceAreaWidthOverride:r.resourceAreaWidth;return zr(Sl,{ref:this.scrollGridRef,elRef:this.rootElRef,liquid:!e.isHeightAuto&&!e.forPrint,colGroups:[{cols:e.spreadsheetCols,width:s},{cols:[]},{cols:e.timeCols}],sections:a})},t.prototype.forceTimeScroll=function(e){this.scrollGridRef.current.forceScrollLeft(2,e)},t.prototype.forceResourceScroll=function(e){this.scrollGridRef.current.forceScrollTop(1,e)},t.prototype.getResourceScroll=function(){return this.timeBodyScrollerElRef.current.scrollTop},t.prototype.componentDidMount=function(){this.initSpreadsheetResizing()},t.prototype.componentWillUnmount=function(){this.destroySpreadsheetResizing()},t.prototype.initSpreadsheetResizing=function(){var e=this,t=this.context,n=t.isRtl,r=t.pluginHooks.elementDraggingImpl,o=this.spreadsheetHeaderChunkElRef.current;if(r){var i,a,s=this.rootElRef.current,l=this.spreadsheetResizerDragging=new r(s,".fc-resource-timeline-divider");l.emitter.on("dragstart",function(){i=o.getBoundingClientRect().width,a=s.getBoundingClientRect().width}),l.emitter.on("dragmove",function(t){var r=i+t.deltaX*(n?-1:1);r=Math.max(r,30),r=Math.min(r,a-30),e.setState({resourceAreaWidthOverride:r})}),l.setAutoScrollEnabled(!1)}},t.prototype.destroySpreadsheetResizing=function(){this.spreadsheetResizerDragging&&this.spreadsheetResizerDragging.destroy()},t}($r),_c=function(e){function t(t,n){var r=e.call(this,t,n)||this;return r.processColOptions=dt(Oc),r.buildTimelineDateProfile=dt(Bl),r.hasNesting=dt(Hc),r.buildRowNodes=dt(Ku),r.layoutRef=Fr(),r.rowNodes=[],r.renderedRowNodes=[],r.buildRowIndex=dt(Nc),r.handleSlatCoords=function(e){r.setState({slatCoords:e})},r.handleRowCoords=function(e){r.rowCoords=e,r.scrollResponder.update(!1)},r.handleMaxCushionWidth=function(e){r.setState({slotCushionMaxWidth:Math.ceil(e)})},r.handleScrollLeftRequest=function(e){r.layoutRef.current.forceTimeScroll(e)},r.handleScrollRequest=function(e){var t=r.rowCoords,n=r.layoutRef.current,o=e.rowId||e.resourceId;if(t){if(o){var i=r.buildRowIndex(r.renderedRowNodes)[o];if(null!=i){var a=null!=e.fromBottom?t.bottoms[i]-e.fromBottom:t.tops[i];n.forceResourceScroll(a)}}return!0}return null},r.handleColWidthChange=function(e){r.setState({spreadsheetColWidths:e})},r.state={resourceAreaWidth:n.options.resourceAreaWidth,spreadsheetColWidths:[]},r}return n(t,e),t.prototype.render=function(){var e=this,t=this.props,n=this.state,r=this.context,o=r.options,i=r.viewSpec,a=this.processColOptions(r.options),s=a.superHeaderRendering,l=a.groupSpecs,u=a.orderSpecs,c=a.isVGrouping,d=a.colSpecs,p=this.buildTimelineDateProfile(t.dateProfile,r.dateEnv,o,r.dateProfileGenerator),f=this.rowNodes=this.buildRowNodes(t.resourceStore,l,u,c,t.resourceEntityExpansions,o.resourcesInitiallyExpanded),h=["fc-resource-timeline",this.hasNesting(f)?"":"fc-resource-timeline-flat","fc-timeline",!1===o.eventOverlap?"fc-timeline-overlap-disabled":"fc-timeline-overlap-enabled"],g=o.slotMinWidth,v=pu(p,g||this.computeFallbackSlotMinWidth(p));return zr(Ro,{viewSpec:i},function(o,i){return zr("div",{ref:o,className:h.concat(i).join(" ")},zr(Ic,{ref:e.layoutRef,forPrint:t.forPrint,isHeightAuto:t.isHeightAuto,spreadsheetCols:function(e,t,n){return void 0===n&&(n=""),e.map(function(e,r){return{className:e.isMain?"fc-main-col":"",width:t[r]||e.width||n}})}(d,n.spreadsheetColWidths,""),spreadsheetHeaderRows:function(t){return zr(bc,{superHeaderRendering:s,colSpecs:d,onColWidthChange:e.handleColWidthChange,rowInnerHeights:t.rowSyncHeights})},spreadsheetBodyRows:function(t){return zr(jr,null,e.renderSpreadsheetRows(f,d,t.rowSyncHeights))},timeCols:v,timeHeaderContent:function(r){return zr(Jl,{clientWidth:r.clientWidth,clientHeight:r.clientHeight,tableMinWidth:r.tableMinWidth,tableColGroupNode:r.tableColGroupNode,dateProfile:t.dateProfile,tDateProfile:p,slatCoords:n.slatCoords,rowInnerHeights:r.rowSyncHeights,onMaxCushionWidth:g?null:e.handleMaxCushionWidth})},timeBodyContent:function(n){return zr(kc,{dateProfile:t.dateProfile,clientWidth:n.clientWidth,clientHeight:n.clientHeight,tableMinWidth:n.tableMinWidth,tableColGroupNode:n.tableColGroupNode,expandRows:n.expandRows,tDateProfile:p,rowNodes:f,businessHours:t.businessHours,dateSelection:t.dateSelection,eventStore:t.eventStore,eventUiBases:t.eventUiBases,eventSelection:t.eventSelection,eventDrag:t.eventDrag,eventResize:t.eventResize,resourceStore:t.resourceStore,nextDayThreshold:r.options.nextDayThreshold,rowInnerHeights:n.rowSyncHeights,onSlatCoords:e.handleSlatCoords,onRowCoords:e.handleRowCoords,onScrollLeftRequest:e.handleScrollLeftRequest,onRowHeightChange:n.reportRowHeightChange})}}))})},t.prototype.renderSpreadsheetRows=function(e,t,n){return e.map(function(e,r){return e.group?zr(Ec,{key:e.id,id:e.id,spreadsheetColCnt:t.length,isExpanded:e.isExpanded,group:e.group,innerHeight:n[r]||""}):e.resource?zr(Sc,{key:e.id,colSpecs:t,rowSpans:e.rowSpans,depth:e.depth,isExpanded:e.isExpanded,hasChildren:e.hasChildren,resource:e.resource,innerHeight:n[r]||""}):null})},t.prototype.componentDidMount=function(){this.renderedRowNodes=this.rowNodes,this.scrollResponder=this.context.createScrollResponder(this.handleScrollRequest)},t.prototype.getSnapshotBeforeUpdate=function(){return this.props.forPrint?{}:{resourceScroll:this.queryResourceScroll()}},t.prototype.componentDidUpdate=function(e,t,n){this.renderedRowNodes=this.rowNodes,this.scrollResponder.update(e.dateProfile!==this.props.dateProfile),n.resourceScroll&&this.handleScrollRequest(n.resourceScroll)},t.prototype.componentWillUnmount=function(){this.scrollResponder.detach()},t.prototype.computeFallbackSlotMinWidth=function(e){return Math.max(30,(this.state.slotCushionMaxWidth||0)/e.slotsPerLabel)},t.prototype.queryResourceScroll=function(){var e=this.rowCoords,t=this.renderedRowNodes;if(e){for(var n=this.layoutRef.current,r=e.bottoms,o=n.getResourceScroll(),i={},a=0;a<r.length;a+=1){var s=t[a],l=r[a]-o;if(l>0){i.rowId=s.id,i.fromBottom=l;break}}return i}return null},t}($r);function Nc(e){for(var t={},n=0;n<e.length;n+=1)t[e[n].id]=n;return t}function Hc(e){for(var t=0,n=e;t<n.length;t++){var r=n[t];if(r.group)return!0;if(r.resource&&r.hasChildren)return!0}return!1}function Oc(e){var t=e.resourceAreaColumns||[],n=null;t.length?e.resourceAreaHeaderContent&&(n={headerClassNames:e.resourceAreaHeaderClassNames,headerContent:e.resourceAreaHeaderContent,headerDidMount:e.resourceAreaHeaderDidMount,headerWillUnmount:e.resourceAreaHeaderWillUnmount}):t.push({headerClassNames:e.resourceAreaHeaderClassNames,headerContent:e.resourceAreaHeaderContent||"Resources",headerDidMount:e.resourceAreaHeaderDidMount,headerWillUnmount:e.resourceAreaHeaderWillUnmount});for(var o=[],i=[],a=[],s=!1,l=0,u=t;l<u.length;l++){var c=u[l];c.group?i.push(r(r({},c),{cellClassNames:c.cellClassNames||e.resourceGroupLabelClassNames,cellContent:c.cellContent||e.resourceGroupLabelContent,cellDidMount:c.cellDidMount||e.resourceGroupLabelDidMount,cellWillUnmount:c.cellWillUnmount||e.resourceGroupLaneWillUnmount})):o.push(c)}var d=o[0];if(d.isMain=!0,d.cellClassNames=d.cellClassNames||e.resourceLabelClassNames,d.cellContent=d.cellContent||e.resourceLabelContent,d.cellDidMount=d.cellDidMount||e.resourceLabelDidMount,d.cellWillUnmount=d.cellWillUnmount||e.resourceLabelWillUnmount,i.length)a=i,s=!0;else{var p=e.resourceGroupField;p&&a.push({field:p,labelClassNames:e.resourceGroupLabelClassNames,labelContent:e.resourceGroupLabelContent,labelDidMount:e.resourceGroupLabelDidMount,labelWillUnmount:e.resourceGroupLabelWillUnmount,laneClassNames:e.resourceGroupLaneClassNames,laneContent:e.resourceGroupLaneContent,laneDidMount:e.resourceGroupLaneDidMount,laneWillUnmount:e.resourceGroupLaneWillUnmount})}for(var f=[],h=0,g=e.resourceOrder||Hu;h<g.length;h++){for(var v=g[h],m=!1,y=0,S=a;y<S.length;y++){var E=S[y];if(E.field===v.field){E.order=v.order,m=!0;break}}m||f.push(v)}return{superHeaderRendering:n,isVGrouping:s,groupSpecs:a,colSpecs:i.concat(o),orderSpecs:f}}_c.addStateEquality({spreadsheetColWidths:ct});var Wc=fo({deps:[ul,tc,fu],initialView:"resourceTimelineDay",views:{resourceTimeline:{type:"timeline",component:_c,needsResourceData:!0,resourceAreaWidth:"30%",resourcesInitiallyExpanded:!0,eventResizableFromStart:!0},resourceTimelineDay:{type:"resourceTimeline",duration:{days:1}},resourceTimelineWeek:{type:"resourceTimeline",duration:{weeks:1}},resourceTimelineMonth:{type:"resourceTimeline",duration:{months:1}},resourceTimelineYear:{type:"resourceTimeline",duration:{years:1}}}});return Vo.push(La,ps,Gs,nl,il,al,Il,Hl,fu,tc,ac,dc,Wc),e.AbstractResourceDayTableModel=Fu,e.BASE_OPTION_DEFAULTS=Pt,e.BASE_OPTION_REFINERS=kt,e.BaseComponent=$r,e.BgEvent=aa,e.BootstrapTheme=rl,e.Calendar=ca,e.CalendarApi=qn,e.CalendarContent=mi,e.CalendarDataManager=Zo,e.CalendarDataProvider=oi,e.CalendarRoot=Ei,e.Component=Br,e.ContentHook=yo,e.CustomContentRenderContext=mo,e.DEFAULT_RESOURCE_ORDER=Hu,e.DateComponent=po,e.DateEnv=er,e.DateProfileGenerator=ko,e.DayCellContent=na,e.DayCellRoot=oa,e.DayGridView=cs,e.DayHeader=Mi,e.DayResourceTableModel=Gu,e.DaySeriesModel=Pi,e.DayTable=us,e.DayTableModel=Ii,e.DayTableSlicer=ls,e.DayTimeCols=Us,e.DayTimeColsSlicer=Ls,e.DayTimeColsView=Fs,e.DelayedRunner=Go,e.Draggable=Oa,e.ElementDragging=li,e.ElementScrollController=Ar,e.Emitter=Hr,e.EventApi=Yn,e.EventRoot=Ji,e.EventSourceApi=B,e.FeaturefulElementDragging=ba,e.Fragment=jr,e.Interaction=ii,e.ListView=$s,e.MountHook=Eo,e.NamedTimeZoneImpl=function(e){this.timeZoneName=e},e.NowIndicatorRoot=ea,e.NowTimer=Ti,e.PointerDragging=ha,e.PositionCache=Or,e.RefMap=Wi,e.RenderHook=vo,e.ResourceApi=Iu,e.ResourceDayHeader=Bu,e.ResourceDayTable=rc,e.ResourceDayTableModel=ju,e.ResourceDayTableView=oc,e.ResourceDayTimeCols=lc,e.ResourceDayTimeColsView=uc,e.ResourceLabelRoot=Au,e.ResourceSplitter=_u,e.ResourceTimelineLane=Rc,e.ResourceTimelineView=_c,e.ScrollController=Wr,e.ScrollGrid=Sl,e.ScrollResponder=Zr,e.Scroller=Oi,e.SimpleScrollGrid=Ki,e.Slicer=_i,e.Splitter=yr,e.SpreadsheetRow=Sc,e.StandardEvent=$i,e.Table=is,e.TableDateCell=Ri,e.TableDowCell=wi,e.TableView=Ua,e.Theme=Ur,e.ThirdPartyDraggable=Aa,e.TimeCols=Ws,e.TimeColsSlatsCoords=Cs,e.TimeColsView=Ss,e.TimelineCoords=$l,e.TimelineHeader=Jl,e.TimelineHeaderRows=Kl,e.TimelineLane=uu,e.TimelineLaneBg=ru,e.TimelineLaneSlicer=ou,e.TimelineSlats=nu,e.TimelineView=du,e.VResourceJoiner=Yu,e.VResourceSplitter=Zu,e.ViewApi=zn,e.ViewContextType=Xr,e.ViewRoot=Ro,e.WeekNumberRoot=la,e.WindowScrollController=Lr,e.addDays=ye,e.addDurations=$e,e.addMs=Se,e.addWeeks=me,e.allowContextMenu=se,e.allowSelection=ie,e.applyMutationToEventStore=Ln,e.applyStyle=Y,e.applyStyleProp=Z,e.asCleanDays=Je,e.asRoughMinutes=tt,e.asRoughMs=rt,e.asRoughSeconds=nt,e.buildClassNameNormalizer=Co,e.buildDayRanges=Bs,e.buildDayTableModel=ds,e.buildEventApis=Xn,e.buildEventRangeKey=kn,e.buildHashFromArray=function(e,t){for(var n={},r=0;r<e.length;r+=1){var o=t(e[r],r);n[o[0]]=o[1]}return n},e.buildNavLinkData=Dr,e.buildResourceFields=Qu,e.buildRowNodes=Ku,e.buildSegCompareObj=bn,e.buildSegTimeText=Tn,e.buildSlatCols=pu,e.buildSlatMetas=Vs,e.buildTimeColsModel=js,e.buildTimelineDateProfile=Bl,e.collectFromHash=je,e.combineEventUis=Zt,e.compareByFieldSpec=ce,e.compareByFieldSpecs=ue,e.compareNumbers=fe,e.compareObjs=Ve,e.computeEdges=kr,e.computeFallbackHeaderFormat=Ci,e.computeHeightAndMargins=function(e){return e.getBoundingClientRect().height+function(e){var t=window.getComputedStyle(e);return parseInt(t.marginTop,10)+parseInt(t.marginBottom,10)}(e)},e.computeInnerRect=Pr,e.computeRect=Ir,e.computeSegDraggable=Dn,e.computeSegEndResizable=wn,e.computeSegStartResizable=Rn,e.computeShrinkWidth=Ai,e.computeSmallestCellWidth=ge,e.computeVisibleDayRange=on,e.config=ui,e.constrainPoint=fr,e.createContext=Gr,e.createDuration=Xe,e.createElement=zr,e.createEmptyEventStore=function(){return{defs:{},instances:{}}},e.createEventInstance=Ne,e.createEventUi=Yt,e.createFormatter=Mt,e.createPlugin=fo,e.createRef=Fr,e.diffDates=sn,e.diffDayAndTime=be,e.diffDays=Ce,e.diffPoints=gr,e.diffWeeks=Ee,e.diffWholeDays=Re,e.diffWholeWeeks=De,e.disableCursor=ne,e.elementClosest=V,e.elementMatches=F,e.enableCursor=re,e.eventTupleToStore=Bt,e.filterEventStoreDefs=Ft,e.filterHash=We,e.findDirectChildren=G,e.findElements=j,e.flattenResources=Xu,e.flexibleCompare=de,e.flushToDom=qr,e.formatDate=function(e,t){void 0===t&&(t={});var n=ar(t),r=Mt(t),o=n.createMarkerMeta(e);return o?n.format(o.marker,r,{forcedTzo:o.forcedTzo}):""},e.formatDayString=at,e.formatIsoTimeString=st,e.formatRange=function(e,t,n){var r=ar("object"==typeof n&&n?n:{}),o=Mt(n),i=r.createMarkerMeta(e),a=r.createMarkerMeta(t);return i&&a?r.formatRange(i.marker,a.marker,o,{forcedStartTzo:i.forcedTzo,forcedEndTzo:a.forcedTzo,isEndExclusive:n.isEndExclusive,defaultSeparator:Pt.defaultRangeSeparator}):""},e.getAllowYScrolling=Ui,e.getCanVGrowWithinCell=vr,e.getClippingParents=_r,e.getDateMeta=Er,e.getDayClassNames=Cr,e.getDefaultEventEnd=An,e.getElSeg=yn,e.getEventClassNames=Mn,e.getIsRtlScrollbarOnLeft=Tr,e.getPublicId=ku,e.getRectCenter=hr,e.getRelevantEvents=zt,e.getScrollGridClassNames=Gi,e.getScrollbarWidths=xr,e.getSectionClassNames=qi,e.getSectionHasLiquidHeight=Li,e.getSegMeta=xn,e.getSlotClassNames=br,e.getStickyFooterScrollbar=Xi,e.getStickyHeaderDates=Zi,e.getUnequalProps=ze,e.globalLocales=tr,e.globalPlugins=Vo,e.greatestDurationDenominator=it,e.guid=te,e.hasBgRendering=vn,e.hasShrinkWidth=ji,e.identity=Lt,e.interactionSettingsStore=si,e.interactionSettingsToStore=ai,e.intersectRanges=cn,e.intersectRects=dr,e.isArraysEqual=ct,e.isColPropsEqual=zi,e.isDateSpansEqual=_n,e.isGroupsEqual=ec,e.isInt=he,e.isInteractionValid=oo,e.isMultiDayRange=an,e.isPropsEqual=Be,e.isPropsValid=ao,e.isValidDate=Ie,e.listenBySelector=J,e.mapHash=Ae,e.memoize=dt,e.memoizeArraylike=ft,e.memoizeHashlike=ht,e.memoizeObjArg=pt,e.mergeEventStores=Vt,e.multiplyDuration=Qe,e.padStart=pe,e.parseBusinessHours=ur,e.parseClassNames=jt,e.parseDragMeta=di,e.parseEventDef=nn,e.parseFieldSpecs=le,e.parseMarker=Qn,e.pointInsideRect=cr,e.preventContextMenu=ae,e.preventDefault=X,e.preventSelection=oe,e.rangeContainsMarker=hn,e.rangeContainsRange=fn,e.rangesEqual=dn,e.rangesIntersect=pn,e.refineEventDef=en,e.refineProps=At,e.removeElement=z,e.removeExact=ut,e.render=Vr,e.renderChunkContent=Bi,e.renderFill=ia,e.renderMicroColGroup=Vi,e.renderScrollShim=Yi,e.requestJson=Uo,e.sanitizeShrinkWidth=Fi,e.setElSeg=mn,e.setRef=to,e.setScrollFromStartingEdge=fl,e.sliceEventStore=gn,e.sliceEvents=function(e,t){return gn(e.eventStore,e.eventUiBases,e.dateProfile.activeRange,t?e.nextDayThreshold:null).fg},e.sortEventSegs=Cn,e.startOfDay=we,e.translateRect=pr,e.triggerDateSelect=On,e.unmountComponentAtNode=Yr,e.unpromisify=Nr,e.version="5.3.2",e.whenTransitionDone=Q,e.wholeDivideDurations=ot,Object.defineProperty(e,"__esModule",{value:!0}),e}({});
document.body.onload = function () {
    setTimeout(function () {
    
        var preloader = document.getElementById('loader');
        if(preloader !=null)
        {
            if (!preloader.classList.contains('done')) {
                preloader.classList.add('done');
            }
        }
        
    }, 1000)
}




var animation = bodymovin.loadAnimation({
    container: document.getElementById('lottie'),
    renderer: 'svg',
    loop: false,
    autoplay: true,
    path: '../Resources/data.json'
})
