import { validateBody } from "../../helpers/validateBody.js";
import { createOrderSchema } from "../../schemas/orderSchema.js";
import { order as c } from "../../controllers/index.js";
import { createRouter } from "../../helpers/createRouter.js";

const ordersRouterOptions = [
  { method: "post", route: "/", middlewares: [validateBody(createOrderSchema)], controller: c.createOrder },
];

const ordersRouter = createRouter({ options: ordersRouterOptions });
ordersRouter.setRouter();

export default ordersRouter.router;
