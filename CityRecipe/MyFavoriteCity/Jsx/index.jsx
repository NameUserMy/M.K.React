const root = ReactDOM.createRoot(document.getElementById("root"));

const City = () =>
    <div className="city">
        <h1 className="title">Одесса</h1>
        <div className="info">
            Территория современной Одессы была населена с древнейших времен. 
            В Артиллерийском парке найден курганный могильник эпохи бронзы II тыс. до н. э.
            С V века до н. э. на будущей территории современной Одессы и Одесского залива находились античные поселения 
            в гавани Истриян и Исиак, 
            остатки одного из которых были обнаружены прямо под нынешним Приморским бульваром. 
            Уровень воды был иным, более низким, и береговая линия проходила намного дальше, 
            чем сейчас находится Одесский маяк. Именно недалеко от маяка и за ним до сих пор иногда находят 
            древнегреческие артефакты. Из-за более низкого уровня воды Тендровская коса продолжалась значительно дальше, 
            чем сейчас, и поселение в районе маяка фактически контролировало выход из устья Буга и Днепра в Чёрное море, 
            и, таким образом, имело стратегическое значение. Археологические артефакты подтверждают существование связей 
            между Одесским регионом и восточным Средиземноморьем. Уничтожены поселения предположительно 
            в IV—III веках до н. э. кочевыми племенами из Азии.
            С конца 4 ст. территория будущей Одессы находилась во владении различных кочевых племён (печенегов, половцев). 
            В середине 13 ст. попала во владение Золотой Орды, затем Крымского ханства, 
            Великого княжества Литовского, Османской империи.
            </div>
        <div className="img">
            <div id="a" ></div>
            <div id="b" ></div>
            <div id="c" ></div>
        </div>
    </div>


root.render(
    <React.StrictMode>
        <City />
    </React.StrictMode>
)

