function valid(form) {
  var fail = false;
  var RePassword = form.RePassword.value;
  var email = form.email.value;
  var name = form.name.value;
  var Person = {
  "password": form.password.value,
  "state": form.state.value
};
  var adr_pattern = /[0-9a-z_-]+@[0-9a-z_-]+\.[a-z]{2,5}/i;
  if (name == "" || name == " ")
    fail = "Вы не ввели своё имя";
  else if (email.split('@').length - 1 == 0)
    fail = "Вы ввели email неправильно";
  else if (Person.password == "")
    fail = "Вы не ввели своё пароль";
  else if (Person.password != RePassword)
    fail = "Пароли не совпадают";
  else if (Person.state == "")
    fail = "Укажите пол";
  if (fail){
    alert(fail);
    return false;
  }else{
    localStorage.setItem(name, JSON.stringify(Person));
  //  alert(localStorage.getItem(name));
  //  var Person2 = JSON.parse(localStorage.getItem(name));
 	//  alert(Person2.password);
    return true;
  }
}
