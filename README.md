# Com editar preus i textos
Tot el que es pot canviar (preus, descripcions, ressenyes, textos en 5 idiomes, codi d’accés, pack escoles i descomptes) és dins de `index.html`, al final, en el bloc **«EDITA AQUÍ»**. Obre’l amb el Bloc de notes, canvia el text entre cometes, desa i recarrega amb Ctrl+F5.

# Petjades de Les Preses — guia ràpida

## Veure la web
Fes doble clic a `index.html`. Funciona sense internet ni servidor.

## Pujar-la a Hostinger
1. Entra al Gestor de fitxers (public_html).
2. Arrossega TOTS els fitxers i carpetes d’aquest zip (inclòs `.htaccess`).
3. Obre la teva adreça web. Si no veus un canvi, prem Ctrl+F5 o canvia `?v=20261028` per una data nova a `index.html`.

Les animacions usen GSAP i ScrollTrigger (carpeta `lib/`, ja inclosos). El tipus de lletra Outfit es carrega de Google Fonts; sense internet es veu amb una lletra del sistema.

## Què editar (amb el Bloc de notes)
- **`index.html` (bloc «EDITA AQUÍ»)**: preus (`p`: 1 persona, 2 persones, família), noms i descripcions de les 4 activitats en 5 idiomes, ressenyes i consells de sostenibilitat dels jocs.
- **`assets/img/`**: substitueix `act1.svg`…`act4.svg` per fotos reals (`act1.jpg`…) i canvia el camí `img` a `index.html` (bloc «EDITA AQUÍ»). Les ressenyes actuals són d’EXEMPLE: canvia-les per opinions reals.
- **`main.js`**: descomptes per nombre d’activitats (`DISC=[0,0,.1,.15,.2]`) i coordenades dels 7 llocs (`LL`; els marcats amb 1 són aproximats).

## Codis QR
Cada lloc té una adreça: `https://LA-TEVA-WEB/#p1` … `#p7` (ordre de la ruta). Genera el QR de cada una amb qualsevol generador gratuït.

## Passar-ho a app
Ja inclou `manifest.webmanifest` i `sw.js` (PWA): amb la web publicada en https, el mòbil ofereix «Afegir a la pantalla d’inici». Per a Play Store/App Store es pot empaquetar després amb Capacitor.

## Pagaments
Ara el pagament és una **simulació** (no es cobra res). Per cobrar de debò cal un proveïdor (Stripe, Redsys, Bizum…).

## Mapa
El contorn de Les Preses i dels municipis veïns és real (dades obertes dels municipis de Catalunya 2025, Institut Cartogràfic; repositori ArnauInes/geometries_cat_bcn_2024). Posicions verificades: poble, Volcà Racó, Sant Martí del Corb i Parc de Pedra Tosca. Sant Miquel del Corb, Puig Rodó i Bosc de Tosca són aproximades (`LL` a main.js, marcades amb 1). L’escala de 1 km del mapa és real.

## Fotos, estrelles i bloqueig del joc
- Fotos: `assets/img/act1.jpg` … `act6.jpg` (bici, QR, picnic, artesania, dinar, tour). Valoració (`r`, `rc`) i preu (`p`) de cada activitat a `index.html` (bloc «EDITA AQUÍ»).
- El joc només s’obre si el pass inclou «Reptes amb codi QR». Aquest bloqueig es fa al navegador (serveix per a la demo); per protegir-lo de debò cal validar els codis d’entrada en un servidor.


## Nombre de persones i codi d’accés
- El visitant tria qualsevol nombre de persones (1-99) amb el selector + / − del creador del pass; el preu és preu per persona × persones, amb el descompte per nombre d’activitats.
- **Codi d’accés al joc (per a demostracions):** `PETJADES-DEMO`. Es canvia a `index.html` (bloc «EDITA AQUÍ») (camp `CODE`). Es demana a l’avís «Joc bloquejat». Atenció: el codi és visible a qui obri els fitxers; serveix per ensenyar el joc, no per protegir-lo de veritat. Per treure l’accés: botó «Esborrar les meves compres (demo)».

## Pack escoles
Secció «Per a escoles»: classes de 25 a 30 alumnes, totes les activitats, **70 € per alumne** (el preu normal de les 6 activitats és 155 €, és a dir, uns −55 %) i 2 docents acompanyants gratis. Preu, mínim i màxim d’alumnes: `SCH` a `index.html` (bloc «EDITA AQUÍ»). La reserva inclou «Reptes amb codi QR», així que desbloqueja el joc.

## Pack escoles i accés al joc
- Pack escoles: les 6 activitats per a classes de 25 a 30 alumnes, **60 € per alumne** (preu normal 155 €, uns −61 %) i 2 docents gratuïts. Es canvia a `index.html` (bloc «EDITA AQUÍ») (`SCH`: `pp` = preu per alumne, `min`, `max`, `free` = docents gratuïts). Preus orientatius, a validar amb els proveïdors.
- El joc **no es manté desbloquejat en recarregar la pàgina**: cal tornar a posar el codi d’accés de demostració (`CODE` a `index.html` (bloc «EDITA AQUÍ»)) o el codi de l’entrada comprada (PRES-… / ESC-…).

## Progrés del joc
El progrés (llocs completats) es guarda al navegador. Si entres amb el codi de demostració `PETJADES-DEMO`, el joc **comença de zero**. També hi ha el botó «Reiniciar el joc» a la pestanya Recompenses.

## Pantalla de càrrega
Al començar es veu una pantalla verda amb petjades que es dibuixen, el nom «Petjades», una frase d’intro (el títol de la portada, es canvia a «Textos» → `h1`) i «Les Preses · La Garrotxa». Dura uns 2,7 segons com a mínim. Els colors i el text fix són a `index.html` (bloc `#pre`) i `styles.css`.
