"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var root = ReactDOM.createRoot(document.getElementById("root"));

var Dish = (function (_React$Component) {
    _inherits(Dish, _React$Component);

    function Dish() {
        _classCallCheck(this, Dish);

        _get(Object.getPrototypeOf(Dish.prototype), "constructor", this).apply(this, arguments);
    }

    _createClass(Dish, [{
        key: "render",
        value: function render() {

            return React.createElement(
                "div",
                { className: "recipe" },
                React.createElement(
                    "div",
                    { className: "item1" },
                    React.createElement(
                        "h1",
                        { className: "title" },
                        "Шоколадные пирожные (брауни)"
                    ),
                    React.createElement("div", { className: "start-img" }),
                    React.createElement(
                        "div",
                        { className: "info-start" },
                        "Брауни – шоколадный десерт с тонкой корочкой и влажной серединкой. Выпекается в виде пирога, а затем разрезается на прямоугольные пирожные. Для приготовления брауни важно использовать качественный шоколад – от него зависит вкус десерта."
                    ),
                    React.createElement(
                        "div",
                        { className: "products" },
                        React.createElement(
                            "h1",
                            null,
                            "Продукты"
                        ),
                        React.createElement(
                            "span",
                            null,
                            "Шоколад тёмный – 180 г"
                        ),
                        React.createElement(
                            "span",
                            null,
                            "Масло сливочное – 180 г"
                        ),
                        React.createElement(
                            "span",
                            null,
                            "Сахар – 220 г"
                        ),
                        React.createElement(
                            "span",
                            null,
                            "Яйца – 3 шт."
                        ),
                        React.createElement(
                            "span",
                            null,
                            "Мука – 75 г"
                        ),
                        React.createElement(
                            "span",
                            null,
                            "Соль – 1/4 ч. ложки"
                        )
                    )
                ),
                React.createElement(
                    "h1",
                    null,
                    "Пошаговый фото рецепт Шоколадные пирожные (брауни)"
                ),
                React.createElement(
                    "div",
                    { className: "item" },
                    React.createElement("div", { className: "img url1" }),
                    React.createElement(
                        "div",
                        { className: "info" },
                        "Подготавливаем продукты. Вкус этого лакомства во многом определяет качество шоколада. Выбирайте высококачественный тёмный шоколад с содержанием какао не менее 70%."
                    )
                ),
                React.createElement(
                    "div",
                    { className: "item" },
                    React.createElement("div", { className: "img url2" }),
                    React.createElement(
                        "div",
                        { className: "info" },
                        "Сливочное масло выкладываем в большую ёмкость (сотейник или подходящую для микроволновки посуду, если нагревать будем в печи). Шоколад разламываем на кусочки и отправляем к сливочному маслу."
                    )
                ),
                React.createElement(
                    "div",
                    { className: "item" },
                    React.createElement("div", { className: "img url3" }),
                    React.createElement(
                        "div",
                        { className: "info" },
                        "Растапливаем сливочное масло с шоколадом на водяной бане или в микроволновке. Если будете растапливать в микроволновке, делать это нужно очень аккуратно, чтоб не перегреть шоколад. Каждые 10-15 секунд достаём посуду из микроволновки и перемешиваем содержимое. Когда получится однородная масса, нагрев можно выключать. Шоколадной массе даём немного остыть."
                    )
                ),
                React.createElement(
                    "div",
                    { className: "item" },
                    React.createElement("div", { className: "img url4" }),
                    React.createElement(
                        "div",
                        { className: "info" },
                        "Духовку включаем для разогрева до 175 градусов. В подходящую для взбивания миску отправляем яйца, сахар и соль."
                    )
                ),
                React.createElement(
                    "div",
                    { className: "item" },
                    React.createElement("div", { className: "img url5" }),
                    React.createElement(
                        "div",
                        { className: "info" },
                        "Взбиваем яичную массу. Долго взбивать не нужно. Вполне достаточно взбить до момента растворения сахара и соли."
                    )
                ),
                React.createElement(
                    "div",
                    { className: "item" },
                    React.createElement("div", { className: "img url6" }),
                    React.createElement(
                        "div",
                        { className: "info" },
                        "Во взбитую яичную массу добавляем шоколадную смесь."
                    )
                ),
                React.createElement(
                    "div",
                    { className: "item" },
                    React.createElement("div", { className: "img url7" }),
                    React.createElement(
                        "div",
                        { className: "info" },
                        "Тщательно перемешиваем."
                    )
                ),
                React.createElement(
                    "div",
                    { className: "item" },
                    React.createElement("div", { className: "img url8" }),
                    React.createElement(
                        "div",
                        { className: "info" },
                        "К получившейся массе всыпаем просеянную муку."
                    )
                ),
                React.createElement(
                    "div",
                    { className: "item" },
                    React.createElement("div", { className: "img url9" }),
                    React.createElement(
                        "div",
                        { className: "info" },
                        "Аккуратно лопаткой вмешиваем муку в тесто."
                    )
                ),
                React.createElement(
                    "div",
                    { className: "item" },
                    React.createElement("div", { className: "img url10" }),
                    React.createElement(
                        "div",
                        { className: "info" },
                        "Прямоугольную или квадратную форму для выпечки застилаем пергаментом. Выливаем шоколадное тесто в форму и отправляем выпекаться примерно на 25 минут."
                    )
                ),
                React.createElement(
                    "div",
                    { className: "item" },
                    React.createElement("div", { className: "img url11" }),
                    React.createElement(
                        "div",
                        { className: "info" },
                        "Брауни должен получиться с влажной серединкой и хрустящей корочкой, поэтому очень важно не передержать десерт в духовке."
                    )
                ),
                React.createElement(
                    "div",
                    { className: "item" },
                    React.createElement("div", { className: "img url12" }),
                    React.createElement(
                        "div",
                        { className: "info" },
                        "Достаём брауни из духовки и даём полностью остыть. Остывший брауни извлекаем из формы и разрезаем на квадраты."
                    )
                ),
                React.createElement(
                    "div",
                    { className: "item" },
                    React.createElement("div", { className: "img url13" }),
                    React.createElement(
                        "div",
                        { className: "info" },
                        "Подаём брауни к столу."
                    )
                )
            );
        }
    }]);

    return Dish;
})(React.Component);

root.render(React.createElement(
    React.StrictMode,
    null,
    React.createElement(Dish, null)
));
