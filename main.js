Vue.component('jumbo', {
	template: `
		<div class="jumbotron jumbotron-fluid">
			<div class="container">
				<h1 class="display-3">
				{{head}}
				</h1>
				<p class='lead'> {{body}} </p>
			</div>
		</div>
	`,
	props: ['head', 'body'],
})
Vue.component('alert-bar', {
	template: `
		<div class="alert alert-primary"
		role="alert"
		>
		{{inside}}
		</div>
	`,
	props: ['inside'],

})
var mainVm = new Vue({
  el: '#app',
  data: {
  },
  methods: {
  	}
});
// Copy
// <div class="jumbotron jumbotron-fluid">
//   <div class="container">
//     <h1 class="display-3">Fluid jumbotron</h1>
//     <p class="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
//   </div>
// </div>
