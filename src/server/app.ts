import express, { Application, Router } from "express";
import {router} from "./router";

export class App {
  public server: Application;
  public route: Router;

  constructor() {
    this.server = express();
    this.route = router;

    this.appMiddlewares();
    this.router();
  }

  private appMiddlewares() {
    this.server.use(express.json({ limit: '5mb' }));
    this.server.use(express.urlencoded({ extended: true }));
  }

  private router() {
    this.server.use(this.route);
  }

}
