package routes

import (
	"github.com/d-engineer/api/src/services"
	"github.com/gofiber/fiber"
)

// Register ...
func Register(app *fiber.App) {

	app.Get("/", func(c *fiber.Ctx) {
		c.Send("Hello, World!")
	})

	app.Get("/admin", services.GetAdmin)
}
