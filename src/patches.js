// 0 'num_flipped',
// 1 'num_correct_before',
// 2 'percentage_flipped',
// 3 'prob_target_before',
// 4 'prob_target_after',
// 5 'delta_prob'; 


export default [

  {
    name: "train",
    comparison: [507, 982],
    patches: [
      { dynamic: ['729', '827', '88.1', '3.7', '64.0', '+60.3'], static: ['595', '827', '71.9', '3.7', '50.5', '+46.8'] },
      { dynamic: ['690', '827', '83.4', '3.7', '56.7', '+53.0'], static: ['505', '827', '61.1', '3.7', '43.4', '+39.7'] },
      { dynamic: ['764', '827', '92.4', '3.7', '70.6', '+66.9'], static: ['586', '827', '70.9', '3.7', '53.1', '+49.4'] },
      { dynamic: ['769', '827', '93.0', '3.7', '70.4', '+66.7'], static: ['677', '827', '81.9', '3.7', '58.5', '+54.8'] },
      { dynamic: ['728', '827', '88.0', '3.7', '62.5', '+58.8'], static: ['531', '827', '64.2', '3.7', '47.2', '+43.4'] },
      { dynamic: ['707', '827', '85.5', '3.7', '55.7', '+52.0'], static: ['503', '827', '60.8', '3.7', '41.5', '+37.7'] },
      { dynamic: ['713', '827', '86.2', '3.7', '61.2', '+57.4'], static: ['546', '827', '66.0', '3.7', '47.6', '+43.9'] },
      { dynamic: ['464', '827', '56.1', '3.7', '34.5', '+30.7'], static: ['297', '827', '35.9', '3.7', '21.3', '+17.6'] },
      { dynamic: ['761', '827', '92.0', '3.7', '68.5', '+64.8'], static: ['562', '827', '68.0', '3.7', '50.2', '+46.5'] },
      { dynamic: ['706', '827', '85.4', '3.7', '61.3', '+57.6'], static: ['607', '827', '73.4', '3.7', '53.9', '+50.2'] },
    ],
    noise:
      { dynamic: ['115', '827', '13.9', '3.7', '13.2', '+9.5'], static: ['35', '827', '4.2', '3.7', '5.4', '+1.7'] },

  },
  {
    name: "baseball",
    comparison: [6, 442],
    patches: [
      { dynamic: ['578', '874', '66.1', '1.8', '46.2', '+44.4'], static: ['253', '874', '28.9', '1.8', '24.7', '+22.9']},
      { dynamic: ['387', '874', '44.3', '1.8', '36.7', '+34.9'], static: ['210', '874', '24.0', '1.8', '23.1', '+21.2']},
      { dynamic: ['504', '874', '57.7', '1.8', '47.4', '+45.6'], static: ['260', '874', '29.7', '1.8', '28.0', '+26.2']},
      { dynamic: ['350', '874', '40.0', '1.8', '32.7', '+30.9'], static: ['130', '874', '14.9', '1.8', '16.9', '+15.1']},
      { dynamic: ['281', '874', '32.2', '1.8', '26.8', '+25.0'], static: ['139', '874', '15.9', '1.8', '15.5', '+13.6']},
      { dynamic: ['394', '874', '45.1', '1.8', '33.8', '+31.9'], static: ['185', '874', '21.2', '1.8', '20.4', '+18.5']},
      { dynamic: ['233', '874', '26.7', '1.8', '20.8', '+18.9'], static: ['81', '874', '9.3', '1.8', '10.9', '+9.1']},
      { dynamic: ['429', '874', '49.1', '1.8', '39.5', '+37.7'], static: ['243', '874', '27.8', '1.8', '25.9', '+24.1']},
      { dynamic: ['239', '874', '27.3', '1.8', '19.6', '+17.8'], static: ['98', '874', '11.2', '1.8', '10.7', '+8.8']},
      { dynamic: ['144', '874', '16.5', '1.8', '12.2', '+10.4'], static: ['40', '874', '4.6', '1.8', '5.0', '+3.2']},
    ],
    noise: 
      { dynamic: ['99', '874', '11.3', '1.8', '12.1', '+10.2'], static: ['38', '874', '4.3', '1.8', '5.9', '+4.0']},
  },
  {
    name: "noodles",
    comparison: [671, 672],
    patches: [
      { dynamic: ['175', '624', '28.0', '10.3', '25.9', '+15.6'], static: ['77', '624', '12.3', '10.3', '14.8', '+4.6']},
      { dynamic: ['481', '624', '77.1', '10.3', '53.2', '+42.9'], static: ['350', '624', '56.1', '10.3', '39.5', '+29.2']},
      { dynamic: ['452', '624', '72.4', '10.3', '48.6', '+38.4'], static: ['259', '624', '41.5', '10.3', '33.9', '+23.7']},
      { dynamic: ['266', '624', '42.6', '10.3', '32.1', '+21.8'], static: ['146', '624', '23.4', '10.3', '21.7', '+11.4']},
      { dynamic: ['177', '624', '28.4', '10.3', '25.4', '+15.2'], static: ['78', '624', '12.5', '10.3', '15.0', '+4.8']},
      { dynamic: ['303', '624', '48.6', '10.3', '38.3', '+28.0'], static: ['165', '624', '26.4', '10.3', '25.4', '+15.1']},
      { dynamic: ['408', '624', '65.4', '10.3', '41.7', '+31.4'], static: ['258', '624', '41.3', '10.3', '29.6', '+19.4']},
      { dynamic: ['180', '624', '28.8', '10.3', '25.5', '+15.2'], static: ['88', '624', '14.1', '10.3', '17.2', '+6.9']},
      { dynamic: ['151', '624', '24.2', '10.3', '24.9', '+14.6'], static: ['66', '624', '10.6', '10.3', '15.6', '+5.3']},
      { dynamic: ['206', '624', '33.0', '10.3', '28.5', '+18.2'], static: ['108', '624', '17.3', '10.3', '17.6', '+7.3']},
    ],
    noise: 
      { dynamic: ['114', '624', '18.3', '10.3', '19.5', '+9.2'], static: ['29', '624', '4.6', '10.3', '11.0', '+0.7']},

  }
]