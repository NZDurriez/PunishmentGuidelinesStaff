const data = [
  ["3SP|3 Strike Policy", "1 Day Ban", "3 Day Ban", "PERM BAN (See Notes)", "-", "-", "Third strike must be authorized by a manager or higher"],
  ["Abuse of OOC", "Warning", "Kick", "12 Hour Ban", "72 Hour Ban", "Reset", "Spamming OOC"],
  ["Combat Logging", "Warning", "2 Hour Ban", "12 Hour Ban", "72 Hour Ban", "Reset", "Context dependent (may not be intentional)"],
  ["Cop Baiting", "Educational", "Kick", "12 Hour Ban", "72 Hour Ban", "Reset", "Coach RP styles"],
  ["Exploiting", "72hr Ban", "PERM BAN (if intent proven)", "-", "-", "-", "Needs proof; appeal possible"],
  ["FRP|Fail Roleplay", "Educational", "2 Hour Ban", "12 Hour Ban", "Initiate 3SP", "Reset", "Focus on RP improvement"],
  ["Fail to Follow Staff", "Warning", "24 Hour Ban", "72 Hour Ban", "1 Week Ban", "Reset", "Genuine misunderstanding = education"],
  ["Forced RP / Interjection", "Educational", "Kick", "2 Hour Ban", "24 Hour Ban", "Reset", "Use educational tone"],
  ["Greenzone Breach", "Educational", "Kick", "2 Hour Ban", "24 Hour Ban", "Reset", "Clarify rules if unclear"],
  ["GTA Driving", "Educational", "Kick", "2 Hour Ban", "24 Hour Ban", "Reset", "Escalate if reckless"],
  ["Hacking / Modding", "PERM BAN (appealable)", "-", "-", "-", "-", "Appealable only with strong evidence"],
  ["Harassment", "Warning", "12 Hour Ban", "72 Hour Ban", "PERM BAN", "-", "Escalate if repeated"],
  ["Meta Gaming", "Educational", "12 Hour Ban", "72 Hour Ban", "PERM BAN", "-", "RP clarity often resolves it"],
  ["NITRP", "Educational", "Kick", "12 Hour Ban", "72 Hour Ban", "Reset", "Use OOC talk first"],
  ["No Microphone", "Educational", "Kick", "-", "-", "-", "Offer alternatives"],
  ["Priority Status Breach", "Educational", "Kick", "12 Hour Ban", "24 Hour Ban", "Reset", "Repeat consider 3SP."],
  ["RDM", "Kick", "12 Hour Ban", "24 Hour Ban", "72 Hour Ban", "Reset", "Low Tolerance"],
  ["Restricted Civ RP", "Educational", "Kick", "12 Hour Ban", "24 Hour Ban", "Reset", "Suicidal RP = context needed"],
  ["Sexual Remarks / Comments", "Warning", "PERM BAN (if repeated)", "-", "-", "-", "Remark must be witnessed by staff or reported by a player. (Also Context dependent; consult Exec)"],
  ["Specialist Scenes", "Educational", "Kick", "12 Hour Ban", "24 Hour Ban", "Reset", "Guided by RP scene setup"],
  ["Staff Impersonation", "24 Hour Ban", "PERM BAN", "-", "-", "-", "Zero tolerance"],
  ["Toxic Behaviour", "Kick", "24 Hour Ban", "72 Hour Ban", "3SP", "-", "Requires staff mediation"],
  ["Trolling", "Warning", "12 Hour Ban", "24 Hour Ban", "72 Hour Ban", "Reset", "Can be playful — judge tone"],
  ["VDM", "Kick", "12 Hour Ban", "24 Hour Ban", "72 Hour Ban", "Reset", "Low Tolerance"],
  ["Vulgar Language", "Warning", "24 Hour Ban", "72 Hour Ban", "1 Week Ban / PERM", "-", "Slurs = zero tolerance; others = escalation"],
  ["", "", "", "", "", "", "Consider early 3SP initiation if low play-time."]
];

const tbody = document.querySelector("#punishmentTable tbody");

data.forEach(row => {
  const tr = document.createElement("tr");
  row.forEach((cell, i) => {
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
