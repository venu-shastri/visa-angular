import {ILogger} from './iLogger.service'
export class ApiLoggerService extends ILogger{

  write(msg:string){

    console.log(`Api Log ${msg}`);

  }
}
