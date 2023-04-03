let u1 = new Usuario("gabriel.cabral@gmail.com", 123);
let u2 = new Usuario ("samuel.morais@gmail.com", 456);  
let u3 = new Usuario ("pedro.henrique@gmail.com", 789);
console.log(u1.toString());
console.log(u2.toString());
console.log(u3.toString());

let usuarioRepositorio =  new UsuarioRepositorio();
usuarioRepositorio.cadastrar(u1);
usuarioRepositorio.cadastrar(u2);
usuarioRepositorio.cadastrar(u3);
let login = new Login("gabriel.cabral@gmail.com", 123);

console.log(usuarioRepositorio.logar(login1));
usuarioRepositorio.remover(u2);