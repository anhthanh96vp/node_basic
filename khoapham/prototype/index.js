const KhoaHoc = function(ten, hocphi) {
	this.Ten = ten
	this.HocPhi = hocphi
}

KhoaHoc.prototype.mota = function() {
	console.log(`Hello ${this.Ten} ${this.HocPhi}`)
}

let nodejs = new KhoaHoc("Lập trình nodejs", 800000)
nodejs.mota()

//Code 2
class KhoaHoc {
	constructor(ten, hocphi) {
		this.Ten = ten
		this.HocPhi = hocphi
	}
} // Khoa hoc se co hanh dong la mota xuat ra man hinh Xin chao + Ten + Hoc phi
KhoaHoc.prototype.mota = function() {
	console.log("Xin chao, " + this.Ten + " " + this.HocPhi)
}
//Khai bao bien
var nodejs = new KhoaHoc("Lap trinh Nodejs", 80000) //Goi ham
nodejs.mota()
