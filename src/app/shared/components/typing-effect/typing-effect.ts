import {
  Component,
  Input,
  OnInit,
  OnDestroy,
  signal,
  ChangeDetectionStrategy,
} from '@angular/core';

@Component({
  selector: 'app-typing-effect',
  imports: [],
  templateUrl: './typing-effect.html',
  styleUrl: './typing-effect.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TypingEffect implements OnInit, OnDestroy {
  @Input() words: string[] = [];
  @Input() typeSpeed = 80;
  @Input() deleteSpeed = 40;
  @Input() pauseTime = 1500;

  displayedText = signal('');
  private wordIndex = 0;
  private charIndex = 0;
  private isDeleting = false;
  private timeoutId?: ReturnType<typeof setTimeout>;

  ngOnInit(): void {
    if (this.words.length > 0) {
      this.tick();
    }
  }

  ngOnDestroy(): void {
    if (this.timeoutId) clearTimeout(this.timeoutId);
  }

  private tick(): void {
    const currentWord = this.words[this.wordIndex];
    const currentText = this.displayedText();

    if (!this.isDeleting) {
      // On écrit lettre par lettre
      const nextText = currentWord.substring(0, currentText.length + 1);
      this.displayedText.set(nextText);

      if (nextText === currentWord) {
        // Mot complet → pause puis on efface
        this.isDeleting = true;
        this.timeoutId = setTimeout(() => this.tick(), this.pauseTime);
        return;
      }
      this.timeoutId = setTimeout(() => this.tick(), this.typeSpeed);
    } else {
      // On efface lettre par lettre
      const nextText = currentWord.substring(0, currentText.length - 1);
      this.displayedText.set(nextText);

      if (nextText === '') {
        this.isDeleting = false;
        this.wordIndex = (this.wordIndex + 1) % this.words.length;
        this.timeoutId = setTimeout(() => this.tick(), this.typeSpeed);
        return;
      }
      this.timeoutId = setTimeout(() => this.tick(), this.deleteSpeed);
    }
  }
}