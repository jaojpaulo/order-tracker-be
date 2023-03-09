import { Request, Response } from "express";
import { rastrearEncomendas } from "correios-brasil/dist";
import { Tracker } from "./Tracker";

export class CorreiosTracker implements Tracker {
	public trackPackage(request: Request, response: Response): void {
		rastrearEncomendas([request.params.id])
    	.then(responseTrack => {
        	response.send(responseTrack);
   		});  
	}
}
