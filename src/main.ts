import { router } from "./server"
import config from "./config"

router.listen(config.PORT, () => {
    console.log(`Server is listening on: http://${config.HOST}:${config.PORT}`)
})
