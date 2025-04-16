import { useState } from "react"

function Login() {
  const [user, setUser] = useState({ email: '', password: ''});

  function resetForm() {
    setUser({ email: '', password: ''});
  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setUser({
      ...user,
      [name]: value,
    })
  }
  
  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    console.log('Login ', user);
    resetForm();
  }
  
  return (
    <div>
      <div>
        <h2>Adoção de Animais</h2>
        <form onSubmit={handleSubmit}>    
          <input
            type="email"
            name="email"
            value={ user.email }
            onChange={ handleChange }
            placeholder="email"
            required
            />
          <br />
          <input
            type="password"
            name="password"
            value={ user.password } 
            onChange={ handleChange }
            placeholder="password" 
            required
            />
          <br />
          <button type="submit">Entrar</button>
          <button type="button">Entrar como visitante</button>
        </form>
        <p>Não tem conta? <a href="#">Cadastre-se</a></p>
      </div>
    </div>
  )
}

export default Login
