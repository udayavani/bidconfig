/**
 * Created by Owner on 4/18/2017.
 */

export interface IBidconfig{
  //id:number;
  name:string;
  price:number;
  datetimes:{
    updated: Date;
    last_excuted:Date;
  };
  tags:string[]
}

