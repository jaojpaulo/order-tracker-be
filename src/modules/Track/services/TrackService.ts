import { Request, Response } from "express";
import { CorreiosTracker } from "../apis/CorreiosTracker";

export default class TrackerService {
	
	public static track(request: Request, response: Response) {

		new CorreiosTracker().trackPackage(request, response);
	}
}
