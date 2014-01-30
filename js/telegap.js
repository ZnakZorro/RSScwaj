/*
to bardzo ciekawe do sprawdzenia
var Anchors = document.getElementsByTagName("a");

for (var i = 0; i < Anchors.length ; i++) {
    Anchors[i].addEventListener("click", 
        function (event) {
            event.preventDefault();
            if (confirm('Are you sure?')) {
                window.location = this.href;
            }
        }, 
        false);
}
*/

/*
function korekta_link(link,content)
function szukaj_img(link,content)
*/
var $=function kapiszon(id) {
	var prefix=id[0];
	var iid=id.slice(1,id.length);

	switch (prefix){
		case '#':	return document.getElementById(iid);   			break;
		case '.':	return document.getElementsByClassName(iid);  	break;
		default:	return document.getElementsByTagName(id); 
		}
		
	}


   function zgas() {document.getElementById("feeddiv").style.opacity='0.5';}
   	function zapal(){document.getElementById("feeddiv").style.opacity='1.0';}
   	function kasuj(){document.getElementById("feeddiv").innerHTML='';}
   	function scroll() {window.scrollTo(0,0)}
   	
	
	
	
	function viewInfoKorki(raw){
		document.getElementById('feeddiv').innerHTML+=raw;
		
	}
    
    
 	function viewInfo(){
 		zgas();
		var html='<div class="auto">';
			html+='<img src="http://www.yr.no/place/Poland/West_Pomerania/Szczecin~7530840/avansert_meteogram.png" style="max-width:828px;" /><br />';
			html+='<button onClick="viewKorkiWykres();"   class="btn btn-inverse btn-big">  Korki  </button>';
		html+='</div>';
		kasuj();
		document.getElementById("feeddiv").innerHTML=html;
		zapal();
			var script=document.createElement('SCRIPT');
			script.type='text/javascript';
			script.src='http://www.wi.zut.edu.pl/cdn/json/korki.json.php?callback=viewInfoKorki&co=czas&jak=tabela&format=joomla';
			document.getElementsByTagName('head')[0].appendChild(script);
			onMenuKeyDown();	
			//onMenuKeyDown();	
			//MenuZgas();
 	}   	
	

// KORKI WYKRES SVG MAPA

var daneKorki,timerKorki;	

