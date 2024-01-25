import bcrypt from "bcrypt";
const saltRounds = 10;
const myPlaintextPassword = ")P(O*I&U^Y5t";
const someOtherPlaintextPassword = "not_bacon";

const new_hash = "$2b$10$5BehDzpHwbm2nOeWJAcCwewnUyHjSArLrFCC0PA23S8yXCNq7VR.W";

// bcrypt
//   .hash(myPlaintextPassword, saltRounds)
//   .then((hash) => {
//     const userHash = hash;
//     console.log("Hash ", hash);
//     validateUser(hash);
//   })
//   .catch((err) => console.error(err.message));

function validateUser(hash: string) {
  bcrypt
    .compare(myPlaintextPassword, hash)
    .then((res) => {
      console.log(res); // return true
    })
    .catch((err) => console.error(err.message));
}
validateUser(new_hash);
