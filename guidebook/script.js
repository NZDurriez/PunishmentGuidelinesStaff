const data = [
  ["3SP|3 Strike Polcy", "1 Day Ban", "3 Day Ban", "PERM BAN","-"],
  ["Abuse of OOC", "Warning", "Kick", "12 Hour Ban", "72 Hour Ban"],
  ["Combat Logging", "Warning", "2 Hour Ban", "12 Hour Ban", "72 Hour Ban"],
  ["Cop Baiting", "Educational", "Kick", "12 Hour Ban", "72 Hour Ban"],
  ["Exploiting", "72hr Ban", "PERM BAN (if intent proven)", "-", "-"],
  ["Fail Roleplay", "Educational", "2 Hour Ban", "12 Hour Ban", "3SP Initiation"],
  ["Fail to Follow Staff Direction", "Warning", "24 Hour Ban", "72 Hour Ban", "1 Week Ban"],
  ["Forced RP / Interjection", "Educational", "Kick", "2 Hour Ban", "24 Hour Ban"],
  ["Greenzone Breach", "Educational", "Kick", "2 Hour Ban", "24 Hour Ban"],
  ["GTA Driving", "Educational", "Kick", "2 Hour Ban", "24 Hour Ban"],
  ["Hacking / Modding", "PERM BAN (appealable)", "-", "-", "-"],
  ["Harassment", "Warning", "12 Hour Ban", "72 Hour Ban", "PERM BAN"],
  ["Meta Gaming", "Educational", "12 Hour Ban", "72 Hour Ban", "PERM BAN"],
  ["NITRP", "Educational", "Kick", "12 Hour Ban", "72 Hour Ban"],
  ["No Microphone", "Educational", "Kick", "-", "-"],
  ["Priority Status Breach", "Educational", "Kick", "12 Hour Ban", "24 Hour Ban"],
  ["RDM", "Kick", "12 Hour Ban", "24 Hour Ban", "72 Hour Ban"],
  ["Restricted Civ RP", "Educational", "Kick", "12 Hour Ban", "24 Hour Ban"],
  ["Sexual Remarks / Comments", "Warning", "PERM BAN (if repeated)", "-", "-"],
  ["Specialist Scenes", "Educational", "Kick", "12 Hour Ban", "24 Hour Ban"],
  ["Staff Impersonation", "24 Hour Ban", "PERM BAN", "-", "-"],
  ["Toxic Behaviour", "Kick", "24 Hour Ban", "72 Hour Ban", "3SP Initiation"],
  ["Trolling", "Warning", "12 Hour Ban", "24 Hour Ban", "72 Hour Ban"],
  ["VDM", "Kick", "12 Hour Ban", "24 Hour Ban", "72 Hour Ban"],
  ["Vulgar Language", "Warning", "24 Hour Ban", "72 Hour Ban", "1 Week Ban / PERM"],
];

const tbody = document.querySelector("#punishmentTable tbody");

data.forEach(row => {
  const tr = document.createElement("tr");
  row.forEach(cell => {
    const td = document.createElement("td");
    td.textContent = cell;
    tr.appendChild(td);
  });
  tbody.appendChild(tr);
});

document.getElementById("searchInput").addEventListener("input", function () {
  const filter = this.value.toLowerCase();
  const rows = tbody.querySelectorAll("tr");
  rows.forEach(row => {
    const text = row.innerText.toLowerCase();
    row.style.display = text.includes(filter) ? "" : "none";
  });
});


