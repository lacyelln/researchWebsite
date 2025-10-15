// src/services/apiService.js
export async function loginUser(name, roomCode) {
//   const response = await fetch('/api/login', {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify({ name, roomCode })
//   });

//   if (!response.ok) {
//     throw new Error('Login failed');
//   }

//   return response.json();
    return {userId: 1};
}

export async function getUser(userId) {
    // replace when connected to backend
  return { id: userId, name: "Lacy", roomCode: "675434" };
}

export async function sendSurvey(name, data) {
  return {message: `data sent to db`, d: data};
}

export async function toLLM(name, prompt){
  //call to LLM and get the response back
  //after getting back from LLM send into the DB
  return {response: "how are you doing today?"}
}

export async function sendLLMData(name, prompt, response){
  return {message: "LLM Data sent to db"};
}

