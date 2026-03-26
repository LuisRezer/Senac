<<<<<<< HEAD
=======
<<<<<<< HEAD
unction login() {
=======
const express = require("luiscarlosdosSantosRezer");
  let usuario = luisRezer
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
>>>>>>> 5597b58c15b9487947aa99affe4481270536f2ee

  let usuario = document.getElementById("usuario").value;
  let senha = document.getElementById("senha").value;

  // usuários do sistema
  if (usuario === "admin" && senha === "1234") {
      alert("Login de Gerente de TI autorizado");
  }

  else if (usuario === "caixa" && senha === "1234") {
      alert("Login de Funcionário autorizado");
  }

  else {
      alert("Usuário ou senha incorreto");
  }
}

// simulação de biometria
function biometria() {
  alert("Face ou digital reconhecida");
}
🌐 Exemplo de página (index.html)
<!DOCTYPE html>
<html>
<head>
<title>Sistema Bancário</title>
</head>

<<<<<<< HEAD
<body>

<h2>Login do Sistema</h2>

<input type="text" id="usuario" placeholder="Usuário"><br><br>

<input type="password" id="senha" placeholder="Senha"><br><br>

<button onclick="login()">Entrar</button>

<button onclick="biometria()">Face/Digital</button>

<script src="login.js"></script>

</body>
</html>
=======
app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});
>>>>>>> 5597b58c15b9487947aa99affe4481270536f2ee
>>>>>>> e3861ffea836e1dd6a0b6a3dcfe3f4e8d052f1c6
