import {TokenTestService}   from '../test-code/token.test-service'
import {AnalyseCodeService} from '../analyze-code/analyze.code-service'
import {TasksService}        from '../tasks/tasks.service'
import { Injectable }       from "@angular/core";

@Injectable()
export class AppController {
    constructor( private tokenTestService: TokenTestService,
                 private analyseCodeService: AnalyseCodeService,
                 private tasksService: TasksService){}



    validateCode(){


    }
}