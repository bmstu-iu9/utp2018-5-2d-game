function valid(form) {
  var fail = false;
  var RePassword = form.RePassword.value;
  var email = form.email.value;
  var name = form.name.value;
  var Person = {
	  "password": form.password.value,
	  "state": form.state.value,
	  "health": 100,
	  "max": 30,
	  "min": 10,
	  "skillDefense": 20,
	  "gold": 0,
	  "type": 'usual'
};
  var adr_pattern = /[0-9a-z_-]+@[0-9a-z_-]+\.[a-z]{2,5}/i;
  if (name == "" || name == " ")
    fail = "Вы не ввели своё имя";
  else if (email.split('@').length - 1 == 0)
    fail = "Вы ввели email неправильно";
  else if (Person.password == "")
    fail = "Вы не ввели свой пароль";
  else if (Person.password != RePassword)
    fail = "Пароли не совпадают";
  else if (Person.state == "")
    fail = "Укажите пол";
  if (fail){
    alert(fail);
    return false;
  }else{
    localStorage.setItem(name, JSON.stringify(Person));
    window.name = name;
    return true;
  }
}
