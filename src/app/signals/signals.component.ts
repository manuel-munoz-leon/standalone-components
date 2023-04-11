import {
  Component,
  EffectRef,
  EnvironmentInjector,
  OnInit,
  computed,
  effect,
  inject,
  runInInjectionContext,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

type Person = {
  name: string;
  lastname: string;
};
@Component({
  selector: 'app-signals',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  templateUrl: './signals.component.html',
  styleUrls: ['./signals.component.scss'],
})
export class SignalsComponent {
  counter = 0;

  title1$ = signal('Reactive');
  title2$ = signal('Programming');
  person = signal<Person>({ name: 'Manu', lastname: 'Munoz' });
  injector = inject(EnvironmentInjector);
  effectSig!: EffectRef;

  headline = computed(() => {
    this.counter++;
    return `${this.title1$()} ${this.title2$()}`;
  });

  changeTitle(): void {
    this.title1$.set('Angular');
    this.title2$.update((value) => `${value} with Singals`);
    this.person.mutate((person) => {
      person.name = 'Juan';
    });
  }

  createEffect() {
    runInInjectionContext(
      this.injector,
      () =>
        (this.effectSig = effect(() => {
          console.log(
            `side effect angular signal after headline changes ${this.headline()}`
          );
        }))
    );
  }

  destroyEffect() {
    this.effectSig?.destroy();
  }
}
