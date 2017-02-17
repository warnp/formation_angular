/**
 * Created by AELION on 17/02/2017.
 */
export class LogService{
  log(message){
    if(message instanceof Object)
      console.log(`OBJECT: ${JSON.stringify(message)}`)
    else
      console.log(`MESSAGE: '${message}'`)
  }
}
