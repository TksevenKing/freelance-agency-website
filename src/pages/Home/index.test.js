//  on import la fonction a tester
import { sum } from "./";

// voici la focntion de test qui commmence pa le mot cle test
test('Ma fonction sum', () => {
    const result = sum(4,5) 
    expect(result).toBe(9) // on donne le resultat attendu en cas de reussite
})