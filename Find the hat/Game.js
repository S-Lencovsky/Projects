const readlineSync = require('readline-sync');


const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

class Field {
    constructor(field) {
        this.field = field;
        this.playerposition = {x: 0, y: 0};
        this.field[this.playerposition.y][this.playerposition.x] = pathCharacter;
    }

    print() {
        console.log(this.field.map(row => row.join('')).join('\n'));
    }

    moveDirection(direction) {
        const prevX = this.playerposition.x;
        const prevY = this.playerposition.y;

        switch (direction) {
            case 'ArrowLeft':
                if (this.playerposition.x > 0) {
                    this.playerposition.x--;
                }
                break;
            case 'ArrowRight':
                if (this.playerposition.x < this.field[0].length - 1) {
                    this.playerposition.x++;
                }
                break;
            case 'ArrowUp':
                if (this.playerposition.y > 0) {
                    this.playerposition.y--;
                }
                break;
            case 'ArrowDown':
                if (this.playerposition.y < this.field.length - 1) {
                    this.playerposition.y++;
                }
                break;
            default:
                console.log('Invalid input');
                return;
        }

        this.field[prevY][prevX] = fieldCharacter; 
        this.checkPosition();
    }

    checkPosition() {
        const currentCharacter = this.field[this.playerposition.y][this.playerposition.x];
        
        if (currentCharacter === hat) {
            console.log('You found the hat!');
            process.exit();
        } else if (currentCharacter === hole) {
            console.log('You fell into a hole!');
            process.exit();
        } else if (currentCharacter === fieldCharacter) {
            
        }

        this.field[this.playerposition.y][this.playerposition.x] = pathCharacter;
    }

    static generateField(height, width, holesPercentage) {
        if (height < 2 || width < 2) {
            throw new Error('Height and width must be at least 2');
        } else if (holesPercentage < 0 || holesPercentage > 100) {
            throw new Error('Holes percentage must be between 0 and 100');
        }
    
        const field = Array.from({length: height}, () => Array.from({length: width}, () => fieldCharacter));
        const totalCells = height * width;
        const numberOfHoles = Math.floor(totalCells * holesPercentage / 100);
    
        let hatPlaced = false;
        while (!hatPlaced) {
            const x = Math.floor(Math.random() * width);
            const y = Math.floor(Math.random() * height);
            if (field[y][x] === fieldCharacter) {
                field[y][x] = hat;
                hatPlaced = true;
            }
        }
        let holesPlaced = 0;
        while (holesPlaced < numberOfHoles) {
            const x = Math.floor(Math.random() * width);
            const y = Math.floor(Math.random() * height);
            if (field[y][x] === fieldCharacter) {
                field[y][x] = hole;
                holesPlaced++;
            }
        }
        return field;
    }
}

const myField = new Field(Field.generateField(8, 8, 28));
myField.print();

console.log('Use the arrow keys to move and locate the hat (^)');

while (true) {
    const input = readlineSync.keyIn('', {hideEchoBack: true, mask: ''});
    if (input === '8') {
        myField.moveDirection('ArrowUp');
    } else if (input === '2') {
        myField.moveDirection('ArrowDown');
    } else if (input === '6') {
        myField.moveDirection('ArrowRight');
    } else if (input === '4') {
        myField.moveDirection('ArrowLeft');
    } else if (input === 'q') {
        console.log('Quitting game. Thanks for playing!');
        break;
    } else {
        console.log('Invalid input');
    }
    myField.print();
}
