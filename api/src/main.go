package main

import (
	"fmt"
	"log"
	"os"

	"github.com/d-engineer/api/src/repositories"
	"github.com/d-engineer/api/src/routes"
	"github.com/gofiber/fiber"
	"github.com/joho/godotenv"
)

var server = repositories.Server{}

func main() {

	var err error
	err = godotenv.Load()
	if err != nil {
		log.Fatalf("Error getting env, not comming through %v", err)
	} else {
		fmt.Println("We are getting the env values")
	}

	server.Initialize(os.Getenv("DB_DRIVER"), os.Getenv("DB_USER"), os.Getenv("DB_PASSWORD"), os.Getenv("DB_PORT"), os.Getenv("DB_HOST"), os.Getenv("DB_NAME"))

	app := fiber.New()

	routes.Register(app)

	app.Listen(3001)
}
