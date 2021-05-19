import pygame

colors = {
    "black": (0, 0, 0, 255),
    "white": (255, 255, 255, 255),
    "red": (255, 0, 0, 255),
    "green": (0, 255, 0, 255),
    "blue": (0, 0, 255, 255),
    "wooden": (153, 92, 0, 255),
}

class ScreenSurface(pygame.Surface):
    screen = None
    successor = None

    def __init__(self, *args, **kwargs):
        if len(args) > 1:
            self.successor = args[-1]
            self.next_coord = args[-2]
            args = args[:-2]
        else:
            self.successor = None
            self.next_coord = (0, 0)
        super().__init__(*args, **kwargs)
        self.fill(colors["black"])

    def draw(self, canvas):
        if self.successor is not None:
            canvas.blit(self.successor, self.next_coord)
            self.successor.draw(canvas)

    def connect_screen(self, screen):
        self.screen = screen
        if self.successor is not None:
            self.successor.connect_screen(screen)

class GameSurface(ScreenSurface):
    def draw(self, canvas):
        font = pygame.font.SysFont('Comic Sans MS', 30)
        self.blit(font.render("Hello, you're in my game", False, colors["white"]), (50, 50))
        self.blit(font.render("Press any key to continue...", False, colors["white"]), (50, 75))

class MenuSurface(ScreenSurface):
    def draw(self, canvas):
        rows = self.screen.menu_rows
        active = self.screen.menu_active

        line_height = 25
        font = pygame.font.SysFont('Comic Sans MS', line_height)
        vertical = 50
        for i, row in enumerate(rows):
            color = colors["white"]
            if i == active:
                color = colors["red"]
            self.blit(font.render(row, False, color), (50, vertical))
            vertical += line_height