function viewKorkiWykres(){
		var head = document.getElementsByTagName('head')[0];
		var jestscript = document.getElementById("korkiscript");
		if (jestscript) {
			head.removeChild(jestscript);
			};
		//console.log('jestscript='+jestscript);
		var html='<div class="auto" style="position:absolute; top:20px; left:0;">';
		//html+='<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="340px" height="386px" version="1.1" style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd" viewBox="0 0 393 447" xmlns:xlink="http://www.w3.org/1999/xlink"> <defs> <style type="text/css"> <![CDATA[ .str0,.str1,.str2,.str3,.str4,.str5,.str6,.str7,.str8 {stroke:lime;stroke-width:9.25769} .str1 {stroke:#CCCCFF;stroke-width:9.25769} .fil0 {fill:none} ]]> </style> </defs> <g id="Layer_x0020_1"> <metadata id="CorelCorpID_0Corel-Layer"/> <line class="fil0 str0" x1="294" y1="360" x2="390" y2= "443" /> <line class="fil1 str0" x1="265" y1="233" x2="290" y2= "358" /> <line class="fil2 str0" x1="240" y1="104" x2="265" y2= "229" /> <line class="fil3 str0" x1="134" y1="23" x2="233" y2= "102" /> <line class="fil4 str1" x1="107" y1="344" x2="279" y2= "359" /> <line class="fil5 str1" x1="26" y1="240" x2="102" y2= "342" /> <line class="fil6 str1" x1="7" y1="216" x2="102" y2= "342" /> <line class="fil7 str1" x1="53" y1="45" x2="4" y2= "211" /> <line class="fil8 str0" x1="287" y1="2" x2="237" y2= "99" /> </g> </svg>';
		html+='<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="393px" height="397px" version="1.1" style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd"viewBox="0 0 399 403" xmlns:xlink="http://www.w3.org/1999/xlink"> <defs> <style type="text/css"> <![CDATA[.str5 {stroke:#666666;stroke-width:1.2} .str4 {stroke:#666666;stroke-width:2} .str6 {stroke:#B3B3B3;stroke-width:3} .str0 {stroke:lime;stroke-width:8} .str1 {stroke:#CCCCCC;stroke-width:8} .str2 {stroke:#CCCCFF;stroke-width:8} .str3 {stroke:yellow;stroke-width:16} .fil0 {fill:none} .fil1 {fill:black} .fil2 {fill:#999999} .fnt1 {font-size:16px;} .fnt0 {font-size:21px;} ]]> </style> </defs> <g id="Layer_x0020_1"> <metadata id="CorelCorpID_0Corel-Layer"/> <line class="fil0 str0" x1="306" y1="319" x2="389" y2= "391" /> <line class="fil0 str1" x1="310" y1="314" x2="380" y2= "277" /> <line class="fil0 str1" x1="2" y1="196" x2="78" y2= "239" /> <line class="fil0 str0" x1="281" y1="208" x2="303" y2= "315" /> <line class="fil0 str0" x1="258" y1="94" x2="280" y2= "203" /> <line class="fil0 str0" x1="193" y1="8" x2="252" y2= "92" /> <polyline class="fil0 str2" points="78,239 212,301 300,320 "/> <polyline class="fil0 str2" points="103,51 74,88 78,239 "/> <line class="fil0 str0" x1="299" y1="4" x2="256" y2= "90" /> <g id="_210092008"> <line class="fil0 str3" x1="393" y1="376" x2="374" y2= "397" /> <line class="fil0 str4" x1="393" y1="376" x2="374" y2= "397" /> </g> <g id="_210092536"> <polyline class="fil0 str5" points="268,202 273,205 289,202 292,196 "/> <polyline class="fil0 str5" points="269,213 273,209 289,206 294,211 "/> </g> <g id="_210093040"> <polyline class="fil0 str5" points="190,26 195,27 210,20 211,13 "/> <polyline class="fil0 str5" points="195,36 197,31 211,24 217,27 "/> </g> <circle class="fil0 str6" cx="74" cy="89" r="8"/> <circle class="fil0 str6" cx="213" cy="300" r="8"/> <text x="80" y="50" class="fil1 fnt0">Reda</text> <text x="172" y="15" class="fil1 fnt0">Most</text> <text x="272" y="16" class="fil1 fnt0">Trasa</text> <text x="29" y="273" class="fil2 fnt1">Podjuchy</text> <text x="180" y="332" class="fil2 fnt1">Zdroje</text> <text x="344" y="268" class="fil2 fnt1">Dąbie</text> </g></svg>';
		html+='<div id="korkiopis"></div>';
		html+='</div>';
		html+='<div style="position:relative; padding:4px;z-index:2;">';
		html+='<button onClick="viewKorkiWykres();"   class="btn btn-inverse btn-big">  Korki  </button>';
html+='<div class="btn-group" data-toggle="buttons-radio" id="grupa-btn"><button type="button" class="btn btn-info select" id="btnsel_1">km/h</button><button type="button" class="btn btn-primary unselect" id="btnsel_2">min.</button></div>';		
		//html+='<button onClick="WypiszKorkiWykres(\'speed\');"         class="btn btn-info" id="korki-btn-speed">km/h</button>';
		//html+='<button onClick="WypiszKorkiWykres(\'travelTimeNow\');" class="btn btn-info" id="korki-btn-travelTimeNow">min.</button>';
		html+='<button onclick="viewInfo();" class="btn btn-warning">InfoSzczecin</button>';
		html+='<br /><br /><a href="https://szr.szczecin.pl/utms/index" target="_blank">UTMS</a>';
		html+='</div>';
		kasuj();
		document.getElementById("feeddiv").innerHTML=html;
		zapal();
		WypiszKorkiWykres(null);
			var script=document.createElement('SCRIPT');
			script.type='text/javascript';
			script.id='korkiscript';
			script.src='http://www.wi.zut.edu.pl/cdn/json/proxy.json.php?url=https://szr.szczecin.pl/utms/travel_time/listNew.action&callback=fookorki';
			head.appendChild(script);
			//onMenuKeyDown();
			MenuZgas();
		timerKorki = setTimeout(function(){viewKorkiWykres();},180000);
		
		$("#grupa-btn").style.display='none';
		$("#btnsel_1").addEventListener("click", btn_switch, false); 
		$("#btnsel_2").addEventListener("click", btn_switch, false); 
		
 	}   
