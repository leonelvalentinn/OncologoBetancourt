const infoTreatments = [
  {
    id: 1,
    imgSrc: 'img/recursos/tratamientos/cancer-endometrio.webp',
    alt: 'Imagen del cáncer de endometrio',
    title: 'Cáncer de Endometrio',
    description: 'El cáncer de endometrio se origina cuando células en el endometrio (revestimiento interno del útero) comienzan a crecer en forma descontrolada. Casi cualquier célula del cuerpo puede convertirse en cáncer y propagarse a otras partes del cuerpo.'
  },
  {
    id: 2,
    imgSrc: 'img/recursos/tratamientos/cancer-gastrico.webp',
    alt: 'Imagen referente al cáncer gástrico',
    title: 'Cáncer Gástrico',
    description: 'El cáncer gástrico se origina en las células que revisten el estómago. El adenocarcinoma de estómago comienza en las células que producen moco en el revestimiento más interno del estómago. Casi todos los cánceres de estómago son adenocarcinomas.'
  },
  {
    id: 3,
    imgSrc: 'img/recursos/tratamientos/cancer-glandulas-salivales.webp',
    alt: 'Imagen referente al cáncer de glándulas salivales',
    title: 'Cáncer de Glándulas Salivales',
    description: 'El cáncer de la glándula salival es poco común. Puede que no cause ningún síntoma o usted puede notar Un bulto en su oreja, mejilla, mandíbula, labio o dentro de la boca Líquido que drena de su oreja Problemas para tragar o para abrir grande su boca Entumecimiento, debilidad o dolor en su cara'
  },
  {
    id: 4,
    imgSrc: 'img/recursos/tratamientos/cancer-laringe.webp',
    alt: 'Imagen referente al cáncer de laringe',
    title: 'Cáncer de Laringe',
    description: 'El cáncer de laringe es una enfermedad por la que se forman células malignas (cancerosas) en los tejidos de la laringe. El uso de productos de tabaco y el consumo excesivo de alcohol afectan el riesgo de cáncer de laringe. Los signos y síntomas del cáncer de laringe son dolor de garganta y de oído.'
  },
  {
    id: 5,
    imgSrc: 'img/recursos/tratamientos/cancer-oral.webp',
    alt: 'Imagen referente al cáncer de cavidad oral',
    title: 'Cáncer de Cavidad Oral',
    description: 'Es un tipo de cáncer de cabeza y cuello. La mayoría de los casos de este cáncer es cáncer de células escamosas. Comienza en las células planas que cubren las superficies de la boca, la lengua y los labios. Las células cancerosas pueden propagarse a tejidos más profundos a medida que crece.'
  },
  {
    id: 6,
    imgSrc: 'img/recursos/tratamientos/cancer-ovario.webp',
    alt: 'Imagen referente al cáncer',
    title: 'Cáncer de los Ovarios',
    description: 'El cáncer de ovarios es un crecimiento de las células que se forma en los ovarios. Las células se multiplican rápidamente y pueden invadir y destruir tejidos sanos del cuerpo. El tratamiento contra el cáncer de ovario generalmente implica cirugía y quimioterapia.'
  },
  {
    id: 7,
    imgSrc: 'img/recursos/tratamientos/cancer-piel.webp',
    alt: 'Imagen referente al cáncer de piel',
    title: 'Cáncer de Piel',
    description: 'El cáncer de piel, se suele desarrollar en la piel expuesta al sol. Pero esta forma frecuente de cáncer también puede ocurrir en zonas de piel que normalmente no están expuestas a la luz solar. Existen tres tipos principales de cáncer de piel: carcinoma basocelular, carcinoma espinocelular y melanoma.'
  },
  {
    id: 8,
    imgSrc: 'img/recursos/tratamientos/cancer-pulmon.webp',
    alt: 'Imagen referente al cáncer',
    title: 'Cáncer de Pulmón',
    description: 'Se forma en los tejidos del pulmón, generalmente en las células que recubren los conductos de aire. Es la principal causa de muerte por cáncer tanto en hombres como mujeres. Hay dos tipos principales, cáncer de pulmón de células pequeñas y cáncer de pulmón de células no pequeñas.'
  },
  {
    id: 9,
    imgSrc: 'img/recursos/tratamientos/cancer-testiculos.webp',
    alt: 'Imagen referente al cáncer de testículos',
    title: 'Cáncer de Testículos',
    description: 'Es una proliferación de células que comienza en los testículos. El cáncer testicular no es un tipo de cáncer común. Puede presentarse a cualquier edad, pero ocurre con más frecuencia de los 15 a los 45 años.'
  }
]

