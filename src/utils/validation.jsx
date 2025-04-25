/** @format */

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
const nameRegex = /^[a-zA-Z\s]+$/;

export const checkValidateData = (email, password, username) => {
   if (!emailRegex.test(email)) {
      return 'Invalid email format';
   }
   if (!passwordRegex.test(password)) {
      return 'Password must be at least 8 characters long and contain at least one letter and one number';
   }

   if (!nameRegex.test(username)) {
      return 'Invalid name format';
   }

   return true;
};
// export const checkValidateSignUp = (name, email, password) => {
//    if (!nameRegex.test(name)) {
//       return 'Invalid name format';
//    }
//    if (!emailRegex.test(email)) {
//       return 'Invalid email format';
//    }
//    if (!passwordRegex.test(password)) {
//       return 'Password must be at least 8 characters long and contain at least one letter and one number';
//    }
//    return true;
// };
