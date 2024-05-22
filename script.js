let taskList = [];

const handleOnSubmit = (e) => {
  //   const elm = document.getElementById("task");
  //   console.log(elm.value);

  const newForm = new FormData(e);

  const task = newForm.get("task");
  const hr = newForm.get("hr");
  const obj = {
    task,
    hr,
    id: randomIdGenerator(),
  };

  taskList.push(obj);
  displayEntryList();
};

const displayEntryList = () => {
  let str = "";

  const entryElm = document.getElementById("entryList");

  taskList.map((item, i) => {
    str += `<td>${i + 1}</td>
    <td>${item.task}</td>
    <td>${item.hr}</td>
    <td class="text-end">
        <button onclick ="handleOnDelete('${
          item.id
        }')" class="btn btn-danger"><i class="fa-solid fa-trash-can"></i></button>
        <button class="btn btn-success"><i class="fa-solid fa-arrow-right"></i></button>
    </td>
    </tr>`;
  });

  entryElm.innerHTML = str;
};

const randomIdGenerator = (length = 6) => {
  const str = "qwertyuiopasdfghjklzxcxvbnm1234567890";

  let id = "";

  for (let i = 0; i < 6; i++) {
    const randomIndex = Math.floor(Math.random() * str.length);
    id += str[randomIndex];
  }

  return id;
};

const handleOnDelete = (id) => {
  if (window.confirm("Are you sure, you want to delete this?")) {
    taskList = taskList.filter((item) => item.id !== id);
  }

  displayEntryList();
};
