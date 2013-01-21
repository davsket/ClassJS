# Model-Schema

This is based in daClass https://github.com/jseros/daClass
Mixed with http://stackoverflow.com/questions/4152931/javascript-inheritance-call-super-constructor-or-use-prototype-chain

Pros:
	- you can define an initialization function
 	- the prototype chain is respected
 	- the new class will be instanceof base and older bases
 	- you can define the properties of the class
 	- has AMD version with RequireJS

## Requirements

None, Class is agnostic

## Usage

Import Class.js or use the RequireJS version at `src/requirejs/Class.js`

### Class creation

The base Class and the properties are optional
```javascript
var NewClass = new Class([BaseClass], [properties])
```

So you can create your class as:
```javascript
var Animal = new Class()
```

Also as
```javascript
var Animal = new Class({isAnimal: true})
```

And you can extend Classes
```javascript
var Dog = new Class(
		Animal,
		{
			type: 'Dog',
			isDog: true,
			bark: function(){
				return 'Wuau!'
			}
		})
```

And so on...
```javascript
var Dalmatian = new Class(
		Dog,
		{
			initialize: function(name){
				this.name = name
			},
			bark: function(){
				return this._super_.bark() + ' ' + this.name + '!'
			}
		})
```

As you can see, the instanced object form a Class can acces the property `_super_` to have access to the parent prototype chain.


### Class usage

Once you have your Classes created, you can create new instances:
```javascript
animal = new Animal()
dog = new Dog()
dalmatian = new Dalmatian('Paco')
```

### Class inheritance

The prototype an instantiation is respected, so you can use:
```javascript
dalmatian instanceof Dalmatian  //true
dalmatian instanceof Dog		//true
dalmatian instanceof Animal		//true
```
### Testing

The tests are made with Jasmin, and you can check them at:
[test/test.html](https://github.com/davsket/ClassJS/blob/gh-pages/test/test.html)
And run them at:
[http://davsket.github.com/ClassJS/test/test.html](http://davsket.github.com/ClassJS/test/test.html)

## License

MIT Licensed