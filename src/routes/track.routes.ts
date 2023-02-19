import { Router, Request, Response } from "express";
import { rastrearEncomendas } from "correios-brasil/dist";
import checkIfIsAuthenticated from "../middleware/ensureAuthenticated";

const TrackRoute = Router();

TrackRoute.get("/package/track/:id", checkIfIsAuthenticated,(request: Request, response: Response) => {
    
    rastrearEncomendas([request.params.id])
    .then(responseTrack => {
        response.send(responseTrack);
    });

    
});

export default TrackRoute;
