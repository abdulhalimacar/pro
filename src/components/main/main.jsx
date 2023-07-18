import "./main.scss";

import {data} from "../../helper/data"; // data nın süslü içerisinde olmasına dikkat et

//kendimizin oluşturmuş olduğu card componentini burada kullanmak için ilk önce import etmemiz lazım
import Card from "./card";

const Main = ()=>{
    console.log(data);//datayı okuduk burada 
    return(
        <div className="card-container">
           {data.map((item)=> <Card {...item} key={item.id}/>//burada üç nokta item ifadesiyle tüm herşeyi cardın içine boca ettik
           )}
        </div>
    );
};

export default Main;

