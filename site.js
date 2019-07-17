const f = q => document.querySelector(q)
const a = q => document.querySelectorAll(q)
const attach = (q, e, f) => 
	a(q).forEach(el => el.addEventListener(e, f))

const activate = (q, id) => {
	a(q).forEach(el => el.classList.remove('-active'))
	f(q + '[data-id="'+ id + '"]').classList.add('-active')
}



function activateNavLink(id){
	activate('.-nav-btn', id)
}
function activateMobNavLink(id){
	activate('.-mob-nav', id)
}

function activateView(id){
	activate('.-view', id)
	scrollTo(0,0)
}

function activateMobView(id){
	activate('.-mob-view', id)
	scrollTo(0,0)
}

function navClick(){
	const id = this.dataset.id
	const navBrand = f('.-nav-brand')
	activateNavLink(id)
	activateView(id)

	// if home
	if(id === '0'){
		navBrand.classList.remove('-active')
	}else{
		navBrand.classList.add('-active')
	}
}

function mobNavClick(){
	const id = this.dataset.id
	activateMobView(id)
	activateMobNavLink(id)
	f('.-mob-menu').classList.add('dn')
	a('.-stack').forEach(el => el.classList.remove('-active'))
}

function heartClick(event){
	const el =  event.target.parentElement
	el.classList.toggle('-active')
	const name = el.dataset.id
	console.log(`Your affection goes out to ${name}`);
}

function stackClick(){
	a('.-stack').forEach(el => el.classList.toggle('-active'))
	f('.-mob-menu').classList.toggle('dn')
}

attach('.-nav-btn', 'click', navClick)
attach('.-mob-nav', 'click', mobNavClick)
attach('.-heart', 'click', heartClick)
attach('.-stacks', 'click', stackClick)


