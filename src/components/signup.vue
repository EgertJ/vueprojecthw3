<template>
  <div class="flex-container" style="text-align: center; height: 80.8vh">
    <div class="login-flex">
      <form>
        <div style="display: flex; justify-content: center">
          <div style="display: block; text-align: left;">
            <h3>Email</h3>
            <h3>Password</h3>
          </div>
          <div class="text-fields" style="display: flex; flex-direction: column;">
            <input required class="field" type="text" name="email" placeholder="Email">
            <input required class="field" type="password" name="password" placeholder="Password" v-model="password">
          </div>
        </div>
        <small id="passwordHelp" class="form-text text-muted">Password should contain
            <span :class="has_length ? 'has_required' : ''">between 8 to 15 characters</span>,
            <span :class="has_two_lowercase ? 'has_required' : ''">two lowercase letter</span>,
            <span :class="has_uppercase ? 'has_required' : ''">one uppercase letter</span>,
            <span :class="has_number ? 'has_required' : ''">one number</span>,
            <span :class="has_underscore ? 'has_required' : ''">underscore character</span>
            <span :class="starts_uppercase ? 'has_required' : ''"> and needs to start with an uppercase character.</span>
            
          </small>
        <div>
          <button class="blue-button" id="login-button" :type="has_length && has_two_lowercase && has_uppercase && has_number && has_special  && has_underscore && starts_uppercase? 'submit' : 'button'">Sign Up</button>
        </div>
      </form>
    </div>

  </div>
</template>

<script>
import router from "@/router";

export default {
  name: "signup",
  
  data() {
    return {
      password: null,
      password_length: 0,
      contains_right_amount_of_characters: false,
      contains_number: false,
      contains_uppercase: false,
      contains_lowercase: false,
      contains_special_character: false,
      valid_password: false
    }
  },

  watch: {
    password() {
      this.has_length = (this.password.length >= 8 && this.password.length <= 15);
      this.has_number    = /\d/.test(this.password);
      this.has_two_lowercase = /[a-z]{2}/.test(this.password);
      this.has_uppercase = /[A-Z]/.test(this.password);
      this.has_special   = /[!@#\$%\^\&*\)\(+=._-]/.test(this.password);
      this.has_underscore = /[_]/.test(this.password);
      this.starts_uppercase = /[A-Z]/.test(this.password[0]);
    }
  },

  // methods: {

  //   submit() {
  //     //if you want to send any data into server before redirection then you can do it here
  //     if (this.checkPassword() === true) {
  //       router.push("/");
  //     }
  //   },

  //   data: {

  //     password: null,
  //     password_length: 0,
  //     contains_right_amount_of_characters: false,
  //     contains_number: false,
  //     contains_uppercase: false,
  //     contains_lowercase: false,
  //     contains_special_character: false,
  //     valid_password: false
  //   },

  //   checkPassword() {
  //     this.password_length = this.password.length;
  //     const format = /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;

  //     if (this.password_length >= 8 && this.password_length <= 15) {
  //       this.contains_right_amount_of_characters = true;
  //     } else {
  //       this.contains_right_amount_of_characters = false;
  //     }

  //     this.contains_number = /\d/.test(this.password);
  //     this.contains_uppercase = /[A-Z]/.test(this.password);
  //     this.contains_lowercase = /[a-z]/.test(this.password);
  //     this.contains_special_character = format.test(this.password);

  //     if (this.contains_right_amount_of_characters === true &&
  //         this.contains_special_character === true &&
  //         this.contains_uppercase === true &&
  //         this.contains_lowercase === true &&
  //         this.contains_number === true) {
  //           return true
  //     } else {

  //       console.log("INVALID PASSWORD! PASSWORD CONDITIONS ARE: The password should be of a specific length (at least 8 chars and less than 15 chars).\n" +
  //           "Includes at least one uppercase alphabet character.\n" +
  //           "Includes at least two lowercase alphabet characters.\n" +
  //           "Includes at least one numeric value.\n" +
  //           "It should start with an uppercase alphabet.\n" +
  //           "It should include the character “_”");
  //     }
  //   }
  // }
}

</script>

<style scoped>

* {
    font-family: sans-serif;
}

.login-flex {
  display: flexbox;
}

input {
  margin-bottom: 5px;
}

h3 {
  margin-right: 20px;
}

.field{
  width: 20em;
  height: 2.8em;
}


.text-fields{
  padding: 0.3em;
}
#login-button{
  width:5em;
  height: 1.8em;
  padding: 0;
  margin-bottom: 1.3em;
  margin-top:0.8em;
  cursor:pointer;
}
.blue-button {
  padding: 10px;
  font-size: large;
  background-color: #4267B2;
  color: white;
  height: 3em;
  cursor:pointer;
}
.login-text{
  margin:0;
}

.login-links{
  color: #4EBFE7;
}

#forget-password{
  padding-bottom: 2em;
}
.flex-container > div {
  background-color: #f1f1f1;
  width: 50%;
  margin:auto;
  margin-top: 2%;
  margin-bottom: 2%;
  display:flexbox;
  line-height: 25px;
  font-size: 15px;
  border-radius: 10px;
  padding-left: 1.5%;
  padding-right: 1.5%;
  padding-top: 1.5%;
}
section {
  padding: 10px 15px;
  margin: 10px;
  display: block;

}
h4 {
  padding:5px;
  font-size: 20px;
}

.has_required{
    text-decoration: line-through;
    color:#689868;
}
</style>