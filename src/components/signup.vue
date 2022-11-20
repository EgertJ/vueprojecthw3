<template>
  <div class="flex-container" style="text-align: center">
    <div class="login-flex">
      <h4>welcome to PostIt</h4>
      <div>
        <a class="login-links" href="#">Create an account</a>
        <p class="login-text">OR</p>
        <p class="login-text">Please log in</p>
      </div>
      <form>
        <div class="text-fields">
          <input  class="field" type="text" name="email" placeholder="Email" required>
        </div>
        <div class="text-fields">
          <input class="field" type="password" name="password" placeholder="Password" @input="checkPassword">
        </div>
        <div>
          <button class="blue-button" id="login-button" type="submit" @click="submit()">Log in</button>
        </div>
      </form>
      <div id="forget-password">
        <a class="login-links"  href="#">Forget password</a>
      </div>
    </div>

  </div>
</template>

<script>
import router from "@/router";

export default {
  name: "signup",
  methods: {
    submit(){
      //if you want to send any data into server before redirection then you can do it here
      if (this.checkPassword() === true){
        router.push("/");
      }
    },
      data: {
        password: null,
        password_length: 0,
        contains_right_amount_of_characters: false,
        contains_number: false,
        contains_uppercase: false,
        contains_lowercase: false,
        contains_special_character: false,
        valid_password: false
      },
        checkPassword() {
          this.password_length = this.password.length;
          const format = /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;

          if (this.password_length >= 8 && this.password_length <= 15) {
            this.contains_right_amount_of_characters = true;
          } else {
            this.contains_right_amount_of_characters = false;
          }

          this.contains_number = /\d/.test(this.password);
          this.contains_uppercase = /[A-Z]/.test(this.password);
          this.contains_lowercase = /[a-z]/.test(this.password);
          this.contains_special_character = format.test(this.password);

          if (this.contains_right_amount_of_characters === true &&
              this.contains_special_character === true &&
              this.contains_uppercase === true &&
              this.contains_lowercase === true &&
              this.contains_number === true) {
                return true
          } else {

            window.alert("INVALID PASSWORD! PASSWORDS CONDITIONS ARE: The password should be of a specific length (at least 8 chars and less than 15 chars).\n" +
                "Includes at least one uppercase alphabet character.\n" +
                "Includes at least two lowercase alphabet characters.\n" +
                "Includes at least one numeric value.\n" +
                "It should start with an uppercase alphabet.\n" +
                "It should include the character “_”");
          }
        }
      },
}

</script>

<style scoped>
.login-flex {
  display: flexbox;
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
</style>