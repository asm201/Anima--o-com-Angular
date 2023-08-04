import { animate, state, style, transition, trigger } from '@angular/animations';

export const highligthedStateTrigger = trigger('highligthedState', [
  state('default', style({
    border: '2px solid #B2B6FF'
  })),
  state('highligthed',style({
    border: '4px solid #B2B6FF',
    filter: 'brightness(92%)'
  })),
  transition('defaukt => highligthed',[
    animate('200ms esae-out', style({
      transform: 'scale(1.02)'
    })),
    animate(200)
  ])
])

export const shownStateTrigger = trigger('shownState',[
  //transition('void => *', [
  transition(':enter', [
    style({
      opacity: 0
    }),
    animate(300, style({
      opacity: 1
    }))
  ]),
  //transition('* => void', [
  transition(':leave', [
    animate(300, style({
      opacity: 0
    }))
  ])
])

export const checkButtonTrigger = trigger('checkButton', [
  transition('* => checked', [
    animate('400ms ease-in', style({
      transform: 'scale(0.4)',
    })),
  ]),
])

