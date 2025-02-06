class Media{
    constructor(title){
        this._title = title;
        this._isCheckedOut = false;
        this._ratings = [];
    }

    get title(){
        return this._title;
    };

    get isCheckedOut(){
        return this._isCheckedOut;
    };

    get ratings(){
        return this._ratings;
    };

    set isCheckedOut(value){
        this._isCheckedOut = value;
    };

    toggleCheckOutStatus(){
        this._isCheckedOut = !this._isCheckedOut;
    };

    getAverageRating(){
        let ratingsSum = this._ratings.reduce((currentSum, rating) => currentSum + rating,0);
        return ratingsSum / this._ratings.length;
    }

    addRating(value){
        this._ratings.push(value);
    }
}

class Book extends Media(){
    constructor(author,title, pages, isCheckedOut, ratings){
        super(title);
        this._author = author;
        this._pages = pages;
        this._isCheckedOut = isCheckedOut;
        this._ratings = ratings;
    }

    get author(){
        return this._author;
    };

    get title(){
        return this._title;
    };

    get pages(){
        return this._pages;
    }

    get isCheckedOut(){
        return this._isCheckedOut;
    }

    get ratings(){
        return this._ratings;
    }

    getAverageRating(){
        let ratingsSum = this._ratings.reduce((currentSum, rating) => currentSum + rating,0);
        return ratingsSum / this._ratings.length;
    };

    toggleCheckOutStatus(){
        this._isCheckedOut = !this._isCheckedOut;
    };

    addRating(value){
        this._ratings.push(value);
    };
}

class Movie extends Media(){
    constructor(director,title, runTime, isCheckedOut, ratings){
        super(title);
        this._director = director;
        this._runTime = runTime;
        this._isCheckedOut = isCheckedOut;
        this._ratings = ratings;
    }

    get director(){
        return this._director;
    };

    get title(){
        return this._title;
    };

    get runTime(){
        return this._runTime;
    }

    get isCheckedOut(){
        return this._isCheckedOut;
    }

    get ratings(){
        return this._ratings;
    }

    getAverageRating(){
        let ratingsSum = this._ratings.reduce((currentSum, rating) => currentSum + rating,0);
        return ratingsSum / this._ratings.length;
    };

    toggleCheckOutStatus(){
        this._isCheckedOut = !this._isCheckedOut;
    };

    addRating(value){
        this._ratings.push(value);
    };
}
