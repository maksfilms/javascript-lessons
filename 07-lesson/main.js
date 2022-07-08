//1. Реализуйте функцию, которая принимает параметром подсторку, число повторов и разделитель, а возвращает сторку,
// состоящую из указанного количества повторов подстроки с использованием разделителя.
// repeatString("yo", 3, " ") => "yo yo yo"
// repeatString("yo", 3, ",") => "yo,yo,yo"
// for или str.repeat()

const repeatString = (str, numberOfRepeat, separator) => {
    let final = ""
    for (let i = 0; i < numberOfRepeat; i++) {
        final += `${str}${separator}`.slice
    }
    return final.slice(0, -1)
}
console.log(repeatString("yo", 3, ","))

//2. Реализуйте функцию, которая принимает параметром сторку и подстроку, а возвращает true, если строка начинается с указанной подстроки, в противном случае - false. Регистр не учитывается.
// checkStart("Incubator", "inc") => true
// checkStart("Incubator", "yo") => false
// str.startWith() slice indexOF

const checkStart = (word, secondWord) => {
    let first = word.toUpperCase()
    let second = secondWord.toUpperCase()

    let result = first.search(second)

    return result === 0;
}

console.log(checkStart("Incubator", "i"))

//3. Реализуйте функцию, которая принимает параметром строку и число (количество символов), а возвращает строку из параметров, обрезанную до указанного количества символов и завершает её многоточием.
//truncateString("Всем студентам инкубатора желаю удачи!", 10) => "Всем студе..."

const truncateString = (a, b) => a.slice(0, b) + "..."

console.log(truncateString("Всем студентам инкубатора желаю удачи!", 8))


//4. Реализуйте функцию, которая принимает параметром сторку (предложение) и возвращает самое короткое слово в предложении, если в параметрах пустая строка, то возвращает null.
// getMinLengthWord("Всем студентам инкубатора желаю удачи!") => "Всем"
// getMinLengthWord("") => null
// split()

const getMinLengthWord = (string) => {
    let arr = string.split(" ")

    let minLengthString = arr[0]

    for (let i = 1; i < arr.length; i++) {
        if (arr[i].length < minLengthString.length) {
            minLengthString = arr[i]
        }
    }
    return minLengthString

    /*  const getMinLengthWord = (str) => {
          if (str === '') return null
          else return str.split(' ').sort((a, b)=> a.length - b.length)[0]
      }*/


}

console.log(getMinLengthWord("Студентам студентам как инкубатора желаю удачи!"))


//5. Реализуйте функцию, которая принимает параметром сторку (предложение) и возвращает то же предложение, где все слова написаны строчными, но начинаются с заглавных букв.
// setUpperCase("всем стУдентам инкуБатора Желаю удачИ!") => "Всем Студентам Инкубатора Желаю Удачи!"

const setUpperCase = (string) => string.split(" ").map(e => e.charAt(0).toUpperCase() + e.substring(1).toLowerCase())

console.log(setUpperCase("всем стУдентам инкуБатора Желаю удачИ!"))


//6. Реализуйте функцию, котрая принимает параметрами две строки. Если все символы второй строки содержаться в первой - возвращает true, если нет - возвращает fasle. Проверка проводится без учёта регистра.
// isIncludes("Incubator", "Cut") => true
// isIncludes("Incubator", "table") => false
// every()

const isIncludes = (firstString, secondString) => {
    let first = firstString.toLowerCase()
    let second = secondString.toLowerCase()
    let final = false;

    for (let i = 0; i < second.length; i++) {
        final = first.includes(second[i]);
    }
}