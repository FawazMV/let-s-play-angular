import { Component, Input, OnInit } from '@angular/core'
import { FormArray, FormBuilder, FormGroup } from '@angular/forms'

@Component({
  selector: 'app-image-input',
  templateUrl: './image-input.component.html',
  styleUrls: ['./image-input.component.css']
})
export class ImageInputComponent implements OnInit {
  imagePreviews: string[] = []

  @Input() form!: FormGroup
  @Input() defaultImages!: { location: string }[]

  constructor (private fb: FormBuilder) {}

  ngOnInit (): void {
    if (this.defaultImages?.length) {
      this.imagePreviews = this.defaultImages.map(x => x.location)
    }
  }

  get images (): FormArray {
    return this.form.get('images') as FormArray
  }

  handleImageInput (event: Event) {
    const files: FileList | null = (event.target as HTMLInputElement).files

    if (files && files.length > 0) {
      this.imagePreviews = []
      for (let i = 0; i < files.length; i++) {
        const file: File = files[i]
        this.images.push(this.fb.control(file)) // Add the selected files to the FormArray
        this.previewImage(file)
      }
    }
  }

  private previewImage (file: File) {
    const reader = new FileReader()
    reader.onload = () => {
      this.imagePreviews.push(reader.result as string)
    }
    reader.readAsDataURL(file)
  }
}
