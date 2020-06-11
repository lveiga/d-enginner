package main

import (
	"github.com/d-engineer/api/src/routes"
	"github.com/gofiber/fiber"
)

func main() {
	app := fiber.New()

	routes.Register(app)

	app.Listen(3000)
}
