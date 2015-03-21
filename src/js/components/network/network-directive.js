module.exports = function(){
	return {
		scope: {},
		controller: function(){

		},
		controllerAs: 'networkCntrl',
		bindToController: true,
		template: require('./network-template.html').trim()
	};
};