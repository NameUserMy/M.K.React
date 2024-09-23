const root = ReactDOM.createRoot(document.getElementById("root"));

class Dish extends React.Component {
    render() {

        return <div className="recipe">

            <div className="item1">
                <h1 className="title" >Шоколадные пирожные (брауни)</h1>
                <div className="start-img"></div>
                <div className="info-start" >
                    Брауни – шоколадный десерт с тонкой корочкой и влажной серединкой.
                    Выпекается в виде пирога, а затем разрезается на прямоугольные пирожные.
                    Для приготовления брауни важно использовать качественный шоколад – от него зависит вкус десерта.</div>
                <div className="products">
                    <h1>Продукты</h1>
                    <span>Шоколад тёмный – 180 г</span>
                    <span>Масло сливочное – 180 г</span>
                    <span>Сахар – 220 г</span>
                    <span>Яйца – 3 шт.</span>
                    <span>Мука – 75 г</span>
                    <span>Соль – 1/4 ч. ложки</span>
                </div>
            </div>
            <h1>Пошаговый фото рецепт Шоколадные пирожные (брауни)</h1>

            <div className="item">
                <div className="img url1" ></div>
                <div className="info">
                    Подготавливаем продукты.
                    Вкус этого лакомства во многом определяет качество шоколада.
                    Выбирайте высококачественный тёмный шоколад
                    с содержанием какао не менее 70%.
                </div>
            </div>

            <div className="item">
                <div className="img url2" ></div>
                <div className="info">
                    Сливочное масло выкладываем в большую ёмкость (сотейник или подходящую для микроволновки посуду, если нагревать будем в печи). Шоколад разламываем на кусочки и отправляем к сливочному маслу.
                </div>
            </div>

            <div className="item">
                <div className="img url3" ></div>
                <div className="info">
                    Растапливаем сливочное масло с шоколадом на водяной бане или в микроволновке. Если будете растапливать в микроволновке, делать это нужно очень аккуратно, чтоб не перегреть шоколад. Каждые 10-15 секунд достаём посуду из микроволновки и перемешиваем содержимое. Когда получится однородная масса, нагрев можно выключать. Шоколадной массе даём немного остыть.
                </div>
            </div>

            <div className="item">
                <div className="img url4" ></div>
                <div className="info">
                    Духовку включаем для разогрева до 175 градусов.
                    В подходящую для взбивания миску отправляем яйца, сахар и соль.
                </div>
            </div>
            <div className="item">
                <div className="img url5" ></div>
                <div className="info">

                    Взбиваем яичную массу. Долго взбивать не нужно. Вполне достаточно взбить до момента растворения сахара и соли.
                </div>
            </div>

            <div className="item">
                <div className="img url6" ></div>
                <div className="info">

                    Во взбитую яичную массу добавляем шоколадную смесь.

                </div>
            </div>
            <div className="item">
                <div className="img url7" ></div>
                <div className="info">
                    Тщательно перемешиваем.
                </div>
            </div>

            <div className="item">
                <div className="img url8" ></div>
                <div className="info">
                    К получившейся массе всыпаем просеянную муку.
                </div>
            </div>

            <div className="item">
                <div className="img url9" ></div>
                <div className="info">
                Аккуратно лопаткой вмешиваем муку в тесто.
                </div>
            </div>
            <div className="item">
                <div className="img url10" ></div>
                <div className="info">
                    Прямоугольную или квадратную форму для выпечки застилаем пергаментом. Выливаем шоколадное тесто в форму и отправляем выпекаться примерно на 25 минут.
                </div>
            </div>
            <div className="item">
                <div className="img url11" ></div>
                <div className="info">
                
Брауни должен получиться с влажной серединкой и хрустящей корочкой, поэтому очень важно не передержать десерт в духовке.
                </div>
            </div>

            <div className="item">
                <div className="img url12" ></div>
                <div className="info">
                
Достаём брауни из духовки и даём полностью остыть.
Остывший брауни извлекаем из формы и разрезаем на квадраты.
                </div>
            </div>

            <div className="item">
                <div className="img url13" ></div>
                <div className="info">
                Подаём брауни к столу.
                </div>
            </div>

        </div>
    }

}


root.render(
    <React.StrictMode>
        <Dish />
    </React.StrictMode>
)

