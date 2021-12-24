import _ from 'lodash';

const names = [
  'alonzo church',
  'Haskell curry',
  'stephen_kleene',
  'John Von Neumann',
  'stephen_kleene'
];

const sort = [
  () => {
    const result: string[] = [];
    for (let i = 0; i < names.length; i++) {
      const n = names[i];
      if (n != null) {
        const ns = n.replace(/_/, ' ').split(' ');
        for (let j = 0; j < ns.length; j++) {
          const p = ns[j];
          ns[j] = p.charAt(0).toUpperCase() + p.slice(1);
        }
  
        if (result.indexOf(ns.join(' ')) < 0) {
          result.push(ns.join(' '));
        }
      }
    }
  
    result.sort();
  
    console.log('sort_ip', result);
  },
  
  () => {
    const result = _.chain(names)
      .filter((name: string) => !_.isUndefined(name))
      .map((name: string) => name.replace(/_/, ' '))
      .uniq()
      .map(_.startCase)
      .sort()
      .value();
  
    console.log('sort_fp', result);
  }
];

export default sort;