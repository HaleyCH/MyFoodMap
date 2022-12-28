const city_cast = {
    '成都': ['沈庭宇'],
    '十堰': ['刘哲荣'],
    '上饶': ['袁承哲'],
    '北碚区': ['吴维泽'],
    '杭州': ['陈子锐', '罗言', '袁婉婷', '黄一舟', '岑羽棉', '胡嘉欣', '王倩倩', '宋杭恬', '张立婧', '胡昊', '孙奕', '徐豪', '徐梦棋'],
    '海淀区': ['黄郭为'],
    '海口': ['岑禹葳'],
    '绍兴': ['潘梁'],
    '济南': ['翁锦程'],
    '珠海': ['杨莹'],
    '金华': ['周诗美', '龚磊', '周承启'],
    '嘉定区': ['叶楠'],
    '九龙城区': ['李卓然'],
    '钦州': ['李希萌'],
    '宁波': ['胡展睿', '朱籽涵', '谢冰月', '丁婧婧'],
    '温州': ['李晓晓'],
    '湖州': ['张婕妤'],
    '合肥': ['卢镜涵'],
    '吉隆坡': ['舒樊恒'],
    '嘉兴': ['孙鑫怡', '胡唯园'],
    '太原': ['徐嘉余'],
    '泉州': ['王凯'],
    '成都市': ['沈庭宇'],
    '十堰市': ['刘哲荣'],
    '上饶市': ['袁承哲'],
    '北碚区市': ['吴维泽'],
    '杭州市': ['陈子锐', '罗言', '袁婉婷', '黄一舟', '岑羽棉', '胡嘉欣', '王倩倩', '宋杭恬', '张立婧', '胡昊', '孙奕', '徐豪', '徐梦棋'],
    '海淀区': ['黄郭为'],
    '海口市': ['岑禹葳'],
    '绍兴市': ['潘梁'],
    '济南市': ['翁锦程'],
    '珠海市': ['杨莹'],
    '金华市': ['周诗美', '龚磊', '周承启'],
    '嘉定区市': ['叶楠'],
    '九龙城区': ['李卓然'],
    '钦州市': ['李希萌'],
    '宁波市': ['胡展睿', '朱籽涵', '谢冰月', '丁婧婧'],
    '温州市': ['李晓晓'],
    '湖州市': ['张婕妤'],
    '合肥市': ['卢镜涵'],
    '吉隆坡市': ['舒樊恒'],
    '嘉兴市': ['孙鑫怡', '胡唯园'],
    '太原市': ['徐嘉余'],
    '泉州市': ['王凯']
}

const prov_cast = {
    '山东': ['济南市'],
    '香港': ['九龙城区'],
    '山西': ['太原市'],
    '江西': ['上饶市'],
    '四川': ['成都市'],
    '马来西亚': ['吉隆坡市'],
    '湖北': ['十堰市'],
    '北京': ['海淀区'],
    '安徽': ['合肥市'],
    '广西': ['钦州市'],
    '海南': ['海口市'],
    '广东': ['珠海市'],
    '上海': ['嘉定区市'],
    '重庆': ['北碚区市'],
    '福建': ['泉州市'],
    '浙江': ['金华市', '杭州市', '温州市', '宁波市', '绍兴市', '嘉兴市', '湖州市']
}

const name_cast = {
    '翁锦程': ['山东', '济南市'],
    '李卓然': ['香港', '九龙城区'],
    '徐嘉余': ['山西', '太原市'],
    '袁承哲': ['江西', '上饶市'],
    '沈庭宇': ['四川', '成都市'],
    '舒樊恒': ['马来西亚', '吉隆坡市'],
    '刘哲荣': ['湖北', '十堰市'],
    '黄郭为': ['北京', '海淀区'],
    '卢镜涵': ['安徽', '合肥市'],
    '李希萌': ['广西', '钦州市'],
    '岑禹葳': ['海南', '海口市'],
    '杨莹': ['广东', '珠海市'],
    '叶楠': ['上海', '嘉定区市'],
    '吴维泽': ['重庆', '北碚区市'],
    '王凯': ['福建', '泉州市'],
    '周诗美': ['浙江', '金华市'],
    '陈子锐': ['浙江', '杭州市'],
    '罗言': ['浙江', '杭州市'],
    '袁婉婷': ['浙江', '杭州市'],
    '黄一舟': ['浙江', '杭州市'],
    '李晓晓': ['浙江', '温州市'],
    '胡展睿': ['浙江', '宁波市'],
    '朱籽涵': ['浙江', '宁波市'],
    '龚磊': ['浙江', '金华市'],
    '岑羽棉': ['浙江', '杭州市'],
    '胡嘉欣': ['浙江', '杭州市'],
    '王倩倩': ['浙江', '杭州市'],
    '宋杭恬': ['浙江', '杭州市'],
    '张立婧': ['浙江', '杭州市'],
    '潘梁': ['浙江', '绍兴市'],
    '胡昊': ['浙江', '杭州市'],
    '孙奕': ['浙江', '杭州市'],
    '徐豪': ['浙江', '杭州市'],
    '孙鑫怡': ['浙江', '嘉兴市'],
    '胡唯园': ['浙江', '嘉兴市'],
    '谢冰月': ['浙江', '宁波市'],
    '张婕妤': ['浙江', '湖州市'],
    '周承启': ['浙江', '金华市'],
    '徐梦棋': ['浙江', '杭州市'],
    '丁婧婧': ['浙江', '宁波市']
}

var provs = ['上海', '北京', '四川', '安徽', '山东', '山西', '广东', '广西', '江西', '浙江', '海南', '湖北', '福建', '重庆', '香港', '马来西亚']


