import { Router, Request, Response } from "express";
import checkIfIsAuthenticated from "../../Authentication/middleware/checkIfIsAuthenticated";
import { CorreiosTracker } from "../CorreiosTracker";

const TrackRoute = Router();

TrackRoute.get("/package/track/:id", checkIfIsAuthenticated,(request: Request, response: Response) => {
    new CorreiosTracker().trackPackage(request, response);
});

export default TrackRoute;
