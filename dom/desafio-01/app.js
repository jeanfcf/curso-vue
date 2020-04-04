new Vue({
    el: '#desafio',
    data: {
        nome: 'Jean',
        idade: 19,
        imagem: 'https://img.olhardigital.com.br/uploads/acervo_imagens/2019/10/r16x9/20191030055031_1200_675_-_omnivision___menor_sensor_de_camera_do_mundo.jpg',
    },
    methods: {
        idadeTriplicada(){
            return this.idade*3
        },
        random(){
            return Math.random()
        }
    },
})