/**
 expect(testArray[i][2][0]).toEqual("Frage");
 expect(testArray['1002'][3][0][0]).toEqual(true);
 expect(testArray['1002'][3][0][1]).toEqual("Antwort1");
 * Created by Florenz on 13.05.16.
 */
export function MultiChoiceFlashCard(arrayValue, counter) {

    this.setAnswer = function (arrayValue) {
        for (var i = 0; i < arrayValue[3].length; i++) {
            this.answers[i] = {
                "value": arrayValue[3][i][1],
                "correct": arrayValue[3][i][0]
            };
        }
    };
    this.setId = function (counter) {
        this.id = parseInt(counter);
    };

    this.ini = function (arrayValue, counter) {
        this.question = arrayValue[2][0];
        this.answers = [];
        this.setAnswer(arrayValue);
        this.setId(counter);
    };
    this.ini(arrayValue, counter);
}

function convertTrainerArray(trainerArray) {
    var objArray = [];
    var counter = "1001";
    for (var i = 0; i < trainerArray.length - 1002; i++) {
        counter = parseInt(counter);
        counter++;
        counter = counter.toString();
        var obj = new MultiChoiceFlashCard(trainerArray[counter], counter);
        obj = new ClassFlashCard(obj);
        objArray[i] = obj;
    }
    return objArray;
};
function shuffleArray(array) {
    var currentIndex = array.length,
        temporaryValue,
        randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

//# sourceMappingURL=MultiChoiceFlashCard-compiled.js.map