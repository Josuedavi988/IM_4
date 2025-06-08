async function deleteUser() {
  const confirmed = confirm("Willst du dein Konto wirklich löschen?");
  if (!confirmed) return;

  try {
    const res = await fetch("api/delete-user.php", {
      method: "POST",
      credentials: "include"
    });
    const data = await res.json();

    if (data.status === "success") {
      alert("Konto gelöscht. Du wirst ausgeloggt.");
      window.location.href = "login.html";
    } else {
      alert(data.message || "Löschen fehlgeschlagen.");
    }
  } catch (err) {
    console.error("Fehler beim Löschen:", err);
    alert("Verbindungsfehler");
  }
}
