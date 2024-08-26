import Component, { PageEl } from '@/components/Libs/Component';
import Copy from '@/components/Libs/Copy';
import Router from 'next/router'
import Window from '@/components/Libs/Window';
import TextBox from '@/components/Libs/TextBox';
import Icon2Titles from '@/components/Libs/Icon2Titles';
import Icon3Titles from '@/components/Libs/Icon3Titles';


export default p => Component(p, Page);
const Page: PageEl = (props, state, refresh, getProps) => {

  let styles = global.styles
  let name = "welcome to uweather"



  return (
    <div style={{ direction: "ltr", minHeight: "11vh",}}>
      <br-x />
      <Window title={name} style={{ minHeight: 200, marginLeft: 10, width: "calc(90% - 20px)" }}>

        <div style={{width:"100%", height:400 , backgroundColor:"#FFF" , textAlign:"left", backgroundImage:'url("/ig.jpg")s'

,borderRadius:10}}><img src="/" alt="" />
         
          <div style={{width:"35%", height:50, backgroundColor:"rgba(2, 50, 70, 0.7)",borderRadius:20, marginTop:0 , marginLeft:230,fontSize:16, boxShadow:"3px 3px #034969" , color:"#ADff"}}>
            <div>
              <br />
              <div style={{float:"left"}}>
                &nbsp;&nbsp;&nbsp;&nbsp;
                {props.p.nearest_area[0].areaName[0].value}
                \
                {props.p.nearest_area[0].country[0].value}
                \
                {props.p.nearest_area[0].region[0].value}
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </div>

             
              <div style={{float:"left",}}>
             
                {props.p.current_condition[0].observation_time}
              </div>
            </div>
          </div>
          <br />
          <div style={{width:"55%", height:300, backgroundColor:"rgba(2, 50, 70, 0.7)",borderRadius:20, marginLeft:160, textAlign:"center",boxShadow:"5px 5px #034969",color:"#ADff" }}>
            <br-xx />
            <img src="/sunn.png" style={{opacity:"0.8"}}/>
            <br />
            <p style={{textAlign:"center", fontSize:16,}}>Temperatur : {props.p.current_condition[0].temp_C}°c</p>
            <br-xx/>
            <p style={{textAlign:"center", fontSize:16,}}>Pressure : {props.p.current_condition[0].pressure}</p>
            <br-xx/>
            <p style={{textAlign:"center", fontSize:16,}}>Humidity : {props.p.current_condition[0].humidity} %</p>
            <br-xx/>
            <p style={{textAlign:"center", fontSize:16,}}>Visibility : {props.p.current_condition[0].visibility} km</p>
            <br-xx/>
            <p style={{textAlign:"center", fontSize:16,}}>WindSpeed : {props.p.current_condition[0].windspeedKmph} kmph</p>
            <br-xx/>
            <p style={{textAlign:"center", fontSize:16,}}>Average Temperatur : {props.p.weather[0].avgtempC}°c</p>
          </div>
        </div>

      </Window>
    </div>
  )
}


export async function getServerSideProps(context) {


  var session = await global.SSRVerify(context)
  var { uid, name, image, imageprop, lang, cchar,
    unit, workspace, servid, servsecret,
    usedquota, quota, quotaunit, status, regdate, expid,
    role, path, devmod, userip, } = session;
   
    let res = await fetch("https://irmapserver.ir/research/api/weather/")
    let data = await res.json()
    let p = data

    console.log("__daaaaaataaaaa__:", p)
 
 
    return {
    props: {
      data: global.QSON.stringify({
        p,
        session,
        // nlangs,
      })
    },
  }
}
