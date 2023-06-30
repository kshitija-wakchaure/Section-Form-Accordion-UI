// accordion.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent {
  sections: any[] = [];
  newSectionHeader: string = '';
  newSectionDetails: string = '';

  onSubmit() {
    if (this.newSectionHeader && this.newSectionDetails) {
      const newSection = {
        header: this.newSectionHeader,
        details: this.newSectionDetails
      };
      this.sections.push(newSection);
      this.resetForm();
    }
  }

  resetForm() {
    this.newSectionHeader = '';
    this.newSectionDetails = '';
  }
}
