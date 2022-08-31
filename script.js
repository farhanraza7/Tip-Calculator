@import url('https://fonts.googleapis.com/css2?family=Redressed&display=swap');
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body{
    font-family: 'Redressed', cursive;
    font-size: 22px;
    position: relative;
    background-image: url(./shawnanggg-nmpW_WwwVSc-unsplash.jpg);
    height: 100vh;
    width: 100vw;
    background-repeat: no-repeat;
    background-size: cover;


}
.container{
    position: absolute;
    margin-top: 50vh;
    margin-left: 50vw;
    transform: translate(-40%,-40%);
    width: 450px;
    border-radius: 50px 20px;
    border: 3px solid black;
    text-align: center;
    box-shadow: 1px 1px 13px rgb(0 0 0 / 100%);

    


}
h1{
    color: #fff;
    padding: 10px 0;
    font-size: 28px;
    border-radius: 18px;
}
p{
    color: #8e9eab;;
}
.control{
    margin: 25px 0;
}
input{
    border: none;
    outline: none;
    text-align: center;
    border-bottom: 1px solid #000000;
    color: #000000;
    font-size: 28px;
    margin-top: 20px;
}
select{
    border: none;
    outline: none;
    border: 1px solid #000000;
    color: #000000;
    font-size: 18px;
    margin-top: 20px;
    padding: 11px 34px;
    border-radius: 25px;
    width: 75%;
}
button#calculate{
    color: white;
    border: 1px solid transparent;
    font-size: 17px;
    border-radius: 25px;
    padding: 14px 29px;
    margin: 25px;
    transition: all .3s ease;
    background: #8e9eab;
    background: -webkit-linear-gradient(to right, #eef2f3, #8e9eab);
    background: linear-gradient(to right, #eef2f3, #8e9eab);
}
button#calculate:hover{
    color: #8e9eab;
    border-color: #8e9eab;
    background: white;
}
.totalTip{
    border-radius: 18px;
    padding: 25px 0 35px;
    background: #8e9eab;
    background: -webkit-linear-gradient(to right, #eef2f3, #8e9eab);
    background: linear-gradient(to right, #eef2f3, #8e9eab);


}
p.tip{
    font-size: 38px;
    color: #fff;
    margin-top: 10px;
}

@media screen and (max-width: 600px) {
    body{
        height: 100vh;
        width: 100vw;
        background-repeat: no-repeat;
        background-size: cover;
    }
    .container{
        justify-content: center;
        align-items: center;
        width: 500px;
        height: 500px;
    }

    h1{     
        padding: 10px 0;
        font-size: 28px;
    }

    .control{
        margin: 15px 0px;
    }
  } 













