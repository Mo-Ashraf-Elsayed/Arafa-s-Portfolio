import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-blog-list',
    imports: [CommonModule, RouterLink],
    templateUrl: './blog-list.component.html',
    styleUrl: './blog-list.component.scss'
})
export class BlogListComponent {
  blogPosts = [
    {
      img: 'assets/img/media/img-18.jpg',
      title: 'Designing for the Senses: The Role of Sensory UX',
      meta1: 'UXACTION',
      meta2: 'Sense Of UX',
      link: 'blog-details.html'
    },
    {
      img: 'assets/img/media/img-19.jpg',
      title: 'Responsive Design: Ensuring Your Site Looks Great',
      meta1: 'UXACTION',
      meta2: 'Sense Of UX',
      link: 'blog-details.html'
    },
    {
      img: 'assets/img/media/img-20.jpg',
      title: 'Designing for Virtual Reality: A New Dimension of Creativity',
      meta1: 'UXACTION',
      meta2: 'Sense Of UX',
      link: 'blog-details.html'
    },
    {
      img: 'assets/img/media/img-21.jpg',
      title: 'Navigating the Color Wheel: Psychology of Design Colors',
      meta1: 'UXACTION',
      meta2: 'Sense Of UX',
      link: 'blog-details.html'
    },
    {
      img: 'assets/img/media/img-22.jpg',
      title: 'Crafting Meaningful Design Experience',
      meta1: 'UXACTION',
      meta2: 'Sense Of UX',
      link: 'blog-details.html'
    },
    {
      img: 'assets/img/media/img-23.jpg',
      title: 'Responsive Web Design: The Showcase Design',
      meta1: 'UXACTION',
      meta2: 'Sense Of UX',
      link: 'blog-details.html'
    }
  ];

}
