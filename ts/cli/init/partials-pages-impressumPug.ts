export const impressumPug: string = `extends ../template.pug

block variables
  -
    var title = "Impressum";
    var description = "Das Impressum der Webseite des Musikverein Wollbach.";
    var keywords = "Impressum, Kontakt, Übersicht, Webseiteninformationen, Informationen zur Webseite, Rechtiliches, Haftung, Haftungsausschluss, Datenschutz";

block pageStyles
  include ../styles/impressum.css

block content
  :marked
    # Kontakt

  img.fueller(src="/img/fueller.jpg" alt="Füller")

  :marked
    Wenn Sie wissen, an wen Sie sich wenden möchten, finden Sie hier die
    Anschriften und e-Mail Adressen aller [Kontaktpersonen unseres Vereines][vorstand].

    Falls Sie nicht wissen, an wen Sie sich wenden sollen, können Sie uns auch
    gerne eine e-Mail an [unsere Info][info] schicken.

    Wir freuen uns über Ihre Anregungen, Kritik und Hinweise und beantworten
    gerne Ihre Fragen!

    Alternativ erreichen Sie uns auch über unser [Kontaktformular][kontakt].

    # Angaben gemäß §5 TMG

    **Musikverein Wollbach 1866 e.V.**<br />
    79400 Kandern - Wollbach

    ## Vertreten durch:
    Die [Vorstandschaft][vorstand].

    ## Registereintrag
    Eintragung im Vereinsregister.

    <table class="registereintrag">
      <tr>
        <td>Registergericht</td>
        <td>Amtsgericht Freiburg i. Br.</td>
      </tr>
      <tr>
        <td>Registernummer</td>
        <td>VR 410834</td>
      </tr>
    </table>

    <!--
    ## Umsatzsteuer-ID
    Umsatzsteuer-Identifikationsnummer gemäß §27 a Umsatzsteuergesetz
    DE
    -->

    ## Aufsichtsbehörde
    Landratsamt Lörrach

    # Datenschutz und Haftungsauschluss
    - [Haftungsausschluss][haftung]
    - [Datenschutzerklärung][privacy]

    # Weitere Informationen
    - [Seiten - Übersicht][siteOv]
    - [Sitemap][sitemap]

    # Validierungen unserer Seite
    [![Valid HTML 5][htm]][htmLink]
    [![Valid CSS!][css]][cssLink]

    [haftung]:  haftung.html
    [privacy]:  datenschutz.html
    [vorstand]: vorstand.html
    [kontakt]:  kontaktformular.html
    [siteOv]:   seiten-uebersicht.html
    [sitemap]:  sitemap.xml

    [info]:    mailto:info@mv-wollbach.de

    [htm]:     http://www.w3basis.de/imgs/html5.png
    [htmLink]: http://validator.w3.org/check?uri=http%3A%2F%2Fmv-wollbach.de%2F
    [css]:     http://jigsaw.w3.org/css-validator/images/vcss-blue
    [cssLink]: http://jigsaw.w3.org/css-validator/validator?uri=http%3A%2F%2Fmv-wollbach.de%2F
`;
