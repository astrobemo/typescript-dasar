function genericType(){

    const gameScores = [14,21,33,42,59];
    const players = ['John', 'Jane', 'Jim', 'Jill']; 
    const randomObjectArray = [{name: 'John'}, {name: 'Jane'}];
    
    /* 
    * ini ga ada masalah sih cmn kurang oke
    * typescript otomatis kasih tipe data any disini
    * karena dia ga tau tipe data apa yang akan di pakai
    function getLastItem(array){
        return array[array.length - 1];
    }*/
    
    // generic jadi salah satu solusinya
    // Tipe ini bebas mau blablabla, mau T dll
    function getLastItem<Tipe>(array: Tipe[]): Tipe | undefined{ 
        return array[array.length - 1];
    }
    
    const lastScore = getLastItem<number>(gameScores);
    console.log(lastScore);
    const lastPlayer = getLastItem<string>(players);
    
    function addToArray<T>(array: T[], item: T):T[]{
        array.push(item);
        return array;
    }
    
    addToArray<number>(gameScores, 100);
    addToArray<string>(players, 'Jenny');
}
