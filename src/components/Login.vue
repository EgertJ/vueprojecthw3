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
                <input required class="field" type="text" name="email" placeholder="Email" v-model="email">
                <input required class="field" type="password" name="password" placeholder="Password" v-model="password">
            </div>
        </div>
        <div class = "buttons">
            <button @click="LogIn" class="blue-button" id="login-button" type="button">Login</button>
            <p class = "buttonTextBetween">Or</p>
            <router-link to="/signup">
                <button class="blue-button"  id="signup-button" type="button">Signup</button>
            </router-link>
        </div>
    </form>
    </div>

</div>
</template>

<script>

export default {
    name: "Login",

    data: function() {
            return {
            email: '',
            password: '',
            }
        },
        
    methods: {
        LogIn() {
            var data = {
            email: this.email,
            password: this.password
            };
            fetch("http://localhost:3000/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
                credentials: 'include', 
                body: JSON.stringify(data),
            })
            .then((response) => response.json())
            .then((data) => {
            console.log(data);
            location.assign("/");
            })
            .catch((e) => {
            console.log(e);
            console.log("error");
            });
        }
    }
}

</script>

<style scoped>

* {
    font-family: sans-serif;
}

.buttons{
    display: flex;
    justify-content: center;

}

.buttonTextBetween{
    margin-left:1em;
    margin-right:1em;
    font-size: large;
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

#signup-button{
width:5em;
height: 1.8em;
padding: 0;
margin-bottom: 1.3em;
margin-top:0.8em;
cursor:pointer;
}

.blue-button {
margin-left:1em;
margin-right:1em;
background-color: #4267B2;
border: 0;
padding: 10px 20px;
font-size: medium;
margin-top: 20px;
margin-bottom: 20px;
color: white;
border-radius: 20px;
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