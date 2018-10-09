function(context, args)
{
	let caller = context.caller;
	
	let l = #fs.scripts.lib();
	
	const secs = ['CHOICE', 'KIN', 'CHAOS', 'VOID', 'DATA', 'FORM'];
	const chs = Object.values(#fs.scripts.fullsec()).filter(ch => secs.includes(ch.substring(0, ch.indexOf('_'))));

	let get = chs[Math.floor(Math.random() * chs.length)];
	
	#D('j ' + get);
	
	#ms.chats.join({channel: get});
	
	#D('j');
		
	var s = #fs.scripts.fullsec({sector: get});
		
	#D(s.filter(p => p.includes('public')));
	
	#D('l ' + get);
	
	#ms.chats.leave({channel: get});
	
	return { msg:'`5done :)`'};
}
