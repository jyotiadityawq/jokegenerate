const generateBtn = document.querySelector('.generate-btn');
const quoteText = document.querySelector('.quote');
const categorySelect = document.getElementById('category');
const understandingLevelSelect = document.getElementById('understanding-level');
const languageSelect = document.getElementById('language');

const jokes = {
    programming: {
        normal: {
            english: [
                "Why do programmers prefer dark mode? Because light attracts bugs!",
                "Why do Java developers wear glasses? Because they don't C#.",
                "How many programmers does it take to change a light bulb? None, that's a hardware problem.",
                "A programmer's wife asks him to go to the store. She says, 'Buy a loaf of bread. If they have eggs, buy a dozen.' He comes home with 12 loaves of bread."
            ],
            spanish: [
                "¿Por qué los programadores prefieren el modo oscuro? ¡Porque la luz atrae a los insectos!",
                "¿Por qué los desarrolladores de Java usan gafas? Porque no ven C#.",
                "¿Cuántos programadores se necesitan para cambiar una bombilla? Ninguno, eso es un problema de hardware.",
                "La esposa de un programador le pide que vaya a la tienda. Ella dice: 'Compra una barra de pan. Si tienen huevos, compra una docena.' Él regresa a casa con 12 barras de pan."
            ]
        },
        medium: {
            english: [
                "There are only two kinds of programming languages: those people always bitch about and those nobody uses.",
                "Walking on water and developing software from a specification are easy if both are frozen.",
                "In order to be irreplaceable, one must always be different.",
                "If debugging is the process of removing software bugs, then programming must be the process of putting them in."
            ],
            spanish: [
                "Solo hay dos tipos de lenguajes de programación: aquellos de los que la gente siempre se queja y aquellos que nadie usa.",
                "Caminar sobre el agua y desarrollar software a partir de una especificación es fácil si ambos están congelados.",
                "Para ser insustituible, uno debe ser siempre diferente.",
                "Si la depuración es el proceso de eliminar errores de software, entonces la programación debe ser el proceso de ponerlos."
            ]
        },
        high: {
            english: [
                "Programming isn't about what you know; it's about what you can figure out.",
                "The best performance improvement is the transition from the nonworking state to the working state.",
                "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
                "Simplicity is the soul of efficiency."
            ],
            spanish: [
                "La programación no se trata de lo que sabes; se trata de lo que puedes averiguar.",
                "La mejor mejora de rendimiento es la transición del estado no funcional al estado funcional.",
                "Cualquier tonto puede escribir código que una computadora pueda entender. Los buenos programadores escriben código que los humanos puedan entender.",
                "La simplicidad es el alma de la eficiencia."
            ]
        }
    },
    daily: {
        normal: {
            english: [
                "Why don't scientists trust atoms? Because they make up everything!",
                "What do you get when you cross a snowman and a vampire? Frostbite.",
                "Why did the scarecrow win an award? Because he was outstanding in his field!"
            ],
            spanish: [
                "¿Por qué los científicos no confían en los átomos? ¡Porque lo componen todo!",
                "¿Qué obtienes cuando cruzas un muñeco de nieve y un vampiro? Congelación.",
                "¿Por qué el espantapájaros ganó un premio? ¡Porque era sobresaliente en su campo!"
            ]
        },
        medium: {
            english: [
                "I used to play piano by ear, but now I use my hands.",
                "I told my wife she was drawing her eyebrows too high. She looked surprised.",
                "Why don't skeletons fight each other? They don't have the guts."
            ],
            spanish: [
                "Solía tocar el piano de oído, pero ahora uso mis manos.",
                "Le dije a mi esposa que estaba dibujando sus cejas demasiado alto. Ella parecía sorprendida.",
                "¿Por qué los esqueletos no se pelean entre sí? No tienen agallas."
            ]
        },
        high: {
            english: [
                "I'm reading a book on anti-gravity. It's impossible to put down!",
                "Did you hear about the mathematician who’s afraid of negative numbers? He will stop at nothing to avoid them.",
                "Parallel lines have so much in common. It’s a shame they’ll never meet."
            ],
            spanish: [
                "Estoy leyendo un libro sobre antigravedad. ¡Es imposible de dejar!",
                "¿Oíste sobre el matemático que le tiene miedo a los números negativos? No se detendrá ante nada para evitarlos.",
                "Las líneas paralelas tienen mucho en común. Es una pena que nunca se encontrarán."
            ]
        }
    }
};

function getRandomJoke(category, level, language) {
    const jokesArray = jokes[category][level][language];
    const randomIndex = Math.floor(Math.random() * jokesArray.length);
    return jokesArray[randomIndex];
}

generateBtn.addEventListener('click', () => {
    const category = categorySelect.value;
    const level = understandingLevelSelect.value;
    const language = languageSelect.value;
    const joke = getRandomJoke(category, level, language);
    quoteText.textContent = joke;
});
