import { Component } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css'],
})
export class TestimonialsComponent {
  testimonials = [
    { title: 'Testimonial 1', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { title: 'Testimonial 2', content: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.' },
    { title: 'Testimonial 3', content: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.' }
  ];
  currentSlide = 0;

  goToSlide(index: number) {
    
    this.currentSlide = index;
  }

  getCurrentContent() {
    return this.testimonials[this.currentSlide].content;
  }
}
