import React from 'react';

export function MyAbout(){
    return (
        <div style={{textAlign: 'center', color: 'navy'}}>
            <h2>ประวัติส่วนตัว</h2>
            <br/><br/><br/>
        </div>
    )
}

export function MyImage(){
    return (
        <div style={{textAlign: 'center'}}>
            <img src="./images/9.jpg" width="14%"/>
        </div>
    )
}

export function MyData(){
    return (   
        <div style={{textAlign: 'center', color: 'pink'}}>        
            <h2>นางสาว พรรณราย สุวีพัฒนานนท์</h2>
            ชื่อเล่น พลอย อายุ 22 <br/>
            เกิดวันที่ : 14 กันยายน 2544<br/>
            กำลังศึกษาที่มหาวิทยาลัยเทคโนโลยีรามงคลสุวรรณภูมิ วาสุกรี<br/>
            เเผนก : บริหารธุรกิจเเละเทคโนโลยีสารสนเเทศ<br/>
            สาขา : เทคโนโลยีธุรกิจดิจิทัล<br/>
            บ้านเลขที่ 1/3 ม.6 ต.กุฏี อ.ผักไห่ จ.อยุธยา <br/>
            สัตว์ที่ชอบ : สุนัข <br/>
            สีที่ชอบ : สีฟ้า <br/>
            งานอดิเรกยามว่าง : ดูหนัง ฟังเพลง นอนหลับ <br/>
            <br/><br/><br/>
        </div>
    )
}

export const Footer=() => { //Arrow Function
return(
    <div style={{textAlign: 'center'}}>
        &copy;{new Date().getFullYear()} All rights reserved
    </div>
)
}