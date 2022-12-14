const wines = [
    {
        id: 1,
        categoria: "Tinto",
        varietal: "Malbec",
        crianza: "12 meses roble francés",
        bodega: "Rutini wines",
        nombre: "Dominio Malbec",
        imagen: "Dominio-Malbec.webp",
        notas: "Rojo granate límpido con reflejos violáceos. En nariz se destacan aromas frutales como la ciruela, florales como la violeta y un toque especiado de regaliz.En boca la tipicidad del varietal se presenta con sabores a fruta negra, jugoso, fresco y con una acidez equilibrada."
    },
    {
        id: 2,
        categoria: "Tinto",
        varietal: "Malbec",
        crianza: "14 meses roble francés",
        bodega: "Rutini wines",
        nombre: "Dominio Gran Malbec",
        imagen: "Dominio-Gran-Malbec.webp",
        notas: "Color rubí con reflejos violáceos. En nariz ofrece notas a frutos negros, florales y especiadas. De taninos amables en boca, jugoso, frutado y fresco. Elegante final, prolongado y placentero."
    },
    {
      id: 3,
      categoria: "Tinto",
      varietal: "Malbec",
      crianza: "7 meses roble francés y americano",
      bodega: "Rutini wines",
      nombre: "Trumpeter Malbec",
      imagen: "Trumpeter-Malbec.webp",
      notas: "De un impactante color violeta. Nariz frutal destacando ciruelas, cerezas y notas florales que nos recuerdan a las violetas. Posee gran cuerpo y su vivaz estructura acentúa sus taninos intensos que se vuelven aterciopelados en el retrogusto."
    },
    {
  id: 4,
    categoria: "Tinto",
    "varietal": "Malbec",
    "crianza": "12 meses roble francés",
    "bodega": "Rutini wines",
    "nombre": "Trumpeter Reserve Malbec",
    "imagen": "Trumpeter-Reserve-Malbec.webp",
    "notas": "Granate intenso, con reflejos púrpuras. Es un típico y bien logrado ejemplo de la variedad emblemática de la Argentina. Las notas aromáticas florales y frutadas (ciruela, cassis, frutilla) pueden ser fácilmente apreciadas. La armónica redondez obtenida se debe, en parte, a los jugosos taninos que le otorgan además suavidad un largo y agradable final de boca."
    },
    {
  id: 5,
    categoria: "Tinto",
    "varietal": "Malbec",
    "crianza": "12 meses roble francés",
    "bodega": "Rutini wines",
    "nombre": "Rutini Malbec",
    "imagen": "Rutini-Malbec.webp",
    "notas": "Rojo violáceo, con matices azulados. En nariz, se destaca una gran complejidad aromática: notas de ciruelas entremezcladas con especias que recuerdan a vainilla, anís, pimienta negra. y un fondo floral que recuerda a la flor de la violeta. En boca, se reafirman los acentos frutados, sus taninos envolventes y sedosos, bien presentes pero amables, destacan su personalidad y su gran complejidad."
    },
    {
  id: 6,
    categoria: "Tinto",
    "varietal": "Malbec",
    "crianza": "12 meses roble francés",
    "bodega": "Rutini wines",
    "nombre": "Encuentro Malbec",
    "imagen": "Encuentro-Malbec.webp",
    "notas": "Rojo granate intenso y concentrado, con destellos violáceos. La impetuosa nariz típica de la variedad regala además armonías florales (violeta) y notas de frutos rojos y negros frescos (cereza, cassis). En boca, los taninos se encuentran bien presentes, destacándose el cacao amargo y frutas maceradas. Intenso y complejo, es dueño de una muy lograda acidez."
    },
    {
  id: 7,
    categoria: "Tinto",
    "varietal": "Cabernet Sauvignon",
    "crianza": "12 meses roble francés",
    "bodega": "Rutini wines",
    "nombre": "dominio Cabernet Sauvignon",
    "imagen": "Dominio-Cabernet-Sauvignon.webp",
    "notas": "Rojo rubí brillante. Su nariz es muy aromática donde resaltan notas de frutos rojos como la frutilla y algún toque vegetal propio de los pimientos.En boca irrumpen los frutos cocidos en compota y especias, taninos bien marcados y un dejo mentolado."
    },
    {
  id: 8,
    categoria: "Tinto",
    "varietal": "Cabernet Sauvignon",
    "crianza": "7 meses roble francés",
    "bodega": "Rutini wines",
    "nombre": "Trumpeter Cabernet Sauvignon",
    "imagen": "Trumpeter-Cabernet-Sauvignon.webp",
    "notas": "Rubí intenso y profundo con matices violáceos. Nariz frutal y especiada que recuerda a frutos rojos maduros y a especias como la pimienta y el clavo de olor. Su perfil suave deja percibir los aromas a ciruelas maduras y cerezas negras, dejando un final de boca pleno y agradable."
    },
    {
  id: 9,
    categoria: "Tinto",
    "varietal": "Cabernet Sauvignon",
    "crianza": "14 meses roble francés",
    "bodega": "Rutini wines",
    "nombre": "Dominio Gran Cabernet Sauvignon",
    "imagen": "Dominio-Gran-Cabernet-Sauvignon.webp",
    "notas": "Rojo rubí brillante. En nariz muy aromático donde resaltan notas a fruta negra y el típico pimiento verde, propio de la variedad.Vigoroso en boca descubre sabores frutados y especiados, finalizando en un postgusto intenso y agradable."
    },
    {
  id: 10,
    categoria: "Tinto",
    "varietal": "Cabernet Sauvignon",
    "crianza": "12 meses roble francés",
    "bodega": "Rutini wines",
    "nombre": "Trumpeter Reserve Cabernet Sauvignon",
    "imagen": "Trumpeter-Reserve-Cabernet-Sauvignon.webp",
    "notas": "Rojo rubí brillante. En nariz muy aromático donde resaltan notas a fruta negra y el típico pimiento verde, propio de la variedad.Vigoroso en boca descubre sabores frutados y especiados, finalizando en un postgusto intenso y agradable."
    },
    {
  id: 11,
    categoria: "Tinto",
    "varietal": "Cabernet Sauvignon",
    "crianza": "18 meses roble francés",
    "bodega": "Rutini wines",
    "nombre": "Apartado Gran Cabernet Sauvignon",
    "imagen": "Apartado-Gran-Cabernet-Sauvignon.webp",
    "notas": "De color rojo intenso. En la nariz es complejo, elegante, con notas de oliva negra y un regaliz sutil. En la boca es un vino de gran complejidad, final de boca explosivo, equilibrado y con taninos que seducen e invitan a una nueva copa."
    },
    {
  id: 12,
    categoria: "Tinto",
    "varietal": "Cabernet Sauvignon",
    "crianza": "12 meses roble francés",
    "bodega": "Rutini wines",
    "nombre": "Encuentro Cabernet Sauvignon",
    "imagen": "Encuentro-Cabernet-Sauvignon.webp",
    "notas": "Rojo rubí medio, con matiz violáceo. La nariz descubre una tenue fragancia frutal, amena y matizada con notas de especias y ahumados. En el paladar, este vino derrama sus distintos tonos de sabor, en los que prevalece una carga de taninos que tapizan largamente la boca y aseguran un retrogusto firme y fresco."
    },
    {
  id: 13,
    categoria: "Blanco",
    "varietal": "Chardonnay",
    "crianza": "10 meses roble francés",
    "bodega": "Rutini wines",
    "nombre": "Dominio Chardonnay",
    "imagen": "Dominio-Chardonnay.webp",
    "notas": "Amarillo pálido, con sutiles reflejos dorados y verdosos.Regala aromas típicos de regiones frías y zonas altas. Florales como el azahar, jazmín y acacia. Notas tropicales como el ananá y frutas de carozo. Se destacan las almendras tostadas y los toques de ahumados. En boca es vibrante, delicadamente mineral con un equilibrio perfecto entre frescura y untuosidad. Muy buena acidez y persistente final."
    },
    {
  id: 14,
    categoria: "Blanco",
    "varietal": "Chardonnay",
    "crianza": "6 meses roble francés",
    "bodega": "Rutini wines",
    "nombre": "Trumpeter Chardonnay",
    "imagen": "Trumpeter-Chardonnay.webp",
    "notas": "De color amarillo dorado con reflejos verdosos. Aromas a fruta de carozo como durazno maduro, manzana y notas tropicales de ananá. Es un vino elegante y de gran suavidad en boca, untuoso y con buen balance, con un fino marco mineral en su final."
    },
    {
  id: 15,
    categoria: "Blanco",
    "varietal": "Chardonnay",
    "crianza": "9 meses roble francés",
    "bodega": "Rutini wines",
    "nombre": "Rutini Chardonnay",
    "imagen": "Rutini-Chardonnay.webp",
    "notas": "Dorado, con marcados reflejos verdes. Aroma intensamente frutado. El contacto con la madera le confiere el suave dejo de vainilla que ennoblece su perfume a frutas tropicales. Es largo y complejo, de excelente frutosidad y gran persistencia en paladar. Un blanco fino y equilibrado."
    },
    {
  id: 16,
    categoria: "Blanco",
    "varietal": "Chardonnay",
    "crianza": "12 meses roble francés",
    "bodega": "Rutini wines",
    "nombre": "Apartado Gran Chardonnay",
    "imagen": "Apartado-Gran-Chardonnay.webp",
    "notas": "De color dorado intenso con reflejos verdosos. En nariz, ofrece aromas a frutas tropicales acompañadas con notas de vainilla y miel, aportadas por el tiempo de crianza en barrica.En boca, se confirma la paleta aromática de este vino untuoso, complejo y de persistente final."
    },
    {
  id: 17,
    categoria: "Blanco",
    "varietal": "Viognier",
    "crianza": "6 meses roble francés",
    "bodega": "Rutini wines",
    "nombre": "Trumpeter Reserve Viognier",
    "imagen": "Trumpeter-Reserve-Viognier.webp",
    "notas": "Amarillo verdoso, con reflejos dorados. Las notas florales ( Magnolia) sobresalen y aparecen amalgamadas junto a frescas frutas de carozo (durazno, damasco) y leves notas tropicales que recuerdan al ananá. En boca, es de gran untuosidad, envolvente y con un final perfumado y persistente."
    },
    {
  id: 18,
    categoria: "Blanco",
    "varietal": "Pinot Grigio",
    "crianza": "6 meses roble francés",
    "bodega": "Rutini wines",
    "nombre": "Trumpeter Reserve Pinot Grigio",
    "imagen": "Trumpeter-Reserve-Pinot-Grigio.webp",
    "notas": "Amarillo cristalino, con matices verdosos y dorados. Sus aromas remiten a frutas blancas y citrus, con un fino toque de anís. Fresco y untuoso, su óptima acidez descubre un final de boca franco, de muy buena persistencia."
    },
    {
  id: 19,
    categoria: "Blanco",
    "varietal": "Blend",
    "crianza": "12 meses roble francés",
    "bodega": "Rutini wines",
    "nombre": "Antología L",
    "imagen": "Antologia-L.webp",
    "notas": "Es un vino de color amarillo dorado con brillantes reflejos verdosos. En nariz se perciben los aromas exuberantes a melón fresco y durazno blanco, combinados con notas de frutas tropicales, compañía perfecta para las notas cítricas y florales. Su entrada dulce es equilibrada debido a su crianza en roble. Es un vino muy armonioso, elegante y cremoso con gran amplitud en boca, impacta con un toque dulce y una acidez refrescante. Es un blend elaborado con 3 uvas: (Chardonnay, Gewürztraminer, Riesling)."
    },
    {
  id: 20,
    categoria: "Blanco",
    "varietal": "Torrontes",
    "crianza": "6 meses roble francés",
    "bodega": "Rutini wines",
    "nombre": "Trumpeter Reserve Torrontés",
    "imagen": "Trumpeter-Reserve-Torrontes.webp",
    "notas": "Amarillo claro con matiz verdoso. Las notas florales combinadas con su perfil cítrico de gran delicadeza lo hacen un delicioso y elegante vino blanco. Su final es intenso, aromático y de gran persistencia."
    },
    {
  id: 21,
    categoria: "Espumantes",
    "varietal": "Pinot Noir",
    "crianza": "18 meses roble francés",
    "bodega": "Rutini wines",
    "nombre": "Dominio Brut Nature",
    "imagen": "Dominio-Brut-Nature.webp",
    "notas": "Tonos coral cobrizos con matices color piel de cebolla. Burbujas pequeñas y persistentes. En nariz posee una sutil complejidad aromática en las que se destacan notas florales y frutadas. En boca es elegante, fresco, de gran cremosidad y una acidez equilibrada."
    },
    {
  id: 22,
    categoria: "Espumantes",
    "varietal": "Pinot Noir",
    "crianza": "5 meses roble francés",
    "bodega": "Rutini wines",
    "nombre": "Trumpeter Brut Nature",
    "imagen": "Trumpeter-Brut-Nature.webp",
    "notas": "Dorado ámbar suave y brillante, con reflejos verdosos. Finas y permanentes burbujas aparecen en la copa, mientras se desprenden notas aromáticas de elegante complejidad en las que sobresale la del pan recién horneado. En boca fresco y equilibrado, refleja un balance bien logrado entre acidez y mínimo tenor de azúcar que nos deja un agradable final."
    },
    {
  id: 23,
    categoria: "Espumantes",
    "varietal": "Pinot Noir, Chardonnay",
    "crianza": "24 meses sobre lías",
    "bodega": "Rutini wines",
    "nombre": "Rutini Brut Nature",
    "imagen": "Rutini-Brut-Nature.webp",
    "notas": "Dorado con reflejos amarillo verdosos. Burbuja pequeña, perezosa y muy persistente. Nariz compleja, donde se integran armoniosamente el aroma de pan sin hornear con frutas ( ananá, durazno blanco). En boca se perciben notas cítricas y tostadas, con un final limpio y fresco."
    },
    {
  id: 24,
    categoria: "Espumantes",
    "varietal": "Pinot Noir",
    "crianza": "18 meses sobre lías",
    "bodega": "Rutini wines",
    "nombre": "Encuentro Brut Nature Pinot Noir",
    "imagen": "Encuentro-Brut-Nature-Pinot-Noir.webp",
    "notas": "Los límpidos tonos coral-cobrizo, con matices piel de cebolla, están atravesados por cordones de pequeñas burbujas finísimas y permanentes. La sutileza de sus aromas recuerdan a notas florales y frutas confitadas. Una sensación amplia y refrescante permanece en boca y denota el rastro vivaz de su magnífica acidez y el suave posgusto a frutos secos (avellana)."
    },
    {
  id: 25,
    categoria: "Espumantes",
    "varietal": "Chardonnay, Pinot Noir",
    "crianza": "18 meses sobre lías",
    "bodega": "Rutini wines",
    "nombre": "Dominio Extra Brut",
    "imagen": "Dominio-Extra-Brut.webp",
    "notas": "Dorado ámbar suave y brillante. Burbujas pequeñas y persistentes. Su delicada paleta aromática la forman dejos a fruta blanca y pan tostado. Fresco, atractivo y con buen volumen en boca."
    },
    {
  id: 26,
    categoria: "Espumantes",
    "varietal": "Chardonnay, Pinot Noir",
    "crianza": "24 meses sobre lías",
    "bodega": "Rutini wines",
    "nombre": "Rutini Extra Brut",
    "imagen": "Rutini-Extra-Brut.webp",
    "notas": "Dorado, matiz amarillo acerado. Burbuja pequeña y permanente. Aromas sutiles a frutos blancos frescos, frutos secos y pan brioche. En boca, desarrolla una delicada cremosidad que deja sabores frescos, limpios y finalmente frutados."
    },
    {
  id: 27,
    categoria: "Espumantes",
    "varietal": "Malbec",
    "crianza": "",
    "bodega": "Rutini wines",
    "nombre": "Trumpeter Extra Brut Rosé",
    "imagen": "Trumpeter-Extra-Brut-Rose.webp",
    "notas": "Rosado color salmón, con reflejos coral. Las burbujas son finas y continuas, apenas servido en la copa flauta. Se descubren alegres notas a fruta roja madura (guinda, frutilla) combinadas con otras de membrillos asados y pan tostado. El final de boca es persistente, fresco y frutado."
    },
    {
  id: 28,
    categoria: "Rosado",
    "varietal": "Malbec",
    "crianza": "2 meses de barrica y 2 meses sobre línas",
    "bodega": "Rutini wines",
    "nombre": "Trumpeter Reserve Rosé de Malbec",
    "imagen": "Trumpeter-Reserve-Rose-de-Malbec.webp",
    "notas": "El proceso de elaboración de este Rosé de Malbec es el utilizado en la Provenza (Sur de Francia), lográndose un rosado cristalino con reflejos rubí cobrizo.Un sutil perfil avainillado enmarca las notas a frutas rojas frescas (cereza, frutilla y grosella) cómo también encontramos elegantes notas florales que lo hacen distinto al resto. Fácil de beber, es amable y sofisticado. Fresco y suave en boca."
    },
    {
  id: 29,
    categoria: "Rosado",
    "varietal": "Malbec",
    "crianza": "6 meses el 100% del corte en roble francés tostado liviano",
    "bodega": "Rutini wines",
    "nombre": "Rutini Rosé de Malbec",
    "imagen": "Rutini-Rose-de-Malbec.webp",
    "notas": "Rosado, color piel de cebolla con matices cobrizos. Su color anuncia la primavera. En nariz regala amenas notas florales, sutiles frutos rojos y algunos frutos secos como almendra y nuez. El coco y la vainilla aparecen discretamente por el aporte roblizo.Complejo y distinguido, en boca se presenta fresco y con un gran volumen que le otorga un prolongado final."
    },
    {
  id: 30,
    categoria: "Blanco",
    "varietal": "Gewurztraminer",
    "crianza": "4 meses en roble francés",
    "bodega": "Rutini wines",
    "nombre": "Rutini Gewurztraminer",
    "imagen": "Rutini-Gewurztraminer.webp",
    "notas": "Amarillo brillante con tonalidades verdosas, muy vivaz. En nariz insinúa perfume de flores, agua de azahar, frutas blancas, pomelo y un toque especiado. Frutado en boca, regala un paladar etéreo y amable, muy consistente, con logrado equilibrio de acidez. Blanco complejo y sofisticado."
    },
    {
  id: 31,
    categoria: "Destilado",
    "varietal": "Malbec",
    "crianza": "",
    "bodega": "Rutini wines",
    "nombre": "Destilado de Orujo de Malbec - Grapa",
    "imagen": "Rutini-Destilado-de-Orujo-de-Malbec-Grapa.webp",
    "notas": "Mientras se desarrolla la fermentación de este Malbec, los orujos se van empapando de compuestos aromáticos fermentativos. Al llegar al descube, se separan los orujos (semillas y hollejos) del vino base y se llevan a columna de destilación. Mediante arrastre por vapor de agua, a las temperaturas adecuadas y en 3 destilaciones sucesivas, se van obteniendo los alcoholes y compuestos que le aportan una gran complejidad aromática y delicadeza a este destilado de orujo de Malbec. Es un destilado que une la elegancia de su bouquet ­floral con la equilibrada presencia de las más finas notas frutales, típicas del racimo paradigmático de la Argentina."
    }
]

module.exports = ()=> {
    return wines
}