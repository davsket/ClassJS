/*global Class,beforeEach,expect,it, describe*/
describe('Class', function() {
	var Animal, Dog, Dalmatian,
		animal, dog, dalmatian

	beforeEach(function() {
		Animal = new Class({
			type: 'Animal',
			isAnimal: true
		})
		Dog = new Class(Animal,
		{
			type: 'Dog',
			isDog: true,
			bark: function(){
				return 'Wuau!'
			}
		})
		Dalmatian = new Class(Dog,
		{
			initialize: function(name){
				this.name = name
			},
			bark: function(){
				return this._super_.bark() + ' ' + this.name + '!'
			}
		})
		animal = new Animal()
		dog = new Dog()
		dalmatian = new Dalmatian('Paco')
	})

	it('should be able to create a new class', function() {
		expect(Animal).toBeDefined()
	})

	it('and extend it in another class', function() {
		expect(Dog).toBeDefined()
	})

	it('and so on...', function() {
		expect(Dalmatian).toBeDefined()
	})

	describe('Check inheritance', function() {
		beforeEach(function() {
		})

		it('animal to has attribute isAnimal', function() {
			expect(animal.isAnimal).toBe(true)
		})

		it('dog to has attribute isAnimal and is Dog', function() {
			expect(animal.isAnimal).toBe(true)
			expect(dog.isDog).toBe(true)
		})

		it('dog should be able to bark', function() {
			expect(dog.bark).toBeDefined()
		})

		it('dog to has attribute isAnimal and is Dog', function() {
			expect(dog.isAnimal).toBe(true)
			expect(dog.isDog).toBe(true)
		})

		it('dalmatian to has attribute isAnimal and is Dog', function() {
			expect(dalmatian.isAnimal).toBe(true)
			expect(dalmatian.isDog).toBe(true)
		})
	})

	describe('Check prototype chain', function() {
		beforeEach(function() {
		})

		it('check that dalmatian is Dalmatian', function() {
			expect(dalmatian instanceof Dalmatian).toBe(true)
		})

		it('check that dalmatian is Dog', function() {
			expect(dalmatian instanceof Dog).toBe(true)
		})

		it('check that dalmatian is Animal', function() {
			expect(dalmatian instanceof Animal).toBe(true)
		})

		it('check _super_ access', function() {
			expect(dalmatian.bark()).toBe('Wuau! Paco!')
		})

	})

})