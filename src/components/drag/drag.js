import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import Container from './components/container'
import Line from './components/line'


export default {
  name: 'DragComponent',
  setup () {
    let drg = ref(null)
    let coordenadas = ref(Object);
    var countelements = 0;
    var menu = ref(Array);
    const repositoryContainer = new Container(countelements, coordenadas);
    const repositoryLine = new Line(countelements, coordenadas);
    const router = useRouter()

    onMounted(() => {
      menu.value = onInitialize();
    });

    function onContainer() {
      var element = repositoryContainer.onCreateElement()
      drg.value.appendChild(element)
      element.addEventListener('mousedown', repositoryContainer.onStart)
    }

    function onLine(){
      var element = repositoryLine.onCreateElement()
      drg.value.appendChild(element)
      element.addEventListener('mousedown', repositoryLine.onStart)
    }

    function onField(){
      var element = repositoryLine.onCreateElement()
      drg.value.appendChild(element)
      element.addEventListener('mousedown', repositoryLine.onStart)
    }
    function onImage(){
      var element = repositoryLine.onCreateElement()
      drg.value.appendChild(element)
      element.addEventListener('mousedown', repositoryLine.onStart)
    }
    function onExit(){
      router.go(-1);
    }


    function onInitialize(){
      var menu = [
        {
          icon: 'mc mc-icon-container',
          function: onContainer,
          label: 'Container'
        },
        {
          icon: 'mc mc-icon-line',
          function: onLine,
          label: 'Divisor'
        },
        {
          icon: 'mc mc-icon-field',
          function: onField,
          label: 'Campo'
        },
        {
          icon: 'mc mc-icon-image',
          function: onImage,
          label: 'Imagem'
        },
        {
          icon: 'mc mc-icon-exit',
          function: onExit,
          label: 'Sair'
        }
      ]
      return menu;
    }

    return { onContainer, drg, menu }
  }
}
