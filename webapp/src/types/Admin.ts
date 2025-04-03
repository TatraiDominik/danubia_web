export interface Admin{
  jwt:string,
  data?:{
    id:string,
    adminName:string
  }
}
