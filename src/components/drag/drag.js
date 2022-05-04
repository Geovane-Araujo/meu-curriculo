import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import Container from './components/container'
import Field from './components/field'
import Image from './components/image'
import Line from './components/line'
import InputText from 'primevue/inputtext'
import StyleModel from './components/styleModel'


export default {
  name: 'DragComponent',
  setup () {
    let drg = ref(null)
    let iconbtn = ref()
    let mnuproperties = ref()
    let coordenadas = ref(Object);
    let elementSelected = '';
    let isCollapsed = false;
    let refBody = ref();
    var countelements = 0;
    var menu = ref(Array);
    var id = null;
    var componentProperties = ref(new StyleModel());
    const repositoryContainer = new Container(countelements, coordenadas);
    const repositoryLine = new Line(countelements, coordenadas);
    const repositoryImage = new Image(countelements, coordenadas);
    const repositoryField = new Field(countelements, coordenadas);
    const router = useRouter()

    onMounted(() => {
      menu.value = onInitialize();
      addKeyBoards();
      onPropertiesInit();
    });

    function onContainer() {
      componentProperties.value = new StyleModel()
      var element = repositoryContainer.onCreateElement(componentProperties.value)
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
      var element = repositoryField.onCreateElement()
      drg.value.appendChild(element)
      element.addEventListener('mousedown', repositoryField.onStart)
      element.addEventListener('click', onSelected)
    }
    function onImage(){
      var element = repositoryImage.onCreateElement()
      drg.value.appendChild(element)
      element.addEventListener('mousedown', repositoryImage.onStart)
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
    function onPropertiesInit(){
      document.getElementById('ref-title').style.display = 'none';
      refBody.value.style.display = 'none';
      iconbtn.value.style.transform = 'rotate(-180deg)';
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

    function onCollapsed(){
      if(!isCollapsed) {
        onCollapsedOpen();
        isCollapsed = true;
      } else {
        onCollapsedClose();
        isCollapsed = false;
      }
    }

    function onCollapsedOpen(){
      var tempTamanho = 50;
      if(mnuproperties.value.style.width === '' || mnuproperties.value.style.width === '50px') {
        clearInterval(id);
        id = setInterval(animacao, 0.1);
      }
      function animacao(){
        if(tempTamanho === 300) {
          clearInterval(id);
        } else {
          tempTamanho += 5;
          mnuproperties.value.style.width = tempTamanho + 'px';
        }
      }
      iconbtn.value.style.transform = 'rotate(0deg)';
      document.getElementById('ref-title').style.display = 'flex';
      refBody.value.style.display = 'flex';
    }

    function onCollapsedClose(){
      var tempTamanho = 300;
      if(mnuproperties.value.style.width === '300px') {
        clearInterval(id);
        id = setInterval(animacao, 1);
      }
      function animacao(){
        if(tempTamanho === 50) {
          clearInterval(id);
        } else {
          tempTamanho -= 5;
          mnuproperties.value.style.width = tempTamanho + 'px';
        }
      }
      iconbtn.value.style.transform = 'rotate(-180deg)';
      refBody.value.style.display = 'none';
      document.getElementById('ref-title').style.display = 'none';
    }

    return { onContainer, drg, menu, iconbtn, mnuproperties, onCollapsed, refBody, componentProperties }
  },
  components: {
    InputText
  }
}
