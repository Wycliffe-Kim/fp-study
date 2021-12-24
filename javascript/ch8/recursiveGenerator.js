const { Person_fp } = require('../ch2/Person');
const TreeNode = require('../ch3/TreeNode');

const recursiveGenerator = [
  () => {
    function* AllStudentGenerator() {
      yield 'Church';
  
      yield 'Rosser';
      yield* RosserStudentGenerator();
  
      yield 'Turing';
      yield* TuringStudentGenerator();
  
      yield 'Kleene';
      yield* KleeneStudentGenerator();
    }
  
    function* RosserStudentGenerator() {
      yield 'Mendelson';
      yield 'Sacks';
    }
  
    function* TuringStudentGenerator() {
      yield 'Gandy';
      yield 'Sacks';
    }
  
    function* KleeneStudentGenerator() {
      yield 'Nelson';
      yield 'Constable';
    }
  
    const students = [];
    for (let student of AllStudentGenerator()) {
      students.push(student);
    }
  
    console.log('recursiveGenerator1', students);
  },
  
  () => {
    function* TreeTraversal(node) {
      yield node.value;
      if (node.hasChildren()) {
        for (let child of node.children) {
          yield* TreeTraversal(child);
        }
      }
    }
  
    const church = new TreeNode(new Person_fp('Alonzo', 'Church', '111-11-1111'));
    const rosser = new TreeNode(new Person_fp('Barkley', 'Rosser', '222-22-2222'));
    const turing = new TreeNode(new Person_fp('Alan', 'Turing', '333-33-3333'));
    const kleene = new TreeNode(new Person_fp('Stephen', 'Kleene', '444-44-4444'));
    const mendelson = new TreeNode(new Person_fp('5', 'Mendelson', '555-55-5555'));
    const sacks = new TreeNode(new Person_fp('6', 'Sacks', '666-66-6666'));
    const gandy = new TreeNode(new Person_fp('7', 'Gandy', '777-77-7777'));
    const nelson = new TreeNode(new Person_fp('8', 'Nelson', '888-88-8888'));
    const constable = new TreeNode(new Person_fp('9', 'Constable', '999-99-9999'));
  
    church.append(rosser).append(turing).append(kleene);
    kleene.append(nelson).append(constable);
    rosser.append(mendelson).append(sacks);
    turing.append(gandy);
  
    const lastname = (person) => person.lastname;
  
    const persons = [];
    for (let person of TreeTraversal(church)) {
      persons.push(lastname(person));
    }
    console.log('recursiveGenerator2', persons);
  }
];

module.exports = recursiveGenerator;