function btn_switch(ten){
	
	//add remove
	$("#btnsel_1").classList.toggle("unselect");
	$("#btnsel_2").classList.toggle("unselect");
	//console.log($("#btnsel_1").classList.contains("unselect")+' - '+$("#btnsel_2").classList.contains("unselect"));
	if ($("#btnsel_1").classList.contains("unselect")) WypiszKorkiWykres('travelTimeNow'); else WypiszKorkiWykres('speed');
}


function fookorki(d){
	daneKorki=d.data;
	WypiszKorkiWykres('speed')
}	

function WypiszKorkiWykres(ob){
	var f=document.getElementById("korkiopis");
	if (ob==null) {
		for (var i=0; i<12; i++){f.innerHTML+='<span id="korki'+i+'">?</span>';}
		return;
	}
	//document.getElementById("korki-btn-speed").className ='btn btn-info';
	//document.getElementById("korki-btn-travelTimeNow").className ='btn btn-info';
	//document.getElementById("korki-btn-"+ob).className ='btn btn-info active';
	f.innerHTML='';
	for (var i=0; i<daneKorki.length; i++){
		var v=daneKorki[i];
		var tit = v.absoluteRouteName+' - '+v.roadDescription;
		var wpis = v[ob];
		f.innerHTML+='<span id="korki'+i+'" title="'+tit+'">'+wpis+'</span>';
	}
	$("#grupa-btn").style.display='inline';
}

	
function popup_open(ten) {
	return false;
}	


function toDate(date,sep){
	if  (!date) return '';
	if  (!sep) sep='<br />';
	
	var d = new Date(date);
	var miesiac = d.getMonth()+1;  if (miesiac<10) miesiac = '0'+miesiac;
	var dzien   = d.getDate();     if (dzien<10)   dzien   = '0'+dzien;
	var godzina = d.getHours();    if (godzina<10) godzina = '0'+godzina;
	var minuta  = d.getMinutes();  if (minuta<10)  minuta  = '0'+minuta;
	//var pldata=d.getFullYear()+':'+miesiac+':'+dzien+'<br />'+godzina+':'+minuta;
	var pldata=dzien+'-'+miesiac+sep+'<b>'+godzina+':'+minuta+'</b>';
	return pldata;
}	

function deltaCzas(date){
	if  (!date) return '';
	var teraz = new Date();
	var kiedy = new Date(date);
	var mteraz=Date.parse(teraz);
	var mkiedy=Date.parse(kiedy);			
	var delta=mteraz-mkiedy;
	//if (delta<0) console.log(date+' DELTA= '+mteraz+' - '+mkiedy+' = '+delta);
	delta=Math.round(delta/3600000);
	return delta; // w godzinach
}	



