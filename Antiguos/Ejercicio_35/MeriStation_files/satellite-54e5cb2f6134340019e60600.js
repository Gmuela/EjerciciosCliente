// function launch
function launch(eVars,eVars_value,evento){
	s.usePlugins=false
	s=s_gi(s.accountF)
	var AeVars = eVars.split("|");
	var AeVars_value = eVars_value.split("|");
	s.linkTrackVars='events,eVar3,eVar10,eVar18,eVar19,eVar20,eVar43';
	for(var i=0; i < AeVars.length; i++){
	s.linkTrackVars+=',eVar'+AeVars[i];
	try {
		eval('s.eVar'+AeVars[i]+'="'+AeVars_value[i].toLowerCase().replace(/"/gi, "\\\"")+'";');
    }
    catch(err) {
        console.log( "Error: " + err + ".");
    }
	}
	if(evento!=''){
	s.linkTrackEvents=evento;
	s.events=evento;
	}
	s.eVar3= s.siteID + location.pathname;				// pageName
	s.eVar10="D=g"																// URL 
	s.eVar18="prisa";															// Organization
	s.eVar19="el pais";														// Product
	s.eVar20=location.hostname;										// Domain|Subdomain
	s.eVar43=userId; 															// UserId	
	s.tl(this,'o',evento);
	s.clearVars()
}

function facebookT(){
  s.usePlugins=false
	s=s_gi(s.accountF);					
	s.linkTrackVars="eVar3,eVar17,eVar18,eVar19,eVar20,eVar35,eVar43,eVar45,eVar48,eVar69,events";		
	s.linkTrackEvents="event69";			
	s.events='event69'; 				
	s.eVar3= s.siteID + location.pathname;					// pageName
  s.eVar17=channel;																// channel
	s.eVar18="prisa";																// Organization
	s.eVar19="el pais";															// Product
	s.eVar20=location.hostname;											// Domain|Subdomain
  s.eVar35=hours;																	// Set hour (12)	
	s.eVar43=userId; 																// UserId		
  s.eVar45=pageName; 															// Page Title / Page Name	
  s.eVar48=s.getTimeParting('d',gmt);							// Set day (Jueves)	
	s.eVar69="facebook";														// RRSS
	s.tl(this,'o', 'facebook:' + s.events); 
  s.clearVars()
}

function twitterT(){
  s.usePlugins=false
	s=s_gi(s.accountF);					
	s.linkTrackVars="eVar3,eVar17,eVar18,eVar19,eVar20,eVar35,eVar43,eVar45,eVar48,eVar69,events";		
	s.linkTrackEvents="event69";			
	s.events='event69'; 				
	s.eVar3= s.siteID + location.pathname;					// pageName
  s.eVar17=channel;																// channel
	s.eVar18="prisa";																// Organization
	s.eVar19="el pais";															// Product
	s.eVar20=location.hostname;											// Domain|Subdomain
  s.eVar35=hours;																	// Set hour (12)	
	s.eVar43=userId; 																// UserId		
  s.eVar45=pageName; 															// Page Title / Page Name	
  s.eVar48=s.getTimeParting('d',gmt);							// Set day (Jueves)	
	s.eVar69="twitter";															// RRSS
	s.tl(this,'o', 'twitter:' + s.events); 
  s.clearVars()
}

function purchaseGame(producto,monto,precio,accion){
	s.usePlugins=false
	s=s_gi(s.accountF)
	s.linkTrackVars='events,eVar3,eVar11,eVar12,eVar18,eVar19,eVar20,eVar43';	
	s.linkTrackEvents='event9,event48';
	s.events='event9=' + monto;	
	if(precio!='0' || precio!=0 || precio==''){
	s.events+=',event48=' + precio;	
	}
	s.eVar3= s.siteID + location.pathname;				// pageName
	s.eVar11=producto															// Product
	s.eVar12=accion;															// Accion conseguir
	s.eVar18="prisa";															// Organization
	s.eVar19="el pais";														// Product
	s.eVar20=location.hostname;										// Domain|Subdomain
	s.eVar43=userId; 															// UserId	
	s.tl(this,'o',s.events);
	s.clearVars()
}

