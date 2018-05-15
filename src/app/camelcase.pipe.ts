import { Pipe, PipeTransform } from '@angular/core';
const smallWords: string[] = ['DE', 'DA', 'DO', 'DOS', 'DAS', 'VON', 'DAL', 'A', 'COM', 'E', 'PARA', 'PRA'];
const siglas: string[] = ['CSS', 'HTML', 'PHP', 'JS', 'PMI', 'PMP', 'SQL', 'ITIL', 'TI', 'ETL', 'BI', 'UX', 'UI', 'SEO', 'JPA', 'API', 'PL', 'I', 'II', 'III', 'IV', 'APEX', 'TDD', ];
const specialWords: string[] = ['MongoDB', 'MariaDB', 'NoSQL', 'DevOps', 'JavaScript'];

function titleCaseWord(word: string) {
  /* Empty word */
  if (!word) return word;
  /* Small words that should be full lowercase */
  if (smallWords.indexOf(word) >= 0) return word.toLowerCase();
  /* Siglas that should be full uppercase */
  if (siglas.indexOf(word) >= 0) return word.toUpperCase();
  /* Special words that should be formatted as in the specialWords array */
  let idx = specialWords.findIndex(function (w) {
    return w.toUpperCase().localeCompare(word) == 0;
  });
  if (idx >= 0) return specialWords[idx];
  return word[0].toUpperCase() + word.substr(1).toLowerCase();
}

@Pipe({
  name: 'camelcase'
})
export class CamelcasePipe implements PipeTransform {

  transform(value: string): string {
    if (!value || typeof value !== 'string') return value;

    return value.split(/([\s\.\(\)\u00AE\,\/\\\*\-])/g).map(word => titleCaseWord(word)).join('');
  }

}