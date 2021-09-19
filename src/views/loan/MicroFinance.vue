<template>
  <v-container class="download">
    <div class="download__links">
      <p>Microfinance programme is a banking service provide to unemployed or low income individuals or groups who otherwise would have no other access to financial service. This types of programme member should have grouped account and group should be gurantee for group loan and specific repayement plans for specific time. This types of loan is provided for small business or self-employment.</p> <br>
      <p>Microfinance is the extension of small loans to the very poor, in combination with other financial services, such as savings accounts, training, health services, networking, and peer support. This allows them to pursue entrepreneurial projects that generate extra income, thus helping them to better provide for themselves and their families.</p> <br>
      <p>In this way, microfinance allows families to work to end their own poverty – with dignity. Microfinance programs around the world, using a variety of models, have shown that poor people achieve strong repayment records – often higher than those of conventional borrowers. Repayment rates are high because, through a system of peer support used in many microcredit models, borrowers are responsible for each other’s success and ensure that every member of the group is able to pay back their loans.</p> <br> <br>
      <div class="d-flex flex-column " style="grid-gap: 25px;">  
        <div v-for="a in 5" :key="a">
          <b>Time</b>
          <ul>
            <li>Within 1 Years</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="cards__with__links">
      <Card title="Links" />
      <Card title="Services" /> 
      <Card title="News" />  
    </div>
  </v-container>  
</template>