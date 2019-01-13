
class Card {
  constructor(question, answers) {
    this.question = question;
    this.answers = answers;
  }
}

const Cards = [
  new Card('4 + 4 = ?', { '8' : true }),
  new Card('9 * 0  = ?', { '0': true }),
  new Card('88 - 89 = ?', { '-1' : true})
];

export default Cards;