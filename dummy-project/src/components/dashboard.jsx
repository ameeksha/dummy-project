// import React from 'react';

// const Dashboard = () => {
//     return (

//         <div className="row">
//   <div className="col-lg-9">
//     <div className="row">
//       <div className="col-lg-12">
//         <div className="card box-shadow2">
//           <div className="d-flex p-4">
//             <div className="d-inline-block mr-auto ml-auto">
//               <span className="digit"><img src="assets/images/bomb_ico.svg" alt=""/></span>
//               <div className="desc">
//                 <span className="title font-size-24">16</span>
//                 <p># of Due Task</p>
//               </div>
//             </div>
//             <div className="divider"></div>
//             <div className="d-inline-block mr-auto ml-auto">
//               <span className="digit"><img src="assets/images/overdue_ico.svg" alt=""/></span>
//               <div className="desc">
//               <span className="title font-size-24">06</span>
//               <p># of Overdue Task</p>
//             </div>
//             </div>
//             <div className="divider"></div>
//             <div className="d-inline-block  mr-auto ml-auto">
//               <span className="digit"><img src="assets/images/process_ico.svg" alt=""/></span>
//               <div className="desc">
//               <span className="title font-size-24">04</span>
//               <p># of Projects in Process</p>
//             </div>
//             </div>
//             <div className="divider"></div>
//             <div className="d-inline-block  mr-auto ml-auto">
//               <span className="digit"><img src="assets/images/pending_ico.svg" alt=""/></span>
//               <div className="desc">
//               <span className="title font-size-24">10</span>
//               <p># of Project Pending</p>
//             </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="col-lg-12">
//         <div className="card">
//           <div className="card-header">
//             <strong>My Schedule</strong>
//             <div className="pull-right">
//               <div className="btn-group">
//                 <div className="btn btn-default btn-sm"
//                     //  (click)="setView(CalendarView.Week)"
//                     //  [class.active]="options.view === CalendarView.Week"
//                      >
//                   Week
//                 </div>
//                 <div className="btn btn-default btn-sm"
//                     //  (click)="setView(CalendarView.Month)"
//                     //  [class.active]="options.view === CalendarView.Month"
//                     >
//                   Month
//                 </div>
//                 <div className="btn btn-default btn-sm"
//                     //  (click)="setView(CalendarView.Day)"
//                     //  [class.active]="options.view === CalendarView.Day"
//                      >
//                   Today
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="card-body overflow-auto">
//             <div >
//               <div >Day</div>
//               <div className="timeline" >
//                 <div className="timeline-header">
//                   <div className="row">
//                     <div className="col-md-12">
//                       <div className="title">
//                         <div className="btn-group">
//                           <div className="btn btn-default btn-sm" >
//                             <i className="fa fa-angle-left font-size-16"></i>
//                           </div>
//                           <div className="btn btn-default btn-sm pl-1 pr-1">
//                             {/* <nz-week-picker *ngIf="options.view === CalendarView.Week" [(ngModel)]="selectedDate" (ngModelChange)="onChange($event)" [nzDisabledDate]="disabledDate"></nz-week-picker>
//                             <nz-month-picker *ngIf="options.view === CalendarView.Month" [(ngModel)]="selectedDate" (ngModelChange)="onChange($event)" [nzDisabledDate]="disabledDate"></nz-month-picker> */}
//                             {/* {{options.startDate | date : this.options.dateFormat }} - {{options.endDate | date : this.options.dateFormat}} */}
//                           </div>
//                           <div className="btn btn-default btn-sm" >
//                             <i className="fa fa-angle-right font-size-16"></i>
//                           </div>
//                         </div>
//                       </div>
//                       <div className="timeline-date">
//                         <div className="day"  >
//                           <div className="text-light font-size-12">date.day</div>
//                           <span className="text-black font-size-12">date.date</span>
//                         </div>
//                         <div className="total">Total</div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="timeline-body">
//                   <div className="row" >
//                     <div className="col-md-12">
//                       <div className="title">
//                         <div><i className="fa fa-square pr-1" ></i><span className="text-light">project.name</span></div>

//                       </div>
//                       <div className="timeline-date">
//                         <div className="day" >
//                           <span className="text-dark">2.5h</span>
//                           <div className="h-divider"></div>
//                         </div>
//                         <div className="total">
//                           <span className="text-dark">8.15h</span>
//                           <div className="h-divider"></div>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="col-md-12" ><div className="divider"></div></div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
//   <div className="col-lg-3">
//     <div className="row">
//       <div className="col-lg-12">
//         <div className="card work-log">
//           <div className="row">
//             <div className="col-6 text-left">
//               <div className="card-body">
//                 <div className="font-weight-bold">WORK LOG</div>
//                 <div className="font-size-20 text-success mt-2">05:18:32</div>
//                 <p>Total work time</p>
//               </div>
//             </div>
//             <div className="col-6 text-right">
//               <div className="card-body">
//                 <div className="text-purple">Clock Out</div>
//                 <div className="mt-4 text-black">selectedDate | date</div>
//                 <p>selectedDate | date </p>
//               </div>
//             </div>
//           </div>
//           <div className="divider"></div>
//           <div className="row">
//             <div className="col-6 text-left">
//               <div className="card-body">
//                 <div className="text-dark"><img src="assets/images/timer_ico.svg" alt=""/> Clock in time</div>
//                 <span className="text-danger pl-4">09:36:12</span>
//               </div>
//             </div>
//             <div className="col-6 text-left">
//               <div className="card-body">
//                 <div className="text-dark"><img src="assets/images/timer_ico.svg" alt=""/>Clock out time</div>
//                 <span className="text-warning pl-4">00:00:00</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="col-lg-12">
//         <div className="card">
//           <div className="card-header">
//               <strong>Work Time Statistics</strong>
//           </div>
//           <div className="card-body">
//             <x-chartist
//               className="ct-chart height-200"

//               type="Bar"

//             >
//             </x-chartist>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>

//     );
// }

// export default Dashboard;



import React from 'react';

const Dashboard = () => {
    return (
        <h1>Dashboard</h1>
    );
}

export default Dashboard;