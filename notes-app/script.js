function saveNote() {
  const input = document.getElementById("noteInput").value.trim();
  if (!input) return;

  let notes = JSON.parse(localStorage.getItem("notes")) || [];
  notes.push(input);
  localStorage.setItem("notes", JSON.stringify(notes));
  displayNotes();
  document.getElementById("noteInput").value = "";
}

function displayNotes() {
  const notes = JSON.parse(localStorage.getItem("notes")) || [];
  const list = document.getElementById("notesList");
  list.innerHTML = "";

  notes.forEach((note, i) => {
    const li = document.createElement("li");
    li.textContent = note;

    const delBtn = document.createElement("button");
    delBtn.textContent = "Delete";
    delBtn.onclick = () => {
      notes.splice(i, 1);
      localStorage.setItem("notes", JSON.stringify(notes));
      displayNotes();
    };

    li.appendChild(delBtn);
    list.appendChild(li);
  });
}

window.onload = displayNotes;
