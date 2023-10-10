const quizdata = require('./question.json');
//const over importere titel, answer og hjelpetekst.

describe('Quiz Data', () => {
    //sånn jeg forstår så bruker man describe for å starte et "test miljø" inne i denne funksjonene vil jeg spesifisere hva jeg ønsker skal testes og 
    //hvordan det skal bli framstilt i terminal.
    quizdata.questions.forEach((question, index) => {
        //her kjører jeg en god gammal forEach som iterere igjennom alle spørsmål i json filen og skal kjøre koden under for hvert spørsmål.
      it(`Question ${index + 1}: ${question.title}`, () => {
        const correctAnswer = question.answers.find(answer => answer.correct);
        //const over sjekker riktig svar ved at den går igjennom spørsmål og ser etter bolean verdien true på svar alternativer.
        console.log(`Question ${index + 1}: ${question.title}`);
        console.log(`Correct Answer: ${correctAnswer ? correctAnswer.answere : 'No correct answer found'}`);
        //console.log over skriver ut spørsmål og svar til terminal så det er enklere å se at det fungerer.
        expect(question.answers.filter(answer => answer.correct)).toHaveLength(1);
        //det siste jeg gjør er å filtrere alle svar til å kun ha igjen svaralternativer som har bolean verdien true igjen. 
        //til slutt bruker jeg toHaveLenght(1) for å sjekke at alle spørsmål har kun 1 riktig svar. dette har jeg gjort da vi får 
        //sjekket at spørsmålene våre kun har 1 riktig svar som er ønsket for denne quizen.
      });
    });
  });
  