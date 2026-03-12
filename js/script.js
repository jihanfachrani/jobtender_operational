async function loadTender(){

const response = await fetch("data/tender.json")
const data = await response.json()

/* =========================
   INFORMASI TENDER
========================= */

document.getElementById("judulTender").innerText = data.informasi_tender.judul
document.getElementById("periodeTender").innerText = data.informasi_tender.periode


/* =========================
   TAMPILKAN JABATAN
========================= */

const jabatanTable = document.getElementById("jabatanTable")

data.jabatan.forEach(j => {

jabatanTable.innerHTML += `

<tr>
<td>${j.jabatan}</td>
<td>${j.lokasi}</td>
<td>${j.level}</td>
</tr>

`

})


/* =========================
   SELEKSI ADMINISTRATIF
========================= */

const adminTable = document.getElementById("adminTable")

// Mandatory
data.seleksi_administratif.mandatory.forEach(m => {

adminTable.innerHTML += `

<tr>
<td>${m.aspek}</td>
<td>${m.rincian}</td>
<td><span class="badge mandatory">${m.metode}</span></td>
<td>${m.teknis}</td>
</tr>

`

})

// Ranking
data.seleksi_administratif.ranking.forEach(r => {

adminTable.innerHTML += `

<tr>
<td>${r.aspek}</td>
<td>${r.rincian}</td>
<td><span class="badge ranking">Ranking</span></td>
<td>${r.bobot}</td>
</tr>

`

})


/* =========================
   TAHAP WAWANCARA
========================= */

const wawancaraContainer = document.getElementById("wawancara")

data.tahap_wawancara.forEach(w => {

wawancaraContainer.innerHTML += `

<div class="card">

<h3>${w.aspek}</h3>

<p>${w.rincian}</p>

</div>

`

})


/* =========================
   JADWAL
========================= */

const jadwalTable = document.getElementById("jadwalTable")

data.jadwal.forEach(j => {

jadwalTable.innerHTML += `

<tr>

<td>${j.tahap}</td>
<td>${j.tanggal}</td>
<td>${j.waktu ? j.waktu : "-"}</td>

</tr>

`

})

}

loadTender()