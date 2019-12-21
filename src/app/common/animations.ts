
import {  trigger, transition, style, animate, state } from '@angular/animations';

export let fade = trigger('fade', [

    state('void',style({ backgroundColor: '#caa', opacity: 0})),

    transition('void <=> *', [      // ':enter, :leave'
        animate(1500)
    ])
])

  
export let slide = trigger('slide', [

    transition(':enter', [      // 'void => *'
        style({ transform: 'translateY(-50px)'}),
        animate(500)
    ])
])