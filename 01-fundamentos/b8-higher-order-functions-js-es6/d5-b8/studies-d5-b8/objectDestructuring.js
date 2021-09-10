const product = {
  name: 'Smart TV Crystal UHD',
  price: '1899.05',
  seller: 'Casas de Minas',
};

const { price, seller } = product;
// console.log(price); // Smart TV Crystal UHD
// console.log(seller); // if property does not exist, returns undefined

const student = {
  a: 'Maria',
  b: 'Turma B',
  c: 'Matematica',
};

// Renaming variables that receive value in key
const { a: studentName, b: classAssigned, c: subject } = student;

// console.log(studentName); // Maria
// console.log(classAssigned); // Turma B
// console.log(subject); // Matemática

const product = {
  name: 'Smart TV Crystal UHD',
  price: '1899.05',
  seller: 'Casas de Minas',
};

const printProductDetails = ({ name, price, seller }) => {
  console.log(`Promoção! ${name} por apenas ${price} é só aqui: ${seller}`);
};

printProductDetails(product); // Promoção! Smart TV Crystal UHD por apenas 1899.05 é só aqui: Casas de Minas