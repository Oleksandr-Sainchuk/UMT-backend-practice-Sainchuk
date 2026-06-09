import { fireplace as c } from "../../controllers/index.js";
import { getFireplaceQuerySchema } from "../../schemas/index.js";
import { createRouter } from "../../helpers/createRouter.js";
import { validateQuery } from "../../helpers/validateQuery.js";

const fireplaceRouterOptions = [
  {
    method: "get",
    route: "/",
    middlewares: [validateQuery(getFireplaceQuerySchema)],
    controller: c.getFireplaceList,
  },
];

const fireplaceRouter = createRouter({ options: fireplaceRouterOptions });
fireplaceRouter.setRouter();

export default fireplaceRouter.router;