// function page 
function page(type, pageName, section, subsection, subsubsection){
	s.usePlugins=false
	s=s_gi(s.account)
	
	// External Campaign Tracking 		
	if(!s.campaign){
		if(s.Util.getQueryParam('sdi')!='') s.campaign=s.Util.getQueryParam('sdi'); // display
		if(s.Util.getQueryParam('sse')!='') s.campaign=s.Util.getQueryParam('sse'); // sem
		if(s.Util.getQueryParam('sma')!='') s.campaign=s.Util.getQueryParam('sma'); // emailing
		if(s.Util.getQueryParam('prm')!='') s.campaign=s.Util.getQueryParam('prm'); // promociones
		if(s.Util.getQueryParam('sap')!='') s.campaign=s.Util.getQueryParam('sap'); // aplicativos widget
		if(s.Util.getQueryParam('ssm')!='') s.campaign=s.Util.getQueryParam('ssm'); // social media
		if(s.Util.getQueryParam('afl')!='') s.campaign=s.Util.getQueryParam('afl'); // afiliación
		if(s.Util.getQueryParam('agr')!='') s.campaign=s.Util.getQueryParam('agr'); // agregadores
		if(s.Util.getQueryParam('int')!='') s.campaign=s.Util.getQueryParam('int'); // ID interno
    s.campaign=s.getValOnce(s.campaign,'s_campaign',0);
	}
	
	s.channel=section;
	s.pageName= s.siteID + s.channel;					// Manual formation s.PageName (Recommended Omniture SiteCatalyst)
	
	if(subsection != '' ) {
		s.prop1 = section + '>' + subsection;			// subsección: "section>subsection"
		s.pageName+= ':' + subsection;					// Manual formation s.PageName
	}else{ 
		s.prop1 = '';
	}
	if(subsubsection != ''){
		s.prop2= s.prop1 + '>' +subsubsection;			// subsubsección: "section>subsection>subsubsection"
		s.pageName+= ':' + subsubsection;				// Manual formation s.PageName
	}else{
		s.prop2 = '';
	}

	s.pageName+= ':' + pageName;						// Manual formation s.PageName

	s.eVar3="D=pageName" 																						// PageName
	s.eVar4="D=ch"																									// Channel
	if(s.prop1)s.eVar5="D=c1"																				// Subsection (prop1) 
	if(s.prop2)s.eVar6="D=c2"																				// Subsubsection (prop2)		
	s.prop3=type;s.eVar7="D=c3"																			// Content Type
	s.prop5="D=g";s.eVar10="D=g"																		// URL	
	s.prop6="D=r";s.eVar63="D=r" 									 									// Referrer							
	s.prop8=s.getTimeParting('d',gmt);s.eVar48="D=c8"		 						// Set day (Jueves)						
	s.prop9=s.getTimeParting('w', gmt);s.eVar66="D=c9"							// Set weekday (laborable/festivo) 			
	s.prop14="españa";s.eVar14="D=c14"												    	// Country   									
	s.prop17=channel;s.eVar17="D=c17"  															// Canal 									
	s.prop18="prisa";s.eVar18="D=c18"																// Organization
	s.prop19="el pais";s.eVar19="D=c19"															// Product
	s.prop20=location.hostname;																			// Domain|Subdomain
	s.prop21=s.getNewRepeat();s.eVar21="D=c21"   										// User New / Repeat											
	s.prop24=hours+":"+minutes+":"+seconds;s.eVar59="D=c24"					// Set hh:mm:ss (12:32:48)					 				
	s.prop30="noticias";s.eVar30="D=c30" 														// Business Unit					
	s.prop31="entretenimiento";s.eVar62="D=c31"	 										// Temathic						
  s.prop33=s.getVisitNum();s.eVar32="D=c33"												// Visit Number By Month
	s.prop34=userId;s.eVar43="D=c34"																// UserId					
	s.prop35=hours;s.eVar35="D=c35"																	// Set hour (12)							
	s.prop36=s.getTimeParting('d', gmt)+"-"+day+"/"+month+"/"+fecha.getFullYear()+"-"+s.prop24;s.eVar33="D=c36"		// Join Date (Jueves-15/9/2012-12:32:48)    
	s.prop39=pageName;s.eVar39="D=c39"															// Title / Page Name	
	s.prop40=design;s.eVar40="D=c40"																// Type Design Web	
	s.prop44=s.getTimeParting('h', gmt);s.eVar44="D=c44"				 		// Set hour (12:00PM) 											
  s.prop60=s.getDaysSinceLastVisit('s_lv');s.eVar60="D=c60"   		// Days Since Last Visit
	s.prop62=reg;s.eVar22="D=c62"																		// log in / anonymous	
	
	/* Hierarchy GROUP */
	s.hier1='D=c18+">"+c19+">"+c20+">"';	

	if(s.prop2!=''){
		s.hier1 +='c2+">"';	
	}else if(s.prop1!=''){
		s.hier1 +='c1+">"';
	}else{
		s.hier1 +='ch+">"';
	}
	s.hier1 +="pageName";
	
	s.events="event2";
	
	// Check server error page 404 and internal
	if (error == 404){
		s.pageType="errorPage"
		s.pageName='';	
	} 
	if (error == 500){
		s.pageType="errorPage"
		s.pageName="error interno"
	} 
	
	// force all Adobe SiteCatalyst variables to Lower Case 
	for(var a=1;a<=33;a++)s["prop"+a]&&(s["prop"+a]=s["prop"+a].toString().toLowerCase().replace(/^d=/,"D="));for(var b=["products","pageName","channel","campaign"],a=0;a<b.length;a++)s[b[a]]&&(s[b[a]]=s[b[a]].toLowerCase().replace(/^d=/,"D="));
	for(var a=35;a<=75;a++)s["prop"+a]&&(s["prop"+a]=s["prop"+a].toString().toLowerCase().replace(/^d=/,"D="));for(var b=["products","pageName","channel","campaign"],a=0;a<b.length;a++)s[b[a]]&&(s[b[a]]=s[b[a]].toLowerCase().replace(/^d=/,"D="));
	
	s.t();
}
