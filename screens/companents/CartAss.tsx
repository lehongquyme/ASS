import auth from '@react-native-firebase/auth';

// Đăng nhập
const login = async (email:any, password:any) => {
  try {
    const userCredential = await auth().signInWithEmailAndPassword(email, password);
    console.log('Đăng nhập thành công:', userCredential.user);
  } catch (error) {
    console.error('Đăng nhập thất bại:', error);
  }
};

// Đăng ký
const register = async (email:any, password:any) => {
  try {
    const userCredential = await auth().createUserWithEmailAndPassword(email, password);
    console.log('Đăng ký thành công:', userCredential.user);
  } catch (error) {
    console.error('Đăng ký thất bại:', error);
  }
};

// Đăng xuất
const logout = async () => {
  try {
    await auth().signOut();
    console.log('Đăng xuất thành công');
  } catch (error) {
    console.error('Đăng xuất thất bại:', error);
  }
};
