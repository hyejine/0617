const express = require("express"); 
const app = express();
const port = 3005; // react의 기본값은 3000이니까 3000이 아닌 아무 수
const cors = require("cors");
const bodyParser = require("body-parser");
const mysql = require("mysql"); // mysql 모듈 사용


var connection = mysql.createConnection({
    host : "localhost",
    user : "root", //mysql의 id
    password : "0000", //mysql의 password
    database : "chart", //사용할 데이터베이스
});
connection.connect();    //DB연동
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
// const data =fs.readFileSync('./database.json');
// const conf = JSON.parse(data);

app.get('/', (req, res) =>{
    res.send(' Hello world')  
})  
// 데이터 삽입 
app.post("/idplz", (req,res)=>{
    const test = req.body.test;    
    // body.test 는 어디서 온건지?? 문법 인가 ? => oo
    // req.body.test;  여기에 데이터를 넣어 보여준다. 

    console.log(req.body);
    connection.query("INSERT INTO test (이름) values('?')",[test],
    function(err,rows,fields){
        if(err){
            console.log("실패");
            console.log(err);
        }else{
            console.log("성공");
            console.log(rows);
        };
    });
}); 
app.post("/callbody", (req,res)=>{
    connection.query(
        // "SELECT * FROM test",
    "SELECT COLUMN_NAME FROM INFORMATION_SCHEMA.COLUMNS WHERE TABLE_NAME = 'test'",
    function(err,rows,fields){
        if(err){
            console.log("불러오기 실패");
            console.log(err);
            
        }else{
            console.log("불러오기 성공");
            // console.log(rows[1].COLUMN_NAME);
            // console.log(rows[2]);
            // console.log(rows);

            let i;
            console.log("sad",rows.length);
            for (i=0; i<rows.length; i++){
                console.log(rows[i].COLUMN_NAME);
                res.send(rows[i].COLUMN_NAME);

            }

            

            // 왜 홍길동 밖에 안나왔던건지 모르겠음 
            // => json 에서 이름만 가져왔었음 
            // res.send(rows[2])
            
        }
    })
})
app.listen(port, ()=>{
    console.log(`Connect at http://localhost:${port}`);
})