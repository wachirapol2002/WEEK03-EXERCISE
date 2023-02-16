function mapToSquare (input) {
    // TODO ใช้ .map สร้าง array ที่เป็นเลขยกกำลังสองของ input
    return input.map(x => x ** 2)
}

function convertTemperature (input) {
    // TODO: ให้แปลงอุณหภูมิจาก °F เป็น °C โดยใช้ฟังก์ชัน .map()
    copyinput = structuredClone(input)
    function fah_to_celsius (fah) {
        let cel = (fah - 32) * 5 / 9
        return Number(cel.toFixed(1))
    }
    copyinput.forEach((index) => {
        index.temperature = fah_to_celsius (index.temperature) 
    });
    return copyinput
}

function filterEvenNumber (input) {
    // TODO: filter input เอาเลขคู่เท่านั้น
    return input.filter(num => num%2 == 0)
}

function filterAgeRange (input) {
    // TODO: กรอง input.people ตามช่วงอายุ
    return input.people.filter(person => (person.age >= input.min && person.age <= input.max))
}

function removeByFilter (input) {
    // TODO: ลบ Object ใน Array ด้วยการ filter
    return input.people.filter(person => (person.id != input.removeId))
}

function replaceBySplice (input) {
    // TODO: ให้ใช้ฟังก์ชัน .splice() ในการ **เปลี่ยน (replace)** สมาชิกใน Array  
    // เรียงลำดับตัวเลขให้ถูกต้อง
    for (let index = 0; index < input.length; index++) {
        input.splice(index, 1, index);
    }
    return input;
}
