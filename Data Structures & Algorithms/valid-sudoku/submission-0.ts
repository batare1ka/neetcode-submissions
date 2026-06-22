class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board: string[][]): boolean {
        for(let i = 0 ; i < board.length; i++) {
            const arr = [];
            for(let j = 0; j < board[i].length; j++) {
                if(board[i][j] !== '.') {
                    arr.push(board[i][j]);
                } 
            }
            if(arr.length !== new Set(arr).size) return false;
        }

        for(let i = 0; i < board[0].length; i++) {
            const arr = [];
            for(let j = 0; j < board.length; j++) {
                if(board[j][i] !== '.') {
                    arr.push(board[j][i]);
                }
            }
            if(arr.length !== new Set(arr).size) return false;
        }

        for(let i = 0; i < board.length; i += 3) {
            for(let j = 0; j < board[i].length; j += 3) {
            const arr = [];
                arr.push(...board[i].slice(j, j + 3));
                arr.push(...board[i+1].slice(j, j + 3));
                arr.push(...board[i+2].slice(j,j + 3));
                const filtered = arr.filter((el) => el !== '.');
            if(filtered.length !== new Set(filtered).size) return false;
            }
            
        }
            return true;

    }
}
