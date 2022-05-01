const app = Vue.createApp({
  data() {
    return {
      proNom: 'Mr',  
      primerNombre:'Rodrigo',
      apellido:'Martinez',
      email:'rmartinez@innovaccion.mx',
      cell:'0791-471-847',
      direcNombre:'Sydtoften',
      direcNum: '124',
      ciudad:'Assens',
      estado:'Midtjylland',
      pais:'Denmark',
      genero:'male',
      foto: 'https://randomuser.me/api/portraits/men/75.jpg'
    }
  },
  methods: {
      async cambiarUsuario() {
        const res = await fetch ('https://randomuser.me/api');
        const { results } = await res.json();
        console.log(results);
        this.proNom =results[0].name.title
        this.primerNombre =results[0].name.first
        this.apellido =results[0].name.last
        this.email =results[0].email
        this.cell =results[0].cell
        this.direcNombre = results[0].location.street.name
        this.direcNum = results[0].location.street.number
        this.ciudad = results[0].location.city
        this.estado = results[0].location.state
        this.pais = results[0].location.country
        this.genero =results[0].gender
        this.foto = results[0].picture.large
      }  
  }
})

 app.mount('#app');