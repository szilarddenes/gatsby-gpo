import React, {useContext} from "react";
import {PopupStyles} from './styles'
import { ThemeContext } from "providers/ThemeProvider"


const Popup = props => {
  const { theme } = useContext(ThemeContext);

  return (
    <PopupStyles theme={theme}>
    <div className="popup-box"theme={theme} >
      <div className="box" theme={theme}>
        <span role="button" className="close-icon" onClick={props.handleClose} onKeyDown={props.handleClose}>x</span>
                     <body class="c9"><p class="c0"><span class="c1">POLITICA DE CONFIDENTIALITATE A SITE-ULUI GPOAUTO.RO</span></p><p class="c0"><span class="c1">PROTECTIA PERSOANELOR CU PRIVIRE LA PRELUCRAREA DATELOR CU CARACTER PERSONAL</span></p><p class="c0"><span class="c1">gpoauto.ro se angajeaza sa nu transmita datele personale ale utilizatorilor site-ului catre terti si sa le foloseasca numai in scopul stabilirii contactului cu clientii sai, precum si in scopul informarii acestora asupra aspectelor legate de functionarea site-ului si a ofertelor acestuia.</span></p><p class="c0"><span class="c1">Compania va retine datele personale si le va folosi in scopul informarii utilizatorilor si pentru comunicarea cu acestia priviind serviciilor oferite.</span></p><p class="c0"><span class="c1">gpoauto.ro nu promoveaza SPAM-ul. Orice utilizator care a furnizat explicit adresa sa de email pe site-ul gpoauto.ro, poate opta pentru stergerea acesteia din baza noastra de date.</span></p><p class="c0"><span class="c1">De asemenea, daca utilizatorii nu mai doresc sa primeasca eventuale mesaje sau informatii, se pot dezabona direct prin email la hr10gpo(@)gmail.com.</span></p><p class="c0"><span class="c1">&nbsp;</span></p><p class="c0"><span class="c1">SECURITATEA DATELOR PERSONALE</span></p><p class="c0"><span class="c1">Confidentialitatea datelor tale cu caracter personal este importanta pentru noi. Acest angajament de respectare a confidentialitatii iti explica ce date cu caracter personal colecteaza gpoauto.ro de la tine, prin intermediul interactiunilor noaste si modul in care utilizam datele respective.</span></p><p class="c0"><span class="c1">CINE SUNTEM </span></p><p class="c0"><span class="c1">Datele noastre de identificare sunt urmatoarele: </span></p><p class="c0"><span class="c1">Nume: Palfi Gaspar Csaba PFA</span></p><p class="c0"><span>CUI: </span><span class="c8">23320004</span></p><p class="c0"><span class="c1">Adresa Nr. 567 SATU MARE, JUD. HARGHITA</span></p><p class="c0"><span class="c1">Telefon: +40 751-126-339</span></p><p class="c0"><span class="c1">Email: hr10gpo(@)gmail.com</span></p><p class="c0"><span class="c1">Prin &bdquo;date personale&rdquo; se denumesc informatiile unice individuale privind o persoana fizica identificata sau identificabila (&bdquo;persoana vizata&rdquo;), referitoare la nume, adresa, cod numeric personal, IP sau numar de telefon, date de localizare, un identificator online sau la unul sau mai multe elemente specifice, proprii identitatii sale fizice, fiziologice, genetice, psihice, economice, culturale sau sociale.</span></p><p class="c0"><span class="c1">De fiecare data cand solicitam datele tale personale o sa iti explicam scopul pentru care ne sunt necesare, unde pastram datele tale si cine are acces la acestea. Bineinteles, te informam ca oricand doresti, iti punem la dispozitie informatiile pe care le detinem despre tine si bineinteles ca le vom sterge daca ne soliciti acest lucru.</span></p><p class="c0"><span class="c1">&nbsp;Ce date personale colectam si de ce le colectam</span></p><p class="c0"><span class="c1">Colectam date cu caracter personal pentru a putea raspunde cu succes solicitarilor tale. Furnizezi unele din aceste date direct, de exemplu, atunci cand ne scrii un mesaj prin intermediul formularului de contact sau, indirect, date de identificare prin adresa ta IP. Noi nu folosim adresa ta IP pentru a te identifica, dar te informam ca aceasta este stocata in momentul in care accesezi site-ul nostru &ndash; in principal din motive de securitate. Ai dreptul de a solicita stergerea IP-ului!</span></p><p class="c0"><span class="c1">In functie de interactiunile pe care le ai cu site-ul nostru, datele cu caracter personal pe care le colectam sunt urmatoarele:</span></p><ul class="c2 lst-kix_list_1-0 start"><li class="c3 c5 li-bullet-0"><span class="c1">Nume si prenume &ndash; pentru identificare;</span></li><li class="c5 c3 li-bullet-0"><span class="c1">Adresa de email &ndash; pentru comunicare;</span></li><li class="c5 c3 li-bullet-0"><span class="c1">Numar de telefon &ndash; pentru comunicare;</span></li><li class="c0 c3 li-bullet-0"><span class="c1">Mesaj &ndash; Camp in care poti expune problema sau intrebarea ta.</span></li></ul><p class="c0"><span class="c1">Datele cu caracter personal solicitate in momentul transmiterii mesajului sunt folosite DOAR pentru a putea lua legatura cu tine si a raspunde cererii tale. Ulterior vor fi solicitate si date prevazute de codul fiscal pentru facturare daca este cazul. </span></p><p class="c0"><span class="c1">Date transmise involuntar, atunci cand interactionezi cu websitul nostru:</span></p><p class="c0"><span class="c1">Adresa IP&ndash; Atunci cand vizitezi situl nostru, adresa IP este inregistrata. Insa noi NU folosim adresa ta de IP pentru a te identifica sau pentru a fi folosita in alte scopuri.</span></p><p class="c0"><span class="c1">Sistemul de operare, browserul, activitatea de navigare si alte informatii despre modul in care ai interactionat cu site-ul. Putem colecta aceste informatii prin folosirea cookie-urilor sau a altor tehnologii similare.</span></p><p class="c0"><span class="c1">Cookie-uri</span></p><p class="c0"><span class="c1">Folosim doar cookie-uri pentru statistici, cookie-uri ce pot fi dezactivate direct din browser-ul tau. Cookie-urile de statistica ii ajuta pe proprietarii unui site sa inteleaga modul in care vizitatorii interactioneaza cu site-urile prin colectarea si raportarea informatiilor in mod anonim. Furnizorii de servicii cu care colaboram pentru a masura traficul site-ului este Google Analytics.</span></p><p class="c0"><span class="c1">Care este temeiul legal pentru prelucrarea acestor date?</span></p><p class="c0"><span class="c1">Datele pe care ni le oferi voluntar (nume, prenume, adresa, telefon, adresa de email) &ndash; temeiul legal este acela de a face demersuri la cererea persoanei vizate inainte de incheierea unui contract (art. 6 alin. (1) lit. bsi c din Regulamentul (UE) 679/2016).</span></p><p class="c0"><span class="c1">In privinta datelor pe care le colectam automat prin folosirea cookie-urilor sau a altor tehnologii similare, temeiul pentru prelucrare este consimtamantul. Odata cu accesarea site-ului, si selectarea optiunii DA/De acord iti dai in mod valabil consimtamantul asupra prelucrarii.</span></p><p class="c0"><span class="c1">Care este scopul colectarii datelor si cum folosim informatiile tale personale</span></p><p class="c0"><span class="c1">Poti opta in legatura cu datele pe care le colectam. Atunci cand ti se solicita sa furnizezi date cu caracter personal, ai dreptul sa refuzi. Daca alegi sa nu furnizezi date care sunt necesare pentru a furniza un serviciu sau pentru a comunica cu noi, exista posibilitatea sa nu poti obtine informatiile pe care le doresti.</span></p><p class="c0"><span class="c1">Numele si prenumele</span></p><p class="c0"><span class="c1">Cum iti folosim numele si prenumele? &ndash; Pentru contactul cu tine, pentru detectarea si prevenirea fraudelor si pentru asistenta client.</span></p><p class="c0 c6"><span class="c1"></span></p><p class="c0"><span class="c1">De ce iti folosim numele si prenumele? &ndash; Este necesar ca tu sa ne furnizezi anumite date personale pentru a putea incepe comunicarea. De asemenea, pentru a preveni folosirea datelor tale de catre alti utilizatori, este necesar sa iti trimitem email-uri pentru a-ti confirma identitatea. Nu in ultimul rand pentru a oferi servicii de relatii cu clientii si servicii de asistenta (detalii) fie direct, fie prin telefon.</span></p><p class="c0"><span class="c1">Informatii despre telefon, laptop sau tableta si despre cum folosesti site-ul</span></p><p class="c0"><span class="c1">Informatiile pe care ni le dai cand navighezi pe site-ul nostru, inclusiv adresa IP si tipul dispozitivului. Totodata, salvam informatii despre modul in care folosesti site-ul si aplicatia.</span></p><p class="c0"><span class="c1">Cum folosim informatiile despre telefonul, laptop-ul sau tableta ta si despre cum folosesti site-ul:</span></p><p class="c0 c4"><span class="c1">Imbunatatim experienta ta pe site, oferindu-ti versiunea cel mai bine adaptata dispozitivului tau.</span></p><p class="c0 c4"><span class="c1">Protejam site-ul</span></p><p class="c0 c6"><span class="c1"></span></p><p class="c0"><span class="c1">De ce?</span></p><p class="c0 c7"><span class="c1">Oferirea celei mai bune experiente de navigare pe site.</span></p><p class="c0 c7"><span class="c1">Pentru a preveni si a detecta fraudele impotriva ta sau a site-ului nostru. Pentru a putea asigura confidentialitatea datelor.</span></p><p class="c0"><span class="c1">Nu esti obligat sa ne oferi niciuna din informatiile de mai sus, insa daca nu faci asta, s-ar putea sa nu ai posibilitatea de a te bucura de deplina experienta de navigare pe site-ul nostru si pentru serviciile pe care ti le punem la dispozitie.</span></p><p class="c0"><span class="c1">Perioada de retentie a datelor</span></p><p class="c0"><span class="c1">&nbsp;Stocam datele cu caracter personal doar pe perioada necesara indeplinirii scopurilor, dar numai pana la momentul in care hotarasti sa optezi in scris la office@gpoauto.ro pentru stergerea acestor date. In cazul in care ti-am emis o factura sau ai comunicat cu noi prin formularele de contact pe care ti le oferim, datele tale vor fi stocate timp de 10 ani, conform legii.</span></p><p class="c0"><span class="c1">&nbsp;Cu cine partajam datele cu caracter personal?</span></p><p class="c0"><span class="c1">Nu vom dezvalui informatiile tale catre terte parti, pentru a fi utilizate in propriile scopuri de marketing sau comerciale ale acestora, fara consimtamantul tau.</span></p><p class="c0"><span class="c1">Totusi, este posibil sa dezvaluim informatiile tale catre urmatoarele entitati:</span></p><p class="c0"><span class="c1">Furnizori de servicii. Putem dezvalui informatiile tale altor companii care ne furnizeaza servicii si actioneaza in calitate de persoane imputernicite, cum ar fi companiile care ne ajuta pentru facturare, companiilor care se ocupa de mentenanta website-ului sau care trimit email-uri in numele nostru.</span></p><p class="c0"><span class="c1">Aceste entitati sunt selectate cu o grija deosebita pentru a ne asigura ca indeplinesc cerintele specifice in materie de protectie a datelor cu caracter personal. Aceste entitati au o capacitate limitata de a utiliza informatiile tale in alte scopuri decat cel de a ne furniza servicii.</span></p><p class="c0"><span class="c1">Informatiile oferite de tine, ce contin date de identificare pot fi folosite in scopul intocmirii documentelor de angajare si a altor documente ce vizeaza exclusiv relatiile de munca sau pentru comunicari comerciale sau raspunsuri la solicitarile trimise de tine, iar in cazul unor solicitari legitime, vor fi transmise catre autoritatile statului: Inspectoratul Teritorial de Munca, Agentia pentru ocuparea Fortelor de Munca, Autoritati Judecatoresti, altor parti cu consimtamantul sau la instructiunile tale.</span></p><p class="c0"><span class="c1">In afara dezvaluirilor descrise in prezenta Politica de confidentialitate, este posibil sa transmitem informatiile tertilor carora consimti sau soliciti sa efectuam o asemenea dezvaluire.</span></p><p class="c0"><span class="c1">Ce drepturi ai ca persoana vizata?</span></p><p class="c0"><span class="c1">Protect&#806;ia persoanelor fizice i&#770;n ceea ce prives&#806;te prelucrarea datelor cu caracter personal este un drept fundamental. Articolul 8 alineatul (1) din Carta drepturilor fundamentale a Uniunii Europene (&bdquo;carta&rdquo;) s&#806;i articolul 16 alinea&not;tul (1) din Tratatul privind funct&#806;ionarea Uniunii Europene (TFUE) preva&#774;d dreptul orica&#774;rei persoane la protect&#806;ia datelor cu caracter personal.</span></p><p class="c0"><span class="c1">Drepturile persoanelor vizate privind protectia persoanelor cu privire la prelucrarea datelor cu caracter personal si libera circulatie a acestor date: dreptul la informare si acces; dreptul de interventie asupra datelor; dreptul la rectificare; dreptul la stergerea datelor; dreptul la restrictionarea prelucrarii; dreptul la portabilitatea datelor; dreptul de opozitie si procesul decizional individual automatizat, inclusiv crearea de profiluri; dreptul de a depune o plangere in fata autoritatii de supraveghere (www.dataprotection.ro).</span></p><p class="c0"><span class="c1">gpoauto.ro prelucreaza datele dumneavoastra cu caracter personal, prin mijloace automatizate si manuale, destinate emiterii facturilor, colectarii creantelor legate de acestea precum si furnizarii de informatii legate de activitatea acesteia.</span></p><p class="c0"><span class="c1">Acceptarea termenilor si conditiilor de utilizare a site-ului reprezinta acceptul dumneavoastra de prelucrare a datelor personale. Refuzul dumneavoastra determina imposibilitatea furnizarii serviciilor.</span></p><p class="c0"><span class="c1">Informatiile inregistrate sunt destinate utilizarii de catre gpoauto.ro si sunt comunicate numai urmatorilor destinatari: persoanelor vizate (clienti gpoauto.ro).</span></p><p class="c0"><span class="c1">Conform Legii nr. 677/2001 si al OUG 34/2014 pentru protectia persoanelor cu privire la prelucrarea datelor cu caracter personal si libera circulatie a acestor date, beneficiati de dreptul de acces, de interventie asupra datelor si de dreptul de a nu fi supus unei decizii individuale. Totodata, aveti dreptul sa va opuneti prelucrarii datelor personale care va privesc si sa solicitati stergerea datelor. Pentru exercitarea acestor drepturi, va puteti adresa cu o cerere scrisa, datata si semnata la gpoauto.ro. De asemenea, va este recunoscut dreptul de a va adresa justitiei. Datele dumneavoastra nu vor fi transferate tertilor.</span></p><p class="c0"><span class="c1">Datele personale furnizate catre gpoauto.ro vor fi folosite numai in scopul declarat al acestui site, respectiv comanda, executia si livrarea de bunuri si servicii, conform legilor in vigoare. Gpoauto.ro nu furnizeaza adresa de e-mail unor terti, nu incurajeaza spam-urile si nu face publice datele furnizate de clientii sai fara acordul explicit al acestora. Orice client are posibilitatea de a sterge din baza de date adresa de e-mail furnizata.</span></p><p class="c0"><span class="c1">gpoauto.ro nu este responsabil pentru daune care apar sau pot apare ca urmare a neglijentei cumparatorului privind securitatea si confidentialitatea navigarii sale pe site-ul nostru.</span></p><p class="c0 c6"><span class="c1"></span></p>
    </div>
    </PopupStyles>
  );
};

export default Popup;