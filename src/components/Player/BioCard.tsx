import CardBg from "/src/assets/DressRoom/card_bg.png";

function BioCard() {
  return (
    <div
      className="relative w-full h-full rotate-4"
      style={{
        backgroundImage: `url(${CardBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        aspectRatio: "767 / 1067",
      }}
    >
      <div className="absolute inset-0 p-4 overflow-y-scroll scrollbar-custom">
        <div className="card-title text-red">Oto Haščák</div>
        <br />
        <div className="card-text text-black">
          „Oťas” je bývalý slovenský hokejový útočník. Skaut hokejových talentov
          pre NHL, naposledy v New York Rangers.
        </div>
        <br />
        <div className="card-text text-red">NARODENÝ:</div>
        <div className="card-text text-black">31. januára 1964 v Martine</div>
        <br />
        <div className="card-text text-black">
          Na ligovej úrovni začal v rodnom Martine, no hokejovo najviac vyrástol
          a dozrel počas vojenčiny od roku 1984 v Dukle Trenčín. V jej drese
          získal 2x striebornú medailu v ére ČSSR, po rozdelení 2x striebro a lx
          bronz. Hoci ho v roku 1989 draftovali do NHL, výlučne pôsobil v Európe
          - vo švédskej Elitserien i prvej divízii, nemeckej DEL, českej
          extralige a fínskej SM-lige. Ligový titul vybojoval s tímom HC Vsetín
          v sezóne 1996/97. Odohral 577 ligových zápasov, v ktorých strelil 219
          gólov. Kariéru ukončil v roku 2001 v Dukle Trenčín.
        </div>
        <div className="card-text text-black">
          Za Česko-Slovensko sa zúčastnil dvoch svetových šampionátov (1989 a
          1990), na oboch získal bronz. Za čs. reprezentáciu odohral 62 zápasov
          a strelil 1 1 gólov.
        </div>
        <br />
        <div className="text-red card-text">NAJVÄČŠÍ ÚSPECH:</div>
        <div className="card-text text-black">
          V slovenskej reprezentácii spolu odohral 60 zápasov, strelil 17 gólov.
          Výrazne sa zaslúžil o zlato a postup samostatnej hokejovej
          reprezentácie Slovenska z C-kategórie v roku 1994 a o zlato i postup z
          B-kategórie MS medzi svetovú elitu v roku 1995. Pricestoval do
          Bratislavy na posledný zápas proti Bielorusku, ktorému strelil oba
          víťazné góly (2:1 ). Vďaka tesnému víťazstvu postúpilo Slovensko do
          A-kategórie MS II H F. Po skončení aktívnej hráčskej kariéry zostal
          pri hokeji. Najskôr sa stal hrajúcim trénerom Dukly Trenčín, následne
          viceprezidentom klubu, funkcionársky pôsobí aj v SZĽH.
        </div>
        <br />
        <div className="card-text text-black">
          Do Siene slávy slovenského hokeja ho uviedli v roku 2019.
        </div>
      </div>
    </div>
  );
}

export default BioCard;
