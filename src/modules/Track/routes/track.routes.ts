import { Router, Request, Response } from "express";
import checkIfIsAuthenticated from "../../Authentication/middlewares/checkIfIsAuthenticated";
import TrackerService from "../services/TrackService";

const TrackRoute = Router();

TrackRoute.get("/package/track/:id", checkIfIsAuthenticated,(request: Request, response: Response) => {
    TrackerService.track(request, response);
});

export default TrackRoute;
