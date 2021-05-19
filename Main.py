import pygame
import numpy as np

import Game

BLACK = (0, 0, 0)
WHITE = (255, 255, 255)

SCREEN_DIM = (800, 600)

pygame.init()
gameDisplay = pygame.display.set_mode(SCREEN_DIM)
pygame.display.set_caption("MyRPG")

game = Game.Game()

while game.working:
    for event in pygame.event.get():
        game.handle_event(event)
    
    gameDisplay.fill(BLACK)
    game.draw(gameDisplay)
    pygame.display.flip()

pygame.display.quit()
pygame.quit()
exit(0)