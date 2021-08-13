import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  questions = [
    {
      id: 1,
      question: 'What is the time now?',
      max_choices: 2,
      choices: [
        { id: 1, text: 'Morning', isChecked: false, disabled: false },
        { id: 2, text: 'Afternoon', isChecked: false, disabled: false },
        { id: 3, text: 'Noon', isChecked: false, disabled: false },
        { id: 4, text: 'Evening', isChecked: false, disabled: false }
      ]
    },

    {
      id: 2,
      question: 'What is the capital of Kenya?',
      max_choices: 3,
      choices: [
        { id: 1, text: 'Kisumu ', isChecked: false, disabled: false },
        { id: 2, text: 'Nairobi', isChecked: false, disabled: false },
        { id: 3, text: 'Eldoret', isChecked: false, disabled: false },
        { id: 4, text: 'Mombasa', isChecked: false, disabled: false }
      ]
    }
  ];

  constructor(public navCtrl: NavController) {}

  validateCheckbox(question: any) {
    const questions = this.questions;
    let validatedQuestions = [];
    for (let i = 0; i < questions.length; i++) {
      let q = questions[i];
      if (q.id === question.id) {
        const choices = question.choices;
        let checkedChoices = [];
        for (let j = 0; j < choices.length; j++) {
          let c = choices[j];
          if (c.isChecked) {
            checkedChoices.push(c);
          }
        }
        let newChoices = [];
        if (checkedChoices.length >= q.max_choices) {
          for (let k = 0; k < choices.length; k++) {
            let c = choices[k];
            c.disabled = !c.isChecked;
            newChoices.push(c);
          }
        } else {
          for (let k = 0; k < choices.length; k++) {
            let c = choices[k];
            c.disabled = false;
            newChoices.push(c);
          }
        }
        q.choices = newChoices;
      }
      validatedQuestions.push(q);
    }
    this.questions = validatedQuestions;
  }
}
