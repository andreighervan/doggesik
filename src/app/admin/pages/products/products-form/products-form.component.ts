import { Location } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CategoriesService } from '../../../../products/services/categories.service';
import { Product } from '../../../../products/models/product';
import { ProductsService } from '../../../../products/services/products.service';
import { MessageService } from 'primeng/api';
import { Subject, timer } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AngularEditorConfig } from '@kolkov/angular-editor';

@Component({
  selector: 'admin-products-form',
  templateUrl: './products-form.component.html',
  styles: []
})
export class ProductsFormComponent implements OnInit, OnDestroy {
  editmode = false;
  form: FormGroup;
  isSubmitted = false;
  catagories = [];
  imageDisplay: string | ArrayBuffer;
  currentProductId: string;
  endsubs$: Subject<any> = new Subject();

  editorConfig: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: 'auto',
    minHeight: '250px',
    maxHeight: 'auto',
    width: 'auto',
    minWidth: '0',
    translate: 'yes',
    enableToolbar: true,
    showToolbar: true,
    placeholder: 'Enter text here...',
    defaultParagraphSeparator: '',
    defaultFontName: '',
    defaultFontSize: '',
    fonts: [
      { class: 'arial', name: 'Arial' },
      { class: 'times-new-roman', name: 'Times New Roman' },
      { class: 'calibri', name: 'Calibri' },
      { class: 'comic-sans-ms', name: 'Comic Sans MS' }
    ],
    customClasses: [
      {
        name: 'quote',
        class: 'quote',
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: 'titleText',
        class: 'titleText',
        tag: 'h1',
      },
    ],
    uploadUrl: 'http://localhost:3000/api/v1/public/upload/',
    uploadWithCredentials: false,
    sanitize: true,
    toolbarPosition: 'top',
    toolbarHiddenButtons: [
      []
    ]
  };

  constructor(
    private formBuilder: FormBuilder,
    private productsService: ProductsService,
    private categoriesService: CategoriesService,
    private messageService: MessageService,
    private location: Location,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this._initForm();
    this._getCategories();
    this._checkEditMode();
  }

  ngOnDestroy() {
    this.endsubs$.next();
    this.endsubs$.complete();
  }

  private _initForm() {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      category: ['', Validators.required],
      description: ['', Validators.required],
      richDescription: [''],
      image: ['', Validators.required],
      isFeatured: [false]
    });
  }

  private _getCategories() {
    this.categoriesService
      .getCategories()
      .pipe(takeUntil(this.endsubs$))
      .subscribe((categories) => {
        this.catagories = categories;
      });
  }

  private _addProduct(productData: FormData) {
    this.productsService
      .createProduct(productData)
      .pipe(takeUntil(this.endsubs$))
      .subscribe(
        (product: Product) => {
          this.messageService.add({
            severity: 'success',
            summary: 'Success',
            detail: `Post ${product.name} is created!`
          });
          timer(2000)
            .toPromise()
            .then(() => {
              this.location.back();
            });
        },
        () => {
          this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: 'Post is not created!'
          });
        }
      );
  }

  private _updateProduct(productFormData: FormData) {
    this.productsService
      .updateProduct(productFormData, this.currentProductId)
      .pipe(takeUntil(this.endsubs$))
      .subscribe(
        () => {
          this.messageService.add({
            severity: 'success',
            summary: 'Success',
            detail: 'Post is updated!'
          });
          timer(2000)
            .toPromise()
            .then(() => {
              this.location.back();
            });
        },
        () => {
          this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: 'Post is not updated!'
          });
        }
      );
  }

  private _checkEditMode() {
    this.route.params.pipe(takeUntil(this.endsubs$)).subscribe((params) => {
      if (params.id) {
        this.editmode = true;
        this.currentProductId = params.id;
        this.productsService
          .getProduct(params.id)
          .pipe(takeUntil(this.endsubs$))
          .subscribe((product) => {
            this.productForm.name.setValue(product.name);
            this.productForm.category.setValue(product.category.id);
            this.productForm.isFeatured.setValue(product.isFeatured);
            this.productForm.description.setValue(product.description);
            this.productForm.richDescription.setValue(product.richDescription);
            this.imageDisplay = product.image;
            this.productForm.image.setValidators([]);
            this.productForm.image.updateValueAndValidity();
          });
      }
    });
  }

  onSubmit() {
    this.isSubmitted = true;
    if (this.form.invalid) return;

    const productFormData = new FormData();
    Object.keys(this.productForm).map((key) => {
      productFormData.append(key, this.productForm[key].value);
    });
    if (this.editmode) {
      this._updateProduct(productFormData);
    } else {
      this._addProduct(productFormData);
    }
  }
  onCancle() {
    this.location.back();
  }

  onImageUpload(event) {
    const file = event.target.files[0];
    if (file) {
      this.form.patchValue({ image: file });
      this.form.get('image').updateValueAndValidity();
      const fileReader = new FileReader();
      fileReader.onload = () => {
        this.imageDisplay = fileReader.result;
      };
      fileReader.readAsDataURL(file);
    }
  }

  get productForm() {
    return this.form.controls;
  }
}
