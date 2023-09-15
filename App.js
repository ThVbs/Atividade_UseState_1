import { ImageBackground } from 'react-native';
import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, TextInput, Button } from 'react-native';

const App = () => {
  const [nome, setNome] = useState('');
  const [genero, setGenero] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const [email, setEmail] = useState('');
  const [confirmarEmail, setConfirmarEmail] = useState('');
  const [cpf, setCpf] = useState('');
  const [idioma, setIdioma] = useState('');


  const handleCadastro = () => {
      console.log('Valores informados:');
      console.log('Nome:', nome);
      console.log('Gênero:', genero);
      console.log('Data de Nascimento:', dataNascimento);
      console.log('Usuário:', usuario);
      console.log('Senha:', senha);
      console.log('E-mail:', email);
      console.log('Confirmar E-mail:', confirmarEmail);
      console.log('CPF:', cpf);
      console.log('Idioma do Currículo:', idioma);
      setNome('');
      setGenero('');
      setDataNascimento('');
      setUsuario('');
      setSenha('');
      setEmail('');
      setConfirmarEmail('');
      setCpf('');
      setIdioma('');
  };

  const limpar = () => {
    
  };



  return (
    <ImageBackground
      source={require('./assets/image.jpg')}
      style={styles.background}
    >
      <View style={styles.container}>
        <View style={styles.div}>
          <Text style={styles.titulo}>Cadastro{"\n"}de Usuário</Text>
          <TextInput
            style={styles.input}
            placeholder="Primeiro Nome"
            value={nome}
            underlineColorAndroid="transparent"
            selectionColor="transparent"
            onChangeText={setNome}
          />
          <TextInput
            style={styles.input}
            placeholder="Gênero"
            value={genero}
            underlineColorAndroid="transparent"
            selectionColor="transparent"
            onChangeText={setGenero}
          />
          <TextInput
            style={styles.input}
            placeholder="Data de Nascimento"
            value={dataNascimento}
            underlineColorAndroid="transparent"
            selectionColor="transparent"
            onChangeText={setDataNascimento}
          />
          <TextInput
            style={styles.input}
            placeholder="Usuário"
            value={usuario}
            underlineColorAndroid="transparent"
            selectionColor="transparent"
            onChangeText={setUsuario}
          />
          <TextInput
            style={styles.input}
            placeholder="Senha"
            secureTextEntry
            value={senha}
            underlineColorAndroid="transparent"
            selectionColor="transparent"
            onChangeText={setSenha}
          />
          <TextInput
            style={styles.input}
            placeholder="E-mail"
            value={email}
            underlineColorAndroid="transparent"
            selectionColor="transparent"
            onChangeText={setEmail}
          />
          <TextInput
            style={styles.input}
            placeholder="Confirme seu E-mail"
            value={confirmarEmail}
            underlineColorAndroid="transparent"
            selectionColor="transparent"
            onChangeText={setConfirmarEmail}
          />
          <TextInput
            style={styles.input}
            placeholder="CPF"
            value={cpf}
            underlineColorAndroid="transparent"
            selectionColor="transparent"
            onChangeText={setCpf}
          />
          <TextInput
            style={styles.input}
            placeholder="Idioma do Currículo"
            value={idioma}
            underlineColorAndroid="transparent"
            selectionColor="transparent"
            onChangeText={setIdioma}
          />
          <TouchableOpacity
            style={styles.button}
            onPress={handleCadastro}
          >
            <Text style={styles.buttonText}>CADASTRAR</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  div: {
    width: '100%',
    maxWidth: 400,
    backgroundColor: 'rgba(73,63,140, 0.3)',
    padding: 10,
    alignItems: 'center',
    borderRadius: 20,
  },
  titulo: {
    fontSize: 40,
    margin: 20,
    color: 'white'
  },
  input: {
    width: '100%',
    maxWidth: 250,
    height: 40,
    borderColor: 'rgba(255, 255, 255, 0.0)',
    color: 'white',
    borderBottomWidth: 1, // Adiciona uma linha reta embaixo
    borderBottomColor: 'white', // Cor da linha reta
    borderWidth: 2,
    marginBottom: 16,
    paddingLeft: 8,
    borderRadius: 12,
    outlineWidth: 0,
  },
  button: {
    backgroundColor: 'rgba(73,63,140, 0.7)', // Cor de fundo do botão
    borderRadius: 12, // Raio da borda do botão
    width: 150, // Largura do botão
    height: 40, // Altura do botão
    justifyContent: 'center', // Centralizar o conteúdo verticalmente
    alignItems: 'center', // Centralizar o conteúdo horizontalmente

  },
  buttonText: {
    color: 'white', // Cor do texto do botão
    fontSize: 18, // Tamanho da fonte do texto
  },
});

export default App;
