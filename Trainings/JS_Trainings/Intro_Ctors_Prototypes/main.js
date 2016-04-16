var Box = function (height, width, depth, material) {
    this.height = height;
    this.width = width;
    this.depth = depth;
    this.material = material;

    this.volume = function () {
        return this.height * this.width * this.depth;    
    };
    
    this.equals = function (anotherBox){
        return this.material === anotherBox.material;
    };
}

var littleBox = new Box(2, 3, 4, 'cardboard');

var mediumBox = new Box(4, 5, 6, 'paper');

var bigBox = new Box(6, 7, 8, 'cardboard');

document.write('little box volume ' + littleBox.volume() + '<br>');
document.write('medium box volume ' + mediumBox.volume() + '<br>');
document.write('big box volume ' + bigBox.volume() + '<br>');

document.write('little box equals medium box ' + littleBox.equals(mediumBox) + '<br>');
document.write('little box equals big box ' + littleBox.equals(bigBox) + '<br>');
document.write('medium box equals big box ' + mediumBox.equals(bigBox) + '<br><br><br>');


var Employee = function(name){
    this.name = name;
    
    this.work = function(){
        document.write(this.name + ' is working <br>')
    };
};
Employee.salary = 3000;
Employee.takeLunch = function(){
    document.write('Emp is taking lunch <br>');
};

var developer = new Employee('Maryan');
developer.work();
Employee.takeLunch();

var accountant = new Employee('Ivan');
accountant.work();
Employee.takeLunch();

document.write('<br><br><br>');

var Human = function(name, age){
    this.name = name;
    this.age = age;
};

var HumanGroup = function(){
    this.group = [];
    
    this.sort = function(criteria){
        for(var i = 0; i < this.group.length; i++){
            for(var j = i + 1; j < this.group.length; j++){
                if(criteria(this.group[i].age, this.group[j].age)){
                    var temp = this.group[i];
                    this.group[i] = this.group[j];
                    this.group[j] = temp;
                }
            }   
        }
    };
    
    this.addHuman = function(human){
        this.group.push(human);
    };
    
    this.toString = function(){
        for(var i = 0; i < this.group.length; i++){
            document.write('name = ' + this.group[i].name + ', age = ' + this.group[i].age + '<br>');
        }
    }
};

var humanGroup = new HumanGroup();
humanGroup.addHuman(new Human('Maryan', 21));
humanGroup.addHuman(new Human('Mike', 33));
humanGroup.addHuman(new Human('Alex', 18));
humanGroup.addHuman(new Human('Petro', 24));

humanGroup.toString();
document.write('<br><br>');
humanGroup.sort(function(a, b){ return a < b});
humanGroup.toString();

