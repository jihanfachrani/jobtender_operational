async function loadTender(){

const response = await fetch("data/tender.json")
const data = await response.json()

/* informasi tender */

document.getElementById("judulTender").innerText = data.informasi_tender.judul
document.getElementById("periodeTender").innerText = data.informasi_tender.periode
document.getElementById("batasTender").innerText = data.informasi_tender.batas_pendaftaran

/* jabatan */

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

/* mandatory */

const mandatoryContainer = document.getElementById("mandatory")

data.seleksi_administratif.mandatory.forEach(m => {

mandatoryContainer.innerHTML += `

<div class="card">

<span class="badge mandatory">MANDATORY</span>

<h3>${m.aspek}</h3>

<p>${m.rincian}</p>

<p><b>Teknis Penilaian</b></p>

<div class="toggle-group">

<button class="toggle-btn" onclick="setToggle(this)">YA</button>

<button class="toggle-btn active" onclick="setToggle(this)">TIDAK</button>

</div>

</div>

`

})

/* ranking */

const rankingContainer = document.getElementById("ranking")

data.seleksi_administratif.ranking.forEach(r => {

rankingContainer.innerHTML += `

<div class="card">

<span class="badge ranking">RANKING</span>

<h3>${r.aspek}</h3>

<p>${r.rincian}</p>

<p><b>Bobot :</b> ${r.bobot}</p>

</div>

`

})

/* wawancara */

const wawancaraContainer = document.getElementById("wawancara")

data.tahap_wawancara.forEach(w => {

wawancaraContainer.innerHTML += `

<div class="card">

<h3>${w.aspek}</h3>

<p>${w.rincian}</p>

</div>

`

})

/* jadwal */

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

/* toggle button */

function setToggle(btn){

const group = btn.parentElement
const buttons = group.querySelectorAll(".toggle-btn")

buttons.forEach(b => b.classList.remove("active"))

btn.classList.add("active")

}