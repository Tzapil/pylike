import pygame
import Screen

class Game:
    working = True
    screens = dict()
    current = None

    def __init__(self):
        self.screens = {
            "main_menu": Screen.MainMenuScreen(self),
            "game": Screen.GameScreen(self)
        }
        self.current = self.screens["main_menu"]

    def draw(self, canvas):
        self.current.draw(canvas)

    def handle_event(self, event):
        # Условия выхода
        if event.type == pygame.QUIT:
            self.working = False
            return
        if event.type == pygame.KEYDOWN:
            if event.key == pygame.K_ESCAPE:
                self.working = False
                return
        self.current.handle_event(event, self)

    def set_screen(self, name):
        if name in self.screens:
            self.current = self.screens[name]

    def quit(self):
        self.working = False