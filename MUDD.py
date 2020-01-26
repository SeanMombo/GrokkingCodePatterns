class Player:
    def __init__(self, hp, name, damage, xp):
        self.hp = hp
        self.name = name
        self.damage = damage
        self.xp = {
            'hitpointXp': 0,
            'attackXp': 0,
            'defenceXp': 0
        }


objPlayer = Player(100, "Zezima", 45, 0)
objPlayer.xp['defenceXp'] = 6969

print(objPlayer.xp)