import {ILogger} from './iLogger.service'

export class ConsoleLoggerService extends ILogger{

  write(msg:string):void{

    console.log(msg);
  }
}