const infoSurgeries = [
  {
    id: 1,
    imgSrc: 'img/recursos/tratamientos/cirugia-cabeza.webp',
    alt: 'Imagen referente a la cirugía de cabeza',
    title: 'Cirugía Oncológica <br> de Cabeza y Cuello',
    description: 'Se encarga del manejo oncológico y quirúrgico de enfermedades benignas y malignas del área de la cabeza y el cuello tales como tumores cráneo faciales, de tiroides, de parótida, de glándulas salivales y de cavidad oral.'
  },
  {
    id: 2,
    imgSrc: 'img/recursos/tratamientos/cirugia-colon.webp',
    alt: 'Imagen referente a la cirugía de colón',
    title: 'Cirugía de Colón',
    description: 'La cirugía es usualmente el primer tratamiento para las personas con cánceres de colon que no se han propagado a partes distantes. Puede que también administre quimioterapia tras la cirugía.'
  },
  {
    id: 3,
    imgSrc: 'img/recursos/tratamientos/cirugia-de-mamas.webp',
    alt: 'Imagen referente a la cirugía de mamas',
    title: 'Cirugía Mamaria',
    description: 'La cirugía con conservación del seno es una cirugía en la que se extirpa solamente la parte del seno que tiene cáncer. La mastectomía es una cirugía en la que se extirpa totalmente el seno, incluyendo todo el tejido mamario y en ocasiones otros tejidos cercanos.'
  },
  {
    id: 4,
    imgSrc: 'img/recursos/tratamientos/cirugia-min-invasiva.webp',
    alt: 'Imagen referente a la cirugía mínimamente invasiva',
    title: 'Cirugía Oncológica <br>Mínimamente Invasiva',
    description: 'Utiliza incisiones más pequeñas en comparación con una cirugía abierta. Este enfoque también utiliza una cámara, pequeños instrumentos y otros equipos. El beneficio de la cirugía mínimamente invasiva es un tiempo de recuperación más rápido con menos dolor.'
  },
  {
    id: 5,
    imgSrc: 'img/recursos/tratamientos/Cirugia-Gastrointestinal.webp',
    alt: 'Imagen referente a la cirugía de gastrointestinal',
    title: 'Cirugía Gastrointestinal',
    description: 'Es una especialidad en donde se tienen en cuenta todas las patologías que involucren al Esófago, Estómago, Duodeno, Hígado y Vías Biliares, Vesícula Biliar, Páncreas, Intestino Delgado y Grueso. Se dedica al diagnóstico y tratamiento de los pacientes con Enfermedades del Tracto Digestivo Alto ya sea patologías benignas o malignas.'
  },
  {
    id: 6,
    imgSrc: 'img/recursos/tratamientos/Cirugia-Laparoscopica.webp',
    alt: 'Imagen referente a la cirugía de laparoscópica',
    title: 'Cirugía Laparoscópica',
    description: 'Es una técnica quirúrgica mediante la cual se insertan tubos cortos y delgados (trócares) en el abdomen, utilizando pequeñas incisiones (inferiores a un centímetro). A través de estos trócares se insertan instrumentos largos y angostos, que el cirujano utiliza para manipular, cortar y coser tejidos.'
  },
  {
    id: 7,
    imgSrc: 'img/recursos/tratamientos/Cirugia-Pancreatica.webp',
    alt: 'Imagen referente a la cirugía de pancreática',
    title: 'Cirugía Pancreática',
    description: 'La cirugía pancreática consiste en la resección de lesiones precursoras de cáncer como las neoplasias pancreáticas intraepiteliales, neoplasia quística mucinosa, neoplasia intraductal papilar mucinoso'
  },
  {
    id: 8,
    imgSrc: 'img/recursos/tratamientos/colocacion-de-cateter.webp',
    alt: 'Imagen referente a la colocación de catéter ',
    title: 'Colocación de catéter',
    description: 'Un catéter central colocado por vía periférica (PICC, por sus siglas en inglés) es una sonda larga y delgada que se introduce en el cuerpo a través de una vena en la parte superior del brazo. El extremo del catéter termina en una vena grande cerca del corazón.'
  },
  {
    id: 9,
    imgSrc: 'img/recursos/tratamientos/ginecologia-Oncologica.webp',
    alt: 'Imagen referente a la Ginecología Oncológica',
    title: 'Ginecología Oncológica',
    description: 'Es la subespecialidad que se dedica al manejo integral de los cánceres del sistema reproductor femenino. Contamos para ello con una formación profesional y una infraestructura que pondrá a disposición de nuestras pacientes, toda la gama de tratamientos que sean necesarios.'
  }
]

const $container = document.getElementById('tratamientos-container')
const $containerSurgery = document.getElementById('surgery-container')
let $card = ''

function initTreatments() {
  infoTreatments.map((item) => { 
    $card = `
      <div class="card-treatment">
      <div class="image">
        <img src=${item.imgSrc} alt=${item.alt}>
      </div>
        <div class="content">
          <a href="https://api.whatsapp.com/send?phone=525532321256" target="_blank">
            <span class="title">
              ${item.title}
            </span>
          </a>
          <p class="desc">
            ${item.description}
          </p>
          <a class="action" href="https://api.whatsapp.com/send?phone=525532321256" target="_blank">
            Conoce más
            <span aria-hidden="true">
              →
            </span>
          </a>
        </div>
      </div>
      `
      $container.insertAdjacentHTML('beforeend', $card)
    }
  )

  infoSurgeries.map((item) => { 
    $card = `
      <div class="card-treatment">
      <div class="image">
        <img src=${item.imgSrc} alt=${item.alt}>
      </div>
        <div class="content">
          <a href="https://api.whatsapp.com/send?phone=525532321256" target="_blank">
            <span class="title">
              ${item.title}
            </span>
          </a>
          <p class="desc">
            ${item.description}
          </p>
          <a class="action action-two" href="https://api.whatsapp.com/send?phone=525532321256" target="_blank">
            Conoce más
            <span aria-hidden="true">
              →
            </span>
          </a>
        </div>
      </div>
      `
      $containerSurgery.insertAdjacentHTML('beforeend', $card)
    }
  )
}

initTreatments()