const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay))

const colorSet = ['#e33d94', '#e3ba8f', '#ff4c30', '#6e304b', '#1c474d', '#848ccf', '#006992']

function randomColorString() {
    var color = colorSet[Math.round(Math.random() * 100 % colorSet.length)]
    console.log(color)
    return color
}

function appendBack() {
    console.log("Append Back.")
    const root = document.getElementById("root");
    let back = document.createElement("div");
    back.width = '50%'
    back.className = 'item'
    back.style.backgroundColor = randomColorString()
    back.style.height = '150px'
    back.style.backgroundImage = ""
    back.style.alignItems = "center"
    back.style.justifyContent = 'center'
    console.log(back)
    back.setAttribute('onclick', 'initRoot()')
    let innerText1 = document.createElement("div")
    innerText1.className = 'item-text-1'
    let innerText2 = document.createElement("div")
    innerText2.className = 'item-text-2'

    let span1 = document.createElement("span")
    let span2 = document.createElement("span")
    span1.innerText = "Back"
    span1.style.fontSize = '36px'

    innerText1.appendChild(span1)
    innerText2.appendChild(span2)

    back.appendChild(innerText1)
    back.appendChild(innerText2)

    root.appendChild(back)
}

function insertItem(id, type, onclick, span1Text) {
    if (type === 1) {
        const root = document.getElementById("root");
        let newItem = document.createElement("div");
        newItem.style.backgroundColor = randomColorString()
        newItem.className = 'item'
        newItem.setAttribute('onclick', "selectCity('" + span1Text + "');")

        newItem.style.backgroundImage = "url('https://picsum.photos/500/300?" + id.toString() + "')"

        let innerText1 = document.createElement("div")
        innerText1.className = 'item-text-1'
        let innerText2 = document.createElement("div")
        innerText2.className = 'item-text-2'

        let span1 = document.createElement("span")
        span1.innerText = span1Text
        let span2 = document.createElement("span")

        innerText1.appendChild(span1)
        innerText2.appendChild(span2)

        newItem.appendChild(innerText1)
        newItem.appendChild(innerText2)

        root.appendChild(newItem)
        return newItem
    } else {
        const root = document.getElementById("root");
        let newItem = document.createElement("div");
        newItem.style.backgroundColor = randomColorString()
        newItem.className = 'item'
        newItem.style.width = '90%'
        newItem.style.minHeight = '150px'
        newItem.style.backgroundImage = ""
        newItem.style.alignItems = "center"
        newItem.setAttribute('onclick', onclick)

        let innerText1 = document.createElement("div")
        innerText1.className = 'item-text-1'
        let innerText2 = document.createElement("div")
        innerText2.className = 'item-text-2'

        let span1 = document.createElement("span")
        span1.innerText = span1Text
        let span2 = document.createElement("span")

        innerText1.appendChild(span1)
        innerText2.appendChild(span2)

        newItem.appendChild(innerText1)
        newItem.appendChild(innerText2)

        root.appendChild(newItem)

        return newItem
    }
}


async function cleanRoot() {
    var root = document.getElementById('root')
    while (root.lastChild) {
        root.removeChild(root.lastChild)
        await sleep(10)
    }
}

async function initRoot() {
    await cleanRoot()
    var root = document.getElementById('root')
    for (var i = 0; i < provs.length; ++i) {
        insertItem(i, 1, '', provs[i])
    }
    var top = document.getElementById('top')
    top.style.backgroundColor = ''
    top.innerText = '蹭饭@科三二班'
    console.log("Init Finish")
}

async function selectCity(cityName) {
    var root = document.getElementById("root")
    var top = document.getElementById("top")

    top.innerText = "蹭饭@" + cityName

    var childs = document.getElementsByClassName("item")

    var citys = prov_cast[cityName]
    console.log(citys)
    if (citys === null) return;

    var minLength = 0
    if (citys.length > childs.length) {
        minLength = childs.length
    } else {
        minLength = citys.length
    }
    for (var i = 0; i < minLength; ++i) {
        childs[i].style.backgroundColor = randomColorString()
        childs[i].style.width = '90%'
        childs[i].style.minHeight = '150px'
        childs[i].style.backgroundImage = ""
        childs[i].style.alignItems = "center"
        childs[i].setAttribute('onclick', '')
        if (childs[i] === null || childs[i].firstElementChild === null) {
            continue
        }
        var text = childs[i].firstElementChild.firstElementChild

        text.style.marginTop = '0';
        text.innerHTML = citys[i]
        await sleep(100)
    }
    if (minLength === childs.length) {
        console.log("Insert " + (citys.length - minLength).toString() + " items.")
        for (var i = minLength; i < citys.length; ++i) {
            insertItem(i, 2, '', citys[i])
            await sleep(100)
        }
    } else {
        console.log("Remove " + (childs.length - minLength).toString() + " items.")
        console.log("MinLength " + minLength.toString())
        console.log("ChildLength " + childs.length.toString())
        console.log("CityLength " + citys.length.toString())
        var clen = childs.length
        for (var i = minLength; i < clen; ++i) {
            console.log([root.children.length, i])
            root.removeChild(root.lastChild)
        }
    }

    childs = document.getElementsByClassName("item")
    console.log(childs)
    for (var i = 0; i < childs.length; ++i) {
        var cityName = childs[i].firstElementChild.firstElementChild.textContent
        var c_people = city_cast[cityName]
        if (c_people == null) continue
        for (var j = 0; j < c_people.length; ++j) {
            var newSpan = document.createElement("span")
            newSpan.textContent = c_people[j]
            childs[i].lastElementChild.appendChild(newSpan)
            await sleep(50)
        }
    }


    appendBack()
}