import { Request, Response } from "express";

export abstract class Tracker {
	public abstract trackPackage(request: Request, response: Response): void;
}
