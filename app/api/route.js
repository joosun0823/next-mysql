import { queryExecute } from "./db";

export async function GET(){

  const data = await queryExecute('SELECT * from member')
  return Response.json(data);
}

  // const data = await queryExecute(`insert into member (id, name, email) values ('abc','홍길동','hong@gmail.com')`)
  // ----> 데이터 추가시킴

  // const data = await queryExecute(`update member set name='징징이' where num = 3`)
  // ----> num 3이라 되있는 데이터 이름 징징이로 바꿈

  // const data = await queryExecute(`delete from member where num = 8 `)
  // ----> num 8이라 되있는 데이터 지움

  // const data = await queryExecute(`
  //   create table contact (
  //     name varchar(30),
  //     email varchar(100),
  //     contents text,
  //     num int not null auto_increment,
  //     primary key(num)
  //   )
  // `)
  // ----> 테이블 추가

  // const data = await queryExecute(`drop table contact`)
  // ----> 테이블 삭제

export async function POST(req){
  const {name, email, id} = await req.json();

  const data = await queryExecute(`insert into member (id, name, email) values (?,?,?)`,[id, name, email]);
  return Response.json([]);
}