// konieczne todo
function korekta_link(link,content){
return link;
//console.log(link);
//http://rss.feedsportal.com/c/32739/f/530434/s/2ab7acb4/l/0Lszczecin0Bgazeta0Bpl0Cszczecin0C10H349390H137393650HTo0Ibedzie0Ikolejny0Icieply0Ii0Isloneczny0Idzien0Bhtml/story01.htm
	var agora=link.match(/gazeta|wyborcza/);
	
	if (agora){
/*
testowe linki
http://rss.feedsportal.com/c/32739/f/530434/s/2ab7bb7c/l/0Lszczecin0Bgazeta…nkt0I20A130Istartuje0I0ITo0Idla0Iteatrow0Ijakby0Iponowne0Bhtml/story01.htm 
http://m.szczecin.gazeta.pl/szczecin/1,106520,13738913,Kontrapunkt_2013_startuje__To_dla_teatrow_jakby_ponowne.html
http://m.szczecin.gazeta.pl/szczecin/51,106520,13738913.html?i=0


*/	
	//console.log("\n");	console.log(link);	console.log(content);
		var szukaj_link=content.match(/(<a href.*?>)/gi);
		
		if (szukaj_link && szukaj_link[1]) {
		//console.log(szukaj_link)
			var linkarr=(szukaj_link[1].match(/;link=(.*?)">/));
			if (linkarr) {
				link=decodeURIComponent(linkarr[1]);
				} 
			link=link.replace(/http:\/\//,'http://m.');  
			}	
	}
//console.log(link);
	return link;
}


function szukaj_img(link,content){
	var dzikie_obrazki=content.match(/(dzone|advertisement)/gi);
	var image='';
	var szukaj_img=content.match(/(<img.*?>)/gi);
	if (szukaj_img && szukaj_img[0] && !dzikie_obrazki){
		var feedburner=szukaj_img[0].match(/(feedburner)/gi) || '';
		var zut=link.match(/(\/\/zut.)/gi) || '';
		if (!feedburner) image=szukaj_img[0];
		//if (zut) image='http://zut.edu.pl/'+image;
		if (zut) {
			image=image.replace('<img src="','<img src="http://zut.edu.pl/');
			image=image.replace(/width=\"\d\d\d\"/,'');
			image=image.replace(/height=\"\d\d\d\"/,'');
			image=image.replace(' alt="">',' />');
		}
	}
	return image;
}


 
 
/* share*/

//http://stackoverflow.com/questions/8305855/android-how-to-use-the-phonegap-share-plugin
var Share = function() {};       
Share.prototype.show = function(content, success, fail) {
    return cordova.exec( function(args) {
        success(args);
    }, function(args) {
        fail(args);
    }, 'Share', '', [content]);
};

if (!window.plugins) {
    window.plugins = {};
}
if (!window.plugins.share) {
    window.plugins.share = new Share();
} 

function podzielsie(){
	var share = new Share();
	share.show({
		subject: 'Jestem ZnakZorro',
		text: 'http://szczech.com.pl'},
		function() {alert('sukces share 1')}, // Success function
		function() {alert('Share failed 1')} // Failure function

	); 
}

function podzielsie3(){
	var share = new Share();
	share.show({
		title: 'Jestem ZnakZorro',
		content: 'http://szczech.com.pl'},
		function(al) {alert(al+' sukces share 1')}, // Success function
		function(al) {alert(al+' Share failed 1')} // Failure function

	); 
}
function podzielsie2(){
	var share = new Share();
	share.show('Jestem ZnakZorro',
		function() {alert('sukces share 2')}, // Success function
		function() {alert('Share failed 2')} // Failure function

	); 
}
 //function openInWebView(url){
  function open1(url){
        var anchor = document.createElement('a');
        anchor.setAttribute('href', url);
        anchor.setAttribute('target', '_blank');
        var dispatch = document.createEvent('HTMLEvents')
        dispatch.initEvent('click', true, true);
        anchor.dispatchEvent(dispatch);
    }



function loadURL(url){
try  { navigator.app.loadUrl(url, { openExternal:true } );  }
catch(err) {
  //window.location.href=url;
  window.open(url,'_blank');
  //console.log(err+"\n"+url);
  }
//if (device.platform) navigator.app.loadUrl(url, { openExternal:true } ); 
//else 

}


/* DEBUG ----------------------------
------------------------------------won */

function opiszID(){
document.getElementById('test').style.display='block';
	var id1=window.localStorage.getItem('__id__1');
	var id2=window.localStorage.getItem('__id__2');
	var id3=window.localStorage.getItem('__id__3');
	//console.log('OpisID='+id1+' '+id2+' '+id3)	
	return 'ids=['+id1+','+id2+','+id3+']';
	//document.getElementById('test').innerHTML=opis;
}

  	function deviceInfo() {
   		window.scrollTo(0,0)
		var element = document.getElementById('feeddiv');
		element.innerHTML += 'Device Name: '     + device.name     + '<br />' + 
		'Device Platform: ' + device.platform + '<br />' + 
		'Device UUID: '     + device.uuid     + '<br />' + 
		'Device Version: '  + device.version  + '<br />'; 
		}

		
		


		
		
		
/* http://flatuicolors.com */
var flatuicolors=[
{'name':'turquoise',     'val':'#1ABC9C',  'alt':'#000000'},
{'name':'green-sea',     'val':'#16A085',  'alt':'#ffffff'},
{'name':'emerland',      'val':'#2ECC71',  'alt':'#000000'},
{'name':'nephritis',     'val':'#27AE60',  'alt':'#ffffff'},
{'name':'peter-river',   'val':'#3498DB',  'alt':'#000000'},
{'name':'belize-hole',   'val':'#2980B9',  'alt':'#ffffff'},
{'name':'amethyst',      'val':'#9B59B6',  'alt':'#ffffff'},
{'name':'wisteria',      'val':'#8E44AD',  'alt':'#ffffff'},
{'name':'wet-asphalt',   'val':'#34495E',  'alt':'#ffffff'},
{'name':'midnight-blue', 'val':'#2C3E50',  'alt':'#ffffff'},
{'name':'sun-flower',    'val':'#F1C40F',  'alt':'#000000'},
{'name':'orange',        'val':'#F39C12',  'alt':'#000000'},
{'name':'carrot',        'val':'#E67E22',  'alt':'#000000'},
{'name':'pumpkin',       'val':'#D35400',  'alt':'#ffffff'},
{'name':'alizarin',      'val':'#E74C3C',  'alt':'#000000'},
{'name':'pomegranate',   'val':'#C0392B',  'alt':'#ffffff'},
{'name':'concrete',      'val':'#95A5A6',  'alt':'#000000'},
{'name':'asbestos',      'val':'#7F8C8D',  'alt':'#ffffff'}
]







/* 
Kapiszon v 0.0.1
like not jQuery
licence: completly free
*/

var $=function kapiszon(id) {
	var prefix=id[0];
	var iid=id.slice(1,id.length);

	switch (prefix){
		case '#':	return document.getElementById(iid);   			break;
		case '.':	return document.getElementsByClassName(iid);  	break;
		default:	return document.getElementsByTagName(id); 
		}
		
	}
	
/*	
function toDate(date){
	if  (!date) date=new Date();
	var d = new Date(date);
	var miesiac = d.getMonth()+1;  if (miesiac<10) miesiac = '0'+miesiac;
	var dzien   = d.getDate();     if (dzien<10)   dzien   = '0'+dzien;
	var godzina = d.getHours();    if (godzina<10) godzina = '0'+godzina;
	var minuta  = d.getMinutes();  if (minuta<10)  minuta  = '0'+minuta;
	var rok     = d.getFullYear();
	var pldata=rok+'-'+dzien+'-'+miesiac+' <b>'+godzina+':'+minuta+'</b>';
	return pldata;
}		
*/
	
	
	
	
	
	
//function zapal(){$("#strona").style.opacity='1.0';}	
//function zgas() {$("#strona").style.opacity='0.7';}	
	
	
function koniec(){
	try  {navigator.app.exitApp();}
	catch(err) {
	  //window.scrollTo(0,0);
	  }
}
	



function loadURL(url){
	try  { navigator.app.loadUrl(url, { openExternal:true } );  }
	catch(err) {
	  window.location.href=url;
	  }
}


function setTextContent(element, text) {
    while (element.firstChild!==null)
        element.removeChild(element.firstChild); // remove all existing content
    element.appendChild(document.createTextNode(text));
}





/* http://flatuicolors.com */
var flatuicolors=[
{'name':'turquoise',     'val':'#1ABC9C',  'alt':'#000000'},
{'name':'green-sea',     'val':'#16A085',  'alt':'#ffffff'},
{'name':'emerland',      'val':'#2ECC71',  'alt':'#000000'},
{'name':'nephritis',     'val':'#27AE60',  'alt':'#ffffff'},
{'name':'peter-river',   'val':'#3498DB',  'alt':'#000000'},
{'name':'belize-hole',   'val':'#2980B9',  'alt':'#ffffff'},
{'name':'amethyst',      'val':'#9B59B6',  'alt':'#ffffff'},
{'name':'wisteria',      'val':'#8E44AD',  'alt':'#ffffff'},
{'name':'wet-asphalt',   'val':'#34495E',  'alt':'#ffffff'},
{'name':'midnight-blue', 'val':'#2C3E50',  'alt':'#ffffff'},
{'name':'sun-flower',    'val':'#F1C40F',  'alt':'#000000'},
{'name':'orange',        'val':'#F39C12',  'alt':'#000000'},
{'name':'carrot',        'val':'#E67E22',  'alt':'#000000'},
{'name':'pumpkin',       'val':'#D35400',  'alt':'#ffffff'},
{'name':'alizarin',      'val':'#E74C3C',  'alt':'#000000'},
{'name':'pomegranate',   'val':'#C0392B',  'alt':'#ffffff'},
{'name':'concrete',      'val':'#95A5A6',  'alt':'#000000'},
{'name':'asbestos',      'val':'#7F8C8D',  'alt':'#ffffff'}
]


function getPhoneGapPath() {
    var path = window.location.pathname;
    path = path.substr( path, path.length - 10 )+'pliki/';
	return path;
};

        // Audio player
        //
        var my_media = null;
        var mediaTimer = null;

        // Play audio
        //
        function graj(src) {
			src=getPhoneGapPath()+src;
            if (my_media == null) {
                try {my_media = new Media(src, mediaonSuccess, mediaonError);}
				catch(er){}
            } 
            try {my_media.play();}
			catch(er){}
		}


        function playAudio(src) {
			src=getPhoneGapPath()+src;
            if (my_media == null) {
                my_media = new Media(src, onSuccess, onError);
            }
            my_media.play();

            if (mediaTimer == null) {
                mediaTimer = setInterval(function() {
                    my_media.getCurrentPosition(
                        function(position) {
                            if (position > -1) {
                                setAudioPosition((position) + " sec");
                            }
                        },
                        function(e) {
                            console.log("Error getting pos=" + e);
                            setAudioPosition("Error: " + e);
                        }
                    );
                }, 1000);
            }
        }

        // Pause audio
        // 
        function pauseAudio() {
            if (my_media) {
                my_media.pause();
            }
        }

        // Stop audio
        // 
        function stopAudio() {
            if (my_media) {
                my_media.stop();
            }
            clearInterval(mediaTimer);
            mediaTimer = null;
        }

        // onSuccess Callback
        //
        function mediaonSuccess() {
            //console.log("playAudio():Audio Success");
        }

        // onError Callback 
        //
        function mediaonError(error) {
            //alert('code: '    + error.code    + '\n' + 'message: ' + error.message + '\n');
        }

        // Set audio position
        // 
        function setAudioPosition(position) {
            //document.getElementById('audio_position').innerHTML = position;
        }

function loadXMLDoc(xurl,myDiv){
var xmlhttp;
if   (window.XMLHttpRequest){xmlhttp=new XMLHttpRequest();}
else {xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");}
xmlhttp.onreadystatechange=function(){
if (xmlhttp.readyState==4 && xmlhttp.status==200){
document.getElementById(myDiv).innerHTML=xmlhttp.responseText;
}
}
xmlhttp.open("GET",xurl,true);
xmlhttp.send();
}



	// popup 	open
	function popup_open(ten) {
		zapal();
		var title=ten.getAttribute('rel-title');
		var link=ten.getAttribute('rel-link');
		var lokalizacja=ten.getAttribute('rel-lokalizacja');
		var sekcja=ten.getAttribute('rel-sekcja');
		
		var	html_btn ='<div class="well">';
			//html_btn+='<a href="javascript:void(0)" class="btn btn-primary" onClick="zapisz_LS_link(this);" id="popup_zapisz_LS_link">Zapisz moje linki</a> ';
			//<!-- moje swoje -->
			//if (x___self) html_btn+='<a href="javascript:void(0)" class="btn btn-danger" onClick="zapisz_link(this);" id="popup_zapisz_link">Udostępnij URL </a> ';	
			
			//<!-- moje swoje -->
			//if (x___self) 
			html_btn+='<button class="btn btn-danger" onClick="zapisz_link(this);" id="popup_zapisz_link">Udostępnij URL </button> ';	
			html_btn+='<button class="btn btn-primary" onClick="zapisz_LS_link(this);" id="popup_zapisz_LS_link">Zapisz moje linki</button> ';
			
			
			html_btn+='</div>';
	//Socialite
	/*twitter*/
	if (x___self) {
	html_btn+='<div class="social">';
			html_btn+=' &nbsp; <a href="https://twitter.com/share" class="twitter-share-button" data-url="'+link+'" data-text="'+title+'" data-via="znakzorro" data-lang="pl" data-count="none" rel="nofollow" target="_blank">Tweetnij</a>';	
			html_btn+=' &nbsp; <a href="https://plus.google.com/share?url='+link+'" class="" data-size="tall" data-href="'+link+'" rel="nofollow" target="_blank"><img src="https://www.gstatic.com/images/icons/gplus-32.png" alt="Share on Google+"/></a>';			
			html_btn+=' &nbsp; <a href="http://www.facebook.com/sharer.php?u='+link+'&amp;t='+title+'" class="" data-href="'+link+'" data-send="false" data-layout="box_count" data-width="60" data-show-faces="false" rel="nofollow" target="_blank">Share on Facebook</a>';
		html_btn+='</div>';			
	}
	//Socialite		
	
  
		document.getElementById('popup_body').innerHTML=html_btn;
		document.getElementById('popup').style.display='block';
		document.getElementById('popup_title').innerHTML=title;
		document.getElementById('popup_zapisz_LS_link').setAttribute('rel-title',title);
		document.getElementById('popup_zapisz_LS_link').setAttribute('rel-link',link);
		if (x___self){
			document.getElementById('popup_zapisz_link').setAttribute('rel-title',title);
			document.getElementById('popup_zapisz_link').setAttribute('rel-link',link);
			document.getElementById('popup_zapisz_link').setAttribute('rel-lokalizacja',lokalizacja);
			document.getElementById('popup_zapisz_link').setAttribute('rel-sekcja',sekcja);
		}
		//document.getElementById('popup_info').innerText='Mobile='+mobile+' | '+navigator.userAgent.toLowerCase();
		
		/*twitter*/
		/*
			(function(d,s,id){
				var js,fjs=d.getElementsByTagName(s)[0];
				if(!d.getElementById(id)){
					js=d.createElement(s);
					js.id=id;
					js.src="http://platform.twitter.com/widgets.js";
					fjs.parentNode.insertBefore(js,fjs);
				}
			})
			(document,"script","twitter-wjs");
			*/
		/*google plus*/
		/*
		window.___gcfg = {lang: 'pl'};
		(function() {
			var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true;
			po.src = 'https://apis.google.com/js/plusone.js';
			var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);
		})();
		*/
		/********************/
		
	}
	
	
	// popup 	close
	function popup_close() {
		document.getElementById('popup_info').innerHTML='';
		document.getElementById('popup_menu').innerHTML='';
		
		document.getElementById('popup').style.display='none';
	}
	
	// popup	zapisz link
	function zapisz_link(ten) {
		var title=ten.getAttribute('rel-title');
		var url=ten.getAttribute('rel-link');
		var lokalizacja=ten.getAttribute('rel-lokalizacja');
		var sekcja=ten.getAttribute('rel-sekcja');
		var xurl='http://zszczech.zut.edu.pl/rss/_/ajax_zapisz.php?s='+sekcja+'&l='+lokalizacja+'&t='+title+'&u='+url;
		loadXMLDoc(xurl,'popup_info')
		popup_close();
		zapiszLSlinki(title,url);
	}
	function zapisz_LS_link(ten) {
		var title=ten.getAttribute('rel-title');
		var url=ten.getAttribute('rel-link');
		popup_close();
		zapiszLSlinki(title,url);
	}	

//if (last) $('#zaznacz_czas').addClass('active'); else $('#kasuj_czas').addClass('active');
	function zapiszLSlinki(title,link){
		var max_links=14;
		var get_linki=window.localStorage.getItem('_rss_linki');
		if (get_linki) {
			var arr=JSON.parse(get_linki);
			var ile=arr.length;
			if (ile>max_links) {arr.shift();arr.shift();}
			} else arr=[];
		var store_linki=arr;	
		arr.push({'title':title, 'link':link})
		store_linki=JSON.stringify(store_linki);
		window.localStorage.setItem('_rss_linki',store_linki);
	}
	
	function viewRemotelinki(x___self){
		if (x___self) loadURL('http://zszczech.zut.edu.pl/l/');
		else viewLSlinki(x___self);
	}
	
	function viewLSlinki(x___self){
		var get_linki = window.localStorage.getItem('_rss_linki');
		var arr=JSON.parse(get_linki);
		if (!arr) return false;
		var html='<ol>';
		arr.reverse();
		for (var i in arr) {
			//html+='<li><a href="'+arr[i].link+'">'+arr[i].title+'</a></li>';
			html+='<li><a href="javascript:void()" onClick="loadURL(\''+arr[i].link+'\')">'+arr[i].title+'</a></li>';
		}
		html+='</ol>';
		document.getElementById('popup').style.display='block';
		document.getElementById('popup_title').innerHTML='Lokalne linki';
		document.getElementById('popup_body').innerHTML=html;
	}
	

function viewConfig(){
		var font = window.localStorage.getItem('_font_');
		var font_size = window.localStorage.getItem('_font_size_');
		//console.log(font_size+' '+font);
		var ff=[];
		var fs=[];
		ff[font]='active';
		fs[font_size]='active';
		//console.log(ff);
		//console.log(fs);
		
		var html='';
		html+='<div>';
		html+='<b>Font-family: </b>';
		html+='<a href="javascript:void(0)" class="btn btn-info '+ff['Verdana']+'" onClick="configFont(\'Verdana\',\'\');">Verdana</a> ';
		html+='<a href="javascript:void(0)" class="btn btn-info '+ff['Arial']+'" onClick="configFont(\'\',\'\');">Arial</a> ';
		html+='<a href="javascript:void(0)" class="btn btn-info '+ff['Georgia']+'" onClick="configFont(\'Georgia\',\'\');">Georgia</a> ';
		html+='<a href="javascript:void(0)" class="btn btn-info '+ff['PT Sans Narrow']+'" onClick="configFont(\'PT Sans Narrow\',\'\');">PT Sans Narrow</a> ';
		html+='<hr />';
		html+='<b>Font-size: </b>';
		html+='<a href="javascript:void(0)" class="btn btn-info '+fs[14]+'" onClick="configFont(\'*\',\'14\');">14</a> ';
		html+='<a href="javascript:void(0)" class="btn btn-info '+fs[15]+'" onClick="configFont(\'*\',\'15\');">15</a> ';
		html+='<a href="javascript:void(0)" class="btn btn-info '+fs[16]+'" onClick="configFont(\'*\',\'16\');">16</a> ';
		html+='<a href="javascript:void(0)" class="btn btn-info '+fs[17]+'" onClick="configFont(\'*\',\'17\');">17</a> ';
		html+='<a href="javascript:void(0)" class="btn btn-info '+fs[18]+'" onClick="configFont(\'*\',\'18\');">18</a> ';
		html+='<a href="javascript:void(0)" class="btn btn-info '+fs[19]+'" onClick="configFont(\'*\',\'19\');">19</a> ';
		html+='<a href="javascript:void(0)" class="btn btn-info '+fs[20]+'" onClick="configFont(\'*\',\'20\');">20</a> ';
		html+='<a href="javascript:void(0)" class="btn btn-info '+fs[22]+'" onClick="configFont(\'*\',\'22\');">22</a> ';
		html+='<a href="javascript:void(0)" class="btn btn-info '+fs[25]+'" onClick="configFont(\'*\',\'25\');">25</a> ';
		html+=' px</div>';
		document.getElementById('popup').style.display='block';
		document.getElementById('popup_title').innerHTML='Config - <small>Ustaw font i jego rozmiar.</small>';
		document.getElementById('popup_body').innerHTML=html;
		//document.getElementById('popup_info').innerText='';
		document.getElementById('popup_menu').innerHTML=document.getElementById('strefa_czasu').innerHTML;
		
		onMenuKeyDown();
	}

	function configFont(font,size){
		if (!font) font='Arial';
		//if (!size) size=15;
		if (font != '*') {
			//if (!font) window.localStorage.removeItem('_font_');
			if (font)  window.localStorage.setItem('_font_',font);
		}
		if (size) {window.localStorage.setItem('_font_size_',size);}
		window.location.reload();
	}

	
	
	
	function ustawCzas(ten){
		
		document.getElementById(ten.id).style.color="red";
		var czas=ten.getAttribute('rel');
		if (czas==0) czas=9999;
		if (czas) {
		//console.log(czas);
			kasuj_czas();
			window.localStorage.setItem('czas',czas);
			window.location.reload();
		}
	}
	

	function zaznacz_czas() {
		var teraz = new Date();
		var mteraz=Date.parse(teraz);
		window.localStorage.setItem('last',mteraz);
		window.location.reload();
	}
	
	function kasuj_czas() {
		window.localStorage.removeItem('last');
		window.location.reload();
	}
	
