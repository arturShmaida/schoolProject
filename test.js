const log = console.log

function Person({ firstName, lastName, age }) {
  this.firstName = firstName
  this.lastName = lastName
  this.age = age
}

;(function () {
  this.getFullName = function () {
    log(`Этого человека зовут ${this.firstName} ${this.lastName}`)
    return this
  }
  this.getAge = function () {
    log(`Этому человеку ${this.age} лет`)
    return this
  }
  this.saySomething = function (phrase) {
    log(`Этот человек говорит: "${phrase}"`)
    return this
  }
}.call(Person.prototype))

const person = new Person({
  firstName: 'Иван',
  lastName: 'Петров',
  age: 30
})

person.getFullName().getAge().saySomething('Привет!')
/*
  Этого человека зовут Иван Петров
  Этому человеку 30 лет
  Этот человек говорит: "Привет!"
*/

function SubPerson({ lifestyle, skill, ...rest }) {
  // привязываем конструктор Person к экземпляру SubPerson применительно к наследуемым свойствам
  Person.call(this, rest)
  this.lifestyle = lifestyle
  this.skill = skill
  this.interest = null
}

// делаем прототип Person прототипом SubPerson
SubPerson.prototype = Object.create(Person.prototype)
// и добавляем в него новые функции
Object.assign(SubPerson.prototype, {
  getInfo() {
    this.getFullName()
    log(`Он ${this.lifestyle}`)
    return this
  },

  getSkill() {
    log(`Этот ${this.lifestyle} умеет ${this.skill}`)
    return this
  },

  getLike() {
    log(
      `Этот ${this.lifestyle} ${
        this.interest ? `любит ${this.interest}` : 'ничего не любит'
      }`
    )
    return this
  },

  setLike(value) {
    this.interest = value
    return this
  }
})

const developer = new SubPerson({
  firstName: 'Петр',
  lastName: 'Иванов',
  age: 25,
  lifestyle: 'разработчик',
  skill: 'писать код на JavaScript'
})

developer
  .getInfo()
  .getAge()
  .saySomething('Программирование - это круто!')
  .getSkill()
  .getLike()
/*
  Этого человека зовут Петр Иванов
  Он разработчик
  Этому человеку 25 лет
  Этот человек говорит: "Программирование - это круто!"
  Этот разработчик умеет писать код на JavaScript
  Этот разработчик ничего не любит
*/

developer.setLike('делать оригами').getLike()
// Этот разработчик любит делать оригами

log(SubPerson.prototype)