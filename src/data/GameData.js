const user = {
    name : "",
    character : "",

    setPlayerName(name) {
        this.name = name;
      },
    
      setcharacter(character) {
        this.character = character;
      },
    
      getPlayerName() {
        return this.name;
      },
    
      getcharacter() {
        return this.character;
      }
};

export default user;