document.querySelectorAll(".delete-btn").forEach((btn) => {
  btn.addEventListener("click", async (e) => {
    const id = e.target.closest("li").dataset.id;
    await fetch(`/item/${id}`, { method: "DELETE" });
    location.reload();
  });
});

document.querySelectorAll(".edit-btn").forEach((btn) => {
  btn.addEventListener("click", async (e) => {
    const li = e.target.closest("li");
    const id = li.dataset.id;

    const newText = prompt("Edit text:", li.querySelector(".text").innerText);
    if (!newText) return;

    await fetch(`/item/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: newText }),
    });

    location.reload();
  });
});
