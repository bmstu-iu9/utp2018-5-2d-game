function valid(form) {
//  localStorage.clear();
  var name = form.name.value;
  var password = form.password.value;
//  alert(localStorage.getItem(name));

  var Person = JSON.parse(localStorage.getItem(name));
//  alert(Person);
  var fail = false;
  if (Person){
    if (password == "")
      fail = "Вы не ввели свой пароль";
    if (password != Person.password){
      fail = "Неверный логин и/или пароль";
    }
  }
  else if (!Person){
    fail = "Не существует профиля";
  }
  else if (name == "" || name == " ") {
    fail = "Вы не ввели своё имя";
  }
  if (fail){
    alert(fail);
    return false;
  }else{
    return true;
  }
}
