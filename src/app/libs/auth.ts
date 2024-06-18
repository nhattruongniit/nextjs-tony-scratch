export async function getUserByEmailAndPassword(email: string, password: string) {
  // Replace with your database or authentication logic
  if (email === 'user@example.com' && password === 'password') {
    return { id: 1, email, name: 'John Doe' };
  }
  return null;
}