import pygame
import Surface

class Screen:
    game = None

    def __init__(self, game):
        self.game = game

    def draw(self, canvas):
        canvas.blit(self.surface, (0, 0))
        self.surface.draw(canvas)

    def handle_event(self, event, game):
        pass

class MainMenuScreen(Screen):
    menu_active = 0
    menu_rows = ["New Game", "Load Game", "Leaderboard", "Exit"]
    surface = None

    def __init__(self, *args, **kwargs):
        self.surface = Surface.MenuSurface(
            (640, 480),
            (0, 0),
            Surface.ScreenSurface((0, 0))
        )
        # self.surface = Surface.ScreenSurface((0, 0))
        self.surface.connect_screen(self)

        super().__init__(*args, **kwargs)

    def handle_event(self, event, game):
        if event.type == pygame.KEYDOWN:
            print('EVENT', event.key)
            if event.key == pygame.K_DOWN:
                self.menu_active = (self.menu_active + 1) % len(self.menu_rows)
                return
            if event.key == pygame.K_UP:
                self.menu_active = (self.menu_active - 1) % len(self.menu_rows)
                return
            
            if event.key == pygame.K_RETURN:
                if self.menu_active == 0:
                    pass
                elif self.menu_active == 1:
                    pass
                elif self.menu_active == 2:
                    pass
                elif self.menu_active == 3:
                    self.game.quit()


    

    