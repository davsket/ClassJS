/*global define*/
define(function(){
	'use strict';

	/**
	 * Defines a new Class
	 * This is based in daClass https://github.com/jseros/daClass
	 * Mixed with http://stackoverflow.com/questions/4152931/javascript-inheritance-call-super-constructor-or-use-prototype-chain
	 *
	 * Pros:
	 *	- you can define an initialization function
	 *  - the prototype chain is respected
	 *  - the new class will be instanceof base and older bases
	 *  - you can define the properties of the class
	 *
	 * @param {Object} [base]  Constructor of the class to extend
	 * @param {Object} properties	Attributes of the class
	 */
	function Class(base, properties){
		var prop

		// base is optional
		if( base && !properties ){
			properties = base
			base = null
		}

		function extend(Base, Class) {
			// Copy the prototype from the base to setup inheritance
			Class.prototype = new Base()
			// Remember the constructor property was set wrong, let's fix it
			Class.prototype.constructor = Class
		}

		function Clss(){
			if(base){
				base.call(this)
				// Assign the super prototype for convenient
				// invocation
				this._super_ = base.prototype
			}

			if(Clss.prototype.initialize) Clss.prototype.initialize.apply(this, arguments)
		}

		//Extend the prototype and set the constructor right
		if(base) extend(base, Clss)
		
		for( prop in properties ){
			if( properties.hasOwnProperty(prop) ) {
				Clss.prototype[prop] = properties[prop]
			}
		}

		return Clss
	}

	return Class
});