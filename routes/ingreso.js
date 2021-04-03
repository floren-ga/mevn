import routerx from "express-promise-router";
import ingresoController from "../controllers/IngresoController";
import auth from "../middelwares/auth";

const router = routerx();

router.post("/add", auth.verifyAlmacenero, ingresoController.add);
router.get("/query", auth.verifyAlmacenero, ingresoController.query);
router.get("/list", auth.verifyAlmacenero, ingresoController.list);
router.get(
  "/consultaFechas",
  auth.verifyUsuario,
  ingresoController.consultaFechas
);
router.get(
  "/grafico12meses",
  auth.verifyUsuario,
  ingresoController.grafico12Meses
);
router.put("/activate", auth.verifyAlmacenero, ingresoController.activate);
router.put("/deactivate", auth.verifyAlmacenero, ingresoController.deactivate);

export default router;
