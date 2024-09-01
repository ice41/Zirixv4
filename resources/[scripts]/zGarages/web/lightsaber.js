$(document).ready(function(){
	let actionContainer = $("#estacionamento");

	window.addEventListener('message',function(event){
		let item = event.data;
		switch(item.action){
			case 'showMenu':
				updateGarages(item.garage, item.key);
				actionContainer.fadeIn(700);
			break;

			case 'hideMenu':
				actionContainer.fadeOut(700);
			break;

			case 'updateGarages':
				updateGarages(item.garage);
			break;
		}
	});

	document.onkeyup = function(data){
		if (data.which == 27){
			sendData("ButtonClick","exit")
		}
	};
});

const formatarNumero = (n) => {
	var n = n.toString();
	var r = '';
	var x = 0;

	for (var i = n.length; i > 0; i--) {
		r += n.substr(i - 1, 1) + (x == 2 && i != 1 ? '.' : '');
		x = x == 2 ? 0 : x + 1;
	}
	return r.split('').reverse().join('');
}

const sendData = (name,data) => {
	$.post("http://zGarages/"+name,JSON.stringify(data),function(datab){});
}

const updateGarages = (garage, key) => {
    $.post('http://zGarages/myVehicles',JSON.stringify({garage: garage, key: key}),(data) => {
		const nameList = data.vehicles.sort((a,b) => (a.name2 > b.name2) ? 1: -1);
        $('#carros').html(`
            ${nameList.map((item) => (`
				<div class="carro" data-carro-name="${item.index}" data-plate="${item.plate}">
                    <div class="imagem-carro"><img src="${data.imageService}/${item.name}.png"/></div>
					
                    <div class="nome-carro"><p>${item.name}</p></div>
                    <div class="status">
                        <div class="status-titulo"><p>STATUS</p></div>
                        <div class="status-motor">
                            <div class="barra-motor"><span id="motor" style="width: ${item.engine}%;"></span></div>
                            <div class="icone-motor"><img src="${data.imageService}/engine.png"/></div>
                            <div class="texto-motor"><p>${item.engine}%</p></div>
                        </div>
                        <div class="status-chassis">
                            <div class="barra-chassis"><span id="chassis" style="width: ${item.body}%;"></span></div>
                            <div class="icone-chassis"><img src="${data.imageService}/chassis.png"/></div>
                            <div class="texto-chassis"><p>${item.body}%</p></div>
                        </div>
                        <div class="status-fuel">
                            <div class="barra-fuel"><span id="fuel" style="width: ${item.fuel}%;"></span></div>
                            <div class="icone-fuel"><img src="${data.imageService}/fuel.png"/></div>
                            <div class="texto-fuel"><p>${item.fuel}%</p></div>
                        </div>
                    </div>
                    <div class="licenca">
                        <div class="licenca-titulo"><p>Placa: ${item.plate}</p></div>
                        	<div class="licenca-tax">
                           	<div class="texto-tax"><p>Licença: ${item.tax}</p></div>
							<div class="texto-valor"><p>R${item.status}</p></div>
                        </div>
                    </div>
                </div>
			`)).join('')}
		`);
	});
}

$(document).on('click','.carro',function(){
	let $el = $(this);
	let isActive = $el.hasClass('active');
	$('.carro').removeClass('active');
	if(!isActive) $el.addClass('active');
});

$(document).on('click','.retirar',function(){
	let $el = $('.carro.active');
	if($el) {
		$.post('http://zGarages/spawnVehicles',JSON.stringify({
			name: $el.attr('data-carro-name'),
			plate: $el.attr('data-plate')
		}));
	}
})

$(document).on('click','.guardar',function(){
	$.post('http://zGarages/deleteVehicles',JSON.stringify({}));
})