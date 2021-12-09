const { Person_fp } = require('../ch2/Person');
const { Tree } = require('./Tree');
const { TreeNode } = require('./TreeNode');

function treeTraversal_fp() {
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

  console.log('treeTraversal_fp');
  Tree.map(church, (p) => {
    console.log(p.fullname);
    return p.fullname;
  });
}

module.exports = {
  treeTraversal_fp
};