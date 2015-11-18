// function launch
function launch(eVars,eVars_value,evento){
	s=s_gi(s.accountF)
	var AeVars = eVars.split("|");
	var AeVars_value = eVars_value.split("|");
	s.linkTrackVars='events,eVar11,eVar12,eVar18,eVar19,eVar20,eVar43';
	for(var i=0; i < AeVars.length; i++){
	s.linkTrackVars+=',eVar'+AeVars[i];
        eval('s.eVar'+AeVars[i]+'="'+AeVars_value[i].toLowerCase().replace(/"/gi, "\\\"")+'";');
	}
	if(evento!=''){
	s.linkTrackEvents=evento;
	s.events=evento;
	}
	s.eVar18="prisa";									// Organization
	s.eVar19="el pais";									// Product
	s.eVar20=document.domain.replace(/www./gi,"");		// Domain|Subdomain
	s.eVar43=userId; 									// UserId	
	s.tl(this,'o',evento);
	s.clearVars()
}

