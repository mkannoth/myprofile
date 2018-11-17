import React from 'react'
import { Link } from 'gatsby'
import { Progress } from 'reactstrap';
import Layout from '../components/layout'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../../node_modules/bootstrap/dist/js/bootstrap.min.js'

const SkillsPage = () => (
  <Layout>
 <div style={{'padding-top':'20%'}}>

   <div class="row">
      <div class="col-6 .d-flex">
        <div class="progress" style={{'height': '20px'}}>
          <div class="progress-bar" role="progressbar" style={{width: '25%'}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">Java</div>
          <div class="progress-bar bg-success" role="progressbar" style={{width: '75%'}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">100%</div>
        </div>
      </div>
   </div>
   <div style={{'height': '20px'}}></div>

   <div class="row">
      <div class="col-6 .d-flex">
        <div class="progress" style={{'height': '20px'}}>
          <div class="progress-bar" role="progressbar" style={{width: '25%'}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">Spring</div>
          <div class="progress-bar bg-success" role="progressbar" style={{width: '65%'}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">90%</div>
        </div>
      </div>
   </div>

<div style={{'height': '20px'}}></div>

<div class="row">
   <div class="col-6 .d-flex">
     <div class="progress" style={{'height': '20px'}}>
       <div class="progress-bar" role="progressbar" style={{width: '25%'}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">Hibernate</div>
       <div class="progress-bar bg-success" role="progressbar" style={{width: '65%'}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">90%</div>
     </div>
   </div>
</div>

<div style={{'height': '20px'}}></div>

<div class="w-35 p-1" style={{'background-color': '#eee'}}>
   <div class="col-6 .d-flex .text-nowrap">
     <div class="progress" style={{'height': '20px'}}>
       <div class="progress-bar" role="progressbar" style={{width: '25%'}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">Apache MQ</div>
       <div class="progress-bar bg-success" role="progressbar" style={{width: '55%'}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">70%</div>
     </div>
   </div>
</div>

<div style={{'height': '20px'}}></div>

<div class="row">
   <div class="col-6 .d-flex">
     <div class="progress" style={{'height': '20px'}}>
       <div class="progress-bar" role="progressbar" style={{width: '25%'}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">Docker</div>
       <div class="progress-bar bg-success" role="progressbar" style={{width: '55%'}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">70%</div>
     </div>
   </div>
</div>

<div style={{'height': '20px'}}></div>

<div class="row">
   <div class="col-6 .d-flex">
     <div class="progress" style={{'height': '20px'}}>
       <div class="progress-bar" role="progressbar" style={{width: '25%'}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">Jenkins</div>
       <div class="progress-bar bg-success" role="progressbar" style={{width: '55%'}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">70%</div>
     </div>
   </div>
</div>

 </div>






  </Layout>
)

export default SkillsPage
