import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import Container from './components/container'
import Line from './components/line'


export default {
  name: 'DragComponent',
  setup () {
    let drg = ref(null)
    let coordenadas = ref(Object);
    let elementSelected = '';
    var countelements = 0;
    var menu = ref(Array);
    const repositoryContainer = new Container(countelements, coordenadas);
    const repositoryLine = new Line(countelements, coordenadas);
    const router = useRouter()

    onMounted(() => {
      menu.value = onInitialize();
      addKeyBoards();
    });

    function onContainer() {
      var element = repositoryContainer.onCreateElement()
      drg.value.appendChild(element)
      element.addEventListener('mousedown', repositoryContainer.onStart)
      element.addEventListener('click', onSelected)
    }

    function onLine(){
      var element = repositoryLine.onCreateElement()
      drg.value.appendChild(element)
      element.addEventListener('mousedown', repositoryLine.onStart)
      element.addEventListener('click', onSelected)
    }

    function onField(){
      var element = repositoryLine.onCreateElement()
      drg.value.appendChild(element)
      element.addEventListener('mousedown', repositoryLine.onStart)
      element.addEventListener('click', onSelected)
    }
    function onImage(){
      var element = repositoryLine.onCreateElement()
      drg.value.appendChild(element)
      element.addEventListener('mousedown', repositoryLine.onStart)
      element.addEventListener('click', onSelected)
    }
    function onExit(){
      router.go(-1);
    }
    function onSelected(e){
      elementSelected = e.srcElement.id;
    }
    function onRemove(id){
      console.log(id);
      var element = document.getElementById(id);
      element.remove();
      elementSelected = ''
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

    function addKeyBoards(){
      document.addEventListener('keydown', (event) => {
        switch(event.code){
          case 'Delete':
            if(elementSelected !== '')
              onRemove(elementSelected);
            break;
          default:
            break;
        }
      }, false);
    }

    return { onContainer, drg, menu }
  }
}
