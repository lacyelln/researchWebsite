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
  return { id: userId, name: "Katie", roomCode: "675434" };
}

