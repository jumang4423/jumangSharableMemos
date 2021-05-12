const fetchurl = '*'

// 問題だけを抽出する関数

// result should be like...
// [
//   {
//     mlit_m_mendan_id: 1,
//     koumoku: ["設問１", "設問２"]
//   },
//   {
//     mlit_m_mendan_id: 2,
//     koumoku: ["設問１", "設問２"]
//   },
// ]

const mendanMondaiTransformer = (ary: any) => {
  let Q = []
  const problemId = [8, 10, 12] 
  problemId.map((id: number) => {
    let komoku = []
    ary.map((d: object) => {
      if(id === d["mlit_m_mendan_id"]) komoku.push (d["mlit_m_mendan_sentaku"])
    })
    Q.push({mlit_m_mendan_id: id, komoku: komoku})
  })

  return Q
}

// APIを叩く関数
export const getMendanMondai = async (session_id: any) => {
  const { data } = await axios.post<any>(`${fetchurl}${session_id}`, { questions })
  return data
}

//　設問２ && 面談ID === 8, 10 or 12
const questions = (kubunId: string) => {
  return `
  select mlit_m_mendan_id, mlit_m_mendan_sentaku, mlit_m_mendan_sentaku_id
  from v_mlit_mendan_mondai 
  where v_mlit_mendan_mondai.mlit_m_mendan_kubun_id = 2 
  and mlit_m_mendan_id = 8 
  or mlit_m_mendan_id = 10 
  or mlit_m_mendan_id = 12`
}

const result = mendanMondaiTransformer(getMendanMondai("TEST"))