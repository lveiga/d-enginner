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

	app.Post("/obras", services.GetObras)
	app.Put("/obras", services.GetObras)
	app.Get("/obras", services.GetObras)
	app.Delete("/obras", services.GetObras)

	app.Post("/produtos", services.GetProdutos)
	app.Put("/produtos", services.GetProdutos)
	app.Get("/produtos", services.GetProdutos)
	app.Delete("/produtos", services.GetProdutos)

	app.Get("/admin", services.GetAdmin)
}
